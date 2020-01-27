<template>
<!-- 主页 -->
        <div class="main" @scroll="scroll" ref="main" @click="closechouti">
            <!-- 顶部区 -->
            <header>
                <div class="header_top">
                    <!-- 用户中心 -->
                    <div class="header_top_one li" @click="goUser">
                        <img src="../assets/me.png" alt="">
                    </div>
                    <!-- 天气预报 -->
                    <div class="header_top_two li"  @click="local">           
                            <div class="localWeather_l" ref="localWeather">{{localWeather}}</div>
                            <div class="localWeather_w" ref="weather">{{weather}}</div>
                            <dir class="localWeather_t" ref="temperature">{{temperature}}</dir>
                            <img src="../assets/local.png" alt="">
                    </div>
                    <!-- 搜索框 -->
                    <div class="header_top_three li">
                        <img src="../assets/search1.png" alt="" class="search">
                        <input type="text" placeholder="      搜索美食">
                        <img src="../assets/yuyin.png" alt="" class="img2">
                    </div>
                    <!-- 二维码扫一扫 -->
                    <div class="header_top_four li">
                        <img src="../assets/add.png" alt="" @click="chouti">
                        <div class="chouti" v-if="active">
                            <div class="sanjiao"></div>
                            <ul class="chouti_ul" @click="skip1">
                                <li data-bs="saoyisao" >
                                    <img src="..\assets\chouti\sao.png" alt="">
                                    <span>扫一扫</span>
                                </li>
                                <li data-bs="fukuanma">
                                    <img src="..\assets\chouti\fukuan.png" alt="">
                                    <span>付款码</span>
                                </li>
                                <li data-bs="kaifapiao">
                                    <img src="..\assets\chouti\fapiao.png" alt="">
                                    <span>开发票</span>
                                </li>
                                <li data-bs="chenggongjiao">
                                    <img src="..\assets\chouti\gongjiao.png" alt="">
                                    <span>乘公交</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header_bottom"></div>
            </header>
            <!-- 中心选择区 -->
            <section>  
                <div class="section_top">
                    <div class="food" @click="goGoodFood">
                        <img src="..\assets\food.png" alt="">
                        <span>美食</span>
                    </div>
                    <div class="movie">
                        <img src="..\assets\cat.png" alt="">
                        <span>电影演出</span>
                    </div>
                    <div class="hotel">
                        <img src="..\assets\hotel.png" alt="">
                        <span>酒店住宿</span>
                    </div>
                    <div class="recreation">
                        <img src="..\assets\wine.png" alt="">
                        <span>休闲娱乐</span>
                    </div>
                    <div class="outfood" @click="goOutFood">
                        <img src="..\assets\outfood.png" alt="">
                        <span>外卖</span>
                    </div>
                </div>
                <div class="section_bottom">
                    <div><img src="..\assets\index\hotel.png" alt=""><span>民宿公寓</span></div>
                    <div><img src="..\assets\index\money.png" alt=""><span>借一笔钱</span></div>
                    <div><img src="..\assets\index\tree.png" alt=""><span>周边旅游</span></div>
                    <div><img src="..\assets\index\ta.png" alt=""><span>景点门票</span></div>
                    <div><img src="..\assets\index\fly.png" alt=""><span>车票机票</span></div>
                    <div><img src="..\assets\index\shuiguo.png" alt=""><span>免费水果</span></div>
                    <div><img src="..\assets\index\daishu.png" alt=""><span>袋鼠快跑</span></div>
                    <div><img src="..\assets\index\hongbao.png" alt=""><span>红包签到</span></div>
                    <div><img src="..\assets\index\liwu.png" alt=""><span>免费福利</span></div>
                    <div><img src="..\assets\index\gengduo.png" alt=""><span class="gengduo">更多</span></div>    
                </div>
            </section>
            <!-- 轮播广告区 -->
            <guanggao></guanggao>
            <!-- 商品展示区 -->
            <goods></goods>
            <!-- 底部区 -->
            <foot ref="foot" @goTop='goTop'></foot>
        </div>  
