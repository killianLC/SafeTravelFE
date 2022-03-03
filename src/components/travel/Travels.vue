<template>
  <div class="grid">
    <div class="col-12"><Breadcrumb :home="home" :model="items" /></div>
    <ProgressSpinner v-if="travelsLoading" />
    <div class="col-12" v-if="!travelsLoading">
      <Card>
        <template #title> <i class="pi pi-car" />&nbsp;Mes voyages </template>
        <template #content>
          <div class="grid">
            <div
              class="col-12 md:col-6"
              v-for="travel in travels"
              :key="travel"
            >
              <TravelItem :travel="travel" />
            </div>
            <div class="col-12 md:col-6">
              <Card class="bg-primary">
                <template #title>&ensp;</template>
                <template #content>
                  <router-link to="TravelCreate" class="no-underline">
                    <Button
                      icon="pi pi-plus"
                      label="Créer un nouveau voyage"
                      class="
                        text-primary
                        bg-dark
                        w-full
                        p-button-rounded
                      " /></router-link
                ></template>
                <template #footer>&ensp;</template>
              </Card>
            </div>
          </div>
        </template>
        <template #footer> </template>
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
    axios.get("http://localhost:8080/trips/user/").then((response) => {
      this.travels = response.data;
      this.travelsLoading = false;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

