<template>
  <Card>
    <template #title>
      <i class="pi pi-star" />&nbsp;Mes notes
    </template>
    <template #content>
      <div class="grid">
        <div
          class="col-6"
          v-for="comment in comments"
          :key="comment"
        >
          <Rate :comment="comment" />
        </div>
      </div>
    </template>
    <template #footer>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Rate from "./Rate.vue";
import axios from "axios";

export default {
  name: "Ratings",
  components: {
    Card,
    Rate,
  },
  data() {
    return {
      comments: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8080/comments/user/3")
      .then((response) => this.comments = response.data);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

