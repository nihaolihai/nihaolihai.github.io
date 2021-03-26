(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{721:function(e,n,t){"use strict";t.r(n);var a=t(6),o=Object(a.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"使用maven开发web应用详细步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用maven开发web应用详细步骤"}},[this._v("#")]),this._v(" 使用Maven开发Web应用详细步骤")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('开发 Web 应用的思路\n一切还是以实际案例进行，不过分两步。\n\n1. 实现一个简单的 JSP/Servlet。\n搭建创建 Web 应用工程的环境。\n创建 Web 应用工程。\nWeb 应用工程的目录结构。\n结合 Web 服务器，发布 Web 应用。\n体验 Web 应用的开发和发布测试过程。\n\n2. 实现经典的 MVC 版本的用户 CRUD。\n熟练第 1 步中的几个方面。\n结合典型的业务逻辑，实现 CRUD。\n实现 Web 版 HelloWorld\n安装配置 Web 应用的 Archetype Catalog，按照前面创建普通 Java 工程的步骤。\n\n1）选择 File→New→Others 命令。选择 Create Maven Project 命令，单击“下一步”按钮。选中创建 Web 应用工程的 Archetype，如图 1 所示。\n\n选择Web Archetype\n图 1  选择Web Archetype\n\n也可以选择其他类似的，创建 Web 应用的都可以，比如 maven-archetype-webapp 也可以。当然，也可以选择从网上找到坐标后的 Archetype 插件，再安装进去。\n\n怎么安装新的 Archetype 呢？单击图中的 Add Archetype… 按钮，在出现的窗口中输入在网上找到的插件坐标信息，如图 2 所示。\n\n添加Archetype\n图 2  添加 Archetype\n\n单击 OK 按钮，MyEclipse 会自动下载该构件。重新打开创建工程的向导页面，就可以发现新增了刚刚添加的 Archetype 插件，如图 3 所示。\n\n选择webapp-javaee6 Archetype\n图 3  选择 webapp-javaee6 Archetype\n\n2）点击“next”，在下一个界面中输入新创建的 Web 工程的坐标信息和包名，如图 4 所示。\n\nMaven项目坐标\n图 4  Maven项目坐标\n\n3）单击 Finish 按钮，M2Eclipse 会自动创建一个 Web 工程 MvnDemo02。其在 src/main 目录下添加了 webapp 目录，里面有 Web 应用特有的 WEB-INF 目录，web.xml 和 index.jsp 等。\n\n其中，webapp 目录和里面的文件以及结构在 Maven 中也是固定的。这样就创建好了 Web 应用工程。\n编写样例代码\n工程创建好了，下一步就是写测试代码了。接下来会写 3 个代码（2 个 jsp 和 1 个servlet）。\n\nindex.jsp，里面显示输入框，能提交输入的内容，代码如下所示：\n<%@page contentType="text/html" pageEncoding="UTF-8"%>\n<html>\n    <head>\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n        <title>Index JSP</title>\n    </head>\n    <body>\n        <form action="welcomeServlet" method="post">\n           请输入问候人名:<input type=\'text\' name="name"/><br/>\n           <input type=\'submit\' value=\'问候\'/>\n        </form>\n    </body>\n</html>\nwelcome.jsp，显示问候信息，代码如下所示：\n<%@page contentType="text/html" pageEncoding="UTF-8"%>\n<html>\n    <head>\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n        <title>Welcome JSP</title>\n    </head>\n    <body>\n        问候信息：${welcome }\n    </body>\n</html>\nwelcomeServlet，接收 index.jsp 发过来的名称，生成问候信息，转给 welcome.jsp 显示。\nimport java.io.IOException;\nimport javax.servlet.ServletException;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n/**\n* Servlet implementation class WelcomeServlet\n*/\npublic class WelcomeServlet extends HttpServlet {\n    private static final long serialVersionUID = 1L;\n    /**\n     * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse\n     *      response)\n     */\n    protected void service(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        request.setCharacterEncoding("UTF-8");\n        String name = request.getParameter("name");\n        String welcome = "Hello," + name;\n        request.setAttribute("welcome", welcome);\n        request.getRequestDispatcher("/index.jsp").forward(request, response);\n    }\n}\n当然，除了编写代码外，还需要配置 web.xml，servlet 的，web.xml 代码如下所示：\n<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns="http://java.sun.com/xml/ns/javaee"\n    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee\n        http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"\n    version="2.5">\n    <display-name>MvnDemo02</display-name>\n    <session-config>\n        <session-timeout>30</session-timeout>\n    </session-config>\n    <welcome-file-list>\n        <welcome-file>index.jsp</welcome-file>\n    </welcome-file-list>\n    <servlet>\n        <description></description>\n        <display-name>WelcomeServlet</display-name>\n        <servlet-name>WelcomeServlet</servlet-name>\n        <servlet-class>com.mengma.demo.MvnDemo02.WelcomeServlet</servlet-class>\n    </servlet>\n    <servlet-mapping>\n        <servlet-name>WelcomeServlet</servlet-name>\n        <url-pattern>/WelcomeServlet</url-pattern>\n    </servlet-mapping>\n</web-app>\n构建 Web 项目\n前期的构建过程同前面基本的 Java 工程一样，根据自己的需要，在 pom.xml 中配置好对应功能的插件，再运行对应的图形化菜单命令就可以了，在这里不做重复说明。\n\n一个 Web 应用构建好后，不只是编译打包安装就可以了，还需要将它发布到 Web 服务器中进行测试调试才行。这里主要介绍两种发布到 Tomcat 7 服务器启动测试的方式。在项目开发过程中可以根据自己的需要，选择其中一种。\n1. 使用 Maven 的 Jetty 插件部署 Web\n在 pom.xml 中添加 Jetty 插件的坐标信息，内容如下：\n<plugin>\n    <groupId>org.mortbay.jetty</groupId>\n    <artifactId>maven-jetty-plugin</artifactId>\n    <version>6.1.26</version>\n    <configuration>\n        <webAppSourceDirectory>${basedir}/src/main/webapp</webAppSourceDirectory>\n    </configuration>\n</plugin>\n在 MyEclipse 中配置 Web 服务器运行环境。\n\n选择 MyEclipse 菜单 Window→Preferences 命令，打开 Preferences 窗口，选中左边树 Server→Runtime Environment，如图 5 所示。\n\nMyEclipse的Web服务器\n图 5  MyEclipse的Web服务器\n\n单击右边的 Add… 按钮，弹出一个选择服务器的窗口。选中窗口中的 Apache Tomcat v 7.0 服务器，如图 6 所示。\n\n添加Tomcat 7.0\n图 6  添加 Tomcat 7.0\n\n单击 Next 按钮，进入选择 Tomat Server 配置页面，选择 Tomcat 的安装目录和 JRE 运行环境（JDK），如图 7 所示。\n\n添加Tomcat的Java home\n图 7  添加 Tomcat 的 Java home\n\n单击 Finish 和 Apply and Close 按钮，关闭所有配置窗口，完成 MyEclipse 中的 Web Server 配置。\n\n右击“工程”，选择 Run As→Maven build 命令，打开自定义 launch 窗口，在 Goals 中输入启动的插件名和目标“jetty:run”，如图 8 所示。\n\n运行jetty\n图 8  运行 jetty\n\n单击 Run 按钮运行一次后，以后每次都可以在 Run As→Maven build 命令中选择重复运行。\n\n服务器启动了，接下来打开浏览器，输入：\nhttp://localhost:8080/MvnDemo02/index.jsp\n\n这样就可以访问第一个页面了。\n2. 使用 cargo-maven2-plugin 插件部署 Web\n使用 cargo 插件相对简单，只需在 pom.xml 中进行配置，指定部署应用所需要的信息，再运行 Run As→Maven install 命令，cargo 插件自动会把打成 war 包的应用，发布到指定 Web 服务器的发布目录下。\n\n接下来要做的是启动 Web 服务器，按以前的方式打开浏览器浏览页面。\n\nGargo 在 pom.xml 中的插件配置如下所示。\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n    http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>cn.com.mvnbook.demo</groupId>\n    <artifactId>MvnDemo02</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <packaging>war</packaging>\n    <name>MvnDemo02 Web App</name>\n    <properties>\n        <endorsed.dir>${project.build.directory}/endorsed</endorsed.dir>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>javax</groupId>\n            <artifactId>javaee-web-api</artifactId>\n            <version>6.0</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.8.1</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.mortbay.jetty</groupId>\n                <artifactId>maven-jetty-plugin</artifactId>\n                <version>6.1.26</version>\n                <configuration>\n                    <webAppSourceDirectory>${basedir}/src/main/webapp</webAppSourceDirectory>\n                </configuration>\n            </plugin>\n            <plugin>\n                \x3c!-- 指定插件名称及版本号 --\x3e\n                <groupId>org.codehaus.cargo</groupId>\n                <artifactId>cargo-maven2-plugin</artifactId>\n                <version>1.4.8</version>\n                <configuration>\n                    \x3c!--是否说明，操作start、stop等后续操作必须等前面操作完成才能继续 --\x3e\n                    <wait>true</wait>\n                    \x3c!-- 容器的配置 --\x3e\n                    <container>\n                        \x3c!-- 指定tomcat版本 --\x3e\n                        <containerId>tomcat7x</containerId>\n                        \x3c!-- 指定类型：standalone, installed等 --\x3e\n                        <type>installed</type>\n                        \x3c!-- 指定Tomcat的位置，即catalina.home --\x3e\n                        <home>C:\\work\\servers\\apache-tomcat-7.0.69</home>\n                    </container>\n                    \x3c!-- 具体的配置 --\x3e\n                    <configuration>\n                        \x3c!-- 类型，existing:存在 --\x3e\n                        <type>existing</type>\n                        \x3c!-- Tomcat的位置，即catalina.home --\x3e\n                        <home>C:\\work\\servers\\apache-tomcat-7.0.69</home>\n                    </configuration>\n                    <deployables>    \x3c!-- 部署设置 --\x3e\n                        <deployable>    \x3c!-- 部署的War包名等 --\x3e\n                            <groupId>cn.com.mvnbook.demo</groupId>\n                            <artifactId>MvnDemo02</artifactId>\n                            <type>war</type>\n                            <properties>\n                                <context>MvnDemo02</context>   \x3c!-- 部署路径 --\x3e\n                            </properties>\n                        </deployable>\n                    </deployables>\n                    <deployer>        \x3c!-- 部署配置 --\x3e\n                        <type>installed</type>        \x3c!-- 类型 --\x3e\n                    </deployer>\n                </configuration>\n                <executions>\n                    \x3c!-- 执行的动作 --\x3e\n                    <execution>\n                        <id>verify-deployer</id>\n                        <phase>install</phase>      \x3c!-- 解析install --\x3e\n                        <goals>\n                            <goal>deployer-deploy</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>clean-deployer</id>\n                        <phase>clean</phase>\n                        <goals>\n                            <goal>deployer-undeploy</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>2.3.2</version>\n                <configuration>\n                    <source>1.6</source>\n                    <target>1.6</target>\n                    <compilerArguments>\n                        <endorseddirs>${endorsed.dir}</endorseddirs>\n                    </compilerArguments>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-war-plugin</artifactId>\n                <version>2.1</version>\n                <configuration>\n                    <failOnMissingWebXml>false</failOnMissingWebXml>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-dependency-plugin</artifactId>\n                <version>2.1</version>\n                <executions>\n                    <execution>\n                        <phase>validate</phase>\n                        <goals>\n                            <goal>copy</goal>\n                        </goals>\n                        <configuration>\n                            <outputDirectory>${endorsed.dir}</outputDirectory>\n                            <silent>true</silent>\n                            <artifactItems>\n                                <artifactItem>\n                                    <groupId>javax</groupId>\n                                    <artifactId>javaee-endorsed-api</artifactId>\n                                    <version>6.0</version>\n                                    <type>jar</type>\n                                </artifactItem>\n                            </artifactItems>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n        <finalName>MvnDemo02</finalName>\n    </build>\n</project>\n右击“工程”，选择 Run As→Maven install 命令后，就可以在 Tomcat 7 的发布目录下发现 MvnDemo02.war，启动后它就能自动发布并且能被访问。\n测试\n不管前面哪种方式，启动服务器后，打开浏览器，输入 http://localhost:8080/MvnDemo02/index.jsp 链接后，就可以进行测试了。\n\n')])])])])}),[],!1,null,null,null);n.default=o.exports}}]);