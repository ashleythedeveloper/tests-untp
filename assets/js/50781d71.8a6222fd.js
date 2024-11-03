"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9118],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var o=t(4848),i=t(8453);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},9896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(4848),i=t(8453),s=t(8481);const r={sidebar_position:15,title:"Components"},a=void 0,c={id:"mock-apps/components/index",title:"Components",description:"Components are reusable UI elements that make up the visual and interactive parts of a feature. Some components encapsulate additional logic other than just UI functionalities, like downloading credentials, storing credentials to local storage and generating barcodes.",source:"@site/docs/mock-apps/components/index.md",sourceDirName:"mock-apps/components",slug:"/mock-apps/components/",permalink:"/docs/mock-apps/components/",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/components/index.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Components"},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/docs/mock-apps/configuration/service-config"},next:{title:"Json Form",permalink:"/docs/mock-apps/components/json-form"}},d={},l=[...s.RM,{value:"Available Components",id:"available-components",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(n.p,{children:"Components are reusable UI elements that make up the visual and interactive parts of a feature. Some components encapsulate additional logic other than just UI functionalities, like downloading credentials, storing credentials to local storage and generating barcodes."}),"\n",(0,o.jsx)(n.h2,{id:"available-components",children:"Available Components"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./json-form",children:"Json Form"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./custom-button",children:"Custom Button"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./barcode-generator",children:"Barcode Generator"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./local-storage-loader",children:"Local Storage Loader"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./conformity-credential",children:"Conformity Credential"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./conformity-credential-checkbox",children:"Conformity Credential Checkbox"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./render-check-list",children:"Render Check List"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./import-button",children:"Import Button"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./qr-code-scanner-dialog-button",children:"QR Code Scanner Dialog Button"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph TD\n    A[Component]\n    A --\x3e B[Name]\n    A --\x3e C[Type]\n    A --\x3e D[Props]"}),"\n",(0,o.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Required"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"Yes"}),(0,o.jsx)(n.td,{children:"The name of the component (depends on component used)"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#available-components",children:"Component"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"type"}),(0,o.jsx)(n.td,{children:"Yes"}),(0,o.jsx)(n.td,{children:"The type of the component (depends on component used)"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/mock-apps/common/component-type",children:"ComponentType"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"props"}),(0,o.jsx)(n.td,{children:"Yes"}),(0,o.jsx)(n.td,{children:"Properties passed to the component (depends on component used)"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#available-components",children:"Component"})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "CustomButton",\n  "type": "Submit",\n  "props": {\n    "label": "Submit",\n    "description": "Click to submit the form"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"For detailed information about each component, please refer to their respective documentation pages linked above."})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);