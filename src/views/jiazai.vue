<template>
        <div class="loading">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div>努力加载中...</div>
        </div>
</template>
<script>
export default {
    created(){},
    mounted(){
        setTimeout(() => {
            switch (this.$route.params.data) {
            case 'dpj':
                this.$router.push({
                    name:'business',
                    query:{
                        img:'/outFood/dpj.png',
                        name:'范宇大盘鸡',
                        minutes:50,
                        gg:'良心产品，品质保证，价格合理，公正公道。',
                        address:'上海路33号',
                        phoneNumber:1235963,
                        givePrice:1,
                        startPrice:16
                        }
                })    
                break;
            case 'hmj':
                this.$router.push({
                    name:'business',
                    query:{
                        img:'/outFood/huangmenji.png',
                        name:'范宇黄焖鸡米饭',
                        minutes:30,
                        gg:'你所享受的是皇家一品黄焖鸡，正宗老店。',
                        address:'黄河路9号',
                        phoneNumber:1235963,
                        givePrice:3,
                        startPrice:15
                        }
                })    
                break;
            case 'hc':
                this.$router.push({
                    name:'business',
                    query:{
                        img:'/outFood/huicai.png',
                        name:'范宇大烩菜',
                        minutes:30,
                        gg:'骨肉相连不错 直接去油炸就可以吃了 当然也可以再加点孜然什么的 味道够了 不需要加有盐分的调料。',
                        address:'南宁路22号',
                        phoneNumber:565666,
                        givePrice:1,
                        startPrice:15 
                        }
                })    
                break;        
        
            default:
                break;
        }
        }, 2000);
    },
}
</script>
<style lang="stylus" scoped>   
.loading
    height 812px
    position relative
    overflow-x: hidden
    div
        width 3px
        height 10px
        background-color #d2d0d0    
        position absolute
        left  186px
        top 385px 
        transform-origin: 1.5px 17px
        animation lun 3.2s infinite 
        @keyframes lun{
            0%{
               background-color #d2d0d0  
            }
            100%{
                background-color #565656 
            }    
            }
    div:nth-of-type(1) 
        animation-delay -0.4s 
    div:nth-of-type(2)       
        transform rotate(45deg)
        animation-delay 0s 
    div:nth-of-type(3)
        transform rotate(90deg)
        animation-delay 0.4s 
    div:nth-of-type(4)
        transform rotate(135deg)
        animation-delay 0.8s 
    div:nth-of-type(5)
        transform rotate(180deg)
        animation-delay 1.2s 
    div:nth-of-type(6)
        transform rotate(225deg)
        animation-delay 1.6s 
    div:nth-of-type(7)
        transform rotate(270deg)
        animation-delay 2s 
    div:nth-of-type(8)
        transform rotate(315deg)
        animation-delay 2.4s 
    div:nth-of-type(9)
        transform rotate(360deg)
        animation-delay 2.8s 
    div:nth-of-type(10)
        width 120px
        height 30px
        left 50%
        top 55%
        transform translate(-50%,-50%)   
        font-size 12px
        background-color white
        animation none
</style>