/**
 * Created by zhoujialin on 2016/4/14.
 */
'use strict';

const net = require('net');


//����socket�����
const server = net.createServer((c) => {

    console.log('client connected');

    c.on('end', () => {
       console.log('client disconnected');
    });

    c.write('hello\r\n');
    c.pipe(c);

});

// ���������¼�
server.on('error', (err) => {
   throw err;
});
// ����8124�˿�
server.listen(8124, () => {
   console.log('sever bound');
});























