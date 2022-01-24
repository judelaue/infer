"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5993],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,b=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2010:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"about-Infer",title:"About Infer"},s=void 0,l={unversionedId:"about-Infer",id:"about-Infer",title:"About Infer",description:"Infer is a static program analyzer for Java, C, and Objective-C, written in",source:"@site/docs/02-about-infer.md",sourceDirName:".",slug:"/about-Infer",permalink:"/docs/next/about-Infer",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"about-Infer",title:"About Infer"},sidebar:"docs",previous:{title:"Uninitialized Value",permalink:"/docs/next/checker-uninit"},next:{title:"Separation logic and bi-abduction",permalink:"/docs/next/separation-logic-and-bi-abduction"}},u=[],f={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Infer is a static program analyzer for Java, C, and Objective-C, written in\n",(0,a.kt)("a",{parentName:"p",href:"https://ocaml.org/"},"OCaml"),". Infer is deployed within Facebook and it is running\ncontinuously to verify select properties of every code modification for the main\nFacebook apps for Android and iOS, Facebook Messenger, Instagram, and other\napps. It can be used for other code too: Infer can also analyze C code, and Java\ncode that is not Android. At present Infer is tracking problems caused by null\npointer dereferences and resource and memory leaks, which cause some of the more\nimportant problems on mobile."),(0,a.kt)("p",null,"Infer came to Facebook with the acquisition of the verification startup\nMonoidics in 2013. Monoidics was itself based on recent academic research,\nparticularly on separation logic and bi-abduction."),(0,a.kt)("p",null,"We have broadened Infer's scope within the past few years. We now refer to the\noriginal separation logic analysis as Infer.SL. We now also have Infer.AI, a\ngeneral analysis framework which is an interface to the modular analysis engine\nwhich can be used by other kinds of program analyses (technically, called\n''abstract interpretations'', hence the AI monicker). This added generality has\nbeen used to develop instantiations of Infer.AI for security, concurrency and in\nother domains. Additionally, we have Infer linters for describing shallow\nsyntactic analyses, using the AL language, because sometimes linters are just\nwhat you need."))}p.isMDXComponent=!0}}]);