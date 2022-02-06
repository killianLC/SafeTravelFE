<template>
  <Card>
    <template #title> Modifier les étapes du voyages </template>
    <template #content>
      <span class="p-float-label mt-2">
        <Textarea v-model="description" class="w-full" rows="3" cols="30" />
        <label for="inputmask">Description</label>
      </span>
      <Divider />
      <div class="p-inputgroup mb-4">
        <InputText placeholder="Ville" v-model="cityInput" />
        <Calendar
          v-model="dateInput"
          placeholder="date"
          dateFormat="dd.mm.yy"
        />
        <Button icon="pi pi-plus" label="Ajouter" @click="addStep" />
      </div>
      <OrderList v-model="steps" listStyle="height:auto" dataKey="name">
        <template #header> Liste des étapes </template>
        <template #item="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center min-w-100">
              <img :src="slotProps.item.flag" class="w-auto h-1rem" />
              <span class="ml-2">{{ slotProps.item.name }}</span>
            </div>

              <span class="flex align-items-center">{{ slotProps.item.date }}</span>
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.item.name)"
            />
          </div>
        </template>
      </OrderList>
    </template>
    <template #footer> </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import OrderList from "primevue/orderlist";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Divider from 'primevue/divider';

export default {
  name: "Edit",
  components: {
    Card,
    OrderList,
    Button,
    InputText,
    Calendar,
    Textarea,
    Divider
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
.min-w-100{
  min-width: 100px;
}
</style>

