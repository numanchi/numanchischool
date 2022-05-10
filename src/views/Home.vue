<template>
  <div class="home">
    <!-- notice -->
    <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
      <a class="d-flex align-center" href="https://www.facebook.com" target="_blank">
        <v-icon v-text="'mdi-menu-right'" color="primary" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum dicta libero quis perspiciatis in veniam incidunt voluptate perferendis.</p>  
      </a>
    </marquee>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint!</p>
            <v-btn small color="primary" outlined>read more</v-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- gallery -->
    <div class="white py-4 py-sm-6 py-md-8 py-lg-10">
      <div class="container">
        <div class="title mb-3">Gallery</div>
        <div class="gallery__home">
          <div class="gallery__item" v-for="(img, i) in gallery" :key="i">
            <img :src="img" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>

    <!-- message from chief -->
    <div class="grey lighten-3 py-4 py-sm-6 py-md-8 py-lg-10">
      <div class="container">
        <div class="title">Message From Campus Chief</div>
        <div class="home__about white my-3 pa-4 pa-sm-5 pa-md-6 pa-lg-7">
          <div class="home__about__right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem quam asperiores praesentium vero dolores! Neque fuga eveniet magnam odio, laudantium ex nisi modi delectus, inventore velit doloremque amet sint!</p>
            <v-btn small color="primary" outlined>read more</v-btn>
          </div>
          <div class="home__about__left">
            <img src="https://img.freepik.com/free-photo/friendly-ceo-desk_23-2147626294.jpg?w=360" alt="Chief">
          </div>
        </div>
      </div>
    </div>

    <!-- notice -->
    <div class="white py-4 py-sm-6 py-md-8 py-lg-10">
      <div class="container">
        <div class="title mb-3">Latest Notices</div>
        <div class="pa-4 pa-sm-5 pa-md-6 pa-lg-7 grey lighten-3" style="border-radius: 4px;">
          <div class="primary pa-4 text-center white--text" style="border-radius: 4px; font-size: 13px;">केन्द्रिय कार्यालयका विज्ञापन देखि सिफारिससम्मका सूचनाहरू</div>
          <div class="notice__filters my-3 d-flex flex-wrap" style="gap: 6px;">
            <v-btn large rounded v-for="(a ,i) in notice_filters" :key="i" class="elevation-0" :class="{ 'primary white--text': active_notice === a }" @click="() => active_notice = a">{{ a }}</v-btn>
          </div>
          <table>
            <thead>
              <tr>
                <th>बिज्ञापन नं.</th>
                <th>विवरण</th>
                <th>पद संख्या</th>
                <th>अन्तिम मिति</th>
                <th>दोब्बर दस्तुर मिति</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in 5" :key="a">
                <td>{{ a }}.</td>
                <td style="text-align: start;">शाखा अधिकृत वा सो सरह, न्याय, न्याय, रा.प. तृतीय पदको जेष्ठता र कार्यसम्पादन मूल्याङ्कनद्वारा हुने बढुवा</td>
                <td>2</td>
                <td>2078-10-04</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <v-btn class="elevation-0 mt-3" to="/notice" color="red" rounded dark>view more</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
  components: { Slider },
  name: 'HomeView',
  data: () => ({
    gallery: [
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw%3D&w=1000&q=80',
      'https://media.istockphoto.com/photos/art-museum-picture-id1218961153?k=20&m=1218961153&s=612x612&w=0&h=9w8jTH_0ffBmWcOiqv8-NGJFj4OLcIxiTlTUmSv4wwo=',
      'https://www.nationalgallery.org.uk/media/24386/p6504_017pr-432.png'
    ],
    notice_filters: ['विज्ञापन', 'स्वीकृत नामावली', 'परीक्षा केन्द्र', 'लिखित नतिजा', 'सिफारिस'],
    active_notice: 'विज्ञापन',
  })
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
  img { 
    transition: all 3s;
    &:hover { transform: scale(1.2); }
  }
}
</style>
