(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{913:function(n,e,r){"use strict";r.r(e);var o=r(6),t=Object(o.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"spring-mvc验证器应用实例-超详细"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc验证器应用实例-超详细"}},[this._v("#")]),this._v(" Spring MVC验证器应用实例（超详细）")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('编写一个实现 org.springframework.validation.Validator 接口的验证器类 GoodsValidator，验证要求如下：\n商品名和商品详情不能为空。\n商品价格在 0 到 100。\n创建日期不能在系统日期之后。\n\n根据上述要求，按照如下步骤完成 springMVCDemo08 应用。\n1）创建应用\n创建 springMVCDemo08 应用，并导入 Spring MVC 的相关 JAR 包。另外，需要使用 JSTL 标签显示数据，所以需要导入 JSTL 的 JAR 包。springMVCDemo08 需要的 JAR 包和《Spring MVC数据绑定和表单标签》教程中 springMVCDemo04 应用相同，在这里不在赘述。\n2）创建数据输入页面\n在 WEB-INF 目录下创建文件夹 jsp，并在该文件夹中创建数据输入页面 addGoods.jsp。代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>添加商品</title>\n</head>\n<body>\n    <form:form modelAttribute="goods"\n        action="${pageContext.request. contextPath }/goods/save" method="post">\n        <fieldset>\n            <legend> 添加一件商品 </legend>\n            <P>\n                <label>商品名:</label>\n                <form:input path="gname" />\n            </p>\n            <p>\n                <label>商品详情:</label>\n                <form:input path="gdescription" />\n            </p>\n            <P>\n                <label>商品价格:</label>\n                <form:input path="gprice" />\n            </p>\n            <P>\n                <label>创建日期:</label>\n                <form:input path="gdate" />\n                (yyyy-MM-dd)\n            </p>\n            <p id="buttons">\n                <input id="reset" type="reset">\n                <input id="submit" type="submit" value="添加">\n            </p>\n        </fieldset>\n        \x3c!-- 取出所有验证错误 --\x3e\n        <form:errors path="*" />\n    </form:form>\n</body>\n</html>\n3）编写模型类\n在 src 目录下创建 pojo 包，并在该包中定义领域模型类 Goods，封装输入参数。在该类中使用 @DateTimeFormat（pattern="yyyy-MM-dd"）格式化创建日期。\n\n模型类 Goods 的具体代码如下：\npackage pojo;\nimport java.util.Date;\nimport org.springframework.format.annotation.DateTimeFormat;\npublic class Goods {\n    private String gname;\n    private String gdescription;\n    private double gprice;\n    // 日期格式化（需要在配置文件中配置FormattingConversionServiceFactoryBean)\n    @DateTimeFormat(pattern = "yyyy-MM-dd")\n    private Date gdate;\n    public String getGname() {\n        return gname;\n    }\n    public void setGname(String gname) {\n        this.gname = gname;\n    }\n    public String getGdescription() {\n        return gdescription;\n    }\n    public void setGdescription(String gdescription) {\n        this.gdescription = gdescription;\n    }\n    public double getGprice() {\n        return gprice;\n    }\n    public void setGprice(double gprice) {\n        this.gprice = gprice;\n    }\n    public Date getGdate() {\n        return gdate;\n    }\n    public void setGdate(Date gdate) {\n        this.gdate = gdate;\n    }\n}\n4）编写验证器类\n在 src 目录下创建 validator 包，并在该包中编写实现 org.springframework.validation.Validator 接口的验证器类 GoodsValidator，使用 @Component 注解将 GoodsValidator 类声明为验证组件。具体代码如下：\npackage validator;\nimport java.util.Date;\nimport org.springframework.stereotype.Component;\nimport org.springframework.validation.Errors;\nimport org.springframework.validation.ValidationUtils;\nimport org.springframework.validation.Validator;\nimport pojo.Goods;\n@Component\npublic class GoodsValidator implements Validator {\n    @Override\n    public boolean supports(Class<?> klass) {\n        // 要验证的model,返回值为false则不验证\n        return Goods.class.isAssignableFrom(klass);\n    }\n    @Override\n    public void validate(Object object, Errors errors) {\n        Goods goods = (Goods) object; // object要验证的对象\n        // goods.gname.required是错误消息属性文件中的编码(国际化后对应的是国际化的信息)\n        ValidationUtils.rejectIfEmpty(errors, "gname", "goods. gname.required");\n        ValidationUtils.rejectIfEmpty(errors, "gdescription",\n                "goods.gdescription.required");\n        if (goods.getGprice() > 100 || goods.getGprice() < 0) {\n            errors.rejectValue("gprice", "gprice.invalid");\n        }\n        Date goodsDate = goods.getGdate();\n        // 在系统时间之后\n        if (goodsDate != null && goodsDate.after(new Date())) {\n            errors.rejectValue("gdate", "gdate.invalid");\n        }\n    }\n}\n5）编写错误消息属性文件\n在 WEB-INF 目录下创建文件夹 resource，并在该文件夹中编写属性文件 errorMessages.properties。文件内容如下：\ngoods.gname.required=请输入商品名称\ngoods.gdescription.required=请输入商品详情\ngprice.invalid=价格为0~100\ngdate.invalid=创建日期不能在系统日期之后\n\nUnicode 编码（MyEclipse 带有将汉字转换成 Unicode 编码的功能）的属性文件内容如下：\ngoods.gname.required=\\u8BF7\\u8F93\\u5165\\u5546\\u54C1\\u540D\\u79F0\ngoods.gdescription.required=\\u8BF7\\u8F93\\u5165\\u5546\\u54C1\\u8BE6\\u60C5\ngprice.invalid=\\u4EF7\\u683C\\u4E3A0~100\ngdate.invalid=\\u521B\\u5EFA\\u65E5\\u671F\\u4E0D\\u80FD\\u5728\\u7CFB\\u7EDF\\u65E5\\u671F\\u4E4B\\u540E\n\n在属性文件创建完成后需要告诉 Spring MVC 从该文件中获取错误消息，则需要在配置文件中声明一个 messageSource bean，具体代码如下：\n\x3c!-- 配置消息属性文件 --\x3e\n<bean id="messageSource"\n    class="org.springframework.context.support.ReloadableResourceBundleMessageSource">\n    <property name="basename" value="/WEB-INF/resource/errorMessages" />\n</bean>\n6）编写 Service 层\n在 src 目录下创建 service 包，并在该包中编写一个 GoodsService 接口。具体代码如下：\npackage service;\nimport java.util.ArrayList;\nimport pojo.Goods;\npublic interface GoodsService {\n    public boolean save(Goods g);\n    public ArrayList<Goods> getGoods();\n}\nGoodsServiceImpl 实现类具体代码如下：\npackage service;\nimport java.util.ArrayList;\nimport org.springframework.stereotype.Service;\nimport pojo.Goods;\n@Service\npublic class GoodsServiceImpl implements GoodsService {\n    // 使用静态集合变量goods模拟数据库\n    private static ArrayList<Goods> goods = new ArrayList<Goods>();\n    @Override\n    public boolean save(Goods g) {\n        goods.add(g);\n        return true;\n    }\n    @Override\n    public ArrayList<Goods> getGoods() {\n        return goods;\n    }\n}\n7）编写控制器类\n在 src 目录下创建 controller 包，并在该包中编写控制器类 GoodsController，在该类中使用 @Resource 注解注入自定义验证器。另外，在控制器类中包含两个处理请求的方法，具体代码如下：\npackage controller;\nimport javax.annotation.Resource;\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.validation.BindingResult;\nimport org.springframework.validation.Validator;\nimport org.springframework.web.bind.annotation.ModelAttribute;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport pojo.Goods;\nimport service.GoodsService;\n@Controller\n@RequestMapping("/goods")\npublic class GoodsController {\n    // 得到一个用来记录日志的对象，这样在打印信息的时候能够标记打印的是哪个类的信息\n    private static final Log logger = LogFactory.getLog(GoodsController.class);\n    @Autowired\n    private GoodsService goodsService;\n    // 注解验证器相当于"GoodsValidator validator=new GoodsValidator () ; "\n    @Resource\n    private Validator validator;\n    @RequestMapping("/input")\n    public String input(Model model) {\n        // 如果model中没有goods属性，addGoods.jsp会抛出异常\n        // 因为表单标签无法找到modelAttribute属性指定的form backing object\n        model.addAttribute("goods", new Goods());\n        return "addGoods";\n    }\n    @RequestMapping("/save")\n    public String save(@ModelAttribute Goods goods, BindingResult result,\n            Model model) {\n        this.validator.validate(goods, result); // 添加验证\n        if (result.hasErrors()) {\n            return "addGoods";\n        }\n        goodsService.save(goods);\n        logger.info("添加成功");\n        model.addAttribute("goodsList", goodsService.getGoods());\n        return "goodsList";\n    }\n}\n8）编写配置文件\n在 WEB-INF 目录下编写配置文件 springmvc-servlet.xml，具体代码如下：\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:mvc="http://www.springframework.org/schema/mvc"\n    xmlns:p="http://www.springframework.org/schema/p"\n    xmlns:context="http://www.springframework.org/schema/context"\n    xsi:schemaLocation="\n        http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        http://www.springframework.org/schema/context/spring-context.xsd\n        http://www.springframework.org/schema/mvc\n        http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n    \x3c!-- 使用扫描机制扫描包 --\x3e\n    <context:component-scan base-package="controller" />\n    <context:component-scan base-package="service" />\n    <context:component-scan base-package="validator" />\n    \x3c!-- 注册格式化转换器，因为用到日期转换 --\x3e\n    <bean id="conversionService"\n        class="org.springframework.format.support.FormattingConversionServiceFactoryBean">\n    </bean>\n    \x3c!-- 配置视图解析器 --\x3e\n    <bean\n        class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/jsp/" />\n        <property name="suffix" value=".jsp" />\n    </bean>\n    \x3c!-- 配置消息属性文件 --\x3e\n    <bean id="messageSource"\n        class="org.springframework.context.support.ReloadableResourceBundleMessageSource">\n        <property name="basename" value="/WEB-INF/resource/errorMessages" />\n    </bean>\n</beans>\n9）创建数据显示页面\n在 WEB-INF/jsp 目录下创建数据显示页面 goodsList.jsp。核心代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>Insert title here</title>\n</head>\n<body>\n    <table>\n        <tr>\n            <td>商品名</td>\n            <td>商品详情</td>\n            <td>商品价格</td>\n            <td>创建日期</td>\n        </tr>\n        <c:forEach items="${goodsList }" var="goods">\n            <tr>\n                <td>${goods.gname }</td>\n                <td>${goods.gdescription }</td>\n                <td>${goods.gprice }</td>\n                <td>${goods.gdate }</td>\n            </tr>\n        </c:forEach>\n    </table>\n</body>\n</html>\n10）创建 web.xml 文件\n在 WEB-INF 目录下创建 web.xml 文件，在该文件中配置 Spring MVC 的核心控制器 DispatcherServlet 和字符编码过滤器，具体代码如下：\n<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n    xmlns="http://java.sun.com/xml/ns/javaee" \n    xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" \n    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" version="3.0">\n    \x3c!--配置DispatcherServlet--\x3e\n    <servlet>\n        <servlet-name>springmvc</servlet-name>\n        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <load-on-startup>1</load-on-startup>\n    </servlet>\n    <servlet-mapping>\n        <servlet-name>springmvc</servlet-name>\n        <url-pattern>/</url-pattern>\n    </servlet-mapping>\n    \x3c!--避免中文乱码--\x3e\n    <filter>\n        <filter-name>encodingFilter</filter-name>\n        <filter-class>\n             org.springframework.web.filter.CharacterEncodingFilter\n        </filter-class>\n    <init-param>\n        <param-name>encoding</param-name>\n        <param-value>UTF-8</param-value>\n    </init-param>\n    <init-param>\n        <param-name>forceEncoding</param-name>\n        <param-value>true</param-value>\n    </init-param>\n    </filter>\n    <filter-mapping>\n        <filter-name>encodingFilter</filter-name>\n        <url-pattern>/*</url-pattern>\n    </filter-mapping>\n</web-app>\n11）测试应用\n发布 springMVCDemo08 应用并启动 Tomcat 服务器，然后通过地址“http://localhost：8080/springMVCDemo08/goods/input”测试应用。\n\n当输入价格大于 100 元时，下面会提示“价格为0~100”的信息，如图 3  所示。\n\n')])])]),e("p",[e("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190717/5-1ZGG0563BQ.png",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);e.default=t.exports}}]);