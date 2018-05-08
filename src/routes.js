import VueRouter from "vue-router";
import store from "./store/store";

import Dashboard from "./components/Dashboard";

const routes = [
	{
		path: "/",
		component: Dashboard,
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