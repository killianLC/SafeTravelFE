<template>
    <Card>
        <template #header>
            <img src="./pictures/sun.png">
        </template>
        <template #title>
            Advanced Card
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
  data() {
    return {
      city: Object,
    };
  },
  created() { 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

