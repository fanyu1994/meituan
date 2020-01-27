<template>
    <div class="goods">
        <div class="goods_item" @click="goMe" data-value="dpj">
             <img src="/outFood/dapanji.png" alt="">
            <div>范宇大盘鸡</div>
            <div>"味道一绝，下次还来。"</div>
            <div>起送¥16</div>
            <div>配送¥1</div>
            <div>50分钟</div>
            <div>0.127km</div>
            <img src="/outFood/pingfen.png" alt="">
            <!-- 评分 -->
            <div>4.4</div>
            <!-- 月销量 -->
            <div>月售9999+</div>
            <img src="/outFood/diandiandian.png" alt="">
        </div>
        <div
        class="goods_item"
        @click="goMe" data-value="hmj">
             <img src="/outFood/huangmenji.png" alt="">
            <div>范宇黄焖鸡米饭</div>
            <div>"鸡肉很足，业界良心。"</div>
            <div>起送¥15</div>
            <div>配送¥3</div>
            <div>30分钟</div>
            <div>0.17km</div>
            <img src="/outFood/pingfen.png" alt="">
            <!-- 评分 -->
            <div>4.4</div>
            <!-- 月销量 -->
            <div>月售3355</div>
            <img src="/outFood/diandiandian.png" alt="">
        </div>
        <div
        class="goods_item"
        @click="goMe" data-value="hc">
             <img src="/outFood/huicai.png" alt="">
            <div>范宇大烩菜</div>
            <div>"这是我吃过最好吃的砂锅烩菜了！"</div>
            <div>起送¥15</div>
            <div>配送¥1</div>
            <div>30分钟</div>
            <div>0.597km</div>
            <img src="/outFood/pingfen.png" alt="">
            <!-- 评分 -->
            <div>4.3</div>
            <!-- 月销量 -->
            <div>月售3799</div>
            <img src="/outFood/diandiandian.png" alt="">
        </div>
        <div
        class="goods_item"
        v-for="(item,index) in goodsList"
        :key="index">
            <img :src="item.img" alt="">
            <div>{{item.name}}的美食店</div>
            <div>"第四次买了，很不错"</div>
            <div>起送¥{{item.startPrice}}</div>
            <div>配送¥{{item.givePrice}}</div>
            <div>{{item.minutes}}分钟</div>
            <div>{{item.length}}km</div>
            <img src="/outFood/pingfen.png" alt="">
            <!-- 评分 -->
            <div>{{item.grade}}</div>
            <!-- 月销量 -->
            <div>月售{{item.month}}</div>
            <img src="/outFood/diandiandian.png" alt="">
        </div>
    </div>
</template>
<style lang="stylus">
.goods
    background-color rgb(245, 245, 245)
    border-radius 8px
    .goods_item
        border-radius 5px
        width 339px
        height 100px
        font-size 12px
        margin-top 8px
        background-color #f7f7f7
        div
            position absolute
        div:nth-of-type(1)
            left 70px
            top 5px
            font-size 14px
            font-weight 700
        div:nth-of-type(2)
            left 70px
            top 80px
            border-radius 5px
            background-color #f5e7e5
            color #d81e06
        div:nth-of-type(3)
            left 70px
            top 50px
        div:nth-of-type(4)
            left 120px
            top 50px
        div:nth-of-type(5)
            left 255px
            top 28px
            transform scale(0.96)
        div:nth-of-type(6)
            left 295px
            top 30px
        div:nth-of-type(7)
            left 83px
            top 27px  
            color #d81e06
        div:nth-of-type(8)
            left 110px
            top 25px                          
        img:nth-of-type(1)
            width 60px
            height 60px
            border-radius 6px
            position absolute
            left 5px
            top 8px
        img:nth-of-type(2) 
            width 10px
            position absolute
            left 70px
            top 28px
        img:nth-of-type(3) 
            width 15px
            position absolute
            left 320px
            top 5px            
