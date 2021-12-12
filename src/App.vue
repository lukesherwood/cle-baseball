<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/layout/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import "./scss/_variables.scss";
/* background: red; */
#app {
  background-color: $pageBg;
  min-height: 100%;
}
</style>
