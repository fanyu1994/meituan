export default{
    jieliu(fn,time){
        let timer;
        return function () {
            let args = [].slice.apply(arguments)
            if (timer) {
                return 
            }
            timer = setTimeout(() => {
                fn.apply(this,arguments)
                timer = null
            }, time);
        }
    }
}