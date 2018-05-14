<template>
	<tr>
		<th class="text-xs-center">{{ abilityName | truncate(3) | capitalize }}</th>
		<td>
			<div class="">
				<v-text-field
					class="number-input"
					:value="score"
					@input.native="evaluateScore($event)"
					type="number"
					:max="max"
					min="8"
					validate-on-blur
					@blur="$v.score.$touch()"
					:error="$v.score.$error"
					:rules="[
					() => $v.score.required || 'This field is required.',
					() => $v.score.minValue || 'Minimum value is 8.',
					() => $v.score.maxValue || 'Maximum value is 15.']"
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
import { getCost } from "../../plugins/point-buy";
import { isUnderRemaining } from "../../directives";
import { truncate, capitalize } from "../../filters";
import { mapGetters, mapMutations } from "vuex";

export default {
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
				const ab = {
					name: this.abilityName,
					value: Number(val)
				};
				this.$store.commit(this.abilityName, Number(val));
			}
		},
		totalScore() {
			if(!Number(this.score)) return 0;
			return Number(this.score) + this.racialBonus;
		},
		modifier() {
			if(!Number(this.score)) return 0;
			return Math.floor((this.totalScore - 10) / 2);
		},
		cost() {
			if(!Number(this.score)) return 0;

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
			return this.remainingPoints > 0 ? 15 : this.score;
		},
		racialBonus() {
			if(this.bonuses) {
				const bonusItem = this.bonuses.find(b => b.name === this.abilityName);
				return bonusItem ? bonusItem.value : 0;
			}
			return 0;
		}
	},

	methods: {
		evaluateScore(event) {
			const newValue = Number(event.target.value);
			const oldCost = getCost(this.score);
			const newCost = getCost(newValue);
			const costDiff = oldCost - newCost;

			console.log("event", event);
			console.log("event.t", event.target);
			console.log("score", this.score, oldCost);
			console.log("event.t.v", newValue, newCost);
			console.log("remaining", this.remainingPoints, costDiff, this.remainingPoints + costDiff);

			if(this.remainingPoints + costDiff >= 0) {
				this.score = newValue;
			} else {
				console.log("else");
				event.target["value"] = this.score;
			}
		},
	},

	validations: {
		score: {
			required,
			minValue: minValue(8),
			maxValue: maxValue(15)
		},
	},

	directives: {
		"valid-number": { ...isUnderRemaining }
	},

	filters: {
		truncate,
		capitalize
	},
}
</script>
<style scoped>
.number-input {
	max-width: 50%;
}
</style>
