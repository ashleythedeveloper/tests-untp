"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[987],{8481:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>i});var o=t(4848),s=t(8453);const i=[];function r(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},3499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(4848),s=t(8453),i=t(8481);const r={sidebar_position:35,title:"Component Type"},c=void 0,a={id:"mock-apps/common/component-type",title:"Component Type",description:"Description",source:"@site/docs/mock-apps/common/component-type.md",sourceDirName:"mock-apps/common",slug:"/mock-apps/common/component-type",permalink:"/tests-untp/docs/mock-apps/common/component-type",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/common/component-type.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,title:"Component Type"},sidebar:"tutorialSidebar",previous:{title:"Identify Provider",permalink:"/tests-untp/docs/mock-apps/common/identify-provider"},next:{title:"Render Template",permalink:"/tests-untp/docs/mock-apps/common/render-template"}},d={},p=[...i.RM,{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"EntryData",id:"entrydata",level:3},{value:"Submit",id:"submit",level:3},{value:"Result",id:"result",level:3},{value:"Void",id:"void",level:3},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"type"})," property in a component configuration specifies the role or purpose of the ",(0,o.jsx)(n.a,{href:"/docs/mock-apps/configuration/component-config",children:"component"})," within the feature. It determines how the component interacts with other parts of the system and what kind of data it handles."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"type"})," property is a required field in the ",(0,o.jsx)(n.a,{href:"/docs/mock-apps/configuration/component-config",children:"component"})," configuration. It is used in conjunction with the ",(0,o.jsx)(n.code,{children:"name"})," property to define the behavior and rendering of the component."]}),"\n",(0,o.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,o.jsx)(n.h3,{id:"entrydata",children:"EntryData"}),"\n",(0,o.jsxs)(n.p,{children:["Components with the ",(0,o.jsx)(n.code,{children:"EntryData"})," type are responsible for capturing or providing input data. They are typically used for forms, data entry fields, or components that load data from a source."]}),"\n",(0,o.jsx)(n.h3,{id:"submit",children:"Submit"}),"\n",(0,o.jsxs)(n.p,{children:["Components with the ",(0,o.jsx)(n.code,{children:"Submit"})," type are used for triggering actions or submitting data. They are often used for buttons that initiate a process or send data to a ",(0,o.jsx)(n.a,{href:"/docs/mock-apps/services/",children:"service"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["When a Submit type component is activated, it executes the first element in the ",(0,o.jsx)(n.a,{href:"/docs/mock-apps/configuration/service-config",children:"services"})," array. Components and services can be chained together, allowing each subsequent Submit event to correspond to executing the next element in the services array."]}),"\n",(0,o.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,o.jsxs)(n.p,{children:["Components with the ",(0,o.jsx)(n.code,{children:"Result"})," type are used to display or handle the output of a process. They are typically used for showing the results of an action or displaying processed data."]}),"\n",(0,o.jsx)(n.h3,{id:"void",children:"Void"}),"\n",(0,o.jsxs)(n.p,{children:["Components with the ",(0,o.jsx)(n.code,{children:"Void"})," type are self-describing and do not perform any action. They can be used as placeholders or for components that don't need to interact with the system's data flow or service execution."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "JsonForm",\n  "type": "EntryData",\n  "props": {\n    "schema": { /* ... */ },\n    "onChange": { /* ... */ }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the ",(0,o.jsx)(n.code,{children:"JsonForm"})," component is of type ",(0,o.jsx)(n.code,{children:"EntryData"}),", indicating that it's used for data input."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "CustomButton",\n  "type": "Submit",\n  "props": {\n    "label": "Submit",\n    "onClick": { /* ... */ }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Here, the ",(0,o.jsx)(n.code,{children:"CustomButton"})," component is of type ",(0,o.jsx)(n.code,{children:"Submit"}),", indicating that it's used to trigger an action or submit data. When clicked, it will execute the first service in the services array."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Spacer",\n  "type": "Void",\n  "props": {\n    "height": "20px"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This example shows a ",(0,o.jsx)(n.code,{children:"Void"})," type component that might be used to add spacing in the UI without interacting with the system's data or services."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);