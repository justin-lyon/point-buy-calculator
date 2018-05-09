import Vue from "vue";
import Vuex from "vuex";

import PointBuy from "./modules/point-buy";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		PointBuy
	}
});