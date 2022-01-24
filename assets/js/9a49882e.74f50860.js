"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4424],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Cost: Runtime Complexity Analysis",description:"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with `infer reportdiff`."},l=void 0,c={unversionedId:"checker-cost",id:"version-1.0.0/checker-cost",title:"Cost: Runtime Complexity Analysis",description:"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with `infer reportdiff`.",source:"@site/versioned_docs/version-1.0.0/checker-cost.md",sourceDirName:".",slug:"/checker-cost",permalink:"/docs/1.0.0/checker-cost",tags:[],version:"1.0.0",frontMatter:{title:"Cost: Runtime Complexity Analysis",description:"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with `infer reportdiff`."},sidebar:"version-1.0.0/docs",previous:{title:"Config Checks between Markers",permalink:"/docs/1.0.0/checker-config-checks-between-markers"},next:{title:"Eradicate",permalink:"/docs/1.0.0/checker-eradicate"}},p=[{value:"How the analysis works",id:"how-the-analysis-works",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2},{value:"List of Issue Types",id:"list-of-issue-types",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with ",(0,o.kt)("inlineCode",{parentName:"p"},"infer reportdiff"),"."),(0,o.kt)("p",null,"Activate with ",(0,o.kt)("inlineCode",{parentName:"p"},"--cost"),"."),(0,o.kt)("p",null,"Supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,o.kt)("li",{parentName:"ul"},"Java: Yes")),(0,o.kt)("p",null,"Cost analysis statically estimates an upper bound on the worst-case execution cost of a program (WCET). This page gives an overview of how the analysis works for ",(0,o.kt)("em",{parentName:"p"},"Java")," code. The analyser also has limited support for C/C++ and Objective-C."),(0,o.kt)("p",null,"To run the analysis, you can use run ",(0,o.kt)("inlineCode",{parentName:"p"},"infer --cost")," (which will run cost analysis along with other\nanalyses that are run by default) or ",(0,o.kt)("inlineCode",{parentName:"p"},"infer --cost-only")," (which will only run cost analysis)."),(0,o.kt)("p",null,"For example, the command ",(0,o.kt)("inlineCode",{parentName:"p"},"infer --cost-only -- javac File.java")," will run\ncost analysis on File.java."),(0,o.kt)("h2",{id:"how-the-analysis-works"},"How the analysis works"),(0,o.kt)("p",null,"Most ideas behind this analysis is based on Stefan Bydge's PhD thesis ",(0,o.kt)("a",{parentName:"p",href:"https://www.semanticscholar.org/paper/Static-WCET-Analysis-Based-on-Abstract-and-Counting-Bygde/ee5157164d497725c1f42dc6c475a59a87c99957"},"Static WCET Analysis based on Abstract Interpretation and Counting of Elements"),"."),(0,o.kt)("p",null,"The analysis computes two things for each node in the CFG:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the cost of its instructions, i.e. how much one execution of this node costs,"),(0,o.kt)("li",{parentName:"ul"},"how many times it can be executed.")),(0,o.kt)("p",null,"The total cost of the node is the scalar product of these two vectors. Then, these are passed to a constraint solver that computes the execution cost of the procedure based on the incoming/outgoing edges."),(0,o.kt)("p",null,"At a high level, the analysis has three steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Choose control variables that allude to "how many times a loop may iterate".'),(0,o.kt)("li",{parentName:"ul"},"Get abstract ranges of the control variables from ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/checker-bufferoverrun"},"InferBO")," (a numerical analysis that infers symbolic intervals)"),(0,o.kt)("li",{parentName:"ul"},"Construct complexity polynomials for loops and functions by via a constraint solving algorithm.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Infer\u2019s cost analysis statically estimates the execution cost of a\nprogram without running the code. For instance, assume that we had the\nfollowing program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n  }\n}\n")),(0,o.kt)("p",null,"For this program, Infer statically infers a polynomial (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"8|list|+16"),") for the execution cost of this program by giving each instruction in Infer's intermediate language a symbolic cost (where ",(0,o.kt)("inlineCode",{parentName:"p"},"|.|")," refers to the length of a list). Here---overlooking the actual constants---the analysis infers that this program\u2019s asymptotic complexity is ",(0,o.kt)("inlineCode",{parentName:"p"},"O(|list|)"),", that is loop is linear in the size of its input list. Then, at diff time, if a developer modifies this code to,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n    foo(i); // newly added function call\n  }\n}\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," has a linear cost in its parameter, then Infer automatically detects that the complexity of loop has increased from ",(0,o.kt)("inlineCode",{parentName:"p"},"O(|list|)")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"O(|list|^2)")," and then reports an ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.0/all-issue-types#execution_time_complexity_increase"},(0,o.kt)("inlineCode",{parentName:"a"},"EXECUTION_TIME_COMPLEXITY_INCREASE"))," issue."),(0,o.kt)("p",null,"Unlike other Infer analyses (which report found issues/bugs when running infer once), cost analysis only reports an issue for differential analysis (i.e. when comparing the analysis results on the original and the modified files). Instead, infer writes the execution cost of the program into ",(0,o.kt)("inlineCode",{parentName:"p"},"infer-out/costs-report.json")," file. For each procedure, ",(0,o.kt)("inlineCode",{parentName:"p"},"costs-report.json")," includes the actual polynomial (for the exection cost) along with the degree of the polynomial, the procedure name, line number etc."),(0,o.kt)("p",null,"Differential cost analysis in action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"first run infer's cost analysis on ",(0,o.kt)("inlineCode",{parentName:"li"},"File.java")," and rename ",(0,o.kt)("inlineCode",{parentName:"li"},"costs-report.json")," (which is in ",(0,o.kt)("inlineCode",{parentName:"li"},"/infer-out"),") to ",(0,o.kt)("inlineCode",{parentName:"li"},"previous-costs-report.json")),(0,o.kt)("li",{parentName:"ul"},"modify the function as shown above"),(0,o.kt)("li",{parentName:"ul"},"re-run infer on ",(0,o.kt)("inlineCode",{parentName:"li"},"File.java")," and rename  ",(0,o.kt)("inlineCode",{parentName:"li"},"costs-report.json")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"current-costs-report.json")),(0,o.kt)("li",{parentName:"ul"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"infer reportdiff --costs-current current-costs-report.json  --costs-previous current-costs-report"),"."),(0,o.kt)("li",{parentName:"ul"},"Inspect ",(0,o.kt)("inlineCode",{parentName:"li"},"infer-out/differential/introduced.json")," to see the newly found complexity increase issue(s).")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"There are a number of known limitations to the design of the static cost analysis:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"InferBo's intervals are limited to affine expressions, not full-blown polynomials. Hence, we can automatically infer bounds involving square roots.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We do not handle recursion.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the execution cost of a program depends on an unknown call (e.g. an unmodeled library calls), we can't compute a static upper bound and return T (unknown cost)."))),(0,o.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,o.kt)("p",null,"The following issue types are reported by this checker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#autoreleasepool_size_complexity_increase"},"AUTORELEASEPOOL_SIZE_COMPLEXITY_INCREASE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#autoreleasepool_size_complexity_increase_ui_thread"},"AUTORELEASEPOOL_SIZE_COMPLEXITY_INCREASE_UI_THREAD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#autoreleasepool_size_unreachable_at_exit"},"AUTORELEASEPOOL_SIZE_UNREACHABLE_AT_EXIT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#execution_time_complexity_increase"},"EXECUTION_TIME_COMPLEXITY_INCREASE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#execution_time_complexity_increase_ui_thread"},"EXECUTION_TIME_COMPLEXITY_INCREASE_UI_THREAD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#execution_time_unreachable_at_exit"},"EXECUTION_TIME_UNREACHABLE_AT_EXIT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#infinite_autoreleasepool_size"},"INFINITE_AUTORELEASEPOOL_SIZE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#infinite_execution_time"},"INFINITE_EXECUTION_TIME"))))}m.isMDXComponent=!0}}]);