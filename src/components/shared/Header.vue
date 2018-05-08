<template>
	<v-toolbar>
		<v-avatar
			size="36px">
			<img :src="image" alt="dnd-ampersand">
		</v-avatar>
		<v-toolbar-title>Pretty Point Buy</v-toolbar-title>
	</v-toolbar>
</template>

<script>
import img from "../../assets/dnd-ampersand.png";
export default {
	computed: {
		image() {
			return img;
		}
	}
}
</script>
