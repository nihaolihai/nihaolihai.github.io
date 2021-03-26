(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{748:function(e,s,n){"use strict";n.r(s);var o=n(6),t=Object(o.a)({},(function(){var e=this.$createElement,s=this._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h2",{attrs:{id:"mybatis动态sql之choose、when、otherwise标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis动态sql之choose、when、otherwise标签"}},[this._v("#")]),this._v(" MyBatis动态sql之choose、when、otherwise标签")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('有些时候不想用到所有的条件语句，而只想从中择取一二，针对这种情况，MyBatis 提供了 <choose> 元素，它有点像 Java 中的 switch 语句。在 myBatisDemo03 应用中测试 <choose> 元素，具体过程如下：\n1）添加 SQL 映射语句\n在 com.mybatis 包的 UserMapper.xml 文件中添加如下 SQL 映射语句：\n\x3c!--使用choose、when、otherwise元素根据条件动态查询用户信息--\x3e\n<select id="selectUserByChoose" resultType="com.po.MyUser" parameterType= "com.po.MyUser">\n    select * from user where 1=1\n    <choose>\n        <when test="uname!=null and uname!=\'\'">\n            and uname like concat(\'%\',#{uname},\'%\')\n        </when>\n        <when test="usex!=null and usex!=\'\'">\n            and usex=#{usex}\n        </when>\n        <otherwise>\n            and uid > 10\n        </otherwise>\n    </choose>\n</select>\n2）添加数据操作接口方法\n在 com.dao 包的 UserDao 接口中添加如下数据操作接口方法：\npublic List<MyUser> selectUserByChoose(MyUser user);\n\n3）调用数据操作接口方法\n在 com.controller 包的 UserController 类中添加如下程序调用数据操作接口方法。\n// 使用 choose 元素查询用户信息\nMyUser choosemu=new MyUser();\nchoosemu.setUname("");\nchoosemu.setUsex("");\nList<MyUser> listByChoose = UserDao.selectUserEyChoose(choosemu);\nSystem.out.println ("choose 元素================");\nfor (MyUser myUser:listByChoose) {\n    System.out.println(myUser);\n}\n4）测试动态 SQL 语句\n运行 com.controller 包中的 TestController 主类，测试动态 SQL 语句。\n\n')])])])])}),[],!1,null,null,null);s.default=t.exports}}]);