import { getCost, races } from "../../plugins/point-buy";
import api from "../../api";

const state = {
	availablePoints: 27,
	abilities: [
		"strength",
		"dexterity",
		"constitution",
		"intelligence",
		"wisdom",
		"charisma"
	],

	selectedRace: "r7", // human
	selectedSubRace: "sr9",

	strength: 8,
	dexterity: 8,
	constitution: 8,
	intelligence: 8,
	wisdom: 8,
	charisma: 8,

	races: []
};

const getters = {
	availablePoints: state => state.availablePoints,
	abilities: state => state.abilities,

	selectedRace: state => state.selectedRace,
	selectedSubRace: state => state.selectedSubRace,

	strength: state => Number(state.strength),
	dexterity: state => Number(state.dexterity),
	constitution: state => Number(state.constitution),
	intelligence: state => Number(state.intelligence),
	wisdom: state => Number(state.wisdom),
	charisma: state => Number(state.charisma),

	spent: state => {
		return state.abilities.reduce((acc, a) => {
			const cost = getCost(Number(state[a]));
			return acc += Number(cost) ? cost : 0;
		}, 0);
	},
	remainingPoints: (state, { spent }) => Number(state.availablePoints - spent),

	races: state => api.pb.getRaces(),
	subRaces: state => api.pb.getSubRacesByRace(state.selectedRace),

};

const mutations = {
	availablePoints: (state, value) => state.availablePoints = Number(value),

	strength: (state, value) => state.strength = Number(value),
	dexterity: (state, value) => state.dexterity = Number(value),
	constitution: (state, value) => state.constitution = Number(value),
	intelligence: (state, value) => state.intelligence = Number(value),
	wisdom: (state, value) => state.wisdom = Number(value),
	charisma: (state, value) => state.charisma = Number(value),

	selectedRace: (state, value) => state.selectedRace = value,
	selectedSubRace: (state, value) => state.selectedSubRace = value,
};

const actions = {};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};