(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{863:function(e,t,n){"use strict";n.r(t);var r=n(6),u=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"zuul中传递token到路由的服务中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zuul中传递token到路由的服务中"}},[this._v("#")]),this._v(" Zuul中传递Token到路由的服务中")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('服务之间接口调用的安全认证是通过 Feign 的请求拦截器统一在请求头中添加 Token 信息，实现认证调用。还有一种调用方式也是需要进行认证，就是我们的 API 网关转发到具体的服务，这时候就不能采用 Feign 拦截器的方式进行 Token 的传递。\n\n在 Zuul 中我们可以用 pre 过滤器来做这件事情，在路由之前将 Token 信息添加到请求头中，然后将请求头转发到具体的服务上。\n\n通过 Zuul 的 pre 过滤器进行 Token 的设置，代码如下所示。\n/**\n* 调用服务前添加认证请求头过滤器\n**/\npublic class AuthHeaderFilter extends ZuulFilter {\n    public AuthHeaderFilter() {\n        super();\n    }\n    @Override\n    public boolean shouldFilter() {\n        RequestContext ctx = RequestContext.getCurrentContext();\n        Object success = ctx.get("isSuccess");\n        return success == null ? true : Boolean.parseBoolean(success.toString());\n    }\n    @Override\n    public String filterType() {\n        return "pre";\n    }\n    @Override\n    public int filterOrder() {\n        return 5;\n    }\n    @Override\n    public Object run() {\n        RequestContext ctx = RequestContext.getCurrentContext();\n        ctx.addZuulRequestHeader("Authorization", System.getProperty("fangjia.auth.token"));\n        return null;\n    }\n}\nToken 的刷新机制和之前讲的一模一样，还是用那个定时器，直接复制过去即可，但是必须依赖申请 Token 的 Feign 客户端的定义。\n\n')])])])])}),[],!1,null,null,null);t.default=u.exports}}]);