<template>
        <div class="all_order">
            <img :src="img" alt="">
            <div class="yuan"></div>
            <div class="zheng">
                没有待退款订单哦~
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            img:'/outFood/dd.png' 
        }
    },
}
</script>
<style lang="stylus">
.all_order
    height 670px
    background-color #e8e8e8
    position relative
    img 
        width 140px
        position absolute
        left 109.5px
        top 40px
    .yuan
        background-image linear-gradient(to bottom,#cdcdcd,#e8e8e8,white,white,white,white,white,white,white,white,white,white,white,white,white,white)
        width 359px
        height 359px
        border-radius 50%
        position absolute
        left 0
        top 185px 
    .zheng
        background-color #e8e8e8
        width 359px
        height 359px
        position absolute
        left 0
        top 215px
        font-size 12px
        line-height 40px
</style>