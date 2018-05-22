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
					<div><span :class="textColor(racial)">{{ racial }}</span></div>
				</v-flex>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Score</div>
					<div>{{ score }}</div>
				</v-flex>
				<v-flex xs4 >
					<div class="grey--text text--lighten-1">Modifier</div>
					<div><span :class="textColor(modifier)">{{ modifier }}</span></div>
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

	methods: {
		textColor(val) {
			const color = val === 0 ? "" :
				val < 0 ? " red--text" : " green--text";
			return "subheading" + color;
		},
	},

	filters: {
		truncate,
		capitalize
	},
}
</script>
