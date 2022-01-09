<template>
  <Card class="m-3 border-2 border-primary">
    <template #title> Classement </template>
    <template #content>
      <DataTable
        :value="cities"
        sortField="rating"
        :sortOrder="-1"
        responsiveLayout="scroll"
      >
        <Column field="name" header="Name">
          <template #body="slotProps">
            <router-link :to="{ name: 'city', params: { name: slotProps.data.name }}">{{ slotProps.data.name }}</router-link>
          </template>
        </Column>
        <Column field="description" header="Description"></Column>
        <Column field="rating" header="Rating" :sortable="true"></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "Rank",
  components: {
    Card,
    DataTable,
    Column,
  },
  data() {
    return {
      cities: [
        {
          id: "1000",
          name: "Paris",
          description: "Product Description",
          rating: 5,
        },
        {
          id: "1001",
          name: "Lyon",
          description: "Product Description",
          rating: 4,
        },
        {
          id: "1002",
          name: "Marseille",
          description: "Product Description",
          rating: 3,
        },
        {
          id: "1003",
          name: "Nantes",
          description: "Product Description",
          rating: 5,
        },
        {
          id: "1004",
          name: "Bracelet",
          description: "Product Description",
          rating: 4,
        },
        {
          id: "1005",
          name: "Brown Purse",
          description: "Product Description",
          rating: 4,
        },
        {
          id: "1006",
          name: "Chakra Bracelet",
          description: "Product Description",
          rating: 3,
        },
        {
          id: "1007",
          name: "Galaxy Earrings",
          description: "Product Description",
          rating: 5,
        },
        {
          id: "1008",
          name: "Game Controller",
          description: "Product Description",
          rating: 4,
        },
        {
          id: "1009",
          name: "Gaming Set",
          description: "Product Description",
          rating: 3,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
