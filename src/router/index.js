import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/courses', name: 'Courses', component: () => import(/* webpackChunkName: "courses" */ '../views/Courses.vue') },
  { path: '/staffs', name: 'Staffs Description', component: () => import(/* webpackChunkName: "staffs" */ '../views/Staffs.vue') },
  { path: '/gallery', name: 'Gallery', component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue') },
  { path: '/about', name: 'About Us', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
