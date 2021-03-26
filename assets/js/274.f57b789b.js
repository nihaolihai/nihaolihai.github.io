(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{763:function(a,n,t){"use strict";t.r(n);var i=t(6),s=Object(i.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"day8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day8"}},[a._v("#")]),a._v(" day8")]),a._v(" "),t("h2",{attrs:{id:"面向对象的高级特性-抽象类和接口提纲-1-掌握抽象类的定义2-掌握抽象类的使用3-掌握抽象类的应用之模板设计模式-template-pattern-4-掌握接口的定义5-掌握接口的使用6-了解接口应用之回调函数-callback-7-掌握抽象类和接口的异同8-了解软件设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的高级特性-抽象类和接口提纲-1-掌握抽象类的定义2-掌握抽象类的使用3-掌握抽象类的应用之模板设计模式-template-pattern-4-掌握接口的定义5-掌握接口的使用6-了解接口应用之回调函数-callback-7-掌握抽象类和接口的异同8-了解软件设计原则"}},[a._v("#")]),a._v(" 面向对象的高级特性:抽象类和接口\n提纲:1.掌握抽象类的定义\n2.掌握抽象类的使用\n3.掌握抽象类的应用之模板设计模式(Template Pattern)\n4.掌握接口的定义\n5.掌握接口的使用\n6.了解接口应用之回调函数(Callback)\n7.掌握抽象类和接口的异同\n8.了解软件设计原则")]),a._v(" "),t("p",[a._v("知识点1.抽象类的定义\n关键字  abstract(抽象)  也是属于修饰符")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("          访问修饰符:private [] protected public \n          特殊修饰符:static final abstract\n")])])]),t("p",[a._v('如何定义一个抽象类:\npublic abstract class 类名{\n//业务方法\n//抽象方法--没有实现的方法---在方法前面加上abstract关键字\npublic abstract double area();\npublic abstract double girth();\n}\n注意:抽象方法是没有实现的,因此,抽象类"天生"就是用来被子类继承的,\n抽象方法"天生"就是用来被子类重写的!')]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("            抽象类的特点:\n                      1.抽象类不能够被实例化\n                      2.抽象类可以有构造方法\n                      3.一个子类如果继承了抽象父类,那么它必须要实现\n                         抽象父类中所有的抽象方法,除非这个子类也是抽象类\n                      4.抽象类中可以没有抽象方法,如果一个类中有抽象方法\n                        那么它必然是抽象类\n")])])]),t("h2",{attrs:{id:"注意点-修饰符使用的注意点-1-修饰符之间是没有顺序的2-哪些修饰符是不能混用的1-final和abstract不能够同时出现final修饰的类是不能够被继承的-而abstract修饰的类是抽象类-天生就是用来被子类继承的2-static和abstract不能够同时出现static是没有多态的-而abstract就是为多态用的3-private和默认修饰符-父子类不同包-与abstract是不能混用的这两个修饰符修饰的方法-子类是访问不到的-子类也就不能够重写父类中的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意点-修饰符使用的注意点-1-修饰符之间是没有顺序的2-哪些修饰符是不能混用的1-final和abstract不能够同时出现final修饰的类是不能够被继承的-而abstract修饰的类是抽象类-天生就是用来被子类继承的2-static和abstract不能够同时出现static是没有多态的-而abstract就是为多态用的3-private和默认修饰符-父子类不同包-与abstract是不能混用的这两个修饰符修饰的方法-子类是访问不到的-子类也就不能够重写父类中的方法"}},[a._v("#")]),a._v(" 注意点:   修饰符使用的注意点:\n1.修饰符之间是没有顺序的\n2.哪些修饰符是不能混用的\n1.final和abstract不能够同时出现\nfinal修饰的类是不能够被继承的,而abstract修饰的类是抽象类,天生就是用来被子类继承的\n2.static和abstract不能够同时出现\nstatic是没有多态的,而abstract就是为多态用的\n3.private和默认修饰符(父子类不同包)与abstract是不能混用的\n这两个修饰符修饰的方法,子类是访问不到的,子类也就不能够重写父类中的方法")]),a._v(" "),t("p",[a._v('抽象类应用之模板设计模式(Template Pattern)\n问题域:在系统中,有一个相对固定的业务流程,而让具体实现的细节延迟到子类\n应用场景:有一个"顶级业务流程方法",而不必关心具体的实现\n解决方案:\n1.定义一个抽象类,然后在抽象类中定义若干个抽象方法\n2.定义一个执行"顶级业务流程"的方法,按照顺序调用上面定义好的\n若干个抽象方法!')]),a._v(" "),t("p",[a._v("场景案例:电视剧\n//抽象父类\npublic abstract class 电视剧流程{\n//1.定义若干个流程的抽象方法\npublic abstract void 开场音乐();\npublic abstract void 上演剧情();\npublic abstract void 广告();\npublic abstract void 结束();")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('                        //2.定义一个执行"顶级业务流程"的方法\n                        public final void toMethod(){\n                                  开场音乐();\n                                  上演剧情();\n                                  广告();\n                                  结束();\n                        }\n              }\n           //西游记\n           public class 西游记 extends 电视剧{\n                      //重写抽象父类中的所有抽象方法\n          }\n\n          //测试类\n          电视剧  d = new 西游记();\n          d.toMethod();\n')])])]),t("hr"),a._v(" "),t("p",[a._v("知识点2:接口 关键字:interface")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("      定义一个接口:\n                  public interface 接口名{\n                        //属性--接口中的属性都是公开的静态的常量  public static final  int I = 9;\n                               //--可以简写成\n                                   int I = 9;\n                        //方法---接口中的方法都是公开的抽象的方法\n                            //public abstract void area();\n                            //---可以简写成\n                             void area();\n                  }\n")])])]),t("h2",{attrs:{id:"接口也是类-编译之后也是个-class文件接口的命名规范-iconstants-ifly或者-runable-flyable最好是以i开头或者able结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口也是类-编译之后也是个-class文件接口的命名规范-iconstants-ifly或者-runable-flyable最好是以i开头或者able结尾"}},[a._v("#")]),a._v(" 接口也是类,编译之后也是个.class文件\n接口的命名规范:     IConstants IFly"),t("br"),a._v("\n或者  Runable   Flyable\n最好是以I开头或者able结尾")]),a._v(" "),t("h2",{attrs:{id:"接口的注意点-1-接口同样也不能够被实例化2-接口中没有构造方法3-接口中的属性-必须是公开的静态的常量public-static-final-int-row-1-可以简写成int-row-1注意-一般这种常量会移植到常量接口中-jdk5-0以后又出现了枚举-代替了常量接口4-接口中的方法-必须是公开的抽象方法public-abstract-void-area-可以简写成-void-area-5-接口支持是多重继承的-也就是一个接口是可以继承多个接口的-多个接口之间用逗号隔开6-一个类可以实现多个接口-多个接口之间也是用逗号隔开的-并且实现类要实现接口中的所有方法除非它自己是抽象类-注意点-接口与接口之间是继承关系-接口1-extends-接口2-接口3类与接口之间是实现关系-类-implements-接口1-接口2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口的注意点-1-接口同样也不能够被实例化2-接口中没有构造方法3-接口中的属性-必须是公开的静态的常量public-static-final-int-row-1-可以简写成int-row-1注意-一般这种常量会移植到常量接口中-jdk5-0以后又出现了枚举-代替了常量接口4-接口中的方法-必须是公开的抽象方法public-abstract-void-area-可以简写成-void-area-5-接口支持是多重继承的-也就是一个接口是可以继承多个接口的-多个接口之间用逗号隔开6-一个类可以实现多个接口-多个接口之间也是用逗号隔开的-并且实现类要实现接口中的所有方法除非它自己是抽象类-注意点-接口与接口之间是继承关系-接口1-extends-接口2-接口3类与接口之间是实现关系-类-implements-接口1-接口2"}},[a._v("#")]),a._v(" 接口的注意点:1.接口同样也不能够被实例化\n2.接口中没有构造方法\n3.接口中的属性,必须是公开的静态的常量\npublic static final int ROW =1;\n可以简写成\nint ROW = 1\n注意:一般这种常量会移植到常量接口中,JDK5.0以后又出现了枚举   代替了常量接口\n4.接口中的方法,必须是公开的抽象方法\npublic abstract void area();\n可以简写成:\nvoid area();\n5.接口支持是多重继承的,也就是一个接口是可以继承\n多个接口的,多个接口之间用逗号隔开\n6.一个类可以实现多个接口,多个接口之间也是用逗号隔开的,\n并且实现类要实现接口中的所有方法\n除非它自己是抽象类.\n注意点:接口与接口之间是继承关系   接口1 extends 接口2,接口3\n类与接口之间是实现关系      类 implements 接口1,接口2")]),a._v(" "),t("p",[a._v("public interface IA{\nvoid a();\n}")]),a._v(" "),t("p",[a._v("public interface IB{\nvoid b();\n}")]),a._v(" "),t("h2",{attrs:{id:"public-interface-ic-extends-ia-ib-void-c-public-class-icimpl-implements-ic-一个类实现了某接口-必须要实现里面的所有方法-包括这个接口从父类继承过来的方法void-c-void-a-void-b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-interface-ic-extends-ia-ib-void-c-public-class-icimpl-implements-ic-一个类实现了某接口-必须要实现里面的所有方法-包括这个接口从父类继承过来的方法void-c-void-a-void-b"}},[a._v("#")]),a._v(" public interface IC extends IA,IB{\nvoid c();\n}\npublic class ICimpl  implements IC{\n//一个类实现了某接口,必须要实现里面的所有方法,包括这个接口从父类继承过来的方法\nvoid c();\nvoid a();\nvoid b();\n}")]),a._v(" "),t("h2",{attrs:{id:"面向接口编程-1-方法的编译时类型写成接口2-方法的返回类型写成接口3-方法的参数类型写成接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向接口编程-1-方法的编译时类型写成接口2-方法的返回类型写成接口3-方法的参数类型写成接口"}},[a._v("#")]),a._v(" 面向接口编程:\n1.方法的编译时类型写成接口\n2.方法的返回类型写成接口\n3.方法的参数类型写成接口")]),a._v(" "),t("p",[a._v("接口的分类:\n1.常量接口   接口中只有常量\n用来管理系统中所有的常量\npublic interface IConstants{\nint CAR=0;//public static final int CAR=0;\nint PLANE = 1;\n}\n注意:在JDK5.0以后,一般使用枚举来替代常量接口的使用\n枚举是类型安全的常量\n2.标记接口     什么都没有   既没有属性,也没有方法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("         java.io.Serializable  序列化接口  就是一个标记接口\n         在以后写实体类,都要求实体类实现该接口,JVM会根据类型来判断此\n         对象是否符合可序列化的要求!\n")])])]),t("hr"),a._v(" "),t("p",[a._v("案例分析:打招呼   人打招呼  动物打招呼\n步骤1.指定一个业务接口\nISayHello             sayHello(){}")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("      步骤2:person   animal 两个实现类实现该接口\n      步骤3:测试\n")])])]),t("hr"),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("     复杂版:\n      步骤1.指定一个业务接口\n                ISayHello             sayHello(){}     \n      步骤2:制定常量接口  int COM  = 0     int  SIM =1\n      步骤3:制定标记接口  IsAnimal\n      步骤4:得抽象出一个父类出来(SayHello)     没有方法\n      步骤5:去写两个子类(SimSayHello  ComSayHello)(充当的是实现类)-----最核心\n      步骤6:制定 工厂(SayHelloFactory)\n      步骤7:业务方法(SayHelloBiz)\n      步骤8:测试(TestSayHello)\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"总结-抽象和接口的异同1-相同点-a-都是属于抽象类型b-都不能够被实例化2-不同点-a-抽象类中可以有构造方法-接口中没有b-抽象类中可以有实现了的方法-而接口中只能是公开的抽象的方法c-抽象类只支持单继承-接口支持多继承d-一个类只能同时继承一个抽象类-但是可以实现多个接口-接口之间用逗号隔开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-抽象和接口的异同1-相同点-a-都是属于抽象类型b-都不能够被实例化2-不同点-a-抽象类中可以有构造方法-接口中没有b-抽象类中可以有实现了的方法-而接口中只能是公开的抽象的方法c-抽象类只支持单继承-接口支持多继承d-一个类只能同时继承一个抽象类-但是可以实现多个接口-接口之间用逗号隔开"}},[a._v("#")]),a._v(" 总结:抽象和接口的异同\n1.相同点:\na.都是属于抽象类型\nb.都不能够被实例化\n2.不同点:\na.抽象类中可以有构造方法,接口中没有\nb.抽象类中可以有实现了的方法,而接口中只能是公开的抽象的方法\nc.抽象类只支持单继承,接口支持多继承\nd.一个类只能同时继承一个抽象类,但是可以实现多个接口,接口之间用逗号隔开")]),a._v(" "),t("h2",{attrs:{id:"软件设计原则-1-高内聚-模块-对象之间能够独立完成业务的能力模块-对象独立完成业务的能力越强-说明软件的设计越好说明内聚越强2-低耦合模块-对象之间的依赖程度依赖程度越低说明软件的设计越强"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件设计原则-1-高内聚-模块-对象之间能够独立完成业务的能力模块-对象独立完成业务的能力越强-说明软件的设计越好说明内聚越强2-低耦合模块-对象之间的依赖程度依赖程度越低说明软件的设计越强"}},[a._v("#")]),a._v(" 软件设计原则:\n1.高内聚:\n模块/对象之间能够独立完成业务的能力\n模块/对象独立完成业务的能力越强,说明软件的设计越好\n说明内聚越强\n2.低耦合\n模块/对象之间的依赖程度\n依赖程度越低说明软件的设计越强!")]),a._v(" "),t("p",[a._v("回调函数:\n所谓回调,就是客户端C去调用服务端S中的一个函数B\n,此时S又反过来去调用C里面的函数B,我们称B\n就是回调函数!")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('      C不会去调用自己的函数B,C中的函数B天生就是给S来调用的\n\n        public class Caller{\n                //1.提供一个预留接口\n                private IC ic;\n                //2.注册接口\n                public void set(IC ic){\n                  this.ic = ic;\n                }\n\n                //3.方法\n                public void watch(){\n                      System.out.println("打开电视");\n                      this.ic.watch();\n                       System.out.println("坐沙发");\n                        System.out.println("吃薯片");\n                }\n          \n        }\n          \n\n          public interface IC{\n                void watch();\n          }\n\n          public class ICone implements IC{\n                  //重写watch()\n          }\n          public class ICtwo implements IC{\n              //重写watch()方法\n          }\n  //测试\n        Caller c = new Caller();\n        c.set(new ICone());\n        c.watch();\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);