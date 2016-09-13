# qcVideo

可能是你遇见最精简的js模块管理器

## 功能支持

- 异步加载

```qcVideo.use('moduleName',()=>{/*回调函数 */})```

- 定义模块

```qcVideo('base',()=>{/*定义模块内容*/})```

- 调用模块

```异步：```  
```qcVideo.get('base',(base){```  
```console.log('base',base)```  
```})```
    

```同步：```  
```console.log('base',qcVideo.get('base'))```

- 引用模块：

```qcVideo('myComponents ',(module1,module2)=>{```  
```console.log(module1,module2)```  
```})```

