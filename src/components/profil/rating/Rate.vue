<template>
  <Card class="border-3 border-primary">
    <template #title>
      <div>
        {{ comment.city.name }}
        <Flag :image="comment.city.flag" />
      </div>
    </template>
    <template #content>
      <Rating v-model="rating" :stars="5" :cancel="false" :readonly="true" />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Rating from "primevue/rating";
import Flag from "../../Flag"

export default {
  name: "Rate",
  components: {
    Card,
    Rating,
    Flag
  },
  data: function () {
    return {
      rating: Number,
    };
  },
  created() {
    this.rating = this.comment.rating;
  },
  props: {
    comment: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

