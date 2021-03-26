(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{705:function(e,n,r){"use strict";r.r(n);var t=r(6),s=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"maven的六类属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的六类属性"}},[this._v("#")]),this._v(" Maven的六类属性")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("对 Maven 属性的使用，这里其实应该不陌生。比如 SpringPOM 工程中的 pom.xml 有如下代码。\n<properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <project.build.spring.version>4.2.7.RELEASE\n    </project.build.spring.version>\n</properties>\n<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-core</artifactId>\n        <version>${project.build.spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-aop</artifactId>\n        <version>${project.build.spring.version}</version>\n    </dependency>\n    ...\n</dependencies>\n在上面的代码中，就在 properties 中定义了 project.build.spring.version 属性，描述了 Spring 的 4.2.7.RELEASE 版本信息，然后在依赖的 version 中使用＄{project.build.spring.version}，从而统一 Spring 所有相关构件的版本。\n\n这样不仅能降低错误的发生概率，而且还能减少升级版本的工作量（不用每个构件都去修改版本，只要修改属性描述的版本就行）。\n\n前面只是 Maven 属性中的一种体现形式。在 Maven 中一共有六类属性。\n1）内置属性\n在 Maven 中主要有两个常用的内置属性，它们分别是＄{basedir}和＄{version}属性。＄{basedir}表示项目的根目录，也就是包含 pom.xml 文件的目录；＄{version}表示项目的版本。\n2）POM 属性\n用户可以通过 POM 属性，引用 POM 文件中对应元素的值，比如＄{project.artifactId}就对应 project→artifactId 元素的值。常用的 POM 属性包括以下方面。\n＄{project.build.sourceDirectory}：项目的主源码目录，默认是 src/main/java。\n＄{project.build.testSourceDirectory}：项目的测试源码目录，默认是 src/test/java。\n＄{project.build.directory}：项目构建输出目录，默认是 target。\n＄{project.outputDirectory}：项目主代码编译输出目录，默认是 target/classes。\n＄{project.testOutputDirectory}：项目测试代码编译输出目录，默认是 target/testclasses。\n＄{project.groupId}：项目的 groupId。\n＄{project.artifactId}：项目的 artifactId。\n＄{project.version}：项目的版本。\n＄{project.build.finalName}：项目输出的文件名称，默认为“＄{project.artifactId}-＄{project.version}”。\n\n这些属性都在 pom 中有对应的元素。它们中一些属性的默认值都在超级 pom 中有定义，详细情况可以参考超级 pom.xml。\n\nMaven 的超级 pom 文件在“＄MAVEN_HOME/lib/maven-model-builder-x.x.x.jar”中的“org/apache/maven/model”目录下，文件名为 pom-4.0.0.xml。\n3）自定义属性\n用户可以在 pom 的 properties 中定义自己的 Maven 属性，然后在后面重复使用，同在前面提到的 SpringPOM 的 pom.xml 中定义的 Spring 的版本信息一样。\n4）Settings 属性\nSettings 属性同 POM 属性是一样的，可以用以“settings.”开头的属性引用 settings.xml 文件中 XML 元素的值。如使用“＄{settings.localRepository}”指向用户本地仓库的地址。\n5）Java 系统属性\n所有的 Java 系统属性都可以通过 Maven 属性引用，比如“＄{user.home}”指向的就是用户目录。用户可以通过使用“mvn help:system”命令查看所有的 Java 系统属性，例如：\nPROGRAMW6432=C:\\Program Files\nCOMMONPROGRAMW6432=C:\\Program Files\\Common Files\nWINDOWS_TRACING_LOGFILE=C:\\BVTBin\\Tests\\installpackage\\csilogfile.log\nPROCESSOR_ARCHITECTURE=AMD64\nVISUALSVN_SERVER=C:\\Program Files (x86)\\VisualSVN Server\\\nCLASSWORLDS_LAUNCHER=org.codehaus.plexus.classworlds.launcher.Launcher\nPROGRAMDATA=C:\\ProgramData\n...\n\n6）环境变量属性\n所有的环境变量都可以用以“evn.”开头的 Maven 属性引用。比如，“＄{evn.JAVA_HOME}”就指向引用了 JAVA_HOME 环境变量的值。同查看 Java 系统属性一样，用户可以使用命令“mvn help:system”查看到所有的环境变量。\n\n在 Maven 项目中，适当地使用这些 Maven 属性可以简化 pom 的配置和维护工作，而且能将公共的信息很好地统一起来，避免不必要的错误。\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);