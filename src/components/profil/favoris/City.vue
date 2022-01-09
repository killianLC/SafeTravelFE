<template>
  <Card class="bg-primary">
    <template #title>
      <div><i class="pi pi-star-fill" />&nbsp;Paris <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" class="w-auto h-1rem"></div>
      <Button
        icon="pi pi-times"
        class="p-button-rounded text-gray-900 p-button-outlined"
      />
    </template>
    <template #content>
      <div class="flex">
        <span class="score">7/10</span>
      </div>
    </template>
    <template #footer></template>
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
  font-size: 5rem;
  font-weight: 600;
  background-color: #1d1e27;
  border-radius: 10%;
  padding: 0 1rem;
  margin: auto;
}
</style>

