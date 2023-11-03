"use strict";(self.webpackChunkqho_640_contemporary_web_application=self.webpackChunkqho_640_contemporary_web_application||[]).push([[1663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,p(p({ref:n},c),{},{components:t})):o.createElement(f,p({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},p="Topic-02: Props",i={unversionedId:"Week-03/Topic-02 Props",id:"Week-03/Topic-02 Props",title:"Topic-02: Props",description:'In React, props (short for "properties") are a fundamental concept used for passing data from a parent component to a child component. They are a way to customize or configure a component and provide it with specific values or functions.',source:"@site/QHO640_CWA_S1_2023/Week-03/Topic-02 Props.md",sourceDirName:"Week-03",slug:"/Week-03/Topic-02 Props",permalink:"/QHO640-Contemporary-Web-Application-Notes/QHO640_CWA_S1_2023/Week-03/Topic-02 Props",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Topic-01: map() Function",permalink:"/QHO640-Contemporary-Web-Application-Notes/QHO640_CWA_S1_2023/Week-03/Topic-01 map() function"},next:{title:"Topic-03: React-Bootstrap",permalink:"/QHO640-Contemporary-Web-Application-Notes/QHO640_CWA_S1_2023/Week-03/Topic-03 React-Bootstrap"}},s={},l=[{value:"Using Props:",id:"using-props",level:3},{value:"Key Aspects of Props:",id:"key-aspects-of-props",level:3},{value:"Conditional Rendering based on Props:",id:"conditional-rendering-based-on-props",level:3}],c={toc:l},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"topic-02-props"},"Topic-02: Props"),(0,r.kt)("p",null,"In React, ",(0,r.kt)("strong",{parentName:"p"},"props"),' (short for "properties") are a fundamental concept used for passing data from a parent component to a child component. They are a way to customize or configure a component and provide it with specific values or functions.'),(0,r.kt)("h3",{id:"using-props"},"Using Props:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Passing Props:")),(0,r.kt)("p",{parentName:"li"},"When using a component, you can pass props to it by adding attributes to the component similar to HTML attributes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// ParentComponent.js\nimport React from 'react';\nimport ChildComponent from './ChildComponent';\n\nfunction ParentComponent() {\n  return <ChildComponent name=\"Alice\" age={25} />;\n}\n\nexport default ParentComponent;\n")),(0,r.kt)("p",{parentName:"li"},"Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," are passed as props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChildComponent"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Receiving Props:")),(0,r.kt)("p",{parentName:"li"},"In the child component, you can receive these props and use them to customize the component's behavior or appearance."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// ChildComponent.js\nimport React from 'react';\n\nfunction ChildComponent(props) {\n  return (\n    <div>\n      <p>Name: {props.name}</p>\n      <p>Age: {props.age}</p>\n    </div>\n  );\n}\n\nexport default ChildComponent;\n")),(0,r.kt)("p",{parentName:"li"},"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChildComponent")," receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," props and uses them to display the provided data."))),(0,r.kt)("h3",{id:"key-aspects-of-props"},"Key Aspects of Props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Read-only:")," Props are read-only, meaning that a component cannot modify the props passed to it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accessing Props:")," Props are accessed in functional components via the ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," argument, while in class components, they are accessed through ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dynamic Values:")," Props can contain various types of data, including strings, numbers, functions, or even objects, allowing components to be versatile and adaptable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Custom Components:")," Props are useful for creating reusable and configurable components that can be used in different contexts by passing different props."))),(0,r.kt)("h3",{id:"conditional-rendering-based-on-props"},"Conditional Rendering based on Props:"),(0,r.kt)("p",null,"You can conditionally render elements or apply different behavior based on the props received by the component. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function ChildComponent(props) {\n  return (\n    <div>\n      {props.isLoggedIn ? (\n        <p>Welcome, {props.username}!</p>\n      ) : (\n        <p>Please log in to continue.</p>\n      )}\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChildComponent")," renders a personalized message if the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," prop is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"; otherwise, it displays a prompt to log in."),(0,r.kt)("p",null,"Props play a vital role in React, enabling the customization and reusability of components by allowing data to flow from parent components to their children, contributing to the flexibility and adaptability of React applications."))}d.isMDXComponent=!0}}]);