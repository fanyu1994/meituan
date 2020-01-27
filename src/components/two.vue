<template>
        <div class="two">
        <ul class="two_ul">
            <li 
            v-for="(item,index) in list"
            :key="index"
            @click="click(item)"
            :class="{active:item.num === count}">{{ item.title }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:0,
            list:[]
        }
    },
    created(){
        this.list = [
            {
                title:"全部",
                num:0
            },
            {
                title:"川湘菜",
                num:1
            },
            {
                title:"炸鸡炸串",
                num:2
            },
            {
                title:"快餐便当",
                num:3
            },
            {
                title:"地方菜系",
                num:4
            },
            {
                title:"米粉面馆",
                num:5
            },
            {
                title:"龙虾烧烤",
                num:6
            },
            {
                title:"特色小吃",
                num:7
            },
        ]
    },
    methods:{
        click(params){
            this.count = params.num
            this.$parent.$emit('btn2',params.title)
        }
    }
}
</script>
<style lang="stylus">
.two
    width 279px
    background-color white
    position absolute
    left 70px
    top 0
    border-radius 0 0 10px 0
    .two_ul
        line-height 40px
        background-color white
        .active
            color red
 
</style>