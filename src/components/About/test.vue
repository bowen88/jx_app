<template>
  <div>
    <p>{{Value}}</p>
    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>
  </div>
</template>
<script>
export default {
    props:['Value'],
    methods:{
        select(val){
            this.$emit('getVal',val)
        }
    }
};
</script>