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