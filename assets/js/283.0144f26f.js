(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{773:function(n,a,s){"use strict";s.r(a);var e=s(6),t=Object(e.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"day17"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day17"}},[n._v("#")]),n._v(" day17")]),n._v(" "),s("p",[n._v("对象之间的关系:\n1.关联:强调的是平等\n2.聚合:强调的是整体和局部的关系,但是整体不负责局部的生命周期\n3.组合:强用的也是整体和局部的关系,但是征途负责局部的生命周期")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("    关系由强到弱    组合>聚合>关联\n\n    特点:1.方向性\n            2.多重性:\n                  1:1:比如一个丈夫(husband)对应一个妻子(wife)\n                  1:N:比如一个客户(Customer)对应多个订单(Order)\n                        public class Customer{\n                              .....\n                              private List<Order> orders;\n                        }\n")])])]),s("p",[n._v("纵向关系:[父子类   A IS B]\n继承  extends\n实现  implements\n横向关系:\n1.关联:强调的是平等,一个类中拥有另一个类的实例作为属性\n比如:主机(Host)和显示器(Display)")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("                public class Host{\n                      ....\n                      private Display display;\n                }\n\n                public class Display{\n                      .....\n                      ....\n                }\n      2.聚合:强调的是整体和局部的关系,但是整体不负责局部的生命周期\n                 代码形式和关联是一样的,只能从语义上进行区分\n                  \n                  比如:主机和CPU\n\n                  public class Cpu{\n                        ...\n                  }\n                  public class Host{\n                        ......\n                        private Cpu cpu;\n                        public Host(Cpu cpu){\n                              this.cpu = cpu;//聚合\n                        }\n                  }\n          \n         3.组合:强调的是整体和局部的关系,但是整体负责局部的生命周期\n                    比如:人和胳膊\n\n                    public class Hand{\n                              ...\n                    }\n\n                    public class Person{\n                          private Hand hand;\n\n                          public Person(){\n                                this.hand = new Hand();//组合    \n                          } \n                    }\n         4.依赖:一个类中使用了另一个类\n              比如:\n                  public class A{\n                          ...\n                  }\n\n                  public class B{\n                          public void method(A a){//依赖\n                                a.method();\n                          }\n                  }\n         注意:一般工厂类依赖于父子类\n")])])]),s("hr"),n._v(" "),s("h2",{attrs:{id:"uml-unified-model-language-统一建模语言每种关系对应的ooad的标准图形是-继承-实线-空心三角形实现-虚线-空心三角形关联-实线-箭头依赖-虚线-箭头组合-实线-实心菱形聚合-实线-空心菱形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uml-unified-model-language-统一建模语言每种关系对应的ooad的标准图形是-继承-实线-空心三角形实现-虚线-空心三角形关联-实线-箭头依赖-虚线-箭头组合-实线-实心菱形聚合-实线-空心菱形"}},[n._v("#")]),n._v(" UML:Unified Model Language  统一建模语言\n每种关系对应的OOAD的标准图形是:\n继承:实线+空心三角形\n实现:虚线+空心三角形\n关联:实线+箭头\n依赖:虚线+箭头\n组合:实线+实心菱形\n聚合:实线+空心菱形")])])}),[],!1,null,null,null);a.default=t.exports}}]);