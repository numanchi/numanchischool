<template>
  <div class="notices">
    <v-container>
      <NoticeComponent :count="20" />
    </v-container>
  </div>  
</template>

<script>
import NoticeComponent from '../components/NoticeComponent.vue'
export default {
  name: 'NoticesDescription',
  components: {
    NoticeComponent
  }
}
</script>