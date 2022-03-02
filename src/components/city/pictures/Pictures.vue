<template>
  <Card>
    <template #title><i class="pi pi-images" /> Photos</template>
    <template #content>
      <Galleria :value="images" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <img
            :src="slotProps.item.urls.small"
            style="width: auto; display: block; max-height:260px;"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="slotProps.item.urls.small"
            style="width: auto; display: block; max-height:45px;"
          />
        </template>
      </Galleria>
    </template>
    <template #footer>
      <a class="no-underline">
        <Button
          @click="openGoogleImage"
          label="Voir plus sur Google Image"
          icon="pi pi-google"
        />
      </a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Galleria from "primevue/galleria";
import axios from "axios";

export default {
  name: "Pictures",
  components: {
    Card,
    Button,
    Galleria,
  },
  props: {
    name: String,
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {
    openGoogleImage() {
      window.open("https://news.google.com/search?q=" + this.name);
    },
  },
  created() {
    axios
      .get("https://api.unsplash.com/search/photos?client_id=IT50F-lGv_Kgd-iDnWfcPw__Kpl2S4-tEaVrMLXPGRQ&order_by=popular&query=" + this.name)
      .then((response) => {
        this.images = response.data.results;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
