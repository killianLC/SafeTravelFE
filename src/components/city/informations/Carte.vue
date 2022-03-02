<template>
  <Card>
    <template #title><i class="pi pi-map" /> Carte</template>
    <template #content>
      <Image imageClass="max-w-full border-1 border-dark" :src="imageMap" alt="Image Text" />
    </template>
    <template #footer>
      <a class="no-underline">
        <Button
          @click="openGoogleMaps"
          label="Consulter sur Google Maps"
          icon="pi pi-directions"
        />
      </a>
    </template>
  </Card>
</template>

<script>
import Image from "primevue/image";
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Carte",
  components: { Image, Card, Button },
  props: {
    imageMap: String,
  },
  data() {
    return {};
  },
  methods: {
    openGoogleMaps() {
      window.open("https://www.google.fr/maps/place/" + this.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
