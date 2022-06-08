<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MainScreen from './components/MainScreen.vue';
import InteractScreen from './components/InteractScreen.vue';
import ResultScreen from './components/ResultScreen.vue';
import { shuffled } from './utils/array';
</script>

<template>
	<main-screen v-if="screen === 'default'" @onStart="changeScreen($event)"/>
	<interact-screen v-if="screen === 'playing'" 
	:items="game.card" 
	:width="game.width"
	:level="option.level"
	@onWin="onwin($event)"/>
	<result-screen v-if="screen === 'winner'" :time="this.game.time" @onReset="onReset()"/>
</template>
<script>
export default {
	name: 'App',
	components: {
		MainScreen, 
		InteractScreen,
		ResultScreen
	},
	data(){
		return {
			screen: "default",
			option: {
				level: 0
			},
			game: {
				card: [],
				time: null,
            	width: 0
			}
		};
	},
	methods: {
		changeScreen(option){
			this.screen = "playing";
			this.option.level = option.level;
			const firstCard = Array.from({length: this.option.level / 2}, (v, i) => i + 1);
			const secondCard = [...firstCard];
			const result = [...firstCard, ...secondCard];
			this.game.card = shuffled(result);

			this.game.time = new Date().getTime();

			//tính chiều rộng màng game
			this.game.width = (90 + 16) * Math.sqrt( this.option.level );
		},
		onwin(event){
			this.game.time = new Date().getTime() - this.game.time;
			this.screen = "winner";
		},
		onReset(){
			this.screen = "default";
		}
	}
};
</script>
<style>

</style>
