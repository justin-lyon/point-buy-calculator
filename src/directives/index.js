import { getCost } from "../plugins/point-buy";

const evaluateCost = (el, binding, vnode) => {

};

export const isUnderRemaining = {
	bind(el, binding, vnode) {
		const input = el.querySelector("input");
		console.log("input", input);
		input.value = binding.value;
	},
	update(el, binding, vnode) {
		if(binding.modifiers.number) {
			binding.value = Number(binding.value);
		}

		console.log("d value", binding.value);
		console.log("d remaining", vnode.computed.remainingPoints > 0);

		if(vnode.computed.remainingPoints > 0) {
			el.value = binding.value;
		}
	}
};