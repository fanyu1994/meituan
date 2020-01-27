<template>
    <div class="out_food" ref="out" @scroll="scroll" >
        <div class="back" @click="goback">
            <img src="..\assets\erweima\fh.png" alt="">
        </div>
        <div class="top" ref="top">
            外卖
        </div>
        <div class="bottom">
            <div class="bottom_top" ref="bottom">
                <div class="bottom_top_one" ref="bottom_top">
                    <img src="../assets\search1.png" alt="">
                    <input type="text" placeholder="        请输入商家或者商品名称">
                </div>
            </div>
            <div class="bottom_middle">
                <div class="bottom_middle_top">
                    <div class="big_class">
                        <div>
                            <img src="/outFood/ms.png" alt="">
                            <span>美食</span>
                        </div>
                        <div>
                            <img src="/outFood/cs.png" alt="">
                            <span>超市便利</span>
                        </div>
                        <div>
                            <img src="/outFood/sg.png" alt="">
                            <span>蔬菜水果</span>
                        </div>
                        <div>
                            <img src="/outFood/yx.png" alt="">
                            <span>送药上门</span>
                        </div>
                        <div>
                            <img src="/outFood/tt.png" alt="">
                            <span>甜点饮品</span>
                        </div>   
                    </div>
                    <div class="small_class">
                        <div><img src="/outFood/xwc.png" alt=""><span>喝下午茶</span></div>
                        <div><img src="/outFood/wl.png" alt=""><span>无辣不欢</span></div>
                        <div><img src="/outFood/xs.png" alt=""><span>新来商家</span></div>
                        <div><img src="/outFood/qj.png" alt=""><span>券集市场</span></div>
                        <div><img src="/outFood/jm.png" alt=""><span>减免配送</span></div>
                        <div><img src="/outFood/pt.png" alt=""><span>跑腿代购</span></div>
                        <div><img src="/outFood/hb.png" alt=""><span>汉堡披萨</span></div>
                        <div><img src="/outFood/rh.png" alt=""><span>日韩料理</span></div>
                        <div><img src="/outFood/ks.png" alt=""><span>快食简餐</span></div>
                        <div><img src="/outFood/qb.png" alt=""><span>全部分类</span></div>
                    </div>
                </div>
                <div class="bottom_middle_bottom" @mouseover="stop" @mouseleave="run">
                    <img :src="src" alt="" ref="img">
                    <div 
                    v-for="(item,index) in divList"
                    :key="index"
                    :title="item.title"
                    :class="{'active': item.title==count}"
                    @click="goItem(item)"></div>
                </div>
            </div>
            <div class="bottom_bottom">
                <div class="bottom_bottom_top">
                    <div>
                        <span class="s1">限时秒杀</span>
                        <span class="s2">距本场结束</span>
                        <div class="hours">{{ hours }}</div>
                        <div class="minutes">{{ minutes }}</div>
                        <div class="seconds">{{ seconds }}</div>
                        <div class="maohao1"></div>
                        <div class="maohao2"></div>
                        <div class="maohao3"></div>
                        <div class="maohao4"></div>
                        <img class="i1" src="/outFood/dpj.png" alt="">
                        <span class="s3">大牌特惠</span>
                        <span class="s4">解锁高分美食</span>
                        <img class="i2" src="/outFood/ps.png" alt="">
                    </div>
                    <div>
                        <span class="s5">满减5折起</span>
                        <span class="s6">学生专属特惠</span>
                        <img class="i3" src="/outFood/mlt.png" alt="">
                        <span class="s7">新店尝鲜</span>
                        <span class="s8">吃货力荐TOP</span>
                        <img class="i4" src="/outFood/bbj.png" alt="">
                        <span class="s9">必吃榜单</span>
                        <span class="s10">让选择变简单</span>
                        <img class="i5" src="/outFood/scj.png" alt="">
                    </div>           
                </div>
                <div class="bottom_bottom_bottom">
                    <div class="main_top">
                        <div class="title" ref="title">附近商家</div>
                        <div class="search" ref="search">
                            <div @click="one">
                                <div class="word" ref="search1">{{ search1 }}</div>
                                <div class="img">
                                <img src="/outFood/sjt.png" alt="" v-show="imgOne">
                                <img src="/outFood/xjt.png" alt="" v-show="!imgOne"></div>
                            </div>
                            <div @click="two">
                                <div class="word" ref="search2">{{ search2 }}</div>
                                <div class="img">
                                <img src="/outFood/sjt.png" alt="" v-show="imgTwo">
                                <img src="/outFood/xjt.png" alt="" v-show="!imgTwo"></div>
                            </div>
                            <div @click="three">
                                <div class="word" ref="search3">{{ search3 }}</div>
                                <div class="img">
                                    <img src="/outFood/sjt.png" alt="" v-show="imgThree">
                                    <img src="/outFood/xjt.png" alt="" v-show="!imgThree">
                                    <div class="sudu" v-if="sududis">{{sudu}}</div>
                                </div>
                            </div>
                            <div @click="four">
                                <div class="word" ref="search4">{{ search4 }}</div>
                                <div class="img">
                                <img src="/outFood/sjt.png" alt="" v-show="imgFour">
                                <img src="/outFood/xjt.png" alt="" v-show="!imgFour">
                                <div class="all" v-if="alldis">{{all}}</div>
                                </div>
                            </div>
                        </div>
                        <!-- 综合排序.品类.速度.筛选 -->
                        <transition name="fade">
                        <div class="comp" ref="comp" v-show="comp">
                            <keep-alive>
                                <component 
                                :is='curry' 
                                @btn1='btn1'
                                @btn2='btn2'
                                @btn3='btn3(arguments)'
                                @btn4='btn4(arguments)'></component>
                            </keep-alive>
                        </div>
                        </transition>
                        <!-- 底层遮罩 -->
                        <div class="black" v-show="black"></div>
                        <!-- 下拉店铺 -->
                        <outFoodGoods ref="outFoodGoods"></outFoodGoods>
                        <div class="car" ref="car" @click="goCar">
                            <img src="/outFood/gwc.png" alt="">
                        </div>
                    </div> 
                </div>
            </div>
            <outFood-footer></outFood-footer>
        </div>
    </div>
