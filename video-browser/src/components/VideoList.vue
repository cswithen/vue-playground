<template>
  <ul>
      <!-- "v-bind=video" + ":video" are the same -->
    <VideoListItem
      v-for="video in videos"
      v-bind:video="video"
      :key="video.etag"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

 export default {
   name: 'VideoList',
   components: {
     VideoListItem
   },
   // for props can just provide an array of props but the recommended way is to provide an object with the keys as the property names and keys as data types
   props: {
     videos: Array
   }
 }
</script>

<style>

</style>
