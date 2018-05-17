<template>
	<v-toolbar app >
		<v-avatar
			size="36px">
			<img :src="image" alt="dnd-ampersand">
		</v-avatar>
		<v-toolbar-title>Pretty Point Buy</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-flex xs1 v-if="$vuetify.breakpoint.smAndDown">
			<app-gauge :size="size" ></app-gauge>
		</v-flex>
	</v-toolbar>
</template>

<script>
import Gauge from "../PointBuy/RemainingGauge";
import img from "../../assets/dnd-ampersand.png";

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

		available() {
			return this.$store.getters.availablePoints;
		}
	},

	components: {
		appGauge: Gauge,
	}
}
</script>