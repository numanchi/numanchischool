<template>
  <div>
    <div style="height: 50vh;" class="primary" data-aos="zoom-in">
      <v-container class="d-flex flex-column justify-center align-center white--text" style="height: 100%; grid-gap: 6px;">
        <div class="text-h4 text-md-h3">OUR COURSES</div>  
        <div class="sub__para">Discover our variety of courses</div>
      </v-container>  
    </div>
    <CustomSection color="grey lighten-3">
      <div class="courses">
        <CourseCard v-for="(item, i) in courses" :key="i" :item="item" />
      </div>
    </CustomSection>
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection.vue';
import CourseCard from '@/components/CourseCard.vue'
export default {
  name: "CoursesComponent",
  components: { 
    CustomSection, 
    CourseCard
  },
}
</script>