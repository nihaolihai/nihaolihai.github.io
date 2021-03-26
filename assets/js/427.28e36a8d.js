(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{918:function(e,n,r){"use strict";r.r(n);var o=r(6),a=Object(o.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"spring-mvc-hibernate-validator数据验证实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-hibernate-validator数据验证实例"}},[this._v("#")]),this._v(" Spring MVC Hibernate-Validator数据验证实例")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('在 springMVCDemo09 应用中不需要创建验证器类 GoodsValidator。另外，Service 层、View 层以及错误消息属性文件都与 springMVCDemo08 应用的相同。与 springMVCDemo08 应用的实现不同的是模型类、控制器类和 Spring MVC 的核心配置文件，具体如下：\n1）模型类\n在模型类 Goods 中利用 JSR 303 的标注类型对属性进行验证，具体代码如下：\npublic class Goods {\n    //goods.gname.required错误消息 key（国际化后对应的就是国际化的信息）\n    @NotBlank(message="{goods.gname.required}")\n    private String gname;\n    @NotBlank(message="{goods.gdesciption.required}")\n    private String gdescription;\n    @Range(min=0,max=100,message="{gprice.invalid}")\n    private double gprice;\n    // 日期格式化（需要在配置文件中配置FormattingConversionServiceFactoryBean)\n    @DateTimeFormat(pattern = "yyyy-MM-dd")\n    @Past(message="{gdate.invalid}")\n    private Date gdate;\n    //省略setter和getter方法\n}\n2）控制器类\n在控制器类 GoodsController 中使用 @Valid 对模型对象进行验证，具体代码如下：\npackage controller;\nimport javax.annotation.Resource;\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.validation.BindingResult;\nimport org.springframework.validation.Validator;\nimport org.springframework.web.bind.annotation.ModelAttribute;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport pojo.Goods;\nimport service.GoodsService;\n@Controller\n@RequestMapping("/goods")\npublic class GoodsController {\n    // 得到一个用来记录日志的对象，这样在打印信息的时候能够标记打印的是哪个类的信息\n    private static final Log logger = LogFactory.getLog(GoodsController.class);\n    @Autowired\n    private GoodsService goodsService;\n    @RequestMapping("/input")\n    public String input(Model model) {\n        // 如果model中没有goods属性，addGoods.jsp会抛出异常\n        // 因为表单标签无法找到modelAttribute属性指定的form backing object\n        model.addAttribute("goods", new Goods());\n        return "addGoods";\n    }\n    @RequestMapping("/save")\n    public String save(@ModelAttribute Goods goods, BindingResult result,Model model) {\n        if (result.hasErrors()) {\n            return "addGoods";\n        }\n        goodsService.save(goods);\n        logger.info("添加成功");\n        model.addAttribute("goodsList", goodsService.getGoods());\n        return "goodsList";\n    }\n}\n3）配置文件\n配置文件 springmvc-servlet.xml 的代码如下：\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:mvc="http://www.springframework.org/schema/mvc"\n    xmlns:p="http://www.springframework.org/schema/p"\n    xmlns:context="http://www.springframework.org/schema/context"\n    xsi:schemaLocation="\n        http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        http://www.springframework.org/schema/context/spring-context.xsd\n        http://www.springframework.org/schema/mvc\n        http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n    \x3c!-- 使用扫描机制扫描包 --\x3e\n    <context:component-scan base-package="controller" />\n    <context:component-scan base-package="service" />\n    \x3c!-- 配置消息属性文件 --\x3e\n    <bean id="messageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">\n        \x3c!-- 资源文件名 --\x3e\n        <property name="basenames">\n            <list>\n                <value>/WEB-INF/resource/errorMessages</value>\n            </list>\n        </property>\n        \x3c!-- 资源文件编码格式 --\x3e\n        <property name="fileEncodings" value="utf-8" />\n        \x3c!-- 对资源文件内容缓存的时间，单位为秒 --\x3e\n        <property name="cacheSeconds" value="120" />\n    </bean>\n    \x3c!-- 注册校验器 --\x3e\n    <bean id="validator" class="org.springframework.validation.beanvalidation.LocalValidatorFactoryBean">\n        \x3c!-- hibernate 校验器 --\x3e\n        <property name="providerClass" value="org.hibernate.validator.HibernateValidator" />\n        \x3c!-- 指定校验使用的资源文件，在文件中配置校验错误信息，如果不指定则默认使用 classpath下的 VaiidationMessages.properties --\x3e\n        <property name="validationMessageSource" ref="messageSource" />\n    </bean>\n    \x3c!--开启 Spring的 Valid 功能 --\x3e\n    <mvc:annotation-driven conversion-service="conversionService"\n        validator="validator" />\n    \x3c!-- 注册格式化转换器，因为用到日期转换 --\x3e\n    <bean id="conversionService" \n        class="org.springframework.format.support.FormattingConversionServiceFactoryBean">\n    </bean>\n    \x3c!-- 配置视图解析器 --\x3e\n    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/jsp/" />\n        <property name="suffix" value=".jsp" />\n    </bean>\n</beans>\n4）测试应用\n通过地址“http://localhost：8080/springMVCDemo09/goods/input”测试 springMVCDemo09 应用。\n\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);