"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4818],{8481:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(4848),s=t(8453);const r=[];function o(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453),r=t(8481);const o={sidebar_position:23,title:"Process DPP"},c=void 0,a={id:"mock-apps/services/process-dpp",title:"Process DPP",description:"Description",source:"@site/docs/mock-apps/services/process-dpp.md",sourceDirName:"mock-apps/services",slug:"/mock-apps/services/process-dpp",permalink:"/docs/mock-apps/services/process-dpp",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/services/process-dpp.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"Process DPP"},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/mock-apps/services/"},next:{title:"Process Transaction Event",permalink:"/docs/mock-apps/services/process-transaction-event"}},d={},l=[...r.RM,{value:"Description",id:"description",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"processDPP"})," service is responsible for processing a ",(0,i.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalProductPassport",children:"Digital Product Passport (DPP)"}),", issuing a ",(0,i.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/VerifiableCredentials",children:"Verifiable Credential (VC)"}),", uploading it to the ",(0,i.jsx)(n.a,{href:"/docs/mock-apps/dependent-services/storage-service",children:"Storage service"}),", and registering the link to the stored DPP with the ",(0,i.jsx)(n.a,{href:"/docs/mock-apps/dependent-services/identity-resolution-service",children:"Identity Resolver service"}),". It handles the entire lifecycle of creating and managing a DPP, from data input to storage and resolution."]}),"\n",(0,i.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"\nsequenceDiagram\n\nparticipant C as Client\n\nparticipant P as processDPP\n\nparticipant V as VCKit\n\nparticipant S as Storage\n\nparticipant D as DLR\n\nC->>P: Call processDPP(data, context)\n\nP->>P: Validate context\n\nP->>P: Extract identifier\n\nP->>V: Issue VC\n\nV--\x3e>P: Return VC\n\nP->>S: Upload VC\n\nS--\x3e>P: Return VC URL\n\nP->>D: Register link resolver\n\nD--\x3e>P: Return resolver URL\n\nP--\x3e>C: Return VC and resolver URL\n"}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "processDPP",\n  "parameters": [\n    {\n      "vckit": {\n        "vckitAPIUrl": "http://localhost:3332/v2",\n        "issuer": "did:web:uncefact.github.io:project-vckit:test-and-development",\n        "headers": {\n          "Authorization": "Bearer test123"\n        }\n      },\n      "dpp": {\n        "context": ["https://dpp-json-ld.s3.ap-southeast-2.amazonaws.com/dppld.json"],\n        "renderTemplate": [\n          {\n            "template": "<!DOCTYPE html>...",\n            "@type": "WebRenderingTemplate2022"\n          }\n        ],\n        "type": ["DigitalProductPassport"],\n        "dlrLinkTitle": "Steel Passport",\n        "dlrIdentificationKeyType": "gtin",\n        "dlrVerificationPage": "http://localhost:3332/verify"\n      },\n      "dlr": {\n        "dlrAPIUrl": "https://dlr.example.com",\n        "dlrAPIKey": "5555555555555",\n        "namespace": "gs1",\n        "linkRegisterPath": "/api/resolver"\n      },\n      "storage": {\n        "url": "http://localhost:3334/v1/documents",\n        "params": {\n          "resultPath": "/uri",\n          "bucket": "verifiable-credentials"\n        },\n        "options": {\n          "method": "POST",\n          "headers": {\n            "Content-Type": "application/json"\n          }\n        }\n      },\n      "identifierKeyPath": "/product/itemIdentifiers/0/identifierValue"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vckit"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Configuration for the VCKit service"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/vckit",children:"VCKit"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dpp"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Configuration for the Digital Product Passport"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/credential",children:"DPP"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dlr"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Configuration for the Digital Link Resolver"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/idr",children:"IDR"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"storage"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Configuration for storage service"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/storage",children:"Storage"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"identifierKeyPath"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"JSON path to the identifier in the credential subject or the object for function and arguments of JSON path to construct identifier"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/identifier-key-path",children:"IdentifierKeyPath"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);