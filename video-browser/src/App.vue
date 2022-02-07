<template>
  <div class="container">
    <!-- alternative v-on: -->
    <SearchBar @termChange="onTermChange"></SearchBar>

    <!-- alternative v-bind: -->
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import axios from 'axios'

// components
import SearchBar from './components/SearchBar.vue'
import VideoList from "./components/VideoList.vue"

// importing keys
import YOUTUBE_API from '../secrets'

export default {
    name: 'App',
    components: {
      SearchBar,
      VideoList
    },
    data() {
      return { videos: [] };
    },
      methods: {
        onTermChange(searchTerm) {
          axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: YOUTUBE_API,
              type: 'video',
              part: 'snippet',
              q: searchTerm
            }
          }).then(response => {
            this.videos = response.data.items;
          })
      }
      },
  }
</script>
