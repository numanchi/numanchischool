<template>
  <v-footer color="primary" dark elevation="5">
    <v-container class="px-0 px-lg-3 py-8 py-sm-10py-md-12 py-lg-14">
      <div class="logo">
        <div class="logo__img">
          <img src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="" srcset="">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="links">
        <div class="text-uppercase mb-3" style="font-size: 15px; letter-spacing: .5px;">Important Links</div>
        <div class="d-flex flex-column" style="gap: 4px;">
          <v-btn v-for="(link, l) in links1" :key="l" :to="link.to" small text tile outlined>
            <v-icon small left v-text="'mdi-menu-right'" />
            <span v-text="link.text" />
          </v-btn>
        </div>
      </div>
      <div class="links">
        <div class="text-uppercase mb-3" style="font-size: 15px; letter-spacing: .5px;">Important Links</div>
        <div class="d-flex flex-column" style="gap: 4px;">
          <v-btn v-for="(link, l) in links2" :key="l" :to="link.to" small text tile outlined>
            <v-icon small left v-text="'mdi-menu-right'" />
            <span v-text="link.text" />
          </v-btn>
        </div>
      </div>
      <div class="address">
        <div class="d-flex flex-column" style="gap: 8px;">
          <div class="d-flex align-center"  style="gap: 6px;" v-for="(a, i) in address" :key="i">
            <v-icon v-text="a.icon" size="20" />
            <p v-text="a.text" />
          </div>
        </div>
        <div class="d-flex mt-4" style="gap: 6px;">
          <v-btn icon small v-for="(s, i) in socials" :key="i" target="_blank" :href="s.link">
            <v-icon v-text="s.icon" small />
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    address: [
      { icon: 'mdi-map-marker', text: 'Birgunj, nepal' },
      { icon: 'mdi-cellphone', text: '+9779876543210' },
      { icon: 'mdi-email', text: 'email@gmail.com' }
    ],
    links1: [
      { text: 'notice', to: '/notice' },
      { text: 'admission', to: '/admission' },
      { text: 'tuiost', to: '/tuiost' },
    ],
    links2: [
      { text: 'TU', to: '/tu' },
      { text: 'office of dean', to: '/office-of-dean' },
      { text: 'results', to: '/results' }
    ],
    socials: [
      { link: 'https://www.facebook.com', icon: 'mdi-facebook' },
      { link: 'https://www.instagram.com', icon: 'mdi-instagram' },
      { link: 'https://www.youtube.com', icon: 'mdi-youtube' },
      { link: 'https://www.twitter.com', icon: 'mdi-twitter' },
      { link: 'https://www.linkedin.com', icon: 'mdi-linkedin' }
    ]
  })  
}
</script>

<style lang="scss">
.v-footer {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
    gap: 20px;
    .logo {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .logo__img { max-width: 100px; }
    }
    .links {
      .v-btn__content { justify-content: flex-start !important; }
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
      // gap: 12px;
    }
  }
}
</style>