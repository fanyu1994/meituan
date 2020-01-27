
<template>
<!-- 发现 -->
<keep-alive>
    <div class="fined">
        顶层
        <div class="bottom"></div>
        <foot ref="foot"></foot>
    </div>
</keep-alive>
</template>

<style lang="stylus" scoped>
.fined
    width 359px
    height 1600px
    background-color #ffbd26
    margin 0 auto
    position relative
    .bottom
        width 359px
        height 600px
        background-color #ffbdff
        position absolute 
        left 0
        bottom 0
</style>
<script>
import foot from '../components/footer.vue'
export default {
    components:{
        foot
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.$refs.foot.shouye()
            vm.$refs.foot.src1 = false
            vm.$refs.foot.src2 = true
            vm.$refs.foot.src3 = true
            vm.$refs.foot.src4 = false
            vm.$refs.foot.src5 = true
            vm.$refs.foot.src6 = false
        })
    }
}
</script>