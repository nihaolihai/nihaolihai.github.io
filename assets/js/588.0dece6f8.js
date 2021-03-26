(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1077:function(t,n,e){"use strict";e.r(n);var p=e(6),a=Object(p.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"html密码框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html密码框"}},[t._v("#")]),t._v(" HTML密码框")]),t._v(" "),e("p",[t._v("网页中最典型的应用密码框的场景就是网站的登录注册页面。例如 C语言中文网的登录（http://vip.biancheng.net/login.php）或者注册（http://vip.biancheng.net/register.php）页面中的密码字段使用的就是密码框。")]),t._v(" "),e("p",[t._v("在 HTML 中，把 "),e("input"),t._v(" 标签的 type 属性设置为 password 可以表示密码框。具体语法格式如下：\n"),e("input",{attrs:{type:"password"}})]),t._v(" "),e("p",[t._v("接下来我们看一个具体的例子：\n纯文本复制\n")]),e("form",{attrs:{action:"http://vip.biancheng.net/login.php",method:"post",name:"myForm"}},[t._v("\n密码:"),e("input",{attrs:{type:"password",name:"psd"}})]),e("p"),t._v(" "),e("p",[t._v("从运行结果来看，密码框在外观上和单行文本框相同，但是两者之间是有区别的：\n单行文本框输入的字符可见；\n密码框输入的字符不可见，会被▪代替。请读者自己试一试。\n注意：密码框设置输入字符被▪代替的原因，只是防止用户周围的人看到密码，后台是可以拿到输入的内容的。")]),t._v(" "),e("p",[t._v("密码框同单行文本框一样，也有 maxlength、 value 以及 size 等属性。接下来我们看一下：")]),t._v(" "),e("ol",[e("li",[t._v("maxlength属性\nmaxlength 属性表示密码框最多可以输入的字符数量。如果我们需要设置用户输入的密码不得超过 6 位，可以这样写：\n"),e("form",{attrs:{action:"http://vip.biancheng.net/login.php",method:"post",name:"myForm"}},[t._v("\n密码:"),e("input",{attrs:{type:"password",name:"psd",maxlength:"6"}})]),t._v("\n进行设置后，当用户输入的密码大于 6 位，不再允许输入。")]),t._v(" "),e("li",[t._v("value属性\nvalue 属性用来表示密码框的默认值，一般密码都是由用户自行输入的，但是有的情况我们需要给用户一个默认密码，就可以这样写：\n纯文本复制\n"),e("form",{attrs:{action:"http://vip.biancheng.net/login.php",method:"post",name:"myForm"}},[t._v("\n密码:"),e("input",{attrs:{type:"password",name:"psd",value:"123456"}})])])]),t._v(" "),e("p",[t._v('通过运行结果可以发现，默认的密码"123456"被▪代替。\n3) size属性\n同单行文本框中的 size 属性相同，也表示文本框可见的字符数。\n注意：一般我们只需设置 maxlength 来限制用户输入的密码不大于多少位，不使用 size 属性。')])])}),[],!1,null,null,null);n.default=a.exports}}]);