<template>
    <div class="wm_order">
        <div class="wm_order_top_beijing"></div>
        <div class="wm_order_top">
            <img src="/outFood/back1.png" alt=""  @click="goback">
            <div class="wm_order_top_title" v-if="ordertitle">
                提交订单
            </div>
            <div class="wm_order_top_title" v-if="!ordertitle">
                选择收货地址>
            </div>
        </div>
        <div class="wm_order_middle">
            <div class="wm_order_middle_one">
                <div class="wm_order_middle_one_top">
                    选择收货地址
                    <img src="/outFood/you.png" alt="">
                </div>
                <div class="wm_order_middle_one_bottom">
                    <span>立即送出</span>
                    <span>大约{{minutes}}送达</span>
                     <img src="/outFood/you.png" alt="">
                </div>
            </div>
            <div class="wm_order_middle_two">
                <div class="wm_order_middle_two_top">{{this.$route.query.name}}</div>
                <div 
                v-for="(item,index) in this.$route.query.list"
                :key="index"
                class="wm_order_middle_two_item">
                    <img :src="item.img" alt="">
                    <span>{{item.title}}</span>
                    <span>x{{item.num}}</span>
                    <span>¥{{item.price*item.num}}</span>
                </div>
                <div class="wm_order_middle_two_psf">
                    <span>配送费</span>
                    <span>¥{{this.$route.query.givePrice}}</span>
                </div>
                <div class="wm_order_middle_two_dbj">
                    <img src="/outFood/dyj.png" alt="">
                    <span>抵用券</span>
                    <span>填写地址后可用</span>
                    <img src="/outFood/djj.png" alt="">
                    <span>商家代金券</span>
                    <span>满减卷和商品卷同享</span>
                    <span>填写地址后可用</span>
                </div>
                <div class="wm_order_middle_two_xj">
                    <span>优惠规则</span>
                    <img src="/outFood/wh.png" alt="">
                    <span>小计¥</span>
                    <span>{{this.$route.query.allGoodsPrice+this.$route.query.givePrice}}</span>
                </div>
            </div>
            <div class="wm_order_middle_three">
                <img src="/outFood/dh.png" alt="">
                <span>号码保护</span>
                <img src="/outFood/wh.png" alt="">
                <div class="wm_order_middle_three_bj" @click="isTrue" ref="bj"></div>
                <div class="wm_order_middle_three_yuan" ref="yuan" @click="isTrue"></div>
                <span>对商家、骑手隐藏您的真实手机号，保护您的隐私</span>
                <span v-show="baohu">为保障服务质量，开启号码保护的订单通话可能会被录音</span>
            </div>
            <div class="wm_order_middle_four">
                <div>
                    <span>备注</span>
                    <span>口味、偏好等要求 ></span>
                </div>
                <div>
                    <span>餐具数量</span>
                    <span>未选择 ></span>
                    <span>选择"无需餐具"，能量+10</span>
                </div>
                <div>
                    <span>发票</span>
                    <span>该店不支持线上开票，请联系商户</span>
                </div>
                <div>
                    <span>支付方式</span>
                    <span>在线支付</span>
                </div>
            </div>
        </div>
        <div class="wm_order_bottom">
            <div class="wm_order_bottom_left">
                <span>¥</span>    
                {{this.$route.query.allGoodsPrice+this.$route.query.givePrice}}
            </div>
            <div class="wm_order_bottom_middle">
                找人付
            </div>
            <div class="wm_order_bottom_right">
                提交订单
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ordertitle:true,
            minutes:'',
            baohu:true
        }
    },
    created(){},
    mounted(){
        
    },
    methods:{
        m(){
            var min = new Date().getTime()
            var now = new Date(min+this.$route.query.minutes*60*1000)
            this.minutes = now.getHours()+":"+now.getMinutes()
        },
        goback(){
            this.$router.go(-1)
        },
        isTrue(){
            this.baohu = !this.baohu
            if (this.baohu) {
                this.$refs.bj.style.backgroundColor = '#fbb400' 
                this.$refs.yuan.style.right = '10px' 
            }else{
                this.$refs.bj.style.backgroundColor = '#c1c1c1'
                this.$refs.yuan.style.right = '30px' 
            }
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.m()
            document.documentElement.scrollTop =0
        })
    },
}
</script>
<style scoped lang="stylus">
    .wm_order
        width 359px
        margin 0 auto
        position relative
        .wm_order_top 
            width 359px
            height 30px
            background-color #fbb400
            position fixed
            z-index 1
            img 
                width 25px 
                position absolute
                left 8px
                top 2.5px
            .wm_order_top_title
                line-height 30px
                font-size 14px
        .wm_order_middle
            position relative
            height 1600px
            display flex
            flex-flow row wrap
            align-content flex-start
            background-image linear-gradient(to bottom,#fbb400,#c1c1c1,#c1c1c1,#c1c1c1,#c1c1c1,#c1c1c1)
            .wm_order_middle_one
                margin 30px auto 0 
                width 339px
                height 80px
                background-color white
                border-radius 8px
                .wm_order_middle_one_top
                    height 38px
                    line-height 38px
                    border-bottom 1px solid #f5f5f5
                    text-align left 
                    padding-left 10px
                    margin 0 5px
                    position relative
                    font-weight 100
                    img
                        width 12px 
                        position absolute
                        top 13px
                        left 110px
                .wm_order_middle_one_bottom
                    height 38px
                    position relative
                    span:nth-of-type(1)
                        font-size 13px
                        font-weight 800
                        position absolute
                        left 12px
                        top 50%
                        transform translateY(-50%)
                    span:nth-of-type(2)
                        position absolute
                        top 50%
                        right 30px
                        transform translateY(-50%)
                        font-size 14px
                        color #55f
                    img 
                        width 10px
                        position absolute
                        right 15px
                        top 50%
                        transform translateY(-50%)
            .wm_order_middle_two
                margin 5px auto 0
                width 339px
                background-color white
                border-radius 8px
                .wm_order_middle_two_top
                    height 30px
                    line-height 30px
                    font-size 14px
                    font-weight 100
                    text-align left 
                    margin 10px
                    border-radius 8px 8px 0 0 
                    border-bottom 1px solid #f5f5f5
                .wm_order_middle_two_item 
                    height 60px
                    position relative
                    img 
                        width 50px   
                        position absolute
                        left 10px
                        top 50%
                        transform translateY(-50%)     
                        border-radius 5px
                    span 
                        position absolute    
                    span:nth-of-type(1)
                        left 70px
                        top 10px
                        font-size 13px
                    span:nth-of-type(2) 
                        left 70px
                        top 40px 
                        font-size 12px
                        font-weight 100
                    span:nth-of-type(3) 
                        right 10px
                        top 10px 
                        font-weight 700
                        font-size 14px
                .wm_order_middle_two_psf 
                    height 40px
                    line-height 40px
                    position relative 
                    margin 5px
                    border-bottom 1px solid #f5f5f5
                    border-top 1px solid #f5f5f5
                    &>span:nth-of-type(1)
                        position absolute
                        left 10px
                        font-size 12px
                    &>span:nth-of-type(2)
                        position absolute
                        right 10px
                        font-size 14px
                        font-weight 700 
                .wm_order_middle_two_dbj
                    height 80px
                    position relative 
                    margin 5px
                    border-bottom 1px solid #f5f5f5
                    img,span
                        position absolute
                        width 20px
                        left 10px
                    img:nth-of-type(1)
                        top 10px
                    img:nth-of-type(2)    
                        top 40px
                        left 12px
                        width 15px
                    span:nth-of-type(1)
                        font-size 12px
                        width 50px
                        top 10px
                        left 30px
                        font-weight 600
                    span:nth-of-type(2)
                        left 210px
                        width 140px 
                        font-size 13px
                        top 10px
                        font-weight 100
                    span:nth-of-type(3)   
                        font-size 12px
                        width 70px
                        top 40px
                        left 32px
                        font-weight 600  
                    span:nth-of-type(4)   
                        font-size 12px
                        width 110px
                        top 60px
                        left 10px
                        font-weight 100 
                    span:nth-of-type(5)
                        left 210px
                        width 140px 
                        font-size 13px
                        top 40px
                        font-weight 100  
                .wm_order_middle_two_xj
                    height 40px
                    position relative
                    img 
                        width 15px
                        position absolute
                        left 65px
                        top 50%
                        transform translateY(-50%)
                    &>span:nth-of-type(1)
                        position absolute
                        left 10px
                        top 50%
                        transform translateY(-50%)
                        font-weight 100
                        font-size 12px
                    &>span:nth-of-type(2)
                        position absolute
                        left 250px
                        top 50%
                        transform translateY(-50%)
                        font-size 13px
                    &>span:nth-of-type(3)
                        position absolute
                        left 290px
                        top 50%
                        transform translateY(-50%)
                        font-size  20px  
                        font-weight 700   
            .wm_order_middle_three
                margin 5px auto 0
                width 339px
                height 80px
                background-color white
                border-radius 8px
                position relative     
                img:nth-of-type(1) 
                    width 15px
                    position absolute
                    left 10px
                    top 20px
                img:nth-of-type(2) 
                    width 15px
                    position absolute
                    left 85px
                    top 20px    
                &>span:nth-of-type(1)
                    width 50px
                    font-size 12px
                    font-weight 700
                    position absolute
                    left 30px
                    top 18px
                &>span:nth-of-type(2)
                    width 280px
                    font-size 12px
                    font-weight 100
                    transform scale(0.85)
                    position absolute
                    left -18px
                    top 40px 
                &>span:nth-of-type(3)
                    width 300px
                    font-size 12px
                    transform scale(0.8)
                    font-weight 300
                    position absolute
                    left -20px
                    top 55px
                    color red
                .wm_order_middle_three_bj
                    position absolute
                    top 20px
                    right 10px
                    width 45px
                    height 25px
                    background-color #fbb400
                    border-radius 30px 
                .wm_order_middle_three_yuan
                    position absolute
                    top 20px
                    right 10px
                    width 25px
                    height 25px
                    background-color white
                    border-radius 50% 
            .wm_order_middle_four                               
                margin 5px auto 0
                width 339px
                height 160px
                background-color white
                border-radius 8px
                div
                    height 40px
                    line-height 40px
                    position relative
                    span:nth-of-type(1)
                        position absolute
                        left 10px
                        font-weight 700
                        font-size 12px
                    span:nth-of-type(2) 
                        position absolute
                        right 10px
                        font-weight 200
                        font-size 12px
                    span:nth-of-type(3) 
                        position absolute
                        right 70px
                        font-weight 400
                        font-size 12px
                        color #0b9a11 
        .wm_order_bottom
            position fixed
            bottom 50px
            .wm_order_bottom_left
                position absolute
                left 10px
                width 170px
                height 40px
                line-height 40px
                text-align left 
                padding-left 8px
                border-radius 30px 0 0 30px
                background-color black
                color white   
                font-size 25px
                span 
                    font-size 12px
            .wm_order_bottom_middle
                position absolute
                left 188px
                width 60px
                height 40px
                line-height 40px
                background-color #545353
                color #fbb400
            .wm_order_bottom_right
                position absolute
                left 248px
                width 100px
                height 40px
                line-height 40px
                background-color #fbb400
                border-radius 0 30px 30px 0
                color black    
                
                        



                    

</style>