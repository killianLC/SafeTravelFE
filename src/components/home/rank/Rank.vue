<template>
  <Card class="m-3 border-2 border-primary">
    <template #title><i class="pi pi-chart-bar" />&nbsp;Classement </template>
    <template #content>
      <div v-if="cities.length !== 0">
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
              ><Flag :image="slotProps.data.flag" />
              {{ slotProps.data.name }}</router-link
            >
          </template>
        </Column>
        <Column field="note" header="Note">
          <template #body="slotProps">
            <span class="font-bold">{{ slotProps.data.note }} / 5</span>
          </template>
        </Column>
      </DataTable>
      </div>
      <h2 v-else class="text-center">
        Aucun classement
      </h2>
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
    Flag,
  },
  props: {
    cities: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
