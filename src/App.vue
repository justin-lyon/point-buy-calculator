<template>
 <v-app>
	 <v-content>
		<app-header></app-header>
		<v-container class="container" fluid grid-list-xs>
			<v-layout wrap>
				<v-flex
					class="py-3"
					xs12
					md10 offset-md1
					lg8 offset-lg2 >

					<transition name="slide-x-reverse-transition" mode="out-in">
						<router-view></router-view>
					</transition>
				</v-flex>
			</v-layout>
		</v-container>
		<app-footer></app-footer>
	 </v-content>
 </v-app>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
export default {
	name: 'app',
	components: {
		appHeader: Header,
		appFooter: Footer
	}
}
</script>