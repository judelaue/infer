"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5783],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),d=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return l.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?l.createElement(h,o(o({ref:n},p),{},{components:t})):l.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6305:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var l=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],i={id:"hello-world",title:"Hello, World!"},s=void 0,d={unversionedId:"hello-world",id:"version-1.1.0/hello-world",title:"Hello, World!",description:"Follow the instructions in this page to try Infer on a few small examples. You",source:"@site/versioned_docs/version-1.1.0/00-hello-world.md",sourceDirName:".",slug:"/hello-world",permalink:"/docs/hello-world",tags:[],version:"1.1.0",sidebarPosition:0,frontMatter:{id:"hello-world",title:"Hello, World!"},sidebar:"version-1.1.0/docs",previous:{title:"Getting started with Infer",permalink:"/docs/getting-started"},next:{title:"Infer workflow",permalink:"/docs/infer-workflow"}},p=[{value:"Hello world Java",id:"hello-world-java",children:[],level:2},{value:"Hello world Objective-C",id:"hello-world-objective-c",children:[],level:2},{value:"Hello world C",id:"hello-world-c",children:[],level:2},{value:"Hello world Android",id:"hello-world-android",children:[{value:"Differential analysis",id:"differential-analysis",children:[],level:3}],level:2},{value:"Hello world iOS",id:"hello-world-ios",children:[],level:2},{value:"Hello world Make",id:"hello-world-make",children:[],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Follow the instructions in this page to try Infer on a few small examples. You\nshould be able to see the bugs reported by Infer, fix the bugs and run Infer\nagain to check that they are not reported anymore. This should give you a first\nidea of how Infer works. See the ",(0,r.kt)("a",{parentName:"p",href:"infer-workflow"},"User Guide")," for more details\nabout the use of Infer."),(0,r.kt)("p",null,"All these examples can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"infer/examples")),"\ndirectory distributed with Infer."),(0,r.kt)("h2",{id:"hello-world-java"},"Hello world Java"),(0,r.kt)("p",null,"Here is a simple Java example to illustrate Infer at work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Hello.java\nclass Hello {\n  int test() {\n    String s = null;\n    return s.length();\n  }\n}\n")),(0,r.kt)("p",null,"To run Infer, type the following in your terminal from the same directory as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples/Hello.java"},(0,r.kt)("inlineCode",{parentName:"a"},"Hello.java")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- javac Hello.java\n")),(0,r.kt)("p",null,"You should see the following error reported by Infer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Hello.java:5: error: NULL_DEREFERENCE\n  object s last assigned on line 4 could be null and is dereferenced at line 5\n")),(0,r.kt)("p",null,"Now edit the file to add null checks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"  int test() {\n    String s = null;\n    return s == null ? 0 : s.length();\n  }\n")),(0,r.kt)("p",null,"Run Infer again. This time we get no error: Infer reports ",(0,r.kt)("inlineCode",{parentName:"p"},"No issues found"),"."),(0,r.kt)("h2",{id:"hello-world-objective-c"},"Hello world Objective-C"),(0,r.kt)("p",null,"Here is a simple Objective-C example to illustrate Infer at work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Hello.m\n#import <Foundation/Foundation.h>\n\n@interface Hello: NSObject\n@property NSString* s;\n@end\n\n@implementation Hello\nNSString* m() {\n    Hello* hello = nil;\n    return hello->_s;\n}\n@end\n")),(0,r.kt)("p",null,"To run Infer, type the following in your terminal from the same directory as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples/Hello.m"},(0,r.kt)("inlineCode",{parentName:"a"},"Hello.m")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- clang -c Hello.m\n")),(0,r.kt)("p",null,"You should see the following error reported by Infer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello.m:10 NULL_DEREFERENCE\n  pointer hello last assigned on line 9 could be null and is dereferenced at line 10, column 12\n")),(0,r.kt)("p",null,"Now edit the file to use the getter instead of accessing the instance variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString* m() {\n    Hello* hello = nil;\n    return hello.s;\n}\n")),(0,r.kt)("p",null,"Run Infer again. This time we get no error: Infer reports ",(0,r.kt)("inlineCode",{parentName:"p"},"No issues found"),"."),(0,r.kt)("h2",{id:"hello-world-c"},"Hello world C"),(0,r.kt)("p",null,"Here is a simple C example to illustrate Infer at work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// hello.c\n#include <stdlib.h>\n\nvoid test() {\n  int *s = NULL;\n  *s = 42;\n}\n")),(0,r.kt)("p",null,"To run Infer, type the following in your terminal from the same directory as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples/hello.c"},(0,r.kt)("inlineCode",{parentName:"a"},"hello.c")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- gcc -c hello.c\n")),(0,r.kt)("p",null,"You should see the following error reported by Infer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hello.c:5: error: NULL_DEREFERENCE\n  pointer s last assigned on line 4 could be null and is dereferenced at line 5, column 10\n")),(0,r.kt)("p",null,"Now edit the file to add null checks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void test() {\n  int *s = NULL;\n  if (s != NULL) {\n    *s = 42;\n  }\n}\n")),(0,r.kt)("p",null,"Run Infer again. This time we get no error: Infer reports ",(0,r.kt)("inlineCode",{parentName:"p"},"No issues found"),"."),(0,r.kt)("p",null,"When analyzing C files, Infer captures the gcc command and runs clang instead to\nparse them. Thus you may get compiler errors and warnings that differ from\ngcc's. So in particular, the following two commands are equivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- gcc -c hello.c\ninfer run -- clang -c hello.c\n")),(0,r.kt)("h2",{id:"hello-world-android"},"Hello world Android"),(0,r.kt)("p",null,"To be able to analyze the sample Android app, make sure that you have the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/sdk/installing/index.html"},"Android SDK"),' 22\ninstalled and up to date, as well as the "Android SDK Build-tools" and "Android\nSupport Repository" components.'),(0,r.kt)("p",null,"Go to the sample Android app in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples/android_hello/"},(0,r.kt)("inlineCode",{parentName:"a"},"infer/examples/android_hello")),"\nand create a ",(0,r.kt)("inlineCode",{parentName:"p"},"local.properties")," file with a single line\n",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.dir=<location of your Android SDK>"),". This sample Android app uses\n",(0,r.kt)("a",{parentName:"p",href:"https://gradle.org/"},"gradle")," as its build system. You do not need to install\ngradle to try it out though, thanks to the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html"},(0,r.kt)("inlineCode",{parentName:"a"},"gradlew")),"\nscript in the project that will download gradle and the project's dependencies\nfor you."),(0,r.kt)("p",null,"After editing ",(0,r.kt)("inlineCode",{parentName:"p"},"local.properties"),", run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- ./gradlew build\n")),(0,r.kt)("p",null,"Infer will output the list of found bugs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"app/src/main/java/infer/inferandroidexample/MainActivity.java:29: error: NULL_DEREFERENCE\n  object s last assigned on line 28 could be null and is dereferenced at line 29\n  27.           setContentView(R.layout.activity_main);\n  28.           String s = getDay();\n  29. >         int length = s.length();\n  30.           writeToFile();\n  31.       }\n  32.\n\napp/src/main/java/infer/inferandroidexample/MainActivity.java:46: error: RESOURCE_LEAK\n   resource of type java.io.FileOutputStream acquired to fis by call to FileOutputStream(...) at line 43 is not released after line 46\n  44.               fis.write(arr);\n  45.               fis.close();\n  46. >         } catch (IOException e) {\n  47.               //Deal with exception\n  48.           }\n  49.\n\napp/src/main/java/infer/other/MainActivity.java:23: error: NULL_DEREFERENCE\n  object returned by source() could be null and is dereferenced at line 23\n  21.     @Override\n  22.     protected void onCreate(Bundle savedInstanceState) {\n  23. >     source().toString();\n  24.     }\n  25.\n\n")),(0,r.kt)("h3",{id:"differential-analysis"},"Differential analysis"),(0,r.kt)("p",null,"If you run Infer again without changing any files, you will notice that this\ntime nothing gets analyzed. This is because gradle is ",(0,r.kt)("em",{parentName:"p"},"incremental"),": everything\nwas compiled already so nothing gets recompiled. Infer captures the compilation\ncommands to know which files to analyze, hence it analyzes nothing in this case.\nThere are three solutions to remedy this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run gradlew clean in between Infer runs."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew clean\n")),(0,r.kt)("p",{parentName:"li"},"This causes gradle to recompile everything each time, and subsequently Infer\nto capture all the files again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run Infer indicating that the capture of compilation commands should\ncontinue, using option ",(0,r.kt)("inlineCode",{parentName:"p"},"--continue")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," for short)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run --continue -- ./gradlew build\n")))),(0,r.kt)("p",null,"This makes Infer add the effects of the new compilation commands to the previous\nones, and start a new analysis of the entire code."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run Infer in reactive mode after a code change, using option ",(0,r.kt)("inlineCode",{parentName:"p"},"--reactive")," (or\n",(0,r.kt)("inlineCode",{parentName:"p"},"-r")," for short)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run --reactive -- ./gradlew build\n")))),(0,r.kt)("p",null,"This makes Infer analyze the effects of the code change, without re-analyzing\neverything. Note that only the modified files, and those dependent on them, are\nre-analyzed. This analysis mode can be significantly faster."),(0,r.kt)("p",null,"You can learn more about the particulars of each solution in the\n",(0,r.kt)("a",{parentName:"p",href:"infer-workflow"},"Infer workflow")," page."),(0,r.kt)("h2",{id:"hello-world-ios"},"Hello world iOS"),(0,r.kt)("p",null,"Go to the sample iOS app in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples/ios_hello/"},(0,r.kt)("inlineCode",{parentName:"a"},"infer/examples/ios_hello")),"\nand run Infer on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- xcodebuild -target HelloWorldApp -configuration Debug -sdk iphonesimulator\n")),(0,r.kt)("p",null,"Infer will output the list of found bugs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"AppDelegate.m:20: error: MEMORY_LEAK\n   memory dynamically allocated to shadowPath by call to CGPathCreateWithRect() at line 20, column 28 is not reachable after line 20, column 5\n\nAppDelegate.m:25: error: RESOURCE_LEAK\n   resource acquired to fp by call to fopen() at line 25, column 8 is not released after line 25, column 5\n\nAppDelegate.m:29: warning: PARAMETER_NOT_NULL_CHECKED\n   Parameter callback is not checked for null, there could be a null pointer dereference: pointer callback could be null and is dereferenced at line 29, column 5\n\nAppDelegate.m:34: error: NULL_DEREFERENCE\n   pointer str last assigned on line 33 could be null and is dereferenced at line 34, column 12\n\nAppDelegate.m:39: error: PREMATURE_NIL_TERMINATION_ARGUMENT\n   pointer str last assigned on line 38 could be nil which results in a call to arrayWithObjects: with 1 arguments instead of 3 (nil indicates that the last argument of this variadic method has been reached) at line 39, column 12\n\nHello.m:20: error: NULL_DEREFERENCE\n   pointer hello last assigned on line 19 could be null and is dereferenced at line 20, column 12\n\nHello.m:25: warning: IVAR_NOT_NULL_CHECKED\n   Instance variable hello -> _hello is not checked for null, there could be a null pointer dereference: pointer ret_hello last assigned on line 24 could be null and is dereferenced at line 25, column 12\n\nHello.m:30: warning: PARAMETER_NOT_NULL_CHECKED\n   Parameter hello is not checked for null, there could be a null pointer dereference: pointer ret_hello last assigned on line 29 could be null and is dereferenced at line 30, column 12\n")),(0,r.kt)("p",null,"Similarly to the case of ",(0,r.kt)("a",{parentName:"p",href:"#differential-analysis"},"gradle"),",\nrunning the command above a second time will yield no analysis results, as\nnothing gets recompiled. Either add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--reactive")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),") flag to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"infer")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run --reactive -- xcodebuild -target HelloWorldApp -configuration Debug -sdk iphonesimulator\n")),(0,r.kt)("p",null,"or ask the build system to reinitialize the directory before running Infer\nagain, using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcodebuild -target HelloWorldApp -configuration Debug -sdk iphonesimulator clean\n")),(0,r.kt)("h2",{id:"hello-world-make"},"Hello world Make"),(0,r.kt)("p",null,"Go to the sample C project in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/examples/c_hello/"},(0,r.kt)("inlineCode",{parentName:"a"},"infer/examples/c_hello")),"\nand run Infer on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -- make\n")),(0,r.kt)("p",null,"Infer will output the list of found bugs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"example.c:22: error: NULL_DEREFERENCE\n   pointer max last assigned on line 21 could be null and is dereferenced at line 22, column 10\n\nexample.c:36: error: NULL_DEREFERENCE\n   pointer joe last assigned on line 35 could be null and is dereferenced by call to get_age() at line 36, column 10\n\nexample.c:45: error: RESOURCE_LEAK\n   resource acquired to fd by call to open() at line 41, column 12 is not released after line 45, column 5\n\nexample.c:51: error: MEMORY_LEAK\n   memory dynamically allocated to p by call to malloc() at line 51, column 14 is not reachable after line 51, column 3\n\nexample.c:57: error: MEMORY_LEAK\n   memory dynamically allocated to p by call to malloc() at line 56, column 14 is not reachable after line 57, column 3\n")),(0,r.kt)("p",null,"Similarly to the case of ",(0,r.kt)("a",{parentName:"p",href:"#differential-analysis"},"gradle"),",\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"infer run -- make")," a second time will yield no analysis results, as\nnothing gets recompiled. Either add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--reactive")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),") flag to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"infer")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run --reactive -- make\n")),(0,r.kt)("p",null,"or run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make clean\n")),(0,r.kt)("p",null,"before analyzing the project again."))}u.isMDXComponent=!0}}]);