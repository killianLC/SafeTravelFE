<template>
  <Card>
    <template #title><i class="pi pi-book" /> Dernière news</template>
    <template #content>
      <Article :article="article" v-for="article in articles" :key="article" />
    </template>
    <template #footer>
      <a class="no-underline">
        <Button
          @click="openGoogleNews"
          label="Voir plus sur Google Actualitées"
          icon="pi pi-google"
        />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Article from "./Article.vue";
const axios = require("axios");
var convert = require("xml-js");

export default {
  name: "News",
  components: {
    Card,
    Button,
    Article,
  },
  data() {
    return {
      articles: [],
    };
  },
  props: {
    name: String,
  },
  created() {
    axios
      .get("http://localhost:8080/data_api/flux_rss/Plérin")
      .then((response) => {
        var json = JSON.parse(
          convert.xml2json(response.data, { compact: true, spaces: 4 })
        );
        this.articles = json.rss.channel.item;
      });
  },
  methods: {
    openGoogleNews() {
      window.open("https://news.google.com/search?q=" + this.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card:deep(.p-card-content) {
  max-height: 370px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
