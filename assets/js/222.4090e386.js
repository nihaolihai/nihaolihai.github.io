(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{710:function(n,a,e){"use strict";e.r(a);var t=e(6),s=Object(t.a)({},(function(){var n=this.$createElement,a=this._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("h2",{attrs:{id:"maven自定义插件简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven自定义插件简介"}},[this._v("#")]),this._v(" Maven自定义插件简介")]),this._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("通过前面对 Maven 的介绍可以知道，Maven 是一个系统管理框架或体系，专注管理构建的生命周期和各个阶段。真正工作的是绑定到各个阶段的 Maven 插件。\n\n每个插件具有一个或一个以上的目标，可以将这些插件的目标绑定到 Maven 生命周期的各个阶段中，或直接从命令行运行这些插件的目标。\n\n用户可以从 Apache 和其他的参考 Maven 中心仓库获取。当然，这些插件基本上能满足大部分程序员的需求，但是在特殊情况下，有些极个别的功能可能在中心仓库中找不到，这时候怎么办呢？一个是耐心地等待别人分享；另一个是自己动手，完成一个实现该功能的插件。\n\n等待是需要耐心的，如果当前功能要求的很急，没有时间让我们验证自己的耐心，那咱们就只能亲自动手写插件了。\n\n其实编写插件也并不是很难很复杂的事情，接下来我们开始研究一下，怎么样编写看似高深的、能绑定到 Maven 生命周期的阶段中自动被调用执行的 Maven 插件。\n\n为了方便用户对编写 Maven 插件的方向和过程有个总体的了解，先介绍一下编写 Maven 插件的基本步骤。\n\n1）创建 Maven 项目。插件的功能肯定需要编写 Java 类的，所以插件本身就是一个 Maven 项目。当然，相对于以前研究的 Maven 项目，插件项目有它的特殊点：packaging 必须是 maven-plugin 类型，可以通过 maven-archetype-plugin 快速创建一个 Maven 插件项目。\n\n2）编写插件目标。每个插件都至少包含一个目标，每个目标对应一个独立的 Java 类。这里把这种类叫 Mojo 类（对象）。Mojo 类必须继承 AbstractMojo 父类。\n\n3）设置目标的配置点。大部分 Maven 件和它的目标都是可以配置的。根据需要，可以在编写 Mojo 的时候给它设置好可以配置的参数。\n\n4）编写逻辑代码，实现目标功能。用 Java 代码实现插件的功能。\n\n5）处理错误和日志。当 Mojo 运行的时候发生异常时，需要根据情况控制 Maven 的运行状况，并且用代码实现必要的日志输出，为用户提供必要的提示信息。\n\n6）测试插件。编写测试案例，绑定（或命令行）执行插件。 \n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);