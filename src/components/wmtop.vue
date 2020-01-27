<template>
    <div class="wm">
        <div class="wm_top" ref="wm">           
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return {      
        }
    },
    props:{
        img:{
            type:String,
            required:true
        }
    },
    mounted(){},
    methods:{
        btn(){
            this.$refs.wm.style=`background-image:url(${this.img});background-color:red`
        },
    }
}
</script>
<style lang="stylus">
.wm
    width 359px
    height 110px
    margin 0 auto
    overflow hidden
    .wm_top 
        width 359px
        height 110px
        background-position 50%
        filter blur(10px)
                        
        
</style>