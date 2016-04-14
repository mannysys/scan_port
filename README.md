# scan_port
Node.js端口扫描，使用net模块

一、
简介编写一个Node.js端口扫描模块，主要用到Node.js的net模块，同时，我们会使用一些ES6的新语法，
以前的一些Node.js课程已经介绍过一些ES6语法，这个实验主要会用到Promise。

二、net 模块net 模块包含如下内容：
Class: net.Server

Class: net.Socket

net.connect(options[, connectListener])

net.connect(path[, connectListener])

net.connect(port[, host][, connectListener])

net.createConnection(options[, connectListener])

net.createConnection(path[, connectListener])

net.createConnection(port[, host][, connectListener])

net.createServer([options][, connectionListener])

net.isIP()

net.isIPv4()

net.isIPv6()


net.createServer()用于创建socket服务，返回net.Server的实例。
net.connection()和net.createConnection()是工厂函数，返回net.Socket实例并自动连接到传入参数指定的socket。
net.isIP()、net.isIPv4()及net.isIPv6()用于检测IP。


三、编写端口扫描模块既然是端口扫描，我们就不需要创建socket服务了，直接去连接需要扫描的端口，
看能否连接上，能连上说明此端口是打开的，否则此端口没有打开。
新建scanPorts.js文件。


使用Promise可以避免多层回调函数，使得代码更加清晰，非常方便。
下面我们来测试一下吧，创建test.js文件：

运行代码：
$ node test.js

可以看到终端打印出了开放的端口。
一个简单的端口扫描程序就实现了。
