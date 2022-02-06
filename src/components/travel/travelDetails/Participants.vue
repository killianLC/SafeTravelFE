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
      >
        <template #option="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center">
              <i class="pi pi-user"></i>
              <span class="ml-2">{{ slotProps.option.name }}</span>
            </div>
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.item.name)"
            />
          </div>
        </template>
      </Listbox>
    </template>
    <template #footer>
      <div class="p-inputgroup">
        <InputText placeholder="Inviter un voyageur" />
        <Button icon="pi pi-user-plus" label="Ajouter" />
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Listbox from "primevue/listbox";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default {
  name: "Participants",
  components: {
    Card,
    Listbox,
    Button,
    InputText,
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

