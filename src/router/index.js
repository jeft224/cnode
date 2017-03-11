import Vue from 'vue'
import Router from 'vue-router'
import Topics from '../pages/Topics'
import Detail from '../pages/Detail'
import Post   from '../pages/Post'
import Me from '../pages/Me'
import Message from '../pages/Message'
import About    from '../pages/About'
import User  from '../pages/User'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

Vue.use(Router)

 const routes =[{
      path: '/',
      name: 'home',
      component: Topics
    },
    {
      path:'/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path:'/post',
      name:'post',
      component:Post
    },
    {
      path:'/me',
      name:'me',
      component:Me
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: { auth: true }
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: User,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'*',
      name: 'notfound',
      component: NotFound
    }
  ]
const router = new Router({
  linkActiveClass:'app-active',
  history: true,
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  var { auth = false } = to.meta
  var isLogin = Boolean(localStorage.getItem("loginStatus")) //true用户已登录， false用户未登录

  to.name == 'login' ? router.app.headerShow = false : router.app.headerShow = true
  to.name == 'detail' ? router.app.iconType = false : router.app.iconType = true

  if (auth && !isLogin && to.path !== '/login') {
    return next({ path: '/login' })
  }

  next()
})

export default router;

