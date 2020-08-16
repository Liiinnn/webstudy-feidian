# Node.js-黑马程序员视频总结

## 1.文件的读写

```javascript
//  1.使用fs核心模块
var fs = require('fs');

// 2.读取文件
//     第一个参数就是要读取的文件路径
//     第二个参数是一个回调函数
//     成功
//       data 数据
//       err null
//     失败
//       data undefined 没有数据
//       err 错误对象
fs.readFile('./data/a.txt',function(err,data){
   if(err){
        console.log('文件读取失败');
   }else{
        // 文件中存储的都是二进制数据
        // 通过toString()方法转换为我们能认识的字符
        // 可以结合服务器通过读取文件来实现发送页面
         console.log(data.toString());
    }
})
// 3.将数据写入文件
//     第一个参数：文件路径
//     第二个参数：文件内容
//     第三个参数：回调函数
fs.writeFile('./data/a.txt','写入文件的内容',function(err){
   if(err){
        console.log('写入失败');
   }
    else{
         console.log('写入成功');
    }
})
```



## 2.HTTP

```javascript
// 1.加载http核心模块
var http = require('http');
var fs = require('fs');

// 2.使用http.createServer()创建一个web服务器
var server = http.createServer();

// 读取文件时的根目录
var wwwDir = 'D:/app/www'

// 3.触发服务器的request请求事件
//     request 请求事件处理函数，需要接收两个参数：
//         request 请求对象
//             请求对象可以用来获取客户端的一些请求信息，例如请求地址
//         response 响应对象
//             响应对象可以用来给客户端发送响应消息
server.on('request', function (req, res) {
    // 获取当前 url（端口号后面的路径）
    var url = req.url
    // 默认为 /index.html
    var filePath = '/index.html'
    // 如果不是默认 url，则获取当前用户输入的 url
    if (url !== '/') {
        filePath = url
    }
    // 读取文件
    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            // 响应内容只能是字符串或二进制数据
            // 告诉浏览器发送的是什么类型的内容
            // 图片不需要指定编码
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            return res.end('404 NOT Found')
        }
        res.end(data)
    })
})
// 4.绑定端口号，启动服务
server.listen(3000, function () {
    console.log('running')
})
```





## 快捷键

1.打开cmd定位到相对的位置

- 在文件夹所在位置Shift右键然后打开cmd

- Git Bash here也行

2.Tab会自动补齐文件后面的名字

3.在cmd中按↑执行历史记录



## 参考文档

[NodeNote](https://shimo.im/docs/h8rPt8QHW8Jx66t8/read)