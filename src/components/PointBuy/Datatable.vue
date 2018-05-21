<template>
	<v-data-table
		:headers="headers"
		:items="abilities"
		hide-actions
		flat
		>

		<app-row
			slot="items"
			slot-scope="props"
			:abilityName="props.item"
			:bonuses="bonuses"
			></app-row>
	</v-data-table>
</template>

<script>
import Row from "./DataTableRow";
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
			return this.$store.getters["PointBuy/abilities"];
		}
	},
	components: {
		appRow: Row
	}
}
</script>