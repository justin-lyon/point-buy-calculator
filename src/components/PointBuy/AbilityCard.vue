<template>
<div @click="focusInput">
	<v-card :raised="abilityName === activeAbility"
		:flat="abilityName !== activeAbility"
		ripple>
			<v-container grid-list-xs>
				<v-layout row>

					<v-flex>
						<v-list two-line>

							<v-list-tile>
								<v-list-tile-content>
									<v-list-tile-title>
										<strong >{{ abilityName | truncate(3) | capitalize }}</strong>
									</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>

							<v-list-tile >
								<v-list-tile-content>
									<v-list-tile-title>
										<span >{{ score }}</span>
									</v-list-tile-title>
									<v-list-tile-sub-title>
										<span class="grey--text text--lighten-1">
											Base
										</span>
									</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>

						</v-list>
					</v-flex>

					<v-flex >
						<v-list two-line>

							<v-list-tile>
								<v-list-tile-content>
									<v-list-tile-title>
										<span :class="greenText">{{ racialBonus }}</span>
									</v-list-tile-title>
									<v-list-tile-sub-title>
										<span class="grey--text text--lighten-1">
											Racial
										</span>
									</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>

							<v-list-tile>
								<v-list-tile-content>
									<v-list-tile-title>
										<span :class="redText">{{ modifier }}</span>
									</v-list-tile-title>
									<v-list-tile-sub-title>
										<span class="grey--text text--lighten-1">
											Mod
										</span>
									</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>

						</v-list>
					</v-flex>

					<v-flex >
						<v-list two-line>

							<v-list-tile>
								<v-list-tile-content>
									<v-list-tile-title>
										<span >{{ totalScore }}</span>
									</v-list-tile-title>
									<v-list-tile-sub-title>
										<span class="grey--text text--lighten-1">
											Score
										</span>
									</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>

							<v-list-tile>
								<v-list-tile-content>
									<v-list-tile-title>
										<span >{{ cost }}</span>
									</v-list-tile-title>
									<v-list-tile-sub-title>
										<span class="grey--text text--lighten-1">
											Cost
										</span>
									</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>

						</v-list>
					</v-flex>

				</v-layout>

			</v-container>
	</v-card>
</div>
</template>

<script>
import { required, minValue, maxValue } from "vuelidate/lib/validators";
import { getCost } from "../../plugins/point-buy";
import { truncate, capitalize } from "../../filters";
import { mapGetters } from "vuex";

export default {
	name: "PointBuyDatatableRow",

	props: {
		abilityName: {
			type: String
		},
		bonuses: {
			type: Array
		},
		activeAbility: {
			type: String
		}
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

		inputName() {
			return "abCard-" + this.abilityName;
		}
	},

	methods: {
		focusInput(event) {
			this.$emit("focused", this.abilityName);
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
