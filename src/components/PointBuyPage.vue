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
					<v-flex xs12
						:md3="subRaceOptions"
						:md6="!subRaceOptions"
						:lg4="subRaceOptions"
						:lg8="!subRaceOptions" >
						<v-select
							label="Race"
							v-model="selectedRace"
							:items="raceOptions"></v-select>
					</v-flex>
					<v-flex xs12 md3 lg4 v-if="subRaceOptions">
						<v-select
							label="Subrace"
							v-model="selectedSubRace"
							:items="subRaceOptions"></v-select>
					</v-flex>
				</v-layout>

				<v-layout row wrap justify-center v-if="selectedRace === 'Half-elf'">
					<v-flex
						xs4 md2
						v-for="ab in abilityOptions"
						:key="ab">

						<v-checkbox v-model="selectedAbilities"
							:label="ab | truncate(3) | capitalize"
							:value="ab"
							validate-on-blur
							:disabled="selectedAbilities.length >= 2 && selectedAbilities.indexOf(ab) === -1" ></v-checkbox>
					</v-flex>
				</v-layout>

				<v-layout row v-if="$vuetify.breakpoint.smAndDown">
					<v-flex xs12>
						<app-accordion :bonuses="bonuses"
							:activeAbility="activeAbility"
							@focused="handleFocusedAbility"></app-accordion>
					</v-flex>
				</v-layout>

				<v-layout row v-if="$vuetify.breakpoint.mdAndUp">
					<v-flex xs12>
						<app-table :bonuses="bonuses"></app-table>
					</v-flex>
				</v-layout>

			</v-container>
			<app-buttons v-if="activeAbility"
				:abilityName="activeAbility"></app-buttons>

		</v-card-text>
	</v-card>
</template>

<script>
import Gauge from "./PointBuy/RemainingGauge";
import Table from "./PointBuy/Datatable";
import Accordion from "./PointBuy/AbilityAccordion";
import Buttons from "./PointBuy/AbilityButtons";

import { maxLength } from "vuelidate/lib/validators";
import { races } from "../plugins/point-buy";
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
		};
	},

	computed: {
		...mapGetters([
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
		raceOptions() {
			return races.map(r => pascalizeWord(r.name));
		},
		subRaceOptions() {
			const race = this.selectedRace.toLowerCase();
			if(!races.find(r => r.name === race).subRaces) return;

			const subRaces = races.find(r => r.name === race).subRaces.map(s => s.name.charAt(0).toUpperCase() + s.name.slice(1));
			this.selectedSubRace = subRaces[0];
			return subRaces;
		},
		abilityOptions() {
			return this.abilities.filter(name => name !== "charisma");
		},
		bonuses() {
			const race = races.find(r => r.name === this.selectedRace.toLowerCase());
			const bonuses = race.subRaces ? race.subRaces.find(sr => sr.name === this.selectedSubRace.toLowerCase()).bonuses : race.bonuses;

			const returnable = [];
			if(this.selectedRace === 'Half-elf') {
				const selectedBonuses = this.selectedAbilities.map(ab => ({ name: ab.toLowerCase(), value: 1 }));
				returnable.push(...selectedBonuses);
			}
			returnable.push(...bonuses);
			return returnable;
		},
	},

	methods: {
		...mapMutations({
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