</template>
<style lang="stylus">
@import '../css/outFood.styl'
    .fade-enter-active,.fade-leave-active
        transition all .6s ease 
    .fade-enter
        transform translateX(349px)    
    .fade-leave-to
        transform translateX(-349px)   
</style>
<script>
import outFoodFooter from '../components/outFoodFooter.vue'
import compA from '../components/compA.vue'
import compB from '../components/compB.vue'
import compC from '../components/compC.vue'
import compD from '../components/compD.vue'
import outFoodGoods from '../components/outFoodGoods.vue'

export default {
    data(){
        return{
            src:'/outFood/mj1.png',
            timer:null,
            count:1,
            divList:[],
            hours:0,
            minutes:0,
            seconds:0,
            sto:null,
            search1:'综合排序',
            search2:'品类',
            search3:'速度',
            search4:'全部筛选',
            imgOne:true,
            imgTwo:true,
            imgThree:true,
            imgFour:true,
            black:false,
            curry:'',
            comp:false,
            sudu:0,
            sududis:false,
            all:0,
            alldis:false,
            scrollTimer:null,
            scrollVal:0,
            allSelect:{
                all:'综合排序',
                minutes:'无',
                len:'无',
                pin:[],
            }
        }
    },
    components:{
        outFoodFooter,
        compA,
        compB,
        compC,
        compD,
        outFoodGoods,
    },
    created(){
        this.$nextTick(()=>{
            this.lunbo()
            this.$once('hook:beforeDestory',()=>{
                clearTimeout(this.timer)
            })
        })
        this.divList=[
            {
                title:1
            },
            {
                title:2
            },
            {
                title:3
            },
            {
                title:4
            },
            {
                title:5
            },
        ]
    },
    mounted(){
        if (this.sto) {
            clearTimeout(this.sto)
        }  
        this.time()
    },
    activated(){
    },
    methods:{
        btn1(data){
            this.search1 = data.title
            this.comp = false
            this.imgOne = true
            this.imgTwo = true
            this.imgThree = true
            this.imgFour =true
            this.allSelect.all = data.title
            this.$refs.outFoodGoods.screen(this.allSelect)
        },
        btn2(data){
            this.search2 = data
            this.comp = false
            this.imgOne = true
            this.imgTwo = true
            this.imgThree = true
            this.imgFour =true
            this.black = false
        },
        btn3(data){
            if (data[0] > 0) {
                this.sududis = true
                this.sudu = data[0]
            }else{
                this.sududis = false
            }
            this.comp = false
            this.imgOne = true
            this.imgTwo = true
            this.imgThree = true
            this.imgFour =true
            this.$refs.search3.style = 'font-weight: 400'
            this.allSelect.minutes = data[1]
            this.allSelect.len = data[2]
            this.$refs.outFoodGoods.screen(this.allSelect)
        },
        btn4(data){
             if (data[0] > 0) {
                this.alldis = true
                this.all = data[0]
            }else{
                this.alldis = false
            }
            this.comp = false
            this.imgOne = true
            this.imgTwo = true
            this.imgThree = true
            this.imgFour =true 
            this.$refs.search4.style = 'font-weight: 400'   
            this.allSelect.pin = [...data[1]]
            this.$refs.outFoodGoods.screen(this.allSelect)  
        },
        one(){
            this.comp = true
            if (this.comp && !this.imgOne) {
                this.comp = false
                
            }else{
                this.comp = true
                
            }
            if (this.imgOne) {
                this.imgOne = false
                this.imgTwo = true
                this.imgThree = true
                this.imgFour = true
                this.black = true
                this.$refs.search1.style = 'font-weight: 800'
            }else{
                this.imgOne = true
                this.black = false
                this.$refs.search1.style = 'font-weight:400'
            }
            this.$refs.out.scrollTop = 600
            this.curry =  "compA"

        },
        two(){
            this.comp = true
             if (this.comp && !this.imgTwo) {
                this.comp = false
            }else{
                this.comp = true
            }
            if (this.imgTwo) {
                this.imgOne = true
                this.imgTwo = false
                this.imgThree = true
                this.imgFour = true
                this.black = true
                this.$refs.search2.style = 'font-weight: 800'
            }else{
                this.imgTwo = true
                this.black = false
                this.$refs.search2.style = 'font-weight: 400'
            }
            this.$refs.out.scrollTop = 600
            this.curry =  'compB'
        },
        three(){
            this.comp = true
            if (this.comp && !this.imgThree) {
                this.comp = false
            }else{
                this.comp = true
            }
            if (this.imgThree) {
                this.imgOne = true
                this.imgTwo = true
                this.imgThree = false
                this.imgFour = true
                this.black = true
                 this.$refs.search3.style = 'font-weight: 800'
            }else{
                this.imgThree = true
                this.black = false
                this.$refs.search3.style = 'font-weight: 400'
            }
            this.$refs.out.scrollTop = 600
            this.curry =  'compC'
        },
        four(){
            this.comp = true
            if (this.comp && !this.imgFour) {
                this.comp = false
            }else{
                this.comp = true
            }
            if (this.imgFour) {
                this.imgOne = true
                this.imgTwo = true
                this.imgThree = true
                this.imgFour = false
                this.black = true
                this.$refs.search4.style = 'font-weight: 800'
            }else{
                this.imgFour = true
                this.black = false
                this.$refs.search4.style = 'font-weight: 400'
            }
            this.$refs.out.scrollTop = 600
            this.curry =  'compD'
        },
        time(){
            let oldTime = new Date().getTime();
            let newTime = new Date(2021,0,6,12,12,12);
            let s = (newTime - oldTime)/1000;
            s = s % 86400;
            let h = Math.floor(s/3600);
            s = s % 3600;
            let m = Math.floor(s/60);
            s = Math.floor(s % 60);
            this.hours = h;
            this.minutes = m;
            this.seconds = s
            this.sto = setTimeout(() => {
                this.time()
            }, 1000);
        },
        scroll(e){
            if (e.target.scrollTop < 20) {
                console.log(e.target.scrollTop+'这里出现了严重的问题，滚动距离严重不正确。。。')
                let opa = 1-e.target.scrollTop/20 
                this.$refs.top.style.opacity = opa
                this.$refs.bottom_top.style.width = 359-e.target.scrollTop + 'px'
            }
            if (e.target.scrollTop>40) {
                this.$refs.bottom.style = 'border-radius:0;position:sticky;top:0;z-index:1'
            }else{
                this.$refs.bottom.style = 'border-radius:0.5rem'
            }
            if (e.target.scrollTop>=600) {
               this.$refs.title.style = 'position:sticky;top:40px;background-color:white'
               this.$refs.search.style = 'position:sticky;top:90px;background-color:white'
            }else{
                this.$refs.title.style = 'background-color:rgba(245, 245, 245, 1)'
                this.$refs.search.style = 'background-color:rgba(245, 245, 245, 1)'
            }
            if (e.target.scrollTop>=600 && this.comp) {
                this.$refs.comp.style = 'position:sticky;top:120px;background-color:white'
            }
            this.$refs.car.style = 'right:-20px'
            if (!this.scrollTimer) {
                this.scrollTimer = setInterval(()=>{
                    //1s前高度===当前滚动高度，滚动停止了
                    if (e.target.scrollTop === this.scrollVal) {
                        this.$refs.car.style = 'right:25px'
                    }
                    clearInterval(this.scrollTimer)
                    this.scrollTimer = null
                } ,1000) 
            }
            this.scrollVal = e.target.scrollTop
            
        },
        goCar(){
            this.$router.push({
                path:'/shoppingCar'
            })
        },
        goback(){
            this.$router.push({
                path:'/'
            })
        },
        goItem(params){
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.count = params.title
            this.$refs.img.src = `/outFood/mj${this.count}.png`
            this.lunbo()
        },
        stop(){
            clearTimeout(this.timer)
        },
        run(){
            this.lunbo()
        },
        lunbo(){
            this.timer = setTimeout(()=>{
                if (this.count < 5) {
                    switch (this.count) {
                        case 1:
                            this.src = '/outFood/mj2.png'
                            this.count++
                            this.lunbo()
                            break;
                            case 2:
                            this.src = '/outFood/mj3.png'
                            this.count++
                            this.lunbo()
                            break;
                            case 3:
                            this.src = '/outFood/mj4.png'
                            this.count++
                            this.lunbo()
                            break;
                            case 4:
                            this.src = '/outFood/mj5.png'
                            this.count++
                            this.lunbo()
                            break;
                        default:
                            break;
                    }
                }else{
                    this.count = 0
                    this.src = '/outFood/mj1.png'
                    this.count++
                    this.lunbo()
                }
            },2000)
        },
    },
}
</script>