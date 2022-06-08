<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <home-app-one ref="home" 
  v-if="isShow"
  :title="title" 
  content="Đây là nội dung" 
  theme="purple"
  @hidden="onToggleChild">
	<template #slot1>
		<!-- content for the header slot -->
		<button type="button" @click="onToggleChild">Toggel child</button>
		
	</template>
	<template #default>
		<!-- content for the header slot -->
		<span>Slot</span>
	</template>
  </home-app-one>
  <button type="button" @click="onChange">change</button>
  <button type="button" @click="onToggleChild">Toggel child</button>
</template>
<script>
export default {
	name: "App",
	components: {
		HelloWorld,
		HomeAppOne: Home 
	},
	data() {
		return {
			title: "This is title",
			isShow: false
		};
			
	},
	methods: {
		onLogEvent(event, product) {
			product.isCart = !product.isCart;
		},
		onMouseMoveEvent(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		onChange() {
			console.log(this.$refs.home);
		},
		onToggleChild(){
			this.isShow = !this.isShow;
		}
	},
	mounted() {

	}
}
</script>
<style>

</style>
