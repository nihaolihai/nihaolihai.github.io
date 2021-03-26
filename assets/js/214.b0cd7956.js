(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{703:function(e,n,r){"use strict";r.r(n);var t=r(6),s=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"maven测试报告的生成和查看"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven测试报告的生成和查看"}},[this._v("#")]),this._v(" Maven测试报告的生成和查看")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('基本测试报告\n在默认情况下，maven-surefire-plugin 插件会在 Maven 项目的 target/surefire-reports 目录下生成两种格式的错误报告：一种是文本格式；另一种是与 JUnit 兼容的 XML 格式。\n\n下面是 MvnSSMDemo.Service.Impl 项目中 TestUserServiceImpl 测试案例运行后的报告样例。\n1. 文本格式测试报告\n-------------------------------------------------------------------------------\nTest set: cn.com.mvn.ssh.demo.service.Impl.TestUserServiceImpl\n-------------------------------------------------------------------------------\nTests run: 6, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 4.906 sec\n\n2. XML 格式测试报告\n<?xml version="1.0" encoding="UTF-8" ?>\n<testsuite failures="0" time="4.773" errors="0" skipped="0" tests="6"\n    name="cn.com.mvn.ssh.demo.service.Impl.TestUserServiceImpl">\n    <properties>\n        <property name="java.runtime.name"\n            value="Java(TM) SE Runtime Environment" />\n        ...\n    </properties>\n    <testcase time="2.669"\n        classname="cn.com.mvn.ssh.demo.service.Impl.TestUserServiceImpl"\n        name="testEditUser" />\n        ...\n</testsuite>\n如果要生成 HTML 的测试报告，需要在 pom.xml 中添加 maven-surefire-report-plugin 插件的配置，样例配置代码如下：\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-surefire-report-plugin</artifactId>\n            <version>2.12.2</version>\n            <configuration>\n                <showSuccess>false</showSuccess>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n运行测试后，Maven 会自动生成 HTML 版的测试报告，内容同文本和 XML 版本的一样，只是展现的形式是 HTML，方便项目相关人员和客户查看。\n测试覆盖率报告\n测试报告主要报告的是测试代码的运行结果是否正确，至于对软件的测试质量，要依靠测试代码本身的设计和实现。设计和实现得比较详细周到的话，测试的质量就高，否则就会有很多情况没有被测试到，造成软件的漏洞不能被及时发现。\n\n所以为了提高软件本身的质量，除了要设计编写测试案例代码进行测试之外，还必须对代码测试的范围进行一个控制，从而进一步保证软件代码的质量。所以测试覆盖率也是衡量软件代码质量的一个重要参考指标。\n\nCobertura 是一个优秀的测试覆盖率统计工具。在 Maven 项目中，用户可以通过集成 cobertura-maven-plugin 插件，再执行 Maven 命令“mvn cobertura:cobertura”，就可以生成测试覆盖率报告。\n\n当然，要能顺利地生成测试覆盖率报告，需要在 pom.xml 中配置 Cobertura 插件，样例配置代码如下：\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.codehaus.mojo</groupId>\n            <artifactId>cobertura-maven-plugin</artifactId>\n            <version>2.5.1</version>\n        </plugin>\n    </plugins>\n</build>\nCobertura 除了有前面介绍的生成测试报告的命令外，还有如下命令。\nmvn cobertura:help，查看 Cobertura 插件的帮助。\nmvn cobertura:clean，清空 Cobertura 插件的运行结果。\nmvn cobertura:check，运行 Cobertura 插件的检查任务。\nmvn cobertura:cobertura，运行 Cobertura 插件的检查任务并生成报表，报表生成在 target/site/cobertura 目录下。\ncobertura:dump-datafile,Cobertura Datafile Dump Mojo。\nmvn cobertura:instrument,Instrument the compiled classes。\n\n在 target 文件夹下出现了一个 site 目录，下面是一个静态站点，里面就是单元测试的覆盖率报告。\n\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);