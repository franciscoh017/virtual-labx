<template>
  <div id="home">
    <Labs :heading="labsHeading" :labs="labs" />
    <Practices v-if="pendingPractices.length > 0" :heading="pendingHeading" :practices="pendingPractices" />
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import axios from 'axios';
import Labs from '@/components/Labs/Labs.vue';
import Practices from '@/components/Practices/Practices.vue';
import {mapState} from 'vuex';
export default {
  name: 'Home',
  components: {
    Labs,
    Practices,
  },
  data() {
    return {
      labsHeading: 'Mis Laboratorios',
      pendingHeading: 'Practicas Pendientes',
      practices: [],
      userPractices: [],
      labs: [],
      isLoading: false
    };
  },
  computed: {
    ...mapState(['user']),
    pendingPractices() {
      return this.practices.filter(practice => this.userPractices.includes(practice.id))
    }
  },
  mounted() {
    this.getLabsAsync();
    this.getPracticesAsync();
  },
  methods: {
    async getLabsAsync() {
      this.isLoading = true;
      const context = this;
      axios
        .get(`${process.env.VUE_APP_API_URL}/labs`)
        .then(function(response) {
          // handle success
          context.labs = response.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
          context.isLoading = false;
        });
    },
    async getPracticesAsync() {
      this.isLoading = true;
      const context = this;
      axios
        .get(`${process.env.VUE_APP_API_URL}/practices?status=DISPONIBLE`)
        .then(function(response) {
          // handle success
          context.practices = response.data;
          context.getPendingPracticesAsync();
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
          context.isLoading = false;
        });
    },
    async getPendingPracticesAsync() {
      this.isLoading = true;
      const context = this;
      axios
        .get(`${process.env.VUE_APP_API_URL}/user-practices?completionstatus=PENDIENTE&username=${this.user.username}`)
        .then(function(response) {
          // handle success
          context.userPractices = response.data.map(x => x.practiceId);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
          context.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  #home {
		min-height: calc(100vh - (3.25rem + 7.75rem));
	}
</style>
