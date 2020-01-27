export default{
    setCity(state,v){
        state.localWeather = v.localWeather
    },
    setWeather(state,v){
        state.weather = v.weather
    },
    setTemperature(state,v){
        state.temperature = v.temperature
    },
    setGoods(state,v){
        state.goodsId = v.goodsId
        state.goodsPrice = v.goodsPrice
        state.reduce = true
        state.goodsAllNum++
        // state.rxNum++
        switch(state.goodsId){
            case 0:
                state.rxNum++
                state.fydNum++
                state.num0++
                break
            case 1:
                state.rxNum++
                state.zsNum++
                state.num1++
                break 
            case 2:
                state.rxNum++
                state.zsNum++
                state.num2++
                break 
            case 3:
                state.xpNum++
                state.num3++
                break 
            case 4:
                state.xpNum++
                state.num4++
                break 
            case 5:
                state.fydNum++
                state.num5++
                break 
            case 6:
                state.fyxNum++
                state.num6++
                break 
            case 7:
                state.fyxNum++
                state.num7++
                break 
            case 8:
                state.lcNum++
                state.num8++
                break 
            case 9:
                state.lcNum++
                state.num9++
                break
            case 10:
                state.jsNum++
                state.num10++
                break 
            case 11:
                state.jsNum++
                state.num11++
                break                                           
        }
    },
    setGoodsR(state,v){
        state.goodsId = v.goodsId
        state.goodsPrice = v.goodsPrice
        state.reduce = false
        state.goodsAllNum--
        switch(state.goodsId){
            case 0:
                state.rxNum--
                state.fydNum--
                state.num0--
                break
            case 1:
                state.rxNum--
                state.zsNum--
                state.num1--
                break 
            case 2:
                state.rxNum--
                state.zsNum--
                state.num2--
                break 
            case 3:
                state.xpNum--
                state.num3--
                break 
            case 4:
                state.xpNum--
                state.num4--
                break 
            case 5:
                state.fydNum--
                state.num5--
                break 
            case 6:
                state.fyxNum--
                state.num6--
                break 
            case 7:
                state.fyxNum--
                state.num7--
                break 
            case 8:
                state.lcNum--
                state.num8--
                break 
            case 9:
                state.lcNum--
                state.num9--
                break
            case 10:
                state.jsNum--
                state.num10--
                break 
            case 11:
                state.jsNum--
                state.num11--
                break                                           
        }
        
    },
    setCarList(state,v){
        state.carList.push(v)
    },
    removeCarList(state){
        let index=state.carList.findIndex(v=>v.num==0);
        state.carList.splice(index,1);
    //   state.carList.splice(state.carList.findIndex(v),1)
        console.log(123)
    },
    setJiesuan(state,v){
        state.jiesuan = v
    },
    clearCar(state){
        state.rxNum=0,
        state.xpNum=0,
        state. fydNum=0,
        state.fyxNum=0,
        state.lcNum=0,
        state.zsNum=0,
        state.jsNum=0,
        state.goodsPrice=0,
        state.goodsId=null,
        state.goodsAllPrice=0,
        state.goodsAllNum=0,
        state.reduce=null,
        state.carList=[],
        state.jiesuan=false
    }

}