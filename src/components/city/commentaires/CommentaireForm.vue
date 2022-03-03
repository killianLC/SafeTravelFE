<template>
  <Card class="bg-primary">
    <template #title>Poster votre commentaire</template>
    <template #content>
      <div class="formgrid grid">
        <div class="field col-12">
          <Rating v-model="rating" :stars="5" :cancel="false" />
          <Textarea
            class="w-full"
            v-model="text"
            rows="5"
            cols="30"
            placeholder="Je trouve la ville sympa"
          />
        </div>
      </div>
      <div class="flex justify-content-center">
        <Button
          class="p-button-raised p-button-rounded bg-white"
          label="Envoyer"
          icon="pi pi-send"
          iconPos="right"
          @click="emitEvent"
        />
      </div>
    </template>
  </Card>
</template>

<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Rating from "primevue/rating";
import Card from "primevue/card";

export default {
  name: "CommentaireForm",
  components: {
    Textarea,
    Button,
    Rating,
    Card,
  },
  props: {
    city: Object,
  },
  emits: ["emit-add-comment"],
  data: function () {
    return {
      text: "",
      rating: 0,
    };
  },
  methods: {
    emitEvent() {
      this.$emit("emit-add-comment", {
        description: this.text,
        date: new Date(),
        rating: this.rating,
        user: JSON.parse(sessionStorage.getItem("user")),
        city: {
          id: this.city.id,
        },
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-content) {
  padding: 0;
}
.p-card :deep(.p-card-title) {
  font-size: 20px;
}
.p-card :deep(.p-rating-icon:hover) {
  color: white !important;
}
.p-card :deep(.pi-star-fill) {
  color: white !important;
}

.p-card{
  margin: 2rem auto;
  max-width: 800px;
}
</style>
