(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{890:function(n,e,s){"use strict";s.r(e);var c=s(6),r=Object(c.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"tcp协议的粘包问题-数据的无边界性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议的粘包问题-数据的无边界性"}},[this._v("#")]),this._v(" TCP协议的粘包问题（数据的无边界性）")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('上节我们讲到了socket缓冲区和数据的传递过程，可以看到数据的接收和发送是无关的，read()/recv() 函数不管数据发送了多少次，都会尽可能多的接收数据。也就是说，read()/recv() 和 write()/send() 的执行次数可能不同。\n\n例如，write()/send() 重复执行三次，每次都发送字符串"abc"，那么目标机器上的 read()/recv() 可能分三次接收，每次都接收"abc"；也可能分两次接收，第一次接收"abcab"，第二次接收"cabc"；也可能一次就接收到字符串"abcabcabc"。\n\n假设我们希望客户端每次发送一位学生的学号，让服务器端返回该学生的姓名、住址、成绩等信息，这时候可能就会出现问题，服务器端不能区分学生的学号。例如第一次发送 1，第二次发送 3，服务器可能当成 13 来处理，返回的信息显然是错误的。\n\n这就是数据的“粘包”问题，客户端发送的多个数据包被当做一个数据包接收。也称数据的无边界性，read()/recv() 函数不知道数据包的开始或结束标志（实际上也没有任何开始或结束标志），只把它们当做连续的数据流来处理。\n\n下面的代码演示了粘包问题，客户端连续三次向服务器端发送数据，服务器端却一次性接收到所有数据。\n\n服务器端代码 server.cpp：\n#include <stdio.h>\n#include <windows.h>\n#pragma comment (lib, "ws2_32.lib")  //加载 ws2_32.dll\n#define BUF_SIZE 100\nint main(){\n    WSADATA wsaData;\n    WSAStartup( MAKEWORD(2, 2), &wsaData);\n    //创建套接字\n    SOCKET servSock = socket(AF_INET, SOCK_STREAM, 0);\n    //绑定套接字\n    sockaddr_in sockAddr;\n    memset(&sockAddr, 0, sizeof(sockAddr));  //每个字节都用0填充\n    sockAddr.sin_family = PF_INET;  //使用IPv4地址\n    sockAddr.sin_addr.s_addr = inet_addr("127.0.0.1");  //具体的IP地址\n    sockAddr.sin_port = htons(1234);  //端口\n    bind(servSock, (SOCKADDR*)&sockAddr, sizeof(SOCKADDR));\n    //进入监听状态\n    listen(servSock, 20);\n    //接收客户端请求\n    SOCKADDR clntAddr;\n    int nSize = sizeof(SOCKADDR);\n    char buffer[BUF_SIZE] = {0};  //缓冲区\n    SOCKET clntSock = accept(servSock, (SOCKADDR*)&clntAddr, &nSize);\n    Sleep(10000);  //注意这里，让程序暂停10秒\n    //接收客户端发来的数据，并原样返回\n    int recvLen = recv(clntSock, buffer, BUF_SIZE, 0);\n    send(clntSock, buffer, recvLen, 0);\n    //关闭套接字并终止DLL的使用\n    closesocket(clntSock);\n    closesocket(servSock);\n    WSACleanup();\n    return 0;\n}\n\n客户端代码 client.cpp：\n#include <stdio.h>\n#include <stdlib.h>\n#include <WinSock2.h>\n#include <windows.h>\n#pragma comment(lib, "ws2_32.lib")  //加载 ws2_32.dll\n#define BUF_SIZE 100\nint main(){\n    //初始化DLL\n    WSADATA wsaData;\n    WSAStartup(MAKEWORD(2, 2), &wsaData);\n    //向服务器发起请求\n    sockaddr_in sockAddr;\n    memset(&sockAddr, 0, sizeof(sockAddr));  //每个字节都用0填充\n    sockAddr.sin_family = PF_INET;\n    sockAddr.sin_addr.s_addr = inet_addr("127.0.0.1");\n    sockAddr.sin_port = htons(1234);\n    //创建套接字\n    SOCKET sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP);\n    connect(sock, (SOCKADDR*)&sockAddr, sizeof(SOCKADDR));\n    //获取用户输入的字符串并发送给服务器\n    char bufSend[BUF_SIZE] = {0};\n    printf("Input a string: ");\n    gets(bufSend);\n    for(int i=0; i<3; i++){\n        send(sock, bufSend, strlen(bufSend), 0);\n    }\n    //接收服务器传回的数据\n    char bufRecv[BUF_SIZE] = {0};\n    recv(sock, bufRecv, BUF_SIZE, 0);\n    //输出接收到的数据\n    printf("Message form server: %s\\n", bufRecv);\n    closesocket(sock);  //关闭套接字\n    WSACleanup();  //终止使用 DLL\n    system("pause");\n    return 0;\n}\n\n先运行 server，再运行 client，并在10秒内输入字符串"abc"，再等数秒，服务器就会返回数据。运行结果如下：\nInput a string: abc\nMessage form server: abcabcabc\n\n本程序的关键是 server.cpp 第31行的代码Sleep(10000);，它让程序暂停执行10秒。在这段时间内，client 连续三次发送字符串"abc"，由于 server 被阻塞，数据只能堆积在缓冲区中，10秒后，server 开始运行，从缓冲区中一次性读出所有积压的数据，并返回给客户端。\n\n另外还需要说明的是 client.cpp 第34行代码。client 执行到 recv() 函数，由于输入缓冲区中没有数据，所以会被阻塞，直到10秒后 server 传回数据才开始执行。用户看到的直观效果就是，client 暂停一段时间才输出 server 返回的结果。\n\nclient 的 send() 发送了三个数据包，而 server 的 recv() 却只接收到一个数据包，这很好的说明了数据的粘包问题。\n\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);