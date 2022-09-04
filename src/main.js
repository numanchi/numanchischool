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
      { title: 'Teachers', icon: 'mdi-post', to: '/teachers' },
      { title: 'Notices', icon: 'mdi-post', to: '/notices' },
      { title: 'gallery', icon: 'mdi-image', to: '/gallery' },
      { title: 'About Us', icon: 'mdi-star', to: '/about' },
      { title: 'contact us', icon: 'mdi-account-box', to: '/contact' },
    ],
    courses: [
      { img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3p1dkzRRWCPi4CthpKSe6v/dce80af0ff12b517651db496df9085d6/GettyImages-1359164208__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=', title: 'B. Sc.', text: 'Bachelor of Science' },
      { img: 'https://brilliant.edu.np//media/79/business-studies.jpg', title: 'Bachelor of Business Studies', text: 'The Bachelor of Business Studies is a four year program designed to produce competent managers for any organization. This course opens door for a number of career opportunities. Students seeking to pursue BBS should have completed +2 or intermediate level in business/commerce.' },
      { img: 'https://pbs.twimg.com/media/E93RwZEVkAABvNS.jpg', title: 'Bachelor of Education', text: 'The Bachelor of Education is a three years program designed to produce skilled and competent teachers for secondary level schools who are able to adapt to the changing education environment. Students who have completed +2 or intermediate education from reputed board or university are eligible to join this program.' },
      { img: 'https://becomeateacheredu.org/wp-content/uploads/2019/06/secondary_education_degree_edu.jpg', title: 'Bachelor of Education One Year', text: 'A 12-months degree program in education, One Year Bachelor of Education can be ideal for teacher as well for those who are looking forward to make a career in teaching field. Students with bachelor degree in any discipline except Sanskrit are eligible to apply for this program.' },
      { img: 'https://researchleap.com/wp-content/uploads/2021/12/Population-data-1280x720.jpeg', title: 'MA Population Studies', text: 'Master of Arts in Population Studies degree was introduced in 2007. The two year program is divided into two parts: part 1 and part 2. The program covers ten courses. Gender, Human Development, Poverty are some of the newly introduced subjects. Students with bachelor degree are eligible to apply for this program.' },
      { img: 'https://manavrachna.edu.in/wp-content/uploads/2021/05/Political-Science.jpg', title: 'MA Political Science', text: 'The two year program, Master of Arts in Political Science is introduced for those looking forward to make a career in professional political science.' },
      { img: 'https://www.hfmmagazine.com/ext/resources/images/2019/Magazine/November/HFM_ComplianceOpsFeature_44_700x468.jpg', title: 'Facilities', text: 'Walking through the wide corridors of the huge old building gives the glimpse of walking in a big old palace or monument. Walking through the beautiful gardens of Thakur Ram College in summer is what quenches the thirst in the hot summer. The library of Thakur Ram decades ago was considered as second largest library in Nepal after TU Central Library. Therefore, one may assume that there are still considerable number of books for students to look after as reference books. Well-furnished spacious and comfortable classroom, quality education in moderate fees  and the award-winning teaching faculty are assets of this institution.' }
    ],
    teachers: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.teachers = json)
      this.$store.commit('SET_OVERLAY', false)
    }
  }
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
