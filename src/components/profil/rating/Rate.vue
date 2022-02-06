<template>
  <Card class="border-3 border-primary">
    <template #title>
      <div>
        {{ city.name }}
        <img :src="city.flag" class="w-auto h-1rem" />
      </div>
    </template>
    <template #content>
      <Rating v-model="rate" :stars="10" :cancel="false" />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Rating from "primevue/rating";

export default {
  name: "Rate",
  components: {
    Card,
    Rating,
  },
  data: function () {
    return {
      rate: Number,
    };
  },
  created() {
    this.rate = this.city.rate;
  },
  props: {
    city: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

