<template>
  <img :src="'https://flagcdn.com/'+'FR'+'.svg'" class="w-auto h-1rem mr-2" />
</template>

<script>
export default {
  name: "Flag",
  props: {
    country: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>