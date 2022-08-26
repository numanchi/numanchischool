<template>
  <CustomSection>
    <div class="contact">
      <div class="contact__info">
        <div class="mb-5">
          <div class="display-1 mb-2">Contact Info</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis dolor, aperiam temporibus assumenda, porro unde distinctio aliquid saepe accusamus numquam</p>
        </div> 
        <div class="contacts d-flex flex-column" style="grid-gap: 12px;">
          <div v-for="(inf, i) in info" :key="i" class="d-flex align-center">
            <div class="contact__circle primary">
              <v-icon color="white">{{ inf.icon }}</v-icon>
            </div>
            <div style="line-height: 1;" class="ml-3">
              <div class="title mb-1" style="line-height: 1;">{{ inf.head }}</div>  
              <span>{{ inf.title }}</span>
            </div>
          </div>
        </div> 
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.545196267144!2d84.8657279499684!3d27.012933162189757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993543cd9e9b763%3A0xf8feb90b86d40173!2sThakur%20Ram%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1661536144024!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Agram Infotech"></iframe>  
      </div>
    </div> 
    <div class="mt-6">
      <div class="text-h6 mb-1">Send Us Message</div>  
      <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
        <div class="d-flex flex-column flex-sm-row" style="grid-gap: 12px;">
          <v-text-field v-model="form.name" label="Full Name*" dense outlined hide-details prepend-inner-icon="mdi-account" :rules="[ v => !!v || '' ]" />
          <v-text-field v-model="form.email" label="Email*" dense outlined hide-details prepend-inner-icon="mdi-email" :rules="[ v => !!v || '' ]" />
          <v-text-field v-model="form.phone" label="Phone Number*" :counter="10" dense outlined hide-details prepend-inner-icon="mdi-phone" :rules="[ v => !!v || '' ]" />  
        </div>
        <v-textarea v-model="form.message" label="Message" dense outlined hide-details prepend-inner-icon="mdi-message" />    
        <v-btn rounded max-width="200" color="primary" :disabled="!valid" @click="submit">send message</v-btn>
      </v-form>  
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from '@/components/CustomSection.vue';
export default {
  name: 'ContactView',
  components: { CustomSection },
  data: () => ({
    info: [
      { icon: 'mdi-map-marker', title: '2V78+Q4G, 44300, Birgunj 44300', head: 'Address' },
      { icon: 'mdi-email', title: 'info@trmc.edu', head: 'Email' },
      { icon: 'mdi-phone', title: '+977 (51) XXXXXX', head: 'Phone Number' }
    ],
    valid: true,
    form: {
      name: null,
      phone: null,
      message: null,  
    }
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) console.log('validated') 
      else console.log('not validated') 
    }  
  }  
}
</script>

<style scoped>
p, span {
  line-height: 1.3;
  font-size: 13px;  
}
.contact {
  display: grid;
  grid-template-columns: calc(50% - 30px) calc(50% - 30px);  
  grid-gap: 60px;
}
.contact__circle {
  height: 48px;
  width: 48px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;  
}
.map {
  min-height: 40vh; 
  border-radius: 6px;
  overflow: hidden; 
}
iframe {
  height: 100%;
  width: 100%;  
}
@media (max-width: 1060px) {
  .contact { grid-template-columns: calc(50% - 25px) calc(50% - 25px); grid-gap: 50px; }
}
@media (max-width: 860px) {
  .contact { grid-template-columns: calc(50% - 20px) calc(50% - 20px); grid-gap: 40px; }
}
@media (max-width: 760px) {
  .contact { grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-gap: 30px; }
}
@media (max-width: 600px) {
  .contact { grid-template-columns: 100%; grid-gap: 20px; }
}
</style>