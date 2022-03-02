<template>
  <Card>
    <template #title><i class="pi pi-sun" /> Météo</template>
    <template #content>
      <div v-for="weather in this.city.meteo.daily" :key="weather">
        <WeatherItem :weather="weather" />
      </div>
    </template>
    <template #footer>
      <a class="no-underline">
        <Button @click=openGoogleMeteo label="Voir plus sur Google Météo" icon="pi pi-google" />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Weather",
  components: {
    Card,
    Button,
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
</style>
