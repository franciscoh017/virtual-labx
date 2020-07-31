import Vue from 'vue'
import axios from 'axios'
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
    async loginUser({ commit }, user) {
      JSON.stringify(user);
      commit('setErrorMessage', null);

      try {
        commit('setLoading', true);
        const response = await axios({
          method: 'post',
          url: `${process.env.VUE_APP_API_URL}/login`,
          data: user
        });

        if (response.data.isCorrectUser) 
        {
          commit('setUserData', user);
        } else {
          commit('setErrorMessage', 'Usuario o Contraseña incorrectos.');
        }
      } catch (error) {
        commit('setErrorMessage', 'Usuario o Contraseña incorrectos.');
      } finally {
        commit('setLoading', false);
      }

    },
    logoutUser({ commit }) {
      commit('logout');
    }
  },
  getters: {
    getPracticeUrlByOrder: (state) => (order) => {
      const currentPractice = state.practices.find(practice => practice.order === order);
      return currentPractice.url;
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
  strict: debug,
})
