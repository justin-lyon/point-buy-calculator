<template>
	<v-footer app absolute class="" height="auto">

		<v-layout row wrap justify-center>
			<v-flex xs12 text-xs-center>
				<div>
					Wizards of the Coast, Dungeons & Dragons, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. © 2015 Wizards. All Rights Reserved.
				</div>
			</v-flex>
			<v-flex xs12 text-xs-center>
				<div>
					Pretty Point Buy is unofficial Fan Content permitted under the <a href="http://company.wizards.com/fancontentpolicy">Fan Content Policy</a>. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
				</div>
			</v-flex>
			<v-flex xs12 text-xs-center>
				<div>&copy; {{ new Date().getFullYear() }} -- Justin Lyon</div>
			</v-flex>
		</v-layout>

	</v-footer>
</template>

<script>
export default {
	name: "Footer"
	// grey--text text--lighten-1
}
</script>
