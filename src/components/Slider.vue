<template> 
  <v-carousel hide-delimiter-background :cycle="false" :interval="2500" :show-arrows="false" :height="`${height}vh`">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item" reverse-transition="fade-transition" transition="fade-transition">
      <div style="width: 100%; position: absolute; bottom: 0; background: rgb(0 0 0 / 40%); color: white; font-size: 13px; padding: 4px 8px;">mjhgjh</div>  
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'SliderComponent',
  data: () => ({
    items: [
      'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 
      'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    ]
  }),
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 40
        case 'sm': return 55
        case 'md': return 70
        case 'lg': return 85
        case 'xl': return 100
        default: return 40
      }
    },
  },
}
</script>

<style lang="scss">
.v-carousel__controls > .v-item-group { margin-bottom: 30px; }
</style>