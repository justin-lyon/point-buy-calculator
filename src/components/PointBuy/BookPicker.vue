<template>
	<v-btn-toggle multiple
		v-model="books">
		<v-btn v-for="src in sources" :key="src.id"
			flat
			:value="src.id"
			:title="src.name | pascalize" >

			{{ src.abbr | capitalize }}
		</v-btn>
	</v-btn-toggle>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { capitalize, pascalize } from "../../filters";

export default {
	name: "BookPicker",
	computed: {
		...mapGetters("PointBuy", [
			"selectedResources",
			"sources"]),
		books: {
			get() { return this.selectedResources; },
			set(val) { this.setSelectedResources(val) }
		}
	},

	methods: {
		...mapMutations("PointBuy", {
			setSelectedResources: "selectedResources"
		})
	},

	filters: {
		capitalize,
		pascalize
	}
}
</script>
