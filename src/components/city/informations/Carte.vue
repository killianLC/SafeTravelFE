<template>
  <Card>
    <template #title><i class="pi pi-map"/> Carte</template>
    <template #content>
      <Image imageClass="max-w-full" src="https://f.hellowork.com/blogdumoderateur/2013/08/trafic-paris-550x479.jpg" alt="Image Text" />
    </template>
  </Card>
</template>

<script>
import Image from "primevue/image";
import Card from "primevue/card";
export default {
  name: "Carte",
  components: { Image, Card },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
