<template>
        <keep-alive>
            <div class="business">
            <wmtop :img="img" ref="wm"></wmtop>
            <div class="wm_img" ref="wm_img">
                <img src="/outFood/back.png" alt="" @click="back1" v-if="back" class="img1" ref="back"> 
                <img src="/outFood/back1.png" alt="" @click="back1" v-if="!back" class="img1" ref="back"> 
                <input type="text" ref="wm_input"> 
                <img src="/outFood/fdj.png" alt="" ref="wm_fdj" v-if="fdj" class="img2">
                <img src="/outFood/fdj1.png" alt="" ref="wm_fdj" v-if="!fdj" class="img2">
                <img src="/outFood/gwcw.png" alt="" ref="wm_gwc" v-if="gwcw" class="img3">
                <img src="/outFood/gwcw1.png" alt="" ref="wm_gwc" v-if="!gwcw" class="img3">
                <img src="/outFood/xx.png" alt="" v-if="r" @click="shoucang" ref="wm_xx" class="img4">
                <img src="/outFood/xxr.png" alt="" v-if="!r" @click="shoucang" ref="wm_xx" class="img4">
                <img src="/outFood/gd.png" alt="" v-if="gd" class="img5" ref="gd">
                <img src="/outFood/gd1.png" alt="" v-if="!gd" class="img5" ref="gd">
            </div>
            <div class="shoucang" v-show="success">
                收藏成功！可到我的收藏查看
            </div>
            <div class="shoucang" v-show="fail">
                取消收藏成功！
            </div>
            <wmmiddle
            :img="img"
            :name='name'
            :minutes='minutes'
            :gg="gg"
            :address='address'
            :phone='phoneNumber'
            ref="wmmiddle"></wmmiddle>
            <div class="hidden" v-if="hid"></div>
            <wmbottom 
            ref="wmbottom"
            :givePrice='givePrice'
            :startPrice="startPrice"
            :name="name"
            :minutes='minutes'></wmbottom>
        </div>
        </keep-alive>
