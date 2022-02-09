<template>
  <Card class="bg-primary">
    <template #title>
      <div>
        <i class="pi pi-heart-fill" />&nbsp;{{ city.cityDto.name }}
        <img :src="city.flag" class="w-auto h-1rem" />
      </div>
      <Button
        icon="pi pi-times"
        class="p-button-rounded text-gray-900 p-button-outlined"
        @click="deleteFav"
      />
    </template>
    <template #content>
      <div class="flex">
        <span class="score bg-dark">{{ city.rating }}</span>
      </div>
    </template>
    <template #footer>
      <router-link
        :to="{ name: 'city', params: { name: city.cityDto.name } }"
        class="no-underline"
      >
        <Button
          icon="pi pi-eye"
          label="Consulter"
          class="text-primary bg-dark w-full p-button-rounded"
        />
      </router-link>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "City",
  components: {
    Card,
    Button,
  },
  props: {
    city: Object,
  },
  methods: {
    deleteFav() {
      console.log('delete')
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-title) {
  display: flex;
  justify-content: space-between;
}
.score {
  color: var(--primary-color);
  font-size: 3rem;
  font-weight: 600;
  border-radius: 10%;
  padding: 0 1rem;
  margin: auto;
}
</style>

