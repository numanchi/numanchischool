<template> 
  <v-carousel hide-delimiter-background :cycle="false" :interval="2500" :show-arrows="false" :height="`${height}vh`" delimiter-icon="mdi-minus">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item" />
  </v-carousel>
</template>
<script>
export default {
  name: 'SliderComponent',
  data: () => ({
    items: [
      'https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg',
      'https://assets.weforum.org/article/image/_sNw0oZO6IQV_vLpSbxFnx44SN_obtJrNdbSk0_yFFk.JPG',
      'http://www.purdue.edu/purdue/images/audience/about-banner.jpg',
      'https://www.lincoln.edu/_images/home/VideoFinal.png',
      'https://www.udel.edu/content/referenced-components/home-page-references/2022-q1/_jcr_content/par_udel_panel/columngenerator_457747539/par/panelforpages/par_1/columngenerator_1844387066/par_0/columngenerator/par_0/calloutfullimage.img.jpg/1633461236511.jpg',
      'http://intake.education/sites/default/files/lancaster.jpg',
      'https://www.ucumberlands.edu/sites/default/files/2018-01/campus-1440x720.jpg',
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
.v-carousel__controls__item {
  height: 24px !important;
  width: 24px !important;
    margin: 0 4px !important;
}
</style>