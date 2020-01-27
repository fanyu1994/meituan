<template>
    <div class="foot">
        <div class="first" @click="firstclick">
            <div>
                <div class="first_one"></div>
                <div class="first_two"></div>
                <div class="first_three"
                 :class="{'animationF':first}"></div>    
            </div>
            <span>首页</span>
        </div>
        <div class="vip" @click="vipclick">
            <div>
                <img src="/outFood/huiyuan.png" 
                alt=""
                :class="{'animationV':vip}">
            </div>
            <span>会员</span>
        </div>
        <div class="order" @click="orderclick">
            <div>
                <img src="/outFood/dingdan1.png" alt=""
                :class="{'animationO':order}">
            </div>
            <span>订单</span>
        </div>
        <div class="more" @click="moreclick"> 
            <div class="more_all"
            :class="{'animation':more}">
                <div class="more_one"></div>
                <div class="more_two"></div>
                <div class="more_three"></div>
                <div class="more_four"></div>
            </div>
            <span>更多</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            first:false,
            vip:false,
            order:false,
            more:false,
            
        }
    },
    methods:{
        firstclick(){
            this.first = true,
            this.vip = false,
            this.order = false,
            this.more = false
            this.$router.push({
                path:"/outFood"
            })
        },
        vipclick(){
            this.first = false,
            this.vip = true,
            this.order = false,
            this.more = false
            this.$router.push({
                path:"/outFoodVip"
            })
        },
        orderclick(){
            this.first = false,
            this.vip = false,
            this.order = true,
            this.more = false
            this.$router.push({
                path:"/outFoodOrder"
            })
        },
        moreclick(){
            this.first = false,
            this.vip = false,
            this.order = false,
            this.more = true
        }
    }
}
</script>
<style lang="stylus" scoped>
.foot
    width 359px
    height 60px
    border 1px solid #e4e4e4
    background-color white   
    position fixed
    top 750px
    display flex
    justify-content space-around
    z-index 2
    &>div
        height 50px
        width 60px
        background-color white
        position relative
        z-index 3      
        &>div            
            position absolute
            width 35px
            height 35px
            left 12.5px
            top -4px
            background-color #f1a227
            border-radius 50% 50%
            background-image:linear-gradient(145deg,#f1d605,#f1a426)
            &>div
                position absolute
                width 18px
                height 18px
        span 
            position absolute
            left 50%
            top 85%
            -webkit-transform:translate(-50%,-50%)
            font-size 12px        
    .first
        &>div
            .first_one
                border-radius 50%
                background-color black  
                left 50%
                top 60%
                -webkit-transform:translate(-50%,-50%)
            .first_two
                border-radius 3px
                border 8px solid black
                background-color white 
                width 0
                height 0  
                left 50%
                top 45%
                -webkit-transform:translate(-50%,-50%) rotate(45deg)   
            .first_three
                width 8px
                height 4px
                border-radius 0 0 4px 4px
                background-color #f1a227
                left 50%
                top 65%
                -webkit-transform:translate(-50%,-50%)
            .animationF
                animation first .3s
            @keyframes first {
                    0% {
                        left 10px
                        top 22px
                        border-radius 50%
                        }
                    50% {
                        left 20px
                        top 22px
                        border-radius 50%
                        }    
                    100% {
                        left 15px
                        top 65%
                        border-radius 0 0 4px 4px
                        } 
                }
                    
    .vip,.order
        &>div
            img 
                width 25px
                position absolute
                left 5px
                top 5px             
    .more
        .animation
            animation keys 2s
        @keyframes keys{
            0% {   
            }
            100% {
                transform rotate(360deg)
            }  
            }       
        .more_all
            position relative
            &>div
                position absolute 
                width 8px
                height 8px
                border 1.5px solid black
            .more_one
                left 6px
                top 6px
                border-radius 40% 40% 0 40%
            .more_two
                left 18px
                top 6px
                border-radius 40% 40% 40% 0
            .more_three
                left 6px
                top 18px
                border-radius 40% 0 40% 40%
            .more_four  
                left 18px
                top 18px                       
                border-radius 0 40% 40% 40%

.animationV
    animation vip 2s
    @keyframes vip{
        0%{
            transform rotateY(0deg)
            } 
        100%{
            transform rotateY(360deg)
            }       
        } 
.animationO
    animation order 2s
    @keyframes order{
        0%{
            width 25px
            left 5px
            top 5px 
            }
        50%{
            width 0
            left 50%
            top 50%      
            }
        70%{
            width 30px
            left 2px
            top 2px
            }       
        100%{
            width 25px
            left 5px
            top 5px 
            }        
        }         



</style>