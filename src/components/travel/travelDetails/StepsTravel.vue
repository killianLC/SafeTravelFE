<template>
  <Card>
    <template #title>
      <div class="flex justify-content-between">
        <div>
          <router-link
            :to="{ name: 'city', params: { name: steps[0].name } }"
            class="no-underline text-dark"
          >
            <img :src="steps[0].flag" class="w-auto h-1rem" />
            {{ steps[0].name }}
          </router-link>
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          {{ steps.length-2 }} etapes
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          <router-link
            :to="{
              name: 'city',
              params: { name: steps[steps.length - 1].name },
            }"
            class="no-underline text-dark"
          >
            <img :src="steps[steps.length - 1].flag" class="w-auto h-1rem" />
            {{ steps[steps.length - 1].name }}
          </router-link>
        </div>
        <Tag
          :value="steps[0].date"
          icon="pi pi-calendar"
          rounded
          class="bg-gray-900 text-primary"
        ></Tag>
      </div>
    </template>
    <template #content>
      <div class="p-inputgroup mb-4">
        <InputText placeholder="Ville" v-model="cityInput" />
        <Button icon="pi pi-plus" label="Ajouter" @click="addStep"/>
      </div>
      <OrderList v-model="steps" listStyle="height:auto" dataKey="name">
        <template #header> Liste des étapes </template>
        <template #item="slotProps">
          <div class="flex justify-content-between">
            <div>
              <img :src="slotProps.item.flag" class="w-auto h-1rem" />
              <span class="ml-2">{{ slotProps.item.name }}</span>
            </div>

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
import Tag from "primevue/tag";
import OrderList from "primevue/orderlist";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default {
  name: "StepsTravel",
  components: {
    Card,
    Tag,
    OrderList,
    Button,
    InputText,
  },
  created() {
    this.steps = this.travel.steps;
  },
  props: {
    travel: Object,
  },
  data: function () {
    return {
      steps: [],
      cityInput: "",
    };
  },
  methods: {
    addStep() {
      this.steps.push({
        name: this.cityInput,
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        date: "2020-01-01",
      });
    },
    removeStep(name){
      this.steps.splice(this.steps.indexOf(this.steps.find(step => step.name === name)), 1);
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

