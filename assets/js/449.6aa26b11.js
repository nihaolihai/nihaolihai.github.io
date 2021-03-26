(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{952:function(e,t,n){"use strict";n.r(t);var r=n(6),s=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"spring-mvc中-modelattribute注解的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc中-modelattribute注解的使用"}},[this._v("#")]),this._v(" Spring MVC中@ModelAttribute注解的使用")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('通过 org.springframework.web.bind.annotation.ModelAttribute 注解类型可经常实现以下两个功能：\n1）绑定请求参数到实体对象（表单的命令对象）\n@RequestMapping("/register")\npublic String register(@ModelAttribute("user") UserForm user) {\n    if ("zhangsan".equals(uname) && "123456".equals(upass)) {\n        logger.info("成功");\n        return "login";\n    } else {\n        logger.info("失败");\n        return "register";\n}\n在上述代码中“@ModelAttribute（"user"）UserForm user”语句的功能有两个：\n将请求参数的输入封装到 user 对象中。\n创建 UserForm 实例。\n\n以“user”为键值存储在 Model 对象中，和“model.addAttribute（"user"，user）”语句的功能一样。如果没有指定键值，即“@ModelAttribute UserForm user”，那么在创建 UserForm 实例时以“userForm”为键值存储在 Model 对象中，和“model.addAtttribute（"userForm", user）”语句的功能一样。\n2）注解一个非请求处理方法\n被 @ModelAttribute 注解的方法将在每次调用该控制器类的请求处理方法前被调用。这种特性可以用来控制登录权限，当然控制登录权限的方法有很多，例如拦截器、过滤器等。\n\n使用该特性控制登录权限，创建 BaseController，代码如下所示：\npackage controller;\nimport javax.servlet.http.HttpSession;\nimport org.springframework.web.bind.annotation.ModelAttribute;\npublic class BaseController {\n    @ModelAttribute\n    public void isLogin(HttpSession session) throws Exception {\n        if (session.getAttribute("user") == null) {\n            throw new Exception("没有权限");\n        }\n    }\n}\n创建 ModelAttributeController ，代码如下所示：\npackage controller;\nimport org.springframework.web.bind.annotation.RequestMapping;\n@RequestMapping("/admin")\npublic class ModelAttributeController {\n    @RequestMapping("/add")\n    public String add() {\n        return "addSuccess";\n    }\n    @RequestMapping("/update")\n    public String update() {\n        return "updateSuccess";\n    }\n    @RequestMapping("/delete")\n    public String delete() {\n        return "deleteSuccess";\n    }\n}\n在上述 ModelAttributeController 类中的 add、update、delete 请求处理方法执行时，首先执行父类 BaseController 中的 isLogin 方法判断登录权限，可以通过地址“http://localhost：8080/springMVCDemo02/admin/add”测试登录权限。\n\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);