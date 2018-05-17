<template>
	<v-container fluid grid-list-xs>
		<v-layout row wrap >
			<v-flex v-for="ab in abilities" :key="ab"
				xs12 md6 lg4>
				<app-card :abilityName="ab" :bonuses="bonuses" ></app-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Card from "./AbilityCard";
export default {
	name: "PointBuyDatatable",
	data() {
		return {
			headers: [
				{ text: "Stat", value: "name", sortable: false, align: "center" },
				{ text: "Base", value: "value", sortable: false, align: "center" },
				{ text: "Racial", value: "racial", sortable: false, align: "center" },
				{ text: "Score", value: "score", sortable: false, align: "center" },
				{ text: "Modifier", value: "modifier", sortable: false, align: "center" },
				{ text: "Cost", value: "cost", sortable: false, align: "center" }
			]
		}
	},
	props: {
		bonuses: {
			type: Array
		}
	},
	computed: {
		abilities() {
			return this.$store.getters.abilities;
		}
	},
	components: {
		appCard: Card
	}
}
</script>
