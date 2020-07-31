<template>
	<div class="columns">
		<div id="canvas" class="column has-background-dark">
			<iframe v-if="url" :src="url"></iframe>
		</div>
		<div id="chat-area" class="column is-3 has-background-white pr-5">
			<p class="title mb-2">Messages</p>
			<a href="#">Hide</a>
			<div class="box has-background-primary has-text-white">
				Message
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'LabPractice',
		components: {},
		data() {
			return {
				width: 0,
				height: 0,
				url: '',
			};
		},
		computed: {
		},
		mounted() {
			this.getPracticeAsync();
			this.width = document.getElementById('canvas').offsetWidth;
			this.height = document.getElementById('canvas').offsetHeight;
			const practice = this;
			window.addEventListener('resize', function() {
				practice.width = document.getElementById('canvas').offsetWidth;
				practice.height = document.getElementById('canvas').offsetHeight;
			});
		},
		methods: {
			onWindowResize() {
				console.log('triggered');
			},
			async getPracticeAsync() {
				const context = this;
				axios
					.get(
						`${process.env.VUE_APP_API_URL}/practices?id=${this.$route.params.id}`
					)
					.then(function(response) {
						// handle success
						context.url = process.env.VUE_APP_API_URL + response.data[0].url;
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

<style lang="scss" scoped>
	.columns {
		min-height: calc(100vh - (3.25rem + 6rem));
		margin-bottom: 0;
		#canvas {
			min-height: 20rem;
			padding: 0;
			iframe {
				height: 100%;
				width: 100%;
				min-height: 20rem;
			}
		}
	}
</style>
