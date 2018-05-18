<template>
<v-card >
	<v-card-text>
		<v-container grid-list-xs>
			<v-layout row wrap justify-center text-xs-center>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Base</div>
					<div>{{ base }}</div>
				</v-flex>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Racial</div>
					<div><span :class="greenText">{{ racial }}</span></div>
				</v-flex>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Score</div>
					<div>{{ score }}</div>
				</v-flex>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Modifier</div>
					<div><span :class="redText">{{ modifier }}</span></div>
				</v-flex>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Cost</div>
					<div>{{ cost }}</div>
				</v-flex>
			</v-layout>
		</v-container>
	</v-card-text>
</v-card>
</template>

<script>
import { truncate, capitalize } from "../../filters";

export default {
	name: "PointBuyAbilityCard",

	props: [
		"abilityName",
		"base",
		"racial",
		"score",
		"modifier",
		"cost"
	],

	computed: {
		redText() {
			return this.modifier < 0 ? "subheading red--text" : "";
		},
		greenText() {
			return this.racial > 0 ? "subheading green--text" : "";
		},
	},

	filters: {
		truncate,
		capitalize
	},
}
</script>
