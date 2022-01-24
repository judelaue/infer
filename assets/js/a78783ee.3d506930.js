"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1825],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4074:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"advanced-features",title:"Advanced usage"},s=void 0,p={unversionedId:"advanced-features",id:"version-1.0.0/advanced-features",title:"Advanced usage",description:"In this section we discuss how to use Infer if you wish to make contributions to",source:"@site/versioned_docs/version-1.0.0/01-advanced-features.md",sourceDirName:".",slug:"/advanced-features",permalink:"/docs/1.0.0/advanced-features",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{id:"advanced-features",title:"Advanced usage"},sidebar:"version-1.0.0/docs",previous:{title:"Recommended flow for CI",permalink:"/docs/1.0.0/steps-for-ci"},next:{title:"infer",permalink:"/docs/1.0.0/man-infer"}},c=[{value:"Structure of the results folder",id:"structure-of-the-results-folder",children:[{value:"Captured folder",id:"captured-folder",children:[],level:3}],level:2},{value:"Debug mode",id:"debug-mode",children:[],level:2},{value:"Print the specs",id:"print-the-specs",children:[],level:2},{value:"Run internal tests",id:"run-internal-tests",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section we discuss how to use Infer if you wish to make contributions to\nit or just look under the hood to learn more about how it is working. There are,\nfor instance, debug options and ways to obtain the specs from the methods."),(0,o.kt)("h2",{id:"structure-of-the-results-folder"},"Structure of the results folder"),(0,o.kt)("p",null,"After a successful Infer run, a directory is created to store the results of the\nanalysis. By default this directory is called ",(0,o.kt)("inlineCode",{parentName:"p"},"infer-out"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"infer-out\n\u251c\u2500\u2500 captured/\n\u251c\u2500\u2500 log/\n\u251c\u2500\u2500 specs/\n\u251c\u2500\u2500 report.json\n\u251c\u2500\u2500 report.txt\n\u251c\u2500\u2500 toplevel.log\n\u2514\u2500\u2500 ...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"captured/")," contains information for each file analyzed by Infer. See\n",(0,o.kt)("a",{parentName:"li",href:"advanced-features#captured-folder"},"below")," for more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"specs/")," contains the ",(0,o.kt)("a",{parentName:"li",href:"advanced-features#print-the-specs"},"specs")," of each\nfunction that was analyzed, as inferred by Infer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log/")," and toplevel.log contains logs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"report.txt")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"report.json")," contain the Infer reports in text and JSON\nformats"),(0,o.kt)("li",{parentName:"ul"},"there are other folders reserved for Infer's internal workings")),(0,o.kt)("h3",{id:"captured-folder"},"Captured folder"),(0,o.kt)("p",null,"Inside the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"infer-out/captured")," there is a folder for each captured file.\nAssume we captured a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"example.c"),". Then, Infer creates the following\nfiles inside the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"infer-out/captured/example.c/"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"example.c.cfg")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"example.c.cg")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"example.c.tenv"))),(0,o.kt)("p",null,"The files ",(0,o.kt)("inlineCode",{parentName:"p"},".cfg"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".cg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".tenv")," contain the intermediate representation of\nthat file. This data is passed to the backend of Infer, which then performs the\nanalysis. The files contain serialized OCaml data structures. The ",(0,o.kt)("inlineCode",{parentName:"p"},".cfg")," file\ncontains a control flow graph for each function or method implemented in the\nfile. The file ",(0,o.kt)("inlineCode",{parentName:"p"},".cg")," contains the call graph of the functions defined or called\nfrom that file. Finally, the file ",(0,o.kt)("inlineCode",{parentName:"p"},".tenv")," contains all the types that are\ndefined or used in the file."),(0,o.kt)("h2",{id:"debug-mode"},"Debug mode"),(0,o.kt)("p",null,"With the debug option enabled ",(0,o.kt)("inlineCode",{parentName:"p"},"infer run --debug -- <build command>"),", Infer\noutputs debug information in infer-out/log/. The option ",(0,o.kt)("inlineCode",{parentName:"p"},"--stats")," provides only\nlight debug information, and ",(0,o.kt)("inlineCode",{parentName:"p"},"--print-logs")," outputs every message on the console\nas well as in the log files."),(0,o.kt)("p",null,"In each captured folder, we obtain the file ",(0,o.kt)("inlineCode",{parentName:"p"},"icfg.dot"),", which is the graphical\nrepresentation of the file ",(0,o.kt)("inlineCode",{parentName:"p"},".cfg")," and the file ",(0,o.kt)("inlineCode",{parentName:"p"},"call_graph.dot"),", that is the\ngraphical representation of the call graph."),(0,o.kt)("p",null,"Moreover, we obtain an HTML page for each captured file inside\n",(0,o.kt)("inlineCode",{parentName:"p"},"infer-out/captured"),". This HTML file contains the source file. In each line of\nthe file there are links to the nodes of the control flow graph that correspond\nto that line of code. So one can see what the translation looks like. Moreover,\nwhen you click on those links you can see details of the symbolic execution of\nthat particular node."),(0,o.kt)("h2",{id:"print-the-specs"},"Print the specs"),(0,o.kt)("p",null,"It is also possible to print the specs created by Infer using the subcommand\n",(0,o.kt)("inlineCode",{parentName:"p"},"infer report"),". You can print one particular spec that corresponds to one\nmethod, or you can print all the specs in the results directory. Let us look at\nan example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Hello {\n    int x;\n    void setX(int newX) {\n        this.x = newX;\n    }\n}\n")),(0,o.kt)("p",null,"We run Infer on this example with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- javac Hello.java\n")),(0,o.kt)("p",null,"Infer saves the spec for the method ",(0,o.kt)("inlineCode",{parentName:"p"},"setX")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"infer-out/specs")," and we can print\nit with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"infer report infer-out/specs/Hello.setX{98B5}:void.specs\n")),(0,o.kt)("p",null,"The convention for method names in Java is ",(0,o.kt)("inlineCode",{parentName:"p"},"<class name>.<method name>"),". This\noutputs the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Procedure: void Hello.setX(int)\nvoid void Hello.setX(int)(class Hello *this, int newX)\nTimestamp: 1\nStatus: INACTIVE\nPhase: RE_EXECUTION\nDependency_map:\nTIME:0.006893 s TIMEOUT:N SYMOPS:34 CALLS:0,0\nERRORS:\n--------------------------- 1 of 1 [nvisited: 4 5 6] ---------------------------\nPRE:\nthis = val$1: ;\nnewX = val$3: ;\nthis|->{Hello.x:val$2}:\nPOST 1 of 1:\nthis = val$1: ;\nreturn = val$4: ;\nnewX = val$3: ;\nthis|->{Hello.x:newX}:\n----------------------------------------------------------------\n")),(0,o.kt)("p",null,"which expresses the fact that ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," needs to be allocated at the beginning of\nthe method, and that at the end of the method the field ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"newX"),"."),(0,o.kt)("p",null,"Moreover, you can print all the specs in the results directory with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"infer report\n")),(0,o.kt)("h2",{id:"run-internal-tests"},"Run internal tests"),(0,o.kt)("p",null,"There are many tests in the Infer code base that check that Infer behaves\ncorrectly on small program examples. This is how you'd typically run the tests;\nyou can adapt the figure ",(0,o.kt)("inlineCode",{parentName:"p"},"8")," depending on the number of cores available on your\nmachine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make -j8 test\n")))}u.isMDXComponent=!0}}]);