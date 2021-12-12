<template>
  <div id="app">
    <Players />
  </div>
</template>

<script>
import Players from "./views/Players";
export default {
  name: "App",
  components: {
    Players,
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
