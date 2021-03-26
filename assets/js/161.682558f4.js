(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{650:function(n,t,e){"use strict";e.r(t);var i=e(6),o=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"java-object-wait-long-timeout-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-object-wait-long-timeout-方法"}},[n._v("#")]),n._v(" Java Object wait(long timeout) 方法")]),n._v(" "),e("p",[n._v("Object wait(long timeout) 方法让当前线程处于等待(阻塞)状态，直到其他线程调用此对象的 notify() 方法或 notifyAll() 方法，或者超过参数 timeout 设置的超时时间。")]),n._v(" "),e("p",[n._v("如果 timeout 参数为 0，则不会超时，会一直进行等待，类似于 wait() 方法。")]),n._v(" "),e("p",[n._v("当前线程必须是此对象的监视器所有者，否则还是会发生 IllegalMonitorStateException 异常。")]),n._v(" "),e("p",[n._v("如果当前线程在等待之前或在等待时被任何线程中断，则会抛出 InterruptedException 异常。")]),n._v(" "),e("p",[n._v("如果传递的参数不合法，则会抛出 IllegalArgumentException 异常。")]),n._v(" "),e("p",[n._v("语法\npublic final void wait(long timeout)\n参数\ntimeout - 等待时间（以毫秒为单位）。")]),n._v(" "),e("p",[n._v("返回值\n没有返回值。")]),n._v(" "),e("p",[n._v("实例\n以下实例演示了 wait(long timeout) 方法的使用：")]),n._v(" "),e("p",[n._v("实例\nimport java.util.Collections;\nimport java.util.LinkedList;\nimport java.util.List;")]),n._v(" "),e("p",[n._v("public class RunoobTest extends Object {")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('private List synchedList;\n\npublic RunoobTest() {\n    // 创建一个同步列表\n    synchedList = Collections.synchronizedList(new LinkedList());\n}\n\n// 删除列表中的元素\npublic String removeElement() throws InterruptedException {\n    synchronized (synchedList) {\n\n        // 列表为空就等待\n        while (synchedList.isEmpty()) {\n            System.out.println("List is empty...");\n            synchedList.wait(10000); // 设置等待时间\n            System.out.println("Waiting...");\n        }\n        String element = (String) synchedList.remove(0);\n\n        return element;\n    }\n}\n\n// 添加元素到列表\npublic void addElement(String element) {\n    System.out.println("Opening...");\n    synchronized (synchedList) {\n\n        // 添加一个元素，并通知元素已存在\n        synchedList.add(element);\n        System.out.println("New Element:\'" + element + "\'");\n\n        synchedList.notifyAll();\n        System.out.println("notifyAll called!");\n    }\n    System.out.println("Closing...");\n}\n\npublic static void main(String[] args) {\n    final RunoobTest demo = new RunoobTest();\n\n    Runnable runA = new Runnable() {\n\n        public void run() {\n            try {\n                String item = demo.removeElement();\n                System.out.println("" + item);\n            } catch (InterruptedException ix) {\n                System.out.println("Interrupted Exception!");\n            } catch (Exception x) {\n                System.out.println("Exception thrown.");\n            }\n        }\n    };\n\n    Runnable runB = new Runnable() {\n\n        // 执行添加元素操作，并开始循环\n        public void run() {\n            demo.addElement("Hello!");\n        }\n    };\n\n    try {\n        Thread threadA1 = new Thread(runA, "Google");\n        threadA1.start();\n\n        Thread.sleep(500);\n\n        Thread threadA2 = new Thread(runA, "Runoob");\n        threadA2.start();\n\n        Thread.sleep(500);\n\n        Thread threadB = new Thread(runB, "Taobao");\n        threadB.start();\n\n        Thread.sleep(1000);\n\n        threadA1.interrupt();\n        threadA2.interrupt();\n    } catch (InterruptedException x) {\n    }\n}\n')])])]),e("p",[n._v("}\n以上程序执行结果为：")]),n._v(" "),e("p",[n._v("List is empty...\nList is empty...\nOpening...\nNew Element:'Hello!'\nnotifyAll called!\nClosing...\nWaiting...\nWaiting...\nList is empty...\nHello!\nInterrupted Exception!")])])}),[],!1,null,null,null);t.default=o.exports}}]);