 //对外导出一个router实例
import VueRouter from 'vue-router';



export default new VueRouter({
    routes:[
           {path:'/',redirect:'/index'},
    ]
})