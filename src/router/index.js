import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// 1.引入 store
// import store from '../store/index'

Vue.use(VueRouter)
// 重写 pushState 方法
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (path) {
  return originPush.call(this, path).catch(() => { })
}
// 路由独享的导航守卫
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      // ...
      console.log("Login 路由独享的导航守卫", to, from)
      next()
    }
  },
  {
    path: "/dashboard",
    // name: "dashboard",
    component: () => import("../components/Dashboard"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../components/Home"),
        meta: [{ text: "首页", index: 1, path: "/dashboard" }]
      },
      {
        path: "/userlist",
        name: "userlist",
        component: () => import("../components/UserList"),
        meta: [{ text: "首页", index: 1, path: "/dashboard" }, { text: "用户列表", index: 2, path: "/userlist" }]
      },
      {
        path: "/shoplist",
        name: "shoplist",
        component: () => import("../components/ShopList"),
        meta: [{ text: "首页", index: 1, path: "/dashboard" }, { text: "商品列表", index: 2, path: "/shoplist" }]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  }
]
// 1.全局前置导航守卫
// 登录校验
//  1.如果没有登录情况 /login
//  2.如果用户有登录情况 直接去到允许跳转的地方
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 1.全局前置导航守卫
// router.beforeEach((to, from, next) => {
//   console.log("全局前置导航守卫:", to, from);

//   // status === 1 登录成功
//   // status === 0 没有登录
//   // console.log(store.state.status)
//   if (store.state.status === 1 || to.path === "/") {
//     next();// 顺利进入到下一个 Path 中
//   } else {
//     // false => 中断本次请求
//     // / => 跳转到另一个路径
//     // Error => 跳转错误 抛出异常
//     next("/");
//   }
// })
router.afterEach((to, from) => {
  console.log("全局后置导航守卫", to, from)
})


export default router
