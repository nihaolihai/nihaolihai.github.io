(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{706:function(e,n,t){"use strict";t.r(n);var s=t(6),r=Object(s.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"junit和testng-java单元测试框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#junit和testng-java单元测试框架"}},[this._v("#")]),this._v(" JUnit和TestNG：Java单元测试框架")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('目前，常用的 Java 单元测试框架是 JUnit 和在 JUnit 基础上进一步扩展的 TestNG。为了能很好地在 Maven 中完成测试案例的执行和形成测试报告，这里介绍一下怎样在 JUnit 和 TestNG 框架下编写测试代码。\nJUnit 单元测试框架\nJUnit 是由 Erich Gamma 和 Kent Beck 编写的一个回归测试框架，是一个开放源代码的 Java 测试框架，可以在它的基础上编写和运行可重复的测试。\n\nJUnit 单元测试框架有如下几个特点。\n使用断言测试结果。\n能共享测试数据。\n方便注册和运行测试。\n支持图形化测试。\n\nJUnit 单元测试框架的安装比较简单，只需下载 JUnit 的最新压缩包在本地解压后，配置好 JUNIT_HOME 环境变量，并且在 CLASSPATH 目录中追加好 JUnit 的 jar 包就可以了。\n\n对于 IDE 环境的用户，只需将 JUnit 的 jar 包添加到项目的 build path 中就可以了。接下来回顾梳理（以前样例中有编写，只是没有系统介绍）一下怎样在一个 Maven 项目中基于 JUnit 编写测试案例。\n\n在 Maven 项目中，基于 JUnit 编写测试案例一般要两步：一是在 pom.xml 中添加 JUnit 依赖；二是基于 JUnit 规范编写测试代码。\n\n如下所示是 MvnSSMDemo.Service.Impl 项目中关于 JUnit 的配置。\n\n在 pom.xml 中的 JUnit 依赖配置。\n<dependencies>\n    <dependency>\n        <groupId>cn.com.mvnssh.demo</groupId>\n        <artifactId>MvnSSHDemo.DAO</artifactId>\n        <version>0.0.1-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n        <groupId>cn.com.mvn.ssh.demo</groupId>\n        <artifactId>MvnSSHDemo.Service</artifactId>\n        <version>0.0.1-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n        <groupId>cn.com.mvn.ssm.demo</groupId>\n        <artifactId>MvnSSMDemo.DAO.MyBatis</artifactId>\n        <version>0.0.1-SNAPSHOT</version>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n\nTestUserServiceImpl.java 类代码如下所示：\npackage cn.com.mvn.ssh.demo.service.impl;\nimport java.util.List;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\nimport cn.com.mvn.ssh.demo.entity.MvnUser;\nimport cn.com.mvn.ssh.demo.entity.Status;\nimport cn.com.mvn.ssh.demo.service.IUserService;\nimport junit.framework.Assert;\npublic class TestUserServiceImpl {\n    private IUserService userService;\n    private ApplicationContext ctx = null;\n    @Before\n    public void init() {\n        this.ctx = new ClassPathXmlApplicationContext("applicationContext.xml");\n        this.userService = (IUserService) ctx.getBean("userService");\n    }\n    @Test\n    public void testCreateUser() {\n        MvnUser user = new MvnUser();\n        user.setUrAge(11);\n        user.setUrPassword("11");\n        user.setUrStatus(Status.ACTIVE.getStatus());\n        user.setUrUserName("service1");\n        this.userService.createUser(user);\n        MvnUser u = this.userService.searchUser("service1");\n        boolean bool = u != null && u.getUrAge() == 11 && u.getUrStatus().equals(Status.ACTIVE.getStatus());\n        Assert.assertTrue(bool);\n        // 删除用户\n        this.userService.deleteUser(u.getUrId());\n    }\n    @Test\n    public void testEditUser() {\n        MvnUser user = new MvnUser();\n        user.setUrAge(11);\n        user.setUrPassword("11");\n        user.setUrStatus(Status.ACTIVE.getStatus());\n        user.setUrUserName("service1");\n        this.userService.createUser(user);\n        MvnUser u = this.userService.searchUser("service1");\n        this.userService.editUser(88, Status.INACTIVE.getStatus(), u.getUrId());\n        u = this.userService.searchUser("service1");\n        Assert.assertTrue(u.getUrAge() == 88 && u.getUrStatus().equals(Status.INACTIVE.getStatus()));\n        this.userService.deleteUser(u.getUrId());\n    }\n    @Test\n    public void testDeleteUser() {\n        MvnUser user = new MvnUser();\n        user.setUrAge(11);\n        user.setUrPassword("11");\n        user.setUrStatus(Status.ACTIVE.getStatus());\n        user.setUrUserName("service1");\n        this.userService.createUser(user);\n        MvnUser u = this.userService.searchUser("service1");\n        this.userService.deleteUser(u.getUrId());\n        MvnUser u2 = this.userService.searchUser(u.getUrId());\n        Assert.assertTrue(u != null && u2 == null);\n    }\n    @Test\n    public void testSearchUserById() {\n        MvnUser user = this.userService.searchUser(1);\n        Assert.assertNotNull(user);\n    }\n    @Test\n    public void testSearchUserByUserName() {\n        MvnUser user = this.userService.searchUser("zhangsan");\n        Assert.assertNotNull(user);\n    }\n    @Test\n    public void testSearchUsers() {\n        List<MvnUser> userList = this.userService.searchUsers();\n        Assert.assertTrue(userList != null && userList.size() > 0);\n    }\n    @After\n    public void destory() {\n        this.userService = null;\n        this.ctx = null;\n    }\n}\npom.xml 中的 JUnit 依赖配置在这里就不过多重复了，这里主要说明测试代码的注意事项。\n\n1）在 Maven 项目中，测试代码有专门的默认目录：src/test/java。\n\n2）一般测试案例代码的包与要测试的目标类的包一样。\n\n3）测试代码的类的命名一般是“Test+目标测试类的类名”。\n\n4）测试代码中的方法有三种。\n使用 @Before 标记的，实现初始化执行测试代码需要的资源。\n使用 @Test 标记的，跟测试目标类的每个方法一一对应的测试代码。\n使用 @After 标记的，完成测试后需要释放的资源。\n\n5）测试方法的逻辑。\n准备好测试数据。\n根据测试工具和用户需求（目标代码的实现），确定期望结果。\n执行测试方法获取实际结果。\n断言实际结果是否同期望结果一致。\nTestNG测试框架\nTestNG 是一个测试框架，也是一个开源的自动化测试框架。很多人把 TestNG 理解成 JUnit、特别是 JUnit4 的下一代。实际上它不只是简单扩展 JUnit，它是一个灵感源于 JUnit，目的是为了更优于 JUnit 的自动测试框架，跟 JUnit 是独立的。\n\nTestNG 消除了大部分旧框架的限制，使开发人员能够编写更加灵活、更加强大的测试程序，而且很大程度上借鉴了 Java 注解，可以使测试代码更好地同 Java 新特征整合。\n\n相对其他测试框架，TestNG 有如下自身的特点。\n使用简单的注解说明测试方法。\nTestNG 使用 Java 和面向对象编程。\n支持综合测试。\n独立的编译时间、独立的运行测试代码的配置和数据。\n灵活的运行时配置。\n支持测试组设置和运行。\n支持依赖测试、并行测试、负载测试和局部测试。\n灵活的插件 API。\n支持多线程测试。\n\n在 Maven 项目中编写和运行 TestNG 是比较方便的。首先要移除以前在 pom 中配置的 JUnit 依赖，添加 TestNG 依赖，代码如下所示。\n<dependency>\n    <groupId>org.testng</groupId>\n    <artifactId>testng</artifactId>\n    <version>5.9</version>\n    <scope>test</scope>\n    <classifier>jdk15</classifier>\n</dependency>\n\n同 JUnit 类似，TestNG 的依赖范围是 test。另外，TestNG 使用 classifier jdk15 和 jdk14 为不同的 Java 平台提供支持。\n\n接下来在测试代码中将以前引用的 JUnit 的注解、类改成 TestNG 的。注解名称和类名都一样，只是包名不同，常用的类如下。\norg.testng.annotations.Test，测试方法的注解。\norg.testng.annotations.BeforeMethod，测试方法运行前执行的方法注解。\norg.testng.annotations.AfterMethod，测试方法运行后执行的方法注解。\norg.testng.annotations.BeforeClass，所有测试方法运行前执行的方法注解。\norg.testng.annotations.AfterClass，所有测试方法运行后执行的方法注解。\norg.testng.Assert，断言类。\n\n同运行 JUnit 一样，直接使用 mvn test 命令，Maven 会自动执行符合命名模式的测试类。\n\nTestNG 除了可以同 JUnit 一样自动执行符合命名模式的测试类外，还可以通过 testng.xml 配置文件需要运行的测试集合。例如，可以在 Maven 项目的根目录下创建一个 testng.xml 文件，代码如下：\n<?xml version="1.0" encoding="utf-8" ?>\n<suite name="TestSuite" verbose="1">\n    <test name=”test1”>\n        <classes>\n            <class name="cn.com.mvn.demo.TestNGDemo"/>\n        </classes>\n    </test>\n</suite>\n同时，在 maven-surefire-plugin 中声明 testng.xml，代码如下：\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.16</version>\n    <configuration>\n        <suiteXmlFiles>\n            <suiteXmlFile>testng.xml</suiteXmlFile>\n        </suiteXmlFiles>\n    </configuration>\n</plugin>\n另外，TestNG 相对 JUnit 还有一个优势，就是可以使用注解的方式对测试方法进行分组标记。在运行的时候可以指定只执行哪个组的测试方法，或哪些组的测试方法，如下所示。\n@Test{groups = {"group1","group2"}}\n\n表示将对应的方法加入 group1 组和 group2 组。\n\n接下来，可以在 maven-surefire-plugin 插件中配置运行哪些组，代码如下：\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.16</version>\n    <configuration>\n        <groups>group1,group3</groups>\n    </configuration>\n</plugin>\n表示执行当前 TestNG 的时候，只会执行 group1 和 group2 两个组的测试方法。\n\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);