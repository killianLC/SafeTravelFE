<template>
  <Menubar>
    <template #start><router-link to="/" class="no-underline font-bold"><Button label="SafeTravel" icon="pi pi-briefcase" class="p-button-secondary p-button-text" /></router-link></template>
    <template #end>
      <div v-if="isLogged">
      <Button type="button" label="Yoann" @click="toggle" />
      <Menu ref="menu" :model="items[1].items" :popup="true" />
      </div>
      <div v-else>
        <router-link to="/connexion" class="no-underline mr-2">
          <Button type="button" label="connexion" />
        </router-link>
        <router-link to="/inscription" class="no-underline">
          <Button type="button" label="inscription" />
        </router-link>
      </div>
    </template>
  </Menubar>
</template>

<script>
import Menubar from "primevue/menubar";
import Menu from "primevue/menu";
import Button from "primevue/button";

export default {
  name: "NavBar",
  components: {
    Menubar,
    Menu,
    Button,
  },
  data() {
    return {
      items: [
        {
          label: "SafeTravel",
          icon: "pi pi-briefcase",
          class: "text-primary",
          to: "/",
        },
        {
          label: "Yoann",
          icon: "pi pi-user",
          items: [
            {
              label: "Profil",
              icon: "pi pi-user-edit",
              to: "/profil",
            },
            {
              label: "Mes voyages",
              icon: "pi pi-car",
              to: "/travels",
            },
            {
              separator: true,
            },
            {
              label: "Deconnexion",
              icon: "pi pi-sign-out",
              to: "/logout",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
  computed: {
    isLogged() {
      return sessionStorage.getItem('user');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
