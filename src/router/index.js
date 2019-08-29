import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', component: resolve => require(['@/components/List/navList'], resolve),
      redirect:'/center',
      children:[
        {
          path:'/center',component:resolve => require(['@/components/Home/center'], resolve),
        },
        {
          path:'/about',component:resolve => require(['@/components/About/about'], resolve),
        },
        {
          path:'/manage',component:resolve => require(['@/components/Manage/manage'], resolve),
        }
      ]
    },
    {
      path:'/login',component:resolve => require(['@/components/Login/signin'], resolve),
    },
    {
      path:'/edit',component:resolve => require(['@/components/Edit/articleEdit'], resolve),
    }
  ]
})

router.beforeEach((to,from,next)=>{
  // console.log(to)
  // console.log(from)
  // console.log(next)
  next()
})
router.onError(err=>{
  console.log(err)
})
export default router