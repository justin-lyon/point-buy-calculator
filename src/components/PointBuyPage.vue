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
					<v-flex xs12 md3 lg4>
						<v-select
							label="Race"
							v-model="race"
							:items="raceOptions"></v-select>
					</v-flex>

					<v-flex xs12 md3 lg4 v-if="subRaceOptions" >
						<v-select
							label="Subrace"
							v-model="subRace"
							:items="subRaceOptions" ></v-select>
					</v-flex>
					<!-- <v-flex xs12 md3 lg4 > v-if="race.name === 'human'" -->
						<!-- <v-checkbox
							class="shrink pt-3"
							label="Variant"
							v-model="isVariantHuman"
							hide-details></v-checkbox> -->
					<!-- </v-flex> -->
				</v-layout>

				<!-- v-if="showAbilitySelections" v-for="ab in abilityOptions" :key="ab" -->
				<v-layout row wrap justify-center >
					<v-flex
						xs4 md2
						>

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

import { pascalizeWord, truncate, capitalize } from "../filters";

import { mapGetters, mapMutations } from "vuex";

export default {
	name: "PointBuyPage",
	data() {
		return {
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
			"remainingPoints",
			"selectedRace",
			"selectedSubRace",
			"races",
			"subRaces"
		]),
		available: {
			get() {
				return this.availablePoints;
			},
			set(val) {
				this.setAvailable(val);
			},
		},
		race: {
			get() {
				return this.selectedRace;
			},
			set(val) {
				this.setRace(val);
			}
		},
		subRace: {
			get() {
				return this.selectedSubRace;
			},
			set(val) {
				this.setSubRace(val);
			}
		},

		raceOptions() {
			return this.races.map(r => ({ text: pascalizeWord(r.name), value: r.id })).sort();
		},

		subRaceOptions() {
			const subRaces = this.subRaces;

			if(subRaces.length > 0) {
				const subRaceOptions = subRaces.map(sr => ({ text: pascalizeWord(sr.name), value: sr.id }));
				this.subRace = subRaceOptions[0].value;
				return subRaceOptions;
			}

			return;
		}
	},

	methods: {
		...mapMutations("PointBuy", {
			setAvailable: "availablePoints",
			setRace: "selectedRace",
			setSubRace: "selectedSubRace"
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
