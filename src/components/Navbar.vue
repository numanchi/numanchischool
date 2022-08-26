<template>
  <v-app-bar app color="white" height="70" elevate-on-scroll>
    <div class="d-flex align-center title">
      <b class="primary--text" @click="goto">TRMC</b>
    </div>  
    <v-spacer />
    <div class="nav d-none d-sm-none d-md-block">
      <v-btn text rounded v-for="(nav, n) in items" :key="n" :to="nav.to" color="primary">
        <span>{{ nav.title }}</span>
      </v-btn>
    </div>
    <v-spacer />
    <v-btn class="elevation-0" color="primary" rounded to="/login">Join Now</v-btn>  
    <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="white d-block d-sm-block d-md-none ml-1" /> 
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NavbarComponent',
  methods: {
    goto() {
      if(this.$route.path !== '/') this.$router.push('/')
    },
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
  computed: {
    ...mapState(['drawer']),
  },
}
</script>