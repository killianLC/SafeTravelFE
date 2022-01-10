<template>
  <Card class="bg-primary">
    <template #title>
      <div class="flex justify-content-between">
        <div>
          <router-link
            :to="{ name: 'city', params: { name: travel.origin } }"
            class="no-underline text-dark"
          >
            <img :src="travel.flagOrigin" class="w-auto h-1rem" />
            {{ travel.origin }}
          </router-link>
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          <router-link
            :to="{ name: 'city', params: { name: travel.destination } }"
            class="no-underline text-dark"
          >
            <img :src="travel.flagDestination" class="w-auto h-1rem" />
            {{ travel.destination }}
          </router-link>
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
      <span class="text-xl font-bold"
        >{{ travel.numberParticipants }}
        <i class="pi pi-users" /> participants</span
      >
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

