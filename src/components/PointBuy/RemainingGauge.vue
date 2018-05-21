<template>
	<v-progress-circular
		:value="remainingPercent"
		:size="size"
		:width="width"
		:color="color">

		<strong>{{ remainingPoints }}</strong>
	</v-progress-circular>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "RemainingGauge",
	props: {
		size: {
			type: String,
			default: "48"
		},
		color: {
			type: String,
			default: "green"
		},
		width: {
			type: Number,
			default: 4
		}
	},
	computed: {
		...mapGetters("PointBuy", [
			"availablePoints",
			"remainingPoints"
		]),
		remainingPercent() {
			return this.remainingPoints / this.availablePoints * 100;
		},
	}
}
</script>
