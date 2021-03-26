(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{556:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"条例7-消除过时的对象引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条例7-消除过时的对象引用"}},[t._v("#")]),t._v(" 条例7：消除过时的对象引用")]),t._v(" "),a("p",[t._v("如果你从手动内存管理的语言如C或C++，切换到诸如Java这样的垃圾回收，作为程序员的工作会因此变得更轻松，因为垃圾收集将自动回收\n垃圾。当你第一次体验它时就感觉像魔法一样。这很容易导致不需要考虑内存管理的印象，但并不完全是这样。")]),t._v(" "),a("p",[t._v("看看下面简单的栈的实现")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" DEFAULT_INITIAL_CAPACITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        elements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEFAULT_INITIAL_CAPACITY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmptyStackException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            elements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个程序看上去没什么问题（但看条例29的通用版本）你可以对它进行详尽测试。它会出色的通过每个测试，但有一个潜在的问题。\n大致来说，程序有“内存泄露”，这会悄无声息地表现为性能降低，由于增加的垃圾收集活动或者增加的内存开销。在极端的场景下，\n这样的内存泄露会导致磁盘分页，甚至程序因内存溢出错误（OOM）而导致失败，但这样的失败相当罕见。")]),t._v(" "),a("p",[t._v("那么哪边内存泄露了？如果栈增大然后缩小，那么弹出堆栈的对象将不会被垃圾回收，即便使用栈的程序没有对它们的引用。这是因为\n栈维护了这些对象的过时的引用。过时的引用简单来说是不会再被间接引用的。这个例子中任何在元素数组活动部分之外的任何引用都是\n过时的。活动部分由索引小于size的元素组成。")]),t._v(" "),a("p",[t._v("垃圾回收语言中的内存泄露（更恰当地称为非故意对象保留）是隐患。如果对象引用被无意中保留，不仅对象被排除在垃圾回收之外，那些\n引用这些对象的对象也将如此，以此类推。即便只有少量对象引用被无意保留，许多许多的对象可能被挡在垃圾回收外，潜在地对性能产生重大\n影响。")]),t._v(" "),a("p",[t._v("这类问题的解决是简单的：一旦对象过时将其引用清空。在Stack类的例子中，只要元素项弹出栈后，对它的引用就过时了。pop方法的正确\n版本像下面这样：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmptyStackException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消除过时引用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("将过时引用置为null的一个额外好处是后续如果被错误地解引用，程序将理解产生"),a("code",[t._v("NullPointerException")]),t._v("，而不是悄悄地干不正确的事。\n总是尽快地侦测到程序错误总是有好处的。")]),t._v(" "),a("p",[t._v("当程序员首次被这个问题困扰时，他们可能采用在每次程序使用完对象时就将其引用置为null的过度补偿方式。这既不必要也不可取。没必要地\n复杂了程序。将对象引用置空应该是特例而不是规范。最好的消除过时引用的方式是让包含引用的变量超出作用域。如果在尽可能狭窄的作用域（条例57）内\n定义每个变量，这自然会发生")]),t._v(" "),a("p",[t._v("那么你什么时候应该置空引用呢？Stack类的哪个方面容易导致内存泄露？简单讲，它管理自己的内存。存储池由元素数组（对象引用单元，而不是对象本身）中的元素组成。\n数组（早先定义的）活动部分的元素被分配了，数组剩下部分的元素被释放了。垃圾收集器没法知道这点。对垃圾收集器来说，元素数组中的所有元素\n都是同样有效的。只有程序员知道数组的不活动部分是不重要的。当数组元素一旦成为不活动的部分的一部分时程序员手动将其置为空以此有效\n地将这个事实传达给垃圾回收器。")]),t._v(" "),a("p",[t._v("通常来讲，当一个类管理自己的内存时，程序员应该警惕内存泄露。当元素被释放时，任何包含在元素中的对象引用应该被置为null。")]),t._v(" "),a("p",[t._v("另一个常见的内存泄露来源是缓存。一旦将一个对象引用放入缓存后，很容易忘记放在那，并在不再用到它的很长时间里丢在缓存里。\n这个问题有几种解决方案。如果足够幸运，正好实现这么一个缓存：外部对缓存的键的引用时长和缓存里的条目的有效时长是一样的，\n那么将缓存实现为一个"),a("code",[t._v("WeakHashMap")]),t._v("。当缓存的条目变得过时时，条目将会被自动移除。牢记"),a("code",[t._v("WeakHashMap")]),t._v("只在缓存条目的\n预期生命周期由外部对键的引用而不是由对值的引用确定时是有用的。")]),t._v(" "),a("p",[t._v("更一般的是，缓存条目的有效生命周期是不能很好定义的，条目随着时间变得价值不再。缓存应该偶尔清楚废弃的条目。可以通过后台\n进程实现（可以用"),a("code",[t._v("ScheduledThreadPoolExecutor")]),t._v("）或者作为添加新条目到缓存的副作用。"),a("code",[t._v("LinkedHashMap")]),t._v("类的"),a("code",[t._v("removeEldestEntry")]),t._v("\n方法简化了后一种方式。对于更复杂的缓存，需要直接使用"),a("code",[t._v("java.lang.ref")])]),t._v(" "),a("p",[t._v("内存泄露的第三种常见来源是监听器和其他回调。如果实现了这么个API，客户端注册回调，但没有显示注销，除非你采取行动，否则\n会过时的回调引用将会聚集。确保回调被及时垃圾收集的方式是将只存储它们的弱引用，比如，在WeakHashMap中仅将他们存储为键。")]),t._v(" "),a("p",[t._v("因为内存泄露通常不会表现为明显的失败，他们可能存在系统中多年。他们通常只有在仔细代码审查后或借助称为堆分析器的调试工具\n才能发现。所以非常需要在此类问题出现前预见并防止他们的发生。")])])}),[],!1,null,null,null);s.default=e.exports}}]);