(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{573:function(t,e,n){"use strict";n.r(e);var s=n(6),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"hbase从表中获取数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hbase从表中获取数据"}},[t._v("#")]),t._v(" HBase从表中获取数据")]),t._v(" "),n("p",[t._v("例如，对于上面的数据表，执行以下命令可以获取 Student 表中行键为 0001 的所有列族数据：\nget 'student', '0001'")]),t._v(" "),n("p",[t._v("在 get 语句中使用限定词 VERSIONS 后获取的数据内容。")]),t._v(" "),n("p",[t._v("首先 put 三条数据，因为初始创建 Student 表和 Stulnfo 列族时，已经设定 VERSIONS 为 3，即使用 get 获取数据时最多得到 3 个版本的数据。")]),t._v(" "),n("p",[t._v("get 命令使用了限定词 VERSIONS=>2，因此 get 得到的数据只显示了 Stulnfo:Name 最小的两个版本。")])])}),[],!1,null,null,null);e.default=a.exports}}]);