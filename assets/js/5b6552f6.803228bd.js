"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7120],{8481:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>s});var i=n(4848),r=n(8453);const s=[];function o(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(4848),r=n(8453),s=n(8481);const o={sidebar_position:45,title:"Process Aggregation Event"},a=void 0,c={id:"mock-apps/services/process-aggregation-event",title:"Process Aggregation Event",description:"Description",source:"@site/docs/mock-apps/services/process-aggregation-event.md",sourceDirName:"mock-apps/services",slug:"/mock-apps/services/process-aggregation-event",permalink:"/docs/mock-apps/services/process-aggregation-event",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/services/process-aggregation-event.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,title:"Process Aggregation Event"},sidebar:"tutorialSidebar",previous:{title:"Process Association Event",permalink:"/docs/mock-apps/services/process-association-event"},next:{title:"Process Digital Conformity Credential",permalink:"/docs/mock-apps/services/process-digital-conformity-credential"}},d={},l=[...s.RM,{value:"Description",id:"description",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"processAggregationEvent"})," service is responsible for processing an ",(0,i.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvents",children:"Aggregation Event (DTE)"}),", issuing a ",(0,i.jsx)(t.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/VerifiableCredentials",children:"Verifiable Credential (VC)"}),", uploading it to the ",(0,i.jsx)(t.a,{href:"/docs/mock-apps/dependent-services/storage-service",children:"Storage service"}),", registering the link to the stored DTE with the ",(0,i.jsx)(t.a,{href:"/docs/mock-apps/dependent-services/identity-resolution-service",children:"Identity Resolver service"}),". It handles the entire lifecycle of creating and managing an aggregation event, from data input to storage and resolution."]}),"\n",(0,i.jsx)(t.h2,{id:"diagram",children:"Diagram"}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\nparticipant C as Client\nparticipant P as processAggregationEvent\nparticipant V as VCKit\nparticipant S as Storage\nparticipant D as DLR\nC->>P: Call processAggregationEvent(aggregationEvent, context)\nP->>P: Validate context\nP->>P: Extract identifier\nP->>V: Issue VC\nV--\x3e>P: Return VC\nP->>S: Upload VC\nS--\x3e>P: Return VC URL\nP->>D: Register link resolver\nD--\x3e>P: Return resolver URL\nP--\x3e>C: Return VC and resolver URL"}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "processAggregationEvent",\n  "parameters": [\n    {\n      "vckit": {\n        "vckitAPIUrl": "http://localhost:3332/v2",\n        "issuer": "did:web:uncefact.github.io:project-vckit:test-and-development",\n        "headers": {\n          "Authorization": "Bearer test123"\n        }\n      },\n      "traceabilityEvent": {\n        "context": ["https://www.w3.org/2018/credentials/v1", "https://gs1.org/voc/"],\n        "type": ["DigitalTraceabilityEvent"],\n        "renderTemplate": [\n          {\n            "type": "html",\n            "template": "<div><h2>Aggregation Event</h2><p>Parent: {{parentItem.epc}}</p></div>"\n          }\n        ],\n        "dlrIdentificationKeyType": "sscc",\n        "dlrLinkTitle": "Aggregation Event",\n        "dlrVerificationPage": "https://verify.example.com"\n      },\n      "storage": {\n        "url": "http://localhost:3334/v1/documents",\n        "params": {\n          "resultPath": "/uri",\n          "bucket": "verifiable-credentials"\n        },\n        "options": {\n          "method": "POST",\n          "headers": {\n            "Content-Type": "application/json"\n          }\n        }\n      },\n      "dlr": {\n        "dlrAPIUrl": "https://dlr.example.com/api",\n        "dlrAPIKey": "dlr-api-key-12345",\n        "namespace": "gs1",\n        "linkRegisterPath": "/api/resolver"\n      },\n      "identifierKeyPath": "/0/id"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vckit"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Configuration for the VCKit service"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/mock-apps/common/vckit",children:"VCKit"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"traceabilityEvent"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Configuration for the EPCIS Aggregation Event"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/mock-apps/common/credential",children:"Credential"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"storage"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Configuration for storage service"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/mock-apps/common/storage",children:"Storage"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dlr"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Configuration for the Digital Link Resolver"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/mock-apps/common/idr",children:"IDR"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"identifierKeyPath"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"JSON path to the identifier in the credential subject or the object for function and arguments of JSON path to construct identifier"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/mock-apps/common/identifier-key-path",children:"IdentifierKeyPath"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);