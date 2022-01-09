<template>
  <Card class="bg-primary">
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
      consequuntur error repudiandae numquam deserunt quisquam repellat libero
      asperiores earum nam nobis, culpa ratione quam perferendis esse,
      cupiditate neque quas!
    </template>
    <template #footer>
      <span class="flex align-items-center">
        <Avatar icon="pi pi-user" shape="circle" />&nbsp; Patrick
      </span>
      <Tag value="07/01/2022" icon="pi pi-calendar" rounded class="bg-gray-900 text-primary"></Tag>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Tag from "primevue/tag";

export default {
  name: "Message",
  components: {
    Card,
    Avatar,
    Tag,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card :deep(.p-card-footer) {
  display: flex;
  justify-content: space-between;
}
</style>
