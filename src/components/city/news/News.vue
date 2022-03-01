<template>
  <Card>
    <template #title><i class="pi pi-book" /> Dernière news</template>
    <template #content>
      <img src="./Exemple.png" class="w-full" />
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
    axios
      .get("http://localhost:8080/data_api/flux_rss/Plérin")
      .then((response) => {
        this.articles = response.data;
        //console.log(response.data);
        console.log(parseXmlToJson(response.data));

        function parseXmlToJson(xml) {
          const json = {};
          for (const res of xml.matchAll(
            /(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm
          )) {
            const key = res[1] || res[3];
            const value = res[2] && parseXmlToJson(res[2]);
            json[key] =
              (value && Object.keys(value).length ? value : res[2]) || null;
          }
          return json;
        }
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
</style>
