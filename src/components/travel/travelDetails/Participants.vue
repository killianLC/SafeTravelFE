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
              <i v-if="slotProps.option.isAccept" class="pi pi-user"></i>
              <i v-else class="pi pi-envelope"></i>
              <span class="ml-2">{{ slotProps.option.name }}</span>
            </div>
            <div v-if="slotProps.option.isAccept">
              <Button
                icon="pi pi-times"
                class="p-button-rounded p-button-danger"
              />
            </div>
            <div v-else>
              <Button
                icon="pi pi-thumbs-up"
                class="p-button-rounded p-button-primary mr-2"
              />
              <Button
                icon="pi pi-thumbs-down"
                class="p-button-rounded p-button-danger"
              />
            </div>
          </div>
        </template>
      </Listbox>
    </template>
    <template #footer>
      <div class="p-inputgroup">
        <InputText id="urlTravel" v-model="this.currentUrl" disabled />
        <Button icon="pi pi-link" label="Partager" @click="copyToClipboard" />
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
  computed: {
    currentUrl() {
      return location.href;
    },
  },
  methods: {
    copyToClipboard() {
      /* Get the text field */
      var copyText = document.getElementById("urlTravel");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      this.$toast.add({
        severity: "success",
        summary: "URL copiée",
        detail: "Vous pouvez le partager avec vos amis",
        life: 3000,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

