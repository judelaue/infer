"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9900],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,v=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(v,a(a({ref:n},s),{},{components:t})):r.createElement(v,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6766:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={title:"Uninitialized Value",description:"Warns when values are used before having been initialized."},u=void 0,c={unversionedId:"checker-uninit",id:"version-1.1.0/checker-uninit",title:"Uninitialized Value",description:"Warns when values are used before having been initialized.",source:"@site/versioned_docs/version-1.1.0/checker-uninit.md",sourceDirName:".",slug:"/checker-uninit",permalink:"/docs/checker-uninit",tags:[],version:"1.1.0",frontMatter:{title:"Uninitialized Value",description:"Warns when values are used before having been initialized."},sidebar:"version-1.1.0/docs",previous:{title:"Topl",permalink:"/docs/checker-topl"},next:{title:"About Infer",permalink:"/docs/about-Infer"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[],level:2}],p={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Warns when values are used before having been initialized."),(0,o.kt)("p",null,"Activate with ",(0,o.kt)("inlineCode",{parentName:"p"},"--uninit"),"."),(0,o.kt)("p",null,"Supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,o.kt)("li",{parentName:"ul"},"Java: No"),(0,o.kt)("li",{parentName:"ul"},"C#/.Net: No")),(0,o.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,o.kt)("p",null,"The following issue types are reported by this checker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/all-issue-types#uninitialized_value"},"UNINITIALIZED_VALUE"))))}f.isMDXComponent=!0}}]);