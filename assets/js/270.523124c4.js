(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{759:function(n,t,r){"use strict";r.r(t);var a=r(6),e=Object(a.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"day4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day4"}},[this._v("#")]),this._v(" day4")]),this._v(" "),t("p",[this._v("提纲1,递归2,Java中处理日期类和日历类3,数组4,方法传递,值传递,引用传递\n知识点1递归\n就是用来处理一组有规律的且大量重复运算的业务\n1.步骤\n1.必须要指明递归的出口\n如果你的递归没有出口,将会抛出java.lang.StackOverflowException堆栈溢出\n2.方法体中自个调用自个\n递归优点:可以用很少的代码来解决大量重复的运算\n递归缺点:每次运算之后都会保存中间值,效率极其低下")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("递归的应用:阶乘   杨辉三角  斐波那契数  最大公约数  最小公倍数\n知识点2:\nJava里面提供了日期类\njava.util.Date  此类中有很多方法已经过时,但是以前的老项目中有很多已经使用过了过时的方法,一旦\n                      现在取消那些过时方法的话,将会导致编译不通过!\n\n//1.创建一个Date对象\nDate d = new Date();\nSystem.out.println(d);//输出就是当前系统的时间\n\n//2.通过当前系统时间的毫秒数来构建\nlong l = System.currentTimeMillis();\nDate d = new Date(l);//输出的当前系统的时间\n\n//3.可以根据我们指定的年月日来构建一个Date对象\nDate d = new Date(int year-1900,int month-1,int date);\n\n//获取信息\ngetXXX();\n//设置信息\nsetXXX();\n                                                                     new Date(l)\n                 System.currentTimeMillis()            d.setTime(l)             cal.setTime(d)\n                                                                      d.getTime()                 cal.getTime()\n知识点3:Java中提供的日历类\n              java.util.Calendar\n知识点4:\n       Java中提供了格式化日前的方式\n       java.text.SimpleDateFormat\n\n//创建一个简单日期格式化对象\nSimpleDateFormat sdf = new SimpleDateFormat(String pattern);\n//将日期对象以字符串的方式表示出来\nString sdate = sdf.format(d); //将日期转换成String类型\n\n例如:把日期按照如下方式来显示:    XXXX-XX-XX hh:mi:ss\n注意点:加入你传入的是非法模板,将会抛出IllegalArgumentException   非法参数异常\n\n//sdf.parse(String s)\n//将字符串解析成日期\n\nDate d = sdf.parse(String pattern);\n此方法需要程序员手动去抓这个异常,它是非运行时异常\n\n注意点:sdf.parse(String pattern)中的模板要跟new SimpleDateFormat(String pattern) 中的pattern要高度保持一致\n            否则会抛出java.lang.parseException  解析异常\n知识5:数组(Array)\n       1.定义:\n        数组:由一组具有相同数据类型并且共享对象名的元素组成,它是一块连续的区域\n                \n                作用:是一个容器,可以用来盛放一组相同数据类型的字面量或者变量\n                        是用来维护和管理一组相同数据类型的数据\n\n        数组元素类型[]  数组变量名 = new 数组元素类型[数组长度] \n       \n       1.创建一个长度为10的整数型数组\n              int[] arr = new int[10];\n      或者 int arr[] = new int[10];  \n      2.创建一个长度为10的元素是自定义对象类型的数组\n              Computer[] c = new Computer[10]\n       \n       或者:先声明1个数组\n             int[] arr;\n             在使用之前,给此数组分配长度\n             arr = new int[10]\n     \n      注意:a.数组的类型是对象类型,里面的元素可以是任意类型\n                上面的arr的类型是int[],它里面元素类型是int\n              b.数组的长度必须要有,并且一旦确定了,将不能够改变\n              c.因为数组是连续的空间区域,并且里面的元素共享变量名,\n                因此我们可以通过数组的下标进行获取数组里面的每个元素\n                下标的范围是[0,arr.length)\n                例如:int[] arr = new int[10];\n                获取第一个元素:arr[0];\n                获取第10个元素:arr[9];\n                如果说你的下标越界了  比如访问arr[10]\n                抛出java.lang.ArraysIndexOutOfBoundsException数组下标越界异常\n              d.数组的元素类型决定了里面盛放的字面量或者变量的数据类型\n              e.如果没有给数组赋值,那么系统会给它里面的元素默认值\n                 整数类型:0\n                 小数:0.0\n                 布尔类型:false\n                 对象类型:null\n\n定义数组: 1.数组类型\n                2.数组长度\n\n       2.赋值\n                a.通过下标一一赋值:arr[0]=1  arr[1]=2;\n                b.通过循环来赋值\n                c.可以通过Arrays.fill(变量名,值);//java.util.Arrays  数组工具类\n                d. int[] arr = {1,2,3};\n                    int[] arr = new int[]{1,2,3};\n                    //上面两种写法是等价的,但是注意第二种new int[]不要出现长度\n       3.遍历\n                  1.System.out.println(arr[0]);通过下标一一打印\n                  2.普通for循环\n                              for(int i=0;i<arr.length;i++){\n                                    System.out.println(arr[i]);\n                              }\n                         注意:是有序遍历\n                   3.增强for循环(JDK 5.0)\n                          for(元素类型 变量名:数组名){\n                                  System.out.println(变量名);\n                          }\n                          注意:无序遍历,是只读\n                    4.通过数组工具类Arrays.toString(arr)\n                          输出形式是:[1,2,2,3];\n                    5.自定义方法输出\n\n       4.数组工具类java.util.Array的使用\n       数组的拷贝:\n                       Arrays.copyOf(arr,新数组的长度);\n     System.arraycopy(Object src, int srcPos, Object dest, int destPos, int length) \n                      src - 源数组。\n                      srcPos - 源数组中的起始位置。\n                      dest - 目标数组。\n                      destPos - 目标数据中的起始位置。\n                      length - 要复制的数组元素的数量。\n知识点6:二维数组\n            定义:存放一维数组的数组,里面的元素是一维数组\n\n            语法:数组元素类型[][] arr = new int[rows][clos] ;\n\n            定义一个三行三列的整数型二维数组\n            int[][] arr = new int[3][3];\n      或者:int arr[][] = new int[3][3];\n        \n        arr[0][0] = 1;//一个一个进行赋值\n\n        赋值方式:\n        arr[0] = {1,2,3}//error\n        arr[0] = new int[]{1,2,3};//一行一行进行赋值\n        //在声明的时候进行赋值\n        int[][] arr = new int[][]{{1,2,3},{2,3,4}}\n        或者 int[][] arr = {{1,2,3},{2,3,3}{2,2,2}};//推荐使用\n\n        二维数组的列是可以省略的\n\n定义了一个3行,但是列不确定的,,,,不规则的二维数组\n        int[][] arr = new int[3][];\n        arr[0] = new int[]{1,2,3};\n        arr[1] = new int[]{2};\n        arr[3] = new int[]{1,2}\n        arr[4] = {2,3,4};//error\n//案例:运用二维数组的知识,将杨辉三角打印一遍\n知识点7:方法的传参\n      形参:定义在方法内部的      public void add(int i,int j){}\n            这里面的i和j就是形参,没有真正的值\n      实参:就是方法的调用者,向方法的参数列表中传入的参数\n              具有实际真正的值\n\n传参方式:\n            1.值传递    针对于基本类型\n                    将值赋值一份给变量,变量里面保存的是实实在在的值\n            2.引用传递     针对于引用类型\n                    将对象的引用赋值一份给变量,变量里面保存的是指向堆空间中对象的内存地址\n                    注意:String类型比较特殊,虽然采用的是引用传递,但是仍然具有值传递的特性!\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);