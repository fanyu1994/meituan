<template>
    <div class="compC">
        <div class="main">
            <div 
            v-for="(item,index) in bList"
            :key="index"
            :class="{active:item.cl}"
            @click="click(item,$event)">{{ item.title }}</div>
        </div>
        <div 
        class="reset" 
        @click="reset" 
        :class="{select:!rf}">
            重置
        </div>
        <div 
        class="finish" 
        @click="finish()" 
        :class="{select:rf}">
            完成
            <div class="count" v-show="curryCount">
                （已选{{ count }}）
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bList:[],
            count:0,
            rf:true,
            curryCount:false,
            selectMinutes:[],
            selectLength:[],
            sMinutes:0,
            sLength:0
        }
    },
    components:{

    },
    created(){
        this.bList = [
            {
                title:"30分钟以内",
                cl:false,
                num:0
            },
            {
                title:"40分钟以内",
                cl:false,
                num:1
            },
            {
                title:"50分钟以内",
                cl:false,
                num:2
            },
            {
                title:"60分钟以内",
                cl:false,
                num:3
            },
            {
                title:"1km内",
                cl:false,
                num:4
            },
            {
                title:"2km内",
                cl:false,
                num:5
            },
            {
                title:"3km内",
                cl:false,
                num:6
            }
            ,
            {
                title:"5km内",
                cl:false,
                num:7
            }
        ]
    },
    watch:{
        count(){
            if (this.count !== 0) {
                this.curryCount = true
                this.rf = true
            }else{
                this.curryCount = false
            }
        }
    },
    methods:{
        click(params,e){   
            params.cl =  !params.cl
            let tar = e.target.innerText.replace(/[^0-9]/ig,'')
            if (!e.target.className) {
                this.count++ 
                if (tar.length == 2) {
                    this.selectMinutes.push(tar)
                    this.sMinutes = Math.max(...this.selectMinutes)
                }else{
                    this.selectLength.push(tar)
                    this.sLength = Math.max(...this.selectLength)
                }
            }else{
                this.count--
                if (tar.length == 2) {
                    this.selectMinutes.splice(this.selectMinutes.findIndex(item=>item===tar),1)
                    this.sMinutes = Math.max(...this.selectMinutes)
                }else{
                    this.selectLength.splice(this.selectLength.findIndex(item=>item===tar),1)
                    this.sLength = Math.max(...this.selectLength)
                }
            }
        },
        reset(){
            this.rf = false
            this.count =0
            this.curryCount = false
            this.bList = [
                {
                title:"30分钟以内",
                cl:false,
                num:0
                },
                {
                    title:"40分钟以内",
                    cl:false,
                    num:1
                },
                {
                    title:"50分钟以内",
                    cl:false,
                    num:2
                },
                {
                    title:"60分钟以内",
                    cl:false,
                    num:3
                },
                {
                    title:"1km内",
                    cl:false,
                    num:4
                },
                {
                    title:"2km内",
                    cl:false,
                    num:5
                },
                {
                    title:"3km内",
                    cl:false,
                    num:6
                }
                ,
                {
                    title:"5km内",
                    cl:false,
                    num:7
                }
            ]
        },
        finish(){
            this.rf = true
            this.$emit('compD',this.count)
            this.$emit('btn3',this.count,this.sMinutes,this.sLength)
            this.$parent.black = false
        },
    },
}
</script>
<style lang="stylus">
.compC
    width 349px
    height 100px
    position absolute
    left 0
    top 0
    .main
        width 349px
        height 70px
        margin 0 auto
        position absolute
        background-color white
        display flex
        flex-flow row wrap
        justify-content space-around
        font-size 12px
        div
            width 80px
            height 30px
            border-radius 5px
            background-color rgba(245, 245, 245, 1)
            line-height 30px
        .active
            background-color #fbe9d8
            color #ff7703    
    .reset,.finish
        position absolute
        top 70px
        height 30px
        background-color white
        border-top 1px solid rgba(245, 245, 245, 1)
        width 174.5px
        line-height 30px
    .reset
        border-radius 0 0 0 5px
        left 0
    .finish
        border-radius 0 0 5px 0   
        right 0  
        .count
            position absolute
            left 100px
            top 0
            font-size 12px
    .select
        background-color #ff9400 
           

</style>