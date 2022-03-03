<template>
  <div class="grid">
    <div class="col-12">
      <Breadcrumb :home="home" :model="items" />
    </div>
    <div class="col-12 md:col-6"><Informations /></div>
    <div class="col-12 md:col-6"><MotDePasse /></div>
    <div class="col-12 md:col-8"><Favoris /></div>
    <div class="col-12 md:col-4"><Ratings /></div>
  </div>
</template>

<script>
import Favoris from "./favoris/Favoris.vue";
import Informations from "./informations/Informations.vue";
import MotDePasse from "./informations/MotDePasse.vue";
import Ratings from "./rating/Ratings.vue";
import Breadcrumb from "primevue/breadcrumb";

export default {
  name: "Profil",
  components: {
    Favoris,
    Informations,
    MotDePasse,
    Ratings,
    Breadcrumb,
  },
  data() {
    return {
      home: { icon: "pi pi-home", to: "/" },
      items: [{ label: "Mon profil", to: "/profil" }],
    };
  },
  created() {
    if (!sessionStorage.getItem("user"))
      this.$router.push({
        name: "connexion",
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

