<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <figure>
            <img src="@/assets/logo.png" alt="" />
          </figure>
          <h3 class="title has-text-white">Iniciar Sesión</h3>
          <hr class="login-hr" />
          <p class="subtitle has-text-white">Inicie sesión para proceder.</p>
          <b-message
            :active="errorMessage ? true : false"
            type="is-danger"
            auto-close
          >
            {{ errorMessage }}
          </b-message>
          <div class="box">
            <form @submit.prevent="loginUser(loginForm)">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Nombre de Usuario"
                    autofocus=""
                    v-model="loginForm.userName"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Contraseña"
                    v-model="loginForm.password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="button is-block is-jet is-large is-fullwidth"
                :class="{ 'is-loading': isLoading }"
              >
                Iniciar Sesión <i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../" class="has-text-white">Recuperar Contraseña</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapState(['isLoading', 'errorMessage']),
  },
  methods: {
    ...mapActions(['loginUser']),
  },
};
</script>

<style lang="scss" scoped>
.box {
  background-color: rgba(0, 0, 0, 0.4) !important;
}
</style>
