(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(255)),r={title:"Cost: Complexity Analysis",description:"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with `infer reportdiff`."},s={unversionedId:"checker-cost",id:"checker-cost",isDocsHomePage:!1,title:"Cost: Complexity Analysis",description:"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with `infer reportdiff`.",source:"@site/docs/checker-cost.md",slug:"/checker-cost",permalink:"/docs/next/checker-cost",version:"current",sidebar:"docs",previous:{title:"Config Impact Analysis",permalink:"/docs/next/checker-config-impact-analysis"},next:{title:"Eradicate",permalink:"/docs/next/checker-eradicate"}},l=[{value:"How the analysis works",id:"how-the-analysis-works",children:[]},{value:"Types of resources/costs",id:"types-of-resourcescosts",children:[]},{value:"Examples (execution cost)",id:"examples-execution-cost",children:[]},{value:"Differential mode",id:"differential-mode",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with ",Object(i.b)("inlineCode",{parentName:"p"},"infer reportdiff"),"."),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--cost"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(i.b)("li",{parentName:"ul"},"C#/.Net: Yes"),Object(i.b)("li",{parentName:"ul"},"Erlang: Yes"),Object(i.b)("li",{parentName:"ul"},"Java: Yes")),Object(i.b)("p",null,"Cost analysis statically estimates an upper bound on the worst-case execution cost of a program (WCET). This page gives an overview of how the analysis works for ",Object(i.b)("em",{parentName:"p"},"Java")," code. The analyser also has limited support for C/C++ and Objective-C."),Object(i.b)("p",null,"To run the analysis, you can use run ",Object(i.b)("inlineCode",{parentName:"p"},"infer --cost")," (which will run cost analysis along with other\nanalyses that are run by default) or ",Object(i.b)("inlineCode",{parentName:"p"},"infer --cost-only")," (which will only run cost analysis)."),Object(i.b)("p",null,"For example, the command ",Object(i.b)("inlineCode",{parentName:"p"},"infer --cost-only -- javac File.java")," will run\ncost analysis on ",Object(i.b)("inlineCode",{parentName:"p"},"File.java"),"."),Object(i.b)("h2",{id:"how-the-analysis-works"},"How the analysis works"),Object(i.b)("p",null,"The analysis computes symbolic upper bounds on the resource usage of programs\u2014-execution cost being the main resource we consider. These costs are expressed in terms of polynomials describing the asymptotic complexity of procedures with respect to their input sizes. The main input of the analysis is the source file which is then translated to an intermediate language along with the control-flow graph of the program. The analysis then operates on this intermediate language in several phases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1) a numerical value analysis based on ",Object(i.b)("a",{parentName:"li",href:"/docs/checker-bufferoverrun"},"InferBo")," computes value ranges for instructions accessing memory"),Object(i.b)("li",{parentName:"ul"},"2) a loop bound analysis determines upper bounds for the number of iterations of loops and generates constraints for nodes in the control-flow graph"),Object(i.b)("li",{parentName:"ul"},"3) a constraint solving step resolves the constraints generated in the second step and computes an upper bound on the execution cost.")),Object(i.b)("p",null,"Most ideas behind this analysis is based on Stefan Bydge's PhD thesis ",Object(i.b)("a",{parentName:"p",href:"https://www.semanticscholar.org/paper/Static-WCET-Analysis-Based-on-Abstract-and-Counting-Bygde/ee5157164d497725c1f42dc6c475a59a87c99957"},"Static WCET Analysis based on Abstract Interpretation and Counting of Elements"),"."),Object(i.b)("p",null,"The analysis computes two things for each node in the CFG:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the cost of its instructions, i.e. how much one execution of this node costs,"),Object(i.b)("li",{parentName:"ul"},"how many times it can be executed (part 2 above)")),Object(i.b)("p",null,"The total cost of the node is the scalar product of these two vectors. Then, these are passed to a constraint solver (part 3 above) that computes the execution cost of the procedure based on the incoming/outgoing edges."),Object(i.b)("p",null,"The results of the analysis are written into ",Object(i.b)("inlineCode",{parentName:"p"},"costs-report.json")," where for each procedure, we record the actual polynomial (for the exection cost) along with the degree of the polynomial, the procedure name, line number etc."),Object(i.b)("h2",{id:"types-of-resourcescosts"},"Types of resources/costs"),Object(i.b)("p",null,"Although the analysis was initially designed to reason about the execution cost, it is not limited to inferring bounds for just execution cost. In order to statically detect regressions in other types of resource usage, we have generalized the analysis to account costs for different types of resources such as Objective-C's autorelease pool size or memory allocations."),Object(i.b)("p",null,"Currently, there are three types of resources/costs the analysis operates on:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1) execution cost"),Object(i.b)("li",{parentName:"ul"},"2) allocation cost"),Object(i.b)("li",{parentName:"ul"},"3) autoreleasepool size")),Object(i.b)("p",null,"For 1), the analysis assumes a simple sequential model with an abstract cost semantics: each primitive instruction in the intermediate language (SIL) is assumed to incur a unit execution cost. "),Object(i.b)("p",null,"For 2), the analysis only incurs costs for primitive operations that allocate memory (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"new"),"). This is in experimental mode and hence the results are not written into ",Object(i.b)("inlineCode",{parentName:"p"},"costs-report.json"),". "),Object(i.b)("p",null,"For 3), the analysis incurs a cost when objects are added to Objective-C's ",Object(i.b)("inlineCode",{parentName:"p"},"@autoreleasepool"),". This usually happens in two cases: 1) when ",Object(i.b)("inlineCode",{parentName:"p"},"autorelease")," is called explicitly in non-ARC compiled code and 2) when an (autoreleased) object pointer is returned from non-ARC compiled callee to ARC compiled caller, and vice-versa. "),Object(i.b)("h2",{id:"examples-execution-cost"},"Examples (execution cost)"),Object(i.b)("p",null,"For instance, assume that we had the following program:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n  }\n}\n")),Object(i.b)("p",null,"Infer statically infers a polynomial (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"8 \xb7 |list|+16"),") for the execution cost of this program by giving each instruction in Infer's intermediate language a symbolic cost (where ",Object(i.b)("inlineCode",{parentName:"p"},"|...|")," refers to the length of a list). Here---overlooking the actual constants---the analysis infers that this program\u2019s asymptotic complexity is ",Object(i.b)("inlineCode",{parentName:"p"},"O(|list|)"),", that is loop is linear in the size of its input list. Then, at diff time, if a developer modifies this code to,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n    foo(i); // newly added function call\n  }\n}\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," has a linear cost in its parameter, then Infer automatically detects that the complexity of loop has increased from ",Object(i.b)("inlineCode",{parentName:"p"},"O(|list|)")," to ",Object(i.b)("inlineCode",{parentName:"p"},"O(|list|^2)")," and then reports an ",Object(i.b)("a",{parentName:"p",href:"/docs/next/all-issue-types#execution_time_complexity_increase"},Object(i.b)("inlineCode",{parentName:"a"},"EXECUTION_TIME_COMPLEXITY_INCREASE"))," issue."),Object(i.b)("h2",{id:"differential-mode"},"Differential mode"),Object(i.b)("p",null,"Unlike other Infer analyses (which on reports found issues/bugs in ",Object(i.b)("inlineCode",{parentName:"p"},"report.json")," when running infer once), cost analysis also has a special mode that reports an issue for differential analysis (i.e. when comparing the analysis results on the original and the modified files). For each procedure, ",Object(i.b)("inlineCode",{parentName:"p"},"costs-report.json")," includes the actual polynomial (for the exection cost) along with the degree of the polynomial, the procedure name, line number etc. Then, in the differential mode, these ",Object(i.b)("inlineCode",{parentName:"p"},"costs-report.json")," files are compared. "),Object(i.b)("p",null,"Differential cost analysis in action:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"first run infer's cost analysis on ",Object(i.b)("inlineCode",{parentName:"li"},"File.java")," and copy ",Object(i.b)("inlineCode",{parentName:"li"},"inter-out/costs-report.json")," to ",Object(i.b)("inlineCode",{parentName:"li"},"previous-costs-report.json")," (Note that the file should be copied outside the result directory because the directory will be removed in the second infer run.)"),Object(i.b)("li",{parentName:"ul"},"modify ",Object(i.b)("inlineCode",{parentName:"li"},"File.java")," as shown above"),Object(i.b)("li",{parentName:"ul"},"re-run infer on ",Object(i.b)("inlineCode",{parentName:"li"},"File.java")," and copy ",Object(i.b)("inlineCode",{parentName:"li"},"infer-out/costs-report.json")," to ",Object(i.b)("inlineCode",{parentName:"li"},"current-costs-report.json")),Object(i.b)("li",{parentName:"ul"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"infer reportdiff --costs-current current-costs-report.json --costs-previous previous-costs-report.json"),"."),Object(i.b)("li",{parentName:"ul"},"Inspect ",Object(i.b)("inlineCode",{parentName:"li"},"infer-out/differential/introduced.json")," to see the newly found complexity increase issue(s).")),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("p",null,"There are a number of known limitations to the design of the static cost analysis:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/docs/checker-bufferoverrun"},"InferBo")," 's intervals are limited to affine expressions, not full-blown polynomials. Hence, we can not automatically infer bounds involving square roots.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We do not handle recursion.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If the execution cost of a program depends on an unknown call (e.g. due to iterating over an unmodeled library call), we can't compute a static upper bound and return T (unknown cost). See ",Object(i.b)("a",{parentName:"p",href:"/docs/next/all-issue-types#infinite_execution_time"},"INFINITE_EXECUTION_COST")," for details."))),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#autoreleasepool_size_complexity_increase"},"AUTORELEASEPOOL_SIZE_COMPLEXITY_INCREASE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#autoreleasepool_size_complexity_increase_ui_thread"},"AUTORELEASEPOOL_SIZE_COMPLEXITY_INCREASE_UI_THREAD")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#autoreleasepool_size_unreachable_at_exit"},"AUTORELEASEPOOL_SIZE_UNREACHABLE_AT_EXIT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#execution_time_complexity_increase"},"EXECUTION_TIME_COMPLEXITY_INCREASE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#execution_time_complexity_increase_ui_thread"},"EXECUTION_TIME_COMPLEXITY_INCREASE_UI_THREAD")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#execution_time_unreachable_at_exit"},"EXECUTION_TIME_UNREACHABLE_AT_EXIT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#expensive_autoreleasepool_size"},"EXPENSIVE_AUTORELEASEPOOL_SIZE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#expensive_execution_time"},"EXPENSIVE_EXECUTION_TIME")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#infinite_autoreleasepool_size"},"INFINITE_AUTORELEASEPOOL_SIZE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#infinite_execution_time"},"INFINITE_EXECUTION_TIME"))))}p.isMDXComponent=!0}}]);