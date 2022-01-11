<template>
  <Card>
    <template #title>
      {{ participants.length }} <i class="pi pi-users" /> participants
    </template>
    <template #content>
      <Listbox
        v-model="selectedCity"
        :options="participants"
        optionLabel="name"
        :filter="true"
      />
    </template>
    <template #footer>
      <Button
        icon="pi pi-plus-circle"
        label="Inviter un voyageur"
        class="text-primary bg-dark w-full p-button-rounded"
      />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Listbox from "primevue/listbox";
import Button from "primevue/button";

export default {
  name: "Participants",
  components: {
    Card,
    Listbox,
    Button,
  },
  props: {
    participants: Array,
  },
  data: function () {
    return {
      selectedCity: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

