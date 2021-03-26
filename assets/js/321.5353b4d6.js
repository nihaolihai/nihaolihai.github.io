(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{810:function(e,n,r){"use strict";r.r(n);var a=r(6),t=Object(a.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"eureka开发时快速移除失效服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eureka开发时快速移除失效服务"}},[this._v("#")]),this._v(" Eureka开发时快速移除失效服务")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("在实际开发过程中，我们可能会不停地重启服务，由于 Eureka 有自己的保护机制，故节点下线后，服务信息还会一直存在于 Eureka 中。我们可以通过增加一些配置让移除的速度更快一点，当然只在开发环境下使用，生产环境下不推荐使用。\n\n首先在我们的 eureka-server 中增加两个配置，分别是关闭自我保护和清理间隔：\neureka.server.enable-self-preservation=false\n# 默认 60000 毫秒\neureka.server.eviction-interval-timer-in-ms=5000\n\n然后在具体的客户端服务中配置下面的内容：\neureka.client.healthcheck.enabled=true\n# 默认 30 秒\neureka.instance.lease-renewal-interval-in-seconds=5\n# 默认 90 秒\neureka.instance.lease-expiration-duration-in-seconds=5\n\neureka.client.healthcheck.enabled 用于开启健康检查，需要在 pom.xml 中引入 actuator 的依赖，代码如下所示。\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n其中：\neureka.instance.lease-renewal-interval-in-seconds 表示 Eureka Client 发送心跳给 server 端的频率。\neureka.instance.lease-expiration-duration-in-seconds 表示 Eureka Server 至上一次收到 client 的心跳之后，等待下一次心跳的超时时间，在这个时间内若没收到下一次心跳，则移除该 Instance。\n\n更多的 Instance 配置信息可参考源码中的配置类：org.springframework.cloud.netflix.eureka.EurekaInstanceConfigBean。\n\n更多的 Server 配置信息可参考源码中的配置类：org.springframework.cloud.netflix.eureka.server.EurekaServerConfigBean。\n\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);