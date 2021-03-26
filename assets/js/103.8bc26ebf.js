(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{594:function(e,t,r){"use strict";r.r(t);var v=r(6),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"hmaster是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hmaster是什么"}},[e._v("#")]),e._v(" HMaster是什么")]),e._v(" "),r("p",[e._v("HMaster 是 HBase 集群中的主服务器，负责监控集群中的所有 RegionServer，并且是所有元数据更改的接口。")]),e._v(" "),r("p",[e._v("在分布式集群中，HMaster 服务器通常运行在 HDFS 的 NameNode上，HMaster 通过 ZooKeeper 来避免单点故障，在集群中可以启动多个 HMaster，但 ZooKeeper 的选举机制能够保证同时只有一个 HMaster 处于 Active 状态，其他的 HMaster 处于热备份状态。")]),e._v(" "),r("p",[e._v("HMaster 主要负责表和 Region 的管理工作。")]),e._v(" "),r("ol",[r("li",[e._v("管理用户对表的增、删、改、查操作。")])]),e._v(" "),r("p",[e._v("HMaster 提供了下表中的一些基于元数据方法的接口，便于用户与 HBase 进行交互。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("相关接口")]),e._v(" "),r("th",[e._v("功能")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("HBase 表")]),e._v(" "),r("td",[e._v("创建表、删除表、启用/失效表、修改表")])]),e._v(" "),r("tr",[r("td",[e._v("HBase 列表")]),e._v(" "),r("td",[e._v("添加列、修改列、移除列")])]),e._v(" "),r("tr",[r("td",[e._v("HBase 表 Regio")]),e._v(" "),r("td",[e._v("移动 Region、分配和合并 Region")])])])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("管理 RegionServer 的负载均衡，调整 Region 的分布。")])]),e._v(" "),r("li",[r("p",[e._v("Region 的分配和移除。")])]),e._v(" "),r("li",[r("p",[e._v("处理 RegionServer 的故障转移。")])])]),e._v(" "),r("p",[e._v("当某台 RegionServer 出现故障时，总有一部分新写入的数据还没有持久化地存储到磁盘中，因此在迁移该 RegionServer 的服务时，需要从修改记录中恢复这部分还在内存中的数据，HMaster 需要遍历该 RegionServer 的修改记录，并按 Region 拆分成小块移动到新的地址下。")]),e._v(" "),r("p",[e._v("另外，当 HMaster 节点发生故障时，由于客户端是直接与 RegionServer 交互的，且 Meta 表也是存在于 ZooKeeper 当中，整个集群的工作会继续正常运行，所以当 HMaster 发生故障时，集群仍然可以稳定运行。")]),e._v(" "),r("p",[e._v("但是 HMaster 还会执行一些重要的工作，例如，Region 的切片、RegionServer 的故障转移等，如果 HMaster 发生故障而没有及时处理，这些功能都会受到影响，因此 HMaster 还是要尽快恢复工作。 ZooKeeper 组件提供了这种多 HMaster 的机制，提高了 HBase 的可用性和稳健性。")])])}),[],!1,null,null,null);t.default=a.exports}}]);