<template>
  <CustomSection color="grey lighten-3">
    <div class="title mb-3" v-text="'Our Courses'" />
    <div class="courses">
      <div class="course__item pa-4" v-for="(item, i) in courses" :key="i">
        <div class="text-h6" v-text="item.title" />
        <p v-if="item.text" v-text="item.text" />
      </div>
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from '@/components/CustomSection.vue';
export default {
  name: "CoursesComponent",
  components: { CustomSection },
  data: () => ({
    courses: [
      { title: 'B. Sc.', text: 'Bachelor of Science' },
      { title: 'Bachelor of Business Studies', text: 'The Bachelor of Business Studies is a four year program designed to produce competent managers for any organization. This course opens door for a number of career opportunities. Students seeking to pursue BBS should have completed +2 or intermediate level in business/commerce.' },
      { title: 'Bachelor of Education', text: 'The Bachelor of Education is a three years program designed to produce skilled and competent teachers for secondary level schools who are able to adapt to the changing education environment. Students who have completed +2 or intermediate education from reputed board or university are eligible to join this program.' },
      { title: 'Bachelor of Education One Year', text: 'A 12-months degree program in education, One Year Bachelor of Education can be ideal for teacher as well for those who are looking forward to make a career in teaching field. Students with bachelor degree in any discipline except Sanskrit are eligible to apply for this program.' },
      { title: 'MA Population Studies', text: 'Master of Arts in Population Studies degree was introduced in 2007. The two year program is divided into two parts: part 1 and part 2. The program covers ten courses. Gender, Human Development, Poverty are some of the newly introduced subjects. Students with bachelor degree are eligible to apply for this program.' },
      { title: 'MA Political Science', text: 'The two year program, Master of Arts in Political Science is introduced for those looking forward to make a career in professional political science.' },
      { title: 'Facilities', text: 'Walking through the wide corridors of the huge old building gives the glimpse of walking in a big old palace or monument. Walking through the beautiful gardens of Thakur Ram College in summer is what quenches the thirst in the hot summer. The library of Thakur Ram decades ago was considered as second largest library in Nepal after TU Central Library. Therefore, one may assume that there are still considerable number of books for students to look after as reference books. Well-furnished spacious and comfortable classroom, quality education in moderate fees  and the award-winning teaching faculty are assets of this institution.' }
    ]
  })
}
</script>

<style lang="scss">
.courses {
  display: flex;
  flex-direction: column;
  gap: 12px;
  .course__item {
    border-radius: 4px;
    background-color: #fff;
    border-left: 3px solid blue;
  }
}
</style>