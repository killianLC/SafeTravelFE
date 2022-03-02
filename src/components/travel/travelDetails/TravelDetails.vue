<template>
  <div class="grid">
    <div class="col-12">
      <Breadcrumb :home="home" :model="items" />
    </div>
    <div class="col-12 md:col-12"><PresentationTravel :travel="travel" /></div>
    <div class="col-12 md:col-8"><StepsTravel :travel="travel" /></div>
    <div class="col-12 md:col-4">
      <Participants :participants="travel.participants" />
    </div>
  </div>
</template>

<script>
import Participants from "./Participants.vue";
import StepsTravel from "./Edit.vue";
import Breadcrumb from "primevue/breadcrumb";
import PresentationTravel from "./PresentationTravel.vue";
import axios from "axios";

export default {
  name: "TravelDetails",
  components: {
    Participants,
    StepsTravel,
    Breadcrumb,
    PresentationTravel,
  },
  data() {
    return {
      travel: {},
    };
  },
  created() {
    axios.get("http://localhost:8080/trips/" + this.$route.params.id).then((response) => {
      //this.travels = response.data;
      console.log(response.data);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

