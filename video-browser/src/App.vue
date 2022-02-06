<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'

import YOUTUBE_API from '../secrets'
console.log(YOUTUBE_API)

export default {
    name: 'App',
    components: {
      SearchBar: SearchBar
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
          }).then(response => console.log(response))
      }
      },
  }
</script>
