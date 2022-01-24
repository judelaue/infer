"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2476],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=c,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7764:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(7462),c=r(3366),o=(r(7294),r(3905)),a=["components"],i={title:"Parameter Not Null Checked",description:"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first."},l=void 0,u={unversionedId:"checker-parameter-not-null-checked",id:"checker-parameter-not-null-checked",title:"Parameter Not Null Checked",description:"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first.",source:"@site/docs/checker-parameter-not-null-checked.md",sourceDirName:".",slug:"/checker-parameter-not-null-checked",permalink:"/docs/next/checker-parameter-not-null-checked",tags:[],version:"current",frontMatter:{title:"Parameter Not Null Checked",description:"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first."},sidebar:"docs",previous:{title:"Loop Hoisting",permalink:"/docs/next/checker-loop-hoisting"},next:{title:"`printf()` Argument Types",permalink:"/docs/next/checker-printf-args"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[],level:2}],p={toc:s};function f(e){var t=e.components,r=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first."),(0,o.kt)("p",null,"Activate with ",(0,o.kt)("inlineCode",{parentName:"p"},"--parameter-not-null-checked"),"."),(0,o.kt)("p",null,"Supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,o.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,o.kt)("li",{parentName:"ul"},"Erlang: No"),(0,o.kt)("li",{parentName:"ul"},"Java: No")),(0,o.kt)("p",null,"This checker checks that an Objective-C block that is passed as a parameter\nto a function or method is checked for ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," before it's being executed."),(0,o.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,o.kt)("p",null,"The following issue types are reported by this checker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#block_parameter_not_null_checked"},"BLOCK_PARAMETER_NOT_NULL_CHECKED"))))}f.isMDXComponent=!0}}]);