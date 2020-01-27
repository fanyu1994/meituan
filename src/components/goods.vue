<template>
    <div class="goods">
        <div
        v-for="(item,index) in goodList"
        :key="index"
        class="goods_item">
            <img :src="item.img" alt="" class="item_img">
            <p class="name">{{item.goodName}}</p>
            <div class="desc">{{item.description}}</div>
            <div class="rest">
                <div class="rmb">¥</div>
                {{item.price}}
            </div>
            <div class="num">已售{{number}}</div>
            <img src="indexGoods/ddd.png" alt="" class="ddd">
        </div>
        <div class="wait"><img src="indexGoods/wait.gif" alt="">加载中...</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodList:[],
            number:100
        }
    },
    created(){
        this.$http.get('/json/indexGoods.json').then(res=>{
            let data = JSON.parse(JSON.stringify(res.data))
            let len = data.length
            for(let i = 0;i<len;i++){
                this.goodList.push(data[i])
            }      
        }).catch((err)=>{
            console.log(err)
        })
    },
    mounted(){},
    computed:{},
    methods:{},
}
</script>
<style lang="stylus">
.goods
    display flex
    flex-flow row wrap
    max-width 359px
    justify-content space-around
    background-image linear-gradient(to bottom,white,#efeded)
    align-items center
    .goods_item
        width 165px
        background-color white
        border-radius 6px
        position relative
        .item_img 
            width 165px
            height 150px
            border-radius 6px
        .name
            font-family: "Microsoft YaHei","黑体","宋体",sans-serif;
            font-size 14px
            font-weight 800
        .desc
            font-size 12px 
            font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif 
            height 80px
        .rest
            position absolute
            left 20px  
            bottom 29px
            color red
            font-weight 600
            .rmb
                font-size 12px
                font-weight 300
                position absolute
                left -8px  
                bottom 1px
        .num
            position absolute
            left 8px  
            bottom 5px
            font-size 12px
            transform scale(0.9)
        .ddd
            position absolute                        
            right 3px
            bottom 0px
            width 30px
            height 30px
    .wait
        width 100%
        height 100px
        max-width 359px
        background-color white
        img 
            width 50px
            height 40px           
</style>