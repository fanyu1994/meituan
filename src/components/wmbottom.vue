<template>
    <div class="wm_bottom">
        <div class="wm_b_top" ref="wm_b_top">
            <div 
            v-for="(item,index) in list"
            :key="index"
            :class="{active:item.num == count}"
            @click="active(item)">
                {{ item.title }}
            </div>
            <span class="pj">9999+</span>
        </div>
        <div class="wm_b_bottom">
           <transition name="fade">
                <keep-alive>
                    <components 
                    :is='curry'
                    ref="wmABC"
                    :givePrice="givePrice"
                    :startPrice="startPrice"
                    :name="name"
                    :minutes='minutes'></components>
                </keep-alive>
           </transition>
        </div>
    </div>
</template>
<style lang="stylus" scoped>        
.fade-enter-active,.fade-leave-active
        transition all .3s ease 
    .fade-enter
        transform translateX(100%)
    .fade-leave-to
        transform translateX(-100%)  
        display none
.wm_bottom
    background-color white
    width 359px
    .wm_b_top
        height 120px
        position relative
        background-color white
        div
            position absolute
            bottom 10px
            left 10px
            
        div:nth-of-type(2)
            left 90px
        div:nth-of-type(3)
            left 170px
        .pj
            position absolute
            left 122px
            bottom 8px
            font-size 12px
            font-weight 200
            transform scale(0.8) 
        .active
            font-weight 800
                         

</style>
<script>
import wmA from '../components/wmA.vue'
import wmB from '../components/wmB.vue'
import wmC from '../components/wmC.vue'

export default {
    data(){
        return {
            list:[],
            count:0,
            curry:'wmA'
        }
    },
    props:{
        givePrice:{
            type:Number,
            required:true
        },
        startPrice:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        minutes:{
            type:Number,
            required:true
        }
    },
    components:{
        wmA,
        wmB,
        wmC
    },
    created(){
        this.list = [
            {
                title:'点菜',
                num:0,
                comp:'A'
            },
            {
                title:'评价',
                num:1,
                comp:'B'
            },
            {
                title:'商家',
                num:2,
                comp:'C'
            },
        ]
    },
    methods:{
        active(params){
            this.count = params.num
            this.curry = `wm${params.comp}`
        }
    }
}
</script>