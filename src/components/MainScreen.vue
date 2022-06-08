<template lang="">
    <div class="screen">
        <h1>Poke Nè</h1>
        <p>Chơi đi mới biết game dễ</p>
        <div class="actions">
            <button type="button" class="item" @click="startGame(16)">
                <span>4x4</span>
                <span>Dễ vler</span>
            </button>
            <button type="button" class="item" @click="startGame(36)">
                <span>6x6</span>
                <span>Dễ</span>
            </button>
            <button type="button" class="item" @click="startGame(64)">
                <span>8x8</span>
                <span>Bình thường</span>
            </button>
            <button type="button" class="item" @click="startGame(100)">
                <span>10x10</span>
                <span>Hơn bình thường</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
		return {
			screen: "default"
		};
	},
	methods: {
		startGame(level){
			this.$emit("onStart", { level: level });
		}
	}
}
</script>
<style lang="">
    
</style>