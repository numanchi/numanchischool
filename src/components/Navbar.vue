<template>
  <div style="z-index: 999;">
    <div class="top__header">
      <div class="top__header__left">
        <div style="max-width: 70px"><img src="https://psc.gov.np/assets/public/images/govlogo_new.png" alt="Logo"></div>
        <div style="max-width: 200px; font-size: 12px; line-height: 1.2; text-align: justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius commodi at voluptatem nostrum</div>
      </div>
      <div class="top__header__right">
        <div style="height: 70px"><img style="object-fit: contain !important;" src="https://psc.gov.np/assets/public/images/nepal_flag.gif" alt="Logo Gif"></div>
        <p>05:02PM</p>
      </div>
    </div>
    <v-app-bar elevate-on-scroll color="primary" dark :height="height" id="appbar">
      <ul class="parent__nav">
        <li v-for="(menu, m) in menus" :key="m">
          <v-btn color="white" text tile :to="menu.to">
            <span>{{ menu.name }}</span>
            <v-icon v-text="'mdi-menu-down'" right v-if="menu.children" />
          </v-btn>  
          <ul v-if="menu.children">
            <li v-for="(child, c) in menu.children" :key="c">
              <v-btn color="primary" text tile :to="child.to" block>
                <span>{{ child.name }}</span>
              </v-btn>
            </li>
          </ul>
        </li>
      </ul>
    </v-app-bar> 
  </div> 
</template>

<script>
export default {
  name: 'NavbarComponent',  
  data: () => ({
    height: 36,
    menus: [
      { name: 'Home', to: '/' },
      {
        name: 'Notice', to: '/notice',
        children: [
          { name: 'general', to: '/notice/general' },
          { name: 'exam notice', to: '/notice/exam-notice' },
          { name: 'admission', to: '/notice/admission' },
          { name: 'forms', to: '/notice/forms' },
          { name: 'syllabus', to: '/notice/syllabus' }
        ]
      },
      { 
        name: 'faculty', to: '/faculty',
        children: [
          { name: 'management', to: '/faculty/management' },
          { name: 'science', to: '/faculty/sceince' },
          { name: 'humanities', to: '/faculty/humanities' },
          { name: 'education', to: '/faculty/education' },
          { name: 'BBA', to: '/faculty/bba' }
        ]
      },
      {
        name: 'About us', to: '/about',
        children: [
          { name: 'About College', to: '/about/about-college' },
          { name: 'staffs description', to: '/about/staffs' },
          { name: 'gallery', to: '/about/gallery' }
        ]
      },
      { name: 'Contact us', to: '/contact-us' }
    ]
  }),
  created() {
    window.addEventListener('scroll', () => {
      let x = window.scrollY
      if(x >= 150) {
        document.getElementById('appbar').style.position = 'fixed'
        document.getElementById('appbar').style.top = '0'
        this.height = 60
      } else {
        document.getElementById('appbar').style.position = 'relative'
        this.height = 36
      }
    })
  }
}
</script>

<style lang="scss">
.top__header {
  height: 100px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  .top__header__left {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
header {
  transition: ease 2000ms;
  .v-toolbar__content {
  padding: 0 12px !important;
  ul {
    display: flex;
    &.parent__nav { height: 100%; }
    li {
      position: relative;
      .v-btn { height: 100% !important; }
      ul { 
        display: none;
        position: absolute;
        min-width: 150px;
        background: white;
        box-shadow: 0 0 10px 2px rgb(0 0 0 / 15%);
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        visibility: hidden;
        li {
          height: 36px;
          .v-btn { justify-content: flex-start; }
        }
      }
      &:hover {
        ul { 
          visibility: visible; 
        }
      }
    }
  }
}
}
</style>