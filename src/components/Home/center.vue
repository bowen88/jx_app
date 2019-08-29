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
      <div class="btnBox">阅读全文></div>
      <div class="hr"></div>
    </div>
  </ContentBox>
</template>

<script>
import { ContentBox } from "./index";
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

<style>
::-webkit-scrollbar {
width: 8px;
height: 8px;
background-color: rgb(255, 255, 255);
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);
border-radius: 10px;
background-color: rgb(255, 255, 255);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
border-radius: 10px;
background-color: rgb(173, 175, 172);
}
</style>