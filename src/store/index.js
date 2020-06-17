import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});


export default new Vuex.Store({
  state: {
    user: {
      username: null,
      isLogedIn: false,
    },
    isLoading: false,
    errorMessage: null,
  },
  mutations: {
    setUserData(state, result) {
      state.user.username = result.userName;
      state.user.isLogedIn = true;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
    logout(state) {
      state.user.username = null;
      state.user.isLogedIn = false;
    }
  },
  actions: {
    loginUser({ commit }, user) {
      commit('setErrorMessage', null);
      commit('setLoading', true);
      if (user.userName == 'TesisUser' && user.password == 'Tesis123') {
        commit('setUserData', user);
        commit('setErrorMessage', null);
      } else {
        commit('setErrorMessage', 'Usuario o Contraseña Invalidos');
      }
      commit('setLoading', false);
    },
    logoutUser({ commit }) {
      commit('logout');
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
  strict: debug,
})
