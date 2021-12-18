<template>
  <Card>
    <template #title>{{ city.name }}</template>
    <template #content>
      Population : {{ city.population }} habitants
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
export default {
  name: "BasicInformation",
  components: {
    Card,
  },
  props: {
    city: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
