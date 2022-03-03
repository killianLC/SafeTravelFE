<template>
  <div class="flex justify-content-center">
    <Card>
      <template #title><div class="text-center">Connexion</div></template>
      <template #content>
        <ConnexionForm />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import ConnexionForm from "./ConnexionForm.vue";

export default {
  name: "Connexion",
  components: {
    Card,
    ConnexionForm,
  },
  created() {
    if (sessionStorage.getItem("user"))
      this.$router.push({
        name: "home",
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card {
  max-width: 600px;
}
</style>
