<template>
  <Card>
    <template #title
      ><i class="pi pi-comments align-self-center" />&nbsp;Liste des
      commentaires&nbsp;
      <AvatarGroup>
        <Avatar
          :label="getAvatar(comment.user)"
          shape="circle"
          v-for="comment in comments"
          :key="comment.id"
        />
      </AvatarGroup>
    </template>
    <template #content>
      <div class="grid">
        <div
          class="col-12 md:col-6 lg:col-4"
          v-for="comment in comments"
          :key="comment.id"
        >
          <Message :comment="comment" @emit-edit-comment="showDialogComment" />
        </div>
      </div>
      <CommentaireForm
        v-if="!haveComment"
        :city="city"
        @emit-add-comment="sendComment"
      />
    </template>
  </Card>
  <Dialog header="Header" v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{ width: '50vw' }">
    <template #header>
      <h3>Mon commentaire</h3>
    </template>
    <Rating v-model="selectedComment.rating" :stars="5" :cancel="false" />
    <Textarea
      class="w-full"
      v-model="selectedComment.description"
      rows="5"
      cols="30"
    />
    <div class="flex justify-content-center">
      <Button label="Modifier" icon="pi pi-check" @click="updateComment" />
    </div>
    <div class="text-center w-full mt-5 font-bold">Ou</div>
    <template #footer>
      <div class="flex justify-content-center">
        <Button
          label="Supprimer mon commentaire"
          icon="pi pi-trash"
          class="p-button-danger"
          @click="removeComment"
        />
      </div>
    </template>
  </Dialog>
</template>

<script>
import Card from "primevue/card";
import Message from "./Message.vue";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import CommentaireForm from "./CommentaireForm.vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Rating from "primevue/rating";
import Textarea from "primevue/textarea";
import axios from "axios";

export default {
  name: "Commentaire",
  components: {
    Card,
    Message,
    Avatar,
    AvatarGroup,
    CommentaireForm,
    Dialog,
    Button,
    Rating,
    Textarea,
  },
  data() {
    return {
      comments: [],
      display: false,
      selectedComment: null,
    };
  },
  props: {
    city: Object,
  },
  created() {
    axios
      .get("http://localhost:8080/public/city/" + this.city.name)
      .then((res) => {
        this.comments = res.data.comments;
      });
  },
  methods: {
    getAvatar(user) {
      return user.firstname[0].toUpperCase();
    },
    sendComment(comment) {
      axios.post("http://localhost:8080/comments", comment).then((response) => {
        comment.id = response.data.id;
        this.comments.push(comment);
      });
    },
    removeComment() {
      axios
        .post("http://localhost:8080/comments/" + this.selectedComment.id)
        .then(() => {
          for (var i = this.comments.length - 1; i >= 0; i--) {
            if (this.comments[i] === this.selectedComment) {
              this.comments.splice(i, 1);
            }
          }
          this.$toast.add({
            severity: "success",
            summary: "Commentaire supprimé",
            life: 3000,
          });
          this.hiddenDialog();
        });
    },
    showDialogComment(comment) {
      this.display = true;
      this.selectedComment = comment;
    },
    updateComment() {
      axios
        .post("http://localhost:8080/comments", this.selectedComment)
        .then(() => {
          for (var i = this.comments.length - 1; i >= 0; i--) {
            if (this.comments[i] === this.selectedComment.id) {
              this.comments[i].description = this.selectedComment.description;
              this.comments[i].rating = this.selectedComment.rating;
            }
          }
          this.$toast.add({
            severity: "success",
            summary: "Commentaire modifié",
            life: 3000,
          });
          this.hiddenDialog();
        });
    },
    hiddenDialog() {
      this.display = false;
    },
  },
  computed: {
    haveComment() {
      if (sessionStorage.getItem("user")) {
        let id = JSON.parse(sessionStorage.getItem("user")).id;
        return this.comments.find((comment) => comment.user.id == id);
      } else {
        return true;
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-title) {
  display: flex;
}
</style>
