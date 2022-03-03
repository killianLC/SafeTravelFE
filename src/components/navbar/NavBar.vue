<template>
  <div class="navbar flex justify-content-between">
    <router-link to="/" class="no-underline font-bold"
      ><Button
        label="SafeTravel"
        icon="pi pi-briefcase"
        class="p-button-secondary p-button-text"
    /></router-link>
    <div v-if="this.$store.state.isLogged">
      <Button type="button" :label="this.$store.state.username" @click="toggle" />
      <Menu ref="menu" :model="items" :popup="true" />
    </div>
    <div v-else>
      <router-link to="/connexion" class="no-underline mr-2">
        <Button type="button" label="connexion" />
      </router-link>
      <router-link to="/inscription" class="no-underline">
        <Button type="button" label="inscription" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Menu from "primevue/menu";
import Button from "primevue/button";

export default {
  name: "NavBar",
  components: {
    Menu,
    Button,
  },
  data() {
    return {
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
      username: "",
    };
  },
  created() {
    const user = sessionStorage.getItem("user");
    if (user) {
      this.username = JSON.parse(sessionStorage.getItem("user")).firstname;
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: #f5f5f5;
  padding: 0.5rem;
}
</style>
