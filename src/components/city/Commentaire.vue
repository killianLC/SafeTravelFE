<template>
<Card>
    <template #title>Liste des commentaires</template>
    <template #content>
        <Card>
            <template #content>
            <p>blablalbla </p>
            <p>nom prenom</p>
            </template>
        </Card>
        <Card>
            <template #content>
            <p>blablalbla </p>
            <p>nom prenom</p>
            </template>
        </Card>
        <Card>
            <template #content>
            <p>blablalbla </p>
            <p>nom prenom</p>
            </template>
        </Card>
    </template>
</Card>
</template>

<script>
import Card from "primevue/card";

export default {
  name: "Commentaire",
  components: {
    Card,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
