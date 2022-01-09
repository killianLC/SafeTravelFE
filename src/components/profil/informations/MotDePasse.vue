<template>
  <Card>
    <template #title>Mot de passe</template>
    <template #content>
      <div class="p-fluid">
        <div class="field">
          <InputText id="password" type="password" placeholder="Mot de passe"/>
        </div>
        <div class="field">
          <InputText id="confirm-password" type="password" placeholder="Confirmer le mot de passe"/>
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
  name: "MotDePasse",
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

