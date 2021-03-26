(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{587:function(e,a,n){"use strict";n.r(a);var t=n(6),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"hbase集群的管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hbase集群的管理"}},[e._v("#")]),e._v(" HBase集群的管理")]),e._v(" "),n("p",[e._v("运维管理\n在集群运行时，有些操作任务是必需的，包括移除和增加节点。\n移除 Region 服务器节点\n当集群由于升级或更换硬件等原因需要在单台机器上停止守护进程时，需要确保集群的其他 部分正常工作，并且确保从客户端应用来看停用时间最短。满足此条件必须把这台 Region 服务器服务的 Region 主动转移到其他 Region 服务器上，而不是让 HBase 被动地对此 Region 服务器的下线进行反应。")]),e._v(" "),n("p",[e._v("用户可以在指定节点的 HBase 目录下使用hbase-damon.sh stop命令来停止集群中的一个 Region 服务器。执行此命令后，Region 服务器先将所有 Region 关闭，然后再把自己的进程停止，Region 服务器在 ZooKeeper 中对应的临时节点将会过期。")]),e._v(" "),n("p",[e._v("Master 检测到 Region 服务器停止服务后，将此 Region 服务器上的 Region 重新分配到其他机器上。这种停止服务器方法的坏处是，Region 会下线一段时间，时间长度由 ZooKeeper 超时时间来决定，而且会影响集群性能，同时整个集群系统会经历一次可用性的轻微降级。")]),e._v(" "),n("p",[e._v("HBase 也提供了脚本来主动转移 Region 到其他 Region 服务器，然后卸掉下线的 Region 服务器，这样会让整个过程更加安全。在 HBase 的 bin 目录下提供了 gracefiil_stop.sh 脚本，可以实现这种主动移除节点的功能。")]),e._v(" "),n("p",[e._v("此脚本停止一个 Region 服务器的过程如下。\n关闭 Region 均衡器。\n从需要停止的 Region 服务器上移出 Region，并随机把它们分配给集群中其他服务器。\n停止 Region 服务器进程。")]),e._v(" "),n("p",[e._v("graceful_stop.sh 脚本会把 Region 从对应服务器上一个个移出以减少抖动，并且会在移动下一 个 Region 前先检测新服务器上的 Region 是否已经部署好。")]),e._v(" "),n("p",[e._v("此脚本关闭了需要停止的 Region 服务器，Master 会检测到停止服务的 Region 服务器，但此时 Master 无须再来转移 Region。同时，由于 Region 服务器关闭时已经没有 Region 了，所以不会执行 WAL 拆分的相关操作。\n增加 Region 服务器节点\n随着应用系统需求的增长，整个 HBase 集群需要进行扩展，这时就需要向 HBase 集群中增加 一个节点。添加一个新的 Region 服务器是运行集群的常用操作，首先需要修改 conf 目录下的 Region 服务器文件，然后将此文件复制到集群中的所有机器上，这样使用启动脚本就能够添加新的服务器。")]),e._v(" "),n("p",[e._v("HBase 底层是以 HDFS 来存储数据的，一般部署 HBase 集群时，HDFS 的 DataNode 和 HBase 的 Region 服务器位于同一台物理机上。因此，向 HBase 集群增加一个 Region 服务器之前，需要向 HDFS 里增加 DataNode。")]),e._v(" "),n("p",[e._v("等待 DataNode 进程启动并加入 HDFS 集群后，再启动 HBase 的 Region 服务器进程。启动新增节点上的 Region 服务器可以使用命令 hbase-damon.sh start，启动成功后，用户可以在 Master 用户界面看到此节点。如果需要重新均衡分配每个节点上的 Region，则可使用 HBase 的负载均衡功能。\n增加 Master 备份节点\n为了增加 HBase 集群的可用性，可以为 HBase 增加多个备份 Master。当 Master 出现故障后， 备份 Master 可以自动接管整个 HBase 的集群。")]),e._v(" "),n("p",[e._v("配置备份 Master 的方式是在 HBase 的 conf 下增加文件 backup-masters，然后通过 hbase-damon.sh start 命令启动。")]),e._v(" "),n("p",[e._v("Master 进程使用 ZooKeeper 来决定哪一个是当前活动的进程。当集群启动时，所有进程都会去竞争作为主 Master 来提供服务，其他 Master 会轮询检测当前主 Master 是否失效；如果失效，则会触发新的 Master 选举。\n数据管理\n在使用 HBase 集群时，需要处理一张或多张表中的大量数据，例如，备份数据时移动全部数据或部分数据到归档文件中。使用 HBase 内置的一些有用的工具，用户可以完成数据的迁移以及数据的查看操作。")]),e._v(" "),n("p",[e._v("下面将介绍几种数据管理的方法。\n数据的导出\n在 HBase 集群中，有时候需要将表进行导出备份，HBase 提供了自带的工具 Export，可以将表的内容输出为 HDFS 的序列化文件，在 HBase 安装目录的 bin 目录下执行 hbase org.apache.hadoop.hbase.mapreduce.Export 命令，具体参数如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost bin]# ./hbase org.apache.hadoop.hbase.mapreduce.Export\nERROR: Wrong number of arguments: 0\nUsage: Export [-D <property=va1ue>] * <tab丄ename> <outputdir> [<versions> [<starttime> [<endtime>] ] [^[regex pattern] or [Prefix] to filter]]\n\n    Note: -D properties will be applied to the conf used.\n    For example:\n        -D mapreduce.output.fileoutputformat.compress=true\n        -D mapreduce.output.fileoutputformat.compress.codec=org.apache.hadoop.io.compress.GzipCodec\n        -D mapreduce.output.fileoutputformat.compress.type=BLOCK Additionally, the following SCAN properties can be specified to control/limit what is exported..\n        -D hbase.mapreduce.scan.column.fami1y=<fami1yName>\n        -D hbase.mapreduce.include.deleted.rows=true\n        -D hbase.mapreduce.scan.row.start=<ROWSTART>\n        -D hbase.mapreduce.scan.row.stop=<ROWSTOP>\n    For performance consider the following properties:\n        -Dhbase.client.scanner.caching=100\n        -Dmapreduce.map.speculative=false\n        -Dmapreduce.reduce.speculative=false\n    For tables with very wide rows consider setting the batch size as below:\n        -Dhbase.export.scanner.batch=10\n")])])]),n("p",[e._v("从上述代码中可以看到，该命令提供了多种选 tablename 和 outputdir 是必需的，其他参数可选，参数 -D 可以设定键值类型配置属性，还可以使用正则表达式或者过滤器过滤掉部分数据。")]),e._v(" "),n("p",[e._v("下表列出了所有可用选项及其含义。")]),e._v(" "),n("p",[e._v("Export 参数")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("名字")]),e._v(" "),n("th",[e._v("描述")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("tablename")]),e._v(" "),n("td",[e._v("准备导出的表名")])]),e._v(" "),n("tr",[n("td",[e._v("outputdir")]),e._v(" "),n("td",[e._v("导出数据存放在 HDFS 中的路径")])]),e._v(" "),n("tr",[n("td",[e._v("version")]),e._v(" "),n("td",[e._v("每列备份的版本数量，默认值为 1")])]),e._v(" "),n("tr",[n("td",[e._v("starttime")]),e._v(" "),n("td",[e._v("开始时间")])]),e._v(" "),n("tr",[n("td",[e._v("endtime")]),e._v(" "),n("td",[e._v("扫描所使用的时间范围的结束时间")])]),e._v(" "),n("tr",[n("td",[e._v("regexp/prefix")]),e._v(" "),n("td",[e._v("以 ^ 开始表示该选项被当做表达式类匹配行键，否则被当做行键的前缀")])])])]),e._v(" "),n("p",[e._v("数据的导入\n同样地，HBase 也提供了自带的工具 Import，可以将数据加载到 HBase 当中。在 bin 目录下执行 hbase org.apache.hadoop.hbase.mapreduce.Import 命令, 具体参数如下:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost bin]# ./hbase org.apache.hadoop.hbase.mapreduce.Import\nERROR: Wrong number of arguments: 0\nUsage: Import [options] <tablename> <inputdir>\nBy default Import will load data direct丄y into HBase. To instead generate\nHFiles of data to prepare for a bulk data load, pass the option:\n    -Dimport.bulk.output=/path/for/output\n    To apply a generic org.apache.hadoop.hbase.filter.Filter to the input, use\n        -Dimpor t.fi It er. class=<name of fiJLt er class>\n        -Dimport.fi]_ter.a3?gs=<comma separated list of args for filter\n    NOTE: The filter will be applied BEFORE doing key renames via the HBASE_IMPORTER_RENAME_CFS property. Futher, filters will only use the Filter#filterRowKey(byte[] buffer, int offset, int length) method to identify whether the current row needs to be ignored completely for processing and Filter#filterKeyValue(KeyVa丄ue) method to determine if the KeyValue should be added; Filter.ReturnCode#TNCLUDE and #INCLUDE_AND_NEXT_COL will be considered as including the KeyValue.\n    To import data exported from HBase 0.94, use\n        -Dhbase.import.version=0.94\n    For performance consider the following options:\n        -Dmapreduce.map.speculative=false\n        -Dmapreduce.reduce.speculative=false\n        -Dimport.wal.durability=<Used while writing data to hbase. Allowed values are the supported durability values like SKIP_WAL/ASYNC_WAL/SYNC_WAL/...>\n")])])]),n("p",[e._v("从上述代码中可以看到，参数很简单，只有一个表名和一个输入的目录，这里输入目录的文件格式必须与 Export 导出的文件格式一致。Export 也可以带 -D 参数。\n数据迁移\n在 HBase 系统中，有时候需要在同集群内部或集群之间复制表的部分或全部数据，可使用 HBase 自带 CopyTable 工具来完成此功能。")]),e._v(" "),n("p",[e._v("同样地，在 bin 目录下执行以下命令：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost]#./hbase org.apache.hadoop.hbase.mapreduce.CopyTable\nUsage: CopyTable [general options] [--starttime=X] [一一endtime=Y] [--new.name=NEW] [--peer.adr=ADR] <tablename〉\nOptions:\nrs.class hbase.regionserver.class of the peer cluster specify if different from current cluster\nrs.impl hbase.regionserver.impl of the peer cluster\nstartrow the start row\nstoprow the stop row\nstarttime beginning of the time range (unixtime in millis) without endtime means from starttime to forever\nendtime end of the time range. Ignored if no starttime specified.\nversions number of cell versions to copy\nnew.name new table's name\npeer.adr Address of the peer cluster given in the format hbase.zookeeer.quorum:hbase.zookeeper.client.port:zookeeper.znode.parent\nfamilies conuna-separated list of families to copy To copy from cf1 to cf2f give sourceCfName:destCfName.  To keep the same name, just give \"cfName\"\nall.cells also copy delete markers and deleted cells\nbulkload Write input into HFiles and bulk load to the destination table\n\nArgs :\n    tab1ename Name of the table to copy\n\nExamples:\n    To copy 'TestTable' to a cluster that uses replication for a 1 hour window:\n    $ bin/hbase org.apache.hadoop.hbase.mapreduce.CopyTable --starttime=1265875194289 —endtime=126587879428 9 ―peer .：adr=serverl, server2, server3:2181: /hbase --families=my01dCf:myNewCf,cf2,cf3 TestTable\n    For performance consider the following general option:\n        It is recommended that you set the following： to >=100. A higher value uses more memory but\n        decreases the round trip time to the server and may increase performance.\n            -Dhbase.client.scanner.caching=100\n        The following should always be set to [false, to prevent writing data twiceA which may produce\n        inaccurate results.\n    -Dmapreduce.map.speculative=false\n")])])]),n("p",[e._v("其中，根据 -peer.adr 参数可以区分集群内部还是集群间的复制，当设置为与当前运行命令的集群相同时为集群内复制，否则为集群间复制。另外，复制时还可以只复制部分数据，如用 -families 来表示要复制的列族。\n故障处理\nHBase自带的工具除了数据移动外，还有很多调试、分析等工具，在HBase的bin目录下执 行HBase命令，会列出它所包含的工具：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost bin]# ./hbase\nUsage: hbase [<options>]\\<command> [<args>]\nOptions:\n    -config DIR Configuration direction to：use. DefauIt: ./conf\n    -hosts HOSTS Override the list in 'regionservers' file\n    --auth-as-server Authenticate to ZooKeeper using servers configuration\n\nCommands:\nSome commands take arguments. Pass no args or -h for usage.\nshell    Run the HBase shell\nhbck    Run the hbase 'fsck' tool\nsnapshot    Create a new snapshot of a table\nsnapshotinfo    Tool for dumping snapshot information\nwal    Write-ahead-log analyzer\nhfile    Store file analyzer\nzkcli    Run the ZooKeeper shell.\nupgrade    Upgrade hbase\nmaster    Run an HBase HMaster node\nregionserver    Run an HBase HRegionServer node\nzookeeper    Run a Zookeeper server\nrest    Run an HBase REST server\nthrift    Run the HBase Thrift server\nthrift2    Run the HBase Thrifserver\nclean    Run the HBase clean up script\nclasspath    Dump hbase CLASSPATH\nmapredcp    Dump CLASSPATH entries required by mapreduce\npe    Run PerformanceEvaluation\nltt    Run LoadTestTool\nversion    Print the version\nCLASSNAME    Run the class named CLASSNAME\n")])])]),n("p",[e._v("本节简单介绍几个工具，其他请参考 HBase 官网提供的资料。\n文件检测修复工具 hbck\nhbck 工具用于 HBase 底层文件系统的检测和修复，它可以检测 Master，Region 服务器内存中的状态以及 HDFS 中数据的状态之间的一致性、完整性等。")]),e._v(" "),n("p",[e._v("下面执行 hbck 命令，使用 -h 参数查看 hbck 能提供哪些功能，代码如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost bin]# ./hbase hbck -h\nUsage: fsck [opts] {only tables}\nwhere [opts] are:\n    -help    Display help options (this)\n    -details    Display full report of all regions.\n    -timelag <timeInSeconds>    Process only regions. that have not experienced any metadata updates in the last <timeInSeconds> seconds.\n    -sleepBeforeRerun <timeInSeconds>    Sleep this many seconds before checking if the fix worked if run with -fix\n    -summary    Print only summary of the tables and status.\n    -metaonly    Only check the state of the hbase:meta table.\n    -sidelineDir <hdfs://>    HDFS path to backup existing meta.\n    -boundaries    Verify t hat regions boundaries are the same betw een META and store files.\n    -exclusive    Abort if another hbck is exclusive or fixing.\n    -disableBalancer    Disable the load balancer.\n\nMetadata Repair options: (expert features, use with caution!)\n    -fix    Try to fix region assignments. This is for backwards compatiblity\n    -fixAssignments    Try to fix region assignments. Replaces the old -fix\n    -fixMeta    Try to fix meta problems. This assumes HDFS region info is good.\n    -noHdfsChecking    Don't load/check region info from HDFS. Assumes hbase:meta region info is good. Won't check/fix any HDFS issue, e.g.hole, orphan, or overlap\n    -fixHdfsHoles    Try to fix region holes in hdfs.\n    -fixHdfsOrphans    Try to fix region dirs with no .regioninfo file in hdfs\n    -fixTableOrphans    Try to fix table dirs with no .tableinfo file in hdfs (online mode only)\n    -fixHdfsOverlaps    Try to fix region overlaps in hdfs.\n    -fixVersionFile    Try to fix missing hbase.version file in hdfs.\n    -maxMerge <n>    When fixing region overlaps, allow at most <n> regions to merge.(n=5 by default)\n    -sidelineBigOverlaps    When fixing region overlaps, allow to sideline big overlaps\n    -maxOverlapsToSideline <n>    When fixing region overlaps, allow at most <n> regions to sideline per group. (n=2 by default)\n    -fixSplitParents    Try to force offline split parents to be online.\n    -removeParents    Try to offline and sideline lingering parents and keep daughter regions.\n    -ignorePreCheckPermission    ignore filesystem permission pre-check\n    -fixReferenceFiles    Try to offline lingering reference store files\n    -fixEmptyMetaCells    Try to fix hbase:meta entries not referencing any region (empty REGIONINFO_QUALIFIER rows)\n\nDatafile Repair options: (expert features, use with caution!)\n    -checkCorruptHFiles    Check all Hf iles by opening them to make sure they are valid\n    -sidelineCorruptHFiles    Quarantine corrupted HFiles. implies -checkCorruptHFiles\nMetadata Repair shortcuts\n    -repair    Shortcut for -fixAssignments -fixMeta -fixHdfsHoles -fixHdfsOrphans -fixHdfsOverlaps -fixVersionFile -sidelineBigOverlaps -fixReferenceFiles -fixTableLocks -fixOrphanedTableZnodes -repairHoles Shortcut for -fixAssignments -fixMeta -fixHdfsHoles\n\nTable lock options\n    -fixTableLocks    Deletes table locks held for a long time (hbase.table.lock.expire.ms, lOmin by default)\n\nTable Znode options\n    -fixOrphanedTableZnodes    Set table state in ZNode to disabled if table does not exists\n")])])]),n("p",[e._v("从上述参数来看，hbck 命令的参数分为几类，首先是基本的参数，如 details，表示执行 hbck 时会显示所有 Region 的完整报告；然后还有一些修复的参数，包括 Metadata. Datafile 的修复选项。")]),e._v(" "),n("p",[e._v("hbck 命令开始执行时，会扫描 Meta 表收集所有的相关信息，同时也会扫描 HDFS 中的 root 目录，然后比较收集的信息，报告相关的一致性和完整性问题。")]),e._v(" "),n("p",[e._v("一致性检查主要检测 Region 是否同时存在于 Meta 表和 HDFS 中，并检查是否只被指派给唯一的 Region 服务器；而完整性检查则以表为单位，将 Region 与表的细节信息进行比较以找到缺失的 Region，同时也会检查 Region 的起止键范围中的空洞或重叠情况。如果存在一致性或完整性问题，则可以使用 fix 选项来修复。\n文件查看工具 hfile\nHBase 提供了查看文件格式 HFile 的内容，它所使用的命令是 hfile，具体参数如下:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost bin]# ./hbase hfile\nusage: HFile [-a] [-b] [-e] [-f <arg> | -r <arg>] [-h] [-k] [-m] [-p] [-s] [-v] [-w <arg>]\n    -a,--checkfamily    Enable family check\n    -b,--printblocks    Print b丄ock index meta data\n    -e,--printkey    Print keys\n    -fr--file <arg>    File to scan. Pass full-path; e.g.hdfs://a:9000/hbase/hbase:meta/12/34\n    -h,--printblockheaders    Print block headers for each block.\n    -kz--checkrow    Enable row order check; ：looks for out-of-order keys\n    -m,-printmeta    Print meta data of file\n    -p,-printkv    Print key/value pairs\n    -rr―region <arg>    Region to scan. Pass region name; e.g.'hbase:meta,,1'\n    -sf--stats    Print statistics\n    -v,--verbose    Verbose output; emits file and meta datadelimiters \n    -w,--seekToRow <arg>    Seek to this row and print all the kvs for this row only\n")])])]),n("p",[e._v("例如，查看文件的内容，可以使用以下命令查看文件 /hbase/users/f0bad95c7999b57010dfb4707a29c747/info/2584769dd8334bcda4632b57f50bbe76。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[root@localhost bin]# ./hbase hfile -s -f /hbase/users/f0bad95c7999b57010dfb4707a29c747/info/2584769dd8334bcda4632b57f50bbe76\nStats:\nKey length: count: 3 min: 31 max: 31 mean: 31.0\nVai length: count: 3 min: 10242 max: 10242 mean: 10242.0\nRow size (bytes) : count: 1 min: 30843 max: 30843 mean: 30843.0\nRow size (columns) : coun t: 1 min: 3 max: 3 mean: 3.0\nKey of biggest row: -2016043148\n")])])]),n("p",[e._v("若用户在测试或应用中，发现数据有误，可以使用该工具，查看 HFile 中的真实数据。")])])}),[],!1,null,null,null);a.default=o.exports}}]);