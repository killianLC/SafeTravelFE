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
          icon: "pi pi-fw pi-briefcase",
        },
        {
          label: "Yoann",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Profil",
              icon: "pi pi-fw pi-user-edit",
            },
            {
              label: "Mes voyages",
              icon: "pi pi-fw pi-car",
            },
            {
              separator: true,
            },
            {
              label: "Deconnexion",
              icon: "pi pi-fw pi-sign-out",
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
