<template>
  <Card>
    <template #title><i class="pi pi-building" /> {{ city.name }}</template>
    <template #content>
      <ul class="list-none">
        <li><i class="pi pi-map-marker" /> : France <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" class="w-auto h-1rem"></li>
        <li><i class="pi pi-box" /> : {{ city.superficie }}</li>
        <li><i class="pi pi-users" /> : {{ city.population }}  habitants</li>
      </ul>
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
.p-card :deep(.p-card-content) {
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
