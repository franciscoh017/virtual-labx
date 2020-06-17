<template>
  <div id="app">
    <div v-if="user.isLogedIn">
      <Navbar />
    <router-view/>
    <Foot />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import Foot from '@/components/Foot/Foot.vue'
import Login from '@/components/Login/Login.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    Navbar,
    Foot,
    Login
  },
  computed: {
    ...mapState([
      'user',
    ])
  }
}
</script>

<style lang="scss" src="./scss/main.scss"></style>
