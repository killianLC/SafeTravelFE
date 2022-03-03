<template>
  <Card>
    <template #title> Modifier les étapes du voyages </template>
    <template #content>
      <span class="p-float-label mt-2">
        <Textarea v-model="description" class="w-full" rows="3" cols="30" />
        <label for="inputmask">Description</label>
      </span>
      <div class="flex flex-row-reverse">
        <Button label="Modifier la description" @click="updateDescription" />
      </div>
      <Divider />
      Etapes
      <Listbox
        :options="steps"
        :multiple="true"
        emptyMessage="Aucune étape n'est enregistrée."
      >
        <template #option="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center min-w-100">
              <Flag class="mr-2" />
              <span>{{ slotProps.option.city.name }}</span>
            </div>
            <Calendar
              v-model="slotProps.option.date"
              placeholder="date"
              dateFormat="dd.mm.yy"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.option)"
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
import Flag from "../../Flag.vue";
import axios from "axios";

export default {
  name: "Edit",
  components: {
    Card,
    Button,
    AutoComplete,
    Calendar,
    Textarea,
    Divider,
    Listbox,
    Flag,
  },
  created() {
    this.steps = this.travel.steps;
    this.description = this.travel.description;
    axios
      .get("http://localhost:8080/cities")
      .then((response) => (this.cities = response.data));
  },
  props: {
    travel: Object,
  },
  data: function () {
    return {
      steps: [],
      cityInput: "",
      dateInput: "",
      description: "",
      filteredCities: null,
      cities: [],
    };
  },
  methods: {
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
    removeStep(step) {
      axios
        .post("http://localhost:8080/trip/delete/step", {
          stepId: step.id,
          tripId: this.travel.id,
        })
        .then(() => {
          this.steps.splice(
            this.steps.indexOf(
              this.steps.find((item) => item.name === step.city.name)
            ),
            1
          );
          this.$toast.add({
            severity: "success",
            summary: "Etape supprimée",
            life: 3000,
          });
        });
    },
    updateDescription() {
      axios.post("http://localhost:8080/trips", this.travel).then((response) =>
        this.$router.push({
          name: "travelDetails",
          params: { id: parseInt(response.data) },
        })
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.min-w-100 {
  min-width: 100px;
}
</style>

