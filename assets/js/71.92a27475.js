(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{558:function(a,s,n){"use strict";n.r(s);var t=n(6),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"条例8-避免使用finalizers和cleaners"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条例8-避免使用finalizers和cleaners"}},[a._v("#")]),a._v(" 条例8： 避免使用finalizers和cleaners")]),a._v(" "),n("p",[a._v("Finalizer不可预测，通常危险且没必要。使用它们将导致行为不稳定，性能低下及可移植性问题。\nFinalizers有一些有效的用途，在本条例稍后我们会提到。但作为原则，我们该避免使用它们。到了Java 9，finalizers不再推荐使用，\n但是它们仍被Java类库使用。Java 9用cleaners代替finalizers。Cleaners没finalizers那么危险，但是仍不可预测，慢，而且通常没必要。")]),a._v(" "),n("p",[a._v("C++程序员请注意不要将java中的finalizers或cleaners类比成C++的析构函数。在C++中，析构函数是回收对象关联的资源的正常方式，与\n构造函数对应的重要部分。在Java中，当对象不可达时垃圾收集器回收对象的存储。程序员不需要做额外的操作。C++析构函数也用来回收其他\n非内存资源。在Java中，用"),n("code",[a._v("try-with-resources")]),a._v("或"),n("code",[a._v("try-finally")]),a._v("块来达到这个目的。")]),a._v(" "),n("p",[a._v("finalizers和cleaners的一个缺点是没有保证它们会及时执行。在对象不可达和finalizer或cleaner执行这段可以是任意长的时间。\n这意味着你应该永远不要在finalizer或cleaner中做时间紧迫的事。比如依靠finalizer或cleaner来关闭文件是严重的错误，\n因为打开的文件描述符是一个有限资源。如果由于系统在运行finalizers或Cleaners上的拖延导致许多打开的文件，程序可能因为\n不能再打开文件而失败。")]),a._v(" "),n("p",[a._v("finalizers和cleaners执行的及时性主要是垃圾回收算法的功能，不同实现之间差别很大。依赖finalizer或cleaner执行的及时性的\n程序的行为可能有所不同。这样的程序在测试的目标JVM上运行完美然而在你最重要的客户青睐的JVM上惨败是完全有可能的。")]),a._v(" "),n("p",[a._v("延迟终结不仅仅是理论上的问题。为类提供finalizer可以任意延迟实例的回收。一位同事调试了一个长时间运行的GUI应用程序神秘\n地死于内存溢出。分析显示，该应用挂掉时，在其finalizer队列中包含数千个图形对象，等待被终结和回收。不幸的是，\n相比其他应用线程，finalizer线程运行在一个较低优先级。因此对象终结的速度不能赶上对象变为可终结的速度。")]),a._v(" "),n("p",[a._v("语言规范不保证那个线程将执行终结器，所以除了避免使用终结器外，没有可移植的方法组织这类问题。cleaners在这方面比finalizers好点，\n因为类作者可以控制他们自己的cleaner线程，但是cleaners依然运行在后台，在垃圾收集器的控制下，所以不能保证及时的清理。")]),a._v(" "),n("p",[a._v("不仅规范没有提供finalizers或cleaners及时运行的保证；它也没提供它们是否会运行。这完全有可能，甚至可能，还没在那些\n不再可达的对象上运行finalizers或Cleaners，程序就终止了。结论是，永远不该依赖finalizer或cleaner更新持久状态。\n比如，依赖finalizer或cleaner来释放共享资源（如数据库）上的持久锁是使整个分布式系统陷入停顿的好方式。")]),a._v(" "),n("p",[a._v("不要被"),n("code",[a._v("System.gc")]),a._v("和"),n("code",[a._v("System.runFinalization")]),a._v("方法所吸引。它们可能会增加finalizers或cleaner被执行的几率，但是也不能\n得到保证。曾经有2个方法声称可以保证这点："),n("code",[a._v("System.runFinalizersOnExit")]),a._v("和它的孪兄"),n("code",[a._v("Runtime.runFinalizersOnExit")]),a._v("。\n这些方法有致命缺陷，且已过时数十年了。")]),a._v(" "),n("p",[a._v("finalizers的另一个问题是在终结期间抛出的未捕捉异常将会被忽略，对象的终结将终止。\n未捕捉异常会使其他对象处于损坏状态。如果另一个线程尝试使用这样的损坏对象，可能会导致任意的未确定行为。\n正常地，未捕捉异常会终止线程并打印出堆栈信息，但是出现在finalizer里异常并不会。它甚至不打印一个警告。\ncleaners不会有这个问题，因为使用cleaner的库可以控制它的线程。")]),a._v(" "),n("p",[a._v("使用finalizers和cleaners有严重的性能问题。在我的机器上，创建一个简单的"),n("code",[a._v("AutoCloseable")]),a._v("对象的时间，使用\n"),n("code",[a._v("try-with-resources")]),a._v("关闭且使垃圾收集器回收它大约12ns。如果使用finalizer则时间增加到550ns。换句话说，\n创建对象并用finalizers销毁对象大约要慢50倍。这主要是finalizers阻碍了有效的垃圾回收。如果使用cleaners清理\n类的所有实例（在我的机器上每个实例大约500ns），那么Cleaners和finalizers的速度是相当的，但是如果cleaners用于\n下面将讨论的安全网，那么cleaners将快得多。在这些场景下，创建，清理和销毁对象在我的机器上花费66ns。这意味着如果\n不使用安全网你将付出五分之一（而不是五十分之一）的安全网保险费。")]),a._v(" "),n("p",[a._v("finalizers有一个严重的安全问题：他们将类暴露给了finalizer攻击。finalizer攻击背后的思想是简单的：如果异常从\n构造函数中或等价的序列化方法——readObject和readResolve中扔出，恶意子类的终结器可以在本该“死在藤蔓上”的部分构造对象\n上运行。finalizer可以用一个静态字段记录对象的引用，阻止它被垃圾回收。记录了异常的对象后，只需要简单地在本不该存在的\n对象上调用任意的方法。构造函数中扔出异常本该足够阻止对象的存在；在finalizers存在的情况下，却不是这样。这样的攻击可带来\n可怕的后果。不可变类对finalizer攻击是免疫的因为不能编写不可变类的子类。要保护非不可变类免受finalizer攻击，写一个不可变的\n空的finalizer方法。")]),a._v(" "),n("p",[a._v("那么假设你的类对象封装了需要释放的资源，比如文件或线程，如果不使用finalizer或者cleaner那么应该做什么呢？仅仅需要让你的\n类实现AutoCloseable，且要求客户代码在每次不再需要实例的时候调用close方法。通常使用"),n("code",[a._v("try-with-resources")]),a._v("来确保资源的关闭（条例9）\n，即便遇到异常。值得一提的细节是实例必须追踪它是否被关闭：close方法必须将对象是否有效记录在一个字段里，其他的方法必须\n检查这个字段，如果方法在对象关闭后被调用则扔出"),n("code",[a._v("IllegalStateException")]),a._v("异常。")]),a._v(" "),n("p",[a._v("那么，cleaners和finalizers有什么用呢（如果有的话）。它们可能有2个合法用途。一种是作为安全网，以防资源拥有者忽略\n调用它的close方法。尽管不能保证cleaner或finalizer会及时运行（甚至不会运行），如果客户代码没有去释放资源，那么\n稍后释放资源也总比不释放资源要好。如果你打算编写这样的安全网finalizer，全力思考下是否这个保护值得付出代价。一些\nJava类库类，比如"),n("code",[a._v("FileInputStream")]),a._v("，"),n("code",[a._v("FileOutputSteam")]),a._v("，"),n("code",[a._v("ThreadPoolExecutor")]),a._v("和"),n("code",[a._v("java.sql.Connection")]),a._v("使用了\nfinalizers作为安全防护网。")]),a._v(" "),n("p",[a._v("cleaners第二个合法使用关系到与本地对象对等的对象。本地对等是本地非Java对象，普通对象通过本地方法代理到本地对象。\n因为本地对等对象不是普通的对象，当对等的java对象被回收时由于垃圾收集器不知道本地对等对象，因此不能回收本地对等\n对象。假定性能可接受且本地对等对象不占用关键资源，那么cleaner或finalizer可能适合做这个回收任务。如果性能不能\n接受或本地对象对象占用了必须及时回收的资源，类应该包含close方法，如早先描述。")]),a._v(" "),n("p",[a._v("cleaners使用起来有些棘手。下面是演示了这个设施的简单的Room类。让我们假定在回收前rooms必须被清理。Room类实现了\nAutoCloseable。它的自动清理安全网使用cleaner实际上仅仅是实现上的细节。和finalizers不同，cleaners不过污染类的\n公共API：")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//自动关闭类 使用cleaner作为安全网")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Room")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AutoCloseable")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cleaner")]),a._v(" cleaner "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cleaner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//需要清理的资源，禁止引用Room")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("State")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" numJunkPiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 房间里的junk piles数量")]),a._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("State")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" numJunkPiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("numJunkPiles "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" numJunkPiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Cleaning room"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            numJunkPiles "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//room的状态，与cleanable共享")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("State")]),a._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 我们的cleanable。当准备垃圾回收时清理room")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cleaner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cleanable")]),a._v(" cleanable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Room")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" numJunkPiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        state "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("State")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("numJunkPiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        cleanable "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cleaner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        cleanable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("clean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("静态嵌套的State类持有cleaner需要的清理房间的资源。这种情况下，仅仅是numJunkPiles字段，代表了房间的混乱程度。更实际地，\n它可能是包含指向本地对等对象的不可修改的long型指针。State实现了Runnable，它的run方法最多被Cleanable调用一次。\nCleanable是在Room构造函数里用cleaner注册State实例得到的。run方法的调用会被两者之一触发：通常由调用Room的close方法\n进而调用Cleanable的clean方法触发。如果在Room实例可以被垃圾回收时没有调用close方法，cleaner将（希望如此）调用State的run方法。")]),a._v(" "),n("p",[a._v("State实例不引用Room实例很关键。如果它引用了，它会创建循环引用阻止了Room实例被垃圾回收（也阻止被自动清理）。所以\nState必须是一个静态嵌套类因为非静态嵌套类包含他们对外部封装类实例的引用。（条例24）同样不建议使用lambda表达式，因为\n它们可以轻松地捕获封装对象的引用。")]),a._v(" "),n("p",[a._v("正如先前所说，Room的cleaner只用作安全网。如果客户端代码将所有Room实例包含在"),n("code",[a._v("try-with-resource")]),a._v("块中，那么绝无自动清理的\n必要。如下表现得体的客户端代码演示了这种行为。")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Adult")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Room")]),a._v(" myRoom "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Room")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Goodbye"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("正如预期的，运行Adult程序打印出了Goodbye，紧接着打印Cleaning room。那么下面这表现不佳的程序又会咋样呢？")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Teenager")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Room")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("99")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Peace out"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("你可能期望它打印出Peace out，紧接着打印Cleaning room，但在我的机器上，它从未打印出Cleaning room；程序仅仅退出了。\n这是我们之前谈到的不可预测性。关于Cleaner，Java规范表示，在"),n("code",[a._v("System.exit")]),a._v("期间cleaners的行为是特定于实现的。关于cleaning的行为\n是否被调用没有任何保证。正常程序退出时cleaners的行为也是如此，即便规范没有明确提到。在我的机器上，添加一行"),n("code",[a._v("System.gc")]),a._v("到\nTeenager类的main方法足以能在程序退出前打印出Cleaning room，但是不能保证在你的机器上也能看到相同的行为。")]),a._v(" "),n("p",[a._v("总结，不要在Java 9之前的版本中使用finalizers或cleaners，除了作为安全网或者处于终止非关键性本地资源的目的。即便如此，\n也要注意不确定性和性能损失。")])])}),[],!1,null,null,null);s.default=e.exports}}]);