(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{950:function(e,n,t){"use strict";t.r(n);var u=t(6),o=Object(u.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"swing-菜单和弹出式菜单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swing-菜单和弹出式菜单"}},[this._v("#")]),this._v(" swing 菜单和弹出式菜单")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('菜单由 Swing 中的 JMenu 类实现，可以包含多个菜单项和带分隔符的菜单。在菜单中，菜单项由 JMenuItem 类表示，分隔符由 JSeparator 类表示。\n\n菜单本质上是带有关联 JPopupMenu 的按钮。当按下“按钮”时，就会显示 JPopupMenu。如果“按钮”位于 JMenuBar 上，则该菜单为顶层窗口。如果“按钮”是另一个菜单项，则 JPopupMenu 就是“下拉”菜单。\nJMenu 类的常用方法\n创建菜单常用构造方法有两个：JMenu() 和 JMenu(String s)。第一个构造方法创建一个无文本的 JMenu 对象，第二个构造方法创建一个带有指定文本的 JMenu 对象。JMenu 类的常用方法如表 1 所示。\n\n表1 JMenu类的常用方法\n方法名称\t说明\nadd(Action a)\t创建连接到指定 Action 对象的新菜单项，并将其追加到此菜单的末尾\nadd(Component c)\t将某个组件追加到此菜单的末尾\nadd(Component c,int index)\t将指定组件添加到此容器的给定位置\nadd(JMenuItem menultem)\t将某个菜单项追加到此菜单的末尾\nadd(String s)\t创建具有指定文本的新菜单项，并将其追加到此菜单的末尾\naddSeparator()\t将新分隔符追加到菜单的末尾\ndoCliclc(int pressTime)\t以编程方式执行“单击”操作\ngetDelay()\t返回子菜单向上或向下弹出前建议的延迟（以毫秒为单位）\ngetltem(int pos)\t返回指定位置的 JMenuItem\ngetItemCount()\t返回菜单上的项数，包括分隔符\ngetMenuComponent(int n)\t返回位于位置 n 的组件\ngetMenuComponents()\t返回菜单子组件的 Component 数组\ngetSubElements()\t返回由 MenuElement 组成的数组，其中包含此菜单组件的子菜单\ninsert(JMenuItem mi,int pos)\t在给定位置插入指定的 JMenuitem\ninsert(String s,pos)\t在给定位置插入具有指定文本的新菜单项\ninsertSeparator(int index)\t在指定的位置插入分隔符\nisMenuComponent(Component c)\t如果在子菜单层次结构中存在指定的组件，则返回 true\nisPopupMenuVisible()\t如果菜单的弹出窗口可见，则返回 rue\nisSelected()\t如果菜单是当前选择的（即高亮显示的）菜单，则返回 true\nisTopLevelMenu()\t如果菜单是“顶层菜单”（即菜单栏的直接子级），则返回 true\nsetDelay(int d)\t设置菜单的 PopupMenu 向上或向下弹出前建议的延迟\nsetMenuLocation(int x,int y)\t设置弹出组件的位置\nsetPopupMenuVisible(boolean b)\t设置菜单弹出的可见性\nsetSelected(boolean b)\t设置菜单的选择状态\n例 1\n菜单如果依附到 JMenuBar 对象上，则此菜单就是菜单栏中的菜单。菜单如果依附在 JPopupMenu 对象上，此菜单就是弹出式菜单。实现菜单栏和弹出式菜单的原理是一样的，但在具体的实现方式上有一些区别。\n\n下面编写一个案例，使用 JMenuBar 类创建一个包含“文件”菜单和“编辑”菜单的菜单窗口。主要实现代码如下：\npackage ch18;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.KeyEvent;\nimport javax.swing.JCheckBoxMenuItem;\nimport javax.swing.JFrame;\nimport javax.swing.JMenu;\nimport javax.swing.JMenuBar;\nimport javax.swing.JMenuItem;\nimport javax.swing.KeyStroke;\npublic class JMenuDemo1 extends JMenuBar\n{\n    public JMenuDemo1()\n    {\n        add(createFileMenu());    //添加“文件”菜单\n        add(createEditMenu());    //添加“编辑”菜单\n        setVisible(true);\n    }\n    public static void main(String[] agrs)\n    {\n        JFrame frame=new JFrame("菜单栏");\n        frame.setSize(300,200);\n        frame.setJMenuBar(new JMenuDemo1());\n        frame.setVisible(true);\n    }\n    //定义“文件”菜单\n    private JMenu createFileMenu()\n    {\n        JMenu menu=new JMenu("文件(F)");\n        menu.setMnemonic(KeyEvent.VK_F);    //设置快速访问符\n        JMenuItem item=new JMenuItem("新建(N)",KeyEvent.VK_N);\n        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_N,ActionEvent.CTRL_MASK));\n        menu.add(item);\n        item=new JMenuItem("打开(O)",KeyEvent.VK_O);\n        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_O,ActionEvent.CTRL_MASK));\n        menu.add(item);\n        item=new JMenuItem("保存(S)",KeyEvent.VK_S);\n        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_S,ActionEvent.CTRL_MASK));\n        menu.add(item);\n        menu.addSeparator();\n        item=new JMenuItem("退出(E)",KeyEvent.VK_E);\n        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_E,ActionEvent.CTRL_MASK));\n        menu.add(item);\n        return menu;\n    }\n    //定义“编辑”菜单\n    private JMenu createEditMenu()\n    {\n        JMenu menu=new JMenu("编辑(E)");\n        menu.setMnemonic(KeyEvent.VK_E);\n        JMenuItem item=new JMenuItem("撤销(U)",KeyEvent.VK_U);\n        item.setEnabled(false);\n        menu.add(item);\n        menu.addSeparator();\n        item=new JMenuItem("剪贴(T)",KeyEvent.VK_T);\n        menu.add(item);\n        item=new JMenuItem("复制(C)",KeyEvent.VK_C);\n        menu.add(item);\n        menu.addSeparator();\n        JCheckBoxMenuItem cbMenuItem=new JCheckBoxMenuItem("自动换行");\n        menu.add(cbMenuItem);\n        return menu;\n    }\n}\n\n上述代码调用 JMenu 对象的 setMnemonic() 方法设置当前菜单的快速访问符。该符号必须对应键盘上的一个键，并且应该使用 java.awt.event.KeyEvent 中定义的 VK—XXX 键代码之一指定。\n\n提示：快速访问符是一种快捷键，通常在按下 Alt 键和某个字母时激活。例如，常用的 Alt+F 是“文件” 菜单的快速访问符。\n\nJMenuItem 类实现的是菜单中的菜单项。菜单项本质上是位于列表中的按钮。当用户单击“按钮”时，则执行与菜单项关联的操作。JMenuItem 的常用构造方法有以下三个。\nJMenuItem(String text)：创建带有指定文本的 JMenuItem。\nJMenuItem(String text,Icon icon)：创建带有指定文本和图标的 JMenuItem。\nJMenuItem(String text,int mnemonic)：创建带有指定文本和键盘助记符的 JMenuItem。\n\n在该实例中，创建菜单项后调用 JMenuItem 对象的 setAccelerator(KeyStroke) 方法来设置修改键，它能直接调用菜单项的操作监听器而不必显示菜单的层次结构。在本实例中没有实现事件监听机制，所以使用快捷键时将得不到程序的任何响应，但是在菜单项中将出现快捷键。\n\n运行该实例，图 1 所示是“文件”菜单展开效果，图 2 所示是“编辑”菜单展开的效果。\n\n“文件”菜单\n图1 “文件”菜单\n\n“编辑”菜单\n图2 “编辑”菜单\n弹出式菜单 JPopuMenu\n弹出式菜单由 JPopupMenu 类实现，它是一个可弹出并显示一系列选项的小窗口。它还用于当用户选择菜单项并激活它时显示的“右拉式(pull-right)”菜单，可以在想让菜单显示的任何其他位置使用。例如，当用户在指定区域中右击时。\n\nJPopupMenu 类的常用方法如表 2 所示。\n\n表2 JPopMenu类的常用方法\n方法名称\t说明\ngetInvoker()\t返回作为此弹出菜单的“调用者”的组件\nsetInvoker(Component invoker)\t设置弹出菜单的调用者，即弹出菜单在其中显示的组件\naddPopupMenuListener(PopupMenuListener1)\t添加 PopupMenu 监听器\nremovePopupMenuListener(PopupMenuListener1)\t移除 PopupMenu 监听器\ngetPopupMenuListeners()\t返回利用 addPopupMenuListener()添加到此 JMenuitem 的所有\nPopupMenuListener 组成的数组\ngetLabel()\t返回弹出菜单的标签\nsetLabel(String label)\t设置弹出菜单的标签\nshow(Component invoker,int x,int y)\t在调用者的坐标空间中的位置 X、Y 处显示弹出菜单\ngetComponentIndex(Component c)\t返回指定组件的索引\n例 2\n使用 JPopupMenu 类创建一个弹出式菜单，并在菜单中使用子菜单。主要实现代码如下：\npackage ch18;\nimport java.awt.event.MouseAdapter;\nimport java.awt.event.MouseEvent;\nimport java.awt.event.MouseListener;\nimport javax.swing.ButtonGroup;\nimport javax.swing.JFrame;\nimport javax.swing.JMenu;\nimport javax.swing.JMenuItem;\nimport javax.swing.JPopupMenu;\nimport javax.swing.JRadioButtonMenuItem;\npublic class JPopupMenuDemo extends JFrame\n{\n    JMenu fileMenu;\n    JPopupMenu jPopupMenuOne;\n    JMenuItem openFile,closeFile,exit;\n    JRadioButtonMenuItem copyFile,pasteFile;\n    ButtonGroup buttonGroupOne;\n    public JPopupMenuDemo()\n    {\n        jPopupMenuOne=new JPopupMenu();    //创建jPopupMenuOne对象\n        buttonGroupOne=new ButtonGroup();\n        //创建文件菜单及子菜单，并将子菜单添加到文件菜单中\n        fileMenu=new JMenu("文件");\n        openFile=new JMenuItem("打开");\n        closeFile=new JMenuItem("关闭");\n        fileMenu.add(openFile);\n        fileMenu.add(closeFile);\n        //将fileMenu菜单添加到弹出式菜单中\n        jPopupMenuOne.add(fileMenu);\n        //添加分割符\n        jPopupMenuOne.addSeparator();\n        //创建单选菜单项，并添加到ButtonGroup对象中\n        copyFile=new JRadioButtonMenuItem("复制");\n        pasteFile=new JRadioButtonMenuItem("粘贴");\n        buttonGroupOne.add(copyFile);\n        buttonGroupOne.add(pasteFile);\n        //将copyFile添加到jPopupMenuOne中\n        jPopupMenuOne.add(copyFile);\n        //将pasteFile添加到jPopupMenuOne中\n        jPopupMenuOne.add(pasteFile);\n        jPopupMenuOne.addSeparator();\n        exit=new JMenuItem("退出");\n        //将exit添加到jPopupMenuOne中\n        jPopupMenuOne.add(exit);\n        //创建监听器对象\n        MouseListener popupListener=new PopupListener(jPopupMenuOne);\n        //向主窗口注册监听器\n        this.addMouseListener(popupListener);\n        this.setTitle("弹出式菜单");\n        this.setBounds(100,100,250,150);\n        this.setVisible(true);\n        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    }\n    public static void main(String args[])\n    {\n        new JPopupMenuDemo();\n    }\n    //添加内部类，其扩展了MouseAdapter类，用来处理鼠标事件\n    class PopupListener extends MouseAdapter\n    {\n        JPopupMenu popupMenu;\n        PopupListener(JPopupMenu popupMenu)\n        {\n            this.popupMenu=popupMenu;\n        }\n        public void mousePressed(MouseEvent e)\n        {\n            showPopupMenu(e);\n        }\n        public void mouseReleased(MouseEvent e)\n        {\n            showPopupMenu(e);\n        }\n        private void showPopupMenu(MouseEvent e)\n        {\n            if(e.isPopupTrigger())\n            {\n                //如果当前事件与鼠标事件相关，则弹出菜单\n                popupMenu.show(e.getComponent(),e.getX(),e.getY());\n            }\n        }\n    }\n}\n\n\n')])])])])}),[],!1,null,null,null);n.default=o.exports}}]);