<template>
  <Card class="bg-primary mb-2">
    <template #content>{{ article.title._text }}</template>
    <template #footer>
      <a class="no-underline" :href="article.link._text" target="”_blank”">
        <Button
          class="w-full bg-white p-button-rounded"
          label="Consulter"
          icon="pi pi-link"
        />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Article",
  components: {
    Card,
    Button,
  },
  props: {
    article: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-content) {
  padding: 0;
  font-weight: 500;
}
</style>
