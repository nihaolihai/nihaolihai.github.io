(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{707:function(n,e,t){"use strict";t.r(e);var s=t(6),a=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"maven测试插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven测试插件"}},[this._v("#")]),this._v(" Maven测试插件")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Surefire 插件简介\nMaven 本身虽然不是测试框架，但是 Maven 能够在构建执行到特定的生命周期阶段的时候，通过调用插件执行基于 JUnit 和 TestNG 编写好的测试用例。\n\n这个插件就是 maven-surefire-plugin 插件，它能很好地兼容 JUnit 系列和 TestNG 测试框架。\n\n在 Maven 的 default 生命周期的 test 阶段，绑定的默认插件是 maven-surefire-plugin。这是一个内置绑定，在默认情况下，maven-surefire-plugin 的 test 阶段会自动执行测试源代码路径下的所有符合命名模式的测试类。符合命名模式的规范是：\n**/Test*.java：所有命名为 Test 开头的 Java 类。\n**/*Test.java：所有命名为 Test 结尾的 Java 类。\n**/*TestCase.java：所有命名为 TestCase 结尾的 Java 类。\n\n只要测试类符合上面的命名模式，Maven 都会自动运行它们，不需要再定义测试集合来声明要执行哪些测试类。\n\n如果测试代码是基于 TestNG 框架的，还可以通过配置文件灵活地指定需要运行的测试案例类。具体的写法请参考前面关于 TestNG 的介绍。\n跳过测试\n在实际项目中，要使 Maven 的构建过程暂时跳过测试环境（不运行测试案例），可以在执行 mvn 命令的后面通过添加 skipTests 参数实现，代码如下：\nMvn package -DskipTests\n\n不过虽然可以通过该方式跳过测试阶段，但是这种操作和思路是不提倡的，因为发布和使用一个没有经过测试的构件有很大的风险。\n\n除了可以在 mvn 命令后面通过指定 skipTests 参数标明跳过测试外，还可以在 pom 中的 maven-surefire-plugin 插件配置中进行声明，代码如下：\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.16</version>\n    <configuration>\n        <skipTests>true</skipTests>\n    </configuration>\n</plugin>\n除了在 Maven 构建过程中跳过执行测试代码外，还可以直接跳过对测试的编译。\n\n同样地，这里可以通过命令行指定，也可以通过 pom 的配置文件指定。\n\nMaven 命令指定代码如下：\nMvn package -Dmaven.test.skip=true\n\n其中，maven.test.skip 参数同时控制 maven-compile-plugin 和 maven-surefire-plugin 两个插件的行为：既跳过了测试代码的编译，也跳过了测试代码的运行。\n\npom 配置文件的指定代码如下：\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>2.1</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.16</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n个性化指定运行测试\n在实际项目中，用户可能需要灵活地指定运行某些测试案例。这时候，就可以通过 mvn 命令的 test 参数来实现，代码如下：\nMvn test -Dtest=TestDemo\n\n表示只执行 TestDemo 测试类。\n\n同样地，还可以在 test 参数中，用“∗”通配符指定执行符合规则的所有测试类。例如：\nMvn test -Dtest=Test*Demo\n\n表示执行类名为 Test 开头，Demo 结尾的所有测试类。\n\n如果不嫌麻烦，也可以通过 test 参数明确指定要执行的测试类名。例如：\nMvn test -Dtest=TestDemo1,TestDemo2\n\n表示执行类名为 TestDemo1 和 TestDemo2 的所有测试类。注意，指定的多个测试类之间要用逗号隔开。\n\n同样，这里也可以将“∗”通配符和明确指定测试类的两种方式结合起来，以达到更灵活的效果。例如：\nMvn test -Dtest=TestA*,TestDemo1,TestDemo2\n\n表示运行类名以 TestA 开头的所有的测试类和 TestDemo1、TestDemo2 测试类。\n\n最后需要说明的是，如果 maven-surefire-plugin 根据 test 参数找不到任何匹配的测试类的话，会报测试失败。例如：\nMvn test -Dtest\n\n这样的命令肯定找不到一个测试类，就会导致失败。\n包含和排除测试\nMaven 提倡约定优于配置原则，所以用户在写测试代码的时候，应尽量按规范的模式给测试类起名字。但是有时候难免会出现一些不符合模式的测试类名，而这些测试类又需要执行。这里可以通过如下方式，在 maven-surefire-plugin 中进行配置实现。\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.16</version>\n    <configuration>\n        <includes>\n            <include>**/Demo*.java</include>\n        </includes>\n    </configuration>\n</plugin>\n通过上面的配置，Surefire 插件就会自动执行所有命名以 Demo 开头的测试类。同样地，可以通过 excludes 描述排除哪些测试类。例如：\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.16</version>\n    <configuration>\n        <excludes>\n            <exclude>**/*abc.java</exclude>\n            <exclude>**/Temp*.java</exclude>\n        </excludes>\n    </configuration>\n</plugin>\n表示不执行所有命名以 abc 结尾的测试类和以 Test 开头的测试类。\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);