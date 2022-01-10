<template>
  <Card class="bg-primary">
    <template #title>
      <div class="flex justify-content-between">
        <div>
          {{ travel.origin }} <i class="pi pi-caret-right" />
          {{ travel.destination }}
        </div>
        <Tag
          :value="travel.date"
          icon="pi pi-calendar"
          rounded
          class="bg-gray-900 text-primary"
        ></Tag>
      </div>
    </template>
    <template #content>
        <span class="text-xl font-bold">{{ travel.numberParticipants }} <i class="pi pi-users" /> participants</span>
    </template>
    <template #footer>
      <Button
        icon="pi pi-eye"
        label="Consutler"
        class="text-primary bg-dark w-full p-button-rounded"
      />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";

export default {
  name: "TravelItem",
  components: {
    Card,
    Tag,
    Button,
  },
  props: {
    travel: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

