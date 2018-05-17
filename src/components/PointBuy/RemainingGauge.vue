<template>
	<v-progress-circular
		:value="remainingPercent"
		:size="size"
		:color="color">

		{{ remainingPoints }}
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
		}
	},
	computed: {
		...mapGetters([
			"availablePoints",
			"remainingPoints"
		]),
		remainingPercent() {
			return this.remainingPoints / this.availablePoints * 100;
		},
	}
}
</script>
