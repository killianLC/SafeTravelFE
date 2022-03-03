<template>
  <Card>
    <template #title>
      {{ travel.participants.length }} <i class="pi pi-users" /> participants
    </template>
    <template #content>
      <Listbox
        :options="travel.participants"
        optionLabel="user.firstname"
        :filter="true"
        emptyMessage="Aucun participant"
      >
        <template #option="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center">
              <i v-if="slotProps.option.statut" class="pi pi-user"></i>
              <i v-else class="pi pi-envelope"></i>
              <span class="ml-2">{{
                slotProps.option.user.firstname +
                " " +
                slotProps.option.user.lastname
              }}</span>
            </div>
            <div v-if="slotProps.option.statut">
              <Button
                icon="pi pi-times"
                class="p-button-rounded p-button-danger"
                @click="refuse(slotProps.option.id)"
              />
            </div>
            <div v-else>
              <Button
                icon="pi pi-thumbs-up"
                class="p-button-rounded p-button-primary mr-2"
                @click="accept(slotProps.option.id)"
              />
              <Button
                icon="pi pi-thumbs-down"
                class="p-button-rounded p-button-danger"
                @click="refuse(slotProps.option.id)"
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
import axios from "axios";

export default {
  name: "Participants",
  components: {
    Card,
    Listbox,
    Button,
    InputText,
  },
  props: {
    travel: Object,
  },
  data: function () {
    return {
      selectedCity: null,
      participants: [],
    };
  },
  computed: {
    currentUrl() {
      return location.href;
    },
  },
  created() {
    this.participants = this.travel.participants;
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
    accept(id) {
      axios
        .post("http://localhost:8080/participants/accept", {
          tripId: this.travel.id,
          participantId: id,
        })
        .then(() => {
          const index = this.participants.findIndex(
            (participant) => participant.id === id
          );
          this.participants[index].statut = true;
          this.$toast.add({
            severity: "success",
            detail: "Vous avez accepté la demande",
            life: 3000,
          });
        });
    },
    refuse(id) {
      axios
        .post("http://localhost:8080/participants/delete", {
          tripId: this.travel.id,
          participantId: id,
        })
        .then(() => {
          const index = this.participants.findIndex(
            (participant) => participant.id === id
          );
          this.participants = this.participants.splice(index,1);
          this.$toast.add({
            severity: "error",
            summary: "Vous avez refusé la demande",
            life: 3000,
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

