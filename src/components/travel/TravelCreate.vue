<template>
  <Card class="lg:w-9 marge">
    <template #title> Créer votre voyage </template>
    <template #content>
      <span class="p-float-label mt-2">
        <Textarea v-model="description" class="w-full" rows="3" cols="30" />
        <label for="inputmask">Description</label>
      </span>
      <Divider />
      Etapes
      <Listbox :options="steps" :multiple="true" emptyMessage="Aucune étape n'est enregistrée.">
        <template #option="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center min-w-100">
              <Flag class="mr-2" />
              <span>{{ slotProps.option.cityName }}</span>
            </div>
            <Calendar
              v-model="slotProps.option.date"
              placeholder="date"
              dateFormat="dd.mm.yy"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.option.cityName)"
            />
          </div>
        </template>
      </Listbox>
      <div class="p-inputgroup mt-4">
        <AutoComplete
          v-model="cityInput"
          :suggestions="filteredCities"
          placeholder="Ville"
          @complete="searchCity($event)"
          field="name"
        />
        <Calendar
          v-model="dateInput"
          placeholder="date"
          dateFormat="dd.mm.yy"
        />
        <Button icon="pi pi-plus" label="Ajouter" @click="addStep" />
      </div>
    </template>
    <template #footer
      ><Button
        icon="pi pi-check"
        label="Créer votre voyage"
        @click="createTravel"
      />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Divider from "primevue/divider";
import Listbox from "primevue/listbox";
import Flag from "../../components/Flag.vue";
import axios from "axios";

export default {
  name: "TravelCreate",
  components: {
    Card,
    Button,
    Calendar,
    Textarea,
    Divider,
    Listbox,
    Flag,
    AutoComplete,
  },
  data: function () {
    return {
      cities: [],
      steps: [],
      cityInput: "",
      dateInput: "",
      description: "",
      filteredCities: null,
    };
  },
  methods: {
    addStep() {
      if (this.cityInput && this.dateInput) {
        if (this.cityInput.name) this.cityInput = this.cityInput.name;
        axios
          .get("http://localhost:8080/cities/" + this.cityInput)
          .then(() => {
            this.steps.push({
              cityName: this.cityInput,
              date: this.dateInput,
            });
          })
          .catch(() => {
            this.$toast.add({
              severity: "error",
              summary: "Erreur",
              detail: "La ville " + this.cityInput + " n'exsite pas",
              life: 3000,
            });
          });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Erreur",
          detail: "Renseignez une ville et une date",
          life: 3000,
        });
      }
    },
    removeStep(name) {
      this.steps.splice(
        this.steps.indexOf(this.steps.find((step) => step.name === name)),
        1
      );
    },
    createTravel() {
      let travel = {
        description: this.description,
        organisateurId: JSON.parse(sessionStorage.getItem("user")).id,
        steps: this.steps,
        participants: [],
      };
      axios.post("http://localhost:8080/trips", travel).then((response) =>
        this.$router.push({
          name: "travelDetails",
          params: { id: response.data.id },
        })
      );
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
      .get("http://localhost:8080/cities")
      .then((response) => (this.cities = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marge {
  margin: 0.5rem auto !important;
}
</style>

