<template>
  <div class="ui secondary pointing menu">
      <a href="/" class="item">
        Image Storage
      </a>
    <div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  // use '...mapActions([])' if you have additional methods you want to define
  methods: mapActions(['login'])
}
</script>
