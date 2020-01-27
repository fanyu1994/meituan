<template>
<!-- 订单 -->
    <div class="order">
        <div class="top">
            <input type="text" placeholder="        搜索我的订单">
            <img src="../assets\search1.png" alt="">
        </div>
        <div class="list">
            <div 
            class="tab"
            :class="{active:count==item.num}"
            v-for="(item,index) in tabList"
            :key="index"
            @click="click(item)">{{item.title}}</div>
        </div>
        <div class="nothing"></div>
        <transition name="fade" mode="out-in">
            <!-- 进场动画 -->          
             <keep-alive>
                 <component :is="curryComponent"></component>
             </keep-alive>
        </transition>
        <foot ref="foot"></foot>
    </div>
</template>
<script>
import foot from '../components/footer.vue'
import comA from '../components/comA.vue'
import comB from '../components/comB.vue'
import comC from '../components/comC.vue'
import comD from '../components/comD.vue'
import comE from '../components/comE.vue'

export default {
    data(){
        return {
            tabList:[],
            curryComponent:'comA',
            count:0
        }
    },
    components:{
        foot,
        comA,   
        comB,
        comC,
        comD,
        comE,
    },
    created(){
        this.tabList = [
            {
                title:"全部",
                name:'A',
                num:0
            },
            {
                title:"待付款",
                name:'B',
                 num:1
            },
            {
                title:"待使用",
                name:'C',
                num:2

            },
            {
                title:"待评价",
                name:'D',
                num:3
            },
            {
                title:"退款/售后",
                name:'E',
                num:4
            },
        ]
    },
    mounted(){
    },
    methods:{
        click(params){
            this.curryComponent = 'com' + params.name
            this.count = params.num
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.$refs.foot.src1=true;
            vm.$refs.foot.src2=false;
            vm.$refs.foot.src3=false;
            vm.$refs.foot.src4=true;
            vm.$refs.foot.src5=true;
            vm.$refs.foot.src6=false;
            vm.$refs.foot.shouye()
        })
    }
}
</script>
<style lang="stylus" scoped src='../css/order.styl'> 
    
</style>