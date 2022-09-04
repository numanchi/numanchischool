<template>
  <div class="course__item" data-aos="zoom-in">
    <CustomImage :image="item.img" />
    <div class="pa-4">
      <div class="text-h6" v-text="item.title" />
      <p v-if="item.text" v-text="item.text" />
    </div>
  </div>  
</template>

<script>
import CustomImage from './CustomImage.vue'
export default {
  props: {
    item: Object
  },
  components: { 
    CustomImage
  }
}
</script>