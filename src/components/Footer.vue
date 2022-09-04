<template>
  <v-footer color="white" class="py-6 py-sm-8 py-md-10 py-lg-12" padless>
    <v-container class="footer">
      <div class="company">
        <div>
          <span class="primary--text title" style="line-height: 1;">TRMC</span><br>
          <span class="para">Thakur ram Bahumukhi campus</span>
        </div>   
        <div class="mt-2 para">Top instructor from around the world teach millions of student.</div>
        <div class="socials mt-3">
          <span class="para font-weight-bold black--text">Follow Us : </span>  
          <v-btn icon small v-for="(social, s) in socials" :key="s" color="primary" target="_blank" :href="social.to">
            <v-icon size="14">{{ social.icon }}</v-icon>
          </v-btn>  
        </div>
      </div>
      <div class="footer__links">
        <div class="links">
          <div class="link__title">Company</div>
          <div class="para" v-for="(inf, i) in info" :key="i">{{ inf }}</div>
        </div>
        <div class="links">
          <div class="link__title">Links</div>
          <div class="para" v-for="(link, l) in links" :key="l">{{ link }}</div>
        </div>
        <div class="links">
          <div class="link__title">Services</div>
          <div class="para" v-for="(service, s) in services" :key="s">{{ service }}</div>
        </div>
        <div class="links">
          <div class="link__title">Contact</div>
          <div class="para" v-for="(con, c) in contact" :key="c">{{ con }}</div>
        </div>  
      </div>
    </v-container>  
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    info: ['Home', 'About', 'Courses', 'Blog'],
    links: ['Student', 'Business', 'Instructor'],
    services: ['Design', 'Study', 'Business', 'UI/UX'],
    contact: ['2V78+Q4G, 44300, Birgunj 44300', 'info@trmc.edu', '+977 (51) XXXXXX'],
    socials: [
      { icon: 'mdi-facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', to: 'https://www.twitter.com' },
      { icon: 'mdi-youtube', to: 'https://www.youtube.com' },
      { icon: 'mdi-linkedin', to: 'https://www.linkedin.com' }  
    ]
  })  
}
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 280px calc(100% - 330px);
  grid-gap: 50px;  
}
.send__btn {
  border-radius: 6px !important;
  position: absolute;
  right: 6px; 
  top: 6px; 
}
.footer__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));  
}
.para {
  color: #00063ab7;
  font-size: 13px; 
  font-weight: 400 !important;
}
.links .para { margin-bottom: 4px; }
.links .para:last-child { margin-bottom: 0 !important; }
.link__title {
  font-weight: bold;
  margin-bottom: 16px;  
  letter-spacing: .5px;
  font-size: 17px;
}
@media (max-width: 960px) {
  .footer { grid-gap: 40px; }  
  .footer__links { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }  
}
@media (max-width: 600px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); grid-gap: 30px;  }  
  .footer__links { row-gap: 20px; }
}
</style>