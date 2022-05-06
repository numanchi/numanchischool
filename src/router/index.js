import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
    redirect: '/about/about-college',
    children: [
      { path: 'about-college', name: 'About Us', component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutCollege.vue') },
      { path: 'staffs', name: 'Staffs Description', component: () => import(/* webpackChunkName: "staffs" */ '../views/about/AboutCollege.vue') },
      { path: 'gallery', name: 'Gallery', component: () => import(/* webpackChunkName: "gallery" */ '../views/about/Gallery.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
