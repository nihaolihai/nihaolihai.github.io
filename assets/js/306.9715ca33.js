(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{798:function(n,a,e){"use strict";e.r(a);var o=e(6),r=Object(o.a)({},(function(){var n=this.$createElement,a=this._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("h2",{attrs:{id:"简化基于scala的web-api开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简化基于scala的web-api开发"}},[this._v("#")]),this._v(" 简化基于Scala的Web API开发")]),this._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('虽然说使用 Scala 语言的语法来写 SpringBoot 微服务已经可以让 Scala 开发者们兴奋不已了，但说实话，这并没有很大程度上发挥二者各自的最大威力。\n\n单向上来讲，从 SpringBoot 微框架出发，Java、Scala 等 Java 虚拟机上的语言都会收益，这只是发挥了 SpringBoot 微框架的最大效能。但反过来，从 Scala 出发，使用 SpringBoot 微框架又会让 Scala 开发者受到一些束缚。\n\n比如像 case class 这样的 Scala 语言特性为了避免序列化兼容性等问题，我们一般不建议使用，但这确是 Scala 提供的最迷人的装备之一，另外，Scala 依赖 Java 的各项生态是很融洽的，但反过来又会因为二进制兼容性等问题感觉如芒在背。\n\n不过，某些特殊的场景下，我们还是可以为 SpringBoot 和 Scala 找到比较恰当的契合点，Web API 就是这样的场景之一。\n\n1）使用 SpringBoot 开发的 Web API 作为微服务独立部署，属于 Endpoints 类型的应用，这种类型的应用因为独立部署和运行，所以可以最大程度上容忍各种兼容性和复杂的“文化理念”，反正有冲突 Endpoint 内部解决，不会外溢到外面给别人带来麻烦。\n\n这不同于类库之类的依赖型（Dependencies）软件实体，它们更多偏组件性质，不能独立“存活”，需要“寄人篱下”，所以，如果它们有一堆自己的关联依赖，那么，就会带来更多兼容性以及冲突解决的负担。所以，作为 Endpoint 类型软件实体的 Web API 微服务，使用 Scala 是可以容忍 Scala 在依赖重和兼容性层面的“缺点”。\n\n2）Web API 对外提供给用户的 API 接口是弱类型的，所以，我们在实现 Web API 期间即使使用各种强类型的对象和语言，其实对用户来说是无感知的，只要做好强类型数据对象和弱类型 API 之间的适配和转换，使用 Scala 的各种语言特性必然无虞。\n\n所以，基于以上两点考虑，我们可以在使用 SpringBoot 开发 Web API 的时候进一步深入使用 Scala 语言的一些特性。\n\n鉴于我们已经实现了一个 spring-boot-starter-webapi 的自动配置模块用于简化 Web API 的开发，要进一步为 Scala 在此场景开辟捷径，只要在原有 spring-boot-starter-webapi 的基础上添加 Scala 特定的一些支持，就可以很大程度上简化基于 SpringBoot 和 Scala 的 Web API 开发。\n\n所以，我们决定创建 spring-boot-starter-webapi-scala 自动配置模块项目，该项目在享有原来 Web API 规范以及 API 文档的支持的同时，将进一步强化在使用 Scala 开发 Web API 的过程中使用 Scala 原生类型（比如 case class）作为数据对象的支持，尤其是 Scala 原生类型的序列化以及 Java 和 Scala 混合类型的序列化。\n\n因为我们的 Web API 最终都是以 JSON 的形式来提供 API 的数据交互，所以，spring-boot-starter-webapi-scala 自动配置模块的主要一个新加功能就是加强 Scala 原生类型和混合类型的 JSON 序列化支持。\n\n基本上，我们会沿用 SpringBoot 在 Web 层 JSON 序列化默认方案上 Jackson 的选型，进一步依赖其 jackson-module-scala（https://github.com/FasterXML/jackson-module-scala）来完成特定于 Scala 对象类型的 JSON 序列化工作。\n\n依然基于 http://start.spring.io 创建我们的 spring-boot-starter-webapi-scala 项目，然后在原有脚手架项目的基础上进行配置裁剪和补足，最终完成项目的 pom.xml 内容类似于：\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.keevol.springboot</groupId>\n    <artifactId>spring-boot-starter-webapi-scala</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <packaging>jar</packaging>\n    <name>spring-boot-starter-webapi-scala</name>\n    <description>web api boot starter for scala</description>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>1.3.3.RELEASE</version>\n        <relativePath /> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <java.version>1.8</java.version>\n        <scala.version>2.11.7</scala.version>\n        <scala.maven.version>3.2.2</scala.maven.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.keevol.springboot</groupId>\n            <artifactId>spring-boot-starter-webapi</artifactId>\n            <version>1.0.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.scala-lang</groupId>\n            <artifactId>scala-library</artifactId>\n            <version>${scala.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.scala-lang</groupId>\n            <artifactId>scala-compiler</artifactId>\n            <version>${scala.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.fasterxml.jackson.module</groupId>\n            <artifactId>jackson-module-scala_2.11</artifactId>\n            <version>2.6.3</version>\n        </dependency>\n        <dependency>\n            <groupId>com.fasterxml.jackson.module</groupId>\n            <artifactId>jackson-module-paranamer</artifactId>\n            <version>2.7.1</version>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n当前 pom.xml 中有几点内容需要大家重点关注：\n添加了原来的 spring-boot-starter-webapi 自动配置模块依赖，目的是继续享有其对 Web API 规范以及 API 文档等功能的支持。\n添加了针对 scala-library 和 scala-compiler 的依赖，毕竟这是为 Scala 项目服务的一个自动配置模块项目，这里配置了，所有使用 Scala 开发 Web API 的项目就不需要再逐一配置了。\n添加了针对 jackson-module-scala 和 jackson-module-paranamer 的依赖，主要目的是强化针对 Scala 原生类型和混合数据类型到 JSON 序列化支持。\n\n暂时我们不需要提供更多的功能支持，所以，只要通过 mvn install 或者 mvn deploy 将我们的 spring-boot-starter-webapi-scala 项目发布之后就可以供相关开发者使用了。\n\n如果我们对原来实现汇率查询用的 Web API 进行重构，现在的 Maven 构建文件 pom.xml 可以直接简化成如下形式：\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.keevol.springboot.chapter5</groupId>\n    <artifactId>currency-webapi-with-scala</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <packaging>jar</packaging>\n    <name>currency-webapi-with-scala</name>\n    <description>Demo project for Spring Boot</description>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>1.3.1.RELEASE</version>\n        <relativePath /> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <java.version>1.8</java.version>\n        <scala.version>2.11.7</scala.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>com.keevol.springboot</groupId>\n            <artifactId>currency-rates-service</artifactId>\n            <version>1.0-SNAPSHOT</version>\n        </dependency>\n        <dependency>\n            <groupId>com.keevol.springboot</groupId>\n            <artifactId>spring-boot-starter-webapi-scala</artifactId>\n            <version>0.0.1-SNAPSHOT</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n            <plugin>\n                <groupId>net.alchim31.maven</groupId>\n                <artifactId>scala-maven-plugin</artifactId>\n                <version>3.2.2</version>\n                <executions>\n                    <execution>\n                        <id>compile-scala</id>\n                        <phase>compile</phase>\n                        <goals>\n                            <goal>add-source</goal>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile-scala</id>\n                        <phase>test-compile</phase>\n                        <goals>\n                            <goal>add-source</goal>\n                            <goal>testCompile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <recompileMode>incremental</recompileMode>\n                    <scalaVersion>${scala.version}</scalaVersion>\n                    <args>\n                        <arg>-deprecation</arg>\n                    </args>\n                    <jvmArgs>\n                        <jvmArg>-Xms64m</jvmArg>\n                        <jvmArg>-Xmx1024m</jvmArg>\n                    </jvmArgs>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project> \n我们现在只要配置针对 spring-boot-starter-webapi-scala 自动配置模块的依赖就可以了，当然，Scala 编译插件 scala-maven-plugin 这里是直接配置当前项目，可以根据前面的思路进一步简化配置。\n\n因为之前是使用 Java 来定义值对象（Value Object），所以，这次我们直接使用 Scala 的 case class 来完成同样目的：\npackage com.mengma.springboot..vocase class Quote(symbol: String, sell: BigDecimal, buy: BigDecimal)\n\n然后为了演示混合类型到 JSON 序列化的目的，我们在原来的 API 基础上开放一个查询最近 n 条行情的 Web API 接口定义：\n...\n@RequestMapping(value = Array("/list"), method =\nArray(RequestMethod.GET), produces = Array(APPLICATION_JSON_VALUE))\ndef listQuote(symbol: String, @RequestParam(required = false) lastN: Int =\n10): WebApiResponse[List[Quote]] = {\n    // Just a demo, you should retrieve the quotes from your counterparty serivces\n    // as per the requested currenypair symbol\n    val quotes = List(Quote("USD/JPY",\n        BigDecimal("113.94"), BigDecimal("113.96")), Quote("USD/JPY",\n        BigDecimal("112.94"), BigDecimal("112.96")), Quote("USD/JPY",\n        BigDecimal("111.94"), BigDecimal("111.96")) )\n    val\n        response:WebApiResponse[List[Quote]] = new Web-ApiResponse[List[Quote]]\n        response.setCode(WebApiResponse.SUCCESS_CODE) response.setData(quotes)\n        response\n} ... \n可以看到，我们的 Web API 返回结果混合了 Java 对象类型（WebApiResponse）以及 Scala 对象类型（List 和 Quote），当然，只是实例代码，我们只是构造了模拟的行情数据，实际情况下，大家需要根据上游外汇交易商提供的行情数据进行下发。\n\n最后，为了序列化可以成功，我们需要将 com.fasterxml.jackson.module.scala.DefaultScalaModule 注入 SpringBoot 的应用容器中，从而完成 Scala 类型数据序列化的整个准备工作：\n@SpringBootApplication\nclass ScalaCurrencyWebApiApplication {\n// 其他Bean定义...\n@Bean def jacksonModuleScala(): Module =\nDefaultScalaModule}object ScalaCurrencyWebApiApplication{\n    def main(args: Array[String]) {\n        SpringApplication.run(classOf[ScalaCurrencyWebApiApplication], args: _*)\n    }\n}\n通过 mvn spring-boot：run 启动我们的 Web API 微服务，访问 http://localhost：8080/list？symbol=USDJPY，即可得到如图 1 所示的结果。\n\n')])])]),a("p",[a("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190805/5-1ZP5154133135.png",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);