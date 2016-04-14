/**
 * Created by zhoujialin on 2016/4/14.
 */
'use strict';

const net = require('net');


//创建socket服务端
const server = net.createServer((c) => {

    console.log('client connected');

    c.on('end', () => {
       console.log('client disconnected');
    });

    c.write('hello\r\n');
    c.pipe(c);

});

// 监听错误事件
server.on('error', (err) => {
   throw err;
});
// 监听8124端口
server.listen(8124, () => {
   console.log('sever bound');
});























