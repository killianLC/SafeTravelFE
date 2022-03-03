<template>
  <Card class="bg-primary">
    <template #title>
      <Button
        v-if="this.isOwner()"
        @click="updateComment"
        icon="pi pi-pencil"
        class="p-button-rounded p-button-outlined p-button-secondary"
      />
      <Rating
        class="ml-auto"
        :modelValue="comment.rating"
        :stars="5"
        :cancel="false"
        disabled
      />
    </template>
    <template #content>
      {{ comment.description }}
    </template>
    <template #footer>
      <span class="flex align-items-center">
        <Avatar icon="pi pi-user" shape="circle" />&nbsp;
        {{ comment.user.firstname }} {{ comment.user.lastname }}
      </span>
      <Tag
        :value="fomartedDate"
        icon="pi pi-calendar"
        rounded
        class="bg-gray-900 text-primary"
      ></Tag>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Tag from "primevue/tag";
import Rating from "primevue/rating";
import Button from "primevue/button";

export default {
  name: "Message",
  components: {
    Card,
    Avatar,
    Tag,
    Rating,
    Button,
  },
  props: {
    comment: Object,
  },
  computed: {
    fomartedDate() {
      const date = new Date(this.comment.date);
      return date.toLocaleDateString("fr-FR");
    },
  },
  methods: {
    isOwner() {
      if (sessionStorage.getItem("user")) {
        let idUser = JSON.parse(sessionStorage.getItem("user")).id;
        if (this.comment.user.id === idUser) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    updateComment() {
      this.$emit("emit-edit-comment", this.comment);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-footer) {
  display: flex;
  justify-content: space-between;
}

.p-card :deep(.pi-star-fill) {
  color: black !important;
}

.p-card :deep(.p-card-content) {
  padding: 0;
}

.p-button.p-button-outlined {
  color: #000000;
}
</style>
