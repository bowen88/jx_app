<template>
    <ContentBox>
        这就是我
        <Test value='sss' @getVal='xx'></Test>
        {{data}}
    </ContentBox>
</template>

<script>
import { ContentBox } from "./index";
import Test from'./test'
export default {
  data(){
    return{
      data:''
    }
  },
  methods:{
    xx(new1){
      this.data = new1
    }
  },
  components: {
    ContentBox,
    Test
  }
}
</script>