<template>
  <div class="player-banner">
    <img
      class="player-picture"
      :width="playerInfo.ageDecimal ? '150px' : '50px'"
      src="https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/{imgid}/headshot/67/current"
      alt="Player Image"
    />
    <div class="player-info">
      <h2 class="player-name">{{ playerInfo.fullName }}</h2>
      <div class="player-contract-info">
        <img
          class="org-svg"
          width="50px"
          src="https://images.ctfassets.net/iiozhi00a8lc/7M5Amt3BBhJZucXmaDxIt3/17259dcb6db7a055c5e029e482e66a0f/ClevelandMonogram.svg"
        />
        <span class="org-name">{{ playerInfo.orgAbbr }}</span>
      </div>
      <div class="player-bio">
        <div><b>Position:</b> {{ playerInfo.position }}</div>
        <div v-if="playerInfo.ageDecimal">
          <div><b>Age:</b> {{ playerInfo.ageDecimal }}</div>
          <div><b>Throws:</b> {{ playerInfo.throws }}</div>
        </div>
      </div>
      <router-link
        v-if="!playerInfo.ageDecimal && playerInfo.playerId"
        tag="button"
        :to="{ name: 'player', params: { id: playerInfo.playerId } }"
        >More Info</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerInfo: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.player-picture {
  float: left;
}
.player-banner {
  @include clearfix;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 0px 5px 5px 0px;
  width: 80%;
}
.org-svg {
  margin: -5px 0 -6px -12px;
}
.player-name {
  width: 50%;
  border-bottom: ridge 1px black;

  margin: 10px;
}
</style>