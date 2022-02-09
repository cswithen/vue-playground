<template>
  <div class="ui secondary pointing menu">
      <a href="/" class="item">
        Image Storage
      </a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  // use '...mapActions([])' if you have additional methods you want to define specific to the component
  methods: mapActions(['login'])
}
</script>
