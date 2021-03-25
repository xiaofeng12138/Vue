
function  proxyData(vm,target,key) {
    Object.defineProperty(vm,key,{
        get(){
            //vm.title  ==  vm._data.title  代理拦截
            return vm[target][key]
        },
        set(newValue){
            vm[target][key] = newValue
        }
    })
}


export default proxyData;