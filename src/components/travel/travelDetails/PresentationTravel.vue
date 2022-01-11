<template>
  <Card class="ticket">
    <template #title>
      <div class="flex justify-content-between">
        <div class="text-dark">
          <i class="pi pi-ticket" />&nbsp;
          <img :src="travel.steps[0].flag" class="w-auto h-1rem" />
          {{ travel.steps[0].name }}
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          {{ travel.steps.length - 2 }} etapes &nbsp;
          <i class="pi pi-caret-right" />&nbsp;
          <img :src="lastStep.flag" class="w-auto h-1rem" />
          {{ lastStep.name }}
        </div>
        <div>
          <Tag
            :value="travel.steps[0].date"
            icon="pi pi-calendar"
            rounded
            class="bg-gray-900 text-primary"
          ></Tag>
          &nbsp;<i class="pi pi-caret-right" />&nbsp;
          <Tag
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
              v-for="user in travel.participants"
              :label="user.name[0]"
              :key="user.name"
              shape="circle"
            />
            {{ travel.participants.length }} participants
          </AvatarGroup>
        </div>
        <div class="col-12 lg:col-8">
          <Timeline :value="travel.steps" align="alternate">
            <template #content="slotProps">
              <div class="step">
                <div>
                  <i class="pi pi-building" /> {{ slotProps.item.name }}
                  <img :src="travel.steps[0].flag" class="w-auto h-1rem" />
                </div>
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
      <Button label="Rejoindre ce voyage" class="btn-join-travel"
        >Rejoindre ce voyage<i class="pi pi-send"
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
  },
  props: {
    travel: Object,
  },
  computed: {
    lastStep() {
      return this.travel.steps[this.travel.steps.length - 1];
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
</style>

