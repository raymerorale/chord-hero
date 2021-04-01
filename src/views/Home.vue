<template>
	<v-container>
		<v-row>
			<v-col class='col-12 col-md-10 container'>

				<v-card class="d-sm-none">

					<v-card-title>
						Explore Songs
						<v-progress-circular
							indeterminate
							color="primary"
							v-show="!isLoaded"
							class="ml-4"
							>
						</v-progress-circular>
					</v-card-title>

					<v-divider></v-divider>

					<v-list dense>
						<v-list-item-group>
							<v-list-item
								v-for="(song, i) in songs"
								:key="i"
								@click="handleClick(song)"
							>
								<v-list-item-content>
									<span class="text-subtitle-2">{{song.title}}</span>
								</v-list-item-content>	
								<span class="text-caption">{{song.artist}}</span>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-card>

				<v-card class="d-sm-block d-none">
				<v-card-title>
					Explore Songs
					<v-progress-circular
						indeterminate
						color="primary"
						v-show="!isLoaded"
						class="ml-4"
					>
					</v-progress-circular>
					<v-spacer></v-spacer>
					<v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						label="Search"
						single-line
						hide-details
					></v-text-field>
				</v-card-title>

				<v-data-table
					:headers="headers"
					:items="songs"
					class="text-h6"
					dense
					:search="search"
					@click:row='handleClick'
				>
					<template v-slot:[`item.rating`]="{ item }">
						<v-icon small v-model="item.rating">mdi-star</v-icon>
						<v-icon small v-model="item.rating">mdi-star</v-icon>
						<v-icon small v-model="item.rating">mdi-star</v-icon>
						<v-icon small v-model="item.rating">mdi-star</v-icon>
						<v-icon small v-model="item.rating">mdi-star</v-icon>
					</template>

				</v-data-table>

				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

	import { getSongs }  from '../repository'

	export default {
		name: 'Home',
		methods: {
			handleClick(value) {
				window.location.href = '/' + value._id
			},
			loadSongs(){
				getSongs()
					.then(data => this.songs = data.songs)
					.catch((err =>alert(err)));
			}
		},
		data(){
			return {
				isLoaded: false,
				songs: [],
				search: '',
				headers: [
					{
						text: 'Song Title',
						value: 'title',
					},
					{ 
						text: 'Artist', 
						value: 'artist',
						link: '_id'
					},
					{
						text: 'Rating',
						value: 'rating'
					}
				]
			}
		},
		created() {
			setTimeout(this.loadSongs, 1500)
		},
		watch : {
			songs:function(value) {
				if(value != null){
					this.isLoaded = true;
				}
			}
		}
	}
</script>
<style>
</style>
