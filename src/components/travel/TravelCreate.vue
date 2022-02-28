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
      <Listbox :options="steps" :multiple="true">
        <template #option="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center min-w-100">
              <Flag :image="slotProps.option.flag" class="mr-2" />
              <span>{{ slotProps.option.city }}</span>
            </div>
            <Calendar
              v-model="slotProps.option.date"
              placeholder="date"
              dateFormat="dd.mm.yy"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.option.city)"
            />
          </div>
        </template>
      </Listbox>
      <div class="p-inputgroup mt-4">
        <InputText placeholder="Ville" v-model="cityInput" />
        <Calendar
          v-model="dateInput"
          placeholder="date"
          dateFormat="dd.mm.yy"
        />
        <Button icon="pi pi-plus" label="Ajouter" @click="addStep" />
      </div>
    </template>
    <template #footer
      ><Button icon="pi pi-check" label="Créer votre voyage" />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
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
    InputText,
    Calendar,
    Textarea,
    Divider,
    Listbox,
    Flag,
  },
  data: function () {
    return {
      steps: [],
      cityInput: "",
      dateInput: "",
      description: "",
    };
  },
  methods: {
    addStep() {
      this.steps.push({
        city: this.cityInput,
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        date: this.dateInput,
      });
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
        organisateur: JSON.parse(sessionStorage.getItem("user")).id,
        steps: this.steps,
        participants: [],
      };
      axios
        .post("http://localhost:8080/travels", travel)
        .then((response) =>
          this.$router.push({
            name: "travelDetails",
            params: { id: response.data.id },
          })
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marge {
  margin: 0.5rem auto !important;
}
</style>

