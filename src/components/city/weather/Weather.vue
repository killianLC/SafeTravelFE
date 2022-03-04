<template>
  <Card>
    <template #title><i class="pi pi-sun" /> Météo</template>
    <template #content v-if="this.city.meteo">
      <div class="grid overflow-x-hidden overflow-y-auto">
        <div
          v-for="weather in this.city.meteo.daily"
          :key="weather"
          class="col-6"
        >
          <WeatherItem :weather="weather" />
        </div>
      </div>
    </template>
    <template #footer>
      <a class="no-underline">
        <Button
          @click="openGoogleMeteo"
          label="Voir plus sur Google Météo"
          icon="pi pi-google"
        />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import WeatherItem from "./WeatherItem.vue";

export default {
  name: "Weather",
  components: {
    Card,
    Button,
    WeatherItem,
  },
  props: {
    city: Object,
  },
  methods: {
    openGoogleMeteo() {
      window.open("https://www.google.com/search?q=météo+" + this.city.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card:deep(.grid) {
  max-height: 310px;
  margin: 0;
}
</style>
