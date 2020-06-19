(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),c=n(9),a=(n(0),n(242)),i={title:"Self in Block",description:"An Objective-C-specific analysis to detect when a block captures `self`."},o={id:"checker-self-in-block",title:"Self in Block",description:"An Objective-C-specific analysis to detect when a block captures `self`.",source:"@site/docs/checker-self-in-block.md",permalink:"/docs/next/checker-self-in-block",version:"next",sidebar:"docs",previous:{title:"Static Initialization Order Fiasco",permalink:"/docs/next/checker-siof"},next:{title:"Starvation",permalink:"/docs/next/checker-starvation"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"An Objective-C-specific analysis to detect when a block captures ",Object(a.b)("inlineCode",{parentName:"p"},"self"),"."),Object(a.b)("p",null,"Activate with ",Object(a.b)("inlineCode",{parentName:"p"},"--self-in-block"),"."),Object(a.b)("p",null,"Supported languages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(a.b)("li",{parentName:"ul"},"Java: No")),Object(a.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(a.b)("p",null,"The following issue types are reported by this checker:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/all-issue-types#captured_strong_self"}),"CAPTURED_STRONG_SELF")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/all-issue-types#mixed_self_weakself"}),"MIXED_SELF_WEAKSELF")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/all-issue-types#multiple_weakself"}),"MULTIPLE_WEAKSELF")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/all-issue-types#strong_self_not_checked"}),"STRONG_SELF_NOT_CHECKED")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/all-issue-types#weak_self_in_no_escape_block"}),"WEAK_SELF_IN_NO_ESCAPE_BLOCK"))))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,O=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return n?c.a.createElement(O,o({ref:t},s,{components:n})):c.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);