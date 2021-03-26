(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{743:function(e,t,s){"use strict";s.r(t);var n=s(6),r=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"mybatis-select标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-select标签"}},[this._v("#")]),this._v(" Mybatis select标签")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('在 SQL 映射文件中 <select> 元素用于映射 SQL 的 select 语句，其示例代码如下：\n\x3c!--根据uid查询一个用户信息 --\x3e\n<select id="selectUserById" parameterType="Integer" resultType="com.mybatis.po.MyUser">\n    select * from user where uid = #{uid}\n</select>\n\n在上述示例代码中，id 的值是唯一标识符，它接收一个 Integer 类型的参数，返回一个 MyUser 类型的对象，结果集自动映射到 MyUser 属性。\n\n<select> 元素除了有上述示例代码中的几个属性以外，还有一些常用的属性，如表 1 所示。\n\n表 1 <select>元素的常用属性\n属性名称\t描 述\nid\t它和 Mapper 的命名空间组合起来使用，是唯一标识符，供 MyBatis 调用\nparameterType\t表示传入 SQL 语句的参数类型的全限定名或别名。它是一个可选属性，MyBatis 能推断出具体传入语句的参数\nresultType\tSQL 语句执行后返回的类型（全限定名或者别名）。如果是集合类型，返回的是集合元素的类型，返回时可以使用 resultType 或 resultMap 之一\nresultMap\t它是映射集的引用，与 <resultMap> 元素一起使用，返回时可以使用 resultType 或 resultMap 之一\nflushCache\t用于设置在调用 SQL 语句后是否要求 MyBatis 清空之前查询的本地缓存和二级缓存，默认值为 false，如果设置为 true，则任何时候只要 SQL 语句被调用都将清空本地缓存和二级缓存\nuseCache\t启动二级缓存的开关，默认值为 true，表示将査询结果存入二级缓存中\ntimeout\t\n用于设置超时参数，单位是秒（s），超时将抛出异常\nfetchSize\t获取记录的总条数设定\nstatementType\t告诉 MyBatis 使用哪个 JDBC 的 Statement 工作，取值为 STATEMENT（Statement）、 PREPARED（PreparedStatement）、CALLABLE（CallableStatement）\nresultSetType\t这是针对 JDBC 的 ResultSet 接口而言，其值可设置为 FORWARD_ONLY（只允许向前访问）、SCROLL_SENSITIVE（双向滚动，但不及时更新）、SCROLLJNSENSITIVE（双向滚动，及时更新）\n使用 Map 接口传递多个参数\n在实际开发中，查询 SQL 语句经常需要多个参数，例如多条件查询。当传递多个参数时，<select> 元素的 parameterType 属性值的类型是什么呢？在 MyBatis 中允许 Map 接口通过键值对传递多个参数。\n\n假设数据操作接口中有个实现查询陈姓男性用户信息功能的方法：\npublic List<MyUser> selectAllUser(Map<String,Object> param);\n\n此时，传递给映射器的是一个 Map 对象，使用它在 SQL 文件中设置对应的参数，对应 SQL 文件的代码如下：\n\x3c!-- 查询陈姓男性用户信息 --\x3e\n<select id="selectAllUser" resultType="com.mybatis.po.MyUser">\n    select * from user\n    where uname like concat(\'%\',#{u_name},\'%\')\n    and usex = #{u_sex}\n</select>\n在上述 SQL 文件中，参数名 u_name 和 u_sex 是 Map 的 key。\n\n为了测试该示例，首先创建一个 Web 应用 mybatisDemo02，将 mybatisDemo01 应用的所有 JAR 包复制到 /WEB-INF/lib 下，同时将 mybatisDemo01 应用的 src 目录下的所有包和文件复制到 mybatisDemo02 应用的 src 目录下。\n\n然后将 com.mybatis 包中的 SQL 映射文件 UserMapper.xml 中的“查询所有用户信息”的代码片段修改为上述“查询陈姓男性用户信息”的代码片段，最后将 com.controller 包中 UserController 的代码简单修改即可运行测试类了。\n\ncom.controller 包中 UserController 的代码片段如下：\n@Controller("UserController")\npublic class UserController {\n    private UserDao userDao;\n    public void test(){\n        ...\n        //查询多个用户\n        Map<String,Object> map = new HashMap<>();\n        map.put("u_name","陈");\n        map.put("u_sex","男");\n        List<MyUser> list = userDao.seleceAllUser(map);\n        for(MyUser myUser : list) {\n            System.out.println(myUser);\n        }\n        ...\n    }\n}\nMap 是一个键值对应的集合，使用者要通过阅读它的键才能了解其作用。另外，使用 Map 不能限定其传递的数据类型，所以业务性不强，可读性较差。如果 SQL 语句很复杂，参数很多，使用 Map 将很不方便。幸运的是，MyBatis 还提供了使用 Java Bean 传递多个参数的形式。\n使用 Java Bean 传递多个参数\n首先在 myBatisSemo02 应用的 src 目录下创建一个名为 com.pojo 的包，在包中创建一个 POJO 类 SeletUserParam，代码如下：\npackage com.pojo;\npublic class SeletUserParam {\n    private String u_name;\n    private String u_sex;\n    // 此处省略setter和getter方法\n}\n接着将 Dao 接口中的 selectAllUser 方法修改为如下：\npublic List<MyUser> selectAllUser(SelectUserParam param);\n\n然后将 com.mybatis 包中的 SQL 映射文件 UserMapper.xml 中的“查询陈姓男性用户信息”的代码修改为如下：\n<select id="selectAllUser" resultType="com.po.MyUser" parameterType="com.pojo.SeletUserParam">\n    select * from user\n    where uname like concat(\'%\',#{u_name},\'%\')\n    and usex=#{u_sex}\n</select>\n\n最后将 com.controller 包中 UserController 的“查询多个用户”的代码片段做如下修改：\n纯文本复制\nSeletUserParam su = new SelectUserParam();\nsu.setU_name("陈");\nsu.setU_sex("男");\nList<MyUser> list = userDao.selectAllUser(su);\nfor (MyUser myUser : list) {\n    System.out.println(myUser);\n}\n\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);