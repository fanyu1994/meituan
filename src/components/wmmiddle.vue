<template>
    <div class="wm_middle">
        <img :src='img' alt="" class="img_top">
        <span class="title">{{ name }}</span>
        <span class="minutes">
            <img src="/outFood/sj.png" alt="">
            配送约{{ minutes }}分钟
            </span>
        <span class="gg">公告：{{ gg }}</span>
        <img src="/outFood/xia.png" alt="" class="xia" @click="xia">
        <div 
        class="hidden" 
        v-if="hidden">
            <div class="hidden_top">
                <img src="/outFood/hui.png" alt="">
                新用户立减8元，首次使用美团再减3元
            </div>
            <div class="hidden_bottom">
                <span>公告</span>
                <span>{{ gg }}</span>
                <span>{{ address }}</span>
                <span>{{ phone }}</span>
            </div>
            <img src="/outFood/xia.png" alt="" @click="shang" class="shang">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            hidden:false
        }
    },
    props:{
        img:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        minutes:{
            type:Number,
            required:true
        },
        gg:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        }
    },
    methods:{
        xia(){
            this.hidden = !this.hidden
            this.$parent.hidd()
        },
        shang(){
            this.hidden = false
            this.$parent.hidd()
        }
    }
}
</script>
<style lang="stylus" scoped>
.wm_middle
    position absolute
    width 339px
    height 110px
    left 10px
    top  70px
    background-color white
    box-shadow 1px 1px 5px black
    border-radius 10px
    z-index 1
    .img_top
        position absolute
        left 260px
        top -18px
        width 60px 
        height 60px
        border-radius 10px
    .title    
        position absolute
        left 10px 
        top 10px
        font-weight 700
    .minutes
        position absolute
        left 10px
        top 35px
        font-size 12px
        img 
            width 10px
    .gg
        position absolute
        left 10px
        top 55px
        width 210px
        font-size 12px 
        font-weight 200
        white-space nowrap 
        overflow hidden
        text-overflow ellipsis
    .xia
        width 10px
        position absolute
        left 310px
        top 85px 
    .hidden
        width 339px
        height 670px
        position absolute
        left 0
        top 52px
        background-color white
        border-top none
        .shang 
            width 20px
            position absolute
            bottom 10px
            transform rotate(180deg)
        .hidden_top
            font-size 12px
            height 50px
            line-height 56px
            text-align left 
            padding-left 30px
            img 
                position absolute
                top 20px 
                left 10px
                width 15px 
        .hidden_bottom
            font-size 12px
            position absolute
            top 50px
            span 
                line-height 18px
                display block
                text-align left 
                padding-left 10px
            span:nth-of-type(1)
                font-weight 800
                line-height 22px
                font-size 13px              
                           


</style>