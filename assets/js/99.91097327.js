(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{589:function(e,a,N){"use strict";N.r(a);var o=N(6),d=Object(o.a)({},(function(){var e=this,a=e.$createElement,N=e._self._c||a;return N("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[N("h2",{attrs:{id:"hdfs简明入门教程"}},[N("a",{staticClass:"header-anchor",attrs:{href:"#hdfs简明入门教程"}},[e._v("#")]),e._v(" HDFS简明入门教程")]),e._v(" "),N("p",[e._v("HDFS 主要由 3 个组件构成，分别是 NameNode、SecondaryNameNode 和 DataNode。")]),e._v(" "),N("p",[e._v("HDFS 是以 Master/Slave 模式运行的，其中，NameNode 和 SecondaryNameNode 运行在 Master 节点 上，而 DataNode 运行在 Slave 节点上，所以 HDFS 集群一般由一个 NameNode、一个 SecondaryNameNode 和许多 DataNode 组成。")]),e._v(" "),N("p",[e._v("下面介绍 HDFS 架构中 NameNode、SecondaryNameNode 和 DataNode 的功能。")]),e._v(" "),N("p",[e._v("NameNode\nNameNode 是主服务器，负责管理文件系统的命名空间以及客户端对文件的访问。当客户端请求数据时，仅仅从 NameNode 中获取文件的元数据信息，具体的数据传输不经过 NameNode，而是直接与具体的 DataNode 进行交互。")]),e._v(" "),N("p",[e._v("这里文件的元数据信息记录了文件系统中的文件名和目录名，以及它们之间的层级关系，同时也记录了每个文件目录的所有者及其权限，甚至还记录每个文件由哪些块组成，这些元数据信息记录在文件 fsimage 中，当系统初次启动时，NameNode 将读取 fsimage 中的信息并保存到内存中。")]),e._v(" "),N("p",[e._v("这些块的位置信息是由 NameNode 启动后从每个 DataNode 获取并保存在内存当中的，这样既减少了  NameNode 的启动时间，又减少了读取数据的查询时间，提高了整个系统的效率。")]),e._v(" "),N("p",[e._v("SecondaryNameNode\n从字面上来看，SecondaryNameNode 很容易被当作是 NameNode 的备份节点，其实不然。")]),e._v(" "),N("p",[e._v("NameNode 管理着元数据信息，元数据信息会定期保存到 edits 和 fsimage 文件中。其中的 edits 保存操作日志信息，在 HDFS 运行期间，新的操作日志不会立即与 fsimage 进行合并，也不会存到 NameNode 的内存中，而是会先写到 edits 中。")]),e._v(" "),N("p",[e._v("当 edits 文件达到一定域值或间隔一段时间后触发 SecondaryNameNode 进行工作，这个时间点称为 checkpoint。")]),e._v(" "),N("p",[e._v("SecondaryNameNode 的角色就是定期地合并 edits 和 fsimage 文件，其合并步骤如下。\n在进行合并之前，SecondaryNameNode 会通知 NameNode 停用当前的 editlog 文件， NameNode 会将新记录写入新的 editlog.new 文件中。\nSecondaryNameNode 从 NameNode 请求并复制 fsimage 和 edits 文件。\nSecondaryNameNode 把 fsimage 和 edits 文件合并成新的 fsimage 文件，并命名为 fsimage.ckpto\nNameNode 从 SecondaryNameNode 获取 fsimage.ckpt，并替换掉 fsimage，同时用 edits.new 文件替换旧的 edits 文件。\n更新 checkpoint 的时间。")]),e._v(" "),N("p",[e._v("最终 fsimage 保存的是上一个 checkpoint 的元数据信息，而 edits 保存的是从上个 checkpoint 开始发生的 HDFS 元数据改变的信息。\nDataNode\nDataNode 是 HDFS 中的工作节点，也是从服务器，它负责存储数据块，也负责为客户端提供数据块的读写服务，同时也响应 NameNode 的相关指令，如完成数据块的复制、删除等。")]),e._v(" "),N("p",[e._v("另外， DataNode 会定期发送心跳信息给 NameNode，告知 NameNode 当前节点存储的文件块信息。当客户端给 NameNode 发送读写请求时，NameNode 告知客户端每个数据块所在的 DataNode 信息，然后客户端直接与 DataNode 进行通信，减少 NameNode 的系统开销。")]),e._v(" "),N("p",[e._v("当 DataNode 在执行块存储操作时，DataNode 还会与其他 DataNode 通信，复制这些块到其他 DataNode 上实现冗余。\nHDFS 的分块机制和副本机制\n在 HDFS 中，文件最终是以数据块的形式存储的，而副本机制极大程度上避免了宕机所造成的数据丢失，可以在数据读取时进行数据校验。\n分块机制\nHDFS 中数据块大小默认为 64MB，而一般磁盘块的大小为 512B，HDFS 块之所以这么大，是为了最小化寻址开销。")]),e._v(" "),N("p",[e._v("如果块足够大，从磁盘传输数据的时间会明显大于寻找块的地址的时间，因此，传输一个由多个块组成的大文件的时间取决于磁盘传输速率。")]),e._v(" "),N("p",[e._v("随着新一代磁盘驱动器传输速率的提升，寻址开销会更少，在更多情况下 HDFS 使用更大的块。当然块的大小不是越大越好，因为 Hadoop 中一个 map 任务一次通常只处理一个块中的数据，如果块过大，会导致整体任务数量过小，降低作业处理的速度。")]),e._v(" "),N("p",[e._v("HDFS 按块存储还有如下好处。")]),e._v(" "),N("ol",[N("li",[N("p",[e._v("文件可以任意大，不会受到单个节点的磁盘容量的限制。理论上讲，HDFS 的存储容量是无限的。")])]),e._v(" "),N("li",[N("p",[e._v("简化文件子系统的设计。将系统的处理对象设置为块，可以简化存储管理，因为块大小固定，所以每个文件分成多少个块，每个 DataNode 能存多少个块，都很容易计算。同时系统中 NameNode 只负责管理文件的元数据，DataNode 只负责数据存储，分工明确，提高了系统的效率。")])]),e._v(" "),N("li",[N("p",[e._v("有利于提高系统的可用性。HDFS 通过数据备份来提供数据的容错能力和高可用性，而按照块的存储方式非常适合数据备份。同时块以副本方式存在多个 DataNode 中，有利于负载均衡，当某个节点处于繁忙状态时，客户端还可以从其他节点获取这个块的副本。\n副本机制\nHDFS 中数据块的副本数默认为 3，当然可以设置更多的副本数，这些副本分散存储在集群中，副本的分布位置直接影响 HDFS 的可靠性和性能。")])])]),e._v(" "),N("p",[e._v("操作步骤如下：")]),e._v(" "),N("ol",[N("li",[N("p",[e._v("客户端在向 NameNode 发送写请求之前，先将数据写入本地的临时文件中。")])]),e._v(" "),N("li",[N("p",[e._v("待临时文件块达到系统设置的块大小时，开始向 NameNode 请求写文件。")])]),e._v(" "),N("li",[N("p",[e._v("NameNode 在此步骤中会检查集群中每个 DataNode 状态信息，获取空闲的节点，并在检查客户端权限后创建文件，返回客户端一个数据块及其对应 DataNode 的地址列表。列表中包含副本存放的地址。")])]),e._v(" "),N("li",[N("p",[e._v("客户端在获取 DataNode 相关信息后，将临时文件中的数据块写入列表中的第一个 DataNode，同时第一个 DataNode 会将数据以副本的形式传送至第二个 DataNode，第二个节点也会将数据传送至第三个 DataNode。")])])]),e._v(" "),N("p",[e._v("DataNode 以数据包的形式从客户端接收数据，并以流水线的形式写入和备份到所有的 DataNode 中，每个 DataNode 收到数据后会向前一个节点发送确认信息。 最终数据传输完毕，第一个 DataNode 会向客户端发送确认信息。")]),e._v(" "),N("ol",{attrs:{start:"5"}},[N("li",[e._v("当客户端收到每个 DataNode 的确认信息时，表示数据块已经持久化地存储在所有 DataNode 当中，接着客户端会向 NameNode 发送确认信息。如果在第（4 ）步中任何一个 DataNode 失败，客户端会告知 NameNode，将数据备份到新的 DataNode 中。")])])])}),[],!1,null,null,null);a.default=d.exports}}]);