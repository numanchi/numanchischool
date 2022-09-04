<template>
  <div class="gallery pa-3">
    <CustomImage v-for="(img, i) in 50" :key="i" :image="`https://picsum.photos/500/300?image=${i * 5 + 10}`" />
  </div>  
</template>

<script>
import CustomImage from '@/components/CustomImage.vue';
export default {
    name: "GalleryView",
    data: () => ({
      gallery: [
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw=&w=1000&q=80",
        "https://media.istockphoto.com/photos/art-museum-picture-id1218961153?k=20&m=1218961153&s=612x612&w=0&h=9w8jTH_0ffBmWcOiqv8-NGJFj4OLcIxiTlTUmSv4wwo=",
        "https://www.nationalgallery.org.uk/media/24386/p6504_017pr-432.png",
        "https://www.willmottdixoninteriors.co.uk/wp-content/uploads/2019/01/National-Gallery.png",
        "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1619963258837-b83f3406cfcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1581284943246-0eb528155992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1622838669560-061577d40307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1513005862547-c6071dd39fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
        "https://images.unsplash.com/photo-1535868118629-f37bcd69ff59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
      ]
    }),
    components: { CustomImage }
}
</script>

