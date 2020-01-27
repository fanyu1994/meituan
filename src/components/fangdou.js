export default function fangdou(func,waitTime){
        let waiter;
        let rtn = function(){
            let args = [].slice.apply(arguments)
            let context = this
            if(waiter){
                clearTimeout(waiter)
            }
            waiter = setTimeout(()=>{
                func.apply(context,args)
            },waitTime)
        }
        return rtn
    }
