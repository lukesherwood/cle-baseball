<template>
  <div class="players-page">
    <div v-for="(p, i) in players" :key="p.playerId" class="players-cards">
      <PlayerBanner :key="'pitch-' + i" v-bind:playerInfo="p" />
    </div>
  </div>
</template>
<script>
import PlayerBanner from "../components/PlayerBanner.vue";
import axios from "axios";

export default {
  components: {
    PlayerBanner,
  },
  data() {
    return {
      players: [],
    };
  },
  methods: {},
  created() {
    console.log("loaded players");
    axios
      .get(`https://cle-fe-challenge-services.vercel.app/api/players`)
      .then((res) => (this.players = res.data.players))
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