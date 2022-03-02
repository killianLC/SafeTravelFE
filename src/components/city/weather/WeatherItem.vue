<template>
  <Card class="bg-primary">
    <template #title>
      {{ new Date(weather.dt * 1000).toLocaleDateString() }}
    </template>
    <template #content>
      <div class="flex justify-content-center">
        <img v-if="weather.humidity > 69" src="./pictures/rain.png" />
        <img v-else-if="weather.clouds > 80" src="./pictures/clouds.png" />
        <img v-else src="./pictures/sun.png" />
        <span class="flex align-items-center">
          {{ toCelsus(weather.temp.day) }}°C
        </span>
      </div>
      <span class="flex justify-content-center">
        Taux d'humidité : {{ weather.humidity }}%
      </span>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";

export default {
  name: "WeatherItem",
  components: {
    Card,
  },
  props: {
    weather: Object,
  },
  methods: {
    toCelsus(fahrenheit) {
      return Math.round(fahrenheit - 273.15);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-height: 50px;
  max-width: 50px;
}
.p-card :deep(.p-card-title) {
  text-align: center;
}
.p-card :deep(.p-card-content) {
  padding: 0;
}
</style>