</template>  
<script>
import { mapState } from 'vuex'
import guanggao from '../components/guanggao.vue'
import goods from '../components/goods.vue'
import foot from '../components/footer.vue'

export default{
    data(){
        return {  
            active:false,   
        }
    },
    components:{
        guanggao,
        goods,
        foot
    },
    created(){},
    computed:{
        ...mapState(["localWeather","weather","temperature"]),
    },
    updated(){
        if(this.$refs.localWeather){
                    this.$http.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.$refs.localWeather.innerHTML).then((res)=>{
                    setTimeout(()=>{
                        this.$store.commit('setWeather',{
                            weather: res.data.data.forecast[0].type
                        })
                    },500)
                     console.log()
                    setTimeout(() => {
                        this.$store.commit('setTemperature',{
                            temperature:res.data.data.forecast[0].low.split(" ")[1]+"~"+res.data.data.forecast[0].high.split(" ")[1]
                        })
                    }, 500);
                }).catch((err)=>{
                    console.log(err)
                })
                }else{
                    console.log("读取失败")
                }
             
    },
    methods:{
        goGoodFood(){
            this.$router.push({
                path:'/goodFood'
            })
        },
        goOutFood(){
            this.$router.push({
                path:'/outFood'
            })
        },
        goUser(){
            this.$router.push({
                path:'/userCenter'
            })
        },
        goTop(){
            this.$refs.main.scrollTop = 0
        },
        scroll(e){
            this.$refs.foot.scroll(e)
        },
        chouti(){
            if (!this.active) {
                this.active = true
            }else{
                this.active = false
            }
        },
        closechouti(e){
           if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'LI') {
               this.active = false
           }
        },
        skip1(e){    
            if (e.target.nodeName.toLowerCase() === 'span' ||e.target.nodeName.toLowerCase() === 'img'||e.target.nodeName.toLowerCase() === 'li') {
                switch (e.target.getAttribute('data-bs') || e.target.parentNode.getAttribute('data-bs') ) {
                case 'saoyisao':
                    this.$router.push({
                        path:"/erweima",
                        query:{
                            name:'saoyisao'
                        }
                    })
                    break;
                case 'fukuanma':
                    this.$router.push({
                        path:"/erweima",
                        query:{
                            name:'fukuanma'
                        }
                    })
                    break;
                case 'kaifapiao':
                    this.$router.push({
                        path:"/erweima",
                        query:{
                            name:'kaifapiao'
                        }
                    })
                    break;
                case 'chenggongjiao':
                    this.$router.push({
                        path:"/erweima",
                        query:{
                            name:'chenggongjiao'
                        }
                    })
                    break;        
                default:
                    break;
            } 
            }
            
        },
        local(){
            setTimeout(()=>{
                this.$router.push({
                    path:"/location"
                })
            })
        }
    }, 
    beforeRouteEnter(to,from,next){
            
            next(vm=>{ 
                if(vm.$refs.localWeather){
                    vm.$http.get("http://wthrcdn.etouch.cn/weather_mini?city="+vm.$refs.localWeather.innerHTML).then((res)=>{
                    if (res.data.status === 1000) {
                        setTimeout(()=>{
                        vm.$store.commit('setWeather',{
                            weather: res.data.data.forecast[0].type
                        })
                    },500)

                    setTimeout(() => {
                        vm.$store.commit('setTemperature',{
                            temperature:res.data.data.forecast[0].low.split(" ")[1]+"~"+res.data.data.forecast[0].high.split(" ")[1]
                        })
                    }, 500);
                    }
                }).catch((err)=>{
                    console.log(err)
                })
                }else{
                    console.log("读取失败")
                }
            }) 
    },
}
</script>  
<style lang="stylus"> 
    @import "../css/main.styl"          
</style>  