(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{761:function(n,t,e){"use strict";e.r(t);var s=e(6),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"day5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#day5"}},[n._v("#")]),n._v(" day5")]),n._v(" "),e("p",[n._v("面向对象:\nOO(Object Oriented):面向对象\nOOAD(Object Oriented Analysis Design):面向对象分析设计\nOOP(Object Oriented Programming):面向对象编程")]),n._v(" "),e("p",[n._v("面向对象是一个思想,不是一门技术")]),n._v(" "),e("h2",{attrs:{id:"c是面向过程-首先考虑的是算法和数据结构面向对象-首先是找出对象-然后对对象进行分析-分析这个对象有哪些属性-哪些方法-其次再对对象进行抽象-并且找出对象与对象之间有什么关系-最后才是算法和数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c是面向过程-首先考虑的是算法和数据结构面向对象-首先是找出对象-然后对对象进行分析-分析这个对象有哪些属性-哪些方法-其次再对对象进行抽象-并且找出对象与对象之间有什么关系-最后才是算法和数据结构"}},[n._v("#")]),n._v(" C是面向过程:首先考虑的是算法和数据结构\n面向对象:首先是找出对象,然后对对象进行分析,分析这个对象有\n哪些属性,哪些方法,其次再对对象进行抽象,并且找出对象与\n对象之间有什么关系,最后才是算法和数据结构!")]),n._v(" "),e("h2",{attrs:{id:"java是纯面向对象的语言-有如下特征-1-封装2-继承3-多态4-接口5-抽象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java是纯面向对象的语言-有如下特征-1-封装2-继承3-多态4-接口5-抽象"}},[n._v("#")]),n._v(" Java是纯面向对象的语言,有如下特征:\n1.封装\n2.继承\n3.多态\n4.接口\n5.抽象....")]),n._v(" "),e("p",[n._v('什么是类?\n类是一种抽象的概念,是对"对象"的抽象\n类就是将一组具有共性的对象进行抽象\n什么是对象?\n对象就是类的实例,也就是类的具体的某个实例\n类的定义:\npackage xxx.xxx.xxx\nimport xxx.xxxx.xxx\npublic class Student{\n//1.属性的定义\n//2.构造方法\n//3.getter   setter方法\n//4.toString方法\n}\n属性的定义:(Member Variable  成员变量)\n[修饰符] 数据类型 变量名 [=初始值]\n修饰符：\n所有类        子类        同包       本身\npublic       公开的           yes              yes         yes          yes'),e("br"),n._v("\nprotected  受保护的       no                yes         yes         yes\n[]              默认的           no               no             yes        yes\nprivate      私有的          no               no            no          yes")]),n._v(" "),e("h2",{attrs:{id:"注意点-一般常量的定义都是public"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意点-一般常量的定义都是public"}},[n._v("#")]),n._v(" 注意点:一般常量的定义都是public")]),n._v(" "),e("p",[n._v("构造方法:\n也叫做构造器,是用来给属性进行赋值的\n构造方法语法:\n无参构造:\n修饰符 类名(){")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("              }\n              public Student(){\n                    \n              }\n\n              有参构造\n              public Student(int sid,String sname){\n                        id = sid;\n                        name = sname;\n              }\n")])])]),e("h2",{attrs:{id:"构造方法-注意点-1-构造方法没有返回类型2-构造方法的名称要和类名一致3-如果一个实体类中没有提供任何构造-那么系统会自动分配一个空参构造4-如果实体类中已经存在了一个有参构造-那么我们必须要提供一个空参构造-前提是用到它的空参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造方法-注意点-1-构造方法没有返回类型2-构造方法的名称要和类名一致3-如果一个实体类中没有提供任何构造-那么系统会自动分配一个空参构造4-如果实体类中已经存在了一个有参构造-那么我们必须要提供一个空参构造-前提是用到它的空参"}},[n._v("#")]),n._v(" 构造方法  注意点:\n1.构造方法没有返回类型\n2.构造方法的名称要和类名一致\n3.如果一个实体类中没有提供任何构造,那么系统会自动分配一个\n空参构造\n4.如果实体类中已经存在了一个有参构造,那么我们必须要提供一个空参构造(前提是用到它的空参)")]),n._v(" "),e("p",[n._v("setter/getter方法    可以通过工具自动生成\n用来设置/获取 属性值")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    getter方法的方法名　　get+属性名的首字母大写\n    setter方法的方法名　　set+属性名的首字母大写\n")])])]),e("p",[n._v("set方法可以用来进行赋值\n可以进行参数有效性判断")]),n._v(" "),e("p",[n._v("如果要使构造方法也能实现参数有效性判断,我们可以在构造方法中调用set方法")]),n._v(" "),e("p",[n._v("它和构造方法的赋值有什么区别呢?\n构造方法的赋值只能进行一次,并且是在创建对象的时候进行的\nset方法可以多次赋值")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("  构造方法的赋值方式比较简单点\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"this关键字两个作用-1-代表当前的对象主要是用来-构造方法和set方法的参数列表中的变量名和实体类中的成员变量名是一样的时候-用this来加以区分2-可以在实体类中的某个构造中调用另一个已经存在的某个构造-注意点-要放在第一行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#this关键字两个作用-1-代表当前的对象主要是用来-构造方法和set方法的参数列表中的变量名和实体类中的成员变量名是一样的时候-用this来加以区分2-可以在实体类中的某个构造中调用另一个已经存在的某个构造-注意点-要放在第一行"}},[n._v("#")]),n._v(" this关键字\n两个作用:1.代表当前的对象\n主要是用来:构造方法和set方法的参数列表中的变量名和实体类中的\n成员变量名是一样的时候,用this来加以区分\n2.可以在实体类中的某个构造中调用另一个已经存在的某个构造.\n注意点:要放在第一行!")]),n._v(" "),e("h2",{attrs:{id:"总结一个-类和对象之间的关系-类是对象的抽象化-对象是类的一个具体的实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结一个-类和对象之间的关系-类是对象的抽象化-对象是类的一个具体的实例"}},[n._v("#")]),n._v(" 总结一个:\n类和对象之间的关系?\n类是对象的抽象化,对象是类的一个具体的实例!!!")]),n._v(" "),e("h2",{attrs:{id:"类-成员变量空参有参getter-settertostring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类-成员变量空参有参getter-settertostring"}},[n._v("#")]),n._v(" 类:\n成员变量\n空参\n有参\ngetter/setter\ntoString();")]),n._v(" "),e("p",[n._v("方法的重载 @overload")]),n._v(" "),e("h2",{attrs:{id:"特征-1-方法名必须一样2-方法的返回类型可能不一样3-方法的参数列表必须不一样a-参数列表的个数不一样b-参数列表的类型不一样c-参数列表的顺序不一样i-数据类型一样-顺序不一样ii-数据类型不一样-顺序不一样4-构造方法允许重载前提-这些方法要出现在同一类当中api中方法的重载可以给编程带来便利"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征-1-方法名必须一样2-方法的返回类型可能不一样3-方法的参数列表必须不一样a-参数列表的个数不一样b-参数列表的类型不一样c-参数列表的顺序不一样i-数据类型一样-顺序不一样ii-数据类型不一样-顺序不一样4-构造方法允许重载前提-这些方法要出现在同一类当中api中方法的重载可以给编程带来便利"}},[n._v("#")]),n._v(" 特征:1.方法名必须一样\n2.方法的返回类型可能不一样\n3.方法的参数列表必须不一样\na.参数列表的个数不一样\nb.参数列表的类型不一样\nc.参数列表的顺序不一样\nI   数据类型一样,顺序不一样\nII  数据类型不一样,顺序不一样\n4.构造方法允许重载\n前提:这些方法要出现在同一类当中\nAPI中方法的重载可以给编程带来便利...")]),n._v(" "),e("p",[n._v("JVM内存结构\n1.栈区     类似弹夹\n大小是固定的  效率高 先进后出 不能动态分配")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("      2.堆区\n            大小是不固定的  效率低 先进先出   能够动态分配\n            \n            一般我们都是用new关键字在堆空间中申请一块区域\n          Scanner sc = new Scanner(System.in);\n          通过new关键字在堆空间当中为Scanner这个对象申请了一块空间\n          同时,sc代表一个引用,将指向这块堆空间的地址赋值给引用sc\n\n      3.代码区\n            字节码文件  代码块  静态常量\n  总结:引用和对象之间的关系?\n         引用保存的是指向堆空间中对象的地址!\n")])])]),e("p",[n._v('面试题:\n1.String s = new String("xyz");\n请问创建了几个对象?\n如果说题目强调串池是空的,那么就创建了2个对象\n分别是new String()   和xyz')]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('      2.String s = "a"+"b"+"c";创建了几个对象   \n         a b c   ab abc  5个对象\n')])])]),e("hr"),n._v(" "),e("p",[n._v("Student s1;//此处只是声明了一个s1变量\ns1 = new Student();//在堆空间中申请了第一个Student对象,并且将该对象的内存地址赋值给s1\nStudent s2 = new Student();//在堆空间中申请了第二个Student对象,并且将该对象的内存地址赋值给s2\ns1  = s2;//将引用s2赋值给s1\n//s1指向的是谁?    s1指向的是第二个Student对象\n//此时第一个Student对象就成了垃圾对象,没有任何引用指向的对象")]),n._v(" "),e("p",[n._v("GC()    垃圾回收机制\n回收的就是没有任何引用指向的对象")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("        JVM启动的时候,开启了2个线程:\n        main:程序主入口\n        gc:守护线程  用来进行垃圾对象的回收\n")])])]),e("p",[n._v("1.什么时候JVM会去处理回收垃圾呢?\n注意:JVM有自己的算法(比如引用计数器,对象遍历等)")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("  程序员也可以通过编码的方式来尽最大可能去提醒JVM来回收垃圾对象\n  也就是说,JVM不一定立即去执行\n  1.System.gc();\n  2.Runtime.getRunTime().gc();//底层仍然调用的是System.gc();\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);