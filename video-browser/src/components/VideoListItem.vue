<template>
  <li class="list-group-item d-flex" @click="onVideoSelect">
    <div class="flex-shrink-0">

    <img :src="thumbnailUrl" />
      </div>
    <div class="flex-grow-1 ms-3">
      {{ video.snippet.title }}
      </div>
  </li>
</template>

<script>
 export default {
   name: 'VideoListItem',
   props: ['video'],
   computed: {
     thumbnailUrl() {
       return this.video.snippet.thumbnails.default.url;
     }
   },
   methods: {
     onVideoSelect() {
       this.$emit('videoSelect', this.video)
     }
   }
 };
</script>

<style scoped>
  li {
    cursor: pointer;
  }

  li:hover {
    background-color: #eee;
  }
</style>
