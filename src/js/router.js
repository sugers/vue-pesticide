 //对外导出一个router实例
import VueRouter from 'vue-router';
import index from '../component/index/index.vue';
import news from '../component/news/getnews.vue'


export default new VueRouter({
    routes:[
           {path:'/',redirect:'/index'},
           {path:'/index',component:index},
           {path:'/news/getnews/',component:news}
    ]
})