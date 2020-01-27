<template>
<!-- 城市 -->
    <div class="location">
        <div class="top">
            <div class="top_left" @click="back">
                <img src="../assets/back.png" alt="">
            </div>
            <div class="top_right">
                <img src="../assets/search.png" alt="">
                <input  type="search" placeholder="城市/拼音" @click="input" >
            </div>
        </div>
        <div class="local">            
            <div 
            class="mylocal"
            v-for="(item,index) in lists"
            :key="index"
            @click="action(index)"
            :class='active === index ? "ac" : ""'>{{item.name}}</div>        
        </div>
        <transition name="transition-city">
            <div v-if="active === 0" key=1 v-cloak>
                <div class="hot_city_title">热门城市</div>
                <div class="hotCity">
                    <div
                    @click="select"
                    class="hotCity_item"
                    v-for="(item,index) in hotList"
                    :key="index"
                    :class="item.title">{{item.city}}</div>
                </div>
                <city
                :course="item"
                @select="select"
                v-for="(item,index) in cityList"
                :key="index"></city>
        </div>
        </transition>
        <transition name="transition-city">
            <div v-if="active===1" key=2 v-cloak>
                <bigCity
                ></bigCity>
            </div>
        </transition>
        
    </div>
</template>
<script>
import city from "../components/city.vue"
import bigCity from "../components/bigCity.vue"
import store from '../store'

export default {
    components:{
        city,
        bigCity
    },
    data(){
       return{
            active:0,
            lists:[],
            cityList:[],
            hotList:[]
       }
    },
    created(){
        this.hotList = [
            {
                city:"广州",
                title:'gz'
            },
            {
                city:"北京",
                title:'bj'
            },
            {
                city:"深圳",
                title:'sz'
            },
            {
                city:"成都",
                title:'cd'
            },
            {
                city:"杭州",
                title:'hz'
            },
            {
                city:"郑州",
                title:'zz'
            },
            {
                city:"西安",
                title:'xa'
            },
            {
                city:"武汉",
                title:'wh'
            },
            {
                city:"重庆",
                title:'cq'
            },
        ],
        this.lists = [
            {
                name:"国内"
            },
            {
                name:"国际/港澳台"
            }
        ],
        this.cityList = [
            {
                city:"安阳",
                
            },
            {
                city:"阿克苏",
                
            },
            {
                city:"阿拉善盟",
               
            },
            {
                city:"北京",
             
            },
            {
                city:"包头",
                
            },
            {
                city:"白城",
               
            },
            {
                city:"成都",
                
            },
            {
                city:"长沙",
               
            },
            {
                city:"赤峰",
             
            },
        ]
    },
    methods:{
        action(index){
            this.active = index
        }, 
        back(){
            this.$router.push({
                path:'/'
            })
        },
        input(e){
           if (e) {
               this.$router.push({
                   path:'/searchCity'
               })
           }
        },
        select(e){
            setTimeout(()=>{
                store.commit('setCity',{
                   localWeather : e.city||e.target.innerText
                })
            })
            
            this.$router.push({
                path:'/'
            })
        },
        
    },
    
}
</script>  
<style lang="stylus">
@import "../css/location"
    .transition-city-enter-active,.transition-city-leave-active
        transition: all 0.3s ease 
    .transition-city-enter,.transition-city-leave-to
        transform: translateX(10px)
        opacity: 0     
</style>