<template>
    <div class="wm_a">
        <swiper :options="swiperOption" class="swiper">
            <swiperSlide
            v-for="(item,index) in imgList"
            :key="index"
            class="slide"><img :src="item.url" alt=""></swiperSlide>
        </swiper>
        <div class="wm_a_shop">
            <div class="wm_a_shop_goods" ref="gs">
                <img src="/outFood/rx.png" alt="">
                <div
                v-for="(goods,index) in goodsList"
                :key="index"
                :class="{active:goods.numCount === count}"
                class="goodsItem" 
                @click="active(goods)">
                    {{ goods.title }}
                    <!-- <div class="goods_num"
                    v-show="goods.number>0">{{goods.number}}</div> -->
                </div>
                <div v-show="rxN>0" class="rx">{{rxN}}</div>
                <div v-show="xpN>0" class="xp">{{xpN}}</div>
                <div v-show="fydN>0" class="fyd">{{fydN}}</div>
                <div v-show="fyxN>0" class="fyx">{{fyxN}}</div>
                <div v-show="lcN>0" class="lc">{{lcN}}</div>
                <div v-show="zsN>0" class="zs">{{zsN}}</div>
                <div v-show="jsN>0" class="js">{{jsN}}</div>
            </div>
            <div class="wm_a_shop_right">
                <div class="wm_a_shop_main">
                <div class="goods_top" ref="rx" id="rx">
                    热销
                </div>
                <div
                v-for="(rx,index) in rxList"
                :key="index"
                class="goods_goods"
                id="rx">
                    <img :src="rx.img" alt="">
                    <span>{{ rx.title }}</span>
                    <span>月售{{ rx.month }}</span>
                    <span>好评率{{ rx.talk }}</span>
                    <span>¥{{ rx.price }}</span>
                    <span @click="add(rx,$event)">{{ rx.add }}</span>
                    <span 
                    @click="reduce(rx)"
                    v-show="rx.num>0">-</span>
                    <span
                    v-show="rx.num>0">{{rx.num}}</span>
                </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top" ref="xp" id="xp">
                        新品尝鲜
                    </div>
                    <div
                    v-for="(xp,index) in xpList"
                    :key="index"
                    class="goods_goods" >
                        <img :src="xp.img" alt="">
                        <span>{{ xp.title }}</span>
                        <span>月售{{ xp.month }}</span>
                        <span>好评率{{ xp.talk }}</span>
                        <span>¥{{ xp.price }}</span>
                        <span
                        @click="add(xp,$event)">{{ xp.add }}</span>
                        <span 
                        @click="reduce(xp)"
                        v-show="xp.num>0">-</span>
                        <span
                        v-show="xp.num>0">{{xp.num}}</span>
                    </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top"  ref="fyd" id="fyd">
                        范宇大盘鸡（宿舍小聚热销）
                    </div>
                    <div
                    v-for="(fyd,index) in fydList"
                    :key="index"
                    class="goods_goods">
                        <img :src="fyd.img" alt="">
                        <span>{{ fyd.title }}</span>
                        <span>月售{{ fyd.month }}</span>
                        <span>好评率{{ fyd.talk }}</span>
                        <span>¥{{ fyd.price }}</span>
                        <span 
                        @click="add(fyd,$event)">{{ fyd.add }}</span>
                        <span 
                        @click="reduce(fyd)"
                        v-show="fyd.num>0">-</span>
                        <span
                        v-show="fyd.num>0">{{fyd.num}}</span>
                    </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top" ref="fyx" id="fyx">
                        范宇小炒
                    </div>
                    <div
                    v-for="(fyx,index) in fyxList"
                    :key="index"
                    class="goods_goods">
                        <img :src="fyx.img" alt="">
                        <span>{{ fyx.title }}</span>
                        <span>月售{{ fyx.month }}</span>
                        <span>好评率{{ fyx.talk }}</span>
                        <span>¥{{ fyx.price }}</span>
                        <span 
                        @click="add(fyx,$event)">{{ fyx.add }}</span>
                        <span 
                        @click="reduce(fyx)"
                        v-show="fyx.num>0">-</span>
                        <span
                        v-show="fyx.num>0">{{fyx.num}}</span>
                    </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top" ref="lc" id="lc">
                        范宇凉菜
                    </div>
                    <div
                    v-for="(lc,index) in lcList"
                    :key="index"
                    class="goods_goods">
                        <img :src="lc.img" alt="">
                        <span>{{ lc.title }}</span>
                        <span>月售{{ lc.month }}</span>
                        <span>好评率{{ lc.talk }}</span>
                        <span>¥{{ lc.price }}</span>
                        <span 
                        @click="add(lc,$event)">{{ lc.add }}</span>
                        <span 
                        @click="reduce(lc)"
                        v-show="lc.num>0">-</span>
                        <span
                        v-show="lc.num>0">{{lc.num}}</span>
                    </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top" ref="zs">
                        大盘鸡主食
                    </div>
                    <div
                    v-for="(zs,index) in zsList"
                    :key="index"
                    class="goods_goods">
                        <img :src="zs.img" alt="">
                        <span>{{ zs.title }}</span>
                        <span>月售{{ zs.month }}</span>
                        <span>好评率{{ zs.talk }}</span>
                        <span>¥{{ zs.price }}</span>
                        <span 
                        @click="add(zs,$event)">{{ zs.add }}</span>
                        <span 
                        @click="reduce(zs)"
                        v-show="zs.num>0">-</span>
                        <span
                        v-show="zs.num>0">{{zs.num}}</span>
                    </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top" ref="js">
                        酒水饮料
                    </div>
                    <div
                    v-for="(js,index) in jsList"
                    :key="index"
                    class="goods_goods">
                        <img :src="js.img" alt="">
                        <span>{{ js.title }}</span>
                        <span>月售{{ js.month }}</span>
                        <span>好评率{{ js.talk }}</span>
                        <span>¥{{ js.price }}</span>
                        <span 
                        @click="add(js,$event)">{{ js.add }}</span>
                        <span 
                        @click="reduce(js)"
                        v-show="js.num>0">-</span>
                        <span
                        v-show="js.num>0">{{js.num}}</span>
                    </div>
                </div>
                <div class="wm_a_shop_main">
                    <div class="goods_top" ref="ct">
                        餐厅环境
                    </div>
                    <div
                    v-for="(ct,index) in ctList"
                    :key="index"
                    class="goods_goods">
                        <img :src="ct.img" alt="">
                        <span>{{ ct.title }}</span>
                        <span>月售{{ ct.month }}</span>
                        <span>好评率{{ ct.talk }}</span>
                        <span>¥{{ ct.price }}</span>
                        <span>{{ ct.add }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="wm_a_footer">
            <div class="footer_left" @click="sj = !sj">
                <img src="/outFood/lianxi.png" alt="">
                <span>联系商家</span>
            </div>
            <div class="footer_left_sj" v-if="sj">
                    <div class="footer_left_sj_top">此商家暂不支持在线沟通，请通过电话与商家进行沟通</div>
                    <div class="footer_left_sj_left" @click.stop="sj = !sj">取消</div>
                    <div class="footer_left_sj_right" >拨打电话</div>
            </div>
            <div class="footer_right" @click="fc = !fc">
                <img src="/outFood/hezi1.png" alt="" v-show="hezi" class="footer_img">
                <img src="/outFood/hezi2.png" alt="" v-show="!hezi" class="footer_img" ref="footer_img">
                <span>另需配送费¥{{givePrice}}</span>
                <span>¥{{cha}}起送</span>
                <span class="cha" v-show="goodsAllNum">差</span>
                <div class="goods_number"
                v-show="goodsAllNum>0">{{goodsAllNum}}</div>
                <div class="goods_price"
                v-show="allGoodsPrice>0">¥{{allGoodsPrice}}</div>
                <div 
                class="jiesuan" 
                v-show="jiesuan" 
                @click.stop="go">去结算</div>
            </div>
        </div>
        <div class="footer_car" v-if="fc" @click.self="fc = !fc">
                <span class="footer_car_top" v-if="cha>0">
                    还差{{cha}}元就能起送了 [去凑单]
                </span>
                <span 
                class="footer_car_middle"
                @click="clearCar">
                    <img 
                    src="/outFood/ljx.png" 
                    width="10px">
                    清空购物车
                </span>
                 <div 
                 v-for="(item,index) in carList"
                 :key="index">
                    <img :src="item.img" alt="">
                   <span>{{item.title}}</span>
                   <span>¥{{item.price}}</span>
                   <span @click="reduce(item)">-</span>
                   <span>{{item.num}}</span>
                   <span @click="add(item,$event)">+</span>
                 </div>
                 <div class="footer_car_bottom"></div>
        </div>
    </div>
</template>
<script>
  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import {mapState, mapMutations, mapGetters} from 'vuex';

export default {
    data(){
        return {
            car:{},
            fc:false,
            sj:false,
            rxN:0,
            xpN:0,
            fydN:0,
            fyxN:0,
            lcN:0,
            zsN:0,
            jsN:0,
            timer:null,
            hezi:true,
            scrollTop:0,
            count:0,
            imgList:[],
            goodsList:[],
            rxLixt:[],
            xpList:[],
            fydList:[],
            fyxList:[],
            lcList:[],
            zsList:[],
            jsList:[],
            ctList:[],
            cha:this.startPrice,
            swiperOption:{
                direction: 'horizontal',    //翻转方向
                loop: true,
                grabCursor : true,
                autoplay:{      //自动播放，里面有很多参数可以根据需求进行调试
                    delay:5000,
                },
                slidesPerView: "auto",
                centeredSlides:true,
                spaceBetween: 15,
            },
            addCount:0
        }
    },
    props:{
        givePrice:{
            type:Number,
            required:true
        },
        startPrice:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        minutes:{
            type:Number,
            required:true
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        this.imgList = [
            {
                url:'/outFood/dpj1.png'
            },
            {
                url:'/outFood/dpj2.png'
            },
            {
                url:'/outFood/dpj3.png'
            }
        ],
        this.goodsList = [
            {
                title:'热销',
                num:0,
                comp:'A',
                scroll:330,
                number:this.rxNum,
                numCount:0
            },
            {
                title:'新品尝鲜',
                num:0,
                comp:'B',
                scroll:680,
                number:this.xpNum,
                numCount:1
            },
            {
                title:'范宇大盘鸡',
                num:0,
                comp:'C',
                scroll:928,
                number:this.fydNum,
                numCount:2
            },
            {
                title:'范宇小炒',
                num:0,
                comp:'D',
                scroll:1180,
                number:this.fyxNum,
                numCount:3
            },
            {
                title:'范宇凉菜',
                num:0,
                comp:'E',
                scroll:1430,
                number:this.lcNum,
                numCount:4
            },
            {
                title:'大盘鸡主食',
                num:0,
                comp:'F',
                scroll:1680,
                number:this.zsNum,
                numCount:5
            },
            {
                title:'酒水饮料',
                num:0,
                comp:'H',
                scroll:1680,
                number:this.jsNum,
                numCount:6
            },
            {
                title:'餐厅环境',
                num:0,
                comp:'I',
                scroll:1680,
                number:0,
                numCount:7
            },
        ],
        this.rxList = [
            {
                title:"单人份大盘鸡",
                month:9304,
                talk:'90%',
                price:25,
                add:'+',
                img:'/outFood/dpj.png',
                id:0,
                num:0
            },
            {
                title:"加一份米",
                month:8556,
                talk:'96%',
                price:3,
                add:'+',
                img:'/outFood/mf.png',
                id:1,
                num:0
            },
            {
                title:"加一份面（约3片烩面量）",
                month:3455,
                talk:'93%',
                price:3,
                add:'+',
                img:'/outFood/hm.png',
                id:2,
                num:0
            },
        ],
        this.xpList = [
            {
                title:"麻辣虾尾",
                month:50,
                talk:'90%',
                price:59,
                add:'+',
                img:'/outFood/xw.png',
                id:3,
                num:0
            },
            {
                title:"煎扒鱼",
                month:236,
                talk:'100%',
                price:40,
                add:'+',
                img:'/outFood/jby.png',
                id:4,
                num:0
            }
        ],
        this.fydList = [
            {
                title:"单人份大盘鸡",
                month:9304,
                talk:'90%',
                price:25,
                add:'+',
                img:'/outFood/dpj.png',
                id:0,
                num:0
            },
            {
                title:"小份大盘鸡",
                month:3654,
                talk:'97%',
                price:49,
                add:'+',
                img:'/outFood/dpjx.png',
                id:5,
                num:0
            }
        ],
        this.fyxList = [
            {
                title:"红烧豆腐",
                month:122,
                talk:'93%',
                price:20,
                add:'+',
                img:'/outFood/hsdf.png',
                id:6,
                num:0
            },
            {
                title:"线椒鸡蛋",
                month:324,
                talk:'90%',
                price:18,
                add:'+',
                img:'/outFood/xjjd.png',
                id:7,
                num:0
            }
        ],
        this.lcList = [
            {
                title:"麻辣面筋",
                month:1191,
                talk:'90%',
                price:7,
                add:'+',
                img:'/outFood/mlmj.png',
                id:8,
                num:0
            },
            {
                title:"凉拌黄瓜",
                month:3240,
                talk:'90%',
                price:7,
                add:'+',
                img:'/outFood/hg.png',
                id:9,
                num:0
            }
        ],
        this.zsList = [
            {
                title:"加一份米",
                month:8556,
                talk:'96%',
                price:3,
                add:'+',
                img:'/outFood/mf.png',
                id:1,
                num:0
            },
            {
                title:"加一份面（约3片烩面量）",
                month:3455,
                talk:'93%',
                price:3,
                add:'+',
                img:'/outFood/hm.png',
                id:2,
                num:0
            }
        ],
        this.jsList = [
            {
                title:"芬达330ml",
                month:122,
                talk:'90%',
                price:3.5,
                add:'+',
                img:'/outFood/fd.png',
                id:10,
                num:0
            },
            {
                title:"可口可乐330ml",
                month:380,
                talk:'90%',
                price:3.5,
                add:'+',
                img:'/outFood/kl.png',
                id:11,
                num:0
            }
        ],
        this.ctList = [
            {
                title:"后厨灶台",
                month:0,
                talk:'99%',
                price:0,
                add:'帅',
                img:'/outFood/zt.png',
                id:12
            },
            {
                title:"送餐车辆",
                month:0,
                talk:'98%',
                price:0,
                add:'帅',
                img:'/outFood/sc.png',
                id:13
            }
        ]
    },
    mounted(){ 
       this.car = document.querySelector('.footer_img').getBoundingClientRect()  
    },
    computed:{
        ...mapState(['jiesuan','carList',
        'goodsAllNum','goodsAllPrice',
        'rxNum','xpNum','fydNum',
        'fyxNum','lcNum','zsNum',
        'jsNum','num0','num1',
        'num2','num3','num4',
        'num5','num6','num7',
        'num8','num9','num10','num11',]),
        ...mapMutations(['setGoods']),
        ...mapGetters(['allGoodsPrice'])

    },
    activated(){
        if (this.goodsAllNum) {
                this.hezi = false
            }else{
                this.hezi = true
            }
            this.rxN = this.rxNum
            this.xpN = this.xpNum
            this.fydN = this.fydNum
            this.fyxN = this.fyxNum
            this.lcN = this.lcNum
            this.zsN = this.zsNum
            this.jsN = this.jsNum 
    },
    methods:{
        clearCar(){
            this.$store.commit('clearCar')
            this.fc = false
            if (this.goodsAllNum) {
                this.hezi = false
            }else{
                this.hezi = true
            }
            this.rxN = this.rxNum
            this.xpN = this.xpNum
            this.fydN = this.fydNum
            this.fyxN = this.fyxNum
            this.lcN = this.lcNum
            this.zsN = this.zsNum
            this.jsN = this.jsNum 
        },
        active(params){
            this.count = params.numCount
            this.$parent.$parent.wmAactive(params.scroll)
            //使用id定位造成左侧菜单栏异常
            // window.location.hash = '#rx'
        },
        activeA(params){
            this.count = params
        },
        add(params,e){
            params.num++
            this.$store.commit('setGoods',{
                goodsId:params.id,
                goodsPrice:params.price
            })

            //tab菜单数量的圆球
            this.rxN = this.rxNum
            this.xpN = this.xpNum
            this.fydN = this.fydNum
            this.fyxN = this.fyxNum
            this.lcN = this.lcNum
            this.zsN = this.zsNum
            this.jsN = this.jsNum

            //购物车添加商品
            if (!this.carList.includes(params)) {
                // this.carList.push(params)
                this.$store.commit('setCarList',params)
            }
            

            if (this.goodsAllNum>=0) {
                //外卖盒子样式改变
                this.hezi = false
                //所选商品价格小于起送价，做差。不然，出现去结算。
                if (this.cha>0) {
                    this.cha = this.cha-params.price
                    if (this.cha<=0) {
                        this.$store.commit('setJiesuan',true)
                    }
                }
                else{
                    this.cha = this.cha-params.price
                    this.$store.commit('setJiesuan',true)
                }
            }else{
                this.hezi = true
            }
            //外卖盒子样式改变
            this.$refs.footer_img.style.width = '65px'
            if (this.timer) {
                clearTimeout(this.timer)
            }
            setTimeout(() => {
                this.$refs.footer_img.style.width = '60px'
            }, 200);

            let shopCarPosition =  this.car
            let addBtnPosition = e.target.getBoundingClientRect()
            let shopCenterX = (shopCarPosition.left + shopCarPosition.right)/2
            let shopCenterY = (shopCarPosition.top + shopCarPosition.bottom)/2
            let addCenterX = (addBtnPosition.left + addBtnPosition.right)/2
            let addCenterY = (addBtnPosition.top + addBtnPosition.bottom)/2

            let x = Math.abs(shopCenterX-addCenterX)
            let y = Math.abs(shopCenterY-addCenterY)

            let newBall = this.createBall()
            newBall.style.top = addCenterY+document.documentElement.scrollTop+'px'
            newBall.style.left = addCenterX +'px'
            document.documentElement.appendChild(newBall)

            let ballX = 0,ballY = 0;
            var setBall = setInterval(() => {
                ballX-=5
                ballY = (y/Math.pow(x,2))*Math.pow(ballX,2)

                newBall.style.top = addCenterY+document.documentElement.scrollTop+ballY+'px'
                newBall.style.left = addCenterX+ballX+'px'

                let isFinish = Math.pow(parseInt(newBall.style.left)-shopCenterX,2)+
                            Math.pow(parseInt(addCenterY+ballY)-shopCenterY,2)

                if (Math.abs(isFinish)<=200) {
                    clearInterval(setBall)
                    document.documentElement.removeChild(newBall) 
                }
            }, 20);

            
        },
        reduce(params){
            params.num--
            this.$store.commit('setGoodsR',{
                goodsId:params.id,
                goodsPrice:params.price
            })
            //商品数量为0时，删除。
            if (params.num<1) {
                this.$store.commit('removeCarList',params)
            }
            //购物车为空，隐藏底部购物车
            if (this.carList.length == 0) {
                this.fc = false
            }
            this.rxN = this.rxNum
            this.xpN = this.xpNum
            this.fydN = this.fydNum
            this.fyxN = this.fyxNum
            this.lcN = this.lcNum
            this.zsN = this.zsNum
            this.jsN = this.jsNum
            if (this.cha<this.startPrice) {
                    this.cha = this.cha+params.price 
                    if (this.cha>=0) {
                        this.$store.commit('setJiesuan',false)
                    }
                }
                
            if (this.goodsAllNum>1) {
                this.hezi = false
            }else{
                this.hezi = true
            }
        },
        go(){
            this.$router.push({
                path:'/wmAOrder',
                query:{
                    name:this.name,
                    minutes:this.minutes,
                    list:this.carList,
                    givePrice:this.givePrice,
                    allGoodsPrice:this.allGoodsPrice
                }
            })
        },
        createBall(){
            var ball = document.createElement('div');
            ball.style='z-index:3;width:15px;height:15px;background-color:red;border-radius:50%;position:absolute;'
            return ball
        }
    },
}
</script>
<style lang="stylus" scoped>
.wm_a
    width 359px
    .swiper
        width 359px
        height 200px
        background-color white
        line-height 200px
        .slide 
            width 80%
            margin-top 25px 
            img
                width 100%
                height 150px
                border-radius 10px
    .wm_a_shop
        display flex
        .wm_a_shop_goods 
            width 60px
            height 700px
            font-size 12px
            background-color #e4e3e3
            position relative
            img 
                width 15px
                position absolute
                left 2px
                top 18px
            .goodsItem
                height 50px
                line-height 50px
                position relative
                .goods_num
                    width 15px
                    height 15px
                    position absolute
                    left 40px
                    top 5px
                    background-color red
                    border-radius 50%
                    line-height 15px
            .rx,.xp,.fyd,.fyx,.lc,.zs,.js
                width 15px
                height 15px
                position absolute
                left 40px
                top 5px
                background-color red
                border-radius 50%
                line-height 15px
            .xp
                top 50px    
            .fyd
                top 100px
            .fyx
                top 150px 
            .lc
                top 200px 
            .zs
                top 250px 
            .js
                top 300px                              
            .active
                background-color white 
        .wm_a_shop_right
            width 299px            
            .wm_a_shop_main
                width 299px   
                .goods_top 
                    height 50px
                    line-height 50px
                    font-size 12px 
                    text-align left 
                    margin-left 10px
                    background-color white
                    position sticky
                    top 100px
                    z-index 1
                    
                .goods_goods
                    height 100px    
                    position relative
                    img 
                        width 60px
                        height 60px
                        position absolute
                        left 10px
                        top 10px
                        border-radius 10px
                    span    
                        position absolute
                    span:nth-of-type(1) 
                        font-size 15px
                        font-weight 800               
                        left 80px
                        top 10px
                    span:nth-of-type(2)
                        left 80px
                        top 40px 
                        font-size 12px
                    span:nth-of-type(3)
                        left 140px
                        top 40px 
                        font-size 12px
                    span:nth-of-type(4)
                        left 80px
                        top 65px 
                        font-size 14px
                        color red
                    span:nth-of-type(5)
                        right 10px
                        top 60px 
                        font-size 12px 
                        background-color #ff9e19
                        width 50px
                        height 20px
                        border-radius 10px
                        line-height 20px  
                    span:nth-of-type(6)
                        width 50px
                        height 20px
                        right 80px
                        top 60px
                        background-color #ff9e19
                        border-radius 10px
                    span:nth-of-type(7)
                        width 50px
                        height 20px
                        right 45px
                        top 60px   
    .wm_a_footer
        position fixed 
        bottom 10px
        left 10px
        z-index 4
        .footer_left
            width 60px
            height 50px
            background-color black
            position absolute
            left 10px
            bottom 0px
            border-radius 50% 0 0 50%
            img
                width 15px 
                position absolute
                top 10px 
            span
                font-size 12px
                position absolute
                top 25px
                left 10px
                transform scale(0.9)  
                color #808080
        .footer_left_sj
            width 400px
            height 900px
            background-color rgba(0,0,0,0.75)
            position absolute
            top -800px
            left -20px  
            z-index 3
            
            .footer_left_sj_top
                width 250px
                height 60px
                position absolute
                top 350px
                left 46px
                font-size 14px
                padding  15px
                background-color white
                border-radius 5px
            .footer_left_sj_left
                box-sizing border-box
                width 125px
                height 30px
                position absolute
                top 410px
                left 46px
                padding  5px
                background-color white 
                border-radius 5px
            .footer_left_sj_right
                box-sizing border-box
                width 125px
                height 30px
                position absolute
                top 410px
                left 201px
                padding  5px
                background-color white 
                color #ff9e19    
                border-radius 5px  
        .footer_right
            width 250px
            height 50px
            background-color black
            position absolute
            left 75px
            bottom 0px
            border-radius 0 30px 30px 0
            .footer_img
                width 60px
                position absolute
                left 2px
                top -25px
            span:nth-of-type(1)
                font-size 12px
                position absolute
                top 25px
                left 55px
                transform scale(0.9)  
                color #808080 
            span:nth-of-type(2)
                font-size 12px
                position absolute
                top 15px
                left 190px 
                color #808080
            span:nth-of-type(3)
                font-size 12px
                position absolute
                top 15px
                left 175px 
                color #808080    
            .goods_number
                font-size 12px
                width 20px
                height 20px
                background-color red
                color white
                border-radius 50%
                position absolute
                left 45px
                top -10px
                line-height 20px
            .goods_price
                width 80px
                height 20px
                color white
                border-radius 50%
                position absolute
                left 70px
                top 5px
                line-height 20px
                text-align left
            .jiesuan
                width 90px
                height 50px
                line-height 50px
                background-image linear-gradient(to right,#ffcf00,#ff9e19)
                position absolute
                left 161px
                bottom 0
                border-radius 0 30px 30px 0
                font-weight 800
    .footer_car 
        width 369px
        height 812px
        background-color rgba(0,0,0,0.8)
        position fixed
        bottom 0
        display flex
        flex-flow row wrap
        align-content flex-end
        z-index 3
        .footer_car_top
            width 369px
            font-size 12px
            padding 5px 
            background-color #e8d59ce6
            border-radius 15px 15px 0 0
            color red
        .footer_car_middle
            width 369px
            background-color white 
            font-size 12px
            text-align right
            padding 5px
        div
            width 369px
            height 60px
            background-color white 
            border 1px solid #efefef
            position relative
            img
                width 60px
                position absolute 
                left 10px
                top 50%
                transform translateY(-50%)
            span
                position absolute
            span:nth-of-type(1)
                font-size 14px
                left 80px
                top 10px
            span:nth-of-type(2)
                font-size 14px
                left 80px
                top 40px
                color red
            span:nth-of-type(3)
                width 15px
                height 15px
                left 280px
                top 35px
                line-height 12px
                border 1px solid black 
                border-radius 50%
            span:nth-of-type(4)
                font-size 14px
                left 310px
                top 35px  
            span:nth-of-type(5)
                width 15px
                height 15px
                left 330px
                top 35px
                line-height 15px
                border 1px solid black 
                border-radius 50% 
                background-color #f9b203    
        .footer_car_bottom  
            width 369px
            height 80px  


             


        


</style>