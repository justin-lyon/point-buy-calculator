<template>
	<tr :id="rowName" >
		<th class="text-xs-center">{{ abilityName | truncate(3) | capitalize }}</th>
		<td>
			<div>
				<v-text-field
					class="number-input"
					v-model.number="score"
					type="number"
					:max="max"
					min="8"
					validate-on-blur
					@input="$v.score.$touch();"
					:error="$v.score.$error"
					:rules="[
					() => $v.score.required || 'This field is required.',
					() => $v.score.minValue || 'Minimum value is 8.',
					() => $v.score.maxValue || `Maximum value is ${max}.`]"
					></v-text-field>
			</div>
		</td>
		<td class="text-xs-center" :class="greenText" >{{ racialBonus }}</td>
		<td class="text-xs-center" >{{ totalScore }}</td>
		<td class="text-xs-center" :class="redText" >{{ modifier }}</td>
		<td class="text-xs-center" >{{ cost }}</td>
	</tr>
</template>

<script>
import { required, minValue, maxValue } from "vuelidate/lib/validators";
import { getCost, validateNextCost } from "../../plugins/point-buy";
import { truncate, capitalize } from "../../filters";
import { mapGetters } from "vuex";

export default {
	name: "PointBuyDatatableRow",

	mounted() {
		// I hate this.
		// Disable keystrokes within input[number] except arrow up/down, tab, and shift
		const input = document.getElementById(this.rowName).querySelector("input");
		input.addEventListener("keydown", event => {
			const keyCode = event.keyCode;
			if(!(keyCode === 38 || keyCode === 40 || keyCode === 9 || keyCode === 16)) {
				event.preventDefault();
			}
		});
	},

	props: {
		abilityName: {
			type: String
		},
		bonuses: {
			type: Array
		},
	},

	computed: {
		...mapGetters({
			availablePoints: "availablePoints",
			remainingPoints: "remainingPoints"
		}),
		score: {
			get() {
				return this.$store.getters[this.abilityName];
			},
			set(val) {
				this.$store.commit(this.abilityName, Number(val));
			}
		},
		totalScore() {
			return Number(this.score) + this.racialBonus;
		},
		modifier() {
			return Math.floor((this.totalScore - 10) / 2);
		},
		cost() {
			const cost = getCost(Number(this.score));
			return cost;
		},
		redText() {
			return this.modifier < 0 ? "subheading red--text" : "";
		},
		greenText() {
			return this.racialBonus > 0 ? "subheading green--text" : "";
		},

		max() {
			const isValidNext = validateNextCost(this.score, this.remainingPoints);
			return isValidNext ? 15 : this.score;
		},

		racialBonus() {
			if(this.bonuses) {
				const bonusItem = this.bonuses.find(b => b.name === this.abilityName);
				return bonusItem ? bonusItem.value : 0;
			}
			return 0;
		},

		rowName() {
			return "dtRow-" + this.abilityName;
		}
	},

	validations: {
		score: {
			required,
			minValue: minValue(8),
			maxValue: (val, vm) => {
				return maxValue(vm.max);
			}
		},
	},

	filters: {
		truncate,
		capitalize
	},
}
</script>
<style scoped>
.number-input {
	margin-left: 25%;
	max-width: 50%;
}
</style>
