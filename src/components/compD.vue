<template>
    <div class="compD" name="compD">
        <div class="item_one">
            <header>品质</header>
            <section>
                <div 
                v-for="(item,index) in oneList"
                :key="index"
                :class="{active:item.oneClass}"
                @click="clickOne(item,$event)">{{ item.title }}</div>
            </section>
        </div>
        <div class="item_two">
            <header>特色</header>
            <section>
                 <div 
                v-for="(item,index) in twoList"
                :key="index"
                :class="{active:item.twoClass}"
                @click="clickTwo(item,$event)">{{ item.title }}</div>
            </section>
        </div>
        <div class="item_three">
            <header>实力</header>
            <section>
                 <div 
                v-for="(item,index) in threeList"
                :key="index"
                :class="{active:item.threeClass}"
                @click="clickThree(item,$event)">{{ item.title }}</div>
            </section>
        </div>
        <div class="sudu">速度</div>
        <sudu ref="sudu" @compD='compD'></sudu>
    </div>
</template>
<script>
import sudu from '../components/compC.vue'

export default {
    name:"compD",
    data(){
        return{
            oneList:[],
            twoList:[],
            threeList:[],
            countD:0,
            curryCount:false,
            dList:[]
        }
    },
    components:{
        sudu
    },
    created(){
        this.oneList = [
            {
                title:"4星以上",
                oneClass:false,
                num:0
            },
            {
                title:"品牌商家",
                oneClass:false,
                num:1
            },
        ]
        this.twoList = [
            {
                title:"免配送费",
                twoClass:false,
                num:0
            },
            {
                title:"10元内起送",
                twoClass:false,
                num:1
            },
        ]
        this.threeList = [
            {
                title:"月售500+",
                threeClass:false,
                num:0
            },
            {
                title:"味道不错",
                threeClass:false,
                num:1
            },
        ]
    },
    methods:{
        clickOne(params,e){
            let tar = e.target.innerText
            if (!params.oneClass) {
                params.oneClass = true
                this.$refs.sudu.count ++
                this.dList.push(tar)
            }else{
                params.oneClass = false
                this.$refs.sudu.count --
                this.dList.splice(this.dList.findIndex(item=>item === tar),1)         
            }
            
        },
        clickTwo(params,e){
            let tar = e.target.innerText
            if (!params.twoClass) {
                params.twoClass = true
                this.$refs.sudu.count ++
                this.dList.push(tar)     
            }else{
                params.twoClass = false
                this.$refs.sudu.count --
                this.dList.splice(this.dList.findIndex(item=>item === tar),1)      
            }
        },
        clickThree(params,e){
            let tar = e.target.innerText
            if (!params.threeClass) {
                params.threeClass = true
                this.$refs.sudu.count ++
                this.dList.push(tar)      
            }else{
                params.threeClass = false
                this.$refs.sudu.count --
                this.dList.splice(this.dList.findIndex(item=>item === tar),1)             
            }

        },
        compD(prm){
            this.$emit('btn4',prm,this.dList)
            this.$parent.black = false
        }
    },
}
</script>
<style lang="stylus">
.compD
    position absolute
    left 0
    top 0
    background-color white
    font-size 12px
    div
        header 
            font-weight 200
            text-align left 
            margin-left 10px
        section 
            display flex
            justify-content flex-start
            div
                width 80px 
                height 30px
                background-color #f5f5f5
                margin  2px 0 5px 5px   
                line-height 30px
                border-radius: 5px
            .active
                background-color #fbe9d8
                color #ff7703  
    .item_one
        width 349px
         
    .item_two
        width 349px
        
    .item_three
        width 349px 
    .sudu
        font-weight 200
        text-align left 
        margin-left 10px
        height 20px                  
    .compC
        top 178px

        
</style>