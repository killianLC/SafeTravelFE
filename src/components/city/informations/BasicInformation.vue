<template>
  <Card>
    <template #title>
      <div><i class="pi pi-building" /> {{ city.name }}</div>
      <Button
        :icon="isFavCity ? 'pi pi-heart-fill' : 'pi pi-heart'"
        class="p-button-rounded text-danger-900 p-button-outlined btn-fav"
        @click="addRemoveCityFav(city)"
      />
    </template>
    <template #content>
      <ul class="list-none">
        <li>
          <i class="pi pi-map-marker" /> :
          <Flag :country="city.country" /> France
        </li>
        <li><i class="pi pi-users" /> : {{ city.population }} habitants</li>
        <li>
          <i class="pi pi-compass" /> : Région {{ city.region }} - Département
          {{ city.departement }}
        </li>
      </ul>
    </template>
    <template #footer>
      <a class="no-underline">
        <Button
          @click="openGoogle"
          label="Consulter sur Google"
          icon="pi pi-google"
        />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Flag from "../../Flag.vue";
import axios from "axios";

export default {
  name: "BasicInformation",
  components: {
    Card,
    Button,
    Flag,
  },
  props: {
    city: Object,
  },
  data: function () {
    return {
      isFavCity: false,
    };
  },
  mounted() {
    this.isFavorite();
  },
  methods: {
    openGoogle() {
      window.open("https://www.google.fr/search?q=" + this.city.name);
    },
    addRemoveCityFav() {
      if (!this.isFavCity) {
        axios
          .post("http://localhost:8080/cities/favoris/" + this.city.id)
          .then(() => {
            this.isFavCity = true;
            this.$toast.add({
              severity: "success",
              detail: "Ville ajoutée aux favoris",
              life: 3000,
            });
          });
      } else {
        axios
          .post("http://localhost:8080/cities/favoris/delete/" + this.city.id)
          .then(() => {
            this.isFavCity = false;
            this.$toast.add({
              severity: "success",
              detail: "Ville supprimée des favoris",
              life: 3000,
            });
          });
      }
    },
    isFavorite() {
      axios
        .get("http://localhost:8080/cities/favoris/isFav/" + this.city.id)
        .then((res) => {
          this.isFavCity = res.data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-content) {
  font-weight: 500;
  font-size: 1.2rem;
}

.p-card :deep(.p-card-title) {
  display: flex;
  justify-content: space-between;
}

.btn-fav {
  max-height: 32px;
  max-width: 32px;
}
</style>
