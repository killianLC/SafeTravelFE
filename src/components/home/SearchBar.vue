<template>
  <span class="p-input-icon-left w-full">
    <i class="pi pi-search" />
    <AutoComplete
      class="p-inputtext-lg w-full"
      :suggestions="filteredCities"
      @complete="searchCity($event)"
      field="name"
      @keyup.enter="search"
      v-model="value"
      placeholder="Rechercher votre ville"
    />
  </span>
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import axios from "axios";

export default {
  name: "SearchBar",
  components: {
    AutoComplete,
  },
  data() {
    return {
      value: "",
      cities: null,
      filteredCities: null,
    };
  },
  methods: {
    search() {
      if(this.value.name)this.$router.push({ name: "city", params: { name: this.value.name } });
      else this.$router.push({ name: "city", params: { name: this.value } });
    },
    searchCity(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCities = [...this.cities];
        } else {
          this.filteredCities = this.cities.filter((city) => {
            return city.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },
  },
  created() {
    axios
      .get("http://localhost:8080/public/cities")
      .then((response) => (this.cities = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-input-icon-left :deep(.p-autocomplete-input) {
  width: 100%;
}
</style>
