<template>
  <div class="nav">
    <router-link to="/">
      <img
        width="50px"
        src="https://images.ctfassets.net/iiozhi00a8lc/7M5Amt3BBhJZucXmaDxIt3/17259dcb6db7a055c5e029e482e66a0f/ClevelandMonogram.svg"
        alt=""
      />
    </router-link>
    <span class="nav-header">Cleveland Pitchers Analyser Tool </span>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";

.nav {
  background-color: $cleBlue;
  color: white;
}
.nav-header {
  font-size: 2.5rem;
  vertical-align: top;
}
</style>