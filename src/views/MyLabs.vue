<template>
	<div v-if="lab">
		<section class="section">
			<h1 class="title is-3">{{ lab.id }} - {{ lab.title }}</h1>
			<div class="content">
				<p v-html="lab.description" />
			</div>
		</section>
		<Practices :heading="'Practicas'" :practices="practices" />
	</div>
	<section class="section" v-else>
		Este laboratorio no existe. <router-link to="/">Volver</router-link>.
	</section>
</template>

<script>
	import axios from 'axios';
	import Practices from '@/components/Practices/Practices.vue';
	export default {
		name: 'MyLabs',
		components: {
			Practices,
		},
		data() {
			return {
				lab: null,
				practices: null,
			};
		},
		computed: {},
		mounted() {
			this.getLabAsync();
			this.getPracticesAsync();
		},
		methods: {
			async getLabAsync() {
				const context = this;
				axios
					.get(
						`${process.env.VUE_APP_API_URL}/labs?id=${this.$route.query.code}`
					)
					.then(function(response) {
						// handle success
						context.lab = response.data[0];
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					})
					.then(function() {
						// always executed
					});
			},
			async getPracticesAsync() {
				const context = this;
				axios
					.get(
						`${process.env.VUE_APP_API_URL}/practices?labCode=${this.$route.query.code}`
					)
					.then(function(response) {
						// handle success
						context.practices = response.data;
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					})
					.then(function() {
						// always executed
					});
			},
		},
	};
</script>

<style scoped>
	.section {
		min-height: calc(100vh - (3.25rem + 33.85rem));
	}
</style>
