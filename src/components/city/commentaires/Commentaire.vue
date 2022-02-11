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
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Message from "./Message.vue";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";

export default {
  name: "Commentaire",
  components: {
    Card,
    Message,
    Avatar,
    AvatarGroup,
  },
  props: {
    comments: Array,
  },
  methods: {
    getAvatar(user) {
      return user.firstname[0].toUpperCase();
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
