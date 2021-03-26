(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{768:function(n,t,e){"use strict";e.r(t);var s=e(6),i=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"day12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day12"}},[this._v("#")]),this._v(" day12")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('提纲\n     1.属性文件\n        2.集合的一些细节操作\n        3.泛型\n        4.枚举 \n<知识点1:\n        java.util.Properties\n        它也是Map的一个实现类,继承于HashTable\n        在Java中有一个类的形式是文本文件,也就是属性文件.properties\n        里面也是以键值对KEY-VALUE的形式来存储数据的,\n        只不过跟Map的区别在于,它里面的KEY-VALUE只能是String类型的\n\n\n        注意:#内容  注释   注释的内容不属于属性文件  \n\n常用方法:\n        构造方法:\n              public Properties();\n\n              get(Object key);//通过键获取值\n\n              load(InputStream in);//加载属性文件\n        \n        总结:JVM成功加载属性文件步骤\n                第一步:确定属性文件的路径\n                             private static final String PATH="com/tz/day12/Message.properties";\n                第二步:读取属性文件\n                            InputStream in = Thread.currentThread()\n                                                      .getContextClassLoader()\n                                                      .getResourceAsStream(PATH);\n                第三步:加载属性文件\n                            prop.load(in);//要强制处理异常\n知识点2:集合的一些细节操作\n            List<Book> list1 = new ArrayList<>();\n            list1.add(b1);\n            list1.add(b2);\n            list1.add(b3);\n            我们可以通过一个集合来构建另一个集合\n            List<Book> list2 = new ArrayList<>(list1);\n            在此处list1和list2是两个不同的集合对象,但是这两个集合当中的元素对象是相同的\n\n            这里就涉及到集合的两种结构修改\n            一种叫做结构性修改,对集合本身进行修改\n                 比如:add  remove  shuffle\n                 list1进行以上等操作,list2不会改变\n            一种叫做非结构性修改,对集合的元素本身进行修改\n            list1.get(0).setBookName("A");\n            此时:\n             list2.get(0).getBookName() ;//A\n知识点3:\n        泛型(Generic):本质:使类型参数化\n        JDK5.0以后,对集合框架中的所有集合的泛型进行了修改,\n        所以我们的JCF是一个类型安全的"容器"\n\n        //JDK5.0之前\n        List list = new ArrayList<>();\n        //没有类型约束,有风险\n        list.add("abc");//OK\n        list.add(1L);//Ok\n        list.add(null);//OK\n        //JDK5.0之后,开始加入泛型概念\n         List<String> list = new ArrayList<String>();\n         容器中就只能添加null和String类型的\n         //JDK7.0以后,<>中不需要指明类型,由编译器自动去匹配\n          List<String> list = new ArrayList<>();\n\n          List<String> strList = new ArrayList<>();//编译时类型是List<String>\n          List<Long> longList = new ArrayList<>();//编译时类型是List<Long>\n\n          注意一点:泛型没有运行时的概念,在运行时它的运行时类型会被"擦除"\n          strList和longList的运行时类型都是java.util.ArrayList;\n          strList.getClass()==longList.getClass()//true;\n\n          正是由于泛型只是编译时期的概念,它不存在多态性\n          Number n = new Integer();\n          List<Number> n = new ArrayList<Integer>();//Error --\x3e\n\n泛型的通配符  ?\n          List<?> list = new ArrayList<>();\n          list.add(null);//OK\n          list.add("Jack");//Error   此时编译器无法确定器类型\n\n          一般是出现在方法的参数当中\n\n          <? extends 类型>  指明上限\n          <? super 类型>     指明下限\n\n          自定义泛型\n\n          public class Entry<K,V>{\n                private K key;\n                private V value;\n\n          }\n\n          add(Student s)     add(Book b)\n\n          add(T obj)\n知识点4:枚举(enum):它是类型安全的常量\n                                所有的枚举都是继承java.lang.Enum\n                                编译之后也是.class文件\n在枚举出现之前,我们要想定义一个类型安全的常量是如何定义的?\n        public class Season{\n                public static final Season SPRING  = new Season();\n                  public static final Season SUMER  = new Season();\n                    public static final Season AUTUMN  = new Season();\n                    \n      \n                    public void create(Season s){\n\n                    }  \n        }\n定义一个枚举:\n        public enum Gender{\n                //枚举值也称为枚举常量\n                //每个枚举常量都是代表当前枚举的一个实例\n                //枚举常量与枚举常量之间用逗号隔开,假如最后一个枚举常量后面没有内容\n                //那么最后一个常量的;可以省略不写\n                  FEMALE("女"),//public static final Gender FEMALE = new Gender("女");\n                  MALE("男");\n             \n             //枚举中可以有普通属性\n              private String sign;\n\n              public void setSign(String sign){\n                    this.sign = sign;\n              }\n              public String getSign(){\n                return this.sign;\n              }\n            \n             //枚举中可以有构造方法,但是必须是私有的\n             private Gender(String sign){\n                    this.sign = sign;\n             }\n             //枚举中可以有普通方法\n             public void method(){}\n\n        }\n        \n        public class Student{\n              private String name;\n              private Gender gender;\n        }\n      Student s = new Student("Jack",Gender.MALE);\n\n      常用方法:values     Gender[]  genders = Gender.values;//获取枚举当中所有的枚举常量\n      ```')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);