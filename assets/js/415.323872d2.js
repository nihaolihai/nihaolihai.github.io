(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{906:function(n,t,e){"use strict";e.r(t);var r=e(6),o=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"spring-mvc-formatter-数据格式化-详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-formatter-数据格式化-详解"}},[this._v("#")]),this._v(" Spring MVC Formatter（数据格式化）详解")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('Spring MVC 框架的 Formatter<T> 与 Converter<S，T> 一样，也是一个可以将一种数据类型转换成另一种数据类型的接口。不同的是，Formatter<T> 的源数据类型必须是 String 类型，而 Converter<S，T> 的源数据类型是任意数据类型。\n\n在 Web 应用中由 HTTP 发送的请求数据到控制器中都是以 String 类型获取，因此在 Web 应用中选择 Formatter<T> 比选择 Converter<S，T> 更加合理。\n内置的格式化转换器\nSpring MVC 提供了几个内置的格式化转换器，具体如下。\nNumberFormatter：实现 Number 与 String 之间的解析与格式化。\nCurrencyFormatter：实现 Number 与 String 之间的解析与格式化（带货币符号）。\nPercentFormatter：实现 Number 与 String 之间的解析与格式化（带百分数符号）。\nDateFormatter：实现 Date 与 String 之间的解析与格式化。\n自定义格式化转换器\n自定义格式化转换器就是编写一个实现 org.springframework.format.Formatter 接口的 Java 类。该接口声明如下：\npublic interface Formatter<T>\n\n这里的 T 表示由字符串转换的目标数据类型。该接口有 parse 和 print 两个接口方法，自定义格式化转换器类必须覆盖它们。\npublic T parse(String s,java.util.Locale locale)\npublic String print(T object,java.util.Locale locale)\n\nparse 方法的功能是利用指定的 Locale 将一个 String 类型转换成目标类型，print 方法与之相反，用于返回目标对象的字符串表示。\n\n下面通过具体应用 springMVCDemo04 讲解自定义格式化转换器的用法，springMVCDemo04  应用与 springMVCDemo03 应用具有相同的 JAR 包、web.xml。\n\n应用的具体要求如下：\n\n1）用户在页面表单中输入信息来创建商品，输入页面效果如图 1 所示。\n\n信息输入页面\n图 1  信息输入页面\n\n2）控制器使用实体 bean 类 GoodsModelb 接收页面提交的请求参数，GoodsModelb 类的属性如下。\nprivate String goodsname;\nprivate double goodsprice;\nprivate int goodsnumber;\nprivate Date goodsdate;\n3）GoodsModelb 实体类接收请求参数时，商品名称、价格和数量使用内置的类型转换器完成转换；商品日期需要用自定义的格式化转换器完成。\n\n4）用格式化转换器转换之后的数据显示在 showGoodsb.jsp 页面，效果如图 2 所示。\n\n格式化后信息的显示页面\n图 2  格式化后信息的显示页面\n\n由图 2 可以看出，日期由字符串值“2018-02-22”格式化成 Date 类型。\n\n如果想实现上述 springMVCDemo04 应用的需求，需要做以下 5 件事：\n创建实体类；\n创建控制器类；\n创建自定义格式化转换器类；\n注册格式化转换器；\n创建相关视图。\n\n按照上述步骤采用自定义格式化转换器完成需求。\n1）创建实体类\n在 springMVCDemo04 的 src 目录下创建 pojo 包，并在该包中创建名为 GoodsModelb 的实体类，代码如下：\npackage pojo;\nimport java.util.Date;\npublic class GoodsModel {\n    private String goodsname;\n    private double goodsprice;\n    private int goodsnumber;\n    private Date goodsdate;\n    //省略setter和getter方法\n}\n2）创建控制器类\n在 springMVCDemo04 的 src 目录下创建 controller 包，并在该包中创建名为 FormatterController 的控制器类，代码如下：\npackage controller;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport pojo.GoodsModelb;\n@Controller\npublic class FormatterController {\n    @RequestMapping("/formatter")\n    public String myConverter(GoodsModelb gm, Model model) {\n        model.addAttribute("goods", gm);\n        return "showGoodsb";\n    }\n}\n3）创建自定义格式化转换器类\n在 springMVCDemo04 的 src 目录下创建 formatter 包，并在该包中创建名为 MyFormatter 的自定义格式化转换器类，代码如下：\npackage controller;\nimport java.text.ParseException;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.Locale;\nimport org.springframework.format.Formatter;\npublic class MyFormatter implements Formatter<Date> {\n    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");\n    public String print(Date object, Locale arg1) {\n        return dateFormat.format(object);\n    }\n    public Date parse(String source, Locale arg1) throws ParseException {\n        return dateFormat.parse(source); // Formatter只能对字符串转换\n    }\n}\n4）注册格式化转换器\n在 springMVCDemo04  的 WEB-INF 目录下创建配置文件 springmvc-servlet.xml，并在配置文件中注册格式化转换器，具体代码如下：\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc"\n    xmlns:p="http://www.springframework.org/schema/p" xmlns:context="http://www.springframework.org/schema/context"\n    xsi:schemaLocation="\n        http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        http://www.springframework.org/schema/context/spring-context.xsd\n        http://www.springframework.org/schema/mvc\n        http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n    \x3c!-- 使用扫描机制扫描controller包 --\x3e\n    <context:component-scan base-package="controller" />\n    \x3c!--注册MyFormatter--\x3e\n    <bean id="conversionService" class="org.springframework.context.support.ConversionServiceFactoryBean">\n        <property name="formatters">\n            <list>\n                <bean class="formatter.MyFormatter"/>\n            </list>\n        </property>\n    </bean>\n    <mvc:annotation-driven conversion-service="conversionService"/>\n    <bean\n        class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/jsp/" />\n        <property name="suffix" value=".jsp" />\n    </bean>\n</beans>\n5）创建相关视图\n在 springMVCDemo04  应用的 WebContent 目录下创建信息输入页面 inputb.jsp，核心代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>添加商品信息</title>\n</head>\n<body>\n    <form action="addGoods" method="post">\n        <table border=1 bgcolor="lightblue" align="center">\n            <tr>\n                <td>商品名称：</td>\n                <td><input class="textSize" type="text" name="goodsname" /></td>\n            </tr>\n            <tr>\n                <td>商品价格：</td>\n                <td><input class="textSize" type="text" name="goodsprice" /></td>\n            </tr>\n            <tr>\n                <td>商品数量：</td>\n                <td><input class="textSize" type="text" name="goodsnumber" /></td>\n            </tr>\n            <tr>\n                <td>商品日期：</td>\n                <td><input class="textSize" type="text" name="goodsdata" />（yyyy-MM-dd）</td>\n            </tr>\n            <tr>\n                <td colspan="2" align="center">\n                    <input type="submit" value="提交" />\n                </td>\n            </tr>\n        </tab1e>\n    </form>\n</body>\n</html>\n在 springMVCDemo04 应用的 /WEB-INF/jsp 目录下创建信息显示页面 showGoodsb.jsp，核心代码如下：\n<body>\n    您创建的商品信息如下：\n    \x3c!-- 使用EL表达式取出Action类的属性goods的值 --\x3e\n    商品名称为：${goods.goodsname }<br/>\n    商品价格为：${goods.goodsprice }<br/>\n    商品名称为：${goods.goodsnumber }<br/>\n    商品日期为：${goods.goodsdate}\n</body>\n最后通过地址“http://localhost：8080/springMVCDemo04/inputb.jsp”测试应用。\n\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);