<template>
<!-- 页脚 -->
    <div class="footer">
            <div class="first" @click="mt">
                <img 
                src="footer/mt.png" 
                alt="" 
                class="mt" 
                ref="img"
               >
            </div>
            <div class="find" @click="goFined">
                <img src="footer/faxian1.png" alt="" v-show="src1">
                <img src="footer/faxian2.png" alt="" v-show="src2">
                <span>发现</span>
            </div>
            <div class="order" @click="goOrder">
                <img src="footer/dingdan1.png" alt="" v-show="src3">
                <img src="footer/dingdan2.png" alt="" v-show="src4">
                <span>订单</span>
            </div>
            <div class="userCenter" @click="goUser">
                <img src="footer/me1.png" alt="" v-show="src5">
                <img src="footer/me2.png" alt="" v-show="src6">
                <span>我的</span>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            src1:true,
            src2:false,
            src3:true,
            src4:false,
            src5:true,
            src6:false 
        }
    },
    methods:{
        shouye(){
            this.$refs.img.src = 'footer/shouye.png'
        },
        mt(e){
            let src = e.target.src
            this.src1=true,
            this.src2=false,
            this.src3=true,
            this.src4=false,
            this.src5=true,
            this.src6=false 
            if (/shang/.test(src)) {
                this.$emit("goTop")
            }
            this.$router.push({
                path:'/'
            })
        },
        goFined(){
            this.$router.push({
                path:'/fined'
            })
        },
        goOrder(){
            this.$router.push({
                path:'/order'
            })
        },
        goUser(){
            this.$router.push({
                path:'/userCenter'
            })   
        },
        scroll(e){
            var l = e.srcElement.scrollTop
            if(l>0){
                this.$refs.img.src = 'footer/shang.png'
            }else{
                this.$refs.img.src = 'footer/mt.png'
            }
        },
    },
}
</script>
<style lang="stylus">
.footer
    position: fixed
    bottom: 0
    width: 357px
    height: 50px
    display: flex
    flex-flow row nowrap
    justify-content: space-around
    background-color: white
    border: 1px solid #dcd8d8
    z-index 2
    div
        background-color: white
        width: 50px
        position: relative
        img 
            width 25px
            position: absolute 
            top: 10%
            left 12.5px
        span 
            position: absolute 
            bottom: 9%
            left 12.5px
            font-size 12px 
            transform scale(0.9)   
    .first 
        .mt
            width: 35px
            border-radius: 50% 
            position: absolute 
            top: 50%
            left 50%
            transform: translate(-50%,-50%)   
</style>