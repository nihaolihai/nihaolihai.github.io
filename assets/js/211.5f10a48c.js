(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{701:function(n,t,s){"use strict";s.r(t);var e=s(6),a=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"软件测试-software-testing-的概念和分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件测试-software-testing-的概念和分类"}},[this._v("#")]),this._v(" 软件测试（Software Testing）的概念和分类")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("软件测试（Software Testing）描述一种用来促进鉴定软件的正确性、完整性、安全性和质量的过程。换句话说，软件测试是一种实际输出与预期输出之间的审核或者比较过程。\n\n软件测试的经典定义是：在规定的条件下对程序进行操作，以发现程序错误，衡量软件质量，并对其是否能满足设计要求进行评估的过程。\n\n软件测试是伴随着软件的产生而产生的。早期的软件开发过程中软件规模都很小、复杂程度低，软件开发的过程混乱无序、相当随意，测试的含义比较狭窄，开发人员将测试等同于“调试”，目的是纠正软件中已经知道的故障，常常由开发人员自己完成这部分的工作。\n\n对测试的投入极少，测试介入也晚，常常是等到形成代码，产品已经基本完成时才进行测试。到了上世纪 80 年代初期，软件和 IT 行业进入了大发展，软件趋向大型化、高复杂度，软件的质量越来越重要。\n\n这个时候，一些软件测试的基础理论和实用技术开始形成，并且人们开始为软件开发设计了各种流程和管理方法，软件开发的方式也逐渐由混乱无序的开发过程过渡到结构化的开发过程，以结构化分析与设计、结构化评审、结构化程序设计以及结构化测试为特征。\n\n人们还将“质量”的概念融入其中，软件测试定义发生了改变，测试不单纯是一个发现错误的过程，而且将测试作为软件质量保证（SQA）的主要职能，包含软件质量评价的内容。\n软件测试的分类\n从不同角度，可以对软件测试（软件测试技术）有不同的分类。\n\n软件测试是软件开发过程中的一个重要组成部分，是贯穿整个软件开发生命周期、对软件产品（包括阶段性产品）进行验证和确认的活动过程。其目的是尽快发现软件产品中存在的问题。\n\n从是否需要执行被测试软件的角度，可以把软件测试分为静态测试和动态测试。\n1）静态测试\n静态测试方式指软件代码的静态分析测验，此类过程中应用数据较少，主要过程为通过软件的静态性测试（即人工推断或计算机辅助测试）测试程序中运算方式、算法的正确性，进而完成测试过程。\n\n此类测试的优点在于能够消耗较短时间、较少资源完成对软件、软件代码的测试，能够较为明显地发现此类代码中出现的错误。静态测试方法适用范围较大，尤其适用于较大型的软件测试。\n2）动态测试\n计算机动态测试的主要目的为检测软件运行中出现的问题，较静态测试方式相比，其被称为动态的原因即为其测试方式主要依赖程序的运用，主要为检测软件中动态行为是否缺失、软件运行效果是否良好。\n\n其最为明显的特征即为进行动态测试时软件为运转状态，只有如此才能于使用过程中发现软件缺陷，进而对此类缺陷进行修复。目前动态测试过程中可包括两类因素，即被测试软件与测试中所需数据，两类因素决定动态测试正确展开、有效展开。\n\n从是否针对软件结构与算法进行测试的角度，可以把软件测试分为白盒测试和黑盒测试。\n1）白盒测试\n白盒测试相对于黑盒测试而言具有一定透明性，原理为根据软件内部应用、源代码等对产品内部工作过程进行调试。\n\n测试过程中常将其与软件内部结构协同展开分析，最大优点即为其能够有效解决软件内部应用程序出现的问题，测试过程中常将其与黑盒测试方式结合，当测试软件功能较多时，白盒测试法亦可对此类情况展开有效调试。\n\n其中，判定测试作为白盒测试法中最为主要的测试程序结构之一，此类程序结构作为对程序逻辑结构的整体实现，对于程序测试而言具有较为重要的作用。\n\n此类测试方式针对程序中各类型的代码进行覆盖式检测，覆盖范围较广，适用于多类型程序。实际检测中，白盒测试法常与黑盒检测法并用，以动态检测方式中测试出的未知错误为例，首先使用黑盒检测法，若程序输入数据与输出数据相同，则证明内部数据未出现问题，应从代码方面进行分析，若出现问题则使用白盒测试法，针对软件内部结构进行分析，直至检测出问题所在，及时加以修改。\n2）黑盒测试\n黑盒测试，顾名思义即为将软件测试环境模拟为不可见的“黑盒”。通过数据输入观察数据输出，检查软件内部功能是否正常。测试展开时，数据输入软件中，等待数据输出。数据输出时若与预计数据一致，则证明该软件通过测试，若数据与预计数据有出入，即便出入较小亦证明软件程序内部出现问题，需尽快解决。\n\n从测试的阶段角度，可以把软件测试分为单元测试、集成测试、系统测试和验收测试，这里我们介绍一次啊单元测试和集成测试。\n1）单元测试\n单元测试即为将整个软件分解为各个单元，随后对单元进行测试。\n\n此类测试策略的优点在于所需分析数据较少，且针对性较强，程序开发者于开发过程中可通过操作经验明确出现问题的大致区域，随后针对此类问题对相关单元展开分析，进行问题排查。但需注意的是，某些程序中无具体单元驱动程序，即单个单元无法有效驱动，易出现问题，若针对此类软件展开测试，需重点注意此类分解单元。\n2）集成测试\n集成测试也称联合测试、组装测试，将程序模块采用适当的集成策略组装起来，对系统的接口及集成后的功能进行正确性检测的测试工作。集成测试与单元测试相反，原理为将部分需测试部分作为整体进行集成，随后针对此类集成部分进行测试。\n\n测试要求为此类被测试集成题应具有一定的结构，且属于非渐增方式集成。对于较大软件而言，集成测试方式较单元测试方式而言较为繁琐，目前多数大型软件的测试皆采取渐增方式进行测试。\n\n渐增测试方式为集成测试方式的衍生，其能够按照不同次序对软件进行测试，日常测试中，常将两类方式进行集成测试，随后按照次序展开选择。 \n\n不管是什么测试，都基本上有如下几个环节（阶段）：制订测试计划、分析设计测试、开发测试、运行测试、整理测试报告。\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);