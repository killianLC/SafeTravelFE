<template>
  <h1>
    VILLE
    {{ $route.params.id }}
  </h1>
  <Informations />
</template>

<script>
import Informations from "../city/Informations.vue";

export default {
  name: "City",
  components: { Informations },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
