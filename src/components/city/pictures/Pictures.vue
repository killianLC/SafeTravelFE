<template>
  <Card>
    <template #title><i class="pi pi-images" /> Photos</template>
    <template #content>
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%; display: block"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%; display: block"
          />
        </template>
      </Galleria>
    </template>
    <template #footer>
      <a href="" class="no-underline">
        <Button label="Voir plus sur Google Image" icon="pi pi-google" />
      </a>
      <a href=""></a>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Galleria from "primevue/galleria";

export default {
  name: "Pictures",
  components: {
    Card,
    Button,
    Galleria,
  },
  props: {
    city: Object,
  },
  data() {
    return {
      images: [
        {
          itemImageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
          thumbnailImageSrc: "demo/images/galleria/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc:
            "https://www.campusfrance.org/sites/default/files/paris_0.jpg",
          thumbnailImageSrc: "demo/images/galleria/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc:
            "https://www.sortiraparis.com/images/58/83517/705222-.jpg",
          thumbnailImageSrc: "demo/images/galleria/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc: "https://www.paris.fr/images/meta/parisfr.jpg",
          thumbnailImageSrc: "demo/images/galleria/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
