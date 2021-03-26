(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{876:function(e,r,n){"use strict";n.r(r);var t=n(6),s=Object(t.a)({},(function(){var e=this.$createElement,r=this._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[r("h2",{attrs:{id:"灰度发布的原理及实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#灰度发布的原理及实现"}},[this._v("#")]),this._v(" 灰度发布的原理及实现")]),this._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v('原理讲解\n灰度发布的原理其实就是对请求进行分流，可以让指定的用户访问指定的具有新功能的服务，其他的用户还是使用老的服务。既然是对请求进行分流，那么这个还是可以在 API 网关中统一处理，网关是对外的入口，当用户的请求过来时，我们可以将特定的用户请求转发到我们刚刚发布好的具有新功能的服务上去。\n\n核心点还是在转发上做文章，那么就必须要对 Ribbon 进行改造了，因为 Zuul 中使用 Ribbon 来发现需要转发的实例，要想实现请求的分流来做灰度发布，就必须改造 Ribbon，不是改造源码，开源的框架扩展性都非常好，Ribbon 已经为我们提供了一个非常方便的扩展，就是自定义负载均衡策略，通过自定义负载均衡策略我们就可以在里面加上灰度发布的逻辑。\n\n灰度发布只是在系统需要发布新功能时才会用到，并且需要轮流切换，首先将 A 机器上的服务变成灰度发布的状态，隔离所有请求，然后重新发布，验证好了之后重新发布另外机器上的服务。需要用到我们的 Apollo 配置中心来管理需要进行灰度发布的服务信息以及用户信息，这样才可以做到轮流切换。\n\n总结下来我们只需要实现两点就可以达到灰度发布的效果，分别是：\n\n1）将灰度的服务从正常的服务中移除，这样 Ribbon 在进行 Server 选择的时候就不会选择到已经被设置成灰度发布的 Server。\n\n2）获取当前请求的用户 ID，如果这个用户是我们已经配置成灰度发布用户中的一员，那就从所有可用的服务中去对比灰度发布的服务，能找到那就直接返回，这样就能针对指定的用户使用我们配置的灰度服务了。\n根据用户做灰度发布\n首先创建一个 Apollo 配置文件，用来存储需要进行灰度发布的服务信息以及用户信息，也就是说这个配置中的灰度发布服务只能由配置中的用户访问，别的用户是不能访问的，以此来达到分流的目的，见如下代码。\n@Data\n@Configuration\npublic class BasicConf {\n    @Value("${grayPushServers:default}")\n    private String grayPushServers;\n    @Value("${grayPushUsers:default}")\n    private String grayPushUsers;\n}\n创建灰度发布的过滤器，用于将配置信息传递到自定义的负载均衡类中去，见如下代码。\npublic class GrayPushFilter extends ZuulFilter {\n    @Autowired\n    private BasicConf basicConf;\n    public GrayPushFilter() {\n        super();\n    }\n    @Override\n    public boolean shouldFilter() {\n        RequestContext ctx = RequestContext.getCurrentContext();\n        Object success = ctx.get("isSuccess");\n        return success == null ? true : Boolean.parseBoolean(success.toString());\n    }\n    @Override\n    public String filterType() {\n        return "route";\n    }\n    @Override\n    public int filterOrder() {\n        return 6;\n    }\n    @Override\n    public Object run() {\n        RequestContext ctx = RequestContext.getCurrentContext();\n        // AuthFilter 验证成功之后设置的用户编号\n        String loginUserId = ctx.getZuulRequestHeaders().get("uid");\n        RibbonFilterContextHolder.clearCurrentContext();\n        RibbonFilterContextHolder.getCurrentContext().add("userId", loginUserId);\n        // 灰度发布的服务信息\n        RibbonFilterContextHolder.getCurrentContext().add("servers", basicConf.getGrayPushServers());\n        // 灰度发布的用户 ID 信息\n        RibbonFilterContextHolder.getCurrentContext().add("userIds", basicConf.getGrayPushUsers());\n        return null;\n    }\n}\nRibbonFilterContextHolder 是基于 InheritableThreadLocal 来传输数据的工具类，为什么要用 InheritableThreadLocal 而不是 ThreadLocal？\n\n在 Spring Cloud 中我们用 Hystrix 来实现断路器，默认是用信号量来进行隔离的，信号量的隔离方式用 ThreadLocal 在线程中传递数据是没问题的，当隔离模式为线程时，Hystrix 会将请求放入 Hystrix 的线程池中执行，这时候某个请求就由 A 线程变成 B 线程了，ThreadLocal 必然没有效果了，这时候就用 InheritableThreadLocal 来传递数据。\n\n接下来就是重头戏了，自然是定义我们的负载均衡策略，在里面加上灰度发布的逻辑，这里是基于 RoundRobinRule 规则来进行改造的。\n\n如下代码是从可用的 Server 中移除已经被设置成灰度发布的服务，这样就可以保证某个服务被设置成灰度发布后，不会被正常的用户访问到了。\nprivate List<Server> removeServer(List<Server> allServers, String servers) {\n    List<Server> newServers = new ArrayList<Server>();\n    List<String> grayServers = Arrays.asList(servers.split(","));\n    for (Server server : allServers) {\n        String hostPort = server.getHostPort();\n        if (!grayServers.contains(hostPort)) {\n            newServers.add(server);\n        }\n    }\n    return newServers;\n}\n完整代码如下。\n/**\n* 灰度发布转发规则，基于RoundRobinRule规则改造\n**/\npublic class GrayPushRule extends AbstractLoadBalancerRule {\n    private AtomicInteger nextServerCyclicCounter;\n    private static final boolean AVAILABLE_ONLY_SERVERS = true;\n    private static final boolean ALL_SERVERS = false;\n    private static Logger log = LoggerFactory.getLogger(RoundRobinRule.class);\n    public GrayPushRule() {\n        this.nextServerCyclicCounter = new AtomicInteger(0);\n    }\n    public GrayPushRule(ILoadBalancer lb) {\n        this();\n        this.setLoadBalancer(lb);\n    }\n    public Server choose(ILoadBalancer lb, Object key) {\n        if (lb == null) {\n            log.warn("no load balancer");\n            return null;\n        } else {\n            // 当前有灰度的用户和灰度的服务配置信息，并且灰度的服务在所有服务中则返回该灰度服务给用户\n            String curUserId = RibbonFilterContextHolder.getCurrentContext().get("userId");\n            String userIds = RibbonFilterContextHolder.getCurrentContext().get("userIds");\n            String servers = RibbonFilterContextHolder.getCurrentContext().get("servers");\n            System.out.println(Thread.currentThread().getName() + ":" + servers);\n            if (StringUtils.isNotBlank(servers)) {\n                List<String> grayServers = Arrays.asList(servers.split(","));\n                if (StringUtils.isNotBlank(userIds) && StringUtils.isNotBlank(curUserId)) {\n                    String[] uids = userIds.split(",");\n                    if (Arrays.asList(uids).contains(curUserId)) {\n                        List<Server> allServers = lb.getAllServers();\n                        for (Server server : allServers) {\n                            if (grayServers.contains(server.getHostPort())) {\n                                return server;\n                            }\n                        }\n                    }\n                }\n            }\n            Server server = null;\n            int count = 0;\n            while (true) {\n                if (server == null && count++ < 10) {\n                    List<Server> reachableServers = lb.getReachableServers();\n                    List<Server> allServers = lb.getAllServers();\n                    // 移除已经设置为灰度发布的服务信息\n                    if (StringUtils.isNotBlank(servers)) {\n                        reachableServers = removeServer(reachableServers, servers);\n                        allServers = removeServer(allServers, servers);\n                    }\n                    int upCount = reachableServers.size();\n                    int serverCount = allServers.size();\n                    if (upCount != 0 && serverCount != 0) {\n                        int nextServerIndex = this.incrementAndGetModulo(serverCount);\n                        server = (Server) allServers.get(nextServerIndex);\n                        if (server == null) {\n                            Thread.yield();\n                        } else {\n                            if (server.isAlive() && server.isReadyToServe()) {\n                                return server;\n                            }\n                            server = null;\n                        }\n                        continue;\n                    }\n                    log.warn("No up servers available from load balancer: " + lb);\n                    return null;\n                }\n                if (count >= 10) {\n                    log.warn("No available alive servers after 10 tries from load balancer: " + lb);\n                }\n                return server;\n            }\n        }\n    }\n    private List<Server> removeServer(List<Server> allServers, String servers) {\n        List<Server> newServers = new ArrayList<Server>();\n        List<String> grayServers = Arrays.asList(servers.split(","));\n        for (Server server : allServers) {\n            String hostPort = server.getHostPort();\n            if (!grayServers.contains(hostPort)) {\n                newServers.add(server);\n            }\n        }\n        return newServers;\n    }\n    private int incrementAndGetModulo(int modulo) {\n        int current;\n        int next;\n        do {\n            current = this.nextServerCyclicCounter.get();\n            next = (current + 1) % modulo;\n        } while (!this.nextServerCyclicCounter.compareAndSet(current, next));\n        return next;\n    }\n    public Server choose(Object key) {\n        return this.choose(this.getLoadBalancer(), key);\n    }\n    public void initWithNiwsConfig(IClientConfig clientConfig) {\n    }\n}\n使用如下代码的示例。\npublic Server choose(ILoadBalancer lb, Object key) {\n    String curUserId = RibbonFilterContextHolder.getCurrentContext().get("userId");\n    String userIds = RibbonFilterContextHolder.getCurrentContext().get("userIds");\n    String servers = RibbonFilterContextHolder.getCurrentContext().get("servers");\n    List<Server> reachableServers = lb.getReachableServers();\n    List<Server> allServers = lb.getAllServers();\n    // 移除已经设置为灰度发布的服务信息\n    reachableServers = removeServer(reachableServers, servers);\n    allServers = removeServer(allServers, servers);\n    // ....\n}\n如下代码是对具体用户选择灰度服务的逻辑。\npublic Server choose(ILoadBalancer lb, Object key) {\n    // 获取当前用户和灰度的服务配置信息, 当用户符合灰度发布的规则后, 返回该灰度服务给用户\n    String curUserId = RibbonFilterContextHolder.getCurrentContext().get("userId");\n    String userIds = RibbonFilterContextHolder.getCurrentContext().get("userIds");\n    String servers = RibbonFilterContextHolder.getCurrentContext().get("servers");\n    List<String> grayServers = Arrays.asList(servers.split(","));\n    if (StringUtils.isNotBlank(userIds) && StringUtils.isNotBlank(curUserId)) {\n        String[] uids = userIds.split(",");\n        if (Arrays.asList(uids).contains(curUserId)) {\n            List<Server> allServers = lb.getAllServers();\n            for (Server server : allServers) {\n                if (grayServers.contains(server.getHostPort())) {\n                    return server;\n                }\n            }\n        }\n    }\n}\n最后需要启动自定义的负载均衡策略，在属性文件中配置如下：\nzuul-extend-article-service.ribbon.NFLoadBalancerRuleClassName=com.biancheng.zuul_demo.rule.GrayPushRule\n\nzuul-extend-article-service 是服务名称，针对具体的服务配置具体的负载策略。\n根据 IP 做灰度发布\n根据用户来进行灰度测试基本上已经够用了，有的时候我们可能有一些特殊的需求，比如需要不登录进行测试，那么就不能按用户来分流了，我们可以用 IP 来进行分流，因为前面已经讲过了用户分流，所以本节就不具体讲解 IP 分流了。\n\n可以定义一个配置，用来标识是按用户分流还是 IP 分流，然后走各自的分流流程。IP 分流其实跟用户分流一样，只需要添加一个 IP 的配置，然后判断当前请求的 IP。\n\n如果是在灰度发布的 IP 中的话就返回该灰度发布的服务，流程和代码都一样，唯一不一样的就是一个是按用户 ID（上面代码中的 curUserId），一个是按 IP（需要获取访问用户所在 IP）。\n\n')])])])])}),[],!1,null,null,null);r.default=s.exports}}]);