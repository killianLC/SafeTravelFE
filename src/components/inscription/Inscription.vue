<template>
  <div class="flex justify-content-center">
    <Card>
      <template #title><div class="text-center">Inscription</div></template>
      <template #content>
        <InscriptionForm />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import InscriptionForm from "./InscriptionForm.vue";

export default {
  name: "Inscription",
  components: {
    Card,
    InscriptionForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card{
  max-width: 600px;
}
</style>
