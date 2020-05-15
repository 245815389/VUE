import Vue from 'vue'
import VueRotuer from 'vue-router'

const Find = () => import('../views/find');
const Cart = () => import('../views/cart');
const Hot = () => import('../views/hot');
const Love = () => import('../views/love');
const Sign = () => import('../views/sign');

//安装插件
Vue.use(VueRotuer)

//创建路由对象
const routes = [
  {
    path:'',
    redirect:'/find'
  },
  {
    path:'/find',
    component:Find
  },
    {
    path:'/cart',
    component:Cart
  },
    {
    path:'/hot',
    component:Hot
  },
    {
    path:'/love',
    component:Love
  },
    {
    path:'/sign',
    component:Sign
  },

]

const router = new VueRotuer({
  routes
})

//导出router
export default router
