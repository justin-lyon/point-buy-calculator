<template>
	<tr>
		<th class="text-xs-center">{{ ability.name | truncate(3) | capitalize }}</th>
		<td class="text-xs-center" >
			<v-text-field
				class="number-input"
				v-model="ability.value"
				type="number"
				max="15"
				min="8"
				></v-text-field>
		</td>
		<td class="text-xs-center" >1</td>
		<td class="text-xs-center" >{{ totalScore }}</td>
		<td class="text-xs-center" :class="redText" >{{ modifier }}</td>
		<td class="text-xs-center" >{{ cost }}</td>
	</tr>
</template>

<script>
import calculator from "../../mixins/point-buy-calc";

export default {
	mixins: [calculator],

	data() {
		return {
			baseOptions: [ 8, 9, 10, 11, 12, 13, 14, 15 ]
		}
	},

	props: {
		ability: {
			type: Object
		},
		race: {
			type: Object
		}
	},

	computed: {
		totalScore() {
			if(!Number(this.ability.value)) return 0;
			return Number(this.ability.value) + 1;
		},

		modifier() {
			if(!Number(this.ability.value)) return 0;
			return Math.floor((this.ability.value - 10) / 2);
		},

		cost() {
			if(!Number(this.ability.value)) return 0;

			const item = this.costs.find(m => m.score === Number(this.ability.value));

			if(!item) return 0;

			return item.cost;
		},

		redText() {
			return this.modifier < 0 ? "subheading red--text" : "";
		}
	},

	filters: {
		truncate(val, len) {
			return val.substr(0, len);
		},

		capitalize(val) {
			return val.toUpperCase();
		}
	},
}
</script>
<style scoped>
.number-input {
	max-width: 50%;
}
</style>
