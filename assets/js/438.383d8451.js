(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{928:function(t,e,n){"use strict";n.r(e);var i=n(6),l=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"spring-mvc多文件上传-附带实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc多文件上传-附带实例"}},[this._v("#")]),this._v(" Spring MVC多文件上传（附带实例）")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('本小节继续通过 springMVCDemo11 应用案例讲解 Spring MVC 框架如何实现多文件上传，具体步骤如下：\n1）创建多文件选择页面\n在 WebContent 目录下创建 JSP 页面 multiFiles.jsp，在该页面中使用表单上传多个文件，具体代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>Insert title here</title>\n</head>\n<body>\n    <form action="${pageContext.request.contextPath }/multifile"\n        method="post" enctype="multipart/form-data">\n        选择文件1：<input type="file" name="myfile"><br>\n        文件描述1：<input type="text" name="description"><br />\n        选择文件2：<input type="file" name="myfile"><br>\n        文件描述2：<input type="text" name="description"><br />\n        选择文件3：<input type="file" name="myfile"><br>\n        文件描述3：<input type="text" name="description"><br />\n        <input type="submit" value="提交">\n    </form>\n</body>\n</html>\n2）创建 POJO 类\n在上传多文件时需要 POJO 类 MultiFileDomain 封装文件信息，MultiFileDomain 类的具体代码如下：\npackage pojo;\nimport java.util.List;\nimport org.springframework.web.multipart.MultipartFile;\npublic class MultiFileDomain {\n    private List<String> description;\n    private List<MultipartFile> myFile;\n    // 省略setter和getter方法\n}\n3）添加多文件上传处理方法\n在控制器类 FileUploadController 中添加多文件上传的处理方法 multiFileUpload，具体代码如下：\n/**\n* 多文件上传\n*/\n@RequestMapping("/multifile")\npublic String multiFileUpload(@ModelAttribute MultiFileDomain multiFileDomain,HttpServletRequest request) {\n    String realpath = request.getServletContext().getRealPath("uploadfiles");\n    File targetDir = new File(realpath);\n    if (!targetDir.exists()) {\n        targetDir.mkdirs();\n    }\n    List<MultipartFile> files = multiFileDomain.getMyFile();\n    for (int i = 0; i < files.size(); i++) {\n        MultipartFile file = files.get(i);\n        String fileName = file.getOriginalFilename();\n        File targetFile = new File(realpath, fileName);\n        // 上传\n        try {\n            file.transferTo(targetFile);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n    logger.info("成功");\n    return "showMulti";\n}\n4）创建成功显示页面\n在 JSP 文件夹中创建多文件上传成功显示页面 showMulti.jsp，具体代码如下：\n<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>Insert title here</title>\n</head>\n<body>\n    <table>\n        <tr>\n            <td>详情</td>\n            <td>文件名</td>\n        </tr>\n        \x3c!-- 同时取两个数组的元素 --\x3e\n        <c:forEach items="${multiFileDomain.description}" var="description"\n            varStatus="loop">\n            <tr>\n                <td>${description}</td>\n                <td>${multiFileDomain.myfile[loop.count-1].originalFilename}</td>\n            </tr>\n        </c:forEach>\n        \x3c!-- fileDomain.getMyfile().getOriginalFilename() --\x3e\n    </table>\n</body>\n</html>\n5）测试文件上传\n发布 springMVCDemo11 应用到 Tomcat 服务器并启动 Tomcat 服务器，然后通过地址“http://localhost:8080/springMVCDemo11/multiFiles.jsp”运行多文件选择页面，运行结果如图 1 所示。\n\n多文件选择页面\n图 1  多文件选择页面\n\n在图 1 中选择文件并输入文件描述，然后单击“提交”按钮上传多个文件，若成功则显示如图 2 所示的结果。\n\n多文件成功上传结果\n\n')])])]),e("p",[e("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190718/5-1ZGQ55552455.png",alt:"RUNOOB 图标"}})]),this._v(" "),e("p",[e("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190718/5-1ZGQ60H5Q3.png",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);e.default=l.exports}}]);