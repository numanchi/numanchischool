<template>
  <div class="teacher__card pa-3 pa-sm-4 pa-md-5 pa-lg-6">
    <v-avatar size="100">
      <img v-if="img" :src="img" :alt="item.name">
    </v-avatar>
    <div>
      <p class="mb-1 mt-2" style="font-size: 13px;">Every step in a project contributes to its success, therefore we take into account each and every factor that is part of the project or influences it. </p>  
      <v-rating background-color="orange lighten-3" color="orange" readonly size="14" dense :value="item.rating" half-increments />
      <div class="title mt-1" style="line-height: 1;">{{ item.name }}</div>
      <small class="text-lowercase">{{ item.email }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data: () => ({
    img: null
  }),
  created() {
    fetch("https://randomuser.me/api/?results=2")
      .then((results) => results.json())
      .then((data) => this.img = data.results[0]['picture']['large']);
  }
}
</script>

<style>
.teacher__card {
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  text-align: center;
  border: .5px solid rgba(0, 0, 0, 0.441);
  transition: ease-in-out 250ms;
  background-color: #fff;
}
.teacher__card:hover {
  border-radius: 6px;
  border: .5px solid transparent;
  transform: translateY(-6px);  
}
</style>