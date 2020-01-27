<template>
    <transition name="car" mode="in-out">
        <div class="shop">
            <div class="top">
                <img src="/outFood/fanhui.png" alt="" @click="goback">
                <div class="title">购物车</div>
                <div 
                class="top_r"
                @click="clickRight"
                :class="r?'bj':'qx'">{{right}}</div>
            </div>
            <div class="bottom">
                <div class="empty" v-if="kong">
                    <img src="/outFood/kong.png" alt="">
                    购物车空空如也
                </div>
                <div
                v-for="(item,index) in goodsList"
                :key="index"></div>
            </div>
            
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return {
            right:'',
            r:false,
            kong:true,
            goodsList:[]
        }
    },
    created(){
        
    },
    methods:{
        goback(){
            this.$router.push({
                path:"/outFood"
            })
        },
        clickRight(){
            if (!this.r) {
                this.right = '取消'
                this.r = true
            }else{
                this.right = '编辑'
                this.r = false
            }
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            if (vm.goodsList.length == 0) {
                vm.right = ""
                vm.kong = false
            }else{
                vm.right = "编辑"
                vm.kong = false
                vm.kong = true
            }
        })
    }
}
</script>
<style lang="stylus">
.car-enter-active,.car-leave-active
    transition all .5s ease 
.car-enter
    transform translateX(-100%)
.car-leave-to
    transform translateX(100%)
@import '../css/shoppingCar.styl'   
</style>
