<template>
  <a :href="url" class="is-size-5 box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Practica {{ order }}: </strong> {{ title }}
            <br />
            <small class="has-text-grey">
              {{ `${body}` }}
            </small>
          </p>
          <small v-if="dueDate" :class="{ 'has-text-danger': daysTillDue <= 1 }"
            ><strong>Vence:</strong> {{ new Date(dueDate).toLocaleString() }}</small
          >
        </div>
      </div>
      <div class="media-right">
        <b-tag v-if="isNew" rounded type="is-danger">Nueva</b-tag>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  name: 'Pending-Practice',
  props: {
    title: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
    },
    created: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    daysTillDue() {
      return this.daysBetween(new Date() , new Date(this.dueDate));
    },
    isNew() {
      return this.daysBetween(new Date(this.created), new Date() ) <= 7
    },
  },
  methods: {
    daysBetween(date1, date2) {
      //Get 1 day in milliseconds
      var one_day = 1000 * 60 * 60 * 24;

      // Convert both dates to milliseconds
      var date1_ms = date1.getTime();
      var date2_ms = date2.getTime();

      // Calculate the difference in milliseconds
      var difference_ms = date2_ms - date1_ms;

      // Convert back to days and return
      return Math.round(difference_ms / one_day);
    },
  },
};
</script>
