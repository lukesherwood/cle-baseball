<template>
  <div class="player-page">
    <PlayerBanner v-bind:playerInfo="playerInfo" />
    <div>
      <Panel title="All Pitches">
        <PitchPlot v-bind:pitches="pitches" />
      </Panel>
      <FilterButtons v-bind:pitches="pitches" />
      <PitchTable v-bind:pitches="pitches" />
    </div>
  </div>
</template>
<script>
import PlayerBanner from "./PlayerBanner.vue";
import FilterButtons from "./FilterButtons";
import Panel from "./layout/Panel.vue";
import PitchPlot from "./plots/PitchPlot.vue";
import PitchTable from "./plots/PitchTable.vue";
import axios from "axios";

export default {
  components: {
    PlayerBanner,
    Panel,
    PitchPlot,
    PitchTable,
    FilterButtons,
  },
  data() {
    return {
      playerInfo: {},
      pitches: [],
    };
  },
  methods: {
    formatPitches(rawPitches) {
      this.pitches = rawPitches.map((p) => {
        p["isSelected"] = false;
        p["isSelectable"] = true;
        p["isVisible"] = true;
        p["stroke"] = "black";
        p["strokeWidth"] = ".01";
        p["strokeOpacity"] = "1";
        p["selectedStroke"] = "gold";
        p["selectedStrokeWidth"] = "0.1";
        p["fillOpacity"] = "1";
        p["fill"] = p["pitchColor"];
        p["radius"] = "0.125";
        return p;
      });
    },
  },
  created() {
    // change playerid to be dynamic and ready for multiple routes.
    const playerId = "106816";
    axios
      .get(
        `https://cle-fe-challenge-services.vercel.app/api/players?playerId=${playerId}`
      )
      .then((res) => (this.playerInfo = res.data.playerDetail))
      .catch((err) => console.log(err));

    axios
      .get(
        `https://cle-fe-challenge-services.vercel.app/api/pitches?playerId=${playerId}`
      )
      .then((res) => this.formatPitches(res.data.pitches))
      .catch((err) => console.log(err));
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/_variables.scss";
.player-page {
  margin: 20px;
}
</style>