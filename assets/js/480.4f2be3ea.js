(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{968:function(t,n,e){"use strict";e.r(n);var s=e(6),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" linux")]),t._v(" "),e("h2",{attrs:{id:"linux常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[t._v("#")]),t._v(" linux常用命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("//查看路径\npwd\n//查看文件夹\nll/ls\n//杀死进程\nkill -9 进程号\n//进入根目录\ncd /data\n//进入个人目录\ncd bill\n//启动，停止\nsh start.sh/stop.sh\n//查看运行情况\nps -ef|grep bill.jar\n//从第一个字节开始正向查看文件的内容\ncat file1\n//查看一个文件的最后两行  \ntail -2 file1 \n//实时查看被添加到一个文件中的内容 \ntail -f /var/log/messages \n//将源文件名 source_file 改为目标文件名 dest_file\nmv source_file(文件) dest_file(文件)\n//file1删除\nrm  -f file1\n//删除目录，注意必须是空目录\nrmdir 目录名   \nrm -f file1 删除一个叫做 'file1' 的文件'\nrm -rf test 删除文件夹 \n创建echo >text1.txt文件\n创建mkdir test文件夹      \n//修改配置文件\n1、cat start.sh\n2、vim start.sh\n3、按住键盘的i和，（逗号）这样可以进入insert状态进行编辑：\n4、修改完之后按Esc键退出编辑页面\n5、然后按住shift键加：（冒号），表示已经退出了编辑状态\n6、输入wq就退出了编辑器：\n//查看内存\ndf -h\n")])])]),e("h3",{attrs:{id:"压缩导报"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩导报"}},[t._v("#")]),t._v(" 压缩导报")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("//打包命令\nwget https://github.com/phachon/mm-wiki/releases/download/v0.1/mm-wiki-linux-amd64.tar.gz//下载当前路径\ntar -zcvf index.tar.gz index.html//打包当前目录\ntar -zcvf index.tar.gz index.html css/js/ images/　//打包指定路径\ntar -zxvf  index.tar.gz//压缩当前目录　\ntar -zxvf  index.tar.gz /home/www//压缩指定目录\nwindow\nmakecab e:/test.txt e:/test.zip //压缩一个文件\nexpand e:/test.zip e:/test.txt  //解压一个文件\nsc delete MySQL//删除服务\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);