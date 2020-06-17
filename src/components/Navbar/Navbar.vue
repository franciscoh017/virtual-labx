<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png" alt="">
        <span class="is-size-4">VirtualLabx</span>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <b-icon icon="user" pack="fas"></b-icon>
        <span>Melany Jaquez</span>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-warning">
            <b-icon icon="sign-out-alt" pack="fas"></b-icon>
            <span>Log Out</span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
