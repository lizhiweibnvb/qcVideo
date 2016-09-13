# qcVideo

你所见过的最精简的javascript模块管理器

## 支持

- 异步加载

``` 
    qcVideo.use('moduleName',()=>{/*回调函数 */})
```


- 定义模块

``` qcVideo('base',()=>{/*定义模块内容*/})
```

- 调用模块

``` 异步：qcVideo.get('base',asyncCallback) 
```

``` 同步：let module =qcVideo.get('base') 
```

- 引用模块：

``` qcVideo('myComponents ',(base)=>{/*base可此处直接使用*/})
```

