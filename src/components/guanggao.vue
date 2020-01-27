<template>
    <div class="poster">
        <img 
        src="..\assets\guanggao\wait.png" 
        alt="" 
        ref="myimg"
        @mouseover="stop"
        @mouseleave="run"
        @mousedown="down"
        >
        <div 
        v-for="(item,index) in imgList"
        class="zheng"
        :key="index"
        :id="item.title"
        :class='item.id == count-1 ? active:""'
        @click.stop="go(index)"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"active",
            count:0,
            imgList:[],
            timer:undefined,
            
        }
    },
    created(){
        this.imgList = [
            {
                src:require("../assets/guanggao/car.png"),
                id:0,
                title:'car'
            },
            {
                src:require("../assets/guanggao/hai.png"),
                id:1,
                title:'hai'
            },
            {
                src:require("../assets/guanggao/haibao.png"),
                id:2,
                title:'haibao'
            },
            {
                src:require("../assets/guanggao/hua.png"),
                id:3,
                title:'hua'
            },
            {
                src:require("../assets/guanggao/jiaju.png"),
                id:4,
                title:'jiaju'
            },
            {
                src:require("../assets/guanggao/longmao.png"),
                id:5,
                title:'longmao'
            },
            {
                src:require("../assets/guanggao/meijing.png"),
                id:6,
                title:'meijing'
            },
            {
                src:require("../assets/guanggao/renwu.png"),
                id:7,
                title:'renwu'
            },
        ]
    },
    mounted(){
        this.$nextTick(()=>{
            this.time()
            this.$once('hook:beforeDestroy',()=>{
                clearTimeout(this.timer)
            })
        })
    },
    computed:{},
    methods:{
        time(){
            this.timer = setTimeout(() => {
                if (this.count < 8) {           
                    this.$refs.myimg.src = this.imgList[this.count].src;      
                    this.count++
                    this.time()
                }else{  
                    this.count = 0
                    this.$refs.myimg.src = this.imgList[this.count].src;
                    this.count++
                    this.time()
                }
            }, 1500);
        },
        stop(){
            clearTimeout(this.timer);
        },
        run(){
            this.time()
        },
        go(index){
            this.$refs.myimg.src = this.imgList[index].src
            this.count = index
           
        },
        down(e){
            let width = e.target.width/2
            let x = e.offsetX
            if (x<width) {
                
                if (this.count>0) {
                    this.$refs.myimg.src = this.imgList[this.count-1].src
                    this.count-- 
                }
            }else if (x>width) {
                if (this.count<7) {
                    this.$refs.myimg.src = this.imgList[this.count+1].src
                    this.count++
                }
            }
        }
    },
    

}
</script>
<style lang="stylus">
.poster
    width 359px
    height 109px
    background-color white
    position relative
    img 
        border-radius 10px
        width 345px
        height 80px
        position absolute 
        left 7px
        top 20px
    .zheng
        position absolute 
        background-color #b5b2ab
        width 5px
        height 5px
        border-radius 50%
        top 85px
    #car
        left 137px
    #hai
        left 147px
    #haibao
        left 157px
    #hua
        left 167px
    #jiaju
        left 177px
    #longmao
        left 187px
    #meijing
        left 197px
    #renwu
        left 207px
    .active
        width 8px                                    
</style>