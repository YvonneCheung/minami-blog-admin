import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/Home.vue";

// 航组件重复点击的一个错误处理方式
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect:'/dashboard',
    component: Home,
    children:[{
      path: "/dashboard",
      name: "dashboard",
      component: ()=>import('../views/dashboard/index.vue'),
    },{
      path: "/article",
      name: "article",
      component: ()=>import('../views/article/index.vue'),
    },{
      path: "/comment",
      name: "comment",
      component: ()=>import('../views/comment/index.vue'),
    },{
      path: "/timeline",
      name: "timeline",
      component: ()=>import('../views/timeline/index.vue'),
    },{
      path: "/account",
      name: "account",
      component: ()=>import('../views/account/index.vue'),
    },{
      path: "/friend",
      name: "friend",
      component: ()=>import('../views/friend/index.vue'),
    },{
      path: "/setting",
      name: "setting",
      component: ()=>import('../views/setting/index.vue'),
    },
  ]
  }
]

const router = new VueRouter({
  routes
});

export default router;
