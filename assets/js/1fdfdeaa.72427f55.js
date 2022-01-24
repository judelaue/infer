"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8309],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2401:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety."},s=void 0,c={unversionedId:"checker-biabduction",id:"checker-biabduction",title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety.",source:"@site/docs/checker-biabduction.md",sourceDirName:".",slug:"/checker-biabduction",permalink:"/docs/next/checker-biabduction",tags:[],version:"current",frontMatter:{title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety."},sidebar:"docs",previous:{title:"Annotation Reachability",permalink:"/docs/next/checker-annotation-reachability"},next:{title:"Buffer Overrun Analysis (InferBO)",permalink:"/docs/next/checker-bufferoverrun"}},u=[{value:"List of Issue Types",id:"list-of-issue-types",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This analysis deals with a range of issues, many linked to memory safety."),(0,i.kt)("p",null,"Activate with ",(0,i.kt)("inlineCode",{parentName:"p"},"--biabduction"),"."),(0,i.kt)("p",null,"Supported languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,i.kt)("li",{parentName:"ul"},"C#/.Net: Yes"),(0,i.kt)("li",{parentName:"ul"},"Erlang: No"),(0,i.kt)("li",{parentName:"ul"},"Java: Yes")),(0,i.kt)("p",null,"Read more about its foundations in the ",(0,i.kt)("a",{parentName:"p",href:"separation-logic-and-bi-abduction"},"Separation Logic and Biabduction page"),"."),(0,i.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,i.kt)("p",null,"The following issue types are reported by this checker:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#biabduction_memory_leak"},"BIABDUCTION_MEMORY_LEAK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#biabduction_retain_cycle"},"BIABDUCTION_RETAIN_CYCLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#dangling_pointer_dereference"},"DANGLING_POINTER_DEREFERENCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#divide_by_zero"},"DIVIDE_BY_ZERO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#empty_vector_access"},"EMPTY_VECTOR_ACCESS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#ivar_not_null_checked"},"IVAR_NOT_NULL_CHECKED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#null_dereference"},"NULL_DEREFERENCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#parameter_not_null_checked"},"PARAMETER_NOT_NULL_CHECKED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#premature_nil_termination_argument"},"PREMATURE_NIL_TERMINATION_ARGUMENT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#resource_leak"},"RESOURCE_LEAK"))))}f.isMDXComponent=!0}}]);