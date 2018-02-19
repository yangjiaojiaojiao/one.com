// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
import Vue from 'vue'
// 导入mint-ui
import Mint from 'mint-ui'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入mui的样式
import './lib/mui/css/mui.css'
// 导入mint-ui的样式
import 'mint-ui/lib/style.css'
// 使用mintui


// 导入路由的包
// import VueRouter from 'vue-router'

// // 使用路由
// Vue.use(VueRouter)

// 导入扩展的字体图标的样式
import './lib/mui/css/icons-extra.css'
// 导入mui的扩展字体
// import './lib/mui/fonts/mui-icons-extra.ttf'

// 导入font
import './lib/font-awesome/css/font-awesome.css'

// 导入app.vue
import app from './App.vue'
import router from './router/index.js';


Vue.use(Mint);




// Vue.config.productionTip = false

/* eslint-disable no-new */
var em = new Vue({
  el: '#app',
  render: c=>c(app),
  router
  // components: { App },
  // template: '<App/>'
})
