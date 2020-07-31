<template>
  <section class="section">
    <h1 class="title">
      {{heading}}
    </h1>
    <ul class="columns is-multiline">
      <li v-for="(practice, index) in practices" :key="index" class="column  is-3-desktop is-6-tablet">
        <Practice
          :id="practice.id"
          :order="practice.practiceOrder"
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
import Practice from '@/components/Practice/Practice'
export default {
  name: 'Practices',
  components: {
    Practice
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    practices: {
      type: Array
    }
  },
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
