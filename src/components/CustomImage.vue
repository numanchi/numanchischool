<template>
  <v-img :src="image" :lazy-src="image" :aspect-ratio="16/9" data-aos="zoom-in">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey lighten-5" />
      </v-row>
    </template>
    <slot></slot>
  </v-img>  
</template>

<script>
export default {
  props: {
    image: String
  }  
}
</script>