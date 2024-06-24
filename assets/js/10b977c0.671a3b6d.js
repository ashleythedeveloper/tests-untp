"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9716],{8481:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>r});var o=n(4848),s=n(8453);const r=[];function d(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var o=n(4848),s=n(8453),r=n(8481);const d={sidebar_position:115,title:"Local Storage Loader"},i=void 0,c={id:"mock-apps/components/local-storage-loader",title:"Local Storage Loader",description:"Description",source:"@site/docs/mock-apps/components/local-storage-loader.md",sourceDirName:"mock-apps/components",slug:"/mock-apps/components/local-storage-loader",permalink:"/tests-untp/docs/mock-apps/components/local-storage-loader",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/components/local-storage-loader.md",tags:[],version:"current",sidebarPosition:115,frontMatter:{sidebar_position:115,title:"Local Storage Loader"},sidebar:"tutorialSidebar",previous:{title:"Custom Button",permalink:"/tests-untp/docs/mock-apps/components/custom-button"},next:{title:"Services",permalink:"/tests-untp/docs/mock-apps/services/"}},a={},l=[...r.RM,{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Props",id:"props",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"The LocalStorageLoader component is responsible for loading data from local storage and providing it to nested components. It allows for the retrieval and use of previously stored data within the application."}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "name": "LocalStorageLoader",\n  "type": "EntryData",\n  "props": {\n    "storageKey": "steel_mill_1_dpps",\n    "nestedComponents": [\n      {\n        "name": "JsonForm",\n        "type": "EntryData",\n        "props": {\n          "schema": { /* ... */ },\n          "constructData": { /* ... */ }\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Required"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"name"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"The name of the component"}),(0,o.jsx)(t.td,{children:"LocalStorageLoader"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"type"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"The type of the component"}),(0,o.jsx)(t.td,{children:"EntryData"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"props"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"The properties for the LocalStorageLoader"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"/docs/mock-apps/components/local-storage-loader#props",children:"Props"})})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Required"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"storageKey"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"The key used to retrieve data from local storage"}),(0,o.jsx)(t.td,{children:"String"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"nestedComponents"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"An array of components to be rendered with the loaded data"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/mock-apps/components/",children:"Component"}),"[]"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var o=n(6540);const s={},r=o.createContext(s);function d(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);