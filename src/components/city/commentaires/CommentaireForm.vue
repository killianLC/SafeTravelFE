<template>
  <div class="card">
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
          @click="sendComment"
        />
      </div>
    </div>
  </div>
  <div class="w-full"></div>
</template>

<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Rating from "primevue/rating";
import axios from "axios";

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
  data: function () {
    return {
      text: "",
      rating: 0,
    };
  },
  methods: {
    sendComment() {
      let comment = {
        description: this.text,
        date: new Date(),
        rating: this.rating,
        user: {
          id: JSON.parse(sessionStorage.getItem("user")).id,
        },
        city: {
          id: this.city.id,
        },
      };
      axios
        .post("http://localhost:8080/comments", comment)
        .then(() => location.reload());
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
