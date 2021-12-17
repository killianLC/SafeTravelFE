<template>
  <Card>
    <template #title>Informations</template>
    <template #content>
      <div class="formgrid grid">
        <div class="field col-12 md:col-6">
          <InputText
            class="inputfield w-full"
            id="nom"
            type="text"
            placeholder="Nom"
          />
        </div>
        <div class="field col-12 md:col-6">
          <InputText
            class="inputfield w-full"
            id="prenom"
            type="text"
            placeholder="Prenom"
          />
        </div>

        <div class="field col-12 md:col-12">
          <InputText
            class="inputfield w-full"
            id="email"
            type="email"
            placeholder="Email"
            disabled
          />
        </div>  
      </div>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Enregistrer" class="relative" />
    </template>
  </Card>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";

export default {
  name: "Informations",
  components: {
    Button,
    Card,
    InputText,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

