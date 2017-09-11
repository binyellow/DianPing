1. 基本的webpack配置
2. 热更新，自动打开浏览器
3. 样式和图片分离

## babel是语法转换的 对应的要转换React的JSX和ES最新语法
安装`npm i babel-preset-react babel-preset-latest --save-dev`
配置
```
{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        presets: ['react', 'latest']
    }
}
```
## 自动生成html依赖和模版
`npm i html-webpack-plugin --save-dev`  
在plugins中引用并初始化  
```
plugins:[
	new htmlWebpackPlugin({
		filename:''//名称
		template:''//模版
		inject:'head/body'//js放在哪里
		title:'hello wo zidingyi de'
		chunks:['','']
	})
]
```  
1. 怎么在模版中取到自定义的title值呢？模版语言：`<%=htmlWebpackPlugin.option.title%>`
2. 设置上线后的js引用地址，在output:{publicpath:'https://..'}
3. 怎么压缩代码：minify:{}[参数说明](https://github.com/kangax/html-minifier#options-quick-reference)
4. 怎么生成多页面并为多页面制定特定的js：chunks参数

### htmlWebpackPlugin的详细说明和使用
1. 他包含2个参数
	- files
	- options
2. 我们用来把相应的js关联进来，用模版语言的for循环
3. 如果有公共的js代码，为了减少http请求，可以用`compliation.assets[htmlWebpackplugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length)]`来获取源码

## React-Router:(目前是4，有时间可以看看)
1. 最外层包裹Router Route可以嵌套
2. IndexRoute 默认路由
3. <Link to='path'/>相当于a,路由跳转还可以用hashHistory.push()  

	```
	class RouteMap extends React.Component{
	    render(){
	        return(
	            <Router history={this.props.history}>
	                <Route path="/" component={APP}>
	                    <IndexRoute component={Home}></IndexRoute>
	                    <Route path="list" component={List}></Route>
	                    <Route path="detail/:id" component={Detail}></Route>
	                    <Route path="*" component={NotFound}></Route>
	                </Route>
	            </Router>
	        )
	    }
	}
	export default RouteMap
	```

4. 由上可知
	- Route的component就是指向关系
	- `detail/:id`的id是参数，可以由自组件的`this.props.params.id`获得

## 优化方案:
1. 性能检测：`npm i react-addons-perf --save`