<template lang="">
    <div class="card" :class="{ disabled: isDisabled  }">
        <div class="card-inner" :class="{ 'flipped': isFlipped }" @click="flip">
            <div class="card-face card-front">
                <div class="card-content">
                    <img class="img-fluid" src="../assets/images/icon_back.png" alt="">
                </div>
            </div>
            <div class="card-face card-back">
                <div class="card-content">
                    <img class="img-fluid" :src="'src/assets/' + imageBack" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: [Number, Object],
            default: 0
        },
        imageBack: {
            type: String,
            required: true
        },
    },
    data(){
        return {
            isDisabled: false,
            isFlipped: false,
        };
    },
    methods: {
        flip(){
            if(this.isDisabled) return false;

            this.isFlipped = !this.isFlipped;
            if(this.isFlipped){
                this.$emit('onFlip', this.item);
            }
        },
        flipback(){
            this.isFlipped = false;
        },
        onDisable(){
            this.isDisabled = true;
        }
    }
}
</script>
<style lang="css" scoped>
    .card {
        display: inline-block;
        width: 90px;
        height: 120px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        perspective: 600px;
    }
    .card .card-inner{
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }
    .card.disabled{
        cursor: default;
    }
    .card-inner.flipped{
        transform: rotateY(-180deg);
    }
    .card-face{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
    }
    .img-fluid{
        width: 100%;
    }
    .card-back{
        transform: rotateY(180deg);
    }
</style>