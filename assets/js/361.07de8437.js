(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{858:function(e,n,t){"use strict";t.r(n);var s=t(6),i=Object(s.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"apollo服务端设计原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apollo服务端设计原理"}},[this._v("#")]),this._v(" Apollo服务端设计原理")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('本节主要对 Apollo 服务端设计原理进行解析。\n1. 配置发布后的实时推送设计\n配置中心最重要的一个特性就是实时推送，正因为有这个特性，我们才可以依赖配置中心做很多事情。如图 1 所示。\n\n图 1 简要描述了配置发布的大致过程。\n用户在 Portal 中进行配置的编辑和发布。\nPortal 会调用 Admin Service 提供的接口进行发布操作。\nAdmin Service 收到请求后，发送 ReleaseMessage 给各个 Config Service，通知 Config Service 配置发生变化。\nConfig Service 收到 ReleaseMessage 后，通知对应的客户端，基于 Http 长连接实现。\n2. 发送 ReleaseMessage 的实现方式\nReleaseMessage 消息是通过 Mysql 实现了一个简单的消息队列。之所以没有采用消息中间件，是为了让 Apollo 在部署的时候尽量简单，尽可能减少外部依赖，如图 2 所示。\n\n图 2 简要描述了发送 ReleaseMessage 的大致过程：\nAdmin Service 在配置发布后会往 ReleaseMessage 表插入一条消息记录。\nConfig Service 会启动一个线程定时扫描 ReleaseMessage 表，来查看是否有新的消息记录。\nConfig Service 发现有新的消息记录，就会通知到所有的消息监听器。\n消息监听器得到配置发布的信息后，就会通知对应的客户端。\n3. Config Service 通知客户端的实现方式\n通知采用基于 Http 长连接实现，主要分为下面几个步骤：\n客户端会发起一个 Http 请求到 Config Service 的 notifications/v2 接口。\nnotifications/v2 接口通过 Spring DeferredResult 把请求挂起，不会立即返回。\n如果在 60s 内没有该客户端关心的配置发布，那么会返回 Http 状态码 304 给客户端。\n如果发现配置有修改，则会调用 DeferredResult 的 setResult 方法，传入有配置变化的 namespace 信息，同时该请求会立即返回。\n客户端从返回的结果中获取到配置变化的 namespace 后，会立即请求 Config Service 获取该 namespace 的最新配置。\n4. 源码解析实时推送设计\nApollo 推送涉及的代码比较多，本教程就不做详细分析了，笔者把推送这里的代码稍微简化了下，给大家进行讲解，这样理解起来会更容易。\n\n当然，这些代码比较简单，很多细节就不做考虑了，只是为了能够让大家明白 Apollo 推送的核心原理。\n\n发送 ReleaseMessage 的逻辑我们就写一个简单的接口，用队列存储，测试的时候就调用这个接口模拟配置有更新，发送 ReleaseMessage 消息。具体代码如下所示。\n@RestController\npublic class NotificationControllerV2 implements ReleaseMessageListener {\n    // 模拟配置更新, 向其中插入数据表示有更新\n    public static Queue<String> queue = new LinkedBlockingDeque<>();\n    @GetMapping("/addMsg")\n    public String addMsg() {\n        queue.add("xxx");\n        return "success";\n    }\n}\n消息发送之后，根据前面讲过的 Config Service 会启动一个线程定时扫描 ReleaseMessage 表，查看是否有新的消息记录，然后取通知客户端，在这里我们也会启动一个线程去扫描，具体代码如下所示。\n@Component\npublic class ReleaseMessageScanner implements InitializingBean {\n    @Autowired\n    private NotificationControllerV2 configController;\n    @Override\n    public void afterPropertiesSet() throws Exception {\n        // 定时任务从数据库扫描有没有新的配置发布\n        new Thread(() -> {\n            for (;;) {\n                String result = NotificationControllerV2.queue.poll();\n                if (result != null) {\n                    ReleaseMessage message = new ReleaseMessage();\n                    message.setMessage(result);\n                    configController.handleMessage(message);\n                }\n            }\n        }).start();\n        ;\n    }\n}\n循环读取 NotificationControllerV2 中的队列，如果有消息的话就构造一个 Release-Message 的对象，然后调用 NotificationControllerV2 中的 handleMessage() 方法进行消息的处理。\n\nReleaseMessage 就一个字段，模拟消息内容，具体代码如下所示。\npublic class ReleaseMessage {\n    private String message;\n    public void setMessage(String message) {\n        this.message = message;\n    }\n    public String getMessage() {\n        return message;\n    }\n}\n接下来，我们来看 handleMessage 做了哪些工作。\n\nNotificationControllerV2 实现了 ReleaseMessageListener 接口，ReleaseMessageListener 中定义了 handleMessage() 方法，具体代码如下所示。\npublic interface ReleaseMessageListener {\n    void handleMessage(ReleaseMessage message);\n}\n\nhandleMessage 就是当配置发生变化的时候，发送通知的消息监听器。消息监听器在得到配置发布的信息后，会通知对应的客户端，具体代码如下所示。\n@RestController\npublic class NotificationControllerV2 implements ReleaseMessageListener {\n    private final Multimap<String, DeferredResultWrapper> deferredResults = Multimaps\n            .synchronizedSetMultimap(HashMultimap.create());\n    @Override\n    public void handleMessage(ReleaseMessage message) {\n        System.err.println("handleMessage:" + message);\n        List<DeferredResultWrapper> results = Lists.newArrayList(deferredResults.get("xxxx"));\n        for (DeferredResultWrapper deferredResultWrapper : results) {\n            List<ApolloConfigNotification> list = new ArrayList<>();\n            list.add(new ApolloConfigNotification("application", 1));\n            deferredResultWrapper.setResult(list);\n        }\n    }\n}\nApollo 的实时推送是基于 Spring DeferredResult 实现的，在 handleMessage() 方法中可以看到是通过 deferredResults 获取 DeferredResult，deferredResults 就是第一行的 Multimap，Key 其实就是消息内容，Value 就是 DeferredResult 的业务包装类 DeferredResultWrapper，我们来看下 DeferredResultWrapper 的代码，代码如下所示。\npublic class DeferredResultWrapper {\n    private static final long TIMEOUT = 60 * 1000;// 60 seconds\n    private static final ResponseEntity<List<ApolloConfigNotification>> NOT_MODIFIED_RESPONSE_LIST = new ResponseEntity<>(\n            HttpStatus.NOT_MODIFIED);\n    private DeferredResult<ResponseEntity<List<ApolloConfigNotification>>> result;\n    public DeferredResultWrapper() {\n        result = new DeferredResult<>(TIMEOUT, NOT_MODIFIED_RESPONSE_LIST);\n    }\n    public void onTimeout(Runnable timeoutCallback) {\n        result.onTimeout(timeoutCallback);\n    }\n    public void onCompletion(Runnable completionCallback) {\n        result.onCompletion(completionCallback);\n    }\n    public void setResult(ApolloConfigNotification notification) {\n        setResult(Lists.newArrayList(notification));\n    }\n    public void setResult(List<ApolloConfigNotification> notifications) {\n        result.setResult(new ResponseEntity<>(notifications, HttpStatus.OK));\n    }\n    public DeferredResult<ResponseEntity<List<ApolloConfigNotification>>> getResult() {\n        return result;\n    }\n}\n通过 setResult() 方法设置返回结果给客户端，以上就是当配置发生变化，然后通过消息监听器通知客户端的原理，那么客户端是在什么时候接入的呢？具体代码如下。\n@RestController\npublic class NotificationControllerV2 implements ReleaseMessageListener {\n    // 模拟配置更新, 向其中插入数据表示有更新\n    public static Queue<String> queue = new LinkedBlockingDeque<>();\n    private final Multimap<String, DeferredResultWrapper> deferredResults = Multimaps\n            .synchronizedSetMultimap(HashMultimap.create());\n    @GetMapping("/getConfig")\n    public DeferredResult<ResponseEntity<List<ApolloConfigNotification>>> getConfig() {\n        DeferredResultWrapper deferredResultWrapper = new DeferredResultWrapper();\n        List<ApolloConfigNotification> newNotifications = getApolloConfigNotifications();\n        if (!CollectionUtils.isEmpty(newNotifications)) {\n            deferredResultWrapper.setResult(newNotifications);\n        } else {\n            deferredResultWrapper.onTimeout(() -> {\n                System.err.println("onTimeout");\n            });\n            deferredResultWrapper.onCompletion(() -> {\n                System.err.println("onCompletion");\n            });\n            deferredResults.put("xxxx", deferredResultWrapper);\n        }\n        return deferredResultWrapper.getResult();\n    }\n    private List<ApolloConfigNotification> getApolloConfigNotifications() {\n        List<ApolloConfigNotification> list = new ArrayList<>();\n        String result = queue.poll();\n        if (result != null) {\n            list.add(new ApolloConfigNotification("application", 1));\n        }\n        return list;\n    }\n}\nNotificationControllerV2 中提供了一个 /getConfig 的接口，客户端在启动的时候会调用这个接口，这个时候会执行 getApolloConfigNotifications() 方法去获取有没有配置的变更信息，如果有的话证明配置修改过，直接就通过 deferredResultWrapper.setResult(newNotifications) 返回结果给客户端，客户端收到结果后重新拉取配置的信息覆盖本地的配置。\n\n如果 getApolloConfigNotifications() 方法没有返回配置修改的信息，则证明配置没有发生修改，那就将 DeferredResultWrapper 对象添加到 deferredResults 中，等待后续配置发生变化时消息监听器进行通知。\n\n同时这个请求就会挂起，不会立即返回，挂起是通过 DeferredResultWrapper 中的下面这部分代码实现的，具体代码如下所示。\nprivate static final long TIMEOUT = 60 * 1000; // 60 seconds\nprivate static final ResponseEntity<List<ApolloConfigNotification>> NOT_MODIFIED_RESPONSE_LIST = new ResponseEntity<>(\n        HttpStatus.NOT_MODIFIED);\nprivate DeferredResult<ResponseEntity<List<ApolloConfigNotification>>> result;\npublic DeferredResultWrapper() {\n  result = new DeferredResult<>(TIMEOUT, NOT_MODIFIED_RESPONSE_LIST);\n}\n在创建 DeferredResult 对象的时候指定了超时的时间和超时后返回的响应码，如果 60s 内没有消息监听器进行通知，那么这个请求就会超时，超时后客户端收到的响应码就是 304。\n\n整个 Config Service 的流程就走完了，接下来我们来看一下客户端是怎么实现的，我们简单地写一个测试类模拟客户端注册，具体代码如下所示。\npublic class ClientTest {\n    public static void main(String[] args) {\n        reg();\n    }\n    private static void reg() {\n        System.err.println("注册");\n        String result = request("http://localhost:8081/getConfig");\n        if (result != null) {\n            // 配置有更新, 重新拉取配置\n            // ......\n        }\n        // 重新注册\n        reg();\n    }\n    private static String request(String url) {\n        HttpURLConnection connection = null;\n        BufferedReader reader = null;\n        try {\n            URL getUrl = new URL(url);\n            connection = (HttpURLConnection) getUrl.openConnection();\n            connection.setReadTimeout(90000);\n            connection.setConnectTimeout(3000);\n            connection.setRequestMethod("GET");\n            connection.setRequestProperty("Accept-Charset", "utf-8");\n            connection.setRequestProperty("Content-Type", "application/json");\n            connection.setRequestProperty("Charset", "UTF-8");\n            System.out.println(connection.getResponseCode());\n            if (200 == connection.getResponseCode()) {\n                reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));\n                StringBuilder result = new StringBuilder();\n                String line = null;\n                while ((line = reader.readLine()) != null) {\n                    result.append(line);\n                }\n                System.out.println("结果 " + result);\n                return result.toString();\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        } finally {\n            if (connection != null) {\n                connection.disconnect();\n            }\n        }\n        return null;\n    }\n}\n首先启动 /getConfig 接口所在的服务，然后启动客户端，然后客户端就会发起注册请求，如果有修改直接获取到结果，则进行配置的更新操作。如果无修改，请求会挂起，这里客户端设置的读取超时时间是 90s，大于服务端的 60s 超时时间。\n\n每次收到结果后，无论是有修改还是无修改，都必须重新进行注册，通过这样的方式就可以达到配置实时推送的效果。\n\n我们可以调用之前写的 /addMsg 接口来模拟配置发生变化，调用之后客户端就能马上得到返回结果。\n\n')])])]),n("p",[n("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190828/5-1ZRQ044455A.png",alt:"RUNOOB 图标"}})]),this._v(" "),n("p",[n("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190828/5-1ZRQ04542293.png",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);n.default=i.exports}}]);