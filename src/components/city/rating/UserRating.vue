<template>
  <Card>
    <template #title><i class="pi pi-bookmark" /> Votre note</template>
    <template #content>
      <Rating v-model="val" :stars="5" :cancel="false" />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Rating from "primevue/rating";

export default {
  name: "UserRating",
  components: {
    Card,
    Rating,
  },
  props: {
    city: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
