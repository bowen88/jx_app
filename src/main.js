// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MetaInfo from 'vue-meta-info'
import Highlight from './common/hljs'
Vue.use(MetaInfo)
Vue.use(Highlight)

//element按需引入
import { Button, Tag, Input, Message, Notification } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const components = [Button, Tag, Input, Message, Notification]
components.map((item) => {
  Vue.component(item.name, item)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
