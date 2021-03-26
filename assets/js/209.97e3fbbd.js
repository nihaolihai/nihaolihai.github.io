(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{698:function(n,e,r){"use strict";r.r(e);var t=r(6),i=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"maven的排除依赖、归类依赖和优化依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven的排除依赖、归类依赖和优化依赖"}},[this._v("#")]),this._v(" Maven的排除依赖、归类依赖和优化依赖")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Maven 的传递依赖能自动将间接依赖引入项目中来，这样极大地简化了项目中的依赖管理，但是，有时候这种自动化也会带来麻烦。\n\n比如 Maven 可能会自动引入快照版本的依赖，而快照版本的依赖是不稳定的，这时候就需要避免引入快照版本。这样的话需要用一种方式告知 Maven 排除快照版本的依赖引入，这种做法就是排除依赖。那怎么实现排除依赖呢？\n\n其实实现排除依赖还是比较简单的，在直接依赖的配置里面添加 exclusions→exclusion 元素，指定要排除依赖的 groupId 和 artifactId 就行，如下面代码所示。\n<dependency>\n    <groupId>org.hibernate</groupId>\n    <artifactId>hibernate-core</artifactId>\n    <version>${project.build.hibernate.version}</version>\n    <exclusions>\n        <exclusion>\n            <groupId>xxx</groupId>\n            <artifactId>xxx</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n归类依赖\n在引用依赖的时候，很多情况需要引入一个 Maven 项目的多个模块，这些模块都应该是相同的版本。比如，用户在 Spring 框架下开发应用，就需要同时引用 org.springframework 的 spring-core、spring-context、spring-context-support 等模块。\n\n可以想象，这些模块肯定是统一的版本，如果在每个依赖里面都分别用 groupId、artifactId 和 version 具体指明的话，例如下次升级，需要将 2.5 版本升级成 3.0 版本，这样就需要将 org.springframework 的每个模块的版本都统一更改，这样做很容易出现不一致的情况，就很容易出错。\n\n为了避免出现这种情况，可以在 pom.xml 中定义一个属性名称描述版本的值。接下来在每个 version 中，用特殊的语法引用这个属性名称。实际引入的时候，由 Maven 将属性改成对应的值。这样就可以统一版本，也方便修改。具体样例代码如下：\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    ...\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        \x3c!-- 3.2.16.RELEASE,3.1.4.RELEASE --\x3e\n        <project.build.spring.version>4.2.7.RELEASE</project.build.spring.version>\n    </properties>\n    <dependencies>\n        \x3c!-- spring --\x3e\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-core</artifactId>\n            <version>${project.build.spring.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-aop</artifactId>\n            <version>${project.build.spring.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-beans</artifactId>\n            <version>${project.build.spring.version}</version>\n        </dependency>\n        ...\n    </dependencies>\n    ...\n</project>\n优化依赖\n程序员在软件开发过程中，需要通过重构等方式不断优化代码，使其变得更简洁、灵活、高效。同样，用户也应该对 Maven 项目的依赖了然于胸，并对其进行优化。\n\n通过教程前面的了解，可以理解 Maven 定位依赖的方式、传递依赖的规则以及怎么样排除依赖等。但是要实现这些动作，还必须对项目中的依赖有全面的了解，这样才能更有效地达到目的。\n\n接下来介绍一下查看依赖的相关命令。\nMvn dependency:list，列出所有的依赖列表。\nMvn dependency:tree，以树形结构方式，列出依赖和层次关系。\nMvn dependency:analyze，分析主代码、测试代码编译的依赖。\n\n')])])])])}),[],!1,null,null,null);e.default=i.exports}}]);