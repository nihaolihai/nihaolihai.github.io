(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{917:function(n,t,e){"use strict";e.r(t);var s=e(6),r=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"套接字有哪些类型-socket有哪些类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#套接字有哪些类型-socket有哪些类型"}},[this._v("#")]),this._v(" 套接字有哪些类型？socket有哪些类型？")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("这个世界上有很多种套接字（socket），比如 DARPA Internet 地址（Internet 套接字）、本地节点的路径名（Unix套接字）、CCITT X.25地址（X.25 套接字）等。但本教程只讲第一种套接字——Internet 套接字，它是最具代表性的，也是最经典最常用的。以后我们提及套接字，指的都是 Internet 套接字。\n\n根据数据的传输方式，可以将 Internet 套接字分成两种类型。通过 socket() 函数创建连接时，必须告诉它使用哪种数据传输方式。\nInternet 套接字其实还有很多其它数据传输方式，但是我可不想吓到你，本教程只讲常用的两种。\n流格式套接字（SOCK_STREAM）\n流格式套接字（Stream Sockets）也叫“面向连接的套接字”，在代码中使用 SOCK_STREAM 表示。\n\nSOCK_STREAM 是一种可靠的、双向的通信数据流，数据可以准确无误地到达另一台计算机，如果损坏或丢失，可以重新发送。\n流格式套接字有自己的纠错机制，在此我们就不讨论了。\nSOCK_STREAM 有以下几个特征：\n数据在传输过程中不会消失；\n数据是按照顺序传输的；\n数据的发送和接收不是同步的（有的教程也称“不存在数据边界”）。\n\n可以将 SOCK_STREAM 比喻成一条传送带，只要传送带本身没有问题（不会断网），就能保证数据不丢失；同时，较晚传送的数据不会先到达，较早传送的数据不会晚到达，这就保证了数据是按照顺序传递的。\n\n将面向连接的套接字比喻成传送带\n\n为什么流格式套接字可以达到高质量的数据传输呢？这是因为它使用了 TCP 协议（The Transmission Control Protocol，传输控制协议），TCP 协议会控制你的数据按照顺序到达并且没有错误。\n\n你也许见过 TCP，是因为你经常听说“TCP/IP”。TCP 用来确保数据的正确性，IP（Internet Protocol，网络协议）用来控制数据如何从源头到达目的地，也就是常说的“路由”。\n\n那么，“数据的发送和接收不同步”该如何理解呢？\n\n假设传送带传送的是水果，接收者需要凑齐 100 个后才能装袋，但是传送带可能把这 100 个水果分批传送，比如第一批传送 20 个，第二批传送 50 个，第三批传送 30 个。接收者不需要和传送带保持同步，只要根据自己的节奏来装袋即可，不用管传送带传送了几批，也不用每到一批就装袋一次，可以等到凑够了 100 个水果再装袋。\n\n流格式套接字的内部有一个缓冲区（也就是字符数组），通过 socket 传输的数据将保存到这个缓冲区。接收端在收到数据后并不一定立即读取，只要数据不超过缓冲区的容量，接收端有可能在缓冲区被填满以后一次性地读取，也可能分成好几次读取。\n\n也就是说，不管数据分几次传送过来，接收端只需要根据自己的要求读取，不用非得在数据到达时立即读取。传送端有自己的节奏，接收端也有自己的节奏，它们是不一致的。\n\n流格式套接字有什么实际的应用场景吗？浏览器所使用的 http 协议就基于面向连接的套接字，因为必须要确保数据准确无误，否则加载的 HTML 将无法解析。\n数据报格式套接字（SOCK_DGRAM）\n数据报格式套接字（Datagram Sockets）也叫“无连接的套接字”，在代码中使用 SOCK_DGRAM 表示。\n\n计算机只管传输数据，不作数据校验，如果数据在传输中损坏，或者没有到达另一台计算机，是没有办法补救的。也就是说，数据错了就错了，无法重传。\n\n因为数据报套接字所做的校验工作少，所以在传输效率方面比流格式套接字要高。\n\n可以将 SOCK_DGRAM 比喻成高速移动的摩托车快递，它有以下特征：\n强调快速传输而非传输顺序；\n传输的数据可能丢失也可能损毁；\n限制每次传输的数据大小；\n数据的发送和接收是同步的（有的教程也称“存在数据边界”）。\n\n众所周知，速度是快递行业的生命。用摩托车发往同一地点的两件包裹无需保证顺序，只要以最快的速度交给客户就行。这种方式存在损坏或丢失的风险，而且包裹大小有一定限制。因此，想要传递大量包裹，就得分配发送。\n\n将无连接套接字比喻成摩托车快递\n\n另外，用两辆摩托车分别发送两件包裹，那么接收者也需要分两次接收，所以“数据的发送和接收是同步的”；换句话说，接收次数应该和发送次数相同。\n\n总之，数据报套接字是一种不可靠的、不按顺序传递的、以追求速度为目的的套接字。\n\n数据报套接字也使用 IP 协议作路由，但是它不使用 TCP 协议，而是使用 UDP 协议（User Datagram Protocol，用户数据报协议）。\n\nQQ 视频聊天和语音聊天就使用 SOCK_DGRAM 来传输数据，因为首先要保证通信的效率，尽量减小延迟，而数据的正确性是次要的，即使丢失很小的一部分数据，视频和音频也可以正常解析，最多出现噪点或杂音，不会对通信质量有实质的影响。\n注意：SOCK_DGRAM 没有想象中的糟糕，不会频繁的丢失数据，数据错误只是小概率事件。\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);