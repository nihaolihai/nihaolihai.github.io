(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{696:function(t,n,a){"use strict";a.r(n);var e=a(6),s=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"maven从仓库中解析依赖的机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven从仓库中解析依赖的机制"}},[this._v("#")]),this._v(" Maven从仓库中解析依赖的机制")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("前面介绍了 Maven 的依赖机制，那些构件是放在仓库中的，那 Maven 是根据什么规则从仓库中解析这些依赖构件的呢？\n\nMaven 在寻找项目需要的依赖的顺序是：先在本地仓库中查找，如果没有找到，再找远程仓库，找到后下载；如果依赖的版本为快照版本，Maven 除了找到对应的构件外，还会自动查找最新的快照。这个找依赖的过程如下所示。\n\n1）当依赖的范围是 system 的时候，Maven 直接从本地文件系统中解析构件。\n\n2）根据依赖坐标计算仓库路径，尝试直接从本地仓库寻找构件，如果发现对应的构件，就解析成功。\n\n3）如果在本地仓库不存在相应的构件，就遍历所有的远程仓库，发现后，下载并解析使用。\n\n4）如果依赖的版本是 RELEASE 或 LATEST，就基于更新策略读取所有远程仓库的元数据文件（groupId/artifactId/maven-metadata.xml），将其与本地仓库的对应元合并后，计算出 RELEASE 或者 LATEST 真实的值，然后基于该值检查本地仓库，或者从远程仓库下载。\n\n5）如果依赖的版本是 SNAPSHOT，就基于更新策略读取所有远程仓库的元数据文件，将它与本地仓库对应的元数据合并，得到最新快照版本的值，然后根据该值检查本地仓库，或从远程仓库下载。\n\n6）如果最后解析得到的构件版本包含有时间戳，先将该文件下载下来，再将文件名中时间戳信息删除，剩下 SNAPSHOT 并使用（以非时间戳的形式使用）。\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);