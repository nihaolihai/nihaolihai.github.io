(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{640:function(t,n,r){"use strict";r.r(n);var a=r(6),i=Object(a.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"java-iterator-迭代器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-iterator-迭代器"}},[this._v("#")]),this._v(" Java Iterator（迭代器）")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('ava Iterator（迭代器）不是一个集合，它是一种用于访问集合的方法，可用于迭代 ArrayList 和 HashSet 等集合。\n\nIterator 是 Java 迭代器最简单的实现，ListIterator 是 Collection API 中的接口， 它扩展了 Iterator 接口。\n\n![RUNOOB 图标](https://www.runoob.com/wp-content/uploads/2020/07/ListIterator-Class-Diagram.jpg)\n\n迭代器 it 的两个基本操作是 next 、hasNext 和 remove。\n\n调用 it.next() 会返回迭代器的下一个元素，并且更新迭代器的状态。\n\n调用 it.hasNext() 用于检测集合中是否还有元素。\n\n调用 it.remove() 将迭代器返回的元素删除。\n\nIterator 类位于 java.util 包中，使用前需要引入它，语法格式如下：\n\nimport java.util.Iterator; // 引入 Iterator 类\n获取一个迭代器\n集合想获取一个迭代器可以使用 iterator() 方法:\n\n实例\n// 引入 ArrayList 和 Iterator 类\nimport java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class RunoobTest {\n    public static void main(String[] args) {\n\n        // 创建集合\n        ArrayList<String> sites = new ArrayList<String>();\n        sites.add("Google");\n        sites.add("Runoob");\n        sites.add("Taobao");\n        sites.add("Zhihu");\n\n        // 获取迭代器\n        Iterator<String> it = sites.iterator();\n\n        // 输出集合中的第一个元素\n        System.out.println(it.next());\n    }\n}\n执行以上代码，输出结果如下：\n\nGoogle\n循环集合元素\n让迭代器 it 逐个返回集合中所有元素最简单的方法是使用 while 循环：\n\nwhile(it.hasNext()) {\n    System.out.println(it.next());\n}\n以下输出集合 sites 中的所有元素：\n\n实例\n// 引入 ArrayList 和 Iterator 类\nimport java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class RunoobTest {\n    public static void main(String[] args) {\n\n        // 创建集合\n        ArrayList<String> sites = new ArrayList<String>();\n        sites.add("Google");\n        sites.add("Runoob");\n        sites.add("Taobao");\n        sites.add("Zhihu");\n\n        // 获取迭代器\n        Iterator<String> it = sites.iterator();\n\n        // 输出集合中的所有元素\n        while(it.hasNext()) {\n            System.out.println(it.next());\n        }\n    }\n}\n执行以上代码，输出结果如下：\n\nGoogle\nRunoob\nTaobao\nZhihu\n删除元素\n\n要删除集合中的元素可以使用 remove() 方法。\n\n以下实例我们删除集合中小于 10 的元素：\n\n实例\n// 引入 ArrayList 和 Iterator 类\nimport java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class RunoobTest {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<Integer>();\n        numbers.add(12);\n        numbers.add(8);\n        numbers.add(2);\n        numbers.add(23);\n        Iterator<Integer> it = numbers.iterator();\n        while(it.hasNext()) {\n            Integer i = it.next();\n            if(i < 10) {  \n                it.remove();  // 删除小于 10 的元素\n            }\n        }\n        System.out.println(numbers);\n    }\n}\n执行以上代码，输出结果如下：\n\n[12, 23]\n')])])])])}),[],!1,null,null,null);n.default=i.exports}}]);