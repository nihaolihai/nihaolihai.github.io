(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{1128:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"springboot常用注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot常用注解"}},[t._v("#")]),t._v(" SpringBoot常用注解")]),t._v(" "),a("ul",[a("li",[t._v("这个技术出现的背景、初衷和要达到什么样的目标或是要解决什么样的问题。")]),t._v(" "),a("li",[t._v("这个技术的优势和劣势分别是什么，或者说，这个技术的 trade-off 是什么")]),t._v(" "),a("li",[t._v("这个技术适用的场景")]),t._v(" "),a("li",[t._v("技术的组成部分和关键点")]),t._v(" "),a("li",[t._v("技术的底层原理和关键实现")]),t._v(" "),a("li",[t._v("已有的实现和它之间的对比")])]),t._v(" "),a("h2",{attrs:{id:"注解-annotations-列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解-annotations-列表"}},[t._v("#")]),t._v(" 注解(annotations)列表")]),t._v(" "),a("p",[t._v("@SpringBootApplication：包含了@ComponentScan、@Configuration和@EnableAutoConfiguration注解。其中@ComponentScan让spring Boot扫描到Configuration类并把它加入到程序上下文。")]),t._v(" "),a("p",[t._v("@Configuration 等同于spring的XML配置文件；使用Java代码可以检查类型安全。")]),t._v(" "),a("p",[t._v("@EnableAutoConfiguration 自动配置。")]),t._v(" "),a("p",[t._v("@ComponentScan 组件扫描，可自动发现和装配一些Bean。")]),t._v(" "),a("p",[t._v("@Component可配合CommandLineRunner使用，在程序启动后执行一些基础任务。")]),t._v(" "),a("p",[t._v("@RestController注解是@Controller和@ResponseBody的合集,表示这是个控制器bean,并且是将函数的返回值直 接填入HTTP响应体中,是REST风格的控制器。")]),t._v(" "),a("p",[t._v("@Autowired自动导入。")]),t._v(" "),a("p",[t._v("@PathVariable获取参数。")]),t._v(" "),a("p",[t._v("@JsonBackReference解决嵌套外链问题。")]),t._v(" "),a("p",[t._v("@RepositoryRestResourcepublic配合spring-boot-starter-data-rest使用。")]),t._v(" "),a("p",[t._v("@RequestMapping：提供路由信息，负责URL到Controller中的具体函数的映射。")]),t._v(" "),a("p",[t._v("@EnableAutoConfiguration：Spring Boot自动配置（auto-configuration）：尝试根据你添加的jar依赖自动配置你的Spring应用。例如，如果你的classpath下存在HSQLDB，并且你没有手动配置任何数据库连接beans，那么我们将自动配置一个内存型（in-memory）数据库”。")]),t._v(" "),a("p",[t._v("你可以将\n@EnableAutoConfiguration或者@SpringBootApplication注解\n添加到一个\n@Configuration类上来选择自动配置。如果发现应用了你不想要的特定自动配置类，\n你可以使用\n@EnableAutoConfiguration注解的排除属性来禁用它们。")]),t._v(" "),a("p",[t._v("@ComponentScan：表示将该类自动发现扫描组件。个人理解相当于，\n如果扫描到有\n@Component、\n@Controller、\n@Service等这些注解的类，\n并注册为Bean，可以自动收集所有的Spring组件，包括@Configuration类。")]),t._v(" "),a("p",[t._v("我们经常使用@ComponentScan注解搜索beans，并结合@Autowired注解导入。可以自动收集所有的Spring组件，包括@Configuration类。我们经常使用@ComponentScan注解搜索beans，并结合@Autowired注解导入。如果没有配置的话，Spring Boot会扫描启动类所在包下以及子包下的使用了@Service,@Repository等注解的类。")]),t._v(" "),a("p",[t._v("@Configuration：相当于传统的xml配置文件，如果有些第三方库需要用到xml文件，建议仍然通过@Configuration类作为项目的配置主类——可以使用@ImportResource注解加载xml配置文件。推荐：Spring Boot 最核心的 3 个注解详解。")]),t._v(" "),a("p",[t._v("@Import：用来导入其他配置类。推荐：Spring Boot 最核心的 25 个注解！")]),t._v(" "),a("p",[t._v("@ImportResource：用来加载xml配置文件。")]),t._v(" "),a("p",[t._v("@Autowired：自动导入依赖的bean")]),t._v(" "),a("p",[t._v("@Service：一般用于修饰service层的组件")]),t._v(" "),a("p",[t._v("@Repository：使用@Repository注解可以确保DAO或者repositories提供异常转译，这个注解修饰的DAO或者repositories类会被ComponetScan发现并配置，同时也不需要为它们提供XML配置项。")]),t._v(" "),a("p",[t._v("@Bean：用@Bean标注方法等价于XML中配置的bean。")]),t._v(" "),a("p",[t._v("@Value：注入Spring boot application.properties配置的属性的值。示例代码：\n@Value(value = “#{message}”)\nprivate String message;\n@Inject：等价于默认的@Autowired，只是没有required属性；")]),t._v(" "),a("p",[t._v("@Component：泛指组件，当组件不好归类的时候，我们可以使用这个注解进行标注。")]),t._v(" "),a("p",[t._v("@Bean:相当于XML中的,放在方法的上面，而不是类，意思是产生一个bean,并交给spring管理。")]),t._v(" "),a("p",[t._v('@Bean\n@Scope("singleton")\npublic Person personSingleton() {\nreturn new Person();\n}')]),t._v(" "),a("p",[t._v("四种常见的 Spring Bean 的作用域：")]),t._v(" "),a("p",[t._v("singleton : 唯一 bean 实例，Spring 中的 bean 默认都是单例的。")]),t._v(" "),a("p",[t._v("prototype : 每次请求都会创建一个新的 bean 实例。")]),t._v(" "),a("p",[t._v("request : 每一次 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP request 内有效。")]),t._v(" "),a("p",[t._v("session : 每一次 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP session 内有效。")]),t._v(" "),a("p",[t._v("3.1 GET 请求")]),t._v(" "),a("p",[t._v('@GetMapping("users") 等价于@RequestMapping(value="/users",method=RequestMethod.GET)')]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllUsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("3.2. POST 请求")]),t._v(" "),a("p",[t._v('@PostMapping("users") 等价于@RequestMapping(value="/users",method=RequestMethod.POST)')]),t._v(" "),a("p",[t._v("关于@RequestBody注解的使用，在下面的“前后端传值”这块会讲到。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Valid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserCreateRequest")]),t._v(" userCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userRespository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("3.3. PUT 请求")]),t._v(" "),a("p",[t._v('@PutMapping("/users/{userId}") 等价于@RequestMapping(value="/users/{userId}",method=RequestMethod.PUT)')]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PutMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Valid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserUpdateRequest")]),t._v(" userUpdateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("3.4. DELETE 请求")]),t._v(" "),a("p",[t._v('@DeleteMapping("/users/{userId}")等价于@RequestMapping(value="/users/{userId}",method=RequestMethod.DELETE)')]),t._v(" "),a("p",[t._v('@DeleteMapping("/users/{userId}")\npublic ResponseEntity deleteUser(@PathVariable(value = "userId") Long userId){')]),t._v(" "),a("p",[t._v("}")]),t._v(" "),a("p",[t._v('@Value("${wuhan2020}")\nString wuhan2020;')]),t._v(" "),a("p",[t._v("@AutoWired：自动导入依赖的bean。byType方式。把配置好的Bean拿来用，完成属性、方法的组装，它可以对类成员变量、方法及构造函数进行标注，完成自动装配的工作。当加上（required=false）时，就算找不到bean也不报错。")]),t._v(" "),a("p",[t._v("@Qualifier：当有多个同一类型的Bean时，可以用@Qualifier(“name”)来指定。与@Autowired配合使用。@Qualifier限定描述符除了能根据名字进行注入，但能进行更细粒度的控制如何选择候选者，具体使用方式如下")]),t._v(" "),a("p",[t._v("@Autowired\n@Qualifier(value = “demoInfoService”)\nprivate DemoInfoService demoInfoService;")]),t._v(" "),a("p",[t._v("@Column标注也可置于属性的getter方法之前")]),t._v(" "),a("p",[t._v("@Getter和@Setter（Lombok）")]),t._v(" "),a("p",[t._v("@Setter：注解在属性上；为属性提供 setting 方法 @Getter：注解在属性上；为属性提供 getting 方法\n@Data：注解在类上；提供类所有属性的 getting 和 setting 方法，此外还提供了equals、canEqual、hashCode、toString 方法")]),t._v(" "),a("p",[t._v("@Setter：注解在属性上；为属性提供 setting 方法")]),t._v(" "),a("p",[t._v("@Getter：注解在属性上；为属性提供 getting 方法")]),t._v(" "),a("p",[t._v("@Log4j2 ：注解在类上；为类提供一个 属性名为log 的 log4j 日志对象，和@Log4j注解类似")]),t._v(" "),a("p",[t._v("@NoArgsConstructor：注解在类上；为类提供一个无参的构造方法")]),t._v(" "),a("p",[t._v("@AllArgsConstructor：注解在类上；为类提供一个全参的构造方法")]),t._v(" "),a("p",[t._v("@EqualsAndHashCode:默认情况下，会使用所有非瞬态(non-transient)和非静态(non-static)字段来生成equals和hascode方法，也可以指定具体使用哪些属性。")]),t._v(" "),a("p",[t._v("@toString:生成toString方法，默认情况下，会输出类名、所有属性，属性会按照顺序输出，以逗号分割。")]),t._v(" "),a("p",[t._v("@ExceptionHandler(Exception.class):")]),t._v(" "),a("p",[t._v("用在方法上面表示遇到这个异常就执行以下方法。")]),t._v(" "),a("p",[t._v("@RequestParam\t获取查询参数。即url?name=这种形式")]),t._v(" "),a("p",[t._v("@PathVariable\t获取路径参数。即url/{id}这种形式。")]),t._v(" "),a("p",[t._v("@RequestParam\t获取Body的参数，一般用于post获取参数")]),t._v(" "),a("p",[t._v("@RequestHeader\t获取请求头的信息")]),t._v(" "),a("p",[t._v("@CookieValue\t获取Cookie的信息")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/requestParam"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDto")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过一个实体类来接收，字段名必须一致")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageIndex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" pageIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageSize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userDto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageIndex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageSize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"springcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud"}},[t._v("#")]),t._v(" springcloud")]),t._v(" "),a("p",[t._v("@EnableEurekaServer:")]),t._v(" "),a("p",[t._v("用在springboot启动类上，表示这是一个eureka服务注册中心；")]),t._v(" "),a("p",[t._v("@EnableDiscoveryClient:")]),t._v(" "),a("p",[t._v("用在springboot启动类上，表示这是一个服务，可以被注册中心找到；")]),t._v(" "),a("p",[t._v("@LoadBalanced:")]),t._v(" "),a("p",[t._v("开启负载均衡能力；")]),t._v(" "),a("p",[t._v("@EnableCircuitBreaker:")]),t._v(" "),a("p",[t._v("用在启动类上，开启断路器功能；")]),t._v(" "),a("p",[t._v("@HystrixCommand(fallbackMethod=”backMethod”):")]),t._v(" "),a("p",[t._v("用在方法上，fallbackMethod指定断路回调方法；")]),t._v(" "),a("p",[t._v("@EnableConfigServer:")]),t._v(" "),a("p",[t._v("用在启动类上，表示这是一个配置中心，开启Config Server；")]),t._v(" "),a("p",[t._v("@EnableZuulProxy:")]),t._v(" "),a("p",[t._v("开启zuul路由，用在启动类上；")]),t._v(" "),a("p",[t._v("tomcat安装解压版解决\n在安装目录下，conf 目录下 server.xml中 第70 行代码，修改为以下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<Connector port="8082" protocol="HTTP/1.1"\n           connectionTimeout="20000"\n\t\t   relaxedQueryChars="[]|{}^&#x5c;&#x60;&quot;&lt;&gt;"\n           redirectPort="8443" />\n')])])]),a("p",[t._v("在启动类中添加以下方法：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebServerFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("webServerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatServletWebServerFactory")]),t._v(" fa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatServletWebServerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addConnectorCustomizers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatConnectorCustomizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" connector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"relaxedQueryChars"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SystemConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatServletWebServerFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TomcatServletWebServerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("customizeConnector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connector")]),t._v(" connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maxSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("customizeConnector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxPostSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxSavePostSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"relaxedQueryChars"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[]{}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProtocolHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractHttp11Protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractHttp11Protocol")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" connector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProtocolHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxSwallowSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Set MaxSwallowSize "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" maxSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);