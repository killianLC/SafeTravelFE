<template>
  <form @submit.prevent="handleSubmit(!v$.$invalid)">
    <div class="formgrid grid">
      <div class="field col-12 md:col-12">
        <InputText
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.email.$invalid && submitted }"        
          id="email"
          v-model="user.email"
          type="email"
          placeholder="Email"
        />
        <small v-if="v$.user.email.$invalid && submitted" class="p-error">Veuillez entrer un email.</small>
      </div>

      <div class="field col-12 md:col-12">
        <InputText
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.password.$invalid && submitted }"  
          id="password"
          v-model="user.password"
          type="password"
          placeholder="Mot de passe"
        />
        <small v-if="v$.user.password.$invalid && submitted" class="p-error">Veuillez entrer un mot de passe.</small>
      </div>
      <Button
        icon="pi pi-check"
        label="Se connecter"
        class="m-auto"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import AuthService from "@/services/AuthService.ts";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "ConnexionForm",
  components: {
    Button,
    InputText,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  validations() {
    return {
      user: {
        email: {
          required,
          email,
        },
        password: {
          required,
        },
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }

      this.login();
      this.resetForm();
    },
    resetForm() {
      this.user.email = "";
      this.user.password = "";
      this.accept = null;
      this.submitted = false;
    },
    async login() {
      const isLogged = await AuthService.login(this.user);
      if(isLogged.value) {
        this.$toast.add({
          severity: "success",
          summary: "Connexion réussie",
          life: 3000,
        });
        this.$store.commit('setUsername', isLogged.name);
        this.$store.commit('setIsLogged', true);
        location.reload();
      } else {
        this.$toast.add({
          severity: "error",
          detail: "Échec de la connexion!",
          life: 3000,
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
