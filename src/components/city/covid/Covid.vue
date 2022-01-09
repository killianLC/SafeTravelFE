<template>
  <Card>
    <template #title><i class="pi pi-shield" /> Covid</template>
    <template #content>
        Couvertures vaccinale : 70%
    </template>
    <template #footer>
      <a href="" class="no-underline">
        <Button label="Voir plus sur Santé.gouv" icon="pi pi-google" />
      </a>
      <a href=""></a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
export default {
  name: "Covid",
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
