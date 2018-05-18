<template>
<v-expansion-panel popout>
	<app-accordion-item v-for="ab in abilities" :key="ab"
		:abilityName="ab"
		:bonuses="bonuses"
		:activeAbility="activeAbility"
		@focused="$emit('focused', $event)" ></app-accordion-item>
</v-expansion-panel>
</template>

<script>
import AccordionItem from "./AbilityAccordionItem";

export default {
	name: "PointBuyAccordion",
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
		},
		activeAbility: {
			type: String
		}
	},
	computed: {
		abilities() {
			return this.$store.getters.abilities;
		},
		abilityItems() {
			return this.abilities.map(ab => ({
				name: ab,
				value: (ab.name === "strength")
			}));
		},
	},
	components: {
		appAccordionItem: AccordionItem
	}
}
</script>
