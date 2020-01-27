<template>
    <div class="all">
        <ul>
            <li 
            v-for="(item,index) in aList"
            :key="index"
            @click="click(item)"
            :class="{'active':item.num == count}">{{ item.title }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            aList:[],
            count:0
        }
    },
    components:{},
    created(){
        this.aList = [
            {
                title:"综合排序",
                num:0
            },
            {
                title:"销量优先",
                num:1
            },
            {
                title:"距离优先",
                num:2
            },
            {
                title:"速度优先",
                num:3
            },
            {
                title:"评分优先",
                num:4
            },
            {
                title:"起送价最低",
                num:5
            },
            {
                title:"配送费最低",
                num:6
            },
            {
                title:"人均高到低",
                num:7
            },
        ]
    },
    methods:{
        click(params){
            this.$emit('btn1',params)
            this.$parent.black = false
            this.count = params.num
        }
    }
}
</script>
<style lang="stylus">
.all
    position absolute
    left 0
    top 0
    background-color white
    border-radius 0 0 10px 10px
    width 349px
    ul
        
        list-style none
        margin:0
        padding-left 8px
        text-align left 
        line-height 40px
        font-size 13px
        .active
            color red
</style>