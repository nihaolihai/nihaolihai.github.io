(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{988:function(n,t,o){"use strict";o.r(t);var e=o(6),s=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"mongodb创建集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb创建集合"}},[this._v("#")]),this._v(" MongoDB创建集合")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('MongoDB 集合的命名规则\nMongoDB 的集合就相当于 MySQL 的一个表 table，MySQL 列出的所有表都可以使用 show tables，MongoDB 可以使用 show collections 展示所有集合。\n\n集合是一组文档，是无模式的，集合名称要求符合 UTF-8 标准的字符串，同时要遵循下表所示的注意事项。\n\nMongoDB 集合命名的注意事项\n序号\t注意事项\n1\t集合名不能是空串\n2\t不能含有空字符 \\0\n3\t不能以“system.”开头，这是系统集合保留的前缀\n4\t集合名不能含保留字符“$”\n对于分别部署在 Windows、Linux、UNIX 系统上的 MongoDB，集合的命名方式与数据库命名方式一致。\n创建集合\nMongoDB 集合的创建有显式和隐式两种方法。\n\n显式创建集合可通过使用db.createCollection(name, options)方法来实现，参数 name 指要创建的集合名称，options 是可选项，指定内存大小和索引等，下表描述 了 options 可使用的选项。\n\noptions 可以使用的选项\n参数\t类型\t描述\ncapped\tBoolean\t（可选）如果为 true，则启用封闭的集合。上限集合是固定大小的集合，它在达到其最大时自动覆盖其最旧的条目。如果指定 true，则还需要指定 size 参数\nsize\t数字\t（可选）指定上限集合的最大大小（以字节为单位）。如果 capped 为 true，那么还需要指定次字段的值\nmax\t数字\t（可选）指定上限集合中允许的最大文档数\n注意：在插入文档时，MongoDB 首先检查上限集合 capped 字段的大小，然后检查 max 字段。\n\n显式创建集合的一个例子：\ndb.createCollection("mySet", {capped:true,size:6142800, max :10000 })\n\n\n在 MongoDB 中，当插入文档时，如果集合不存在，则 MongoDB 会隐式地自动创建集合，方法如下：\ndb.myDB.insert( {"name": "tom"} )\n\n其他集合操作\n创建集合后可以通过 show collections 命令查看集合的详细信息，使用 renamecollection() 方法可对集合进行重新命名。\n\n删除集合使用 drop() 方法，具体代码如下：\nShow collections;\ndb.mySet.renameCollection( "orders2014");\ndb.orders2014.drop()\n\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);