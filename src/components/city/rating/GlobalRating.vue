<template>
  <Card>
    <template #title><i class="pi pi-bookmark" /> Note globale</template>
    <template #content>
      <ProgressSpinner strokeWidth="5" fill="#1d1e27" animationDuration="1s" />
      <span class="fadeinleft score bg-dark">{{ note }}/5</span>
    </template>
    <template #foooter> </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import ProgressSpinner from "primevue/progressspinner";
import { integer } from "@vuelidate/validators";

export default {
  name: "BasicInformation",
  components: {
    Card,
    ProgressSpinner,
  },
  props: {
    note: integer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score {
  width: 0;
  height: 0;
  overflow: hidden;
  color: var(--primary-color);
  font-size: 5rem;
  font-weight: 600;
  animation: 0s ease-in 3s normal forwards 1 fadein;
  border-radius: 10%;
  padding: 0 1rem;
  margin: auto;
}

.p-card :deep(.p-card-content) {
  display: grid;
  justify-content: center;
  min-height: 400px;
}

.p-progress-spinner {
  /* Fait disparaitre le spinner après 3s */
  animation: hideAnimation 0s ease-in 3s forwards;
  animation-fill-mode: forwards;
}

.p-progress-spinner :deep(.p-progress-spinner-circle) {
  stroke: var(--primary-color);
  stroke-dasharray: 60, 200;
  animation: none;
}

@keyframes hideAnimation {
  to {
    width: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
  }
}

@keyframes fadein {
  to {
    width: auto;
    height: auto;
    overflow: none;
  }
}
</style>
