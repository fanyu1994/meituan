<template>
    <div class="location">
        <div class="top">
            <div class="top_left" @click="back">
                <img src="../assets/back.png" alt="">
            </div>
            <div class="top_right" @click="remove">
                <img src="../assets/search.png" alt="">
                <input 
                type="search" 
                placeholder="城市/拼音" 
                @input="input"
                @blur="blur" 
                ref="input">   
            </div>
        </div>
        <div class="select">
                <ul class="select_ul" @click="backUl">
                    <li
                    v-for="(item,index) in cityList"
                    :key="index"
                    >{{ item }}</li>
                </ul>
            </div>
    </div>
</template>
<script>
import fangdou from "../components/fangdou"


export default {
    data(){
        return {
            cityList:[]
        }
    },
    created(){
        let _this = this;
        document.onkeydown = function (e) {
            if (e.keyCode == 13 && !_this.cityList.includes(_this.$refs.input.value)) {
                _this.cityList.push(_this.$refs.input.value)
            }
        }
    },
    computed:{},
    methods:{
        back(){
            this.$router.push({
                path:'/'
            })
        },
        backUl(e){
            this.$store.commit('setCity',{
                localWeather : e.target.innerText
            })
            this.$router.push({
                path:'/'
            })
        },
        input:fangdou(function(e){
            console.log(e.target)
            console.log("匹配数据逻辑")
            },1000),
        remove(){       
            if (this.$refs.input.value == '') {
                this.cityList = []
            }
        },
        blur(){
            if (!/^[\u4e00-\u9fa5]+$/.test(this.$refs.input.value)) {
                return new Promise((resolve)=>{
                    this.$refs.input.value = ''
                    this.$refs.input.placeholder = '请输入城市名（中文）'
                    resolve()
                }).then(()=>{
                    setTimeout(() => {
                        this.$refs.input.placeholder = "城市/拼音"
                    }, 2000);
                })
            }else{
                if([1].includes(1) && !this.cityList.includes(this.$refs.input.value)){
                    this.cityList.push(this.$refs.input.value)
                }
            }
        },

    },
    mounted(){
        this.$refs.input.focus()
    }
}
</script>
<style lang="stylus">
.location
    padding: 0
    width:100%
    margin: 0 auto
    .top 
        height 60px
        background-color #ffcb47
        .top_left
            font-size: 18px
            width 15%
            height: 60px
            float: left
            img 
                width: 20px
                height: 20px
                margin-top: 20px
        .top_right
            margin-top: 18px
            margin-left: 10px
            position: relative
            width 70%
            height: 25px
            float left
            background-color: white
            border-radius: 8px
            img
                position: absolute
                width 12px
                height 12px
                left: 15px
                top: 7px
            input
                border: 0
                height: 25px
                &:focus
                    outline none                   
            .remove
                position: absolute
                width 15px
                height 15px
                left: 220px
                top: 6px 
    .select 
        background-color #eaeaea
        min-height 812px
        .select_ul
            list-style-type  none 
            text-align left
            margin 0
            padding 0
            li
                font-size 15px 
                padding-left 5px
                margin-bottom 5px
                background-color white
                line-height 30px 

</style>