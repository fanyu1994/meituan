<template>
    <div class="compB">
        <ul>
            <li 
            v-for="(item,index) in bList"
            :key="index"
            :class="{active:item.num == count}"
            @click="click(item,$event)">{{ item.title }}</li>
            <keep-alive>
                <component :is="curryCom"></component>
            </keep-alive>
        </ul>
    </div>
</template>
<script>
import one from '../components/one.vue'
import two from '../components/two.vue'
import three from '../components/three.vue'
import four from '../components/four.vue'
import five from '../components/five.vue'
import six from '../components/six.vue'
import seven from '../components/seven.vue'


export default {
    data(){
        return{
            bList:[],
            count:0,
            curryCom:'A',
        }
    },
    components:{
        'A':one,
        'B':two,
        'C':three,
        'D':four,
        'E':five,
        'F':six,
        'M': seven,
    },
    created(){
        this.bList = [
            {
                title:"全部品类",
                num:0,
                k:"A",
            },
            {
                title:"美食",
                num:1,
                k:"B",
            },
            {
                title:"超市便利",
                num:2,
                k:"C",
            },
            {
                title:"生鲜果蔬",
                num:3,
                k:"D",
            },
            {
                title:"送药上门",
                num:4,
                k:"E",
            },
            {
                title:"鲜花绿植",
                num:5,
                k:"F",
            },
            {
                title:"甜点饮品",
                num:6,
                k:"M",
            }
        ]
    },
    methods:{
        click(params,e){
            this.count = params.num
            this.curryCom = params.k
            console.log()
            if (e.target.innerText === '全部品类') {
                this.$emit('btn2',params.title)
            }
        }
    }
}
</script>
<style lang="stylus">
.compB
    position absolute
    left 0
    top 0
    border-radius 0 0 0 10px
    ul
        width 70px
        height 320px
        list-style-type none 
        margin 0
        padding 0
        line-height 40px
        font-size 13px
        text-align center
        background-color rgba(245, 245, 245, 1)
        border-radius 0 0 0 10px
        .active
            color red
            background-color white
        

</style>