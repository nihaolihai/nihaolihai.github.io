(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{812:function(e,n,t){"use strict";t.r(n);var a=t(6),r=Object(a.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"eureka自我保护模式和instanceid的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eureka自我保护模式和instanceid的配置"}},[this._v("#")]),this._v(" Eureka自我保护模式和InstanceID的配置")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("关闭自我保护\n保护模式主要在一组客户端和 Eureka Server 之间存在网络分区场景时使用。一旦进入保护模式，Eureka Server 将会尝试保护其服务的注册表中的信息，不再删除服务注册表中的数据。当网络故障恢复后，该 Eureka Server 节点会自动退出保护模式。\n\n如果在 Eureka 的 Web 控制台看到图 1 所示的内容，就证明 Eureka Server 进入保护模式了。\n\n可以通过下面的配置将自我保护模式关闭，这个配置是在 eureka-server 中：\neureka.server.enableSelfPreservation=false\n\n自定义 Eureka 的 InstanceID\n客户端在注册时，服务的 Instance ID 的默认值的格式如下：\n${spring.cloud.client.hostname}:${spring.application.name}:${spring.application. instance_id:${server.port}}\n\n翻译过来就是“主机名：服务名称：服务端口”。当我们在 Eureka 的 Web 控制台查看服务注册信息的时候，就是这样的一个格式：\nuser-PC：eureka-client-user-service：8081\n\n很多时候我们想把 IP 显示在上述格式中，此时，只要把主机名替换成 IP 就可以了，或者调整顺序也可以。可以改成下面的样子，用“服务名称：服务所在 IP：服务端口”的格式来定义：\neureka.instance.instance-id=${spring.application.name}:${spring.cloud.client.ip-address}:${server.port}\n\n定义之后我们看到的就是 eureka-client-user-service：192.168.31.245：8081，一看就知道是哪个服务，在哪台机器上，端口是多少。\n\n我们还可以点击服务的 Instance ID 进行跳转，这个时候显示的名称虽然变成了 IP，但是跳转的链接却还是主机名。\n\n所以还需要加一个配置才能让跳转的链接变成我们想要的样子，使用 IP 进行注册，如图 2 所示：\neureka.instance.preferIpAddress=true\n\n自定义实例跳转链接\n刚刚我们通过配置实现了用 IP 进行注册，当点击 Instance ID 进行跳转的时候，就可以用 IP 跳转了，跳转的地址默认是 IP+Port/info。我们可以自定义这个跳转的地址：\neureka.instance.status-page-url=c.biancheng.net\n\n效果如图 3 所示。\n\n\n")])])]),n("p",[n("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190820/5-1ZR0161G0A7.png",alt:"RUNOOB 图标"}})]),this._v(" "),n("p",[n("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190820/5-1ZR0162543438.png",alt:"RUNOOB 图标"}})]),this._v(" "),n("p",[n("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190820/5-1ZR0164AWa.png",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);n.default=r.exports}}]);