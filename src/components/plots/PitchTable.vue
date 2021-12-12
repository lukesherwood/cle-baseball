<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>Type</th>
        <th>Speed (mph)</th>
        <th>In Strikezone</th>
        <th>Result</th>
      </tr>
    <template v-for="(p, i) in pitches">
      <tr v-if="p.isVisible" v-on:click="p.isSelected = !p.isSelected" v-bind:class="{ selected: p.isSelected }" :key="'pitch-' + i">
        <td>{{i}}</td>
        <td>{{p.pitchName}}</td>
        <td>{{p.velo.toFixed(2)}}</td>
        <td>{{p.inStrikeZone ? 'Yes' : 'No'}}</td>
        <td>{{p.result}}</td>
      </tr>
    </template>
    </table> 
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
}
</script>
<style scoped lang="scss">
@import "../../scss/variables.scss";
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  background-color: $cleBlue;
  color: white;
}

.selected {
  background-color: rgb(241, 241, 181);
}
</style>
