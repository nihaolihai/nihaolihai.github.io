(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{731:function(e,n,r){"use strict";r.r(n);var t=r(6),s=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"mybatis自定义typehandler处理枚举"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis自定义typehandler处理枚举"}},[this._v("#")]),this._v(" MyBatis自定义TypeHandler处理枚举")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('在绝大多数情况下，typeHandler 因为枚举而使用，MyBatis 已经定义了两个类作为枚举类型的支持，这两个类分别是：\nEnumOrdinalTypeHandler。\nEnumTypeHandler。\n\n因为它们的作用不大，所以在大部分情况下，我们都不用它们，不过我们还是要稍微了解一下它们的用法。在此之前，先来建一个性别枚举类——SexEnum，代码如下所示。\npackage com.mybatis.po;\npublic enum SexEnum {\n    MALE(1, "男"),\n    FEMALE(0, "女");\n    private int id;\n    private String name;\n    /** stter and getter **/\n    SexEnum(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    public SexEnum getSexById(int id) {\n        for (SexEnum sex : SexEnum.values()) {\n            if (sex.getId() == id) {\n                return sex;\n            }\n        }\n        return null;\n    }\n}\n为了使用这个关于性别的枚举，可用以下 sql 语句创建 myUser 表。\nCREATE TABLE `myuser` (\n  `id` bigint(20) NOT NULL,\n  `user_name` varchar(20) DEFAULT NULL,\n  `password` varchar(20) DEFAULT NULL,\n  `sex` char(1) DEFAULT NULL,\n  `mobile` varchar(20) DEFAULT NULL,\n  `tel` varchar(20) DEFAULT NULL,\n  `email` varchar(20) DEFAULT NULL,\n  `note` varchar(20) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n再创建一个用户 POJO，如下所示。\npublic class User {\n    private Long id;\n    private String userName;\n    private String password;\n    private SexWnum sex;\n    private String moblie;\n    private String tel;\n    private String email;\n    private String note;\n    /**setter and getter**/\n}\nEnumOrdinalTypeHandler\nEnumOrdinalTypeHandler 是按 MyBatis 根据枚举数组下标索引的方式进行匹配的，也是枚举类型的默认转换类，它要求数据库返回一个整数作为其下标，它会根据下标找到对应的枚举类型。\n\n根据这条规则，可以创建一个 UserMapper.xml 作为测试的例子，如下所示。\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper\nPUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n"http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="com.mybatis.mapper.UserMapper">\n    <resultMap id="userMapper" type="user">\n        <result property="id" column="id" />\n        <result property="userName" column="user_name" />\n        <result property="password" column="passsword" />\n        <result property="sex" column="sex"\n            typeHandler="org.apache.ibatis.type.EnumOrdinalTypeHandler" />\n        <result property="mobile" column="mobile" />\n        <result property="tel" column="tel" />\n        <result property="email" column="email" />\n        <result property="note" column="note" />\n    </resultMap>\n    <select id="getUser" resultMap="userMapper" parameterType="long">\n        select id,user_name,password,sex,mobile,tel,email,note from myUser\n        where id=#{id}\n    </select>\n</mapper>\n插入一条数据，执行的 SQL 如下：\nINSERT INTO `myuser` (`id`,`user_name`,`password`,`sex`,`mobile`,`tel`,`email`,`note`) VALUES(1,\'zhangsan\',\'123456\',\'1\',\'13675683675\',\'0755-88888888\',\'zhangsan@163.com\',\'note......\');\n\n这样，sex 字段就在数据库里被设置为 1，代表女性，使用以下进行测试。\npackage com.mybatis.test;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport org.apache.ibatis.io.Resources;\nimport org.apache.ibatis.session.SqlSession;\nimport org.apache.ibatis.session.SqlSessionFactory;\nimport org.apache.ibatis.session.SqlSessionFactoryBuilder;\nimport org.apache.log4j.Logger;\nimport com.mybatis.mapper.UserMapper;\nimport com.mybatis.po.User;\npublic class MyBatisTest {\n    public static void main(String[] args) throws IOException {\n        Logger log = Logger.getLogger(MyBatisTest.class);\n        InputStream config = Resources\n                .getResourceAsStream("mybatis-config.xml");\n        SqlSessionFactory ssf = new SqlSessionFactoryBuilder().build(config);\n        SqlSession ss = ssf.openSession();\n        UserMapper userMapper = ss.getMapper(UserMapper.class);\n        User user = userMapper.getUser(1L);\n        log.info(user.getSex().getName());\n    }\n}\n运行结果如图 1 所示：\n运行结果\n图 1  运行结果\nEnumTypeHandler\nEnumTypeHandler 会把使用的名称转化为对应的枚举，比如它会根据数据库返回的字符串“MALE”，进行 Enum.valueOf（SexEnum.class,"MALE"）；转换，所以为了测试 EnumTypeHandler 的转换，我们把数据库的 sex 字段修改为字符型（varchar（10）），并把 sex=1 的数据修改为 FEMALE，于是可以执行以下 SQL。\nALTER TABLE myUser MODIFY sex VARCHAR(10);\nUPDATE myUser SET sex=\'FEMALE\' WHERE SEX = 1;\n\n然后使用 EnumTypeHandler 修改 UserMaperr.xml，代码如下所示。\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper\nPUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n"http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="com.mybatis.mapper.UserMapper">\n    <resultMap id="userMapper" type="com.mybatis.po.User">\n        <result property="id" column="id" />\n        <result property="userName" column="user_name" />\n        <result property="password" column="passsword" />\n        <result property="sex" column="sex"\n            typeHandler="org.apache.ibatis.type.EnumTypeHandler" />\n        <result property="mobile" column="mobile" />\n        <result property="tel" column="tel" />\n        <result property="email" column="email" />\n        <result property="note" column="note" />\n    </resultMap>\n    <select id="getUser" resultMap="userMapper" parameterType="long">\n        select id,user_name,password,sex,mobile,tel,email,note from myUser\n        where id=#{id}\n    </select>\n</mapper>\n执行以上代码，就可以可以看到正确运行的日志。\n自定义枚举 typeHandler\n我们已经讨论了 MyBatis 内部提供的两种转换的 typeHandler，但是它们有很大的局限性，更多的时候我们希望使用自定义的 typeHandler。执行下面的 SQL，把数据库的 sex 字段修改为整数型。\nUPDATE myUser SET sex=\'0\' WHERE sex = \'FEMALE\';\nUPDATE myUser SET sex=\'1\' WHERE sex = \'MALE\';\nALTER TABLE myUser MODIFY sex INT(10);\n\n此时，按 SexEnum 的定义，sex=1 为男性，sex=0 为女性。为了满足这个规则，让我们自定义一个 SexEnumTypeHandler，如下所示。\npackage com.mybatis.test;\nimport java.sql.CallableStatement;\nimport java.sql.PreparedStatement;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\nimport org.apache.ibatis.type.JdbcType;\nimport org.apache.ibatis.type.MappedJdbcTypes;\nimport org.apache.ibatis.type.MappedTypes;\nimport org.apache.ibatis.type.TypeHandler;\nimport com.mybatis.po.SexEnum;\n@MappedTypes(SexEnum.class)\n@MappedJdbcTypes(JdbcType.INTEGER)\npublic class SexEnumTypeHandler implements TypeHandler<SexEnum> {\n    @Override\n    public void setParameter(PreparedStatement ps, int i, SexEnum parameter,\n            JdbcType jdbcType) throws SQLException {\n        ps.setInt(i, parameter.getId());\n    }\n    @Override\n    public SexEnum getResult(ResultSet rs, String columnName)\n            throws SQLException {\n        int id = rs.getInt(columnName);\n        return SexEnum.getSexById(id);\n    }\n    @Override\n    public SexEnum getResult(ResultSet rs, int columnIndex) throws SQLException {\n        int id = rs.getInt(columnIndex);\n        return SexEnum.getSexById(id);\n    }\n    @Override\n    public SexEnum getResult(CallableStatement rs, int columnIndex)\n            throws SQLException {\n        int id = rs.getInt(columnIndex);\n        return SexEnum.getSexById(id);\n    }\n}\n将 UserMapper.xml 的 typeHandler 换成自定义的 SexEnumTypeHandler，运行程序就可以得到我们想要的结果。\n\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);