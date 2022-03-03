<template>
  <div class="formgrid grid">
    <div class="field col-12">
      <Rating v-model="rating" :stars="5" :cancel="false" />
      <Textarea class="w-full" v-model="text" rows="5" cols="30" />
    </div>
    <div class="field col-12">
      <Button
        label="Envoyer"
        icon="pi pi-send"
        iconPos="right"
        @click="emitEvent"
      />
    </div>
  </div>
  <div class="w-full"></div>
</template>

<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Rating from "primevue/rating";

export default {
  name: "CommentaireForm",
  components: {
    Textarea,
    Button,
    Rating,
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
        comment: {
          description: this.text,
          date: new Date(),
          rating: this.rating,
          user: JSON.parse(sessionStorage.getItem("user")),
          city: {
            id: this.city.id,
          },
        },
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
