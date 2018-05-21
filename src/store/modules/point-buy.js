import { getCost, races } from "../../plugins/point-buy";
import { pascalize } from "../../filters";
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

	selectedResources: ["b0"], //, "b1"
	selectedRace: "r7", // human
	selectedSubRace: "sr9", // normal

	strength: 8,
	dexterity: 8,
	constitution: 8,
	intelligence: 8,
	wisdom: 8,
	charisma: 8,

	sources: api.pb.getSources(),
};

const getters = {
	availablePoints: state => state.availablePoints,
	abilities: state => state.abilities,

	selectedResources: state => state.selectedResources,
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

	sources: state => state.sources,
	races: state => api.pb.getRacesBySource(state.selectedResources),
	subRaces: state => api.pb.getSubRacesByRace(state.selectedRace, state.selectedResources),
	bonuses: state => api.pb.getBonusesByParent([state.selectedRace, state.selectedSubRace]),

	raceOptions: (state, getters) => getters.races.map(r => ({ text: pascalize(r.name), value: r.id })).sort((a, b) => {
		const aText = a.text.toLowerCase();
		const bText = b.text.toLowerCase();
		return aText < bText ? -1 : aText > bText ? 1 : 0;
	}),
	subRaceOptions: (state, getters) => {
		const options = getters.subRaces.map(sr => ({ text: pascalize(sr.name), value: sr.id }));
		if(options.length) {
			state.selectedSubRace = options[0].value;
			return options;
		}
		state.selectedSubRace = "";
		return;
	},
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
	selectedResources: (state, value) => state.selectedResources = value,
};

const actions = {};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};