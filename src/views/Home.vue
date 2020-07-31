<template>
  <div id="home">
    <Labs :heading="labsHeading" :labs="labs" />
    <Practices v-if="practices" :heading="pendingHeading" :practices="practices" />
  </div>
</template>

<script>
import axios from 'axios';
import Labs from '@/components/Labs/Labs.vue';
import Practices from '@/components/Practices/Practices.vue';
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
      practices: null,
      labs: []
    };
  },
  mounted() {
    this.getLabsAsync();
    this.getPendingPracticesAsync();
  },
  methods: {
    async getLabsAsync() {
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
        .then(function() {
          // always executed
        });
    },
    async getPendingPracticesAsync() {
      const context = this;
      axios
        .get(`${process.env.VUE_APP_API_URL}/practices?status=PENDIENTE`)
        .then(function(response) {
          // handle success
          context.practices = response.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
  },
};
</script>

<style lang="scss">
  #home {
		min-height: calc(100vh - (3.25rem + 33.85rem));
	}
</style>
