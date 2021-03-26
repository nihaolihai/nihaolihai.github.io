(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{857:function(t,e,n){"use strict";n.r(e);var i=n(6),r=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"服务提供方进行调用认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务提供方进行调用认证"}},[this._v("#")]),this._v(" 服务提供方进行调用认证")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('认证过滤器的代码如下所示。\n/**\n* API 调用权限控制\n*/\npublic class HttpBasicAuthorizeFilter implements Filter {\n    JWTUtils jwtUtils = JWTUtils.getInstance();\n    @Override\n    public void init(FilterConfig filterConfig) throws ServletException {\n    }\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\n            throws IOException, ServletException {\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\n        HttpServletResponse httpResponse = (HttpServletResponse) response;\n        httpResponse.setCharacterEncoding("UTF-8");\n        httpResponse.setContentType("application/json; charset=utf-8");\n        String auth = httpRequest.getHeader("Authorization");\n        // 验证 TOKEN\n        if (!StringUtils.hasText(auth)) {\n            PrintWriter print = httpResponse.getWriter();\n            print.write(JsonUtils\n                    .toJson(ResponseData.fail("非法请求【缺少 Authorization 信息 ", ResponseCode.NO_AUTH_CODE.getCode())));\n            return;\n        }\n        JWTUtils.JWTResult jwt = jwtUtils.checkToken(auth);\n        if (!jwt.isStatus()) {\n            PrintWriter print = httpResponse.getWriter();\n            print.write(JsonUtils.toJson(ResponseData.fail(jwt.getMsg(), jwt.getCode())));\n            return;\n        }\n        chain.doFilter(httpRequest, response);\n    }\n    @Override\n    public void destroy() {\n    }\n}\n在上述 Filter 类中对所有请求进行拦截，其调用之前写好的 JwtUtils 来检查 Token 是否合法，合法则放行，不合法则拦截并给出友好提示。\n\n验证用的 Filter 类写好了，接下来就是在需要拦截请求进行验证的服务中注册 Filter。如果不需要验证那就不注册，对业务功能无任何影响。在 Spring Boot 中注册 Filter 是非常简单、方便的，代码如下所示。\n纯文本复制\n/**\n* 过滤器配置\n**/\n@Configuration\npublic class FilterConfig {\n    @Bean\n    public FilterRegistrationBean filterRegistrationBean() {\n        FilterRegistrationBean registrationBean = new FilterRegistrationBean();\n        HttpBasicAuthorizeFilter httpBasicFilter = new HttpBasicAuthorizeFilter();\n        registrationBean.setFilter(httpBasicFilter);\n        List<String> urlPatterns = new ArrayList<String>(1);\n        urlPatterns.add("/*");\n        registrationBean.setUrlPatterns(urlPatterns);\n        return registrationBean;\n    }\n}\n\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);