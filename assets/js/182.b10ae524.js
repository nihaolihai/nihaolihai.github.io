(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{673:function(n,t,e){"use strict";e.r(t);var r=e(6),i=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"java-ssh2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-ssh2"}},[this._v("#")]),this._v(" java ssh2")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('\npublic class TestNumber {\n\n    public static void main(String[] args) {\n//        if(StringUtils.isBlank(consumeTmp.getValidDatetime())){\n//            consumeTmp.setValidDatetime("2050-12-31");\n//        }else {\n//            String eL= "^((\\\\d{2}(([02468][048])|([13579][26]))[\\\\-\\\\/\\\\s]?((((0?[13578])|(1[02]))[\\\\-\\\\/\\\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\\\-\\\\/\\\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\\\-\\\\/\\\\s]?((0?[1-9])|([1-2][0-9])))))|(\\\\d{2}(([02468][1235679])|([13579][01345789]))[\\\\-\\\\/\\\\s]?((((0?[13578])|(1[02]))[\\\\-\\\\/\\\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\\\-\\\\/\\\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\\\-\\\\/\\\\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))";\n//            Pattern p = Pattern.compile(eL);\n//            Matcher m = p.matcher(consumeTmp.getValidDatetime());\n//            boolean b = m.matches();\n//            if(!b) {\n//                errMess +="|单损耗有效期格式不正确";\n//            }\n//        }\n//        String sregex = "^(\\\\d{0,2})(\\\\.\\\\d{1,9})?$";\n//        if(!"10.888888889".matches(sregex)) {\n//            System.out.println("页面非空必须为大于0的整数");\n//        }\n//        String regex = "^(\\\\d{0,100})?$";\n//        if(!"1000000".matches(regex)) {\n//            System.out.println("页面非空必须为大于0的整数");\n//        }else if (Integer.valueOf("1000000")<=0){\n//            System.out.println("页面非空必须为大于0的整数");\n//        }\n//        BigDecimal bigDecimal = new BigDecimal("1331.3231");\n//        System.out.println("小数为："+(bigDecimal.scale()));\n//        System.out.println("整数为："+(bigDecimal.precision()-bigDecimal.scale()));\n//        String format1 = String.format("处理失败：处理时间%s 失败原因：%s",new Date(),"我来了");\n//        System.out.println(format1);\n//        String format2 = String.format("测试：%d",2131);\n//        System.out.println(format2);\n//        String format3 = String.format("%04d", 12);\n//        System.out.println(format3);\n//        BigDecimal format4 = new BigDecimal("212.30").stripTrailingZeros();\n//        System.out.println("去除多余0："+format4.stripTrailingZeros()+"**整数位："+(format4.precision()-format4.scale())+"小数位："+format4.scale());\n//        double value = 200 / 500f;\n//        System.out.println((int)Math.ceil(value));\n//        String str = "112,221";\n//        String[] split = str.split(",");\n//        StringBuilder sb= new StringBuilder();\n//        Map<String,String> map = new HashMap<>(16);\n//        map.put("112","你好");\n//        map.put("221","我来了");\n//        for (String vaues:split) {\n//            String trval = map.get(vaues);\n//            sb.append(trval+",");\n//        }\n//        String substring = sb.toString().substring(0, sb.toString().length() - 1);\n//        System.out.println(substring);\n//        String value1 = "通过\\t内部存储程序,控制\\n遥控器的红外收发电路工作;控制遥控红外收发电路工作;TOREX;XC6119N15ANR-G;73006-0000350(非量产）\\n" +\n//                ";73006-0000350(非量产）";\n//        String value2 = "通过内部存储程序,控制遥控器的红外收发电路工作;控制遥控红外收发电路工作;TOREX;XC6119N15\\\\tANR-G;73006-0000350(非量产)\\t;73006-0000350(非量产）";\n//        String value3 = "通过内部存储程序,控制遥控器的红外收发电路工作;控制遥控红外收发电路工作;TOREX;XC6119N15ANR-G;73006-0000350(非量产)\\r;73006-0000350(非量产）";\n//        if(value1.contains("\\n") || value1.contains("\\\\n")){\n//            System.out.println("有特殊字符1\\n");\n//        }\n//        if(value2.contains("\\t") || value2.contains("\\\\t")){\n//            System.out.println("有包含字符2\\t");\n//        }\n//        if(value3.contains("\\r") || value2.contains("\\\\r")){\n//            System.out.println("有包含字符3\\r");\n//        }\n//        String vale = "通过   内部存储";\n//        if(vale.contains("\\t")){\n//            System.out.println("有包含字符4\\r");\n//        }\n//        List<String> strings = Arrays.asList("\\t","\\n","\\r","\\\\t","\\\\n","\\\\r");\n//        if(strings.contains(value3)){\n//            System.out.println("有包含字符5\\t,\\n,\\r");\n//        }\n//        String regexs = "[\\\\s[\\\\&&t][\\\\&&r][\\\\&&n]]";\n//        Pattern pattern = Pattern.compile(regexs);\n//        Matcher matcher = pattern.matcher("通过\\n" +\n//                ",\\r内部存储程");\n//        if (matcher.find()) {\n//            System.out.println("串found");\n//        }\n//        matcher = pattern.matcher(value1);\n//        if (matcher.find()) {\n//            System.out.println("found");\n//        }\n//        System.out.println(value1);\n//        System.out.println(value2);\n//        System.out.println(value3);\n//        String regexs = "[\\\\s[&&t][&&r][&&n]]";\n//        Pattern pattern = Pattern.compile(regexs);\n//        Matcher matcher = pattern.matcher("通过\\n内部存储程");\n//        String value = "通过  内部存储程";\n//        if (value.contains("\\t")){\n//            System.out.println("串found");\n//        }\n//        if(!value.contains("\\\\t")){\n//\n//        }\n        Boolean regexs = getRegexs("单损耗还\\t没提交");\n        System.out.println("正则表达式"+regexs);\n    }\n\n    /**\n     * 特殊字符 \\t,\\n\\r\n     * @return\n     */\n    public static Boolean getRegexs(String value){\n        Boolean flag = false;\n        List<String> billCodeItemDtos = Arrays.asList("\\n","\\t","\\r");\n        if(CollectionUtils.isNotEmpty(billCodeItemDtos)){\n            for (String billCodeItemDto:billCodeItemDtos) {\n                if(value.contains(billCodeItemDto)){\n                    flag=true;\n                }\n            }\n        }\n        return flag;\n    }\n\n    /**\n     * 特殊字符 \\t,\\n\\r看不到\n     * @return\n     */\n    public static Boolean getRegexsds(String value){\n        Boolean flag = false;\n        List<String> billCodeItemDtos = Arrays.asList("chr(10)","chr(9)","chr(13)");\n        if(CollectionUtils.isNotEmpty(billCodeItemDtos)){\n            for (String billCodeItemDto:billCodeItemDtos) {\n                if(value.contains(billCodeItemDto)){\n                    flag=true;\n                }\n            }\n        }\n        return flag;\n    }\n\n    /**\n     * 规格型号特殊字符处理\n     * @param value\n     * @return\n     */\n//    public String getRegexs(String value){\n//        String regexs = "[\\\\s";\n//        StringBuilder sb = new StringBuilder();;\n//        Map<String, Object> map = new HashMap<>(16);\n//        map.put("type",value);\n//        List<BillCodeItemDto> billCodeItemDtos = billCodeItemMapper.selectBillCodeTypeList(map);\n//        if(CollectionUtils.isNotEmpty(billCodeItemDtos)){\n//            for (BillCodeItemDto billCodeItemDto:billCodeItemDtos) {\n//                String code = billCodeItemDto.getCode().replace("\\\\","");\n//                sb.append("[\\\\&&"+code+"]");\n//            }\n//            regexs=regexs+sb.toString()+"]";\n//        }else{\n//            regexs = "[\\\\s[\\\\&&t][\\\\&&r][\\\\&&n]]";\n//        }\n//        return regexs;\n//    }\n\n}\n\n\x3c!-- httpclient --\x3e\n        <dependency>\n            <groupId>org.apache.httpcomponents</groupId>\n            <artifactId>httpclient</artifactId>\n            <version>4.3.1</version>\n        </dependency>\n        \x3c!-- 引入ssh2 依赖 --\x3e\n        <dependency>\n            <groupId>ch.ethz.ganymed</groupId>\n            <artifactId>ganymed-ssh2</artifactId>\n            <version>build210</version>\n        </dependency>\n\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.13</version>\n        </dependency>\n\npackage com.example.springbootdemo.utils.demo;\n\nimport ch.ethz.ssh2.Connection;\nimport ch.ethz.ssh2.SCPClient;\nimport ch.ethz.ssh2.Session;\nimport org.apache.logging.log4j.LogManager;\nimport org.apache.logging.log4j.Logger;\n\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.InputStreamReader;\nimport java.util.Properties;\n\npublic class RemoteServerOptUtil {\n    private static Logger logger = LogManager.getLogger(RemoteServerOptUtil.class.getName());\n    private static final String DEFAULT_CHARSET = "UTF-8";\n\n    /**\n     * 使用用户名密码，创建远程ssh连接\n     * @param host\n     * @param port\n     * @param sshUser\n     * @param sshPwd\n     * @return\n     * @throws Exception\n     */\n    public static Connection conToHostBySSH(String host, Integer port, String sshUser, String sshPwd) throws Exception{\n        Connection conn=null;\n        try {\n            conn= new Connection(host, port);\n            conn.connect();\n            boolean isAuthenticated = conn.authenticateWithPassword(sshUser, sshPwd);\n\n            if (isAuthenticated == false){\n                System.out.println("密码错误");\n                throw new IOException("Authentication failed.");\n            }\n        } catch (Exception e){\n            conn=null;\n            throw e;\n        } finally {\n            return conn;\n        }\n    }\n\n    /**\n     * 上传文件到远程文件夹\n     * @param conn\n     * @param localFilePath\n     * @param remoteFolderPath\n     * @throws IOException\n     */\n    public static void uploadFile(Connection conn,String localFilePath,String remoteFolderPath) throws IOException{\n        SCPClient client=new SCPClient(conn);\n        logger.debug("将要上传文件：{}到远程目录:{}",localFilePath,remoteFolderPath);\n        client.put(localFilePath, remoteFolderPath);\n    }\n\n    public static void main(String[] args) {\n        Properties props=System.getProperties(); //系统属性或者直接用System.getProperty("propertyName");\n        System.out.println("Java的运行环境版本："+props.getProperty("java.version"));\n        System.out.println("Java的运行环境供应商："+props.getProperty("java.vendor"));\n        System.out.println("Java供应商的URL："+props.getProperty("java.vendor.url"));\n        System.out.println("Java的安装路径："+props.getProperty("java.home"));\n        System.out.println("Java的虚拟机规范版本："+props.getProperty("java.vm.specification.version"));\n        System.out.println("Java的虚拟机规范供应商："+props.getProperty("java.vm.specification.vendor"));\n        System.out.println("Java的虚拟机规范名称："+props.getProperty("java.vm.specification.name"));\n        System.out.println("Java的虚拟机实现版本："+props.getProperty("java.vm.version"));\n        System.out.println("Java的虚拟机实现供应商："+props.getProperty("java.vm.vendor"));\n        System.out.println("Java的虚拟机实现名称："+props.getProperty("java.vm.name"));\n        System.out.println("Java运行时环境规范版本："+props.getProperty("java.specification.version"));\n        System.out.println("Java运行时环境规范供应商："+props.getProperty("java.specification.vender"));\n        System.out.println("Java运行时环境规范名称："+props.getProperty("java.specification.name"));\n        System.out.println("Java的类格式版本号："+props.getProperty("java.class.version"));\n        System.out.println("Java的类路径："+props.getProperty("java.class.path"));\n        System.out.println("加载库时搜索的路径列表："+props.getProperty("java.library.path"));\n        System.out.println("默认的临时文件路径："+props.getProperty("java.io.tmpdir"));\n        System.out.println("一个或多个扩展目录的路径："+props.getProperty("java.ext.dirs"));\n        System.out.println("操作系统的名称："+props.getProperty("os.name"));\n        System.out.println("操作系统的构架："+props.getProperty("os.arch"));\n        System.out.println("操作系统的版本："+props.getProperty("os.version"));\n        System.out.println("文件分隔符："+props.getProperty("file.separator"));//在 unix 系统中是"/"\n        System.out.println("路径分隔符："+props.getProperty("path.separator"));//在 unix 系统中是":"\n        System.out.println("行分隔符："+props.getProperty("line.separator"));//在 unix 系统中是"/n"\n        System.out.println("用户的账户名称："+props.getProperty("user.name"));\n        System.out.println("用户的主目录："+props.getProperty("user.home"));\n        System.out.println("用户的当前工作目录："+props.getProperty("user.dir"));\n        System.out.println("默认的临时文件路径："+ RemoteServerOptUtil.class.getResource("").getPath());\n    }\n\n    /**\n     * 执行远程命令\n     * @param cmd\n     * @param con\n     * @throws IOException\n     */\n    public static void execmd(String cmd,Connection con) throws IOException{\n        Session session = null;\n        session = con.openSession();\n        try {\n            session.execCommand(cmd);\n        } catch (IOException e) {\n            e.printStackTrace();\n            throw e;\n        } finally {\n            if(session!=null){\n                session.close();\n            }\n        }\n    }\n    /**\n     * @Description: 下载文件,只能下载文件类型, 如果是目录则抛出异常\n     * @param connection ssh2 连接对象\n     * @param remoteFilePathAbs 远程文件绝对路径名\n     * @param localDir 本地文件夹\n     * @author: zongf\n     * @time: 2019-03-25 21:41:33\n     */\n    public static void download(Connection connection, String localDir, String... remoteFilePathAbs) {\n\n        // 如果传参为空, 则返回\n        if(remoteFilePathAbs == null){\n            return;\n        }\n\n        SCPClient scpClient = new SCPClient(connection);\n\n        try {\n            scpClient.get(remoteFilePathAbs, localDir);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n    /**\n     * @Description: 执行一条命令\n     * @param connection ssh2 连接对象\n     * @return: ExecCmdResult 执行结果, 封装执行状态和执行结果\n     * @author: zongf\n     * @time: 2019-03-25 20:47:14\n     */\n    public static ExecCmdResult execCommand(Connection connection, String command) {\n\n        ExecCmdResult execCmdResult = new ExecCmdResult();\n\n        Session session = null;\n\n        try {\n            session = connection.openSession();\n\n            // 执行命令\n            session.execCommand(command);\n\n            // 解析结果\n            String result = parseResult(session.getStdout());\n\n            // 若解析结果为空, 则表示执行命令发生了错误, 尝试解析错误输出\n            if (result.isEmpty()) {\n                result = parseResult(session.getStderr());\n            }else {\n                execCmdResult.setSuccess(true);\n            }\n\n            // 设置响应结果\n            execCmdResult.setResult(result);\n\n            return execCmdResult;\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }finally {\n            if (session != null) {\n                session.close();\n            }\n        }\n        return null;\n    }\n\n    /**\n     * @Description: 通配符方式下载文件\n     * @param connection ssh2 连接对象\n     * @param remoteDirAbsPath 远程文件绝对路径\n     * @param fileNamePattern 文件名通配符匹配模式\n     * @param localDir 本地目录, 可接受相对绝对路径\n     * @author: zongf\n     * @time: 2019-03-25 22:20:07\n     */\n    public static void downloadByPattern(Connection connection, String localDir, String remoteDirAbsPath, String fileNamePattern) {\n\n        ExecCmdResult execCmdResult = execCommand(connection, "ls " + remoteDirAbsPath + "/" + fileNamePattern);\n        if (execCmdResult.isSuccess()) {\n\n            String[] files = execCmdResult.getResult().split("\\n");\n\n            SCPClient scpClient = new SCPClient(connection);\n\n            try {\n                scpClient.get(files, localDir);\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n\n    /**\n     * @Description: 上传文件至远程服务器. 本地文件不存在时, 抛出异常,但会上传一个0字节的文件; 远程目录不存在时, 抛出异常.\n     * @param connection ssh2 连接对象\n     * @param remoteDirAbsPath 远程服务器文件夹, 必须是绝对路径\n     * @param localFile 本地文件列表, 可接受绝对路径相对路径参数\n     * @author: zongf\n     * @time:  2018-03-25 21:44:07\n     */\n    public static void upload(Connection connection, String remoteDirAbsPath, String... localFile) {\n\n        // 如果传参为空, 则返回\n        if(localFile == null){\n            return;\n        }\n        SCPClient scpClient = new SCPClient(connection);\n        try {\n            scpClient.put(localFile, remoteDirAbsPath);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    /**\n     * @Description: 解析命令结果\n     * @param inputStream 输入流\n     * @return: String 字符串\n     * @author: zongf\n     * @time:  2019-03-25 21:06:23\n     */\n    private static String parseResult(InputStream inputStream) throws IOException {\n        // 读取输出流内容\n        BufferedReader br = new BufferedReader(new InputStreamReader(inputStream, DEFAULT_CHARSET));\n        StringBuffer resultSb = new StringBuffer();\n        String line;\n        while ((line = br.readLine()) != null) {\n            resultSb.append(line + "\\n");\n        }\n        return resultSb.toString();\n    }\n}\n\n\n测试\n\npackage com.example.springbootdemo.utils.demo;\n\nimport ch.ethz.ssh2.Connection;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.springframework.core.io.support.PropertiesLoaderUtils;\n\nimport java.io.File;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.util.Properties;\n\npublic class TestRemoteServerOptUtil {\n    private String HOST = "ip";\n    private Integer PORT = 22;\n    private String USER_NAME = "root";\n    private String PASSWORD = "";\n    private Connection connection;\n\n    // 执行每个单元测试用例前, 创建ssh2连接\n    @Before\n    public void setup(){\n        try {\n            connection = RemoteServerOptUtil.conToHostBySSH(HOST,PORT,USER_NAME,PASSWORD);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    /** 测试连接 */\n    @Test\n    public void test_connect() throws Exception {\n        connection = RemoteServerOptUtil.conToHostBySSH(HOST,PORT,USER_NAME, PASSWORD);\n        System.out.println("hostname:" + connection.getHostname());\n    }\n\n    /**\n     * 加载poperties文件\n     * @return\n     */\n    @Test\n    public void testPro(){\n        Properties prop = null;\n        String value = null;\n        String profilepath = "testkafka/application.properties";\n        try {\n            // 通过Spring中的PropertiesLoaderUtils工具类进行获取\n            prop = PropertiesLoaderUtils.loadAllProperties(profilepath);\n             // 根据关键字查询相应的值\n            value = prop.getProperty("spring.datasource.driver-class-name");\n         } catch (IOException e) {\n            e.printStackTrace();\n        }\n        System.out.println(value);\n    }\n\n    /**\n     * 加载更新poperties文件\n     * @return\n     */\n    @Test\n    public void testUpPro(){\n        Properties prop = null;\n        //String profilepath = "testkafka/application.properties";\n        String profilepath = "testkafka/bill-api+default+application.properties";\n        try {\n            prop = PropertiesLoaderUtils.loadAllProperties(profilepath);\n            // 调用 Hashtable 的方法 put，使用 getProperty 方法提供并行性。\n            // 强制要求为属性的键和值使用字符串。返回值是 Hashtable 调用 put 的结果。\n            prop.setProperty("spring.datasource.driver-class-name", "oracle.jdbc.OracleDriver");\n            prop.setProperty("spring.datasource.url", "werwe");\n            // 以适合使用 load 方法加载到 Properties 表中的格式，\n            // 将此 Properties 表中的属性列表（键和元素对）写入输出流\n            //保存到新的配置文件中\n            //String localFolderPath=TestRemoteServerOptUtil.class.getResource("/").getPath();\n            String newFilePath="E:\\\\测试上传\\\\"+"bill-api+default+application.properties";\n            //创建该job的本地配置文件\n            prop.store(new FileOutputStream(new File(newFilePath)), "save properties");\n        } catch (IOException e) {\n            System.err.println("属性文件更新错误");\n        }\n        System.out.println(prop.getProperty("spring.datasource.driver-class-name"));\n    }\n    /** 测试连接上传 */\n    @Test\n    public void testUpload() throws Exception {\n        RemoteServerOptUtil.uploadFile(connection,"E:\\\\test.jar","/data/test");\n    }\n\n    /**\n     * 创建echo >text1.txt文件\n     * 创建mkdir test文件夹\n     * 执行cmd */\n    @Test\n    public void testCmd() throws Exception {\n        RemoteServerOptUtil.execmd("cd /data/stk/stk-api; echo >text1.txt ",connection);\n    }\n\n    /** 执行cmd\n     * rm -f file1 删除一个叫做 \'file1\' 的文件\'\n     * rm -rf test 删除文件夹*/\n    @Test\n    public void testDelCmd() throws Exception {\n        RemoteServerOptUtil.execmd("cd /data/stk/stk-api;rm -f text1.txt",connection);\n    }\n\n    /**\n     * 下载\n     */\n    @Test\n    public void testDown() throws Exception{\n        RemoteServerOptUtil.download(connection,"E:\\\\测试上传","/data/stk/stk-api/log/default-app_log_error.log");\n    }\n}\n\n\n\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);