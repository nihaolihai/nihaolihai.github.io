(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1067:function(e,t,s){"use strict";s.r(t);var r=s(6),l=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"servlet-处理用户请求的完整流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet-处理用户请求的完整流程"}},[e._v("#")]),e._v(" servlet 处理用户请求的完整流程")]),e._v(" "),s("p",[e._v("针对 Servlet 的每次请求，Web 服务器在调用 service() 方法之前，都会创建 HttpServletRequest 和 HttpServletResponse 对象。其中，HttpServletRequest 对象用于封装 HTTP 请求消息，简称 request 对象。HttpServletResponse 对象用于封装 HTTP 响应消息，简称 response 对象。浏览器访问 Servlet 的交互过程如图 1 所示。")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/190610/5-1Z610154349322.png",alt:"RUNOOB 图标"}})]),e._v(" "),s("p",[e._v("在图 1 中，首先浏览器向 Web 服务器发送了一个 HTTP 请求，Web 服务器根据收到的请求，会先创建一个 HttpServletRequest 和 HttpServletResponse 对象，然后再调用相应的 Servlet 程序。")]),e._v(" "),s("p",[e._v("在 Servlet 程序运行时，它首先会从 HttpServletRequest 对象中读取数据信息，然后通过 service() 方法处理请求消息，并将处理后的响应数据写入到 HttpServletResponse 对象中。最后，Web 服务器会从 HttpServletResponse 对象中读取到响应数据，并发送给浏览器。")]),e._v(" "),s("p",[e._v("需要注意的是，在 Web 服务器运行阶段，每个 Servlet 都只会创建一个实例对象，针对每次 HTTP 请求，Web 服务器都会调用所请求 Servlet 实例的 service（HttpServletRequest request，HttpServletResponse response）方法，并重新创建一个 request 对象和一个 response 对象。")])])}),[],!1,null,null,null);t.default=l.exports}}]);