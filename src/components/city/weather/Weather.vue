<template>
  <Card>
    <template #title><i class="pi pi-sun" /> Météo</template>
    <template #content>
      <img class="w-full" src="./Exemple.png" />
    </template>
    <template #footer>
      <a href="" class="no-underline">
        <Button label="Voir plus sur Google Météo" icon="pi pi-google" />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Weather",
  components: {
    Card,
    Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
