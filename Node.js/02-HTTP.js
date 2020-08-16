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