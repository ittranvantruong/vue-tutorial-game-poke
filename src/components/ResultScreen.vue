<template lang="">
    <div>
        winner <br /> {{ Math.round( time / 1000 ) }} seconds <br />
        <button type="button" @click="resetScreen()">Chơi lại</button>
    </div>
</template>
<script>
export default {
    props: {
        time: {
            type: Number,
            default: true
        }
    },
    methods: {
        resetScreen(){
            this.$emit('onReset');
        }
    },
}
</script>
<style lang="">
    
</style>