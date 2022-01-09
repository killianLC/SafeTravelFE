<template>
  <Card>
    <template #title><i class="pi pi-book" /> Dernière news</template>
    <template #content>
      <img
        src="./Exemple.png"
        class="w-full"
      />
    </template>
    <template #footer>
      <a href="" class="no-underline">
        <Button label="Voir plus sur Google Actualitées" icon="pi pi-google" />
      </a>
      <a href=""></a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
export default {
  name: "News",
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
