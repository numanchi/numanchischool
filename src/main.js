import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.mixin({
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Courses', icon: 'mdi-post', to: '/courses' },
      { title: 'gallery', icon: 'mdi-image', to: '/gallery' },
      { title: 'About Us', icon: 'mdi-star', to: '/about' },
      { title: 'contact us', icon: 'mdi-account-box', to: '/contact' },
    ],
  })
})

new Vue({
  mounted() {
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
