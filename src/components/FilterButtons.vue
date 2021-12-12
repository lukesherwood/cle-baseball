<template>
  <div class="filter-buttons">
    <h5 class="filter-header">Select type of pitch</h5>
    <button v-on:click="setVisible('All')" class="filter-button">All</button>
    <button v-on:click="setVisible('Slider')" class="filter-button">Slider</button>
    <button v-on:click="setVisible('Fastball')" class="filter-button">Fastball</button>
    <button v-on:click="setVisible('Cutter')" class="filter-button">Cutter</button>
    <button v-on:click="setVisible('Sinker')" class="filter-button">Sinker</button>
    <button v-on:click="setVisible('Curveball')" class="filter-button">Curveball</button>
    <button v-on:click="setVisible('Changeup')" class="filter-button">Changeup</button>
  </div>
</template>

<script>
export default {
  props: {
    pitches: {
      type: Array,
      default: () => [],
    },
  },
 methods: {
  setVisible(pitchType) {
    this.pitches.forEach( p => {
      if (pitchType === 'All'){
        p.isVisible = true
      }
      else {
        p.pitchName === pitchType ? p.isVisible = true : p.isVisible = false
      }
      })
  }
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.filter-header {
  margin: 5px 0px;
}
.filter-button {
  background-color: $cleBlue;
  color: white;
}
</style>