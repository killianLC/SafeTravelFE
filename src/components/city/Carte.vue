<template>
  <Card>
    <template #title>Carte</template>
    <template #content>
      <Image imageClass="max-w-full" :src="imageUrl" alt="Image Text" />
    </template>
  </Card>
</template>

<script>
import Image from "primevue/image";
import Card from "primevue/card";
export default {
  name: "Carte",
  components: { Image, Card },
  props: {
    city: Object,
  },
  computed: {
    // a computed getter
    imageUrl() {
      // `this` points to the vm instance
      return (
        "https://tyler-demo.herokuapp.com/?greyscale=False&lat=" +
        this.city.location.latlon.latitude +
        "&lon=" +
        this.city.location.latlon.longitude +
        "&zoom=11&width=500&height=500"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
