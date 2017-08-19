<template>
 <section class="nav">
       <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,i) in list " :key='item.id' >
            <router-link :to="item.navUrl">
            <span class="mui-icon-extra mui-icon-extra-grech"></span>
                <div class="mui-media-body">{{item.navTitle}}</div>
            </router-link>
        </li>
                
    </ul>
 </section>
 
</template>

<script>
import config from '../../js/config.js';
    export default {
         data(){
             return{
                 list:[]
             }
         },
         methods:{
             getnavlist(){
                 let url =config.navlist
                 this.$http.get(url).then(function(resp){
                     if(resp.body.status==0){
                         this.list=resp.body.message
                     }
                 })
             }
         },
         created(){
             this.getnavlist()
         }
    }
</script>

<style lang="less">
    .nav{
       img{
           width:20px;
           height:20px;
       }
       .mui-grid-view.mui-grid-9 .mui-table-view-cell {
               border-right: 1px solid #d4d9de;
               border-bottom: 1px solid #d4d9de;
           
       }
   }
</style>