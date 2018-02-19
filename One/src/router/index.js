import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import All from '@/components/All'
import Me from '@/components/Me'

import Tuwen from '@/components/AllList/Tuwen'
import Wenda from '@/components/AllList/Wenda'
import Yuedu from '@/components/AllList/Yuedu'
import Lianzai from '@/components/AllList/Lianzai'
import Yingshi from '@/components/AllList/Yingshi'
import Yinyue from '@/components/AllList/Yinyue'
import Diantai from '@/components/AllList/Diantai'

import ReadInfo from '@/components/AllList/ReadInfo'

Vue.use(Router)

var router = new Router({
  routes: [
    { path:'/',redirect: '/One'},
    {path: '/One',component: One},
    {path: '/All',component: All},
    {path: '/Me',component: Me},
   
    {path: '/All/Tuwen', component: Tuwen},
    {path: '/All/Wenda',component: Wenda},
    {path: '/All/Yuedu', component: Yuedu},
    {path: '/All/Lianzai', component: Lianzai},
    {path: '/All/Yingshi', component: Yingshi},
    {path: '/All/Yinyue', component: Yinyue},
    {path: '/All/Diantai',component: Diantai},

    {path: '/All/Yuedu/:id', component: ReadInfo}
  ],

  linkActiveClass:'mui-active'
})
export default router
