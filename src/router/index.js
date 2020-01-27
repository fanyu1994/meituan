import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}


const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/shoppingCar',
    name: 'shoppingCar',
    component: ()=>import('../views/shoppingCar.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: ()=>import('../views/userCenter.vue')
  },
  {
    path:'/location',
    name:'location',
    component:()=>import ('../views/location.vue')
  },
  {
    path:'/searchCity',
    name:'searchCity',
    component:()=>import ('../views/searchCity.vue')
  },
  {
    path:'/erweima',
    name:'erweima',
    component:()=>import ('../views/erweima.vue')
  },
  {
    path:'/fined',
    name:'fined',
    component:()=>import ('../views/fined.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/order',
    name:'order',
    component:()=>import ('../views/order.vue')
  },
  {
    path:'/outFood',
    name:'outFood',
    component:()=>import ('../views/outFood.vue')
  },
  {
    path:'/goodFood',
    name:'goodFood',
    component:()=>import ('../views/goodFood.vue')
  },
  {
    path:'/outFoodVip',
    name:'outFoodVip',
    component:()=>import ('../views/outFoodVip.vue')
  },
  {
    path:'/outFoodOrder',
    name:'outFoodOrder',
    component:()=>import ('../views/outFoodOrder.vue')
  },
  {
    path:'/loading/:data',
    name:'loading',
    component:()=>import ('../views/jiazai.vue')
  },
  {
    path:'/business',
    name:'business',
    component:()=>import ('../views/business.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/wmAOrder',
    name:'wmAOrder',
    component:()=>import ('../views/wmAOrder.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
