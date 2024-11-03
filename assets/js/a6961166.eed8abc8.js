"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9849],{8481:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>s});var o=n(4848),r=n(8453);const s=[];function i(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},6392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(4848),r=n(8453),s=n(8481);const i={sidebar_position:18,title:"Barcode Generator"},d=void 0,c={id:"mock-apps/components/barcode-generator",title:"Barcode Generator",description:"Description",source:"@site/docs/mock-apps/components/barcode-generator.md",sourceDirName:"mock-apps/components",slug:"/mock-apps/components/barcode-generator",permalink:"/docs/mock-apps/components/barcode-generator",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/components/barcode-generator.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"Barcode Generator"},sidebar:"tutorialSidebar",previous:{title:"Custom Button",permalink:"/docs/mock-apps/components/custom-button"},next:{title:"Local Storage Loader",permalink:"/docs/mock-apps/components/local-storage-loader"}},a={},l=[...s.RM,{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Props",id:"props",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"The BarcodeGenerator component generates and displays barcodes based on the provided data. It can handle both single and multiple barcode generation, making it versatile for various use cases within the Mock App system."}),"\n",(0,o.jsxs)(t.p,{children:["The component uses its ",(0,o.jsx)(t.code,{children:"data"})," and ",(0,o.jsx)(t.code,{children:"dataPath"})," props to extract the necessary information for barcode generation. The resulting barcodes are displayed on the screen once generated."]}),"\n",(0,o.jsx)(t.p,{children:"The BarcodeGenerator is typically used as follows:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Passing the credential object:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"data"})," prop receives the entire credential object generated by the previous step in the process."]}),"\n",(0,o.jsx)(t.li,{children:"This prop is usually not specified directly in the component configuration, as it's automatically populated with the credential generate in the previous step."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Specifying the data path:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Use the ",(0,o.jsx)(t.code,{children:"dataPath"})," prop to specify a JSON pointer path to extract barcode data from the credential object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "name": "BarcodeGenerator",\n  "type": "Result",\n  "props": {\n    "dataPath": "/credentialSubject/outputEPCList/index/name"\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This example specifies that for each item in the ",(0,o.jsx)(t.code,{children:"outputEPCList"}),", the ",(0,o.jsx)(t.code,{children:"name"})," field should be used to generate a barcode. The actual credential object is not shown here, as it's automatically provided to the component by the previous step."]}),"\n",(0,o.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Required"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"name"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:'The name of the component (should be "BarcodeGenerator")'}),(0,o.jsx)(t.td,{children:"String"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"type"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:'The type of the component (should be "Result")'}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"/docs/mock-apps/common/component-type",children:"ComponentType"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"props"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"The properties for the BarcodeGenerator"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"/docs/mock-apps/components/barcode-generator#props",children:"Props"})})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Required"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"data"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"The credential object containing the data for barcode generation (usually automatically provided)"}),(0,o.jsx)(t.td,{children:"Object"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"dataPath"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"A JSON pointer path to extract barcode data from the credential object"}),(0,o.jsx)(t.td,{children:"String"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);