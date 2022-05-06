<template>
  <div class="about">
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>