<template>
  <Menubar :model="items"> 
  </Menubar>
</template>

<script>
import Menubar from "primevue/menubar";

export default {
  name: "NavBar",
  components: {
    Menubar,
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
              to : "/travels"
            },
            {
              label: "Inscription",
              icon: "pi pi-user-plus",
              to: "/inscription",
            },
            {
              label: "Connexion",
              icon: "pi pi-sign-in",
              to: "/connexion",
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
