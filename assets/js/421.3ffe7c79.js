(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{909:function(n,e,t){"use strict";t.r(e);var r=t(6),s=Object(r.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"spring-mvc拦截器实现用户登录权限验证案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc拦截器实现用户登录权限验证案例"}},[this._v("#")]),this._v(" Spring MVC拦截器实现用户登录权限验证案例")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('本节将通过拦截器来完成一个用户登录权限验证的 Web 应用 springMVCDemo07，具体要求如下：只有成功登录的用户才能访问系统的主页面 main.jsp，如果没有成功登录而直接访问主页面，则拦截器将请求拦截，并转发到登录页面 login.jsp。当成功登录的用户在系统主页面中单击“退出”链接时回到登录页面。\n\n具体实现步骤如下：\n1）创建应用\n创建 Web 应用 springMVCDemo07，并将 Spring MVC 相关的 JAR 包复制到 lib 目录中。\n2）创建 POJO 类\n在 springMVCDemo07 的 src 目录中创建 pojo 包，并在该包中创建 User 类，具体代码如下：\npublic class User {\n    private String uname;\n    private String upwd;\n    //省略setter和getter方法\n}\n3）创建控制器类\n在 springMVCDemo07 的 src 目录中创建 controller 包，并在该包中创建控制器类 UserController，具体代码如下：\npackage controller;\nimport javax.servlet.http.HttpSession;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport pojo.User;\n@Controller\npublic class UserController {\n    /**\n     * 登录页面初始化\n     */\n    @RequestMapping("/toLogin")\n    public String initLogin() {\n        return "login";\n    }\n    /**\n     * 处理登录功能\n     */\n    @RequestMapping("/login")\n    public String login(User user, Model model, HttpSession session) {\n        System.out.println(user.getUname());\n        if ("zhangsan".equals(user.getUname())\n                && "123456".equals(user.getUpwd())) {\n            // 登录成功，将用户信息保存到session对象中\n            session.setAttribute("user", user);\n            // 重定向到主页面的跳转方法\n            return "redirect:main";\n        }\n        model.addAttribute("msg", "用户名或密码错误，请重新登录！ ");\n        return "login";\n    }\n    /**\n     * 跳转到主页面\n     */\n    @RequestMapping("/main")\n    public String toMain() {\n        return "main";\n    }\n    /**\n     * 退出登录\n     */\n    @RequestMapping("/logout")\n    public String logout(HttpSession session) {\n        // 清除 session\n        session.invalidate();\n        return "login";\n    }\n}\n4）创建拦截器类\n在 springMVCDemo07 的 src 目录中创建 interceptor 包，并在该包中创建拦截器类 LoginInterceptor，具体代码如下：\npackage interceptor;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport javax.servlet.http.HttpSession;\nimport org.springframework.web.servlet.HandlerInterceptor;\nimport org.springframework.web.servlet.ModelAndView;\npublic class LoginInterceptor implements HandlerInterceptor {\n    @Override\n    public boolean preHandle(HttpServletRequest request,\n            HttpServletResponse response, Object handler) throws Exception {\n        // 获取请求的URL\n        String url = request.getRequestURI();\n        // login.jsp或登录请求放行，不拦截\n        if (url.indexOf("/toLogin") >= 0 || url.indexOf("/login") >= 0) {\n            return true;\n        }\n        // 获取 session\n        HttpSession session = request.getSession();\n        Object obj = session.getAttribute("user");\n        if (obj != null)\n            return true;\n        // 没有登录且不是登录页面，转发到登录页面，并给出提示错误信息\n        request.setAttribute("msg", "还没登录，请先登录！");\n        request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request,\n                response);\n        return false;\n    }\n    @Override\n    public void afterCompletion(HttpServletRequest arg0,\n            HttpServletResponse arg1, Object arg2, Exception arg3)\n            throws Exception {\n        // TODO Auto-generated method stub\n    }\n    @Override\n    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,\n            Object arg2, ModelAndView arg3) throws Exception {\n        // TODO Auto-generated method stub\n    }\n}\n5）配置拦截器\n在 WEB-INF 目录下创建配置文件 springmvc-servlet.xml 和 web.xml。web.xml 的代码和 springMVCDemo07 一样，这里不再赘述。在 springmvc-servlet.xml 文件中配置拦截器 LoginInterceptor，具体代码如下：\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:mvc="http://www.springframework.org/schema/mvc"\n    xmlns:p="http://www.springframework.org/schema/p"\n    xmlns:context="http://www.springframework.org/schema/context"\n    xsi:schemaLocation="\n        http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        http://www.springframework.org/schema/context/spring-context.xsd\n        http://www.springframework.org/schema/mvc\n        http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n    \x3c!-- 使用扫描机制扫描控制器类 --\x3e\n    <context:component-scan base-package="controller" />\n    \x3c!-- 配置视图解析器 --\x3e\n    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/jsp/" />\n        <property name="suffix" value=".jsp" />\n    </bean>\n    \x3c!-- 配置拦截器 --\x3e\n    <mvc:interceptors>\n        <mvc:interceptor>\n            \x3c!-- 配置拦截器作用的路径 --\x3e\n            <mvc:mapping path="/**" />\n            <bean class="interceptor.LoginInterceptor" />\n        </mvc:interceptor>\n    </mvc:interceptors>\n</beans>\n6）创建视图 JSP 页面\n在 WEB-INF 目录下创建文件夹 jsp，并在该文件夹中创建 login.jsp 和 main.jsp。\n\nlogin.jsp 的代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>Insert title here</title>\n</head>\n<body>\n    ${msg }\n    <form action="${pageContext.request.contextPath }/login" method="post">\n        用户名：<input type="text" name="uname" /><br>\n        密码：<input type="password" name="upwd" /><br>\n        <input type="submit" value="登录" />\n    </form>\n</body>\n</html>\nmain.jsp 的代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\npageEncoding="UTF-8"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>Insert title here</title>\n</head>\n<body>\n    当前用户：${user.uname }<br />\n    <a href="${pageContext.request.contextPath }/logout">退出</a>\n</body>\n</html>\n7）发布并测试应用\n首先将 springMVCDemo07 应用发布到 Tomcat 服务器并启动 Tomcat 服务器，然后通过地址“http://localhost:8080/springMVCDemo07/main”\n\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);