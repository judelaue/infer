"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9289],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"absint-framework",title:"Building checkers with the Infer.AI framework"},l=void 0,c={unversionedId:"absint-framework",id:"absint-framework",title:"Building checkers with the Infer.AI framework",description:"Infer.AI is a framework for quickly developing abstract interpretation-based",source:"@site/docs/04-absint-framework.md",sourceDirName:".",slug:"/absint-framework",permalink:"/docs/next/absint-framework",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"absint-framework",title:"Building checkers with the Infer.AI framework"},sidebar:"docs",previous:{title:"Separation logic and bi-abduction",permalink:"/docs/next/separation-logic-and-bi-abduction"},next:{title:"Infer Internal OCaml Modules API",permalink:"/docs/next/internal-API"}},p=[{value:"By example: intraprocedural analysis",id:"by-example-intraprocedural-analysis",children:[],level:2},{value:"Error reporting",id:"error-reporting",children:[],level:2},{value:"By example: interprocedural analysis",id:"by-example-interprocedural-analysis",children:[],level:2}],u={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Infer.AI is a framework for quickly developing abstract interpretation-based\ncheckers (intraprocedural or interprocedural). You define only:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An abstract domain (type of abstract state plus ",(0,o.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,o.kt)("inlineCode",{parentName:"li"},"join"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"widen"),"\noperations)"),(0,o.kt)("li",{parentName:"ol"},"Transfer functions (a transformer that takes an abstract state as input and\nproduces an abstract state as output)")),(0,o.kt)("p",null,"What you get in exchange is an analysis that can run on all of the\nlanguages Infer supports (C, Objective-C, C++, and Java)!"),(0,o.kt)("p",null,"This guide covers how to use the framework. For background on why we built the\nframework and how it works, check out these\n",(0,o.kt)("a",{target:"_blank",href:n(1648).Z},"slides")," from a PLDI\n2017 tutorial and this\n",(0,o.kt)("a",{parentName:"p",href:"https://atscaleconference.com/videos/getting-the-most-out-of-static-analyzers"},"talk"),"\nfrom @Scale2016."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you feel like coding instead of reading, a great way to get started with\nInfer.AI is to go through the lab exercise\n",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/facebook/infer/blob/main/infer/src/labs/README.md"},"here"),".")),(0,o.kt)("h2",{id:"by-example-intraprocedural-analysis"},"By example: intraprocedural analysis"),(0,o.kt)("p",null,"This section helps you get started ASAP if you already understand\n",(0,o.kt)("a",{parentName:"p",href:"http://www.di.ens.fr/~cousot/AI/IntroAbsInt.html"},"abstract interpretation")," (or\ndon't, but are feeling bold)."),(0,o.kt)("p",null,"Take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/checkers/liveness.ml"},"liveness.ml"),".\nThis code is performing a compilers-101 style liveness analysis over\n",(0,o.kt)("a",{parentName:"p",href:"#ir-basics-sil-cfgs-tenvs-procdescs-and-procnames"},"SIL"),", Infer's intermediate\nlanguage. Since this code is fairly small and you should already understand what\nit's trying to do, it's a fairly good place to look in order to understand both\nhow to use the abstract interpretation framework and what SIL is."),(0,o.kt)("p",null,"There are basically three important bits here: defining the domain, defining the\ntransfer functions, and then passing the pieces to the framework to create an an\nanalysis. Let's break down the third bit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-OCaml"},"module CFG = ProcCfg.OneInstrPerNode (ProcCfg.Backward (ProcCfg.Exceptional))\nmodule CheckerAnalyzer =\n  AbstractInterpreter.MakeRPO (TransferFunctions (CheckerMode) (CFG))\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcCfg.Backward (ProcCfg.Exceptional)"),' part says: "I want the direction of\niteration to be backward" (since liveness is a backward analysis), and "I want\nto the analysis to follow exceptional edges". For a forward analysis that\nignores exceptional edges, you would do ',(0,o.kt)("inlineCode",{parentName:"p"},"ProcCfg.Normal")," instead (and many other\ncombinations are possible; take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/absint/ProcCfg.mli"},"ProcCfg.mli"),"\nfor more). And finally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFunctions"),' part says "Use the transfer\nfunctions I defined above".'),(0,o.kt)("p",null,"Now you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckerAnalyzer")," module that exposes useful functions\nlike\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/absint/AbstractInterpreter.mli#L30"},(0,o.kt)("inlineCode",{parentName:"a"},"compute_post")),"\n(take a procedure as input and compute a postcondition) and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/absint/AbstractInterpreter.mli#L36"},(0,o.kt)("inlineCode",{parentName:"a"},"exec_pdesc")),"\n(take a procedure and compute an invariant map from node id's to the\npre/post at each node). The next step is to hook your checker up to\nthe Infer command-line interface (CLI). For the liveness analysis, you\nwould do this by exposing a function for running the checker on a\nsingle procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-OCaml"},'let checker ({IntraproceduralAnalysis.proc_desc; err_log} as analysis_data) =\n  match Analyzer.compute_post analysis_data ~initial:Domain.empty with\n  | Some post ->\n      Logging.progress "Computed post %a for %a"\n        Domain.pp post Procname.pp (Procdesc.get_proc_name proc_desc);\n  | None -> ()\n')),(0,o.kt)("p",null,"and then adding ",(0,o.kt)("inlineCode",{parentName:"p"},"Liveness.checker")," to the list of registered checkers\nin\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/backend/registerCheckers.ml"},"registerCheckers.ml"),'\n(search for "Liveness").'),(0,o.kt)("p",null,"you can then run ",(0,o.kt)("inlineCode",{parentName:"p"},"infer run --liveness-only -- <your_build_command>")," to run your\nchecker on real code. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/analyzing-apps-or-projects"},"here")," for more\ndetails on the build systems supported by Infer."),(0,o.kt)("p",null,"Other examples of simple intraprocedural checkers are\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/checkers/addressTaken.ml"},"addressTaken.ml"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/checkers/Siof.ml"},"Siof.ml"),"."),(0,o.kt)("h2",{id:"error-reporting"},"Error reporting"),(0,o.kt)("p",null,"Useful analyses have output. Basic printing to stderr or stderr is\ngood for debugging, but to report a programmer-readable error that is\ntied to a source code location, you'll want to use\n",(0,o.kt)("a",{parentName:"p",href:"pathname:///odoc/next/infer/Absint/Reporting/index.html#val-log_issue"},(0,o.kt)("inlineCode",{parentName:"a"},"Reporting.log_issue")),"."),(0,o.kt)("h2",{id:"by-example-interprocedural-analysis"},"By example: interprocedural analysis"),(0,o.kt)("p",null,'Let\'s assume you have already read and understood the "intraprocedural analysis"\nsection and have an intraprocedural checker. The abstract interpretation\nframework makes it easy to convert your intraprocedural analysis into a\n',(0,o.kt)("em",{parentName:"p"},"modular")," interprocedural analysis. Let me emphasize the ",(0,o.kt)("em",{parentName:"p"},"modular")," point once\nmore; global analyses cannot be expressed in this framework."),(0,o.kt)("p",null,"To make your checker interprocedural, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the type of procedure summaries for your analysis and let\nregisterCheckers.ml know that your checker is interprocedural")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add logic for (a) using summaries in your transfer functions and (b)\nconverting your intraprocedural abstract state to a summary."))),(0,o.kt)("p",null,"A good example to look at here is\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/checkers/Siof.ml"},"Siof.ml"),".\nStep (1) is just:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-OCaml"},"(* in src/checkers/SiofDomain.ml *)\n(* note that as a result the type of summaries is the same as the type of domain\n   elements *)\nmodule Summary = ...\ninclude Summary\n\n\n(* in src/backend/Payloads.ml: register the payload of the analyzer *)\ntype t =\n  { ...\n  ; siof: SiofDomain.Summary.t option\n  ... }\n\n\n(* in src/backend/registerCheckers.ml *)\nlet all_checkers = [ ...\n  ; {checker= SIOF; callbacks= [(interprocedural Payloads.Fields.siof Siof.checker, Clang)]}\n  ... ]\n")),(0,o.kt)("p",null,"Here, the type of the abstract state and the type of the summary are the same,\nwhich makes things easier for us (no logic to convert an abstract state to a\nsummary)."),(0,o.kt)("p",null,"Part (2a) is\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/be4ddc48f6330b7b788d899ce12ca51b4d673530/infer/src/checkers/Siof.ml#L168"},"here"),"\nand uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"analyze_dependency")," callback provided by the framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"match analyze_dependency callee_pname with\n")),(0,o.kt)("p",null,'This says: "read the summary for ',(0,o.kt)("inlineCode",{parentName:"p"},"callee_pname"),', possibly computing it\nfirst". You must then add logic for applying the summary to the\ncurrent abstract state (often, this is as simple as doing a join).'),(0,o.kt)("p",null,"Because our summary type is the same as the abstract state, part (2b)\nhere simply consists in return the post computed by the analysis as\nthe procedure's summary, using ",(0,o.kt)("inlineCode",{parentName:"p"},"Analyzer.compute_post"),"."),(0,o.kt)("p",null,"That's it! We now have an interprocedural analysis."),(0,o.kt)("p",null,"To go deeper, jump to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/labs/README.md"},"lab\nexercise"),"\nand to the ",(0,o.kt)("a",{parentName:"p",href:"internal-API/"},"API documentation"),", e.g. for the\n",(0,o.kt)("a",{parentName:"p",href:"pathname:///odoc/next/infer/Absint.html"},"Absint")," and\n",(0,o.kt)("a",{parentName:"p",href:"pathname:///odoc/next/infer/IR.html"},"IR")," modules."))}m.isMDXComponent=!0},1648:function(e,t,n){t.Z=n.p+"assets/files/pldi17-infer-ai-tutorial-0bf9edf257df128281cb6a20bb6309bf.pdf"}}]);