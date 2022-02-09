<template>
  <Card>
    <template #title>
      <i class="pi pi-heart" />&nbsp;Mes villes favorites
    </template>
    <template #content>
      <div class="grid">
        <div
          class="col-12 md:col-12 lg:col-6"
          v-for="city in cities"
          :key="city.cityDto.name"
        >
          <City :city="city" />
        </div>
      </div>
    </template>
    <template #footer>
      <router-link to="/" class="no-underline"
        ><Button icon="pi pi-plus-circle" label="Découvrir de nouvelles villes"
      /></router-link>
    </template>
  </Card>
</template>

<script type="">
import Card from "primevue/card";
import Button from "primevue/button";
import City from "./City.vue";
const axios = require('axios');

export default {
  name: "Favoris",
  components: {
    Card,
    Button,
    City,
  },
  data() {
    return {
      cities: [],
    }
  },
  created() {
    axios.get('http://localhost:8080/comment/user/1', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5b2FubmJvdWdhdWx0QGdtYWlsLmNvbSIsImlhdCI6MTY0NDQxNjQ3NSwiZXhwIjoxNjQ0NDQ2NDc1fQ.kMJtdp4vMR6XOrjtcHZJv5K8lO27sB-qCKcL-7p0zgyUK3Uej1un0uRqOoTz2nUuCZ6zNZEbDyEIYL5IAWWn3Q'
      }
    })
    .then((response) => {
      // handle success
      this.cities = response.data;
      console.log(response);

    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

