###     webpack错误记录、bug总结
####    1.在webpack-dev-server上用了一天时间，现象是server 404not found。
原因：全局outPut配置publicPath需要和devServer.contentBase保持一致，这太难了对于html里引用的是相对路径的情况。     
解决方案：publicPath设置'/'，反正也是前后端分离，html到到server里就行了。    


####   2.使用了MiniCssExtractPlugin插件不更新
原因：配置了hmr也不更新，暂时避免它。    
解决方案：仅在prod里使用它，这是避免了它热更新不来。    
