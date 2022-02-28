<template>
  <Card>
    <template #title><i class="pi pi-book" /> Dernière news</template>
    <template #content>
      <img src="./Exemple.png" class="w-full" />
    </template>
    <template #footer>
      <a class="no-underline">
        <Button @click=openGoogleNews label="Voir plus sur Google Actualitées" icon="pi pi-google" />
      </a>
      <a href=""></a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
const axios = require("axios");

export default {
  name: "News",
  components: {
    Card,
    Button,
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
    this.google_news_url = "https://news.google.com/search?q=" + this.name;
    const RSS_URL =
      "https://news.google.com/rss/search?q=" + this.name + "&hl=fr";

    axios
      .get(RSS_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
      })
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => console.log(data));
    console.log(this.articles);
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
</style>
