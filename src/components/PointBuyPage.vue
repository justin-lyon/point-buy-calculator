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
import { races } from "../plugins/point-buy";

import { mapGetters, mapMutations } from "vuex";

export default {
	name: "PointBuyPage",
	data() {
		return {
			selectedRace: "Human",
			selectedSubRace: "",
		};
	},

	computed: {
		...mapGetters([
			"availablePoints",
			"abilities",
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
			return races.map(r => r.name.charAt(0).toUpperCase() + r.name.slice(1));
		},
		subRaceOptions() {
			const race = this.selectedRace.toLowerCase();
			if(!races.find(r => r.name === race).subRaces) return;

			const subRaces = races.find(r => r.name === race).subRaces.map(s => s.name.charAt(0).toUpperCase() + s.name.slice(1));
			this.selectedSubRace = subRaces[0];
			return subRaces;
		},
		bonuses() {
			const race = races.find(r => r.name === this.selectedRace.toLowerCase());
			const bonuses = race.subRaces ? race.subRaces.find(sr => sr.name === this.selectedSubRace.toLowerCase()).bonuses : race.bonuses;
			console.log("selectedRace", this.selectedRace);
			console.log("race", race);
			console.log("bonuses", bonuses);
			return bonuses;
		},
	},

	methods: {
		...mapMutations(["setAvailable"]),
	},

	components: {
		appTable: Table
	}
}
</script>
