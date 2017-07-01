import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewsNav from '@/components/news/NewsNav'
import All from '@/components/all/All'
import Good from '@/components/good/Good'
import Weex from '@/components/weex/Weex'
import Job from '@/components/job/Job'
import Ask from '@/components/ask/Ask'
import Share from '@/components/share/Share'
import Msg from '@/components/msg/Msg'
import About from '@/components/about/About'
import More from '@/components/more/More'
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
        { path: "/news/all", component: All },
        { path: "/news/good", component: Good },
        { path: "/news/weex", component: Weex },
        { path: "/news/ask", component: Ask },
        { path: "/news/job", component: Job },
        { path: "/news/share", component: Share },
        
      ]
    },
    {
      path: '/',
      redirect:'/news/all'
    },
    {
      path: '/msg',
      component: Msg,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/more',
      component: More,
    }
    
   
  ]
})
