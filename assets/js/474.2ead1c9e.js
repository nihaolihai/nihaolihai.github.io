(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{963:function(e,n,a){"use strict";a.r(n);var t=a(6),o=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h2",{attrs:{id:"swing-复选框组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swing-复选框组件"}},[this._v("#")]),this._v(" swing 复选框组件")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('一个复选框有选中和未选中两种状态，并且可以同时选定多个复选框。Swing 中使用 JCheckBox 类实现复选框，该类的常用构造方法如下。\nJCheckBox()：创建一个默认的复选框，在默认情况下既未指定文本，也未指定图像，并且未被选择。\nJCheckBox(String text)：创建一个指定文本的复选框。\nJCheckBox(String text,boolean selected)：创建一个指定文本和选择状态的复选框。\n例 1\n使用 JFmme 组件创建一个窗口，然后使用 JCheckBox 类创建一些复选框。具体实现代码如下：\n纯文本复制\npackage ch17;\nimport java.awt.Font;\nimport javax.swing.JCheckBox;\nimport javax.swing.JFrame;\nimport javax.swing.JLabel;\nimport javax.swing.JPanel;\npublic class JCheckBoxDemo\n{\n    public static void main(String[] agrs)\n    {\n        JFrame frame=new JFrame("Java复选组件示例");    //创建Frame窗口\n        JPanel jp=new JPanel();    //创建面板\n        JLabel label=new JLabel("流行编程语言有：");\n        label.setFont(new Font("楷体",Font.BOLD,16));    //修改字体样式\n        JCheckBox chkbox1=new JCheckBox("C#", true);    //创建指定文本和状态的复选框\n        JCheckBox chkbox2=new JCheckBox("C++");    //创建指定文本的复选框\n        JCheckBox chkbox3=new JCheckBox("Java");    //创建指定文本的复选框\n        JCheckBox chkbox4=new JCheckBox("Python");    //创建指定文本的复选框\n        JCheckBox chkbox5=new JCheckBox("PHP");    //创建指定文本的复选框\n        JCheckBox chkbox6=new JCheckBox("Perl");    //创建指定文本的复选框\n        jp.add(label);\n        jp.add(chkbox1);\n        jp.add(chkbox2);\n        jp.add(chkbox3);\n        jp.add(chkbox4);\n        jp.add(chkbox5);\n        jp.add(chkbox6);\n        frame.add(jp);\n        frame.setBounds(300,200,400,100);\n        frame.setVisible(true);\n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    }\n}\n\n')])])])])}),[],!1,null,null,null);n.default=o.exports}}]);