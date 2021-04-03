<template>
	<v-container>
		<v-sheet
			  class='pa-5 col-12 col-md-8 container' elevation='1'>
			  <div class='pl-5'>
			  	<v-btn :to="foundSong._id + '/edit'" dark color="primary" class='float-right'>Edit</v-btn>
				<h4 class='text-h4'>{{ foundSong.title }}</h4>
				<h6 class='text-h6'>by {{ foundSong.artist }}</h6>
				<p class='text-body-2' style="white-space:pre">{{ foundSong.details }}</p>
				<div 
					v-for='(count, index) in foundSong.stanza' 
					:key='index'>
					<h6 class='text-subtitle-2 mt-5'>{{ foundSong.stanza[index] }}</h6>
					<p class='text-body-2' style="white-space:pre">{{ foundSong.chords[index] }}</p>
				</div>
			</div>
		</v-sheet>
		
			<v-sheet
				class="background button-group pa-2 rounded-pill"
			>
				<v-btn
					dark x-small fab
					class="mx-2"
					color="tertiary"
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
				<v-btn
					dark small fab
					color="primary" 
					v-scroll-to="{
					el: '#element',
					duration: 100000,
					force: true,
					cancelable: true,
					easing: 'linear',
				}">
				
					<v-icon v-if="!playing" large @click="playing = !playing">mdi-menu-right</v-icon>
					<v-icon v-else large @click="playing = !playing">mdi-pause</v-icon>
				</v-btn>
				<v-btn
					dark x-small fab
					class="mx-2"
					color="tertiary"
				>
					<v-icon>mdi-minus</v-icon>
				</v-btn>
				<div id="element">
				
				</div>
			</v-sheet>
		
	</v-container>
</template>
<script>
  import { showSong } from '../repository'
  export default {
  	data(){
  		return{
  			foundSong: [],
  			playing: false,
			isLoaded: false,	
  		}
  	},
  	mounted(){
  		showSong(this.$route.params.id)
  		.then(data => this.foundSong = data.foundSong)
      	.catch((err =>alert(err)));
  	},
  	methods: {
  		played() {
  			this.playing = true
  			document.body.scrollBottom = 0
			document.documentElement.scrollBottom = 0
  		},
  		unplayed() {
  			this.playing = false
  		}
  	},
	watch : {
			foundSong:function(value) {
				if(value != null){
					this.isLoaded = true;
				}
			}
		}
  }
</script>
<style>

.button-group{
	position: fixed;
	bottom: 2em;
	left:45%;
}
</style>