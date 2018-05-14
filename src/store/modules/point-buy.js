import { getCost, races } from "../../plugins/point-buy";

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
	strength: 8,
	dexterity: 8,
	constitution: 8,
	intelligence: 8,
	wisdom: 8,
	charisma: 8
};

const getters = {
	availablePoints: state => state.availablePoints,
	abilities: state => state.abilities,

	strength: state => Number(state.strength),
	dexterity: state => Number(state.dexterity),
	constitution: state => Number(state.constitution),
	intelligence: state => Number(state.intelligence),
	wisdom: state => Number(state.wisdom),
	charisma: state => Number(state.charisma),

	remainingPoints(state) {
		const spent = state.abilities.reduce((acc, a) => {
			const cost = getCost(Number(state[a]));
			return acc += Number(cost) ? cost : 0;
		}, 0);
		return Number(state.availablePoints - spent);
	}
};

const mutations = {
	availablePoints: (state, value) => state.availablePoints = value,

	strength: (state, value) => state.strength = Number(value),
	dexterity: (state, value) => state.dexterity = Number(value),
	constitution: (state, value) => state.constitution = Number(value),
	intelligence: (state, value) => state.intelligence = Number(value),
	wisdom: (state, value) => state.wisdom = Number(value),
	charisma: (state, value) => state.charisma = Number(value),
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions
};