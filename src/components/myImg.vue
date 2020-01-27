<template>
    <div 
    class="myImg" 
    @mouseover="stop" 
    @mouseout="run">       
        <img 
        :src="src" 
        alt="" 
        class="item"
        ref="img"> 
        <ul @click="goli">
            <li
            v-for="(item,index) in list"
            :key="index"
            :title="item.id"
            :class="item.id == count-1?'active':''"></li>
        </ul>   
    </div>
</template>
<style lang="stylus">
.myImg
    width 340px
    height 100px
    position absolute
    top 10px
    img 
        width 340px
        height 100px
        border-radius 10px
    ul
        list-style none
        li
            width 3px
            height 3px
            background-color #d2cece
            position absolute 
            top 88px
            border-radius 50%  
        li:nth-child(1)
            left 140px
        li:nth-child(2)
            left 160px
        li:nth-child(3)
            left 180px
        li:nth-child(4)
            left 200px 
        .active
            width 6px
            background-color white                
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            src:'user/qsmy.jpg',
            timer:null,
            count:1,
            list:[]
        }
    },
    created(){
        this.list=[
            {
                name:'',
                id:0
            },
            {
                name:'',
                id:1
            },
            {
                name:'',
                id:2
            },
            {
                name:'',
                id:3
            },
        ]
        this.$nextTick(()=>{
            this.lunbo()
            this.$once('hook:beforeDestory',()=>{
                clearTimeout(this.timer)
            })
        })
    },
    mounted(){
    },
    methods:{
        stop(){
            clearTimeout(this.timer)
        },
        run(){
            this.lunbo()
        },
        goli(e){
            let target = e.target
            if (target.nodeName.toLowerCase()=='li') {
                clearTimeout(this.timer)
                this.count = Number(target.title)+1
                switch (this.count) {
                    case 1:
                        this.src = 'user/qsmy.jpg'
                        break;
                    case 2:
                        this.src = 'user/redai.jpg'
                        break;
                    case 3:
                        this.src = 'user/huahai.jpg'
                        break;
                    case 4:
                        this.src = 'user/qiangzhi.jpg'
                        break;            
                    default:
                        break;
                }
                this.lunbo()                   
            }
        },
        lunbo(){
            this.timer = setTimeout(() => {
                if (this.count<4) {
                    switch (this.count) {
                        case 1:  
                            this.src = 'user/redai.jpg'
                            this.count++
                            this.lunbo()
                            break;    
                        case 2:
                            this.src = 'user/huahai.jpg'
                            this.count++
                            this.lunbo()
                            break;
                        case 3:
                            this.src = 'user/qiangzhi.jpg'
                            this.count++
                            this.lunbo()
                            break;                           
                        default:
                            break;
                    }
                }else{
                        this.count = 0
                        this.src = 'user/qsmy.jpg'
                        this.count++
                        this.lunbo()
                }
            }, 1500);
        }
    },   
})
</script>