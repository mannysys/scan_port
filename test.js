/**
 * Created by zhoujialin on 2016/4/14.
 */
'use strict';

const scanPorts = require('./scanPorts');

scanPorts('127.0.0.1', 1, 65535, (ports) => {

   console.log('open ports£º', ports);

});