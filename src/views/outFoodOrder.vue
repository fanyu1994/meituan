<template>

        <div class="order">
            <header>订单
                <img src="/outFood/ld.png" alt="">
                <img src="\outFood\faj.png" alt="">
            </header>
            <div class="order_main">
                <div 
                v-for="(item,index) in tabList"
                :key="index"
                :class="{active:item.num === count}"
                @click="click(item)">{{item.title}}</div>
            </div>
            <transition name="fade" mode="out-in">
                <component 
                :is="curry"></component>
            </transition>
            <outFoodFooder></outFoodFooder>
        </div>

</template>
<script>
import outFoodFooder from '../components/outFoodFooter.vue'
import orderA from '../components/orderA.vue'
import orderB from '../components/orderB.vue'
import orderC from '../components/orderC.vue'

export default {
    data(){
        return {
            tabList:[],
            count:0,
            curry:'orderA'
        }
    },
    components:{
        outFoodFooder,
        orderA,
        orderB,
        orderC,
    },
    created(){
        this.tabList = [
            {
                title:'全部订单',
                num:0,
                kk:'A'
            },
            {
                title:'待评价',
                num:1,
                kk:'B'
            },
            {
                title:'退款',
                num:2,
                kk:'C'
            },
        ]
    },
    methods:{
        click(params){
            this.count = params.num
            this.curry = 'order'+ params.kk
        }
    }
}
</script>
<style scoped lang="stylus">  
.fade-enter-active,.fade-leave-active
        transition all .6s ease 
    .fade-enter
        transform translateX(100%)  
        display none  
    .fade-leave-to
        transform translateX(-100%)        
.order
    width 359px
    margin 0 auto 
    header 
        height 40px  
        position relative 
        line-height 40px 
        font-weight 700
        img 
            position absolute
            top 10px
        >:nth-of-type(1)
            right 10px
            width 18px
        >:nth-of-type(2)
            right 50px  
            width 20px 
    .order_main
        height 30px
        background-color white
        display flex
        justify-content space-between
        background-color red//ddd
        div
            width 100px
            font-size 13px
            line-height 38px  
        .active
            font-weight 700    

</style>
