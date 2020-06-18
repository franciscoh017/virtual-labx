<template>
  <section id="labs" class="section">
    <h1 class="title">
      {{heading}}
    </h1>
    <div class="columns is-multiline">
      <div v-for="(lab, index) in labs" :key="index" class="column is-3-desktop is-6-tablet">
        <Lab :title="lab.title" :labUrl="lab.labUrl" :imageUrl="lab.imageUrl" />
      </div>
    </div>
  </section>
</template>

<script>
import Lab from '@/components/Lab/Lab.vue'
export default {
  name: 'Labs',
  components: {
    Lab,
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      labs: [
        {
          title: 'INGI-002 - Procesos de Manufactura',
          imageUrl: 'https://images.unsplash.com/photo-1567789884554-0b844b597180'
        },
        {
          title: 'MATH-114 - Lab. de Física II [No Disponible]',
          imageUrl: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6'
        }
      ]
    };
  }
};
</script>

<style></style>
