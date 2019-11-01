###     安全性
####    csrf攻击：
1.说明：   
要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。  
2.实现：   
可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。   
token 可以在用户登陆后产生并放于 session 之中，然后在每次请求时把 token 从 session 中拿出，与请求中的 token 进行比对。  
[参考](https://www.ibm.com/developerworks/cn/web/1102_niugang_csrf/index.html)  

不要给http get加token，get不修改数据。 
只给修改数据的http put/post/delete 加hidden token。  
如果更保险的话，每次修改数据前，再动态获取token。 

####    