</style>
<script>
export default {
    data(){
        return {
            goodsList:[],
            allList:[]
        }
    },
    created(){},
    mounted(){
        this.goods()
    },
    methods:{
        goods(){
            let _this = this
            this.$http.post('/data/index').then((res)=>{
               _this.goodsList =  _this.allList = res.data.articles
            }).catch((err)=>{
                console.log(err)
            })
        },
        screen(params){
           this.goodsList = this.allList
             if (params.all) {
                switch (params.all) {
                    case '综合排序':
                       break;
                    case '销量优先':
                        this.goodsList.sort((a,b)=>{
                            return b.month - a.month
                        })
                       break;
                    case '距离优先':
                        this.goodsList.sort((a,b)=>{
                            return a.length - b.length
                        })
                       break;   
                    case '速度优先':
                        this.goodsList.sort((a,b)=>{
                            return a.minutes - b.minutes
                        })
                       break; 
                    case '评分优先':
                        this.goodsList.sort((a,b)=>{
                            return b.grade - a.grade
                        })
                       break;   
                    case '起送价最低':
                        this.goodsList.sort((a,b)=>{
                            return a.startPrice - b.startPrice
                        })
                       break;
                    case '配送费最低':
                        this.goodsList.sort((a,b)=>{
                            return a.givePrice - b.givePrice
                        })
                       break;           
                   default:
                       this.goodsList = this.goodsList
                       break;
               }
           }        
            if (params.len>0) {             
                if (params.minutes>0) {  
                    if (params.pin.length!=0) {
                       let arr=[]
                        if (params.pin.includes('4星以上')) {
                            arr.push(this.allList.filter(n=>n.length<params.len)
                            .filter(n=>n.minutes<params.minutes)
                            .filter(n=>n.grade>4))
                            console.log(arr)
                        }
                        if(params.pin.includes('免配送费')){
                            arr.push(this.allList.filter(n=>n.length<params.len)
                                .filter(n=>n.minutes<params.minutes)
                                .filter(n=>n.givePrice==0)) 
                                console.log(arr)
                        }
                        if(params.pin.includes('10元内起送')){
                            arr.push(this.allList.filter(n=>n.length<params.len)
                                .filter(n=>n.minutes<params.minutes)
                                .filter(n=>n.startPrice<10))
                                console.log(arr)
                        }
                        if(params.pin.includes('月售500+')){
                            arr.push(this.allList.filter(n=>n.length<params.len)
                                .filter(n=>n.minutes<params.minutes)
                                .filter(n=>n.month>500))
                                console.log(arr)
                        }
                        
                        for(let i = 1,len = arr.length ;i<len;i++){
                            arr[0] = arr[0].filter(x=>arr[i].includes(x))
                        }
                        this.goodsList = arr[0]    
                    }else{
                        this.goodsList = this.allList.filter(n=>n.length<params.len)
                            .filter(n=>n.minutes<params.minutes)
                            console.log('默认')
                    }
                }else{
                     if (params.pin.length!=0) {
                       let arr=[]
                        if (params.pin.includes('4星以上')) {
                            arr.push(this.allList.filter(n=>n.length<params.len)
                            .filter(n=>n.grade>4))

                        }
                        if(params.pin.includes('免配送费')){
                            arr.push(this.allList.filter(n=>n.length<params.len)
                                .filter(n=>n.givePrice==0)) 

                        }
                        if(params.pin.includes('10元内起送')){
                            arr.push(this.allList.filter(n=>n.length<params.len)
                                .filter(n=>n.startPrice<10))
 
                        }
                        if(params.pin.includes('月售500+')){
                            arr.push(this.allList.filter(n=>n.length<params.len)
                                .filter(n=>n.month>500))
      
                        }
                        
                        for(let i = 1,len = arr.length ;i<len;i++){
                            arr[0] = arr[0].filter(x=>arr[i].includes(x))
                        }
                        this.goodsList = arr[0]    
                    }else{
                        this.goodsList = this.allList.filter(n=>n.length<params.len)
                            .filter(n=>n.minutes<params.minutes)
                            console.log('默认')
                    }
                }
            }else{
                if (params.minutes>0) {  
                    if (params.pin.length!=0) {
                       let arr=[]
                        if (params.pin.includes('4星以上')) {
                            arr.push(this.allList
                            .filter(n=>n.minutes<params.minutes)
                            .filter(n=>n.grade>4))
                           
                        }
                        if(params.pin.includes('免配送费')){
                            arr.push(this.allList
                                .filter(n=>n.minutes<params.minutes)
                                .filter(n=>n.givePrice==0)) 
                            
                        }
                        if(params.pin.includes('10元内起送')){
                            arr.push(this.allList
                                .filter(n=>n.minutes<params.minutes)
                                .filter(n=>n.startPrice<10))
                           
                        }
                        if(params.pin.includes('月售500+')){
                            arr.push(this.allList
                                .filter(n=>n.minutes<params.minutes)
                                .filter(n=>n.month>500))
                           
                        }
                        
                        for(let i = 1,len = arr.length ;i<len;i++){
                            arr[0] = arr[0].filter(x=>arr[i].includes(x))
                        }
                        this.goodsList = arr[0]    
                    }else{
                        this.goodsList = this.allList
                            .filter(n=>n.minutes<params.minutes)
                            console.log('默认')
                    }
                }else{
                     if (params.pin.length!=0) {
                       let arr=[]
                        if (params.pin.includes('4星以上')) {
                            arr.push(this.allList
                            .filter(n=>n.grade>4))

                        }
                        if(params.pin.includes('免配送费')){
                            arr.push(this.allList
                                .filter(n=>n.givePrice==0)) 

                        }
                        if(params.pin.includes('10元内起送')){
                            arr.push(this.allList
                                .filter(n=>n.startPrice<10))
 
                        }
                        if(params.pin.includes('月售500+')){
                            arr.push(this.allList
                                .filter(n=>n.month>500))
      
                        }
                        
                        for(let i = 1,len = arr.length ;i<len;i++){
                            arr[0] = arr[0].filter(x=>arr[i].includes(x))
                        }
                        this.goodsList = arr[0]    
                    }else{
                        this.goodsList = this.allList
                            console.log('默认')
                    }
                }
            }
           
        },
        goMe(e){
            let data = e.target.getAttribute('data-value')
            this.$router.push({
                path:`/loading/${data}`
            })
        }
    }
}
</script>