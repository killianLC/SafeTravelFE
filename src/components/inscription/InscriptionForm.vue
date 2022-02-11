<template>
  <form @submit.prevent="handleSubmit(!v$.$invalid)">
    <div class="formgrid grid">
      <div class="field col-12 md:col-12">
        <InputText
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.firstname.$invalid && submitted }"
          id="firstname"
          v-model="user.firstname"
          type="text"
          placeholder="Prénom"
          required="true"
          requiredMessage="Le champ ne doit pas être vide."
        />
      </div>

      <div class="field col-12 md:col-12">
        <InputText
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.lastname.$invalid && submitted }"
          id="lastname"
          v-model="user.lastname"
          type="text"
          placeholder="Nom"
        />
      </div>

      <div class="field col-12 md:col-12">
        <InputText
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.email.$invalid && submitted }"
          id="email"
          v-model="user.email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div class="field col-12 md:col-12">
        <Password
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.password.$invalid && submitted }"
          id="password"
          v-model="user.password"
          type="password"
          placeholder="Mot de passe"
          promptLabel="Entrer votre mot de passe."
          weakLabel="Votre mot de passe n'est pas sécurisé !"
          mediumLabel="Votre mot de passe est bientôt sécurisé !"
          strongLabel="Votre mot de passe est sécurisé !"
        />
      </div>

      <div class="field col-12 md:col-12">
        <Password
          class="inputfield w-full"
          :class="{ 'p-invalid': v$.user.passwordConfirm.$invalid && submitted }"
          id="passwordConfirm"
          v-model="user.passwordConfirm"
          type="password"
          placeholder="Confirmer le mot de passe"
          promptLabel="Entrer votre mot de passe."
          weakLabel="Votre mot de passe n'est pas sécurisé !"
          mediumLabel="Votre mot de passe est bientôt sécurisé !"
          strongLabel="Votre mot de passe est sécurisé !"
        />
      </div>
      <Button
        type="submit"
        icon="pi pi-check"
        label="Enregistrer"
        class="m-auto"
      />
    </div>
  </form>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import AuthService from "@/services/AuthService.ts";

import useVuelidate from "@vuelidate/core";
import { required, email, sameAs   } from "@vuelidate/validators";

export default {
  name: "InscriptionForm",
  components: {
    Button,
    InputText,
    Password,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      submitted: false,
    };
  },
  validations() {
    return {
      user: {
        firstname: {
          required,
        },
        lastname: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          required,
        },
        passwordConfirm: {
          required,
          sameAsPassword: sameAs(this.user.password),
        },
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      console.log(!this.v$.user.passwordConfirm.sameAsPassword);
      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.register();
        this.resetForm();
      }
    },
    resetForm() {
      this.user.firstname = "";
      this.user.lastname = "";
      this.user.email = "";
      this.user.password = "";
      this.user.passwordConfirm = "";
      this.accept = null;
      this.submitted = false;
    },
    async register() {
      const isRegister = await AuthService.register(this.user);
      if (isRegister) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formgrid :deep(.p-password-input) {
  width: 100%;
}
</style>