</template>
<script>
import wmtop from '../components/wmtop.vue'
import wmmiddle from '../components/wmmiddle.vue'
import wmbottom from '../components/wmbottom.vue'
export default {
    data(){
        return {
            img:'',
            name:'',
            minutes:0,
            gg:'',
            address:'',
            phoneNumber:0,
            givePrice:0,
            startPrice:0,
            hid:false,
            success:false,
            fail:false,
            scrollTop:0,
            r:true,
            back:true,
            fdj:true,
            gwcw:true,
            gd:true
        }
    },
    components:{
        wmtop,
        wmmiddle,
        wmbottom
    },
    created(){
        this.img = this.$route.query.img
        this.name = this.$route.query.name
        this.minutes = Number(this.$route.query.minutes)
        this.gg = this.$route.query.gg
        this.address = this.$route.query.address
        this.phoneNumber = Number(this.$route.query.phoneNumber)
        this.givePrice = Number(this.$route.query.givePrice)
        this.startPrice = Number(this.$route.query.startPrice)
    },
    mounted(){
        window.addEventListener('scroll',this.scroll)
    },
    methods:{
        hidd(){
            this.hid = !this.hid
        },
        
        back1(){
            if (this.$parent.hid) {
                this.$parent.hidd()
                this.$parent.$refs.wmmiddle.hidden= false
            }else{
                this.$router.push({
                    path:"/outFood"
                })
            }
        },
        shoucang(){
            this.r = !this.r
            if (!this.r) {
                this.success = true
                this.fail = false
                setTimeout(() => {
                    this.success = false
                    this.fail = false 
                }, 2000);
            }else{
                this.success = false
                this.fail = true
                setTimeout(() => {
                    this.success = false
                    this.fail = false 
                }, 2000);
            }
        },
        wmAactive(params){
            document.documentElement.scrollTop= params
            console.log(123)
            //点击导航input框样式直接过渡到最终形态
            //这里出现了一些意料之中的事情，不能完美的展现头部样式
            this.back = false
            this.fdj = false
            this.gwcw = false
            this.gd = false
            this.$refs.back.style.left = '5px'
            this.$refs.back.style.opacity = '1'
            this.$refs.gd.style.left = '330px'
            this.$refs.gd.style.opacity = '1'
            this.$refs.wm_img.style = "background-color:rgba(255,255,255,1);z-index:3"
            this.$refs.wm_input.style = "width:260px;background-color:rgba(220,220,220,1);left:30px"
            this.$refs.wm_fdj.style = "right:244px;width:14.2px;top:22.9px;left:40px"
            this.$refs.wm_gwc.style = "left:294.667px"
            this.$refs.wm_xx.style = "opacity:0"
            this.$refs.wm_input.placeholder = '       请输入商品名'
        },
        scroll(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (this.scrollTop>0) {
                // 问题：这四行代码不写，滚动的时候总是会被影响，不明白原因之所在。
                this.$refs.back.style.left = '5px'
                this.$refs.back.style.opacity = '1'
                this.$refs.gd.style.left = '330px'
                this.$refs.gd.style.opacity = '1'
                
                //高度在0~80之间，头部样式跟随变化
                if (this.scrollTop<80) {
                    this.$refs.wm_img.style = "background-color:rgba(255,255,255,"+
                        this.scrollTop/80+");z-index:3"
                    this.$refs.wm_input.style = "width:"+
                        this.scrollTop*2.5+
                        "px;background-color:rgba(220,220,220,"+
                        this.scrollTop/80+")"
                    this.$refs.wm_gwc.style = "left:"+(250+this.scrollTop/1.5)+"px"
                    this.$refs.wm_xx.style = "left:"+(290+this.scrollTop/1.5)+"px;opacity:"+
                        (1-this.scrollTop/80)
                }else{
                    this.$refs.wm_input.style.width = "260px"
                    this.$refs.wm_input.style.left = "30px"
                    this.$refs.wm_fdj.style.left = "40px"
                    this.$refs.wm_img.style.backgroundColor = 'rgba(255,255,255,1)'
                     this.$refs.wm_xx.style.opacity =  '0'
                }
            }else{
                this.$refs.wm_img.style.backgroundColor = 'rgba(255,255,255,0)'
                this.$refs.wm_input.style.display = 'none'
            }
            if (this.scrollTop>12) {
                //input输入框大于70高度时突变内容
                if (this.scrollTop>70) {
                    this.$refs.wm_input.placeholder = '       请输入商品名'
                }else{
                    this.$refs.wm_input.placeholder = ""
                }
                //放大镜跟随input输入框运动
                if (this.scrollTop<80) {       
                   this.$refs.wm_fdj.style = 
                   "right:"+
                   (99+this.scrollTop*2.5)+"px;width:"+
                   (20-this.scrollTop/10)+"px;top:"+
                   (20+this.scrollTop/20)+"px;"
                }
                
                //点菜.评价.商家栏粘性定位
                if (this.scrollTop>110) {
                    this.$refs.wmbottom.$refs.wm_b_top.style = 'position:sticky;top:-20px;z-index:2'
                }else{
                   this.$refs.wmbottom.$refs.wm_b_top.style =  'height 120px;position relative;background-color white' 
                }

                //商品信息导航粘性定位
                if (this.scrollTop>130) {
                    this.$refs.wmbottom.$refs.wmABC.$refs.gs.style = 
                    'width :60px;position:sticky;top:100px;z-index:1'
                }else{
                    this.$refs.wmbottom.$refs.wmABC.$refs.rx.style =  
                    'height:50px;line-height:50px;font-size:12px ;text-align:left ;margin-left:10px;background-color:white'
                     this.$refs.wmbottom.$refs.wmABC.$refs.gs.style = 
                    'width :60px;font-size :12px; background-color: #e4e3e3;position: relative'
                }
            }else{
                this.$refs.wm_fdj.style = "right:129px;width:20px"
            }   
            if (this.scrollTop<30) {
                 this.back = true
                this.fdj = true
                this.gwcw = true
                this.gd = true    
            }else{
               this.back = false
                this.fdj = false
                this.gwcw = false
                this.gd = false
            }
            if (this.scrollTop >324 && this.scrollTop <680) {
                this.$refs.wmbottom.$refs.wmABC.activeA(0)
            }
            if (this.scrollTop >680 && this.scrollTop <928) {
                this.$refs.wmbottom.$refs.wmABC.activeA(1)
            }
            if (this.scrollTop >928 && this.scrollTop <1180) {
                this.$refs.wmbottom.$refs.wmABC.activeA(2)
            }
            if (this.scrollTop >1180 && this.scrollTop <1430) {
                this.$refs.wmbottom.$refs.wmABC.activeA(3)
            }
            if (this.scrollTop >1430 && this.scrollTop <1680) {
                this.$refs.wmbottom.$refs.wmABC.activeA(4)
            }
            if (this.scrollTop >1680 && this.scrollTop <1940) {
                this.$refs.wmbottom.$refs.wmABC.activeA(5)
            }
            if (this.scrollTop >1680 && this.scrollTop <1940) {
                this.$refs.wmbottom.$refs.wmABC.activeA(5)
            }
            if (this.scrollTop >1680 && this.scrollTop <1940) {
                this.$refs.wmbottom.$refs.wmABC.activeA(5)
            }
        },
    },
    destroyed(){
        window.removeEventListener('scroll',this.scroll)
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{  
            vm.$refs.wm.btn()
        })
    }
}
</script>
<style lang="stylus" scoped>
.business
    position relative
    width 359px
    margin 0 auto
    .wm_img
        width 359px
        height 55px
        position fixed
        top 0
        z-index 2
        img
            position absolute
            top 20px
            width 20px   
        .img1
            left 5px 
            top 18px
            width 25px     
        input 
            width 80px
            height 20px
            position absolute
            top 19px
            right 120px
            background-color rgba(220,220,220,0)
            outline none
            border none
            border-radius 10px
        .img2
            right 129px
        .img3
            left 250px
        .img4
            left 290px   
        .img5
            left 330px   
    .hidden
        background-color #949494
        height 690px
    .shoucang
        padding 10px
        border-radius 5px
        background-color #4c4b4b
        position absolute
        left 50%
        top 400px
        transform translate(-50%)
        font-size 12px
        color white 
        z-index 2             
</style>