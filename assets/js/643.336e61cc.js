(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1133:function(n,e,t){"use strict";t.r(e);var r=t(6),i=Object(r.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"springbootmail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springbootmail"}},[this._v("#")]),this._v(" springbootmail")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('pom.xlm\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n   <modelVersion>4.0.0</modelVersion>\n\n   <groupId>top.lrshuai</groupId>\n   <artifactId>springboot-mail</artifactId>\n   <version>0.0.1-SNAPSHOT</version>\n   <packaging>jar</packaging>\n\n   <name>springboot-mail</name>\n   <description>Demo project for Spring Boot</description>\n\n   <parent>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-parent</artifactId>\n      <version>1.4.7.RELEASE</version>\n      <relativePath/> \x3c!-- lookup parent from repository --\x3e\n   </parent>\n\n   <properties>\n      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n      <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n      <java.version>1.8</java.version>\n   </properties>\n\n   <dependencies>\n      <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter</artifactId>\n      </dependency>\n\n      <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter-test</artifactId>\n         <scope>test</scope>\n      </dependency>\n      \n        <dependency> \n           <groupId>org.springframework.boot</groupId>\n           <artifactId>spring-boot-starter-mail</artifactId>\n       </dependency>\n\n      \x3c!-- 模板引擎 --\x3e\n      <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter-thymeleaf</artifactId>\n      </dependency>\n   </dependencies>\n\n   <build>\n      <plugins>\n         <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n         </plugin>\n      </plugins>\n   </build>\n\n\n</project>\npoperties\nserver.port=8880\nspring.application.name=spirngboot-mail\n\nspring.mail.host=smtp.qq.com\nspring.mail.username=1ewr@qq.com\nspring.mail.password=这个是你的授权码\nspring.mail.properties.mail.smtp.auth=true\nspring.mail.properties.mail.smtp.starttls.enable=true\nspring.mail.properties.mail.smtp.starttls.required=true\nspring.mail.default-encoding=UTF-8\nspring.mail.port=465\nspring.mail.properties.mail.smtp.socketFactory.port = 465\nspring.mail.properties.mail.smtp.socketFactory.class = javax.net.ssl.SSLSocketFactory\nspring.mail.properties.mail.smtp.socketFactory.fallback = false\n\nfromMail=234e2@qq.com\n\n#log\nlogging.file=E:\\\\logs\\\\mail_log.log\n\n\n页面\n<!DOCTYPE html>\n<html lang="zh" xmlns:th="http://www.thymeleaf.org">\n    <head>\n        <meta charset="UTF-8"/>\n        <title>Title</title>\n    </head>\n    <body>\n        您好,这是验证邮件,请点击下面的链接完成验证,<br/>\n        <a href="#" th:href="@{ http://www.lrshuai.top/check/{id}(id=${id}) }">激活账号</a>\n    </body>\n</html>\n\n\n启动类\n@SpringBootApplication\npublic class SpringbootMailApplication {\n\n   public static void main(String[] args) {\n      SpringApplication.run(SpringbootMailApplication.class, args);\n   }\n}\n\n\nservice\npackage top.lrshuai.service;\n\npublic interface MailService {\n\n   /**\n    * 发送普通文本\n    * @param to\n    * @param subject\n    * @param content\n    */\n    public void sendSimpleMail(String to, String subject, String content);\n\n    /**\n     * 发送 html 代码的邮件\n     * @param to\n     * @param subject\n     * @param content\n     */\n    public void sendHtmlMail(String to, String subject, String content);\n\n    /**\n     * 发送附件的邮件\n     * @param to\n     * @param subject\n     * @param content\n     * @param filePath\n     */\n    public void sendAttachmentsMail(String to, String subject, String content, String filePath);\n\n    /**\n     * 发送内嵌的文件\n     * @param to\n     * @param subject\n     * @param content\n     * @param rscPath\n     * @param rscId\n     */\n    public void sendInlineResourceMail(String to, String subject, String content, String rscPath, String rscId);\n\n}\n\npackage top.lrshuai.service.impl;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.core.io.FileSystemResource;\nimport org.springframework.mail.SimpleMailMessage;\nimport org.springframework.mail.javamail.JavaMailSender;\nimport org.springframework.mail.javamail.MimeMessageHelper;\nimport org.springframework.stereotype.Component;\n\nimport top.lrshuai.service.MailService;\n\nimport javax.mail.MessagingException;\nimport javax.mail.internet.MimeMessage;\nimport java.io.File;\n\n@Component\npublic class MailServiceImpl implements MailService{\n\n    private final Logger logger = LoggerFactory.getLogger(this.getClass());\n\n    @Autowired\n    private JavaMailSender mailSender;\n\n    @Value("${fromMail}")\n    private String from;\n\n    /**\n     * 发送文本邮件\n     * @param to\n     * @param subject\n     * @param content\n     */\n    @Override\n    public void sendSimpleMail(String to, String subject, String content) {\n        SimpleMailMessage message = new SimpleMailMessage();\n        message.setFrom(from);\n        message.setTo(to);\n        message.setSubject(subject);\n        message.setText(content);\n        try {\n            mailSender.send(message);\n            logger.info("简单邮件已经发送。");\n        } catch (Exception e) {\n            logger.error("发送简单邮件时发生异常！", e);\n        }\n\n    }\n\n    /**\n     * 发送html邮件\n     * @param to\n     * @param subject\n     * @param content\n     */\n    @Override\n    public void sendHtmlMail(String to, String subject, String content) {\n        MimeMessage message = mailSender.createMimeMessage();\n\n        try {\n            //true表示需要创建一个multipart message\n            MimeMessageHelper helper = new MimeMessageHelper(message, true);\n            helper.setFrom(from);\n            helper.setTo(to);\n            helper.setSubject(subject);\n            helper.setText(content, true);\n\n            mailSender.send(message);\n            logger.info("html邮件发送成功");\n        } catch (MessagingException e) {\n            logger.error("发送html邮件时发生异常！", e);\n        }\n    }\n\n\n    /**\n     * 发送带附件的邮件\n     * @param to\n     * @param subject\n     * @param content\n     * @param filePath\n     */\n    public void sendAttachmentsMail(String to, String subject, String content, String filePath){\n        MimeMessage message = mailSender.createMimeMessage();\n\n        try {\n            MimeMessageHelper helper = new MimeMessageHelper(message, true);\n            helper.setFrom(from);\n            helper.setTo(to);\n            helper.setSubject(subject);\n            helper.setText(content, true);\n\n            FileSystemResource file = new FileSystemResource(new File(filePath));\n            String fileName = filePath.substring(filePath.lastIndexOf(File.separator));\n            helper.addAttachment(fileName, file);\n            mailSender.send(message);\n            logger.info("带附件的邮件已经发送。");\n        } catch (MessagingException e) {\n            logger.error("发送带附件的邮件时发生异常！", e);\n        }\n    }\n\n\n    /**\n     * 发送正文中有静态资源（图片）的邮件\n     * @param to\n     * @param subject\n     * @param content\n     * @param rscPath\n     * @param rscId\n     */\n    public void sendInlineResourceMail(String to, String subject, String content, String rscPath, String rscId){\n        MimeMessage message = mailSender.createMimeMessage();\n\n        try {\n            MimeMessageHelper helper = new MimeMessageHelper(message, true);\n            helper.setFrom(from);\n            helper.setTo(to);\n            helper.setSubject(subject);\n            helper.setText(content, true);\n            System.out.println("content="+content);\n            System.out.println("rscId="+rscId);\n            System.out.println("rscPath="+rscPath);\n            FileSystemResource res = new FileSystemResource(new File(rscPath));\n            helper.addInline(rscId, res);\n            mailSender.send(message);\n            logger.info("嵌入静态资源的邮件已经发送。");\n        } catch (MessagingException e) {\n            logger.error("发送嵌入静态资源的邮件时发生异常！", e);\n        }\n    }\n}\n\n\ntest\n\npackage top.lrshuai.test;\n\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.junit4.SpringRunner;\nimport org.thymeleaf.TemplateEngine;\nimport org.thymeleaf.context.Context;\n\nimport top.lrshuai.service.MailService;\n\n/**\n * \n * @author tyro\n *\n */\n@RunWith(SpringRunner.class)\n@SpringBootTest\npublic class MailServiceTest {\n\n    @Autowired\n    private MailService mailService;\n\n    @Autowired\n    private TemplateEngine templateEngine;\n\n    @Test\n    public void testSimpleMail() throws Exception {\n        mailService.sendSimpleMail("1071426959@qq.com","test simple mail"," hello this is simple mail");\n    }\n\n    @Test\n    public void testHtmlMail() throws Exception {\n        String content="<html>\\n" +\n                "<body>\\n" +\n                "    <h3>hello world ! 这是一封html邮件!</h3>\\n" +\n                "</body>\\n" +\n                "</html>";\n        mailService.sendHtmlMail("1071426959@qq.com","test simple mail",content);\n    }\n\n    @Test\n    public void sendAttachmentsMail() {\n        String filePath="E:\\\\lrs\\\\github\\\\SSM\\\\README.txt";\n        mailService.sendAttachmentsMail("1071426959@qq.com", "主题：带附件的邮件", "有附件，请查收！", filePath);\n    }\n\n\n    @Test\n    public void sendInlineResourceMail() {\n        String rscId ="id001";\n        String content="<html><body>这是有图片的邮件：<img src=\\"cid:" + rscId + "\\" ></body></html>";\n        String imgPath = "E:\\\\lrs\\\\pic\\\\logo.jpg";\n\n        mailService.sendInlineResourceMail("1071426959@qq.com", "主题：这是有图片的邮件", content, imgPath, rscId);\n    }\n\n\n    @Test\n    public void sendTemplateMail() {\n        //创建邮件正文\n        Context context = new Context();\n        context.setVariable("id", "168");\n        String emailContent = templateEngine.process("emailTemplate", context);\n\n        mailService.sendHtmlMail("1071426959@qq.com","主题：这是模板邮件",emailContent);\n    }\n}\n\n\n')])])])])}),[],!1,null,null,null);e.default=i.exports}}]);