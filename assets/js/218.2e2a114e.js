(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{708:function(e,n,i){"use strict";i.r(n);var r=i(6),o=Object(r.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"maven-profile配置管理及激活profile的几种方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven-profile配置管理及激活profile的几种方式"}},[this._v("#")]),this._v(" Maven profile配置管理及激活profile的几种方式")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("针对不同环境的 profile 的配置\n为了体现不同环境的不同构建，需要配置好不同环境的 profile，代码如下：\n<profiles>\n    <profile>\n        <id>dev_evn</id>\n        <properties>\n            <db.driver>com.mysql.jdbc.Driver</db.driver>\n            <db.url>jdbc:mysql://localhost:3306/test</db.url>\n            <db.username>root</db.username>\n            <db.password>root</db.password>\n        </properties>\n    </profile>\n    <profile>\n        <id>test_evn</id>\n        <properties>\n            <db.driver>com.mysql.jdbc.Driver</db.driver>\n            <db.url>jdbc:mysql://localhost:3306/test_db</db.url>\n            <db.username>root</db.username>\n            <db.password>root</db.password>\n        </properties>\n    </profile>\n</profiles>\n在两个不同的 profile 中，配置了同样的属性，不一样的值。按照前面的介绍，在开发时可以用 mvn 命令后面添加“-Pdev_evn”激活“dev_evn profile”。\n激活 profile 配置\n在 Maven 中，可以选用如下的方式激活 profile。\n1. 命令行激活\n用户可以在 mvn 命令行中添加参数“-P”，指定要激活的 profile 的 id。如果一次要激活多个 profile，可以用逗号分开一起激活。例如：\nmvn clean install -Pdev_env,test_evn\n\n这个命令就同时激活了 id 为“dev_evn”和“test_evn”的两个 profile。\n2. Settings 文件显示激活\n如果希望某个 profile 默认一直处于激活状态，可以在 settings.xml 中配置 activeProfiles 元素，指定某个 profile 为默认激活状态，样例配置代码如下：\n<settings>\n    ...\n    <activeProfiles>\n        <activeProfile>dev_evn</activeProfile>\n    </activeProfiles>\n    ...\n</settings>\n\n3. 系统属性激活\n可以配置当某个系统属性存在时激活 profile，代码如下：\n<profiles>\n    <profile>\n        ...\n        <activation>\n            <property>\n                <name>profileProperty</name>\n            </property>\n        </activation>\n    </profile>\n</profiles>\n\n甚至还可以进一步配置某个属性的值是什么时候激活，例如：\n<profiles>\n    <profile>\n        ...\n        <activation>\n            <property>\n                <name>profileProperty</name>\n                <value>dev</value>\n            </property>\n        </activation>\n    </profile>\n</profiles>\n\n这样就可以在 mvn 中用“-D”参数来指定激活，例如：\nMvn clean install -DprofileProperty=dev\n\n表示激活属性名称为 profileProperty，值为 dev 的 profile。\n\n实际上这也是一种命令激活 profile 的方法，只是用的是“-D”参数指定激活的属性和值，而前面的是用的“-P”参数指定激活的 profile 的 id 而已。\n4. 操作系统环境激活\n用户可以通过配置指定不同操作系统的信息，实现不同操作系统做不同的构建。例如：\n<profiles>\n    <profile>\n        <activation>\n            <os>\n                <name>Window XP</name>\n                <family>Windows</family>\n                <arch>x86</arch>\n                <version>5.1.2600</version>\n            </os>\n        </activation>\n    </profile>\n</profiles>\n\nfamily 的值是 Windows、UNIX 或 Mac。name 为操作系统名称。arch为操作系统的架构。version为操作系统的版本。具体的值可以通过查看环境中的系统属性“os.name”“os.arch”和“os.version”获取。\n5. 文件存在与否激活\n当然，也可以通过配置判断某个文件存在与否来决定是否激活 profile，样例配置代码如下：\n<profiles>\n    <profile>\n        <activation>\n            <file>\n                <missing>t1.properties</missing>\n                <exists>t2.properties</exists>\n            </file>\n        </activation>\n    </profile>\n</profiles>\n\n6. 默认激活\n最后，还可以配置一个默认的激活 profile，例如：\n<profiles>\n    <profile>\n        <activation>\n            <activeByDefault>true</activeByDefault>\n        </activation>\n    </profile>\n</profiles>\n\n需要注意的是，如果 pom 中有任何一个 profile 通过其他方式被激活的话，所有配置成默认激活的 profile 都会自动失效。 可以使用如下命令查看当前激活的 profile。\nMvn help:active-profiles\n\n也可以使用如下命令查看所有的 profile。\nMvn help:all-profiles\n\nprofile 的种类\n前面介绍了 profile 的意义和激活方式。那么在 Maven 中，有哪些 profile？如何配置呢？\n\n根据 profile 配置的位置不同，可以将 profile 分成如下几种。\n1）pom.xml\npom.xml 中声明的 profile 只对当前项目有效。\n2）用户 settings.xml\n在用户目录下的“.m2/settings.xml”中的 profile，对本机上的该用户的所有 Maven 项目有效。\n3）全局 settings.xml\n在 Maven 安装目录下 conf/settings.xml 中配置的 profile，对本机上所有项目都有效。\n\n为了不影响其他用户且方便升级 Maven，一般配置自己的 settings.xml，不要轻易修改全局的 settings.xml。同样的道理，一般不需要修改全局 settings.xml 中的 profile。\n\n不同类型的 profile 中可以声明的 pom 元素是不一样的，pom.xml 中的 profile 能够随同 pom.xml 一起提交到代码仓库中，被 Maven 安装到本地仓库里面，并且能被部署到远程 Maven 仓库中。也就是说，可以保证 profile 伴随特定的 pom.xml 一起存在。所以它可以修改或者添加很多 pom 元素，例如：\n<project>\n    <repositories></repositories>\n    <pluginRepositories></pluginRepositories>\n    <dependencies></dependencies>\n    <dependencyManagement></dependencyManagement>\n    <modules></modules>\n    <properties></properties>\n    <reporting></reporting>\n    <build>\n        <plugins></plugins>\n        <defaultGoal></defaultGoal>\n        <resources></resources>\n        <testResources></testResources>\n        <finalName></finalName>\n    </build>\n</project>\n如上代码所示，在 pom 中的 profile 元素比较多，可以添加或修改插件配置、项目资源目录、测试资源目录配置和项目构建的默认名称等。\n\n除了 pom 中的 profile 外，其他外部的 profile 可以配置的元素相对就少些，因为那些外部 profile 无法保证同项目中的 pom.xml 一起发布。\n\n如果在外部 profile 中配置了项目依赖，开发用户可以在本地编译，但是因为依赖配置没有随同 pom.xml 一起发布部署到仓库中，别的用户下载了该项目后，就会因为缺少依赖而失败。\n\n为了避免这样的不一致情况，很多在 pom 的 profile 可以出现的元素不允许在外部 profile 中出现。\n\n在外部 profile 可以声明的元素如下：\n<project>\n    <repositories></repositories>\n    <pluginRepositories></pluginRepositories>\n    <properties></properties>\n</project>\n这些外部 profile 元素不足以影响项目的正常构建，只会影响项目的仓库和 Maven 属性。\n\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);