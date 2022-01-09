<template>
  <div class="container">
    <img src="./Podium.svg" class="pt-5 max-w-full" />
    <router-link
      :to="{ name: 'city', params: { name: cities[0].name } }"
      class="no-underline text-dark"
    >
      <span class="top-1"
        >{{ cities[0].name }}<img :src="cities[0].flag" class="top-flag"
      /></span>
    </router-link>
    <router-link
      :to="{ name: 'city', params: { name: cities[1].name } }"
      class="no-underline text-dark"
    >
      <span class="top-2"
        >{{ cities[1].name }}<img :src="cities[1].flag" class="top-flag"
      /></span>
    </router-link>
    <router-link
      :to="{ name: 'city', params: { name: cities[2].name } }"
      class="no-underline text-dark"
    >
      <span class="top-3"
        >{{ cities[2].name }} <img :src="cities[2].flag" class="top-flag"
      /></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Podium",
  components: {},
  props: {
    cities: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 500px;
  margin: auto;
  position: relative;
}

span {
  font-size: 1.5rem;
  font-weight: 800;
  width: 167px;
  text-align: center;
}

.top-1 {
  position: absolute;
  left: 168px;
}

.top-2 {
  position: absolute;
  left: 0px;
  top: 49px;
}

.top-3 {
  position: absolute;
  left: 333px;
  top: 80px;
}
.top-flag {
  position: absolute;
  top: -15px;
  right: 70px;
  height: 1rem;
}
</style>
