(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{784:function(n,e,o){"use strict";o.r(e);var r=o(6),t=Object(r.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"创建基于dubbo框架的springboot微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建基于dubbo框架的springboot微服务"}},[this._v("#")]),this._v(" 创建基于Dubbo框架的SpringBoot微服务")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Dubbo 是原阿里巴巴 B2B 平台技术部倾力打造的一款开源且优秀的面向 Java 平台的服务框架，历经三次大的迭代，从最早盲从 OSGi 的坑里跳出来，再到序列化协议和通信框架的定型，最终才完善和成型，可以说，国内开源服务化框架中无出其右者。\n\n但是，Dubbo 研发的年代处于 Spring 框架的 XSD 时代，所以，使用上还是会更多以 XML 形式定义服务和访问服务，但好在 SpringBoot 框架在 IoC 容器的配置方式上“不挑食”，所以，我们还是可以让 Dubbo 和 SpringBoot 框架友好相处。\n\n直接使用 Dubbo 开发微服务了，为什么还要用 SpringBoot？，这是一个很好的问题。\n\n使用 SpringBoot 开发基于 Dubbo 框架的微服务的原因就是，我们将 Dubbo 微服务以 SpringBoot 形式标准化了。如此一来，我们既可以享受 SpringBoot 框架和周边的一系列研发支持，还可以用统一的形式发布、部署和运维。\n\n微服务的一个特点就是数量多，一个人应对 1000 个相同操作接口的微服务和一个人应对 1000 个不同操作接口的微服务相比来说，相信你会选择前者。\n\n2015 年到 2016年，美元升值预期持续升温，大家想必对汇率也比较关注，所以，我们不妨实现一个基于央行汇率的查询服务。\n1. 定义汇率查询服务接口\n我们新建 Maven 工程 currency-rates-api：\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.keevol.springboot</groupId>\n    <artifactId>currency-rates-api</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n    <name>currency-rates-api</name>\n    <url>http://maven.apache.org</url>\n    <properties>\n        <java_source_version>1.8</java_source_version>\n        <java_target_version>1.8</java_target_version>\n        <file_encoding>UTF-8</file_encoding>\n    </properties>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <configuration>\n                    <source>${java_source_version}</source>\n                    <target>${java_target_version}</target>\n                    <encoding>${file_encoding}</encoding>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-source-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>attach-sources</id>\n                        <goals>\n                            <goal>jar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-javadoc-plugin</artifactId>\n                <configuration>\n                    <charset>${file_encoding}</charset>\n                    <encoding>${file_encoding}</encoding>\n                    <additionalparam>-Xdoclint:none</additionalparam>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>attach-javadocs</id>\n                        <goals>\n                            <goal>jar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project> \n然后定义汇率查询服务接口：\npublic interface CurrencyRateService {\n    ExchangeRate quote(CurrencyPair currencyPair) throws IOException;\n} \n之后通过 mvn install 或者 mvn deploy 将 currency-rates-api 发布到本地或者远程 maven 仓库。\n2. 实现汇率查询服务\n新建 Maven 工程 currency-rates-service：\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.keevol.springboot</groupId>\n    <artifactId>currency-rates-service</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n    <name>currency-rates-service</name>\n    <url>http://maven.apache.org</url>\n    <properties>\n        <java_source_version>1.8</java_source_version>\n        <java_target_version>1.8</java_target_version>\n        <file_encoding>UTF-8</file_encoding>\n        <spring_version>4.1.6.RELEASE</spring_version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>com.keevol.springboot</groupId>\n            <artifactId>currency-rates-api</artifactId>\n            <version>1.0-SNAPSHOT</version>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>2.5.3</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>org.springframework</groupId>\n                    <artifactId>spring</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-context</artifactId>\n            <version>${spring_version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>commons-logging</groupId>\n                    <artifactId>commons-logging</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-context-support</artifactId>\n            <version>${spring_version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-jdbc</artifactId>\n            <version>${spring_version}</version>\n        </dependency>\n    </dependencies>\n</project> \n主要关注针对 currency-rates-api 以及 Dubbo 框架的依赖定义。\n\n项目创建完成后，我们着手实现服务接口：\npublic class CurrencyRateServiceImpl implements CurrencyRateService {\n    private CurrencyRateRepository rateRepository;\n    public ExchangeRate quote(CurrencyPair currencyPair) throws IOException {\n        return rateRepository.get(currencyPair);\n    }\n    public CurrencyRateRepository getRateRepository() {\n        return rateRepository;\n    }\n    public void setRateRepository(CurrencyRateRepository rateRepository) {\n        this.rateRepository = rateRepository;\n    }\n}\n其中，CurrencyRateRepository 可以根据情况给出相应的实现，比如通过直接对接银行的系统获取汇率或者通过爬取官网数据获得数据都可以，这里不做过多解释。\n\n服务实现之后，我们需要通过 Dubbo 框架暴露出去给外部使用，所以，我们通过 Dubbo 的服务描述文件（即标准的 Spring 框架 XML 形式的配置文件）完成最终服务的对外开放：\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:context="http://www.springframework.org/schema/context"\n    xmlns:util="http://www.springframework.org/schema/util"\n    xmlns:p="http://www.springframework.org/schema/p"\n    xmlns:c="http://www.springframework.org/schema/c"\n    xmlns:dubbo="http://code.alibabatech.com/schema/dubbo"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/util\n        http://www.springframework.org/schema/util/spring-util.xsd\n        http://code.alibabatech.com/schema/dubbo\n        http://code.alibabatech.com/schema/dubbo/dubbo.xsd">\n    <dubbo:application name="${dubbo.application.name}"\n        owner="${dubbo.application.owner}" />\n    <dubbo:protocol\n        name="${dubbo.application.protocol.name}"\n        port="${dubbo.application.protocol.port}" />\n    <dubbo:service\n        interface="com.keevol.springboot.services.currency.rates.CurrencyRateService"\n        ref="serviceImpl" registry="N/A" />\n    <bean id="serviceImpl"\n        class="com.keevol.springboot.services.currency.rates.CurrencyRateServiceImpl" />\n</beans>\n因为只是原型示例，所以，我们没有定义更加严谨的服务注册方式（registry="N/A"），生产环境下，大家还是需要选择合适的注册服务，比如 Zookeeper。\n\n使用 Dubbo 框架的服务不依赖传统 J2EE 的容器对外提供服务，而是以独立进程的形式对外服务，所以，我们还需要提供一个 Bootstrap 类用于启动我们的 Dubbo 服务：\npublic class Bootstrap {\n    public static void main(String[] args) throws IOException {\n        ApplicationContext context = new ClassPathXmlApplicationContext("spring/services.xml");\n        ((AbstractApplicationContext) context).registerShutdownHook();\n        System.in.read();\n    }\n}\n至此，一个独立部署运行的 Dubbo 服务宣告完成。\n3. 没有 SpringBoot 什么事儿\n不管是否使用 SpringBoot，基于 Dubbo 框架的服务从其服务的定义，到服务的实现，都是常规而无法省略的工作，但是：\n服务完成后，启动 main 函数里的逻辑貌似每次都要编写一样的？\n服务完成后，以什么样的形式发布并部署？zip 包，还是 jar 包，亦或 war 包，甚至其他形式？\n\n考虑到这些，就会涉及 SpringBoot，一旦将 Dubbo 服务以 SpringBoot 的形式封装，Dubbo 服务就可以既享受 SpringBoot 的开发便捷性，又能以统一的形式发布和部署（比如可执行的 jar 形式）。\n\n虽然我们无法省略和简化服务的定义和实现这些步骤，但 Dubbo 服务的 main 函数逻辑实际上是可以固化下来并且复用的，否则，每个人给出的 Dubbo 服务实现的启动类都可能不一样，进而导致运维操作不一样。\n\n在上面我们给出的 main 函数实现中，为了阻止 Dubbo 服务的进程退出（主线程执行完毕，无其他非 daemon 线程存活）。\n\n我们使用了 IO 操作来达成这一目的（System.in.read（）），但实际上，这不是一个很好的做法。更好的做法是，我们设置一个服务是否关闭的开关，只有当外部调用相应管理接口将服务关闭之后，再关闭当前的 Dubbo 服务，所以，基于此思路，我们可以实现一个 ShutdownLatch：\npublic interface ShutdownLatchMBean {\n    String shutdown();\n}\npublic class ShutdownLatch implements ShutdownLatchMBean {\n    protected AtomicBoolean running = new AtomicBoolean(false);\n    public long checkIntervalInSeconds = 10;\n    private String domain = "com.wacai.lifecycles";\n    public ShutdownLatch() {\n    }\n    public ShutdownLatch(String domain) {\n        this.domain = domain;\n    }\n    public void await() throws Exception {\n        if (running.compareAndSet(false, true)) {\n            MBeanServer mBeanServer = ManagementFactory.get - PlatformMBeanServer();\n            mBeanServer.registerMBean(this, new ObjectName(domain, "name", "ShutdownLatch"));\n            while (running.get()) {\n                TimeUnit.SECONDS.sleep(checkIntervalInSeconds);\n            }\n        }\n    }\n    @Override\n    public String shutdown() {\n        if (running.compareAndSet(true, false)) {\n            return "shutdown signal sent, shutting down..";\n        } else {\n            return "shutdown signal had been sent, no need again and again and again...";\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        ShutdownLatch latch = new ShutdownLatch("your_domain_for_mbeans");\n        latch.await();\n    }\n}\nShutdownLatch 默认以 JMX 的 MBean 暴露为管理接口，所以，Dubbo 服务的 main 函数可以规范为：\nApplicationContext context = new ClassPathXmlApplicationContext("spring/services.xml");\n((AbstractApplicationContext) context).registerShutdownHook();\nShutdownLatch latch = new ShutdownLatch("your_domain_for_mbeans");\nlatch.await();\n为了简化基于 SpringBoot 的 Dubbo 服务开发，我们可以将针对 Dubbo 框架的依赖以及对服务启动类的规范封装为一个 spring-boot-starter-dubbo 这样的自动配置模块，此后，要开发一个基于 SpringBoot 的 Dubbo 服务，只要依赖这一自动配置模块即可。\n\n所以，我们新建 Maven 项目 spring-boot-starter-dubbo：\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.keevol.springboot</groupId>\n    <artifactId>spring-boot-starter-dubbo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <packaging>jar</packaging>\n    <name>spring-boot-starter-dubbo</name>\n    <description>Demo project for Spring Boot</description>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>1.3.1.RELEASE</version>\n        <relativePath /> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <properties>\n        <java_source_version>1.8</java_source_version>\n        <java_target_version>1.8</java_target_version>\n        <file_encoding>UTF-8</file_encoding>\n        <spring_version>4.1.6.RELEASE</spring_version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>2.5.3</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>org.springframework</groupId>\n                    <artifactId>spring</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n项目的 pom.xml 中，我们可以重点关注针对 spring-boot-starter 和 Dubbo 框架的依赖。\n\n所有的 SpringBoot 应用启动都是基于标准的 SpringApplication.run 完成的，为了在启动类执行完成后可以阻止 Dubbo 服务进程的推出，我们需要在 SpringBoot 启动类的 main 函数最后调用 ShutdownLatch.await（）。\n\n但是如果要求每个开发者在自己的 SpringBoot 启动类中调用这段代码，显然这并没有给开发者的工作带来任何简化，所以，我们选择使用 CommandLineRunner 来完成针对 ShutdownLatch.await() 的调用工作。\n\n教程前面已经介绍过 CommandLineRunner，任何注册到 SpringBoot 应用的 CommandLineRunner 都将在 SpringApplication.run 执行完成后再执行，恰好符合我们当前场景需要，代码如下所示：\npublic class DubboServiceLatchCommandLineRunner implements CommandLineRunner {\n    private String domain = "com.keevol.services.management";\n    @Override\n    public void run(String... args) throws Exception {\n        ShutdownLatch latch = new ShutdownLatch(getDomain());\n        latch.await();\n    }\n    public String getDomain() {\n        return domain;\n    }\n    public void setDomain(String domain) {\n        this.domain = domain;\n    }\n}\n然后我们需要将 DubboServiceLatchCommandLineRunner 注册到 SpringBoot 应用的容器之中，所以，定义一个 JavaConfig 类如下：\n@Configuration\n@Order\npublic class DubboAutoConfiguration {\n    protected Logger logger = LoggerFactory.getLogger(DubboAutoConf - iguration.class);\n    @Value("${shutdown.latch.domain.name: com.keevol.services.management}")\n    private String shutdownLatchDomainName;\n    @Bean\n    @ConditionalOnClass(name = "com.alibaba.dubbo.rpc.Exporter")\n    public DubboServiceLatchCommandLineRunner configureDubboService-LatchCommandLineRunner() {\n        logger.debug("DubboAutoConfiguration enabled by adding Dubbo-ServiceLatchCommandLineRunner.");\n        DubboServiceLatchCommandLineRunner runner = new DubboServi-ceLatchCommandLineRunner();\n        runner.setDomain(shutdownLatchDomainName);\n        return runner;\n    }\n}\n我们使用 @Order 标注了该配置类以保证 DubboServiceLatchCommandLineRunner 在最后执行，以避免阻塞其他逻辑的执行。\n\n万里长征走到了最后一步，要实现一个 SpringBoot 的自动配置模块，我们需要将 DubboAutoConfiguration 配置类通过 META-INF/spring.factories 配置文件注册并发布：\norg.springframework.boot.autoconfigure.EnableAutoConfiguration=com.keevol.springboot.dubbo.autoconfigure.DubboAutoConfiguration \n\n至此，我们只要通过 mvn install 或者 mvn deploy 将 spring-boot-starter-dubbo 发布到本地或者远程 Maven 仓库，以后开发 Dubbo 服务就只需要在服务的项目依赖中添加如下依赖：\n<dependency>\n    <groupId>com.keevol.springboot</groupId>\n    <artifactId>spring-boot-starter-dubbo</artifactId>\n    <version>1.0.0</version>\n</dependency>\n然后以标准的 SpringApplication 加载 Dubbo 服务的配置并启动就可以了：\n@SpringBootApplication\npublic class DubboWithSpringbootApplication {\n    public static void main(String[] args) {\n        SpringApplication application = new SpringApplication(Dubb - oWithSpringbootApplication.class,\n                "classpath*:/spring/**/*.xml");\n        application.run(args);\n    }\n}\n当然，规范 Dubbo 依赖以及服务的启动逻辑只是使用 SpringBoot 获得的好处之一，最主要的，我们提供了一种基于 SpringBoot 的标准化的 Dubbo 服务开发和发布实践，这对于海量微服务的开发和运维来说是很重要的。\n\n')])])])])}),[],!1,null,null,null);e.default=t.exports}}]);