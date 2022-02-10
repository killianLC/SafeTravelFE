<template>
  <Card class="m-3 border-2 border-primary">
    <template #title><i class="pi pi-chart-bar" />&nbsp;Classement </template>
    <template #content>
      <Podium :cities="cities" class="mb-4" />
      <DataTable
        :value="cities"
        sortField="rating"
        :sortOrder="-1"
        responsiveLayout="scroll"
      >
        <Column header="Classement">
          <template #body="slotProps">
            <span class="font-bold">{{ slotProps.index + 1 }}</span>
          </template>
        </Column>
        <Column field="name" header="Ville">
          <template #body="slotProps">
            <router-link
              :to="{ name: 'city', params: { name: slotProps.data.name } }"
              class="no-underline text-dark font-bold text-lg"
              ><Flag :image="slotProps.data.flag"/> {{ slotProps.data.name }}</router-link
            >
          </template>
        </Column>
        <Column field="rating" header="Note">
          <template #body="slotProps">
            <span class="font-bold">{{ slotProps.data.rating }} / 5</span>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Podium from "./Podium.vue";
import Flag from "../../Flag.vue";

export default {
  name: "Rank",
  components: {
    Card,
    DataTable,
    Column,
    Podium,
    Flag
  },
  data() {
    return {
      cities: [
        {
          id: "1000",
          name: "Paris",
          description: "Product Description",
          rating: 5,
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
        {
          id: "1001",
          name: "Lyon",
          description: "Product Description",
          rating: 4,
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
        {
          id: "1002",
          name: "Marseille",
          description: "Product Description",
          rating: 3,
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
        {
          id: "1003",
          name: "Nantes",
          description: "Product Description",
          rating: 5,
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
</style>
