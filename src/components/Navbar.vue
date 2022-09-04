<template>
  <v-app-bar app color="white" height="70" elevate-on-scroll>
    <div class="d-flex align-center title">
      <b class="primary--text" @click="goto">TRMC</b>
      
    </div>  
    <v-spacer />
    <div class="nav d-none d-sm-none d-md-block">
      <v-btn text tile active-class="active__nav" v-for="(nav, n) in items" :key="n" :to="nav.to" color="primary">
        <span>{{ nav.title }}</span>
      </v-btn>
    </div>
    <!-- <v-spacer />
    <v-btn class="elevation-0" color="primary" rounded to="/login">Join Now</v-btn>   -->
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

<style lang="scss">
.v-toolbar__content {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 12px !important;
  .nav .v-btn--active:hover::before, .v-btn--active::before { opacity: 0 !important; }
  .nav .v-btn {  height: 70px !important; }
  .nav .active__nav {
    border-bottom: 3px solid #1976d2;
    color: #1976d2 !important;
    font-weight: 500 !important;
  }
  .v-btn.v-btn--icon:last-child { margin-right: 0 !important; }
}
</style>