# qcVideo

可能是你遇见最精简的js模块管理器

## 功能支持

- 定义模块

```
qcVideo('base',function(){  
    return {
    'fn':function(){
        return 'do something'
        }
    }
   })
```

- 异步加载

```
qcVideo.use('base',(base)=>{
    console.log(base.fn())
})
```

- 调用模块

```
异步: 
qcVideo.get('base',(base){  
console.log(base.fn())  
})
```
    

```
同步：  
console.log('base',qcVideo.get('base'))
```

- 定义+调用：

```
qcVideo('myComponents ',(module1,module2)=>{  
    return {
        'fn1':function(){return module1},
        'fn2':function(){return module2}
    }
})
```

