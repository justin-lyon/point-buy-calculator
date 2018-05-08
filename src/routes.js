import VueRouter from "vue-router";
import store from "./store/store";

import PointBuy from "./components/PointBuyPage";

const routes = [
	{
		path: "/",
		component: PointBuy,
	},
	{
		path: "*",
		redirect: "/"
	}
];

export default new VueRouter({
	mode: "history",
	routes
});