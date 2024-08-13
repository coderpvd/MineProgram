Page({
    data:{
        name:'pvd',
        age:18,
        students:[
            {id:1,name:'pvd',age:18},
            {id:2,name:'pvd1',age:19},
            {id:3,name:'pvd2',age:20},
            {id:4,name:'pvd3',age:21}
        ],
        counter:0
    },
    hedleBtnClick(){
        // console.log('+1')
        // this.counter++
        this.setData({
            counter:this.data.counter+1  //setData的方法传递一个字面量对象  属性：传入当前data中的数据
        })
    },
    hedleSubClick(){
        // console.log('-1')
        this.setData({
            counter:this.data.counter-1
        })
    }
})