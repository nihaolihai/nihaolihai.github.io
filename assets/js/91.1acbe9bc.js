(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{582:function(t,o,r){"use strict";r.r(o);var a=r(6),e=Object(a.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"hbase-thrift协议编程入门教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hbase-thrift协议编程入门教程"}},[t._v("#")]),t._v(" HBase(Thrift协议编程入门教程)")]),t._v(" "),r("p",[t._v("Thrift 是一个软件框架，用来进行可扩展且跨语言的服务的开发。Thrift 定义了一种描述对象和服务的接口定义语言（Interface Definition Language, IDL），它先通过 IDL 来定义 RPC 的接口和数据类型，再通过编译器生成不同语言的代码，并由生成的代码负责 RPC 协议层和传输层的实现。")]),t._v(" "),r("p",[t._v("Thrift 支持的语言有 C++、Java、Python、PHP 等。下面将使用 Python 语言来实现通过 Thrift 客户端访问 HBase，这种方式完全脱离了 Java 和 JVM。")]),t._v(" "),r("p",[t._v("Thrift 实际上是实现了 C/S 模式，通过代码生成工具将接口定义文件生成服务器端和客户端代码，从而实现服务端和客户端跨语言的支持，例如，客户端用 Python 实现，服务器使用 Java 实现。用户在Thirft描述文件中声明自己的服务，这些服务经过编译后会生成相应语言的代码文件，然后用户实现服务即可。")]),t._v(" "),r("p",[t._v("Thrift 包含了三个重要的组件，分别为 protocal、transpor t和 server。 其中，protocol 是协议层，用来定义数据的传输格式；transport 是传输层，定义数据的传输方式，可以为 TCP/IP 传输也可以是内存共享的方式；server 定义支持的服务模型。")]),t._v(" "),r("p",[t._v("下面来看如何使用 Thrift 生成 Python 语言的客户端访问 HBase。\nHBase 客户端环境部署\n使用 Python 调用 HBase，需要启动 Thrift 服务，因此，需要先安装 Thrift。由于 Linux 操作系统中没有内置 Thrift 的安装包，因此需要手工建立 Thrift。")]),t._v(" "),r("p",[t._v("从 Thrift 官网上下载源码 tar 包，并解压到常用目录下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("[root@localhost local]# wget http://www.apache.org/dyn/closer.cgi?path=/thrift/O.11.0/thrift-0.11.0.tar.gz\n[root@localhost local]#tar -xzvf thrift-0..0.tar.gz\n")])])]),r("p",[t._v("在编译安装 Thrift 之前，需要安装依赖的库，如 Automake、LibTool、Bison、Boost 等，具体依赖库的安装参考 Thrift 官网安装手册，依赖库下载完后，即可编译并安装 Thrift：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("[root@localhost thrift-0.11.0]# ./configure\n[root@localhost thrift-0.11.0]# make\n[root@localhost thrift-0.11.0]# make install\n\n通过调用 thrift 命令可以验证安装是否成功：\n[root@localhost ~]# thrift -version\nThrift version 0.11.0\n\nHBase 的源代码中，hbase.thrift 文件描述了 HBase 服务 API 和有关对象的 IDL 文件，需要使用 thrift 命令对此文件进行编译，生成 Python 连接 HBase 的库包。\n\nHbase.thrift 文件在 hbase-1.2.6/hbase- thrift/src/main/resources/org/apache/hadoop/hbase/thrift 目录下，编译操作如下:\n//创建目录\n[root@localhost local] # mkdir pythonhbase\n//切换到该目录下\n[root@localhost local]# cd pythonhbase\n//执行 thrift 生成 HBase 的 Python 库\n[root@localhost pythonhbase]#thrift --gen py . . /hbase-1.2.6/hbase-thrift/src/main/ resources/org/apache/hadoop/hbase/thrift/Hbase.thrift\n")])])]),r("p",[t._v("生成的库文件在 gen-py 的子目录下，如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("[root@localhost gen-py]# find .\n./hbase\n./hbase/init_.py\n./hbase/ttypes.py\n./hbase/constants.py\n./hbase/Hbase.py\n./hbase/Hbase-remote\n./hbase/_init_.pyc\n./hbase/Hbase.pyc\n./hbase/ttypes.pyc\n./_init_.py\n")])])]),r("p",[t._v("将 gen-py 目录下的 hbase 子目录复制到工程目录 python3.6/site-packages/hbase下直接使用，如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('[root@localhost pythonhbase.py]# python\nPython 2.7.5 (default, Apr 11 2018, 07:36:10)\n[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux2\nType "help", "copyright", "credits" or "license" for more information.\n>>> import thrift\n>>>imp or t hbase\n')])])]),r("p",[t._v("这些命令执行成功后，表示使用 Python 语言访问 HBase 的客户端已经完成。\nHBase Thrift 服务启动\n在服务器上使用 star-hbase.sh 命令启动 HBase 服务，使用 jps 命令确定 HBase 已经启动并正在运行后，启动 Thrift服务，使用默认的设置即可正常工作，如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("[root@localhost bin]# jps\n66051 HQuorumPeer\n66391 Jps\n65577 SecondaryNameNode\n65401 DataNode\n66152 HMaster\n66280 HRegionServer\n65262 NameNode\n[rootQlocalhos t bin：] # ./hbase t hrift start\n...\n2018-07-05 17:05:10,431 INFO [main] thrift.ThriftServerRunner: starting TBoundedThreadPoolServer on /0.0.0.0:9090 with readTimeout 60000ms; min worker threads=16z max worker threads=1000z max queued requests=1000\n")])])]),r("p",[t._v("目前客户端与服务器都已准备妥善，接下来测试其是否可用。在客户端的Python项目目录下 打开一个终端窗口，再次启动Python：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("[root@localhost pythonhbase]# python\nPython 2.7.5 (defaultA Apr 11 2018, 07:36:10)\n[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux2\nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\n>>>from thrift.transport import TSocket\n>>>from thrift.protocol import TBinaryProtocol\n>>>from thrift import Thrift\n>>>from hbase import Hbase\n>>>transport = TSocket.TSocket('localhost', 9090)\n>>>protocol = TBinaryProtocol.TBinaryProtocol(transport)\n>>>client = Hbase.Client (protocol)\n>>>transport. open ()\n>>>result = client.getTableNames()\n>>>print result\n[ 'base_thrift', 't1', 't2', 'test' ]\n>>>transport.close ()\n")])])]),r("p",[t._v("以上代码简单地完成了使用Thrift客户端访问HBase,另外还有创建表、插入数据、查询数据等操作。用户可查询 Python 项目下的 hbase/hbase.py 文件，里面提供了各种操作方法。")])])}),[],!1,null,null,null);o.default=e.exports}}]);