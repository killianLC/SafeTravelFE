<template>
  <Card class="ticket">
    <template #title>
      <div class="flex justify-content-between">
        <div class="text-dark">
          <router-link
            v-if="this.firstStep"
            :to="{ name: 'city', params: { name: this.firstStep.city.name } }"
            class="no-underline text-dark"
          >
            <i class="pi pi-ticket" />&nbsp;
            <Flag />
            {{ firstStep.city.name }}
          </router-link>
          <router-link
            v-if="this.lastStep"
            :to="{ name: 'city', params: { name: this.lastStep.city.name } }"
            class="no-underline text-dark"
          >
            &nbsp;<i class="pi pi-caret-right" />&nbsp;
            <span v-if="travel.steps.length > 2">
              {{ travel.steps.length - 2 }} etapes &nbsp;
              <i class="pi pi-caret-right" />&nbsp;</span
            >
            <Flag />
            {{ lastStep.city.name }}
          </router-link>
        </div>
        <div>
          <Tag
            v-if="this.firstStep"
            :value="firstStep.date"
            icon="pi pi-calendar"
            rounded
            class="bg-gray-900 text-primary"
          ></Tag>
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          <Tag
            v-if="this.lastStep"
            :value="lastStep.date"
            icon="pi pi-calendar"
            rounded
            class="bg-gray-900 text-primary"
          ></Tag>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid">
        <div class="col-12 lg:col-4">
          {{ travel.description }}
          <Divider />
          <AvatarGroup>
            <Avatar
              :label="participant.user.firstname[0].toUpperCase()"
              :key="participant"
              v-for="participant in travel.participants"
              shape="circle"
              v-show="participant.statut"
            />
            <Avatar
              v-if="isOrganizer"
              :label="travel.organisateur.firstname[0].toUpperCase()"
              shape="circle"
            />
          </AvatarGroup>
          <b>{{ isOrganizer ? (nbAcceptUser + 1) : nbAcceptUser }} personnes</b>
          <span v-if="firstStep"
            >&nbsp;partiront vers de nouvelles aventures le
            {{ firstStep.date }}</span
          >
        </div>
        <div class="col-12 lg:col-8">
          <Timeline :value="travel.steps" align="alternate">
            <template #content="slotProps">
              <div class="step">
                <router-link
                  :to="{
                    name: 'city',
                    params: { name: slotProps.item.city.name },
                  }"
                  class="no-underline text-dark"
                >
                  <i class="pi pi-building" /> {{ slotProps.item.city.name }}
                  <Flag />
                </router-link>
                {{ slotProps.item.date }}
              </div>
            </template>
          </Timeline>
        </div>
      </div>
    </template>
    <template #footer>
      <!--<Button
        icon="pi pi-trash"
        label="Supprimer le voyage"
        class="p-button-danger w-full"
    />-->
      <Button
        label="Rejoindre ce voyage"
        class="btn-join-travel"
        @click="joinTrip"
        v-if="!isOrganizer && !isParticipant && !requestSend"
        >Rejoindre ce voyage<i class="pi pi-send"
      /></Button>
      <Button
        label="Demande envoyée"
        class="btn-join-travel color-success"
        v-else-if="
          requestSend || (isParticipant && isParticipant.statut == false)
        "
        disabled
        >Demande envoyée<i class="pi pi-send"
      /></Button>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";
import Timeline from "primevue/timeline";
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Flag from "../../Flag.vue";
import axios from "axios";

export default {
  name: "PresentationTravel",
  components: {
    Card,
    Tag,
    Button,
    Timeline,
    Divider,
    Avatar,
    AvatarGroup,
    Flag,
  },
  props: {
    travel: Object,
    isOrganizer: Boolean,
    isParticipant: Boolean,
  },
  data() {
    return {
      requestSend: false,
    };
  },
  methods: {
    joinTrip() {
      axios
        .post("http://localhost:8080/participants", {
          tripId: this.travel.id,
          userId: JSON.parse(sessionStorage.getItem("user")).id,
        })
        .then(() => {
          this.$toast.add({
            severity: "success",
            summary: "Bienvenue",
            detail: "Vous avez demandé à rejoindre le voyage",
            life: 3000,
          });
          this.requestSend = true;
        });
    },
  },
  computed: {
    firstStep() {
      if (this.travel.steps) return this.travel.steps[0];
      else return { city: { name: "..." }, date: "" };
    },
    lastStep() {
      if (this.travel.steps)
        return this.travel.steps[this.travel.steps.length - 1];
      else return { city: { name: "..." }, date: "" };
    },
    nbAcceptUser() {
      return this.travel.participants.filter(
        (participant) => participant.statut
      ).length;
    },
    nbRequest() {
      return this.travel.participants.filter(
        (participant) => participant.statut == false
      ).length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inherit {
  color: inherit;
}

.ticket {
  border-radius: 40px;
}
.ticket :deep(.p-card-body) {
  padding: 0;
}

.ticket :deep(.p-card-title) {
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  border-radius: 40px 40px 0 0;
}

.ticket :deep(.p-card-content) {
  padding: 1rem 3rem;
}

.ticket :deep(.p-card-footer) {
  padding: 1rem 3rem;
}

.step {
  background-color: var(--primary-color) !important;
  color: var(--primary-color-text) !important;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 500;
}

.btn-join-travel {
  justify-content: center;
  border: 1px solid;
  background-color: transparent;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
}

.color-success {
  color: var(--green-500);
}
</style>

