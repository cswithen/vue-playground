<template>
  <div class="container">
    <!-- alternative v-on: -->
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <!-- alternative v-bind: -->
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// components
import SearchBar from './components/SearchBar.vue'
import VideoList from "./components/VideoList.vue"
import VideoDetail from "./components/VideoDetail.vue"

// importing keys
import YOUTUBE_API from '../secrets'

export default {
    name: 'App',
    components: {
      SearchBar,
      VideoList,
      VideoDetail
    },
    data() {
      return { videos: [], selectedVideo: null };
    },
      methods: {
        onVideoSelect(video) {
          this.selectedVideo = video;
        },
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
