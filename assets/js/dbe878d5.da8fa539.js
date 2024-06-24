"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4818],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var s=t(4848),i=t(8453);const r=[];function o(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},3560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453),r=t(8481);const o={sidebar_position:18,title:"Process DPP"},a=void 0,c={id:"mock-apps/services/process-dpp",title:"Process DPP",description:"Description",source:"@site/docs/mock-apps/services/process-dpp.md",sourceDirName:"mock-apps/services",slug:"/mock-apps/services/process-dpp",permalink:"/tests-untp/docs/mock-apps/services/process-dpp",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/services/process-dpp.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"Process DPP"},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/tests-untp/docs/mock-apps/services/"},next:{title:"Process Transaction Event",permalink:"/tests-untp/docs/mock-apps/services/process-transaction-event"}},d={},l=[...r.RM,{value:"Description",id:"description",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"processDPP"})," service is responsible for processing a Digital Product Passport (DPP), issuing a Verifiable Credential (VC), uploading it to storage, and registering a link resolver. It handles the entire lifecycle of creating and managing a DPP, from data input to storage and resolution."]}),"\n",(0,s.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,s.jsx)(n.mermaid,{value:"\nsequenceDiagram\n\nparticipant C as Client\n\nparticipant P as processDPP\n\nparticipant V as VCKit\n\nparticipant S as Storage\n\nparticipant D as DLR\n\nC->>P: Call processDPP(data, context)\n\nP->>P: Validate context\n\nP->>P: Extract identifier\n\nP->>V: Issue VC\n\nV--\x3e>P: Return VC\n\nP->>S: Upload VC\n\nS--\x3e>P: Return VC URL\n\nP->>D: Register link resolver\n\nD--\x3e>P: Return resolver URL\n\nP--\x3e>C: Return VC and resolver URL\n"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "processDPP",\n  "parameters": [\n    {\n      "vckit": {\n        "vckitAPIUrl": "http://localhost:3332/v2",\n        "issuer": "did:web:example.com:steel-mill-1"\n      },\n      "dpp": {\n        "context": ["https://dpp-json-ld.s3.ap-southeast-2.amazonaws.com/dppld.json"],\n        "renderTemplate": [\n          {\n            "template": "<!DOCTYPE html>...",\n            "@type": "WebRenderingTemplate2022"\n          }\n        ],\n        "type": ["VerifiableCredential", " DigitalProductPassport"],\n        "dlrLinkTitle": "Steel Passport",\n        "dlrIdentificationKeyType": "gtin",\n        "dlrVerificationPage": "http://localhost:3332/verify"\n      },\n      "dlr": {\n        "dlrAPIUrl": "https://dlr.example.com",\n        "dlrAPIKey": "5555555555555"\n      },\n      "storage": {\n        "url": "https://storage.example.com/v1/documents",\n        "params": {\n          "bucket": "verifiable-credentials",\n          "resultPath": "/uri"\n        },\n        "options": {\n          "method": "POST",\n          "headers": {\n            "Content-Type": "application/json"\n          }\n        }\n      },\n      "identifierKeyPath": "/product/itemIdentifiers/0/identifierValue"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vckit"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Configuration for the VCKit service"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/mock-apps/common/vckit",children:"VCKit"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dpp"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Configuration for the Digital Product Passport"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/mock-apps/common/credential",children:"DPP"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dlr"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Configuration for the Digital Link Resolver"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/mock-apps/common/idr",children:"IDR"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"storage"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Configuration for storage service"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/mock-apps/common/storage",children:"Storage"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifierKeyPath"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"JSON path to the identifier in the credential subject"}),(0,s.jsx)(n.td,{children:"String"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);