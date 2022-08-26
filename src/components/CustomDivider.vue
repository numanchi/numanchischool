<template>
  <div class="d-flex flex-column align-center mb-6 mb-sm-8 mb-md-10 mb-lg-12" :class="color === true ? 'white--text' : ''">
    <div class="text-h5 text-center font-weight-bold">{{ title }}</div>
    <div class="text-center my-2" v-if="description">{{ description }}</div>
    <div class="home__divider" :style="{ background: color === true ? '#fff !important' : '' }" />
  </div>  
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    color: Boolean
  }  
}
</script>

<style lang="scss">
.home__divider {
  width: 250px;
  height: 4px;
  margin-top: 6px;
  background: linear-gradient(45deg, #175437, #42bc60);
}
</style>