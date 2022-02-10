<template>
  <Card>
    <template #title> Modifier les étapes du voyages </template>
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
              <img :src="slotProps.option.flag" class="w-auto h-1rem mr-2" />
              <span>{{ slotProps.option.name }}</span>
            </div>
            <Calendar
              v-model="slotProps.option.date"
              placeholder="date"
              dateFormat="dd.mm.yy"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.option.name)"
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
    <template #footer> </template>
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

export default {
  name: "Edit",
  components: {
    Card,
    Button,
    InputText,
    Calendar,
    Textarea,
    Divider,
    Listbox,
  },
  created() {
    this.steps = this.travel.steps;
    this.description = this.travel.description;
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
    };
  },
  methods: {
    addStep() {
      this.steps.push({
        name: this.cityInput,
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.min-w-100 {
  min-width: 100px;
}
</style>

