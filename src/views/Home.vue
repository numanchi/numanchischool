<template>
  <div class="home">
    <!-- slider -->
    <Slider />
    <!-- about us short summary -->
    <div class="grey lighten-3 py-4 py-sm-6 py-md-8 py-lg-10">
      <div class="container">
        <div class="title">About College</div>
        <div class="home__about white my-3 pa-4 pa-sm-5 pa-md-6 pa-lg-7">
          <div class="home__about__left">
            <img src="https://www.enr.com/ext/resources/Issues/MountainSt_Issues/2018/10-October/22-Oct/Riverview-School-Exterior.jpg?height=635&t=1539792097&width=1200" alt="" srcset="">
          </div>
          <div class="home__about__right">
            <p>One of the oldest college of Nepal, Thakur Ram Multiple Campus stands tall after decades and decades providing consistent education from generation to generation.  Affiliated with Tribhuvan University (TU), 
            the college is located in Birgunj, Narayani. Not wrong to say that Thakur Ram Campus is an "educational heritage" of Nepal. This historic college is an epitome of rewarding careers and enriching lives for 
            many personalities of todays Nepal. Thakur Ram Multiple Campus is a temple of Saroswati for many among top level government officers, academicians and politicians in Nepal. Though a constitutent college of 
            TU, till today it is still a pioneer educational institution in the district for student from all economic backgrounds to get quality education in affordable cost. The sustainable, flexible and interdisciplinary 
            institution offers higher level education in both undergraduate and graduate programs.  The college is dedicated in catering both technical and practical education so that the students can excel in the field 
            of their choice. The institution has been offering world-class education equipping students with social, spiritual, ethical values in order to produce morally responsible citizens.</p>
            <v-btn small color="primary" outlined to="/about">read more</v-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- Courses -->
    <CustomSection>
      <div class="title mb-3">Our Teachers</div>
      <div class="teachers__container">
        <TeacherCard v-for="(item, r) in teachers" :key="r" :item="item" />
      </div>
    </CustomSection>

    <!-- teachers -->
    <CustomSection color="grey lighten-3">
      <div class="title mb-3">Our Courses</div>
      <div class="courses">
        <CourseCard v-for="(item, i) in courses" :key="i" :item="item" />
      </div>
    </CustomSection>

    <!-- gallery -->
    <CustomSection>
      <div class="title mb-3">Gallery</div>
      <div class="gallery__home">
        <CustomImage v-for="(img, i) in 10" :key="i" :image="`https://picsum.photos/500/300?image=${i * 5 + 10}`" />
      </div>
    </CustomSection>

    <!-- message from chief -->
    <CustomSection color="grey lighten-3">
      <div class="title">Message From Campus Chief</div>
      <div class="home__about white my-3 pa-4 pa-sm-5 pa-md-6 pa-lg-7">
        <div class="home__about__right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, pariatur sapiente? Beatae assumenda optio aperiam aut consectetur tenetur. Saepe, laudantium esse! Aspernatur veritatis rem optio omnis culpa officia ipsum quae!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure explicabo vitae officia tempora mollitia doloribus voluptatibus illum soluta nesciunt quisquam. Quibusdam rem atque architecto asperiores repudiandae nam similique non ipsa.</p>
          <v-btn small color="primary" outlined>read more</v-btn>
        </div>
        <div class="home__about__left">
          <img src="https://img.freepik.com/free-photo/friendly-ceo-desk_23-2147626294.jpg?w=360" alt="Chief">
        </div>
      </div>
    </CustomSection>

    <!-- notice -->
    <CustomSection>
      <div class="title mb-3">Latest Notices</div>
      <div class="pa-4 pa-sm-5 pa-md-6 pa-lg-7 grey lighten-3" style="border-radius: 4px;">
        <NoticeComponent :count="5" />
        <v-btn class="elevation-0 mt-3" to="/notices" color="red" rounded dark>view more</v-btn>
      </div>
    </CustomSection>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import CustomSection from '@/components/CustomSection.vue';
import CustomImage from '../components/CustomImage.vue'
import NoticeComponent from '../components/NoticeComponent.vue'
import CourseCard from '../components/CourseCard.vue'
import TeacherCard from '../components/TeacherCard.vue'
export default {
  components: { 
    Slider, 
    CustomSection, 
    CustomImage,
    NoticeComponent,
    CourseCard,
    TeacherCard
  },
  name: 'HomeView',
  created() {
    this.get()
  } 
}
</script>

<style lang="scss" scoped>
.home__about {
  display: flex;
  gap: 20px;
  border-radius: 10px;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  .home__about__left {
    flex: 1;
    overflow: hidden;
    border-radius: 6px;
  }
  .home__about__right {
    flex: 1;
    gap: 12px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 600px) { flex-direction: column; }
  img { 
    transition: all 3s;
    &:hover { transform: scale(1.2); }
  }
}
</style>
