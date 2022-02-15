<template>
  <img v-for="image in allImages" :src="image.link" :key="image.link" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  },
};
</script>
