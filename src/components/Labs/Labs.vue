<template>
  <section id="labs" class="section">
    <h1 class="title">
      {{heading}}
    </h1>
    <div class="columns is-multiline">
      <div v-for="(lab, index) in labs" :key="index" class="column is-3-desktop is-6-tablet">
        <Lab :title="lab.title" :labCode="lab.id" :imageUrl="lab.imageUrl" />
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
    },
    labs: {
      type: Array
    }
  },
};
</script>

<style></style>
