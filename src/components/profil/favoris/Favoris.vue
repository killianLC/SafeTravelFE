<template>
  <Card>
    <template #title>
      <i class="pi pi-heart" />&nbsp;Mes villes favorites
    </template>
    <template #content>
      <div class="grid">
        <div class="col-12 md:col-4 lg:col-3">
          <City />
        </div>
        <div class="col-12 md:col-4 lg:col-3">
          <City />
        </div>
        <div class="col-12 md:col-4 lg:col-3">
          <City />
        </div>
        <div class="col-12 md:col-4 lg:col-3">
          <City />
        </div>
      </div>
    </template>
    <template #footer>
      <router-link to="/" class="no-underline"
        ><Button icon="pi pi-plus-circle" label="Découvrir de nouvelles villes"
      /></router-link>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import City from "./City.vue";

export default {
  name: "Favoris",
  components: {
    Card,
    Button,
    City,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

