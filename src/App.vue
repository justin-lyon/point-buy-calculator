<template>
  <div id="app">
    <h1>App</h1>
		<app-dashboard></app-dashboard>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";

export default {
	name: 'app',
	components: {
		appDashboard: Dashboard
	}
}
</script>