import  Vue from 'vue'


let vm = new Vue({
    el:'#app',
    data(){
        return {
            title:"学生列表",
            classNum:2,
            total:2,
            teachers:['张三','李四'],
            students:[
                {
                    id:1,
                    name:'小红',
                },
                {
                    id:2,
                    name:'小明',
                },
            ]
        }
    }
})


console.log(vm.title)