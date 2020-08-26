<template>
	<div v-if="userPractice" id="practice">
		<div class="level pt-2 px-2">
			<div class="level-left">
				<div class="level-item">
					<h1 class="subtitle has-text-weight-bold has-text-gcyan">
						{{ `${practice.labCode} - ${practice.title}` }}
					</h1>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<b-tag
						:class="[
							{ 'is-success': practice.status == 'DISPONIBLE' },
							{ 'is-danger': practice.status == 'CERRADA' },
						]"
					>
						{{ practice.status }}
					</b-tag>
				</div>
			</div>
		</div>
		<div id="render" class="columns">
			<div id="canvas" class="column is-9 has-background-dark">
				<iframe :src="practiceUrl" ></iframe>
			</div>
			<div id="content-area" class="column px-5 py-5">
				<h1 class="subtitle has-text-weight-bold">
					Descripción:
				</h1>
				<p v-html="practice.body" />
				<br />
				<h1 class="subtitle has-text-weight-bold">
					Vence:
				</h1>
				<p v-text="new Date(practice.dueDate).toLocaleString()" />
				<br />
				<h1 class="subtitle has-text-weight-bold">
					Cuestionario:
				</h1>
				<p>
					Luego de completar la practica de laboratorio, suba un archivo de
					texto completando las siguientes preguntas.
				</p>
				<br />
				<div class="content" v-html="practice.questions" />
				<br />
				<b-field v-if="userPractice.completionStatus == 'PENDIENTE'">
					<b-upload
						v-model="file"
						drag-drop
						expanded
						accept=".doc, .docx, .txt"
					>
						<section class="section">
							<div class="content has-text-centered">
								<p>
									<b-icon icon="upload" size="is-large"></b-icon>
								</p>
								<p>Drop your files here or click to upload</p>
							</div>
						</section>
					</b-upload>
				</b-field>
				<b-field v-if="userPractice.completionStatus == 'PENDIENTE'">
					<b-tag
						v-if="file"
						type="is-primary"
						name="practice"
						closable
						aria-close-label="Close tag"
						@close="file = null"
					>
						{{ file.name }}
					</b-tag>
				</b-field>
				<b-field v-if="userPractice.completionStatus == 'PENDIENTE'">
					<b-button
						icon-left="paper-plane"
						type="is-warning"
						:disabled="!file || userPractice.completionStatus != 'PENDIENTE'"
						:loading="isSaving"
						@click="sendPractice"
					>
						Enviar
					</b-button>
				</b-field>
				<div v-else class="has-text-success pb-4">
					Completada: {{new Date(userPractice.completionDate).toLocaleString()}}
				</div>
			</div>
		</div>
	</div>
	<div v-else id="practice" class="section">
		Esta practica no ha sido habilitada para este usuario.
	</div>
</template>

<script>
	import axios from 'axios';
	import { mapState } from 'vuex';
	export default {
		name: 'LabPractice',
		components: {},
		data() {
			return {
				width: 0,
				height: 0,
				practice: null,
				file: null,
				isSaving: false,
				userPractice: null
			};
		},
		computed: {
			...mapState(['user']),
			practiceUrl() {

				return this.practice.url.includes('practice') ? process.env.VUE_APP_API_URL + this.practice.url : this.practice.url;
			},
		},
		mounted() {
			this.getPracticeAsync();
		},
		methods: {
			onWindowResize() {
				console.log('triggered');
			},
			async getUserPracticeAsync() {
				const context = this;
				axios
					.get(
						`${process.env.VUE_APP_API_URL}/user-practices?username=${this.user.username}&practiceid=${this.practice.id}`
					)
					.then(function({ data }) {
						// handle success
						context.userPractice = data[0];
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					})
					.then(function() {
						// always executed
					});
			},
			async getPracticeAsync() {
				const context = this;
				axios
					.get(
						`${process.env.VUE_APP_API_URL}/practices?id=${this.$route.params.id}`
					)
					.then(function({ data }) {
						// handle success
						context.practice = data.find(
							(practice) => practice.id == context.$route.params.id
						);
						context.getUserPracticeAsync();
						context.width = document.getElementById('canvas').offsetWidth;
						context.height = document.getElementById('canvas').offsetHeight;
						window.addEventListener('resize', function() {
							context.width = document.getElementById('canvas').offsetWidth;
							context.height = document.getElementById('canvas').offsetHeight;
						});
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					})
					.then(function() {
						// always executed
					});
			},
			async uploadPractice() {
				const formdata = new FormData();
				formdata.append('practice', this.file);
				formdata.append('detail', `${this.practice.labCode}/${this.practice.id}/${this.user.username}`);
				let uploaded = false;
				try {
					const response = await axios(
						`${process.env.VUE_APP_API_URL}/upload-practice`,
						{
							method: 'post',
							headers: {
								'Content-Type': 'multipart/form-data',
							},
							data: formdata,
						}
					);
					uploaded = response.data.status;
				} catch (error) {
					console.error(error);
				}
				return uploaded;
			},
			async sendPractice() {
				this.isSaving = true;
				try {
					const status = await this.uploadPractice();
					this.userPractice.completionStatus = 'COMPLETA';
					this.userPractice.completionDate = new Date();
					await axios(
						`${process.env.VUE_APP_API_URL}/user-practices/${this.userPractice.id}`,
						{
							method: 'put',
							headers: {
								'Content-Type': 'application/json',
							},
							data: this.userPractice,
						}
					);
					this.getPracticeAsync();
					if (status) {
						console.log(status);
					}
				} catch (error) {
					console.error(error);
				} finally {
					this.isSaving = false;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/scss/_mixins';

	#content-area {
		max-height: calc(100vh - (3.25rem + 6rem));
		overflow-y: auto;
	}

	#practice {
		min-height: calc(100vh - (3.25rem + 6rem));
	}

	.columns#render {
		@include respond(big-desktop) {
			min-height: calc(100vh - (3.25rem + 6rem));
		}
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
