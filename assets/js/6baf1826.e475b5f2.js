"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3838],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return s}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),f=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},l=function(e){var n=f(e.components);return t.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=f(r),s=o,d=m["".concat(a,".").concat(s)]||m[s]||p[s]||i;return r?t.createElement(d,u(u({ref:n},l),{},{components:r})):t.createElement(d,u({ref:n},l))}));function s(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var f=2;f<i;f++)u[f]=r[f];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2460:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(7294);function o(e){var n=e.url,r=(0,t.useState)({__html:""}),o=r[0],i=r[1];return(0,t.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){return i({__html:e})}))}),[n]),t.createElement("div",{dangerouslySetInnerHTML:o})}},3416:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),u=r(2460),c=["components"],a={id:"man-infer-debug",title:"infer debug"},f=void 0,l={unversionedId:"man-infer-debug",id:"version-1.0.0/man-infer-debug",title:"infer debug",description:"",source:"@site/versioned_docs/version-1.0.0/man-infer-debug.md",sourceDirName:".",slug:"/man-infer-debug",permalink:"/docs/1.0.0/man-infer-debug",tags:[],version:"1.0.0",frontMatter:{id:"man-infer-debug",title:"infer debug"},sidebar:"version-1.0.0/docs",previous:{title:"infer compile",permalink:"/docs/1.0.0/man-infer-compile"},next:{title:"infer explore",permalink:"/docs/1.0.0/man-infer-explore"}},p=[],m={toc:p};function s(e){var n=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u.Z,{url:"/man/1.0.0/infer-debug.1.html",mdxType:"HtmlWrap"}))}s.isMDXComponent=!0}}]);