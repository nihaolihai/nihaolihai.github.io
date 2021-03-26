(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{564:function(t,_,v){"use strict";v.r(_);var r=v(6),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"大数据预处理之数据集成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大数据预处理之数据集成"}},[t._v("#")]),t._v(" 大数据预处理之数据集成")]),t._v(" "),v("p",[t._v("在数据集成过程中，需要考虑解决以下几个问题。")]),t._v(" "),v("ol",[v("li",[t._v("模式集成问题")])]),t._v(" "),v("p",[t._v("模式集成问题就是如何使来自多个数据源的现实世界的实体相互匹配，这其中就涉及实体识别问题。")]),t._v(" "),v("p",[t._v("例如，如何确定一个数据库中的“custom_id”与另一个数据库中的“custome_number”是否表示同一实体。")]),t._v(" "),v("p",[t._v("数据库与数据仓库通常包含元数据，这些元数据可以帮助避免在模式集成时发生错误。")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("冗余问题")])]),t._v(" "),v("p",[t._v("冗余问题是数据集成中经常发生的另一个问题。若一个属性可以从其他属性中推演出来，那这个属性就是冗余属性。")]),t._v(" "),v("p",[t._v("例如，一个顾客数据表中的平均月收入属性就是冗余属性，显然它可以根据月收入属性计算出来。此外，属性命名的不一致也会导致集成后的数据集出现数据冗余问题。")]),t._v(" "),v("p",[t._v("利用相关分析可以帮助发现一些数据冗余情况。")]),t._v(" "),v("p",[t._v("例如，给定两个属性 A 和 B,则根据这两个属性的数值可分析出这两个属性间的相互关系。")]),t._v(" "),v("p",[t._v("如果两个属性之间的关联值 r>0,则说明两个属性之间是正关联，也就是说，若 A 增加，B 也增加。r 值越大，说明属性 A、E 的正关联关系越紧密。")]),t._v(" "),v("p",[t._v("如果关联值产 0,则说明属性 A、B 相互独立，两者之间没有关系。如果 r<0,则说明属性 A、B之间是负关联，也就是说，若 A 增加，B 就减少。r 的绝对值越大，说明属性 A、B 的负关联关系越紧密。")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("数据值冲突检测与消除问题")])]),t._v(" "),v("p",[t._v("在现实世界实体中，来自不同数据源的属性值或许不同。产生这种问题的原因可能是表示、比例尺度，或编码的差异等。")]),t._v(" "),v("p",[t._v("例如，重量属性在一个系统中采用公制，而在另一个系统中却采用英制；价格属性在不同地点采用不同的货币单位。这些语义的差异为数据集成带来许多问题。")])])}),[],!1,null,null,null);_.default=s.exports}}]);