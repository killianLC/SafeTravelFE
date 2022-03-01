<template>
  <Card class="bg-primary">
    <template #title>
      <div class="flex justify-content-between">
        <div>
          <router-link
            :to="{ name: 'city', params: { name: this.firstStep.city.name } }"
            class="no-underline text-dark"
          >
            <Flag :image="travel.flagOrigin" />
            {{ this.firstStep.city.name }}
          </router-link>
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          <router-link
            :to="{ name: 'city', params: { name: this.lastStep.city.name } }"
            class="no-underline text-dark"
          >
            <Flag :image="travel.flagDestination" />
            {{ this.lastStep.city.name }}
          </router-link>
        </div>
        <Tag
          :value="this.firstStep.date+' 🢂 '+this.lastStep.date"
          icon="pi pi-calendar"
          rounded
          class="bg-gray-900 text-primary"
        ></Tag>
      </div>
    </template>
    <template #content>
      <span class="text-xl font-bold"
        >{{ travel.participants.length }}
        <i class="pi pi-users" /> participants</span
      >
    </template>
    <template #footer>
      <router-link
        :to="{ name: 'travelDetails', params: { id: travel.id } }"
        class="no-underline text-dark"
      >
        <Button
          icon="pi pi-eye"
          label="Consulter"
          class="text-primary bg-dark w-full p-button-rounded"
      /></router-link>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";
import Flag from "../Flag.vue";

export default {
  name: "TravelItem",
  components: {
    Card,
    Tag,
    Button,
    Flag,
  },
  props: {
    travel: Object,
  },
  computed: {
    firstStep() {
      return this.travel.steps[0];
    },
    lastStep() {
      return this.travel.steps[this.travel.steps.length - 1];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

