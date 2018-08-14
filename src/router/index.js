import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from "@/components/Common/Login"
import Zhiye from "@/components/zhiye/Zhiye"
import Kecheng from "@/components/kecheng/Kecheng"
import Qiye from "@/components/qiye/Qiye"
import Shequ from "@/components/shequ/Shequ"
import Index from "@/components/Index"

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect:"/home"},
    {
      path: '/home',
      component:Home,
      children:[
        {path:"",component:Index},
        {path:"/zhiye",component:Zhiye},
        {path:"/kecheng",component:Kecheng},
        {path:"/qiye",component:Qiye},
        {path:"/shequ",component:Shequ},
      ]
    },
    {
      path:"/login",
      component:Login
    }

  ]
})
