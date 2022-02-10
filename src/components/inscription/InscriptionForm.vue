<template>
  <div class="formgrid grid">
    <div class="field col-12 md:col-12">
      <InputText
        class="inputfield w-full"
        id="firstname"
        v-model="user.firstname"
        type="text"
        placeholder="Prénom"
      />
    </div>

    <div class="field col-12 md:col-12">
      <InputText
        class="inputfield w-full"
        id="lastname"
        v-model="user.lastname"
        type="text"
        placeholder="Nom"
      />
    </div>

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

    <div class="field col-12 md:col-12">
      <InputText
        class="inputfield w-full"
        id="passwordConfirm"
        v-model="user.passwordConfirm"
        type="password"
        placeholder="Confirmer le mot de passe"
      />
    </div>
    <Button icon="pi pi-check" v-on:click="register()" label="Enregistrer" class="m-auto" />
  </div>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import AuthService from '@/services/AuthService.ts'

export default {
  name: "InscriptionForm",
  components: {
    Button,
    InputText,
  },
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    }
  },
  methods: {
    async register() {
      // Vérifs à faire
      if(this.user.email == "" || this.user.password == "") {
        console.log("A username and password must be present");
      } else {
        const isRegister = await AuthService.register(this.user);
        if(isRegister) { 
          this.$router.push({name:"home"}); 
        } 
      }
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
