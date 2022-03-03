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
      comments: [],
    };
  },
  methods: {
    sendComment() {
      this.comments = this.city.comments;

      let idUser = JSON.parse(sessionStorage.getItem("user")).id;
      let comment = {
        description: this.text,
        date: new Date(),
        rating: this.rating,
        user: {
          id: idUser,
        },
        city: {
          id: this.city.id,
        },
      };

      let isFind = false
      this.comments.forEach((comment) => {
        if(comment.user.id === idUser) {
          isFind = true;
        }
      });

      if(isFind) {
        this.$toast.add({
          severity: "error",
          summary: "Erreur",
          detail: "Vous avez déjà posté un commentaire.",
          life: 3000,
        });        
      } else {
        axios
          .post("http://localhost:8080/comments", comment)
          .then(() => location.reload());
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
