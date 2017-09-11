## webpack.config.js
1. `resolve：{extentions:['','.js','.jsx']}`//省略后缀名让webpack自动查找匹配
2. 没有`export default app`默认导出的类，在其他文件中引入时要加{}
3. 自动加浏览器前缀的插件`postcss:[require:('autoprefixer')]`
4. `new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com.")`版权信息