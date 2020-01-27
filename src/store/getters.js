export default{
    allGoodsPrice(state){
        // state.goodsAllPrice =0
        //         state.goodsAllNum = 0
        // return state.goodsNumber*state.goodsPrice 
        switch(state.goodsId){
            case 0:
               if(state.reduce){
                state.goodsAllPrice += 25
               }else{
                state.goodsAllPrice -= 25
               }
                state.goodsId = null
                return state.goodsAllPrice 
            case 1:
                if(state.reduce){
                    state.goodsAllPrice += 3
                   }else{
                    state.goodsAllPrice -= 3
                   }
                state.goodsId = null
                return state.goodsAllPrice 
               
            case 2:
                if(state.reduce){
                    state.goodsAllPrice += 3
                   }else{
                    state.goodsAllPrice -= 3
                   }
                   state.goodsId = null   
                return state.goodsAllPrice 
               
            case 3:
                if(state.reduce){
                    state.goodsAllPrice += 59
                   }else{
                    state.goodsAllPrice -= 59
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                       
            case 4:
                if(state.reduce){
                    state.goodsAllPrice += 40
                   }else{
                    state.goodsAllPrice -= 40
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                   
            case 5:
                if(state.reduce){
                    state.goodsAllPrice += 49
                   }else{
                    state.goodsAllPrice -= 49
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                   
            case 6:
                if(state.reduce){
                    state.goodsAllPrice += 20
                   }else{
                    state.goodsAllPrice -= 20
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                   
            case 7:
                if(state.reduce){
                    state.goodsAllPrice += 18
                   }else{
                    state.goodsAllPrice -= 18
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                   
            case 8:
                if(state.reduce){
                    state.goodsAllPrice += 7
                   }else{
                    state.goodsAllPrice -= 7
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                   
            case 9:
                if(state.reduce){
                    state.goodsAllPrice += 7
                   }else{
                    state.goodsAllPrice -= 7
                   }
                   state.goodsId = null
                return state.goodsAllPrice
               
            case 10:
                if(state.reduce){
                    state.goodsAllPrice += 3.5
                   }else{
                    state.goodsAllPrice -= 3.5
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                       
            case 11:
                if(state.reduce){
                    state.goodsAllPrice += 3.5
                   }else{
                    state.goodsAllPrice -= 3.5
                   }
                   state.goodsId = null
                return state.goodsAllPrice
                   
            case 12:  
                state.goodsId = null
                return state.goodsAllPrice   
            case 13:
                state.goodsId = null
                return state.goodsAllPrice 
        }
        
    }
}