<template>
	<v-card>
		<v-card-text>
			<v-container fluid grid-list-xl>
				<v-layout row justify-center>
					<v-flex x12 md3 lg4>
						<v-text-field
							label="Total Available"
							v-model.number="available"
							type="number"
							max="999"
							min="1"></v-text-field>
						</v-flex>

						<v-flex md3 lg4 v-if="$vuetify.breakpoint.mdAndUp">
							<div class="text-xs-center" >
								<app-gauge size="100" :width="15" ></app-gauge>
							</div>
						</v-flex>
				</v-layout>

				<v-layout row justify-center>
					<!-- <v-flex xs12
						:md3="subRaceOptions || race.name === 'human'"
						:md6="!subRaceOptions && race.name !== 'human'"
						:lg4="subRaceOptions || race.name === 'human'"
						:lg8="!subRaceOptions && race.name !== 'human'" > -->
					<v-flex>

						<!-- <v-select
							label="Race"
							v-model="selectedRace"
							:items="raceOptions"></v-select> -->

					</v-flex>
					<v-flex xs12 md3 lg4 v-if="subRaceOptions">
						<!-- <v-select
							label="Subrace"
							v-model="selectedSubRace"
							:items="subRaceOptions" ></v-select> -->
							<!-- :item-text="name | pascalizeWord"
							:item-value="id" ></v-select> -->
					</v-flex>
					<v-flex xs12 md3 lg4 v-if="race.name === 'human'">
						<!-- <v-checkbox
							class="shrink pt-3"
							label="Variant"
							v-model="isVariantHuman"
							hide-details></v-checkbox> -->
					</v-flex>
				</v-layout>

				<v-layout row wrap justify-center v-if="showAbilitySelections">
					<v-flex
						xs4 md2
						v-for="ab in abilityOptions"
						:key="ab">

						<!-- <v-checkbox v-model="selectedAbilities"
							:label="ab | truncate(3) | capitalize"
							:value="ab"
							validate-on-blur
							:disabled="selectedAbilities.length >= 2 && selectedAbilities.indexOf(ab) === -1" ></v-checkbox> -->
					</v-flex>
				</v-layout>

				<v-layout row v-if="$vuetify.breakpoint.smAndDown">
					<v-flex xs12>
						<!-- <app-accordion :bonuses="selectedBonuses"
							:activeAbility="activeAbility"
							@focused="handleFocusedAbility"></app-accordion> -->
					</v-flex>
				</v-layout>

				<v-layout row v-if="$vuetify.breakpoint.mdAndUp">
					<v-flex xs12>
						<!-- <app-table :bonuses="selectedBonuses"></app-table> -->
					</v-flex>
				</v-layout>

			</v-container>
			<!-- <app-buttons v-if="activeAbility && $vuetify.breakpoint.smAndDown"
				:abilityName="activeAbility"></app-buttons> -->

		</v-card-text>
	</v-card>
</template>

<script>
import Gauge from "./PointBuy/RemainingGauge";
import Table from "./PointBuy/Datatable";
import Accordion from "./PointBuy/AbilityAccordion";
import Buttons from "./PointBuy/AbilityButtons";

import { maxLength } from "vuelidate/lib/validators";
import { races, getRaceByName } from "../plugins/point-buy";
import { pb } from "../api";
import { pascalizeWord, truncate, capitalize } from "../filters";

import { mapGetters, mapMutations } from "vuex";

export default {
	name: "PointBuyPage",
	data() {
		return {
			selectedRace: "Human",
			selectedSubRace: "",
			selectedAbilities: [],
			activeAbility: "strength",
			isVariantHuman: false,
		};
	},

	computed: {
		...mapGetters("PointBuy", [
			"availablePoints",
			"abilities",
			"abilityNames",
			"spent",
			"remainingPoints"
		]),
		available: {
			get() {
				return this.availablePoints;
			},
			set(val) {
				this.setAvailable(val);
			}
		},
		race() {
			//return pb.getRaceByName(this.selectedRace);
			return getRaceByName(this.selectedRace);
		},
		raceOptions() {
			//return pb.getRaces().map(r => pascalizeWord(r.name));
			return races.map(r => pascalizeWord(r.name));
		},
		subRaceOptions() {
			//return pb.getSubRacesByRace(this.race.id).map(sr => pascalizeWord(sr.name));
			if(!this.race.subRaces) return;

			const subRaces = this.race.subRaces.map(sr => pascalizeWord(sr.name));
			this.selectedSubRace = subRaces[0];
			return subRaces;
		},
		bonuses() {
			//const bonuses = pb.getBonusesByRace(this.race.id).concat(pb.getBonusesBySubRace())

			return this.race.subRaces ? this.race.subRaces.find(sr => sr.name === this.selectedSubRace.toLowerCase()).bonuses : this.race.bonuses;
		},
		abilityOptions() {
			if(this.race.name === 'human' && this.isVariantHuman) {
				return this.abilities;
			}
			const bonusNames = this.bonuses.map(bonus => bonus.name);
			return this.abilities.filter(name => !bonusNames.includes(name));
		},
		selectedBonuses() {
			console.log("selectedAbilities", this.selectedAbilities);
			if(this.race.name === 'human' && this.isVariantHuman) {
				const selectedBonuses = this.selectedAbilities.map(ab => ({ name: ab.toLowerCase(), value: 1 }));
				console.log("selectedBonuses", selectedBonuses);
				return selectedBonuses;
			}

			const allBonuses = this.bonuses.concat(this.selectedAbilities.map(ab => ({ name: ab.toLowerCase(), value: 1 })));
			return allBonuses;
		},
		showAbilitySelections() {
			console.log("isvarianthuman", this.isVariantHuman);
			const show = this.race.name === 'half-elf' || this.race.name === 'human' && this.isVariantHuman;
			console.log("show", show);
			return show;
		},
	},

	methods: {
		...mapMutations("PointBuy", {
			setAvailable: "availablePoints"
		}),
		handleFocusedAbility(ab) {
			this.activeAbility = this.activeAbility === ab ? "" : ab;
		},
	},

	filters: {
		pascalizeWord,
		truncate,
		capitalize
	},

	components: {
		appGauge: Gauge,
		appAccordion: Accordion,
		appTable: Table,
		appButtons: Buttons,
	}
}
</script>
