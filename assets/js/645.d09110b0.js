(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{1136:function(n,e,t){"use strict";t.r(e);var a=t(6),i=Object(a.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"springbootoss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springbootoss"}},[this._v("#")]),this._v(" springbootoss")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('\x3c!--oss对象关系存储--\x3e\n<dependency>\n  <groupId>com.aliyun.oss</groupId>\n  <artifactId>aliyun-sdk-oss</artifactId>\n  <version>3.5.0</version>\n</dependency>\n\n\x3c!--apache comment tools--\x3e\n<dependency>\n  <groupId>commons-io</groupId>\n  <artifactId>commons-io</artifactId>\n  <version>2.4</version>\n</dependency>\n\n\x3c!--提供文件上传下载--\x3e\n<dependency>\n  <groupId>commons-fileupload</groupId>\n  <artifactId>commons-fileupload</artifactId>\n  <version>1.3.3</version>\n</dependency>\napplication.properties:配置类\n\n##basic setting\nserver.port = 8080\nserver.address =127.0.0.1\n\n# 解除文件大小限制\nspring.servlet.multipart.max-file-size=10MB\nspring.servlet.multipart.max-request-size=10MB\n\nOssManagerUtil.java:阿里OSS工具类\n\n/**\n * 阿里Oss对象存储工具类\n */\npublic class OssManagerUtil {\n\n    private static String endpoint = “oss中获取的oss公网路径";\n    private static String accessKeyId = “自己在阿里云申请的accessKeyId";\n    private static String accessKeySecret = "自己在阿里云申请的accessKeySecret";\n    private static String bucket = "bucket名称";\n\n\n    private static OSS client;\n\n\n    static {\n        client = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);\n    }\n\n\n    /**\n     * 上传图片\n     *\n     * @param fileName 图片名称，图片名称包括文件夹名称和“/”\n     * @param length   图片大小\n     * @param content  输入流\n     */\n    public static String uploadImage(String fileName, long length, InputStream content) {\n        uploadBucketImage(bucket, fileName, length, content);\n        return "https://" + bucket + "." + endpoint + "/" + fileName;\n    }\n\n\n    /**\n     * 上传文件\n     *\n     * @param bucket   存储空间名\n     * @param fileName 文件名(包括文件夹名称和“/”)\n     * @param length   流的长度\n     * @param content  输入流\n     */\n    public static void uploadBucketImage(String bucket, String fileName, long length, InputStream content) {\n        // 创建上传Object的Metadata\n        ObjectMetadata meta = new ObjectMetadata();\n        // 必须设置ContentLength\n        meta.setContentLength(length);\n        // 上传Object.\n        client.putObject(bucket, fileName, content, meta);\n    }\n\n\n    /**\n     * 删除文件\n     *\n     * @param fileName 文件名称，图片名称包括文件夹名称和“/”\n     */\n    public static boolean delShopImage(String fileName) {\n        //判断文件是否存在\n        boolean exist = client.doesObjectExist(bucket, fileName);\n        //文件不存在删除失败\n        if (!exist) {\n            return false;\n        }\n        //执行删除\n        client.deleteObject(bucket, fileName);\n        return true;\n    }\n\n\n    /**\n     * 获得上传文件后url链接\n     *\n     * @param fileName 文件名(包括文件夹名称和“/”)\n     * @return\n     */\n    public static String getUrl(String fileName) {\n        // 设置URL过期时间为10年  3600l* 1000*24*365*10\n        Date expiration = new Date(System.currentTimeMillis() + 3600L * 1000 * 24 * 365 * 10);\n        // 生成URL\n        URL url = client.generatePresignedUrl(bucket, fileName, expiration);\n        if (url != null) {\n            return url.toString();\n        }\n        return null;\n    }\n\n    /**\n     * 创建存储空间\n     *\n     * @param bucketName 新建存储空间默认为标准存储类型，私有权限。\n     * @return\n     */\n    public static void crateBucket(String bucketName) {\n        // 新建存储空间默认为标准存储类型，私有权限。\n        client.createBucket(bucketName);\n    }\n}\n\n\n测试接口：文件上传\n\n/**\n * 文件上传到阿里oss\n */\n@PostMapping("/uploadFiletoOss")\n@ApiOperation(value = "文件上传到阿里oss")\npublic ResponseResult uploadFiletoOss(@RequestParam("file")MultipartFile file)throws IOException{\n    String fileName = file.getOriginalFilename();\n    String suffix = fileName.substring(fileName.lastIndexOf(".") + 1);\n    fileName = UUID.randomUUID().toString().replace("-", "") + "." + suffix;\n    String url = OssManagerUtil.uploadImage(fileName,file.getInputStream().available(),file.getInputStream());\n    return ResponseResult.success(url);\n}\n\n\n')])])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201031104837328.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1OTExMTE4,size_16,color_FFFFFF,t_70#pic_center",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);