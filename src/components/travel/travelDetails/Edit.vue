<template>
  <Card>
    <template #title> Modifier les étapes du voyages </template>
    <template #content>
      <span class="p-float-label mt-2">
        <Textarea v-model="description" class="w-full" rows="3" cols="30" />
        <label for="inputmask">Description</label>
      </span>
      <div class="flex flex-row-reverse">
        <Button label="Modifier la description" @click="updateDescription" />
      </div>
      <Divider />
      Etapes
      <Listbox
        :options="steps"
        :multiple="true"
        emptyMessage="Aucune étape n'est enregistrée."
      >
        <template #option="slotProps">
          <div class="flex justify-content-between">
            <div class="flex align-items-center min-w-100">
              <Flag class="mr-2" />
              <span>{{ slotProps.option.city.name }}</span>
            </div>
            <Calendar
              v-model="slotProps.option.date"
              placeholder="date"
              dateFormat="dd.mm.yy"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="removeStep(slotProps.option)"
            />
          </div>
        </template>
      </Listbox>
      <div class="p-inputgroup">
        <AutoComplete
          v-model="cityInput"
          :suggestions="filteredCities"
          placeholder="Ville"
          @complete="searchCity($event)"
          field="name"
        />
        <Calendar
          v-model="dateInput"
          placeholder="date"
          dateFormat="dd.mm.yy"
        />
        <Button icon="pi pi-plus" label="Ajouter" @click="addStep" />
      </div>
      <Button
        icon="pi pi-trash"
        class="p-button-danger w-full mt-5"
        label="Supprimer le voyage"
        @click="showDialogDeleteTrip"
      />
      <ConfirmDialog></ConfirmDialog>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Divider from "primevue/divider";
import Listbox from "primevue/listbox";
import Flag from "../../Flag.vue";
import axios from "axios";
import ConfirmDialog from "primevue/confirmdialog";

export default {
  name: "Edit",
  components: {
    Card,
    Button,
    AutoComplete,
    Calendar,
    Textarea,
    Divider,
    Listbox,
    Flag,
    ConfirmDialog,
  },
  created() {
    this.steps = this.travel.steps;
    this.description = this.travel.description;
    axios
      .get("http://localhost:8080/cities")
      .then((response) => (this.cities = response.data));
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
      filteredCities: null,
      cities: [],
    };
  },
  methods: {
    searchCity(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCities = [...this.cities];
        } else {
          this.filteredCities = this.cities.filter((city) => {
            return city.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },
    addStep() {
      if (this.cityInput && this.dateInput) {
        if (this.cityInput.name) this.cityInput = this.cityInput.name;
        axios
          .get("http://localhost:8080/cities/" + this.cityInput)
          .then(() => {
            axios
              .post(
                "http://localhost:8080/trips/" +
                  this.travel.id +
                  "/step/create",
                {
                  date: this.dateInput,
                  cityName: this.cityInput,
                }
              )
              .then((reponse) => {
                this.steps.push(reponse.data);
                this.cityInput = "";
                this.dateInput = "";
              });
          })
          .catch(() => {
            this.$toast.add({
              severity: "error",
              summary: "Erreur",
              detail: "La ville " + this.cityInput + " n'exsite pas",
              life: 3000,
            });
          });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Erreur",
          detail: "Renseignez une ville et une date",
          life: 3000,
        });
      }
    },
    removeStep(step) {
      axios
        .post(
          "http://localhost:8080/trips/" +
            this.travel.id +
            "/step/delete/" +
            step.id
        )
        .then(() => {
          this.steps.splice(
            this.steps.indexOf(this.steps.find((item) => item.id == step.id)),
            1
          );
          this.$toast.add({
            severity: "success",
            summary: "Etape supprimée",
            life: 3000,
          });
        });
    },
    updateDescription() {
      this.$emit("emit-update-desc", {
        description: this.description,
      });
      this.$toast.add({
        severity: "success",
        summary: "Description modifiée",
        life: 3000,
      });
    },
    showDialogDeleteTrip() {
      this.$confirm.require({
        message: "Etes-vous sûr de vouloir supprimer ce voyage ?",
        header: "Suppression voyage",
        icon: "pi pi-exclamation-triangle",
        acceptLabel : "Confirmer",
        rejectLabel: "Annuler",
        accept: () => {
          axios
            .post("http://localhost:8080/trips/delete/" + this.travel.id)
            .then(() => {
              this.$toast.add({
                severity: "success",
                summary: "Voyage supprimé",
                life: 3000,
              });
              this.$router.push({
                name: "travels",
              });
            });
        },
        reject: () => {
          this.$confirm.close();
        },
      });
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

