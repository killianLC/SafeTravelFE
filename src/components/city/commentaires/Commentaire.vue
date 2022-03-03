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
          <Message :comment="comment" />
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <CommentaireForm
            v-if="!haveComment"
            :city="city"
            @emit-add-comment="sendComment"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Message from "./Message.vue";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import CommentaireForm from "./CommentaireForm.vue";
import axios from "axios";

export default {
  name: "Commentaire",
  components: {
    Card,
    Message,
    Avatar,
    AvatarGroup,
    CommentaireForm,
  },
  data() {
    return {
      comments: [],
    };
  },
  props: {
    city: Object,
  },
  created() {
    axios.get("http://localhost:8080/cities/" + this.city.name).then((res) => {
      this.comments = res.data.comments;
    });
  },
  methods: {
    getAvatar(user) {
      return user.firstname[0].toUpperCase();
    },
    sendComment(payload) {
      console.log(payload.comment);
      axios
        .post("http://localhost:8080/comments", payload.comment)
        .then(this.comments.push(payload.comment));
    },
  },
  computed: {
    haveComment(){
      let id = JSON.parse(sessionStorage.getItem("user")).id;
      return this.comments.find(comment => comment.user.id == id);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-title) {
  display: flex;
}
</style>
