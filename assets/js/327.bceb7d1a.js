(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{814:function(e,n,r){"use strict";r.r(n);var t=r(6),s=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"spring-cloud-ribbon自定义负载均衡策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-ribbon自定义负载均衡策略"}},[this._v("#")]),this._v(" Spring Cloud Ribbon自定义负载均衡策略")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("通过实现 IRule 接口可以自定义负载策略，主要的选择服务逻辑在 choose 方法中。我们这边只是演示怎么自定义负载策略，所以没写选择的逻辑，直接返回服务列表中第一个服务。具体代码如下所示。\npublic class MyRule implements IRule {\n    private ILoadBalancer lb;\n    @Override\n    public Server choose(Object key) {\n        List<Server> servers = lb.getAllServers();\n        for (Server server : servers) {\n            System.out.println(server.getHostPort());\n        }\n        return servers.get(0);\n    }\n    @Override\n    public void setLoadBalancer(ILoadBalancer lb) {\n        this.lb = lb;\n    }\n    @Override\n    public ILoadBalancer getLoadBalancer() {\n        return lb;\n    }\n}\n在 Spring Cloud 中，可通过配置的方式使用自定义的负载策略，ribbon-config-demo 是调用的服务名称。\nribbon-config-demo.ribbon.NFLoadBalancerRuleClassName=net.biancheng.ribbon_eureka_demo.rule.MyRule\n\n重启服务，访问调用了其他服务的接口，可以看到控制台的输出信息中已经有了我们自定义策略中输出的服务信息，并且每次都是调用第一个服务。这跟我们的逻辑是相匹配的。\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);