
<template>
  <h1>{{ title }}</h1>
  <!-- <div class="card" @mouseover="onLogEvent">Mouse over</div>
  <div class="card" @mouseleave="onLogEvent">Mouse leave</div> -->
  <div class="card" v-for="product in products" :class="{ cart: product.isCart }" @dblclick="onLogEvent($event, product)">
  	<img v-bind:src="product.thumb" alt="">
  	<h1>{{ product.name }}</h1>
  	<p>Price: {{ product.price }}</p>
  </div>
  <div :class="{ 'bg-purple': theme === 'purple' }">{{ content }}</div>
  <button type="button" @click="callParent">callParent</button>
  <slot name="slot1"></slot>
  <slot></slot>
  <!-- <div class="">{{ productsComputed }}</div> -->
  <!-- <div class="card" @mousemove="onMouseMoveEvent">Mouse move {{ `${x} - ${y}` }}</div> -->
</template>

<style>

</style>
<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			content: {
				type: String,
				default: "",
			},
			theme: {
				type: String,
				default: "example",
				validator(value) {
					return ["example", "purple", "orange"].includes(value);
				}
			}
		},
		data() {
			return {
				products: [
					{
						thumb: "./public/images/1.jpg",
						name: "Product 1",
						price: 10000,
						isCart: false
					},
					{
						thumb: "./public/images/2.jpg",
						name: "Product 2",
						price: 20000,
						isCart: false
					},
					{
						thumb: "./public/images/3.jpg",
						name: "Product 3",
						price: 30000,
						isCart: true
					},
				],
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
			callParent(){
				this.$emit("hidden");
			}
		},
		computed:{
			productsComputed() {
				return this.products.filter(product => product.price < 30000);
			}
		},
		mounted() {

		}
	}
</script>
