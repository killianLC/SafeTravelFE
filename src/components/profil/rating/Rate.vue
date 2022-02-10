<template>
  <Card class="border-3 border-primary">
    <template #title>
      <div>
        {{ city.name }}
        <Flag :image="city.flag" />
      </div>
    </template>
    <template #content>
      <Rating v-model="rate" :stars="5" :cancel="false" />
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

