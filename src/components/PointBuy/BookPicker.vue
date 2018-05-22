<template>
<div>
	<v-btn-toggle multiple
		v-model="books">
		<v-btn v-for="src in sources" :key="src.id"
			flat
			color="indigo"
			:value="src.id"
			:title="src.name | pascalize" >

			{{ src.abbr | capitalize }}
		</v-btn>
	</v-btn-toggle>

	<v-snackbar
		v-model="snackbar"
		:timeout="3000"
		top >

		{{ message }}
		<v-btn flat color="pink" @click.native="snackbar = false" >Close</v-btn>
	</v-snackbar>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { capitalize, pascalize } from "../../filters";

export default {
	name: "BookPicker",
	data() {
		return {
			message: "",
			snackbar: false
		}
	},
	computed: {
		...mapGetters("PointBuy", [
			"selectedResources",
			"sources"]),
		books: {
			get() { return this.selectedResources; },
			set(val) {
				if(val.length > 0) {
					this.setSelectedResources(val);
				} else {
					this.message = "You must have one book selected!";
					this.snackbar = true;
				}
			}
		}
	},

	methods: {
		...mapMutations("PointBuy", {
			setSelectedResources: "selectedResources",
		})
	},

	filters: {
		capitalize,
		pascalize
	}
}
</script>
