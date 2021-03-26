(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{805:function(e,n,r){"use strict";r.r(n);var t=r(6),a=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"使用eureka编写服务提供者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用eureka编写服务提供者"}},[this._v("#")]),this._v(" 使用Eureka编写服务提供者")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('本节主要讲解如何使用 Eureka 编写服务提供者。\n1）创建项目注册到 Eureka\n注册中心已经创建并且启动好了，接下来我们实现将一个服务提供者 eureka-client-user-service 注册到 Eureka 中，并提供一个接口给其他服务调用。\n\n首先还是创建一个 Maven 项目，然后在 pom.xml 中增加相关依赖，代码如下所示。\n\x3c!-- Spring Boot --\x3e\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>2.0.6.RELEASE</version>\n    <relativePath />\n</parent>\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!-- eureka --\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    </dependency>\n</dependencies>\n\x3c!-- Spring Cloud --\x3e\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-dependencies</artifactId>\n            <version>Finchley.SR2</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n创建一个启动类 App，代码如下所示。\n@SpringBootApplication\n@EnableDiscoveryClient\npublic class App {\n    public static void main(String[] args) {\n        SpringApplication.run(App.class, args);\n    }\n}\n启动类的方法与之前没有多大区别，只是注解换成 @EnableDiscoveryClient，表示当前服务是一个 Eureka 的客户端。\n\n接下来在 src/main/resources 下面创建一个 application.properties 属性文件，增加下面的配置：\nspring.application.name= eureka-client-user-service\nserver.port=8081\neureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka/\n# 采用IP注册\neureka.instance.preferIpAddress=true\n# 定义实例ID格式\neureka.instance.instance-id=${spring.application.name}:${spring.cloud.client.ip-address}:${server.port}\n\neureka.client.serviceUrl.defaultZone 的地址就是我们之前启动的 Eureka 服务的地址，在启动的时候需要将自身的信息注册到 Eureka 中去。\n\n执行 App 启动服务，我们可以看到控制台中有输出注册信息的日志：\nDiscoveryClient_EUREKA-CLIENT-USER-SERVICE/eureka-client-user-service:192.168.31.245:8081 - registration status: 204\n\n我们可以进一步检查服务是否注册成功。回到之前打开的 Eureka 的 Web 控制台，刷新页面，就可以看到新注册的服务信息了。\n2）编写提供接口\n创建一个 Controller，提供一个接口给其他服务查询，代码如下所示。\n@RestController\npublic class UserController {\n    @GetMapping("/user/hello")\n    public String hello() {\n        return “hello”;\n    }\n}\n重启服务，访问 http://localhost:8081/user/hello (http://localhost%EF%BC%9A8081/user/hello)，如果能看到我们返回的 Hello 字符串，就证明接口提供成功了。\n\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);