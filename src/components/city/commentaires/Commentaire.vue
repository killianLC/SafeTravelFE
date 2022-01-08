<template>
  <Card>
    <template #title
      ><i class="pi pi-comments align-self-center"/>&nbsp;Liste des commentaires&nbsp;
      <AvatarGroup>
        <Avatar label="P" shape="circle" />
        <Avatar label="P" shape="circle" />
        <Avatar label="P" shape="circle" />
        <Avatar label="P" shape="circle" />
      </AvatarGroup>
    </template>
    <template #content>
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-4"><Message /></div>
        <div class="col-12 md:col-6 lg:col-4"><Message /></div>
        <div class="col-12 md:col-6 lg:col-4"><Message /></div>
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
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-title) {
  display: flex;
}
</style>
