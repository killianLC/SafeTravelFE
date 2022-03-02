<template>
  <Card>
    <template #title>
      <div><i class="pi pi-building" /> {{ city.name }}</div>
      <Button
        icon="pi pi-heart-fill"
        class="p-button-rounded text-gray-900 p-button-outlined btn-fav"
      />
    </template>
    <template #content>
      <ul class="list-none">
        <li>
          <i class="pi pi-map-marker" /> : <Flag :country="city.country" /> France
        </li>
        <li><i class="pi pi-users" /> : {{ city.population }}</li>
      </ul>
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
import Flag from '../../Flag.vue';

export default {
  name: "BasicInformation",
  components: {
    Card,
    Button,
    Flag,
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

.p-card :deep(.p-card-title) {
  display: flex;
  justify-content: space-between;
}

.btn-fav {
  max-height: 32px;
  max-width: 32px;
}
</style>
