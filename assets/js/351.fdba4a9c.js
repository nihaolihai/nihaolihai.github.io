(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{847:function(e,t,n){"use strict";n.r(t);var a=n(6),r=Object(a.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"spring-cloud-gateway过滤器工厂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway过滤器工厂"}},[this._v("#")]),this._v(" Spring Cloud Gateway过滤器工厂")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('GatewayFilter Factory 是 Spring Cloud Gateway 中提供的过滤器工厂。Spring Cloud Gateway 的路由过滤器允许以某种方式修改传入的 HTTP 请求或输出的 HTTP 响应，只作用于特定的路由。\n\nSpring Cloud Gateway 中内置了很多过滤器工厂，直接采用配置的方式使用即可，同时也支持自定义 GatewayFilter Factory 来实现更复杂的业务需求。\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: add_request_header_route\n  uri: http://c.biancheng.net\n  filters:\n    - AddRequestHeader=X-Request-Foo, Bar\n\n接下来为大家介绍几个常用的过滤器工厂类。\n1. AddRequestHeader 过滤器工厂\n通过名称我们可以快速明白这个过滤器工厂的作用是添加请求头。\n\n符合规则匹配成功的请求，将添加 X-Request-Foo：bar 请求头，将其传递到后端服务中，后方服务可以直接获取请求头信息。代码如下所示。\n@GetMapping("/hello")\npublic String hello(HttpServletRequest request) throws Exception {\n    System.err.println(request.getHeader("X-Request-Foo"));\n    return "success";\n}\n2. RemoveRequestHeader 过滤器工厂\nRemoveRequestHeader 是移除请求头的过滤器工厂，可以在请求转发到后端服务之前进行 Header 的移除操作。\nspring:\n  cloud:\n    gateway:\n      routes:\n  - id: removerequestheader_route\n  uri: http://c.biancheng.net\n    - RemoveRequestHeader=X-Request-Foo\n\n3. SetStatus 过滤器工厂\nSetStatus 过滤器工厂接收单个状态，用于设置 Http 请求的响应码。它必须是有效的 Spring Httpstatus（org.springframework.http.HttpStatus）。它可以是整数值 404 或枚举类型 NOT_FOUND。\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: setstatusint_route\n  uri: http://c.biancheng.net\n  filters:\n    - SetStatus=401\n\n4. RedirectTo过滤器工厂\nRedirectTo 过滤器工厂用于重定向操作，比如我们需要重定向到百度。\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: prefixpath_route\n  uri: http://c.biancheng.net\n  filters:\n    - RedirectTo=302, http://baidu.com\n\n以上为大家介绍了几个过滤器工厂的使用，教程后面还会为大家介绍 Retry 重试、RequestRateLimiter 限流、Hystrix 熔断过滤器工厂等内容，其他的大家可以自行参考官方文档进行学习。\n自定义Spring Cloud Gateway过滤器工厂\n自定义 Spring Cloud Gateway 过滤器工厂需要继承 AbstractGatewayFilterFactory 类，重写 apply 方法的逻辑。命名需要以 GatewayFilterFactory 结尾，比如 CheckAuthGatewayFilterFactory，那么在使用的时候 CheckAuth 就是这个过滤器工厂的名称。\n\n自定义过滤器工厂代码如下所示。\n@Component\npublic class CheckAuth2GatewayFilterFactory\n        extends AbstractGatewayFilterFactory<CheckAuth2GatewayFilterFactory.Config> {\n    public CheckAuth2GatewayFilterFactory() {\n        super(Config.class);\n    }\n    @Override\n    public GatewayFilter apply(Config config) {\n    return (exchange, chain) -> {\n      System.err.println("进入了CheckAuth2GatewayFilterFactory" + config.getName());\n      ServerHttpRequest request = exchange.getRequest().mutate()\n      .build();\n      return\n      chain.filter(exchange.mutate().request(request).build());\n    }\n  }\n    public static class Config {\n        private String name;\n        public void setName(String name) {\n            this.name = name;\n        }\n        public String getName() {\n            return name;\n        }\n    }\n}\n使用如下：\nfilters:\n  - name: CheckAuth2\n  args:\n    name: 张三\n\n如果你的配置是 Key、Value 这种形式的，那么可以不用自己定义配置类，直接继承 AbstractNameValueGatewayFilterFactory 类即可。\n\nAbstractNameValueGatewayFilterFactory 类继承了 AbstractGatewayFilterFactory，定义了一个 NameValueConfig 配置类，NameValueConfig 中有 name 和 value 两个字段。\n\n我们可以直接使用，AddRequestHeaderGatewayFilterFactory、AddRequestParameterGatewayFilterFactory 等都是直接继承的 AbstractNameValueGatewayFilterFactory。\n\n继承 AbstractNameValueGatewayFilterFactory 方式定义过滤器工厂，代码如下所示。\n@Component\npublic class CheckAuthGatewayFilterFactory extends AbstractNameValueGatewayFilter-actory {\n    @Override\n    public GatewayFilter apply(NameValueConfig config) {\n        return (exchange, chain) -> {\n            System.err.println("进入了CheckAuthGatewayFilterFactory" + config.getName() + "\\t" + config.getValue());\n            ServerHttpRequest request = exchange.getRequest().mutate().build();\n            return chain.filter(exchange.mutate().request(request).build());\n        };\n    }\n}\n使用如下：\nfilters：\n        - CheckAuth=zhangsan,男\n\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);