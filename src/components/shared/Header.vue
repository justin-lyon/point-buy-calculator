<template>
  <v-toolbar app >
    <v-avatar
      size="36px">
      <img class="logo" :src="image" alt="dnd-ampersand-red">
    </v-avatar>
    <!-- <v-flex>
      <img class="logo" :src="image" alt="dnd-ampersand-red">
    </v-flex> -->
    <v-toolbar-title>Pretty Point Buy</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-flex xs1 v-if="$vuetify.breakpoint.smAndDown">
      <app-gauge :size="size" ></app-gauge>
    </v-flex>
  </v-toolbar>
</template>

<script>
  import Gauge from "../PointBuy/RemainingGauge";
  import img from "../../assets/calculator-icon.png";

  export default {
    name: "Header",
    data() {
      return {
        size: "36"
      };
    },
    computed: {
      image() {
        return img;
      },
    },

    components: {
      appGauge: Gauge,
    }
  }
</script>

<style scoped>
  .logo {
    max-width: 400px;
  }
</style>