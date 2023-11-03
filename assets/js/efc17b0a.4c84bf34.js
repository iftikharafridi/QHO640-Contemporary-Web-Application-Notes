"use strict";(self.webpackChunkqho_640_contemporary_web_application=self.webpackChunkqho_640_contemporary_web_application||[]).push([[5232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},l="Topic-02: ES6 (ECMAScript 2015)",i={unversionedId:"Week-02/Topic-02 ES6",id:"Week-02/Topic-02 ES6",title:"Topic-02: ES6 (ECMAScript 2015)",description:"Certainly! ES6, also known as ECMAScript 2015, brought significant improvements and new features to JavaScript, making the language more expressive and developer-friendly. Let's explore some key ES6 features with examples and comparisons to their ES5 counterparts:",source:"@site/QHO640_CWA_S1_2023/Week-02/Topic-02 ES6.md",sourceDirName:"Week-02",slug:"/Week-02/Topic-02 ES6",permalink:"/QHO640-Contemporary-Web-Application-Notes/QHO640_CWA_S1_2023/Week-02/Topic-02 ES6",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Topic-02: ECMAScript",permalink:"/QHO640-Contemporary-Web-Application-Notes/QHO640_CWA_S1_2023/Week-02/Topic-02 ECMAScript"},next:{title:"Week-03",permalink:"/QHO640-Contemporary-Web-Application-Notes/QHO640_CWA_S1_2023/category/week-03"}},s={},p=[{value:"1. <strong>let and const for Variable Declaration:</strong>",id:"1-let-and-const-for-variable-declaration",level:3},{value:"2. <strong>Arrow Functions:</strong>",id:"2-arrow-functions",level:3},{value:"3. <strong>Template Literals:</strong>",id:"3-template-literals",level:3},{value:"4. <strong>Object Destructuring:</strong>",id:"4-object-destructuring",level:3},{value:"5. <strong>Default Parameters:</strong>",id:"5-default-parameters",level:3},{value:"6. <strong>Classes:</strong>",id:"6-classes",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"topic-02-es6-ecmascript-2015"},"Topic-02: ES6 (ECMAScript 2015)"),(0,r.kt)("p",null,"Certainly! ES6, also known as ECMAScript 2015, brought significant improvements and new features to JavaScript, making the language more expressive and developer-friendly. Let's explore some key ES6 features with examples and comparisons to their ES5 counterparts:"),(0,r.kt)("h3",{id:"1-let-and-const-for-variable-declaration"},"1. ",(0,r.kt)("strong",{parentName:"h3"},"let and const for Variable Declaration:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES5 (var):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var x = 10; // Functional-scoped variable declaration\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES6 (let and const):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let y = 20; // Block-scoped variable declaration\nconst PI = 3.14; // Constant value (immutable)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explanation:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"let")," is block-scoped, allowing the declaration of variables limited to the block they are defined in. ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," declares constants that cannot be reassigned, providing immutable variables.")),(0,r.kt)("h3",{id:"2-arrow-functions"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"Arrow Functions:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES5 (Function Declarations):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  return a + b;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES6 (Arrow Functions):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const add = (a, b) => a + b;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explanation:")," Arrow functions provide a more concise syntax, lexical ",(0,r.kt)("inlineCode",{parentName:"li"},"this"),", and implicit return for single expressions, making code more readable and reducing verbosity.")),(0,r.kt)("h3",{id:"3-template-literals"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"Template Literals:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES5 (String Concatenation):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var name = 'Alice';\nvar greeting = 'Hello, ' + name + '!';\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES6 (Template Literals):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let name = 'Alice';\nlet greeting = `Hello, ${name}!`;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explanation:")," Template literals allow embedding expressions within ",(0,r.kt)("inlineCode",{parentName:"li"},"${}")," and multiline strings, improving readability and simplifying string concatenation.")),(0,r.kt)("h3",{id:"4-object-destructuring"},"4. ",(0,r.kt)("strong",{parentName:"h3"},"Object Destructuring:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES5 (Property Assignment):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var person = { name: 'Bob', age: 25 };\nvar name = person.name;\nvar age = person.age;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES6 (Object Destructuring):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const person = { name: 'Bob', age: 25 };\nconst { name, age } = person;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explanation:")," Object destructuring provides a concise way to extract properties from objects into variables, enhancing code readability.")),(0,r.kt)("h3",{id:"5-default-parameters"},"5. ",(0,r.kt)("strong",{parentName:"h3"},"Default Parameters:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES5 (Fallback Value):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(name) {\n  name = name || 'Guest';\n  return 'Hello, ' + name + '!';\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES6 (Default Parameters):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const greet = (name = 'Guest') => `Hello, ${name}!`;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explanation:")," Default parameters offer a more explicit and readable way to set default values for function arguments, avoiding the use of logical OR for default values.")),(0,r.kt)("h3",{id:"6-classes"},"6. ",(0,r.kt)("strong",{parentName:"h3"},"Classes:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES5 (Constructor Functions):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.sayHello = function() {\n  return 'Hello, ' + this.name + '!';\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ES6 (Class Syntax):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  sayHello() {\n    return `Hello, ${this.name}!`;\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explanation:")," ES6 classes provide a more declarative and structured way to create constructor functions and define methods within classes, similar to class-based languages.")),(0,r.kt)("p",null,"These ES6 features enhance JavaScript, making code more expressive, concise, and readable. They improve developer productivity and enable modern programming paradigms within the language."))}m.isMDXComponent=!0}}]);