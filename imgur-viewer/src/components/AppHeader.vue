<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item"> Image Storage </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a href="" class="item">Galleries</a>
        <a href="" class="item">Upload</a>
        <a @click="logout" class="item">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  // use '...mapActions([])' if you have additional methods you want to define specific to the component goes for mapGetters as well
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"]),
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
