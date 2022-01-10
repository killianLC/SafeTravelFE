<template>
  <Card>
    <template #title>
      <div><i class="pi pi-heart" /> Santé</div>
    </template>
    <template #content>
     Qualité de l’air / Pollution
     Qualité de l’eau
     Taux d’humidité
    </template>
    <template #footer>
      <a href="" class="no-underline">
        <Button label="Consulter sur Google" icon="pi pi-google" />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Health",
  components: {
    Card,
    Button,
  },
  props: {
    city: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
