<template>
  <v-app>
    <v-overlay :value="overlay" v-if="overlay === true" z-index="203">
      <v-progress-circular indeterminate size="50" />
    </v-overlay>
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar, Sidebar, Footer },
  computed: {
    overlay() { return this.$store.state.overlay },
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
html { scroll-behavior: smooth; }
::-webkit-scrollbar { display: none; }
// unordered and ordered list
.v-application ul, .v-application ol { padding-left: 0 !important; }
// container
.container {
  max-width: 1250px !important;
  margin: 0 auto !important;
  padding: 12px !important;
}
// button
.v-btn {
  text-transform: capitalize !important;
  font-weight: normal !important;
  font-size: 13px !important;
  &.v-size--small {
    font-size: 11px !important;
  }
}
// paragraph
p {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: .5px;
  margin-bottom: 0 !important;
  text-align: justify;
  line-height: 1.4;
}
// image
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
// inputs
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #1976d2 !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #ff6666 !important; }
.v-input input, .v-text-field--outlined.v-input--dense .v-label, textarea { font-size: 13px; }
.v-text-field--outlined fieldset { border-color: rgb(0 0 0 / 25%); }
.v-input__slot {
  min-height: 46px !important;
  .v-input__append-inner { margin-top: 12px !important; }
}
.v-input__icon .v-icon.v-icon { font-size: 18px !important; }
.v-text-field.v-text-field--enclosed .v-text-field__details { 
  margin-bottom: 0 !important;
  padding: 0 !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] { -moz-appearance: textfield; }

// gallery
.gallery__home {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  @media (max-width: 1020px) { grid-template-columns: repeat(auto-fill, minmax(23%, 1fr)); }
  @media (max-width: 820px) { grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); }
  @media (max-width: 600px) { grid-template-columns: repeat(auto-fill, minmax(45%, 1fr)); }
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  @media (max-width: 900px) { grid-template-columns: repeat(auto-fill, minmax(23%, 1fr)); }
  @media (max-width: 760px) { grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); }
  @media (max-width: 600px) { grid-template-columns: repeat(auto-fill, minmax(45%, 1fr)); }
}
// gallery items
.gallery__item {
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  img { transition: all 300ms; }
  &:hover {
    z-index: .9;
    img { transform: scale(1.2); }
  }
}

// table
table {
  width: 100%;
  border-collapse: collapse;
  border: .5px solid rgb(0 0 0 / 40%);
  th, td {
    color: black;
    font-size: 12px;
    padding: 8px 6px;
    line-height: 1.3;
    border: .5px solid rgb(0 0 0 / 40%);
  }
  td { text-align: center; }
}

// courses
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 20px;
  .course__item {
    overflow: hidden;
    border-radius: 6px;
    background-color: #fff;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    gap: 16px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    gap: 12px;
  }
}

// teachers
.teachers__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  gap: 12px;
  @media (max-width: 960px) { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); }
  @media (max-width: 760px) { grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)); }
  @media (max-width: 500px) { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>