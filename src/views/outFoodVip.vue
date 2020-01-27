<template>
    <transition name="fade">
    <div class="vip">
        <div class="top">
            <span>美团会员</span>
            <img src="user.src" alt="">
            <span>{{user.phone}}</span>
            <span>{{user.state}}</span>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
        <outFoodFooder></outFoodFooder>
    </div>
    </transition>
</template>
<script>
import outFoodFooder from '../components/outFoodFooter.vue'

export default {
    data(){
        return {
            user:{
                phone:0,
                state:'暂未开通美团会员',
                src:'user/touxiang.png'
            }
        }
    },
    components:{
        outFoodFooder
    },
}
</script>
<style lang='stylus' scoped>
.fade-enter-active,.fade-leave-active
    transition all 0.3s ease 
.fade-enter,.fade-leave-to
    transform: translate(-100% 0);    
.vip
    width 359px
    margin 0 auto
    .top
        height 60px
        background-color black

</style>