(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{945:function(n,t,e){"use strict";e.r(t);var a=e(6),o=Object(a.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"swing-计算器界面的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swing-计算器界面的实现"}},[this._v("#")]),this._v(" swing 计算器界面的实现")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('计算器界面可以分成两部分，即显示区和键盘区。显示区可以使用文本框组件，键盘区则是由很多按钮组成，可以使用网格布局管理器。详细的实现过程如下。\n\n(1) 新建一个继承自 JFrame 的 CalculatorDemo 类。\n\n(2) 为类添加构造方法和 main() 方法，主要代码如下所示。\npackage ch17;\nimport java.awt.BorderLayout;\nimport java.awt.GridLayout;\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport javax.swing.JPanel;\nimport javax.swing.JTextField;\nimport javax.swing.SwingConstants;\nimport javax.swing.border.EmptyBorder;\npublic class CalculatorDemo extends JFrame\n{\n    private JPanel contentPane;    //内容面板\n    private JTextField textField;    //文本框\n    public CalculatorDemo(){};    //构造方法\n    public static void main(String[] args)\n    {\n        CalculatorDemo frame=new CalculatorDemo();\n        frame.setVisible(true);\n    }\n}\n\n(3) 在构造方法中设置窗口的标题和大小等属性，然后使用边界面板向北部添加一个 JTextField 组件，主要代码如下所示。\npublic CalculatorDemo()\n{\n    setTitle("计算器");    //设置窗体的标题\n    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);    //设置窗体退出时操作\n    setBounds(100, 100, 250, 200);    //设置窗体位置和大小\n    contentPane=new JPanel();    //创建内容面板\n    contentPane.setBorder(new EmptyBorder(5,5,5,5));    //设置面板的边框\n    contentPane.setLayout(new BorderLayout(0,0));    //设置内容面板为边界布局\n    setContentPane(contentPane);    //应用内容面板\n    JPanel panel1=new JPanel();    //新建面板用于保存文本框\n    contentPane.add(panel1,BorderLayout.NORTH);    //将面板放置在边界布局的北部\n    textField=new JTextField();    //新建文本框\n    textField.setHorizontalAlignment(SwingConstants.RIGHT);    //文本框中的文本使用右对齐\n    panel1.add(textField);    //将文本框增加到面板中\n    textField.setColumns(18);    //设置文本框的列数是18\n}\n\n(4) 接下来使用网格布局管理器添加多个按钮作为计算器的键盘区，主要代码如下所示。\n纯文本复制\nJPanel panel2=new JPanel();    //新建面板用于保存按钮\ncontentPane.add(panel2, BorderLayout.CENTER);    //将面板放置在边界布局的中央\npanel2.setLayout(new GridLayout(4,4,5,5));    //面板使用网格4X4布局\nJButton button01=new JButton("7");    //新建按钮\npanel2.add(button01);    //应用按钮\nJButton button02=new JButton("8");    //新建按钮\npanel2.add(button02);    //应用按钮\nJButton button03=new JButton("9");    //新建按钮\npanel2.add(button03);    //应用按钮\nJButton button04=new JButton("+");    //新建按钮\npanel2.add(button04);    //应用按钮\nJButton button05=new JButton("4");    //新建按钮\npanel2.add(button05);    //应用按钮\nJButton button06=new JButton("5");    //新建按钮\npanel2.add(button06);    //应用按钮\nJButton button07=new JButton("6");    //新建按钮\npanel2.add(button07);    //应用按钮\nJButton button08=new JButton("-");    //新建按钮\npanel2.add(button08);    //应用按钮\nJButton button09=new JButton("3");    //新建按钮\npanel2.add(button09);    //应用按钮\nJButton button10=new JButton("2");    //新建按钮\npanel2.add(button10);    //应用按钮\nJButton button11=new JButton("1");    //新建按钮\npanel2.add(button11);    //应用按钮\nJButton button12=new JButton("*");    //新建按钮\npanel2.add(button12);    //应用按钮\nJButton button13=new JButton("0");    //新建按钮\npanel2.add(button13);    //应用按钮\nJButton button14=new JButton(".");    //新建按钮\npanel2.add(button14);    //应用按钮\nJButton button15=new JButton("=");    //新建按钮\npanel2.add(button15);    //应用按钮\nJButton button16=new JButton("/");    //新建按钮\npanel2.add(button16);    //应用按钮\n\n')])])]),t("p",[t("img",{attrs:{src:"http://c.biancheng.net/uploads/allimg/181105/3-1Q105142932P4.gif",alt:"RUNOOB 图标"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);