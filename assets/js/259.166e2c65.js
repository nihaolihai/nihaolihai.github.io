(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{754:function(e,n,s){"use strict";s.r(n);var t=s(6),r=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"mybatis动态sql之bind标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis动态sql之bind标签"}},[this._v("#")]),this._v(" MyBatis动态sql之bind标签")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('在进行模糊查询时，如果使用“${}”拼接字符串，则无法防止 SQL 注入问题。如果使用字符串拼接函数或连接符号，但不同数据库的拼接函数或连接符号不同。\n\n例如 MySQL 的 concat 函数、Oracle 的连接符号“||”，这样 SQL 映射文件就需要根据不同的数据库提供不同的实现，显然比较麻烦，且不利于代码的移植。幸运的是，MyBatis 提供了 <bind> 元素来解决这一问题。\n\n在 myBatisDemo03 应用中测试 <bind> 元素，具体过程如下： \n1）添加 SQL 映射语句\n在 com.mybatis 包的 UserMapper.xml 文件中添加如下 SQL 映射语句：\n\x3c!--使用bind元素进行模糊查询--\x3e\n<select id="selectUserByBind" resultType="com.po.MyUser" parameterType= "com.po.MyUser">\n    \x3c!-- bind 中的 uname 是 com.po.MyUser 的属性名--\x3e\n    <bind name="paran_uname" value="\'%\' + uname + \'%\'"/>\n        select * from user where uname like #{paran_uname}\n</select>\n2）添加数据操作接口方法\n在 com.dao 包的 UserDao 接口中添加如下数据操作接口方法：\npublic List<MyUser> selectUserByBind(MyUser user);\n\n3）调用数据操作接口方法\n在 com.controller 包的 UserController 类中添加如下程序调用数据操作接口方法。\n// 使用bind元素查询用户信息\nMyUser bindmu=new MyUser();\nbindmu.setUname ("张");\nList<MyUser> listByBind=userDao.selectUserByBind(bindmu);\nSystem.out.println ("bind 元素=========================");\nfor (MyUser myUser:listByBind) {\n    System.out.println(myUser);\n}\n4）测试动态 SQL 语句\n运行 com.controller 包中的 TestController 主类，测试动态 SQL 语句。\n\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);