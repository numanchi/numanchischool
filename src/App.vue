<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
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

// gallery
.gallery__home {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 12px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  gap: 12px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
}
.gallery__item {
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  img { transition: all 300ms; }
  &:hover {
    z-index: 1;
    img { transform: scale(1.2); }
  }
}
</style>