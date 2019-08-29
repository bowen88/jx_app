<template>
  <div>
    <Edit>
      <div class="return_button">
        <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
      </div>
      <div class="edit_head">标题</div>
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <div class="tag_wrap">
        <span>标签: </span>
        <el-tag
            class="tag_margin"
            :key="tag"
            v-for="tag in labels"
            :closable="true"
            :close-trasition="true"
            @close="handleClose(tag)"
            type="primary"
        >{{ tag }}
        </el-tag>
        <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
      <div class="edit_head">简介</div>
      <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入简介"
          v-model="gist">
      </el-input>
      <div class="edit_head">内容 (Markdown编辑器)</div>
      <div class="markdown">
        <textarea class="markdown_input" v-model="content" @input="update"></textarea>
        <div class="markdown_compiled" v-highlight v-html="compiledMarkdown()"></div>
        <div class="clear"></div>
      </div>
      <div class="save_button">
        <el-button type="primary" @click="saveArticle">保存</el-button>
      </div>
    </Edit>
  </div>
</template>

<script>
  import _ from 'lodash'
  import marked from 'marked'
  import { Edit } from "./index";
  import { Notification , Message } from "element-ui";
  import { getDates } from '../../common/utils'
  import { api_userlogin } from '../../api'
  const EditApi = new api_userlogin()
  export default {
    data() {
      return {
        title: '',
        date: '',
        content: '',
        gist: '',
        labels: [],
        inputVisible: false,
        inputValue: '',
      }
    },
    mounted: function () {
    },
    methods: {
      // 编译Markdown
      compiledMarkdown: function () {
        return marked(this.content, {sanitize: true})
      },
      // 延时赋值给content
      update: _.debounce(function (e) {
        this.content = e.target.value
      }, 300),
      // 保存文章
      saveArticle () {
        if (this.title.length === 0) {
          Notification({
            title: '提醒',
            message: '请输入标题',
            type: 'warning'
          })
          return
        }
        if (this.gist.length === 0) {
          Notification({
            title: '提醒',
            message: '请输入简介',
            type: 'warning'
          })
          return
        }
        if (this.content.length === 0) {
          Notification({
            title: '提醒',
            message: '请输入内容',
            type: 'warning'
          })
          return
        }
        let obj = {
            _id: this.$route.params.id,
            title: this.title,
            date: getDates(),
            content: this.content,
            gist: this.gist,
            labels: this.labels
          }
        EditApi.userlogin(obj).then(res=>{
          console.log(res)
        })
        // if (this.$route.params.id) {
        //   // 更新文章
        //   let obj = {
        //     _id: this.$route.params.id,
        //     title: this.title,
        //     date: this.date,
        //     content: this.content,
        //     gist: this.gist,
        //     labels: this.labels
        //   }
        //   this.$http.post('/api/admin/updateArticle', {
        //     articleInformation: obj
        //   }).then(
        //     response => {
        //       Message({
        //         message: '更新文章成功',
        //         type: 'success'
        //       })
        //       // 更新完成后跳转至该文章的详情页
        //       self.$router.push('/articleDetail/' + self.$route.params.id)
        //     },
        //     response => console.log(response)
        //   )
        // } else {
        //   // 新建文章
        //   let obj = {
        //     title: this.title,
        //     date: getDates(),
        //     content: this.content,
        //     gist: this.gist,
        //     labels: this.labels
        //   }
        //   this.$http.post('/api/admin/saveArticle', {
        //     articleInformation: obj
        //   }).then(
        //     response => {
        //       Message({
        //         message: '发表文章成功',
        //         type: 'success'
        //       })
        //       // 保存成功后跳转至文章列表页
        //       self.refreshArticleList()
        //     },
        //     response => console.log(response)
        //   )
        // }
      },
      // 保存成功后跳转至文章列表页
      refreshArticleList: function () {
        this.$router.push('/admin/articleList')
      },
      goBack: function () {
        this.$router.go(-1)
      },
      // element标签组件
      handleClose: function (tag) {
        this.labels.splice(this.labels.indexOf(tag), 1)
      },
      showInput: function () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleInputConfirm: function () {
        let inputValue = this.inputValue
        if (inputValue) this.labels.push(inputValue)
        this.inputVisible = false
        this.inputValue = ''
      }
    },
    components:{
      Edit
    }
  }
</script>
