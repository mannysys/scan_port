/**
 * Created by zhoujialin on 2016/4/14.
 */
'use strict';

const net = require('net');

// 连接服务端
const client = net.connect({port: 8124}, () => {
    console.log('connected to server!');
    client.write('world!\r\n');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});