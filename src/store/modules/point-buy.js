import { costs, races } from "../../plugins/point-buy";

const state = {
	availablePoints: 27,
	abilities: [
		{ name: "strength", value: 8 },
		{ name: "dexterity", value: 8 },
		{ name: "constitution", value: 8 },
		{ name: "intelligence", value: 8 },
		{ name: "wisdom", value: 8 },
		{ name: "charisma", value: 8 }
	],
};

const getters = {
	availablePoints(state) {
		return state.availablePoints;
	},
	abilities(state) {
		return state.abilities;
	},
	abilityNames(state) {
		return state.abilities.map(a => a.name);
	},
	remainingPoints(state) {
		const spent = state.abilities.reduce((acc, a) => {
			const costItem = costs.find(c => c.score === Number(a.value));
			return acc += costItem ? Number(costItem.cost) : 0;
		}, 0);
		return Number(state.availablePoints - spent);
	}
};

const mutations = {
	setAvailable(state, value) {
		state.availablePoints = value;
	},
	setAbility(state, ab) {
		const index = state.abilities.indexOf(a => a.name === ab.name);
		if(index > -1) state.abilities[index] = ab;
	}
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions
};