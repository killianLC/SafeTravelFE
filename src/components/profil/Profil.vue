<template>
  <div>
    <div class="grid">
        <div class="col-12 md:col-6"><Informations /></div>
        <div class="col-12 md:col-6"><MotDePasse /></div>
        <div class="col-12"><Favoris /></div>
    </div>
  </div>
</template>

<script>
import Favoris from "./favoris/Favoris.vue";
import Informations from "./informations/Informations.vue";
import MotDePasse from "./informations/MotDePasse.vue";

export default {
  name: "Profil",
  components: {
    Favoris,
    Informations,
    MotDePasse,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

