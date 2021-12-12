import Vue from "vue";
import Router from "vue-router";
import Players from "../views/Players";
import Player from "../views/Player";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/player/:id", component: Player, name: "player" },
    { path: "/", component: Players, name: "players" }
  ]
});
