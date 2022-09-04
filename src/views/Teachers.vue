<template>
  <div class="teachers">
    <div style="height: 50vh;" class="primary" data-aos="zoom-in">
      <v-container class="d-flex flex-column justify-center align-center white--text" style="height: 100%; grid-gap: 6px;">
        <div class="text-h4 text-md-h3">OUR TEACHERS</div>  
        <div class="sub__para">Meet our qualified and energatic teachers.</div>
      </v-container>  
    </div>
    <CustomSection class="grey lighten-3">
      <div class="teachers__container">
        <TeacherCard v-for="(item, r) in teachers" :key="r" :item="item" />
      </div>
    </CustomSection>
  </div>  
</template>

<script>
import CustomSection from '../components/CustomSection.vue'
import TeacherCard from '../components/TeacherCard.vue'
export default {
  name: 'TeachersView',
  components: { 
    CustomSection, 
    TeacherCard 
  }, 
  created() {
    this.get()
  }    
}
</script>