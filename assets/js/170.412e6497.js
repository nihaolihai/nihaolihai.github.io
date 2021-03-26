(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{659:function(n,t,e){"use strict";e.r(t);var o=e(6),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"java-mysql-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-mysql-连接"}},[n._v("#")]),n._v(" Java MySQL 连接")]),n._v(" "),e("p",[n._v("本章节我们为大家介绍 Java 如何使用 使用 JDBC 连接 MySQL 数据库。")]),n._v(" "),e("p",[n._v("Java 连接 MySQL 需要驱动包，\n最新版下载地址为：")]),n._v(" "),e("p",[e("a",{attrs:{href:"http://dev.mysql.com/downloads/connector/j/",target:"_blank",rel:"noopener noreferrer"}},[n._v("MySQL"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("解压后得到 jar 库文件，然后在对应的项目中导入该库文件")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2016/08/38EF259A-CC97-4001-96AD-C6648BE2A4F4.jpg",alt:"RUNOOB 图标"}})]),n._v(" "),e("p",[n._v("你可以下载本站提供的 jar 包：mysql-connector-java-5.1.39-bin.jar")]),n._v(" "),e("p",[n._v("本实例使用的是 Eclipse，导入 jar 包：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2013/12/191E2E30-DD23-41C8-A419-DFEAEAE06BF6.jpg",alt:"RUNOOB 图标"}})]),n._v(" "),e("p",[n._v("MySQL 8.0 以上版本的数据库连接有所不同：")]),n._v(" "),e("p",[n._v("1、MySQL 8.0 以上版本驱动包版本")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://static.runoob.com/download/mysql-connector-java-8.0.16.jar",target:"_blank",rel:"noopener noreferrer"}},[n._v("mysql-connector-java-8.0.16.jar"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("2、com.mysql.jdbc.Driver 更换为 com.mysql.cj.jdbc.Driver。")]),n._v(" "),e("p",[n._v("MySQL 8.0 以上版本不需要建立 SSL 连接的，需要显示关闭。")]),n._v(" "),e("p",[n._v("allowPublicKeyRetrieval=true 允许客户端从服务器获取公钥。")]),n._v(" "),e("p",[n._v("最后还需要设置 CST。")]),n._v(" "),e("p",[n._v("加载驱动与连接数据库方式如下：")]),n._v(" "),e("p",[n._v('Class.forName("com.mysql.cj.jdbc.Driver");\nconn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test_demo?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC","root","password");\n创建测试数据\n接下来我们在 MySQL 中创建 RUNOOB 数据库，并创建 websites 数据表，表结构如下：')]),n._v(" "),e("p",[n._v("CREATE TABLE "),e("code",[n._v("websites")]),n._v(" (\n"),e("code",[n._v("id")]),n._v(" int(11) NOT NULL AUTO_INCREMENT,\n"),e("code",[n._v("name")]),n._v(" char(20) NOT NULL DEFAULT '' COMMENT '站点名称',\n"),e("code",[n._v("url")]),n._v(" varchar(255) NOT NULL DEFAULT '',\n"),e("code",[n._v("alexa")]),n._v(" int(11) NOT NULL DEFAULT '0' COMMENT 'Alexa 排名',\n"),e("code",[n._v("country")]),n._v(" char(10) NOT NULL DEFAULT '' COMMENT '国家',\nPRIMARY KEY ("),e("code",[n._v("id")]),n._v(")\n) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;\n插入一些数据：")]),n._v(" "),e("p",[n._v("INSERT INTO "),e("code",[n._v("websites")]),n._v(" VALUES ('1', 'Google', 'https://www.google.cm/', '1', 'USA'), ('2', '淘宝', 'https://www.taobao.com/', '13', 'CN'), ('3', '菜鸟教程', 'http://www.runoob.com', '5892', ''), ('4', '微博', 'http://weibo.com/', '20', 'CN'), ('5', 'Facebook', 'https://www.facebook.com/', '3', 'USA');\n数据表显示如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2013/12/mysql-data.jpg",alt:"RUNOOB 图标"}})]),n._v(" "),e("p",[n._v("连接数据库\n以下实例使用了 JDBC 连接 MySQL 数据库，注意一些数据如用户名，密码需要根据你的开发环境来配置：")]),n._v(" "),e("p",[n._v("MySQLDemo.java 文件代码：\npackage com.runoob.test;")]),n._v(" "),e("p",[n._v("import java.sql.*;")]),n._v(" "),e("p",[n._v("public class MySQLDemo {")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('// MySQL 8.0 以下版本 - JDBC 驱动名及数据库 URL\nstatic final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  \nstatic final String DB_URL = "jdbc:mysql://localhost:3306/RUNOOB";\n\n// MySQL 8.0 以上版本 - JDBC 驱动名及数据库 URL\n//static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  \n//static final String DB_URL = "jdbc:mysql://localhost:3306/RUNOOB?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";\n\n\n// 数据库的用户名与密码，需要根据自己的设置\nstatic final String USER = "root";\nstatic final String PASS = "123456";\n\npublic static void main(String[] args) {\n    Connection conn = null;\n    Statement stmt = null;\n    try{\n        // 注册 JDBC 驱动\n        Class.forName(JDBC_DRIVER);\n    \n        // 打开链接\n        System.out.println("连接数据库...");\n        conn = DriverManager.getConnection(DB_URL,USER,PASS);\n    \n        // 执行查询\n        System.out.println(" 实例化Statement对象...");\n        stmt = conn.createStatement();\n        String sql;\n        sql = "SELECT id, name, url FROM websites";\n        ResultSet rs = stmt.executeQuery(sql);\n    \n        // 展开结果集数据库\n        while(rs.next()){\n            // 通过字段检索\n            int id  = rs.getInt("id");\n            String name = rs.getString("name");\n            String url = rs.getString("url");\n\n            // 输出数据\n            System.out.print("ID: " + id);\n            System.out.print(", 站点名称: " + name);\n            System.out.print(", 站点 URL: " + url);\n            System.out.print("\\n");\n        }\n        // 完成后关闭\n        rs.close();\n        stmt.close();\n        conn.close();\n    }catch(SQLException se){\n        // 处理 JDBC 错误\n        se.printStackTrace();\n    }catch(Exception e){\n        // 处理 Class.forName 错误\n        e.printStackTrace();\n    }finally{\n        // 关闭资源\n        try{\n            if(stmt!=null) stmt.close();\n        }catch(SQLException se2){\n        }// 什么都不做\n        try{\n            if(conn!=null) conn.close();\n        }catch(SQLException se){\n            se.printStackTrace();\n        }\n    }\n    System.out.println("Goodbye!");\n}\n')])])]),e("p",[n._v("}")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2016/08/result.jpg",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);