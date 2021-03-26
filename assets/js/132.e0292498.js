(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{619:function(n,a,e){"use strict";e.r(a);var t=e(6),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"java-scanner-类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-scanner-类"}},[n._v("#")]),n._v(" Java Scanner 类")]),n._v(" "),e("p",[n._v("java.util.Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来获取用户的输入。")]),n._v(" "),e("p",[n._v("下面是创建 Scanner 对象的基本语法：")]),n._v(" "),e("p",[n._v("Scanner s = new Scanner(System.in);\n接下来我们演示一个最简单的数据输入，并通过 Scanner 类的 next() 与 nextLine() 方法获取输入的字符串，在读取前我们一般需要 使用 hasNext 与 hasNextLine 判断是否还有输入的数据：")]),n._v(" "),e("p",[n._v("使用 next 方法：\nScannerDemo.java 文件代码：\nimport java.util.Scanner;")]),n._v(" "),e("p",[n._v("public class ScannerDemo {\npublic static void main(String[] args) {\nScanner scan = new Scanner(System.in);\n// 从键盘接收数据")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('    // next方式接收字符串\n    System.out.println("next方式接收：");\n    // 判断是否还有输入\n    if (scan.hasNext()) {\n        String str1 = scan.next();\n        System.out.println("输入的数据为：" + str1);\n    }\n    scan.close();\n}\n')])])]),e("p",[n._v("}\n执行以上程序输出结果为：")]),n._v(" "),e("p",[n._v("$ javac ScannerDemo.java\n$ java ScannerDemo\nnext方式接收：\nrunoob com\n输入的数据为：runoob\n可以看到 com 字符串并未输出，接下来我们看 nextLine。")]),n._v(" "),e("p",[n._v("使用 nextLine 方法：\nScannerDemo.java 文件代码：\nimport java.util.Scanner;")]),n._v(" "),e("p",[n._v("public class ScannerDemo {\npublic static void main(String[] args) {\nScanner scan = new Scanner(System.in);\n// 从键盘接收数据")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('    // nextLine方式接收字符串\n    System.out.println("nextLine方式接收：");\n    // 判断是否还有输入\n    if (scan.hasNextLine()) {\n        String str2 = scan.nextLine();\n        System.out.println("输入的数据为：" + str2);\n    }\n    scan.close();\n}\n')])])]),e("p",[n._v("}\n执行以上程序输出结果为：")]),n._v(" "),e("p",[n._v("$ javac ScannerDemo.java\n$ java ScannerDemo\nnextLine方式接收：\nrunoob com\n输入的数据为：runoob com\n可以看到 com 字符串输出。")]),n._v(" "),e("p",[n._v("next() 与 nextLine() 区别\nnext():")]),n._v(" "),e("p",[n._v("1、一定要读取到有效字符后才可以结束输入。\n2、对输入有效字符之前遇到的空白，next() 方法会自动将其去掉。\n3、只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符。\nnext() 不能得到带有空格的字符串。\nnextLine()：")]),n._v(" "),e("p",[n._v("1、以Enter为结束符,也就是说 nextLine()方法返回的是输入回车之前的所有字符。\n2、可以获得空白。\n如果要输入 int 或 float 类型的数据，在 Scanner 类中也有支持，但是在输入之前最好先使用 hasNextXxx() 方法进行验证，再使用 nextXxx() 来读取：")]),n._v(" "),e("p",[n._v("ScannerDemo.java 文件代码：\nimport java.util.Scanner;")]),n._v(" "),e("p",[n._v('public class ScannerDemo {\npublic static void main(String[] args) {\nScanner scan = new Scanner(System.in);\n// 从键盘接收数据\nint i = 0;\nfloat f = 0.0f;\nSystem.out.print("输入整数：");\nif (scan.hasNextInt()) {\n// 判断输入的是否是整数\ni = scan.nextInt();\n// 接收整数\nSystem.out.println("整数数据：" + i);\n} else {\n// 输入错误的信息\nSystem.out.println("输入的不是整数！");\n}\nSystem.out.print("输入小数：");\nif (scan.hasNextFloat()) {\n// 判断输入的是否是小数\nf = scan.nextFloat();\n// 接收小数\nSystem.out.println("小数数据：" + f);\n} else {\n// 输入错误的信息\nSystem.out.println("输入的不是小数！");\n}\nscan.close();\n}\n}\n执行以上程序输出结果为：')]),n._v(" "),e("p",[n._v("$ javac ScannerDemo.java\n$ java ScannerDemo\n输入整数：12\n整数数据：12\n输入小数：1.2\n小数数据：1.2\n以下实例我们可以输入多个数字，并求其总和与平均数，每输入一个数字用回车确认，通过输入非数字来结束输入并输出执行结果：")]),n._v(" "),e("p",[n._v("ScannerDemo.java 文件代码：\nimport java.util.Scanner;")]),n._v(" "),e("p",[n._v("class ScannerDemo {\npublic static void main(String[] args) {\nScanner scan = new Scanner(System.in);")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('    double sum = 0;\n    int m = 0;\n\n    while (scan.hasNextDouble()) {\n        double x = scan.nextDouble();\n        m = m + 1;\n        sum = sum + x;\n    }\n\n    System.out.println(m + "个数的和为" + sum);\n    System.out.println(m + "个数的平均值是" + (sum / m));\n    scan.close();\n}\n')])])]),e("p",[n._v("}\n执行以上程序输出结果为：")]),n._v(" "),e("p",[n._v("$ javac ScannerDemo.java\n$ java ScannerDemo\n12\n23\n15\n21.4\nend\n4个数的和为71.4\n4个数的平均值是17.85")])])}),[],!1,null,null,null);a.default=s.exports}}]);