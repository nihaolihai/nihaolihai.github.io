(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{1122:function(n,e,t){"use strict";t.r(e);var a=t(6),c=Object(a.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"spring声明式事务管理-基于xml方式实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring声明式事务管理-基于xml方式实现"}},[this._v("#")]),this._v(" Spring声明式事务管理（基于XML方式实现）")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Spring 的事务管理有两种方式：一种是传统的编程式事务管理，即通过编写代码实现的事务管理；另一种是基于 AOP 技术实现的声明式事务管理。由于在实际开发中，编程式事务管理很少使用，所以我们只对 Spring 的声明式事务管理进行详细讲解。\n\nSpring 声明式事务管理在底层采用了 AOP 技术，其最大的优点在于无须通过编程的方式管理事务，只需要在配置文件中进行相关的规则声明，就可以将事务规则应用到业务逻辑中。\n\nSpring 实现声明式事务管理主要有两种方式：\n基于 XML 方式的声明式事务管理。\n通过 Annotation 注解方式的事务管理。\n\n本节通过银行转账的案例讲解如何使用 XML 的方式实现 Spring 的声明式事务处理。\n1. 创建项目\n在 MyEclipse 中创建一个名为 springDemo03 的 Web 项目，将 Spring 支持和依赖的 JAR 包复制到 Web 项目的 lib 目录中\n\n2. 创建数据库、表以及插入数据\n在 MySQL 中创建一个名为 spring 的数据库，然后在该数据库中创建一个 account 表，并向表中插入两条数据，其 SQL 执行语句如下所示：\n纯文本复制\nCREATE DATABASE spring;\nUSE spring;\nCREATE TABLE account (\n    id INT (11) PRIMARY KEY AUTO_INCREMENT,\n    username VARCHAR(20) NOT NULL,\n    money INT DEFAULT NULL\n);\nINSERT INTO account VALUES (1,\'zhangsan\',1000);\nINSERT INTO account VALUES (2,\'lisi\',1000);\n\n\n3. 创建 c3p0-db.properties\n在项目的 src 下创建一个名为 c3p0-db.properties 的配置文件，这里使用 C3P0 数据源，需要在该文件中添加如下配置：\njdbc.driverClass = com.mysql.jdbc.Driver\njdbc.jdbcUrl = jdbc:mysql://localhost:3306/spring\njdbc.user = root\njdbc.password = root\n\n4. 实现 DAO\n1）创建 AccountDao 接口\n在项目的 src 目录下创建一个名为 com.mengma.dao 的包，在该包下创建一个接口 AccountDao，并在接口中创建汇款和收款的方法，如下所示。\npackage com.mengma.dao;\npublic interface AccountDao {\n    // 汇款\n    public void out(String outUser, int money);\n    // 收款\n    public void in(String inUser, int money);\n}\n上述代码中，定义了 out() 和 in() 两个方法，分别用于表示汇款和收款。\n2）创建DAO层接口实现类\n在项目的 src 目录下创建一个名为 com.mengma.dao.impl 的包，在该包下创建实现类 AccountDaoImpl，如下所示。\npackage com.mengma.dao.impl;\nimport org.springframework.jdbc.core.JdbcTemplate;\nimport com.mengma.dao.AccountDao;\npublic class AccountDaoImpl implements AccountDao {\n    private JdbcTemplate jdbcTemplate;\n    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {\n        this.jdbcTemplate = jdbcTemplate;\n    }\n    // 汇款的实现方法\n    public void out(String outUser, int money) {\n        this.jdbcTemplate.update("update account set money =money-?"\n                + "where username =?", money, outUser);\n    }\n    // 收款的实现方法\n    public void in(String inUser, int money) {\n        this.jdbcTemplate.update("update account set money =money+?"\n                + "where username =?", money, inUser);\n    }\n}\n上述代码中，使用 JdbcTemplate 类的 update() 方法实现了更新操作。\n5. 实现 Service\n1）创建 Service 层接口\n在项目的 src 目录下创建一个名为 com.mengma.service 的包，在该包下创建接口 AccountService，如下所示。\npackage com.mengma.service;\npublic interface AccountService {\n    // 转账\n    public void transfer(String outUser, String inUser, int money);\n}\n2）创建 Service 层接口实现类\n在项目的 src 目录下创建一个名为 com.mengma.service.impl 的包，在该包下创建实现类 AccountServiceImpl，如下所示。\npackage com.mengma.service.impl;\nimport com.mengma.dao.AccountDao;\npublic class AccountServiceImpl {\n    private AccountDao accountDao;\n    public void setAccountDao(AccountDao accountDao) {\n        this.accountDao = accountDao;\n    }\n    public void transfer(String outUser, String inUser, int money) {\n        this.accountDao.out(outUser, money);\n        this.accountDao.in(inUser, money);\n    }\n}\n上述代码中可以看出，该类实现了 AccountService 接口，并对转账的方法进行了实现，根据参数的不同调用 DAO 层相应的方法。\n6. 创建 Spring 配置文件\n在项目的 src 目录下创建 Spirng 配置文件 applicationContext.xml，编辑后如下所示。\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:context="http://www.springframework.org/schema/context"\n    xmlns:tx="http://www.springframework.org/schema/tx"\n    xmlns:aop="http://www.springframework.org/schema/aop"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans\n            http://www.springframework.org/schema/beans/spring-beans-2.5.xsd  \n            http://www.springframework.org/schema/context\n            http://www.springframework.org/schema/context/spring-context.xsd\n            http://www.springframework.org/schema/tx\n            http://www.springframework.org/schema/tx/spring-tx-2.5.xsd\n            http://www.springframework.org/schema/aop\n            http://www.springframework.org/schema/aop/spring-aop-2.5.xsd">\n    \x3c!-- 加载properties文件 --\x3e\n    <context:property-placeholder location="classpath:c3p0-db.properties" />\n    \x3c!-- 配置数据源，读取properties文件信息 --\x3e\n    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">\n        <property name="driverClass" value="${jdbc.driverClass}" />\n        <property name="jdbcUrl" value="${jdbc.jdbcUrl}" />\n        <property name="user" value="${jdbc.user}" />\n        <property name="password" value="${jdbc.password}" />\n    </bean>\n    \x3c!-- 配置jdbc模板 --\x3e\n    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">\n        <property name="dataSource" ref="dataSource" />\n    </bean>\n    \x3c!-- 配置dao --\x3e\n    <bean id="accountDao" class="com.mengma.dao.impl.AccountDaoImpl">\n        <property name="jdbcTemplate" ref="jdbcTemplate" />\n    </bean>\n    \x3c!-- 配置service --\x3e\n    <bean id="accountService" class="com.mengma.service.impl.AccountServiceImpl">\n        <property name="accountDao" ref="accountDao" />\n    </bean>\n    \x3c!-- 事务管理器，依赖于数据源 --\x3e\n    <bean id="txManager"\n        class="org.springframework.jdbc.datasource.DataSourceTransactionManager">\n        <property name="dataSource" ref="dataSource" />\n    </bean>\n    \x3c!-- 编写通知：对事务进行增强（通知），需要编写切入点和具体执行事务的细节 --\x3e\n    <tx:advice id="txAdvice" transaction-manager="txManager">\n        <tx:attributes>\n            \x3c!-- 给切入点方法添加事务详情，name表示方法名称，*表示任意方法名称，propagation用于设置传播行为，read-only表示隔离级别，是否只读 --\x3e\n            <tx:method name="find*" propagation="SUPPORTS"\n                rollback-for="Exception" />\n            <tx:method name="*" propagation="REQUIRED" isolation="DEFAULT"\n                read-only="false" />\n        </tx:attributes>\n    </tx:advice>\n    \x3c!-- aop编写，让Spring自动对目标生成代理，需要使用AspectJ的表达式 --\x3e\n    <aop:config>\n        \x3c!-- 切入点 --\x3e\n        <aop:pointcut expression="execution(* com.mengma.service.*.*(..))"\n            id="txPointCut" />\n        \x3c!-- 切面：将切入点与通知整合 --\x3e\n        <aop:advisor pointcut-ref="txPointCut" advice-ref="txAdvice" />\n    </aop:config>\n</beans>\n上述代码中，首先在 <beans> 标记的第 6、13 和 14 行代码分别添加了 AOP 所需的命名空间声明。第 42～50 行代码使用 <tx:advice> 标记配置事务通知内容。\n\n第 52～58 行代码使用 <aop:config> 标记定义切面，其中第 54 行代码应用了 AspectJ 表达式，代表 com.mengma.service 包下所有类的所有方法都应用事务规则，第 57 行代码使用 <aop:advistor> 标记将切入点与事务通知整合，基于 AOP 的声明式事务配置完成。\n7. 创建测试类\n在项目的 src 目录下创建 com.mengma.test 的包，在该包下创建测试类 AccountTest，如下所示。\npackage com.mengma.test;\nimport org.junit.Test;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\nimport com.mengma.service.AccountService;\npublic class AccountTest {\n    @Test\n    public void test() {\n        // 获得Spring容器，并操作\n        String xmlPath = "applicationContext.xml";\n        ApplicationContext applicationContext = new ClassPathXmlApplicationContext(\n                xmlPath);\n        AccountService accountService = (AccountService) applicationContext\n                .getBean("accountService");\n        accountService.transfer("zhangsan", "lisi", 100);\n    }\n}\n上述代码中模拟了银行转账业务，从 zhangsan 的账户向 lisi 的账户中转入 100 元。使用 JUnit 测试运行 test() 方法，运行成功后，查询 account 表\n\n')])])])])}),[],!1,null,null,null);e.default=c.exports}}]);