<template>
  <div class="container">
    <img src="./Podium.svg" class="pt-5 max-w-full" />
    <router-link
      v-if="cities[0]"
      :to="{ name: 'city', params: { name: cities[0].name } }"
      class="no-underline text-dark"
    >
      <span class="absolute top-1">
        {{ cities[0].name }}
        <Flag :image="cities[0].flag" class="top-flag" />
      </span>
    </router-link>
    <router-link
    v-if="cities[1]"
      :to="{ name: 'city', params: { name: cities[1].name } }"
      class="no-underline text-dark"
    >
      <span class="absolute top-2">
        {{ cities[1].name }}
        <Flag :image="cities[1].flag" class="top-flag" />
      </span>
    </router-link>
    <router-link
    v-if="cities[2]"
      :to="{ name: 'city', params: { name: cities[2].name } }"
      class="no-underline text-dark"
    >
      <span class="absolute top-3">
        {{ cities[2].name }}
        <Flag :image="cities[2].flag" class="top-flag" />
      </span>
    </router-link>
  </div>
</template>

<script>
import Flag from "../../Flag.vue";

export default {
  name: "Podium",
  components: {
    Flag,
  },
  props: {
    cities: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  position: relative;
}

span {
  font-size: 1.5em;
  font-weight: 800;
  width: 33%;
  text-align: center;
}

@media screen and (max-width: 500px) {
  span {
    font-size: 1.2em;
  }
}

.top-1 {
  left: 34%;
}

.top-2 {
  left: 0px;
  top: 20%;
}

.top-3 {
  left: 67%;
  top: 35%;
}

.top-flag {
  position: absolute;
  height: 1rem;
  top: -40%;
  left: 43%;
}
</style>
