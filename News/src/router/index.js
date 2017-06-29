import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewsNav from '@/components/news/NewsNav'
import All from '@/components/all/All'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/news',
      redirect:'/news/all'
    },
    {
      path: '/news',
      component: NewsNav,
      children: [
        { path: "/news/all", component: All }
        
      ]
    },
    {
      path: '/',
      redirect:'/news/all'
    }
  ]
})
