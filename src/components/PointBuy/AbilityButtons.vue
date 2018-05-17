<template>

<div class="ability-buttons">
	<div class="button-list">

		<v-btn
			@click="decrement"
			:color="color"
			dark
			right
			bottom
			fab>

			<v-icon>keyboard_arrow_down</v-icon>
		</v-btn>
		<v-btn
			@click="increment"
			:color="color"
			dark
			right
			bottom
			fab>

			<v-icon>keyboard_arrow_up</v-icon>
		</v-btn>
	</div>
</div>

</template>

<script>
export default {
	name: "AbilityButtons",
	data() {
		return {
			fab: true
		}
	},
	props: {
		abilityName: String,
		hidden: {
			type: Boolean,
			default: true
		},
		color: {
			type: String,
			default: "pink"
		}
	},

	computed: {
		score: {
			get() {
				return this.$store.getters[this.abilityName];
			},
			set(val) {
				this.$store.commit(this.abilityName, Number(val));
			}
		}
	},

	methods: {
		increment() {
			if(this.score < 15) {
				this.score = this.score + 1;
			}
		},

		decrement() {
			if(this.score > 8) {
				this.score = this.score - 1;
			}
		}
	}
}
</script>

<style scoped>
div.ability-buttons {
	bottom: 16px;
	right: 0px;
	position: fixed;
	z-index: 10000;
}

div.button-list {
	-webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
	flex-direction: column-reverse;
	bottom: 100%;
	left: 0;
	width: 100%;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
}

.btn--floating {
	position: relative;
}
</style>
