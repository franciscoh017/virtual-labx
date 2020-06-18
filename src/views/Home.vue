<template>
  <div>
    <Labs :heading="labsHeading"/>
    <PendingPractices :heading="pendingHeading" />
  </div>
</template>

<script>
import Labs from '@/components/Labs/Labs.vue'
import PendingPractices from '@/components/PendingPractices/PendingPractices.vue'
export default {
  name: 'Home',
  components: {
    Labs,
    PendingPractices
  },
  data() {
    return {
      labsHeading: 'Mis Laboratorios',
      pendingHeading: 'Practicas Pendientes'
    };
  }
};
</script>

<style lang="scss">
section:not(:last-child) {
  padding-bottom: 0;
}


</style>
