### 一个简单的react＋redux的示例

目前只是一个可以跑起来的雏形

```
npm i
npm run init
npm start
```


#### 目录结构介绍：

* actions 用来获取数据并更新state
* components 用来展示数据的组件
* containers 用来将数据传递给展示组件
* pages 一个页面对应的一个js webpack.entry
* reducers 接收state和action 并处理返回新的state
* tpl 页面对应的模版文件
