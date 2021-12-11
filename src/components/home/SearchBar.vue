<template>
  <span class="p-input-icon-left w-full">
    <i class="pi pi-search" />
    <InputText
      class="p-inputtext-lg w-full"
      id="username"
      type="text"
      placeholder="Rechercher votre ville"
    />
  </span>
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  name: "SearchBar",
  components: {
    InputText,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
