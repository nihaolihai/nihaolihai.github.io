(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{704:function(n,e,a){"use strict";a.r(e);var t=a(6),s=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"maven测试代码的重用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven测试代码的重用"}},[this._v("#")]),this._v(" Maven测试代码的重用")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("在项目开发过程中，程序员经常要将公共的功能代码打包共享给其他模块重复使用，此外还有以前沉淀下来的公共框架代码。这里可以使用 mvn package 命令将这些代码打包，构建成构件，发布到仓库中共享，以便其他项目可以做依赖构件使用。\n\n同样地，对那些有着良好设计，能够重复使用在项目的不同模块中、甚至不同项目中的测试代码，也需要打包成构件重复使用，从而减少编写测试代码的工作量。而 mvn package 只会对主代码和资源文件进行打包安装与部署，对测试代码和资源文件是不会处理的。\n\n为了实现将测试代码和资源文件打包安装与部署，可以在 pom 中配置 maven-jar-plugin 插件，样例配置代码如下：\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId>\n    <version>2.2</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>test-jar</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\nmaven-jar-plugin 有两个目标：一个是 jar；另一个是 test-jar。jar 目标有内置绑定到 Maven 的 default 生命周期的 package 阶段，会在 Maven 工程进行构建的时候自动执行，将项目的主代码和资源文件进行打包。\n\ntest-jar 目标没有内置绑定，所以需要用户在插件配置中声明该目标，从而达到在 Maven 工程构建的时候将测试代码和资源文件打包。test-jar 目标是默认绑定到 default 生命周期的 package 阶段，所以当运行 mvn clean package 命令的时候，能同时将主代码和测试代码分别打包。\n\n最后需要说明的是，当使用测试构件依赖的时候，需要指定依赖的 type 为 test-jar，样例配置代码如下：\n纯文本复制\n<dependency>\n    <groupId>...</groupId>\n    <artifactId>...</artifactId>\n    <version>...</version>\n    <type>test-jar</type>\n    <score>test</score>\n</dependency>\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);