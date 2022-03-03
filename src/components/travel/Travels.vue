<template>
  <div class="grid">
    <div class="col-12"><Breadcrumb :home="home" :model="items" /></div>
    <ProgressSpinner v-if="travelsLoading" />
    <div class="col-12" v-if="!travelsLoading">
      <Card>
        <template #title>
          <div class="title">
            <span> <i class="pi pi-car" />&nbsp;Mes voyages </span>
            <Button
              icon="pi pi-plus"
              label="Créer un nouveau voyage"
              class="p-button-rounded"
            />
          </div>
        </template>
        <template #content>
          <div class="grid">
            <div
              class="col-12 md:col-6"
              v-for="travel in travels"
              :key="travel"
            >
              <TravelItem :travel="travel" />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";
import TravelItem from "./TravelItem.vue";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import axios from "axios";

export default {
  name: "Travels",
  components: {
    Card,
    TravelItem,
    Breadcrumb,
    Button,
    ProgressSpinner,
  },
  data() {
    return {
      travels: [],
      home: { icon: "pi pi-home", to: "/" },
      items: [{ label: "Mes voyages", to: "/travels" }],
      travelsLoading: true,
    };
  },
  created() {
    if (!sessionStorage.getItem("user"))
      this.$router.push({
        name: "connexion",
      });

    axios.get("http://localhost:8080/trips/user/").then((response) => {
      this.travels = response.data;
      this.travelsLoading = false;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}
</style>

