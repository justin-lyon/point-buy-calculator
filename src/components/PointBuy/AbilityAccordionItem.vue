<template>
	<v-expansion-panel-content v-model="isActive" ripple >
		<div slot="header" @click="focusInput">
			<v-layout row>
				<v-flex xs2>
					<strong>{{ abilityName | truncate(3) | capitalize }}</strong>
				</v-flex>
				<v-flex xs2 v-if="!isActive">
					<div class="grey--text text--lighten-1">B</div>
					<div>{{ score }}</div>
				</v-flex>
				<v-flex xs2 v-if="!isActive">
					<div class="grey--text text--lighten-1">R</div>
					<div><span :class="greenText">{{ racialBonus }}</span></div>
				</v-flex>
				<v-flex xs2 v-if="!isActive">
					<div class="grey--text text--lighten-1">S</div>
					<div>{{ totalScore }}</div>
				</v-flex>
				<v-flex xs2 v-if="!isActive">
					<div class="grey--text text--lighten-1">M</div>
					<div><span :class="redText">{{ modifier }}</span></div>
				</v-flex>
				<v-flex xs2 v-if="!isActive">
					<div class="grey--text text--lighten-1">C</div>
					<div>{{ cost }}</div>
				</v-flex>
			</v-layout>
		</div>

		<v-card>
			<v-card-text>
				<app-card
				:abilityName="abilityName"
				:base="score"
				:racial="racialBonus"
				:score="totalScore"
				:modifier="modifier"
				:cost="cost" ></app-card>
			</v-card-text>
		</v-card>
	</v-expansion-panel-content>

</template>

<script>
import Card from "./AbilityCard";
import { getCost } from "../../plugins/point-buy";
import { truncate, capitalize } from "../../filters";
import { mapGetters } from "vuex";

export default {
	name: "PointBuyAbilityAccordionItem",

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
		abilityNamespace() { return "PointBuy/" + this.abilityName; },
		...mapGetters("PointBuy", {
			availablePoints: "availablePoints",
			remainingPoints: "remainingPoints"
		}),
		score: {
			get() {
				return this.$store.getters[this.abilityNamespace];
			},
			set(val) {
				this.$store.commit(this.abilityNamespace, Number(val));
			}
		},
		isActive() {
			return this.abilityName === this.activeAbility;
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

		racialBonus() {
			if(this.bonuses) {
				const bonusItem = this.bonuses.find(b => b.name === this.abilityName);
				return bonusItem ? bonusItem.value : 0;
			}
			return 0;
		},
	},

	methods: {
		focusInput(event) {
			this.$emit("focused", this.abilityName);
		}
	},

	filters: {
		truncate,
		capitalize
	},

	components: {
		appCard: Card,
	}
}
</script>
