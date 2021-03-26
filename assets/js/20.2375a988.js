(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{508:function(e,a,t){"use strict";t.r(a);var o=t(6),d=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"hdfs分布式文件系统简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdfs分布式文件系统简介"}},[e._v("#")]),e._v(" HDFS分布式文件系统简介")]),e._v(" "),t("p",[e._v("在大数据时代，需要处理分析的数据集的大小已经远远超过了单台计算机的存储能力，因此需要将数据集进行分区并存储到若干台独立的计算机中。但是，分区存储的数据不方便管理和维护，迫切需要一种文件系统来管理多台机器上的文件，这就是分布式文件系统。")]),e._v(" "),t("p",[e._v("分布式文件系统是一种允许文件通过网络在多台主机上进行分享的文件系统，可让多台机器上的多用户分享文件和存储空间。")]),e._v(" "),t("p",[e._v("HDFS 是 Hadoop 的一个分布式文件系统，是 Hadoop 应用程序使用的主要分布式存储。HDFS 被设计成适合运行在通用硬件上的分布式文件系统。")]),e._v(" "),t("p",[e._v("在 HDFS 体系结构中有两类结点：一类是 NameNode，又叫“名称结点”；另一类是 DataNode，又叫“数据结点”。这两类结点分别承担 Master 和 Worker 具体任务的执行。")]),e._v(" "),t("p",[e._v("HDFS 总的设计思想是分而治之，即将大文件和大批量文件分布式存放在大量独立的服务器上，以便采取分而治之的方式对海量数据进行运算分析。")]),e._v(" "),t("p",[e._v("HDFS 是一个主/从体系结构，从最终用户的角度来看，它就像传统的文件系统一样，可以通过目录路径对文件执行 CRUD（Create、Read、Update 和 Delete）操作。但由于分布式存储的性质，HDFS 集群拥有一个 NameNode 和一些 DataNode。NameNode 管理文件系统的元数据，DataNode 存储实际的数据。")]),e._v(" "),t("p",[e._v("客户端通过同 NameNode 和 DataNode 的交互来访问文件系统。客户端通过联系 NameNode 来获取文件的元数据，而真正的文件 I/O 操作是直接和 DataNode 交互进行的。")]),e._v(" "),t("p",[e._v("HDFS 主要针对“一次写入，多次读取”的应用场景，不适合实时交互性很强的应用场景，也不适合存储大量小文件。")])])}),[],!1,null,null,null);a.default=d.exports}}]);