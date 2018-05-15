<template>
	<v-container>
		<v-layout>
			<v-flex>
				<div>
					<v-btn @click="increment" flat icon>
						<v-icon >keyboard_arrow_up</v-icon>
					</v-btn>
				</div>
				<div>
					<v-btn @click="decrement" flat icon>
						<v-icon >keyboard_arrow_down</v-icon>
					</v-btn>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: "InputCounter",
	model: {
		prop: "score",
		event: "input"
	},

	props: {
		abilityName: {
			type: String,
			default: "strength"
		},
		max: {
			default: ""
		},
		min: {
			default: ""
		}
	},

	computed: {
		score() {
			return Number(this.$store.getters[this.abilityName]);
		}
	},

	methods: {
		increment() {
			if(this.score < this.max) {
				this.$store.commit(this.abilityName, Number(this.score + 1));
			}
		},

		decrement() {
			if(this.score > this.min) {
				this.$store.commit(this.abilityName, Number(this.score - 1));
			}
		}
	}
}
</script>
