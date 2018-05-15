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
					@change="$v.score.$touch();"
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
import AbilityInput from "../shared/AbilityInput";
import { required, minValue, maxValue } from "vuelidate/lib/validators";
import { getCost } from "../../plugins/point-buy";
import { truncate, capitalize } from "../../filters";
import { mapGetters } from "vuex";

export default {
	name: "PointBuyDatatableRow",

	// mounted() {
	// 	const root = document.getElementById(this.rowName);
	// 	const input = root.querySelector("input");
	// 	input.addEventListener("keydown", event => {
	// 		const keyCode = event.keyCode;
	// 		if(!(keyCode === 38 || keyCode === 40 || keyCode === 9 || keyCode === 16)) {
	// 			event.preventDefault();
	// 		}
	// 	});
	// },

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
			//if(!Number(this.score)) return 0;
			return Number(this.score) + this.racialBonus;
		},
		modifier() {
			//if(!Number(this.score)) return 0;
			return Math.floor((this.totalScore - 10) / 2);
		},
		cost() {
			//if(!Number(this.score)) return 0;

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
			if(this.score < 8 || this.score === "") {
				this.score = 8;
			} else if (this.score > 15) {
				this.score = 15;
			}

			const thisCost = getCost(Number(this.score));
			const nextCost = getCost(Number(this.score + 1));
			const costDiff = thisCost - nextCost;

			return this.remainingPoints + costDiff >= 0 ? 15 : this.score;
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

	components: {
		appInput: AbilityInput
	}
}
</script>
<style scoped>
.number-input {
	margin-left: 25%;
	max-width: 50%;
}
</style>
