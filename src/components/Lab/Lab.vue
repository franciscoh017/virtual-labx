<template>
  <router-link
    tag="a"
    :to="{
      path: '/labs',
      query: {
        code: labCode
      }}"
  >
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="imageUrl"
          />
        </figure>
      </div>
      <div class="card-content has-background-jet">
        <span class="has-text-white has-text-weight-semibold">
          {{ `${labCode} - ${title}` }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Lab',
  props: {
    labCode: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  .card {
    border-radius: 0.375rem;
    height: 100%;
    .card-image {
      img {
        border-radius: 0.375rem 0.375rem 0 0;
      }
    }
    .card-content {
      border-radius: 0 0 0.375rem 0.375rem;
    }
  }
}
</style>
