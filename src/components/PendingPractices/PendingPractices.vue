<template>
  <section class="section">
    <h1 class="title">
      {{heading}}
    </h1>
    <ul class="columns is-multiline">
      <li v-for="(practice, index) in pendingPractices" :key="index" class="column  is-3-desktop is-6-tablet">
        <PendingPractice
          :order="practice.order"
          :title="practice.title"
          :body="practice.body"
          :dueDate="practice.dueDate"
          :created="practice.created"
          :url="practice.url"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import PendingPractice from '@/components/PendingPractice/PendingPractice'
export default {
  name: 'Pending-Practices',
  components: {
    PendingPractice
  },
  props: {
    heading: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      pendingPractices: [
        {
          order: 1,
          title: 'Estudio de tiempos',
          body: `En esta practica de laboratorio estaremos utilizando el
                      cronometro para medición de tiempos y determinación de
                      tiempos estandard, tiempos de ciclo, etc. en un conveyor.`,
          dueDate: '2020-06-18T23:59:59',
          created: '2020-06-18T00:00:00',
          url: '#'
        },
        {
          order: 2,
          title: 'Balanceo de Línea',
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos aperiam qui rem quas, ad maxime provident dolorum
                      incidunt sapiente enim quasi, ea distinctio blanditiis
                      eligendi mollitia ducimus rerum! Perferendis, cupiditate!`,
          dueDate: '2020-07-15T23:59:59',
          created: '2020-06-18T00:00:00',
          url: '#'
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    .box {
      height: 100%;
    }
  }
}
</style>
