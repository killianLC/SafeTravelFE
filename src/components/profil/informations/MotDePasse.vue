<template>
  <form @submit.prevent="handleSubmit(!v$.$invalid)">
    <Card>
      <template #title><i class="pi pi-cog" />&nbsp;Mot de passe</template>
      <template #content>
        <div class="p-fluid">
          <div class="field col-12 md:col-12">
            <Password
              class="inputfield w-full"
              :class="{ 'p-invalid': v$.user.password.$invalid && submitted }"
              id="password"
              v-model="user.password"
              type="password"
              placeholder="Nouveau mot de passe"
              promptLabel="Entrer votre nouveau mot de passe."
              weakLabel="Votre nouveau mot de passe n'est pas sécurisé !"
              mediumLabel="Votre nouveau mot de passe est bientôt sécurisé !"
              strongLabel="Votre nouveau mot de passe est sécurisé !"
            />
            <small v-if="v$.user.password.$invalid && submitted" class="p-error"
              >Veuillez entrer un nouveau mot de passe.</small
            >
          </div>

          <div class="field col-12 md:col-12">
            <Password
              class="inputfield w-full"
              :class="{
                'p-invalid': v$.user.passwordConfirm.$invalid && submitted,
              }"
              id="passwordConfirm"
              v-model="user.passwordConfirm"
              type="password"
              placeholder="Confirmer le nouveau mot de passe"
              promptLabel="Entrer votre nouveau mot de passe."
              weakLabel="Votre nouveau mot de passe n'est pas sécurisé !"
              mediumLabel="Votre nouveau mot de passe est bientôt sécurisé !"
              strongLabel="Votre nouveau mot de passe est sécurisé !"
            />
            <small
              v-if="v$.user.passwordConfirm.$invalid && submitted"
              class="p-error"
              >Les mots de passe ne correspondent pas!</small
            >
          </div>
        </div>
      </template>
      <template #footer>
        <Button type="submit" icon="pi pi-check" label="Enregistrer" class="relative" />
      </template>
    </Card>
  </form>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import Password from "primevue/password";
import UserService from "@/services/UserService.ts";

import useVuelidate from "@vuelidate/core";
import { required, sameAs } from "@vuelidate/validators";

export default {
  name: "MotDePasse",
  components: {
    Button,
    Card,
    Password
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: {
        password: "",
        passwordConfirm: "",
      },
      submitted: false,
    };
  },
  validations() {
    return {
      user: {
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
      if (!isFormValid) {
        return;
      }

      this.updatePassword();
      this.resetForm();
    },
    resetForm() {
      this.user.password = "";
      this.user.passwordConfirm = "";
      this.submitted = false;
    },
    async updatePassword() {
      const isUpdated = await UserService.updatePassword(this.user);
      if(isUpdated) {
        this.$toast.add({
          severity: "success",
          detail: "Votre mot de passe à bien été modifié!",
          life: 3000,
        });        
      } else {
        this.$toast.add({
          severity: "error",
          detail: "Erreur lors du changement de votre mot de passe!",
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

