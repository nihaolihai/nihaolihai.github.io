(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{730:function(t,e,r){"use strict";r.r(e);var s=r(6),o=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"mybatis-objectfactory-对象工厂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-objectfactory-对象工厂"}},[this._v("#")]),this._v(" MyBatis ObjectFactory（对象工厂）")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('当创建结果集时，MyBatis 会使用一个对象工厂来完成创建这个结果集实例。在默认的情况下，MyBatis 会使用其定义的对象工厂——DefaultObjectFactory（org.apache.ibatis.reflection.factory.DefaultObjectFactory）来完成对应的工作。\n\nMyBatis 允许注册自定义的 ObjectFactory。如果自定义，则需要实现接口 org.apache.ibatis.reflection.factory.ObjectFactory，并给予配置。\n\n在大部分的情况下，我们都不需要自定义返回规则，因为这些比较复杂而且容易出错，在更多的情况下，都会考虑继承系统已经实现好的 DefaultObjectFactory ，通过一定的改写来完成我们所需要的工作，如下所示。\npackage com.mybatis.test;\nimport java.util.List;\nimport java.util.Properties;\nimport org.apache.ibatis.reflection.factory.DefaultObjectFactory;\nimport org.apache.log4j.Logger;\npublic class MyObjectFactory extends DefaultObjectFactory {\n    private static final long serialVersionUID = -4293520460481008255L;\n    Logger log = Logger.getLogger(MyObjectFactory.class);\n    private Object temp = null;\n    @Override\n    public void setProperties(Properties properties) {\n        super.setProperties(properties);\n        log.info("初始化参数：【" + properties.toString() + "】");\n    }\n    // 方法2\n    @Override\n    public <T> T create(Class<T> type) {\n        T result = super.create(type);\n        log.info("创建对象：" + result.toString());\n        log.info("是否和上次创建的是同一个对象：【" + (temp == result) + "】");\n        return result;\n    }\n    // 方法1\n    @Override\n    public <T> T create(Class<T> type, List<Class<?>> constructorArgTypes,\n            List<Object> constructorArgs) {\n        T result = super.create(type, constructorArgTypes, constructorArgs);\n        log.info("创建对象：" + result.toString());\n        temp = result;\n        return result;\n    }\n    @Override\n    public <T> boolean isCollection(Class<T> type) {\n        return super.isCollection(type);\n    }\n}\n\n然后对它进行配置，如下所示。\n<objectFactory type="com.mybatis.test.MyObjectFactory">\n    <property name="prop1" value="value1" />\n</objectFactory>\n\n这样 MyBatis 就会采用配置的 MyObjectFactory 来生成结果集对象，采用下面的代码进行测试。\npackage com.mybatis.test;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport org.apache.ibatis.io.Resources;\nimport org.apache.ibatis.session.SqlSession;\nimport org.apache.ibatis.session.SqlSessionFactory;\nimport org.apache.ibatis.session.SqlSessionFactoryBuilder;\nimport org.apache.log4j.Logger;\nimport com.mybatis.mapper.UserMapper;\nimport com.mybatis.po.User;\npublic class MyBatisTest {\n    public static void main(String[] args) throws IOException {\n        Logger log = Logger.getLogger(MyBatisTest.class);\n        InputStream config = Resources\n                .getResourceAsStream("mybatis-config.xml");\n        SqlSessionFactory ssf = new SqlSessionFactoryBuilder().build(config);\n        SqlSession ss = ssf.openSession();\n        UserMapper userMapper = ss.getMapper(UserMapper.class);\n        User user = userMapper.getUser(1L);\n        System.out.println(user.getUserName());\n    }\n}\n当配置了 log4j.properties 文件的时候，就能看到下图中的输出日志\n\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);