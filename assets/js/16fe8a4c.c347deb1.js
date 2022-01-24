"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7482],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7190:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"getting-started",title:"Getting started with Infer"},s=void 0,u={unversionedId:"getting-started",id:"getting-started",title:"Getting started with Infer",description:"Get Infer",source:"@site/docs/00-getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/next/getting-started",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"getting-started",title:"Getting started with Infer"},sidebar:"docs",next:{title:"Hello, World!",permalink:"/docs/next/hello-world"}},c=[{value:"Get Infer",id:"get-infer",children:[],level:2},{value:"Try Infer in your browser",id:"try-infer-in-your-browser",children:[],level:2}],f={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-infer"},"Get Infer"),(0,a.kt)("p",null,"You can use Homebrew (Mac only), our binary releases, build infer from source,\nor use our Docker image."),(0,a.kt)("p",null,"On Mac, the simplest way is to use ",(0,a.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew"),". Type this into a\nterminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install infer\n")),(0,a.kt)("p",null,"On Linux, or if you do not wish to use Homebrew on Mac, use our latest\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/releases/latest"},"binary release"),". Download\nthe tarball then extract it anywhere on your system to start using infer. For\nexample, this downloads infer in /opt on Linux (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"VERSION")," with the\nlatest release, eg ",(0,a.kt)("inlineCode",{parentName:"p"},"VERSION=1.0.0"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'VERSION=0.XX.Y; \\\ncurl -sSL "https://github.com/facebook/infer/releases/download/v$VERSION/infer-linux64-v$VERSION.tar.xz" \\\n| sudo tar -C /opt -xJ && \\\nsudo ln -s "/opt/infer-linux64-v$VERSION/bin/infer" /usr/local/bin/infer\n')),(0,a.kt)("p",null,"If the binaries do not work for you, or if you would rather build infer from\nsource, follow the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/INSTALL.md#install-infer-from-source"},"install from source"),"\ninstructions to install Infer on your system."),(0,a.kt)("p",null,"Alternatively, use our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/docker"},"Docker images"),"."),(0,a.kt)("h2",{id:"try-infer-in-your-browser"},"Try Infer in your browser"),(0,a.kt)("p",null,"Try Infer on a small example on\n",(0,a.kt)("a",{parentName:"p",href:"https://codeboard.io/projects/11587?view=2.1-21.0-22.0"},"Codeboard"),"."))}p.isMDXComponent=!0}}]);