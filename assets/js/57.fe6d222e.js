(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{299:function(t,s,n){"use strict";n.r(s);var a=n(16),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"自定义id生成器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义id生成器","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义ID生成器")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[t._v("自3.2.1开始，配合ID_WORKER，ID_WORKER_STR一起使用。")]),t._v(" "),n("p",[t._v("默认使用雪花算法(com.baomidou.mybatisplus.core.incrementer.SnowflakeIdGenerator)。")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//方式一")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("CustomIdGenerator")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("IdGenerator")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("nextId")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//实现自定义ID生成...")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("currentTimeMillis")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//方式二")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" IdGenerator "),n("span",{attrs:{class:"token function"}},[t._v("idGenerator")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("CustomIdGenerator")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])},[],!1,null,null,null);e.options.__file="id-generator.md";s.default=e.exports}}]);