<template>
    <div class="navList">
        <Menu>
            <div class="header">
                <p>Nwen</p>
                <p>这家伙很懒。。。</p>
            </div>
            <ul class="ul">
                <li v-for="(item, index) in menuArr" :key="index" @click="links(item,index)">{{item}}</li>
            </ul>
            <div class="imga">
                <div class="imgBox">
                    <img src="@/assets/img/head.jpg" alt="mm">
                    <span>HAHAZHESHO</span>
                </div>
                <div class="gitlist">
                    <div class="sum">
                        <p>88</p>
                        <p>日志</p>
                    </div>
                    <div class="git">
                        <p v-for="(item,index) in gitArr" :key="index" >{{item}}</p>
                    </div>
                </div>
            </div>
        </Menu>
        <router-view></router-view>
    </div>
</template>

<script>
import { Menu } from'./index'
export default {
    data(){
        return{
            menuArr:['首页','发布','管理','登录','关于'],
            gitArr:['GitHub','GitHub','GitHub','GitHub','GitHub','GitHub'],
            myTitle: '',
        }
    },
    metaInfo(){
        return{
            title: this.myTitle
        }
    },
    methods:{
        links(item,i){
            this.myTitle = item
            switch(item){
                case '首页':
                    this.$router.push('/center')
                    break;
                case '关于':
                    this.$router.push('/about')
                    break;
                case '登录':
                    this.$router.push('/login')
                    break;
                case '管理':
                    this.$router.push('/manage')
                    break;
                case '发布':
                    this.$router.push('/edit')
                    break;
                default : {}
            }
        }
    },
    mounted(){
        console.log(this)
    },
    components:{
        Menu
    }
}
</script>

<style  scoped>
    .navList{
        display: flex;
    }
</style>