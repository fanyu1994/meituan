<template>
    <div class="erweima">
        <header>{{name}}</header>
        <div class="middle">
            <img :src=src alt="">
        </div>
        <div class="back" @click="back"><img src="../assets/back.png" alt=""></div>
        <footer>@小宇核心科技</footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            src:'',
            name:''
        }
    },
    created(){},
    mounted(){
       
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    beforeRouteEnter(to,from,next){
        next((vm)=>{
            switch (to.query.name) {
                case 'saoyisao':
                    vm.src = require('../assets/erweima/saoyisao.png');
                    vm.name = '扫一扫'
                    break;
                case 'fukuanma':
                    vm.src = require('../assets/erweima/erweima.png')
                    vm.name = '二维码'
                    break;
                case 'kaifapiao':
                    vm.src = require('../assets/erweima/kaifapiao.png')
                    vm.name = '开发票'
                    break;        
                case 'chenggongjiao':
                   vm.src = require('../assets/erweima/chenggongjiao.png')
                   vm.name = '乘公交'
                    break;
                default:
                    break;
            }
        })
    }
}
</script>
<style lang="stylus">
.erweima    
    padding: 0
    width: 100%
    height 812px
    max-width 375px
    margin: 0 auto
    background-color #ffcb47 
    border-radius 30px 30px 0 0 
    position relative    
    img
        width 300px
        height 300px
        position absolute 
        left 37.5px
        top 305px
        border-radius 30px
    .back
        width 30px
        height 30px 
        position absolute 
        left 10px
        top 10px
        img 
            position absolute 
            left 0
            top 0
            width 50px
            height 50px    
    header
        font-size 50px
    .middle
        margin 0 auto
        height 650px
        width 359px
        background-color white    
    footer 
        width 100%
        height 30px 
        position absolute 
        left 0
        bottom 0
        font-size 12px
        line-height 30px   
</style>  