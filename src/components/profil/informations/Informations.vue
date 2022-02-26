<template>
  <form @submit.prevent="handleSubmit(!v$.$invalid)">
    <Card>
      <template #title><i class="pi pi-id-card" />&nbsp;Informations</template>
      <template #content>
        <div class="formgrid grid">
          <div class="field col-12 md:col-6">
            <InputText
              class="inputfield w-full"
              :class="{ 'p-invalid': v$.user.firstname.$invalid && submitted }"
              id="firstname"
              v-model="user.firstname"
              type="text"
              placeholder="Prénom"
            />
            <small v-if="v$.user.firstname.$invalid && submitted" class="p-error"
              >Un prénom est obligatoire!</small
            >
          </div>          

          <div class="field col-12 md:col-6">
            <InputText
              class="inputfield w-full"
              :class="{ 'p-invalid': v$.user.lastname.$invalid && submitted }"
              id="lastname"
              v-model="user.lastname"
              type="text"
              placeholder="Nom"
            />
            <small v-if="v$.user.lastname.$invalid && submitted" class="p-error"
              >Un nom est obligatoire!</small
            >
          </div>

          <div class="field col-12 md:col-12">
            <InputText
              class="inputfield w-full"
              :class="{ 'p-invalid': v$.user.email.$invalid && submitted }"
              id="email"
              v-model="user.email"
              type="email"
              placeholder="Email"
              disabled
            />
            <small v-if="v$.user.email.$invalid && submitted" class="p-error"
              >Un email valide est obligatoire!</small
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
import InputText from "primevue/inputtext";
import UserService from "@/services/UserService.ts";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "Informations",
  components: {
    Button,
    Card,
    InputText,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: JSON.parse(sessionStorage.getItem("user")).email,
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
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }

      this.updateFirstnameAndLastname();
      this.resetForm();
    },
    resetForm() {
      this.user.firstname = "";
      this.user.lastname = "";
      this.user.email = JSON.parse(sessionStorage.getItem("user")).email;
      this.submitted = false;
    },
    async updateFirstnameAndLastname() {
      const isUpdated = await UserService.updateFirstnameAndLastname(this.user);
      if(isUpdated) {
        this.$toast.add({
          severity: "success",
          detail: "Vos informations ont bien été modifiées!",
          life: 3000,
        });        
      } else {
        this.$toast.add({
          severity: "error",
          detail: "Erreur lors la modification de vos informations!",
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

