<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item active"> Image Storage </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </div>
      <a v-else to="#" class="ui item" @click="login">Login</a>
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
