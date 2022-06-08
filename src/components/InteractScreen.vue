<template lang="">
    <div class="screen" :style="`width: ${width}px;margin:0 auto;`">
        <card v-for="(item, index) in items" 
        :key="index" 
        :ref="'item' + index"
        :item="{ index, item }" 
        :imageBack="`images/${item}.png`"
        @onFlip="checkRule($event)" />
    </div>
</template>
<script>
import Card from "./Card.vue";

export default {
    props: {
        items: {
            type: Array,
            default: () => []
        },
        width: {
            type: Number,
            default: 0
        },
        level: {
            type: Number,
            default: 0
        }
    },
    components: {
        Card
    },
    data(){
        return {
            processing: 0,
            rule: [],
        };
    },
    methods: {
        checkRule(item){
            this.rule.push(item);
            if(this.rule.length === 2){
                if(this.rule[0].item === this.rule[1].item){
                    this.$refs['item' + this.rule[0].index][0].onDisable();
                    this.$refs['item' + this.rule[1].index][0].onDisable();
                    this.rule = [];
                    this.processing++;
                    if(this.processing == this.level / 2){
                        setTimeout(() => {
                            this.$emit('onWin');
                        }, 1000);
                    }
                }else{
                    setTimeout(() => {
                        this.$refs['item' + this.rule[0].index][0].flipback();
                        this.$refs['item' + this.rule[1].index][0].flipback();
                        this.rule = [];
                    }, 1000);
                }
            }
        }
    },
}
</script>
<style lang="">
    
</style>