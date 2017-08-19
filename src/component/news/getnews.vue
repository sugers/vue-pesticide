<template>
    <section>
      <div class="nav">
         <ul>
            <li><a href="">首页</a></li>
            <li><a href="">攻略中心</a></li>
            <li><a href="">赛事中心</a></li>
         </ul>
      </div>


         <div class="change">
               <mt-navbar v-model="selectedTab">
                    <mt-tab-item id="1">选项一</mt-tab-item>
                    <mt-tab-item id="2">选项二</mt-tab-item>
                    <mt-tab-item id="3">选项三</mt-tab-item>
                    <mt-tab-item id="2">选项二</mt-tab-item>
                    <mt-tab-item id="3">选项三</mt-tab-item>
                    <component :type="type" :is="selectedTab"></component>
            </mt-navbar>
         </div>  
    </section>
</template>

<script>
    export default {
            data(){
                return{
                    list:[],
                    selectedTab:'',
                    type:''
                }
            },
            methods:{
               getinfo(){ 
                    
               }
            }
    }
</script>

<style lang="less">
  .nav{
      margin-top:45px;
      width:100%;
      ul{
          list-style:none;
          padding-left:0;
          li{
              height:65px;
              line-height:65px;
              float:left;
              width:33.33%;
              text-align:center;
              background-color:#db9e3f;
              font-size:25px;
              a{
                  color:#fff;
              }
          }
      }
  }

</style>