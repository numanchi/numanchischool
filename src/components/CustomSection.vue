<template>
  <div class="py-4 py-sm-6 py-md-8 py-lg-10" :class="color" data-aos="zoom-in">
    <v-container>
      <CustomDivider v-if="title" :color="dividerColor" :title="title" :description="description" />
      <slot></slot>
    </v-container>
  </div>  
</template>

<script>
import CustomDivider from './CustomDivider.vue'
export default {
  components: {
    CustomDivider
  },
  props: {
    dividerColor: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'white',
      type: String  
    },
    title: String,
    description: String
  }
}
</script>