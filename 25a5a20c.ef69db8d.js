(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),c=(r(0),r(242)),l={title:"Buffer Overrun Analysis (InferBO)",description:"InferBO is a detector for out-of-bounds array accesses."},i={id:"checker-bufferoverrun",title:"Buffer Overrun Analysis (InferBO)",description:"InferBO is a detector for out-of-bounds array accesses.",source:"@site/docs/checker-bufferoverrun.md",permalink:"/docs/next/checker-bufferoverrun",version:"next",sidebar:"docs",previous:{title:"Biabduction",permalink:"/docs/next/checker-biabduction"},next:{title:"Config Checks between Markers",permalink:"/docs/next/checker-config-checks-between-markers"}},o=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],b={rightToc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"InferBO is a detector for out-of-bounds array accesses."),Object(c.b)("p",null,"Activate with ",Object(c.b)("inlineCode",{parentName:"p"},"--bufferoverrun"),"."),Object(c.b)("p",null,"Supported languages:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(c.b)("li",{parentName:"ul"},"Java: Yes")),Object(c.b)("p",null,"You can read about its origins in this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://research.fb.com/inferbo-infer-based-buffer-overrun-analyzer/"}),"blog post"),"."),Object(c.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(c.b)("p",null,"The following issue types are reported by this checker:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_l1"}),"BUFFER_OVERRUN_L1")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_l2"}),"BUFFER_OVERRUN_L2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_l3"}),"BUFFER_OVERRUN_L3")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_l4"}),"BUFFER_OVERRUN_L4")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_l5"}),"BUFFER_OVERRUN_L5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_s2"}),"BUFFER_OVERRUN_S2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#buffer_overrun_u5"}),"BUFFER_OVERRUN_U5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#condition_always_false"}),"CONDITION_ALWAYS_FALSE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#condition_always_true"}),"CONDITION_ALWAYS_TRUE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#inferbo_alloc_is_big"}),"INFERBO_ALLOC_IS_BIG")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#inferbo_alloc_is_negative"}),"INFERBO_ALLOC_IS_NEGATIVE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#inferbo_alloc_is_zero"}),"INFERBO_ALLOC_IS_ZERO")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#inferbo_alloc_may_be_big"}),"INFERBO_ALLOC_MAY_BE_BIG")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#inferbo_alloc_may_be_negative"}),"INFERBO_ALLOC_MAY_BE_NEGATIVE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#integer_overflow_l1"}),"INTEGER_OVERFLOW_L1")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#integer_overflow_l2"}),"INTEGER_OVERFLOW_L2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#integer_overflow_l5"}),"INTEGER_OVERFLOW_L5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#integer_overflow_u5"}),"INTEGER_OVERFLOW_U5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/all-issue-types#unreachable_code"}),"UNREACHABLE_CODE"))))}s.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(r),O=n,f=u["".concat(l,".").concat(O)]||u[O]||p[O]||c;return r?a.a.createElement(f,i({ref:t},b,{components:r})):a.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<c;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);