<template>
	<tr>
		<th class="text-xs-center">{{ ability.name | truncate(3) | capitalize }}</th>
		<td>
			<div class="">
				<v-text-field
					class="number-input"
					v-model="ability.value"
					type="number"
					:max="max"
					min="8"
					validate-on-blur
					@blur="$v.abScore.$touch()"
					:error="$v.abScore.$error"
					:rules="[
					() => $v.abScore.required || 'This field is required.',
					() => $v.abScore.minValue || 'Minimum value is 8.',
					() => $v.abScore.maxValue || 'Maximum value is 15.']"
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
import { costs } from "../../plugins/point-buy";
import { truncate, capitalize } from "../../filters";
import { mapGetters, mapMutations } from "vuex";

export default {
	data() {
		return {
			baseOptions: [ 8, 9, 10, 11, 12, 13, 14, 15 ]
		}
	},

	props: {
		ability: {
			type: Object
		},
		bonuses: {
			type: Array
		},
	},

	computed: {
		...mapGetters([
			"availablePoints",
			"remainingPoints"
		]),
		abScore() {
			return this.ability.value;
		},
		totalScore() {
			if(!Number(this.abScore)) return 0;
			return Number(this.abScore) + this.racialBonus;
		},
		modifier() {
			if(!Number(this.abScore)) return 0;
			return Math.floor((this.totalScore - 10) / 2);
		},
		cost() {
			if(!Number(this.abScore)) return 0;

			const item = costs.find(m => m.score === Number(this.abScore));

			if(!item) return 0;

			return item.cost;
		},
		redText() {
			return this.modifier < 0 ? "subheading red--text" : "";
		},
		greenText() {
			return this.racialBonus > 0 ? "subheading green--text" : "";
		},
		max() {
			return this.remainingPoints > 0 ? 15 : 8;
		},
		racialBonus() {
			if(this.bonuses) {
				const bonusItem = this.bonuses.find(b => b.name === this.ability.name);
				return bonusItem ? bonusItem.value : 0;
			}
			return 0;
		}
	},

	methods: {
		...mapMutations([
			"setAbility"
		]),
	},

	validations: {
		abScore: {
			required,
			minValue: minValue(8),
			maxValue: maxValue(15),
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
	max-width: 50%;
}
</style>
