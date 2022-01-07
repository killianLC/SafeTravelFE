<template>
  <Card>
    <template #title>Inscription</template>
    <template #content>
      <div class="formgrid grid">
        <div class="field col-12 md:col-12">
          <InputText
            class="inputfield w-full"
            id="prenom"
            type="text"
            placeholder="Prénom"
          />
        </div>
        
        <div class="field col-12 md:col-12">
          <InputText
            class="inputfield w-full"
            id="nom"
            type="text"
            placeholder="Nom"
          />
        </div>

        <div class="field col-12 md:col-12">
          <InputText
            class="inputfield w-full"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div class="field col-12 md:col-12">
          <InputText
            class="inputfield w-full"
            id="email"
            type="password"
            placeholder="Mot de passe"
          />
        </div>  

        <div class="field col-12 md:col-12">
          <InputText
            class="inputfield w-full"
            id="email"
            type="password"
            placeholder="Confirmer le mot de passe"
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
  name: "Inscription",
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
