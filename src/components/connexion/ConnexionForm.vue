<template>
  <div class="formgrid grid">
    <div class="field col-12 md:col-12">
      <InputText
        class="inputfield w-full"
        id="email"
        v-model="user.email"
        type="email"
        placeholder="Email"
      />
    </div>

    <div class="field col-12 md:col-12">
      <InputText
        class="inputfield w-full"
        id="password"
        v-model="user.password"
        type="password"
        placeholder="Mot de passe"
      />
    </div>
    <Button
      icon="pi pi-check"
      v-on:click="login()"
      label="Se connecter"
      class="m-auto"
    />
  </div>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import AuthService from "@/services/AuthService.ts";

export default {
  name: "ConnexionForm",
  components: {
    Button,
    InputText,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      // Vérifs à faire
      if (this.user.email == "" || this.user.password == "") {
        console.log("A username and password must be present");
      } else {
        const isLogged = await AuthService.login(this.user);
        if(isLogged) { 
          this.$router.push({name:"home"});
          this.$store.commit('setIsLogged', true);
        } 
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
