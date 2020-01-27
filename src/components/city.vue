<template>
    <div class="city">
        <ul class="cityList">
            <li
            @click="select">{{course.city}}</li>
        </ul>
    </div>
</template>
<script>
export default {
   props:{
       course:{
           type:Object,
           required:true 
       }
   },
   methods:{
       select(){
           this.$emit("select",this.course)
       }
   }
}
</script>  
<style lang="stylus">
.city
    .cityList
        list-style none
        text-align left
        
</style>