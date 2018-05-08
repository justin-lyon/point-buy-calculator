<template>
	<v-card>
		<v-card-title primary-title>
			<div>
				<h3>Ability Score Point Buy Calculator</h3>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>

			<v-container fluid grid-list-xs>
			<v-layout wrap align-center>
				<v-flex xs12
					md8 offset-md2
					lg6 offset-lg3>
					<v-layout>
						<v-flex class="mx-3">
							<v-text-field
								label="Available"
								v-model="available"
								type="number"></v-text-field>
						</v-flex>
						<v-flex class="mx-3">
							<v-text-field
								readonly
								disabled
								label="Remaining"
								v-model="remaining" ></v-text-field>
						</v-flex>
					</v-layout>
				</v-flex>

				<v-flex xs12
					md8 offset-md2
					lg6 offset-lg3>
					<v-layout>
						<v-flex class="mx-3">
							<v-select
								label="Race"
								v-model="selectedRace"
								:items="raceOptions"></v-select>
						</v-flex>
						<v-flex class="mx-3" v-if="subRaceOptions">
							<v-select
								label="Subrace"
								v-model="selectedSubRace"
								:items="subRaceOptions"></v-select>
						</v-flex>
					</v-layout>
				</v-flex>

				<v-flex xs12>

					<app-table :abilities="abilities"></app-table>

				</v-flex>
			</v-layout>
			</v-container>

		</v-card-text>
	</v-card>
</template>

<script>
import Table from "./PointBuy/Datatable";
import calculator from "../mixins/point-buy-calc";

export default {
	name: "PointBuyPage",
	mixins: [calculator],
	data() {
		return {
			available: 27,
			abilities: [
				{ name: "strength", value: 8 },
				{ name: "dexterity", value: 8 },
				{ name: "constitution", value: 8 },
				{ name: "intelligence", value: 8 },
				{ name: "wisdom", value: 8 },
				{ name: "charisma", value: 8 }
			],
			selectedRace: "Human",
			selectedSubRace: "",
		};
	},

	computed: {
		remaining() {
			return this.available - 0;
		},
		raceOptions() {
			return this.races.map(r => r.name.charAt(0).toUpperCase() + r.name.slice(1));
		},
		subRaceOptions() {
			const race = this.selectedRace.toLowerCase();
			if(!this.races.find(r => r.name === race).subRaces) return;
			return this.races.find(r => r.name === race).subRaces.map(s => s.name.charAt(0).toUpperCase() + s.name.slice(1));
		}
	},

	components: {
		appTable: Table
	}
}
</script>
