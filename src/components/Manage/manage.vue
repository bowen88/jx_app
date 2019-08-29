<template>
  <ContentBox>
    <div class="listBox" v-for="(item,i) in dataList" :key="i">
      <div class="header">{{item.title}}</div>
      <div class="date">
        <p>发表于：{{item.date}}</p>
        <p class="tags">标签：</p>
        <el-tag class="tag" v-for="tag in item.tags" :key="tag">{{tag}}</el-tag>
      </div>
      <div class="content">{{(item.content.length>100)?item.content.slice(1,100)+'....':item.content}}</div>
      <div class="btnBox">修改</div>
      <div class="btnBox">删除</div>
      <div class="hr"></div>
    </div>
  </ContentBox>
</template>

<script>
import { ContentBox } from "../Home/index";
export default {
  data() {
    return {
      dataList: [
        {
          title:'hello world',
          date:'2019-08-23',
          tags: ["标签一", "标签二", "标签三"],
          content:'该方法首先对对应v-model的value做了解析，它处理了非常多的情况，对我们的例子，value就是messgae，所以返回的res.key为null，然后我们就得到${value}=${assignment}，也就是message=$event.target.value。然后我们又命中了needCompositionGuard为真的逻辑，所以最终的code为if($event.target.composing)return;message=$event.target.value。'
        },
        {
          title:'hello world',
          date:'2019-08-23',
          tags: ["标签一", "标签二", "标签三"],
          content:'该方法首先对对应v-model的value做了解析，它处理了非常多的情况，对我们的例子，value就是messgae，所以返回的res.key为null，然后我们就得到${value}=${assignment}，也就是message=$event.target.value。然后我们又命中了needCompositionGuard为真的逻辑，所以最终的code为if($event.target.composing)return;message=$event.target.value。'
        },
        {
          title:'hello world',
          date:'2019-08-23',
          tags: ["标签一", "标签二", "标签三"],
          content:'该方法首先对对应v-model的value做了解析，它处理了非常多的情况，对我们的例子，value就是messgae，所以返回的res.key为null，然后我们就得到${value}=${assignment}，也就是message=$event.target.value。然后我们又命中了needCompositionGuard为真的逻辑，所以最终的code为if($event.target.composing)return;message=$event.target.value。'
        },
        {
          title:'hello world',
          date:'2019-08-23',
          tags: ["标签一", "标签二", "标签三"],
          content:'内容'
        }
      ]
    };
  },
  components: {
    ContentBox
  }
};
</script>