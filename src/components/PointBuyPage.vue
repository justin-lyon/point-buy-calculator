<template>
	<v-card>
		<v-card-title primary-title>
			<div>
				<h3>Ability Score Point Buy Calculator</h3>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>

			<v-container fluid grid-list-xl>
			<v-layout wrap>
				<v-flex xs12
					md8 offset-md2
					lg6 offset-lg3>
					<v-layout row >
						<v-flex xs6>
							<v-text-field
								label="Available"
								v-model="available"
								type="number"></v-text-field>
						</v-flex>
						<v-flex text-xs-center>
							<v-progress-circular
								:value="remainingPercent"
								size="48"
								color="green">

								{{ remainingPoints }}
							</v-progress-circular>
						</v-flex>
					</v-layout>
				</v-flex>

				<v-flex xs12
					md8 offset-md2
					lg6 offset-lg3>
					<v-layout row >
						<v-flex xs6 >
							<v-select
								label="Race"
								v-model="selectedRace"
								:items="raceOptions"></v-select>
						</v-flex>
						<v-flex xs6 v-if="subRaceOptions">
							<v-select
								label="Subrace"
								v-model="selectedSubRace"
								:items="subRaceOptions"></v-select>
						</v-flex>
					</v-layout>

					<v-layout row wrap v-if="selectedRace === 'Half-elf'">
						<v-flex
							xs4
							v-for="ab in abilityOptions"
							:key="ab">

							<v-checkbox v-model="selectedAbilities"
								:label="ab | truncate(3) | capitalize"
								:value="ab"
								validate-on-blur
								:disabled="selectedAbilities.length >= 2 && selectedAbilities.indexOf(ab) === -1"
								@blur="$v.selectedAbilities.$touch()"
								:error="$v.selectedAbilities.$error"
								:rules="[
								() => $v.selectedAbilities.minLength || 'Pick Two.',
								() => $v.selectedAbilities.maxLength || 'Pick Two.']"
								></v-checkbox>
						</v-flex>
					</v-layout>
				</v-flex>

				<v-flex xs12>

					<app-table :abilities="abilities" :bonuses="bonuses"></app-table>

				</v-flex>
			</v-layout>
			</v-container>

		</v-card-text>
	</v-card>
</template>

<script>
import Table from "./PointBuy/Datatable";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { races } from "../plugins/point-buy";
import { pascalizeWord, truncate, capitalize } from "../filters";

import { mapGetters, mapMutations } from "vuex";

export default {
	name: "PointBuyPage",
	data() {
		return {
			selectedRace: "Human",
			selectedSubRace: "",
			selectedAbilities: []
		};
	},

	computed: {
		...mapGetters([
			"availablePoints",
			"abilities",
			"abilityNames",
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
		remaining() {
			return this.available - 0;
		},
		remainingPercent() {
			return this.remainingPoints / this.available * 100;
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
			return this.abilityNames.map(name => capitalize(name), 3);
		},
		bonuses() {
			const race = races.find(r => r.name === this.selectedRace.toLowerCase());
			const bonuses = race.subRaces ? race.subRaces.find(sr => sr.name === this.selectedSubRace.toLowerCase()).bonuses : race.bonuses;
			return bonuses ? bonuses : this.selectedAbilities.map(ab => ({ name: ab.toLowerCase(), value: 1 }));
		},
	},

	methods: {
		...mapMutations(["setAvailable"]),
	},

	validations: {
		selectedAbilities: {
			required,
			minLength: minLength(2),
			maxLength: maxLength(2)
		}
	},

	filters: {
		pascalizeWord,
		truncate,
		capitalize
	},

	components: {
		appTable: Table
	}
}
</script>
