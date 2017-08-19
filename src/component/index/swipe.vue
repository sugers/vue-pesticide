<template>
   <section class="swipe"> 
       <mt-swipe :auto="4000" :show-indicators="false">
            <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item, i) in list" :key="i">
                <a :href="item.url">
                    <img :src="item.lunboImgpath" alt="王者猴教学">
                </a>
                 <h2>{{item.lunboTitle}}</h2>
            </mt-swipe-item>
      </mt-swipe>
       </mt-swipe>
   </section>
</template>

<script>
import config from '../../js/config.js'
    export default {
        data(){
            return {
                list:[],
                type:"Home"
            }
        },
        methods:{
            getswipe(){
                let url =`${config.swipe}?type=${this.type}`
                console.log(url)
                this.$http.get(url).then(function(resp){
                    if(resp.body.status==0){
                        this.list=resp.body.message
                    }
                })
            }
        },
        created(){
            this.getswipe()
        }
    }
</script>

<style lang="less">
 .swipe{
       height:300px;
       img{
           width:100%;
           height:100%;
       }
       h2{
           position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.96rem;
            line-height: 0.96rem;
            background: rgba(0, 0, 0, .6);
            font-size: 0.36rem;
            color: #fff;
            text-align: left;
            padding-left: .1rem;

       }
   }
</style>