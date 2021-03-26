(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{654:function(n,e,a){"use strict";a.r(e);var t=a(6),r=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"java-多线程编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-多线程编程"}},[this._v("#")]),this._v(" Java 多线程编程")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Java 给多线程编程提供了内置的支持。 一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。\n\n多线程是多任务的一种特别的形式，但多线程使用了更小的资源开销。\n\n这里定义和线程相关的另一个术语 - 进程：一个进程包括由操作系统分配的内存空间，包含一个或多个线程。一个线程不能独立的存在，它必须是进程的一部分。一个进程一直运行，直到所有的非守护线程都结束运行后才能结束。\n\n多线程能满足程序员编写高效率的程序来达到充分利用 CPU 的目的。\n\n一个线程的生命周期\n线程是一个动态执行的过程，它也有一个从产生到死亡的过程。\n\n下图显示了一个线程完整的生命周期。\n\n![RUNOOB 图标](https://www.runoob.com/wp-content/uploads/2014/01/java-thread.jpg)\n\n新建状态:\n使用 new 关键字和 Thread 类或其子类建立一个线程对象后，该线程对象就处于新建状态。它保持这个状态直到程序 start() 这个线程。\n\n就绪状态:\n当线程对象调用了start()方法之后，该线程就进入就绪状态。就绪状态的线程处于就绪队列中，要等待JVM里线程调度器的调度。\n\n运行状态:\n如果就绪状态的线程获取 CPU 资源，就可以执行 run()，此时线程便处于运行状态。处于运行状态的线程最为复杂，它可以变为阻塞状态、就绪状态和死亡状态。\n\n阻塞状态:\n如果一个线程执行了sleep（睡眠）、suspend（挂起）等方法，失去所占用资源之后，该线程就从运行状态进入阻塞状态。在睡眠时间已到或获得设备资源后可以重新进入就绪状态。可以分为三种：\n\n等待阻塞：运行状态中的线程执行 wait() 方法，使线程进入到等待阻塞状态。\n\n同步阻塞：线程在获取 synchronized 同步锁失败(因为同步锁被其他线程占用)。\n\n其他阻塞：通过调用线程的 sleep() 或 join() 发出了 I/O 请求时，线程就会进入到阻塞状态。当sleep() 状态超时，join() 等待线程终止或超时，或者 I/O 处理完毕，线程重新转入就绪状态。\n\n死亡状态:\n一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。\n\n线程的优先级\n每一个 Java 线程都有一个优先级，这样有助于操作系统确定线程的调度顺序。\n\nJava 线程的优先级是一个整数，其取值范围是 1 （Thread.MIN_PRIORITY ） - 10 （Thread.MAX_PRIORITY ）。\n\n默认情况下，每一个线程都会分配一个优先级 NORM_PRIORITY（5）。\n\n具有较高优先级的线程对程序更重要，并且应该在低优先级的线程之前分配处理器资源。但是，线程优先级不能保证线程执行的顺序，而且非常依赖于平台。\n\n创建一个线程\nJava 提供了三种创建线程的方法：\n\n通过实现 Runnable 接口；\n通过继承 Thread 类本身；\n通过 Callable 和 Future 创建线程。\n通过实现 Runnable 接口来创建线程\n创建一个线程，最简单的方法是创建一个实现 Runnable 接口的类。\n\n为了实现 Runnable，一个类只需要执行一个方法调用 run()，声明如下：\n\npublic void run()\n你可以重写该方法，重要的是理解的 run() 可以调用其他方法，使用其他类，并声明变量，就像主线程一样。\n\n在创建一个实现 Runnable 接口的类之后，你可以在类中实例化一个线程对象。\n\nThread 定义了几个构造方法，下面的这个是我们经常使用的：\n\nThread(Runnable threadOb,String threadName);\n这里，threadOb 是一个实现 Runnable 接口的类的实例，并且 threadName 指定新线程的名字。\n\n新线程创建之后，你调用它的 start() 方法它才会运行。\n\nvoid start();\n下面是一个创建线程并开始让它执行的实例：\n\n实例\nclass RunnableDemo implements Runnable {\n   private Thread t;\n   private String threadName;\n   \n   RunnableDemo( String name) {\n      threadName = name;\n      System.out.println("Creating " +  threadName );\n   }\n   \n   public void run() {\n      System.out.println("Running " +  threadName );\n      try {\n         for(int i = 4; i > 0; i--) {\n            System.out.println("Thread: " + threadName + ", " + i);\n            // 让线程睡眠一会\n            Thread.sleep(50);\n         }\n      }catch (InterruptedException e) {\n         System.out.println("Thread " +  threadName + " interrupted.");\n      }\n      System.out.println("Thread " +  threadName + " exiting.");\n   }\n   \n   public void start () {\n      System.out.println("Starting " +  threadName );\n      if (t == null) {\n         t = new Thread (this, threadName);\n         t.start ();\n      }\n   }\n}\n \npublic class TestThread {\n \n   public static void main(String args[]) {\n      RunnableDemo R1 = new RunnableDemo( "Thread-1");\n      R1.start();\n      \n      RunnableDemo R2 = new RunnableDemo( "Thread-2");\n      R2.start();\n   }   \n}\n\n编译以上程序运行结果如下：\n\nCreating Thread-1\nStarting Thread-1\nCreating Thread-2\nStarting Thread-2\nRunning Thread-1\nThread: Thread-1, 4\nRunning Thread-2\nThread: Thread-2, 4\nThread: Thread-1, 3\nThread: Thread-2, 3\nThread: Thread-1, 2\nThread: Thread-2, 2\nThread: Thread-1, 1\nThread: Thread-2, 1\nThread Thread-1 exiting.\nThread Thread-2 exiting.\n通过继承Thread来创建线程\n创建一个线程的第二种方法是创建一个新的类，该类继承 Thread 类，然后创建一个该类的实例。\n\n继承类必须重写 run() 方法，该方法是新线程的入口点。它也必须调用 start() 方法才能执行。\n\n该方法尽管被列为一种多线程实现方式，但是本质上也是实现了 Runnable 接口的一个实例。\n\n实例\nclass ThreadDemo extends Thread {\n   private Thread t;\n   private String threadName;\n   \n   ThreadDemo( String name) {\n      threadName = name;\n      System.out.println("Creating " +  threadName );\n   }\n   \n   public void run() {\n      System.out.println("Running " +  threadName );\n      try {\n         for(int i = 4; i > 0; i--) {\n            System.out.println("Thread: " + threadName + ", " + i);\n            // 让线程睡眠一会\n            Thread.sleep(50);\n         }\n      }catch (InterruptedException e) {\n         System.out.println("Thread " +  threadName + " interrupted.");\n      }\n      System.out.println("Thread " +  threadName + " exiting.");\n   }\n   \n   public void start () {\n      System.out.println("Starting " +  threadName );\n      if (t == null) {\n         t = new Thread (this, threadName);\n         t.start ();\n      }\n   }\n}\n \npublic class TestThread {\n \n   public static void main(String args[]) {\n      ThreadDemo T1 = new ThreadDemo( "Thread-1");\n      T1.start();\n      \n      ThreadDemo T2 = new ThreadDemo( "Thread-2");\n      T2.start();\n   }   \n}\n\n编译以上程序运行结果如下：\n\nCreating Thread-1\nStarting Thread-1\nCreating Thread-2\nStarting Thread-2\nRunning Thread-1\nThread: Thread-1, 4\nRunning Thread-2\nThread: Thread-2, 4\nThread: Thread-1, 3\nThread: Thread-2, 3\nThread: Thread-1, 2\nThread: Thread-2, 2\nThread: Thread-1, 1\nThread: Thread-2, 1\nThread Thread-1 exiting.\nThread Thread-2 exiting.\nThread 方法\n下表列出了Thread类的一些重要方法：\n\n序号\t方法描述\n1\tpublic void start()\n使该线程开始执行；Java 虚拟机调用该线程的 run 方法。\n2\tpublic void run()\n如果该线程是使用独立的 Runnable 运行对象构造的，则调用该 Runnable 对象的 run 方法；否则，该方法不执行任何操作并返回。\n3\tpublic final void setName(String name)\n改变线程名称，使之与参数 name 相同。\n4\tpublic final void setPriority(int priority)\n 更改线程的优先级。\n5\tpublic final void setDaemon(boolean on)\n将该线程标记为守护线程或用户线程。\n6\tpublic final void join(long millisec)\n等待该线程终止的时间最长为 millis 毫秒。\n7\tpublic void interrupt()\n中断线程。\n8\tpublic final boolean isAlive()\n测试线程是否处于活动状态。\n测试线程是否处于活动状态。 上述方法是被Thread对象调用的。下面的方法是Thread类的静态方法。\n\n序号\t方法描述\n1\tpublic static void yield()\n暂停当前正在执行的线程对象，并执行其他线程。\n2\tpublic static void sleep(long millisec)\n在指定的毫秒数内让当前正在执行的线程休眠（暂停执行），此操作受到系统计时器和调度程序精度和准确性的影响。\n3\tpublic static boolean holdsLock(Object x)\n当且仅当当前线程在指定的对象上保持监视器锁时，才返回 true。\n4\tpublic static Thread currentThread()\n返回对当前正在执行的线程对象的引用。\n5\tpublic static void dumpStack()\n将当前线程的堆栈跟踪打印至标准错误流。\n实例\n如下的ThreadClassDemo 程序演示了Thread类的一些方法：\n\nDisplayMessage.java 文件代码：\n// 文件名 : DisplayMessage.java\n// 通过实现 Runnable 接口创建线程\npublic class DisplayMessage implements Runnable {\n   private String message;\n   \n   public DisplayMessage(String message) {\n      this.message = message;\n   }\n   \n   public void run() {\n      while(true) {\n         System.out.println(message);\n      }\n   }\n}\n\nGuessANumber.java 文件代码：\n// 文件名 : GuessANumber.java\n// 通过继承 Thread 类创建线程\n \npublic class GuessANumber extends Thread {\n   private int number;\n   public GuessANumber(int number) {\n      this.number = number;\n   }\n   \n   public void run() {\n      int counter = 0;\n      int guess = 0;\n      do {\n         guess = (int) (Math.random() * 100 + 1);\n         System.out.println(this.getName() + " guesses " + guess);\n         counter++;\n      } while(guess != number);\n      System.out.println("** Correct!" + this.getName() + "in" + counter + "guesses.**");\n   }\n}\n\nThreadClassDemo.java 文件代码：\n// 文件名 : ThreadClassDemo.java\npublic class ThreadClassDemo {\n \n   public static void main(String [] args) {\n      Runnable hello = new DisplayMessage("Hello");\n      Thread thread1 = new Thread(hello);\n      thread1.setDaemon(true);\n      thread1.setName("hello");\n      System.out.println("Starting hello thread...");\n      thread1.start();\n      \n      Runnable bye = new DisplayMessage("Goodbye");\n      Thread thread2 = new Thread(bye);\n      thread2.setPriority(Thread.MIN_PRIORITY);\n      thread2.setDaemon(true);\n      System.out.println("Starting goodbye thread...");\n      thread2.start();\n \n      System.out.println("Starting thread3...");\n      Thread thread3 = new GuessANumber(27);\n      thread3.start();\n      try {\n         thread3.join();\n      }catch(InterruptedException e) {\n         System.out.println("Thread interrupted.");\n      }\n      System.out.println("Starting thread4...");\n      Thread thread4 = new GuessANumber(75);\n      \n      thread4.start();\n      System.out.println("main() is ending...");\n   }\n}\n\n运行结果如下，每一次运行的结果都不一样。\n\nStarting hello thread...\nStarting goodbye thread...\nHello\nHello\nHello\nHello\nHello\nHello\nGoodbye\nGoodbye\nGoodbye\nGoodbye\nGoodbye\n.......\n通过 Callable 和 Future 创建线程\n1. 创建 Callable 接口的实现类，并实现 call() 方法，该 call() 方法将作为线程执行体，并且有返回值。\n\n2. 创建 Callable 实现类的实例，使用 FutureTask 类来包装 Callable 对象，该 FutureTask 对象封装了该 Callable 对象的 call() 方法的返回值。\n\n3. 使用 FutureTask 对象作为 Thread 对象的 target 创建并启动新线程。\n\n4. 调用 FutureTask 对象的 get() 方法来获得子线程执行结束后的返回值。\n\n实例\npublic class CallableThreadTest implements Callable<Integer> {\n    public static void main(String[] args)  \n    {  \n        CallableThreadTest ctt = new CallableThreadTest();  \n        FutureTask<Integer> ft = new FutureTask<>(ctt);  \n        for(int i = 0;i < 100;i++)  \n        {  \n            System.out.println(Thread.currentThread().getName()+" 的循环变量i的值"+i);  \n            if(i==20)  \n            {  \n                new Thread(ft,"有返回值的线程").start();  \n            }  \n        }  \n        try  \n        {  \n            System.out.println("子线程的返回值："+ft.get());  \n        } catch (InterruptedException e)  \n        {  \n            e.printStackTrace();  \n        } catch (ExecutionException e)  \n        {  \n            e.printStackTrace();  \n        }  \n  \n    }\n    @Override  \n    public Integer call() throws Exception  \n    {  \n        int i = 0;  \n        for(;i<100;i++)  \n        {  \n            System.out.println(Thread.currentThread().getName()+" "+i);  \n        }  \n        return i;  \n    }  \n}\n\n创建线程的三种方式的对比\n1. 采用实现 Runnable、Callable 接口的方式创建多线程时，线程类只是实现了 Runnable 接口或 Callable 接口，还可以继承其他类。\n\n2. 使用继承 Thread 类的方式创建多线程时，编写简单，如果需要访问当前线程，则无需使用 Thread.currentThread() 方法，直接使用 this 即可获得当前线程。\n\n线程的几个主要概念\n在多线程编程时，你需要了解以下几个概念：\n\n线程同步\n线程间通信\n线程死锁\n线程控制：挂起、停止和恢复\n多线程的使用\n有效利用多线程的关键是理解程序是并发执行而不是串行执行的。例如：程序中有两个子系统需要并发执行，这时候就需要利用多线程编程。\n\n通过对多线程的使用，可以编写出非常高效的程序。不过请注意，如果你创建太多的线程，程序执行的效率实际上是降低了，而不是提升了。\n\n请记住，上下文的切换开销也很重要，如果你创建了太多的线程，CPU 花费在上下文的切换的时间将多于执行程序的时间！\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);