"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4129],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>i});var r=t(4848),s=t(8453);const i=[];function o(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},4906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(4848),s=t(8453),i=t(8481);const o={sidebar_position:20,title:"Process Transformation Event"},a=void 0,c={id:"mock-apps/services/process-transformation-event",title:"Process Transformation Event",description:"Description",source:"@site/docs/mock-apps/services/process-transformation-event.md",sourceDirName:"mock-apps/services",slug:"/mock-apps/services/process-transformation-event",permalink:"/tests-untp/docs/mock-apps/services/process-transformation-event",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/services/process-transformation-event.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Process Transformation Event"},sidebar:"tutorialSidebar",previous:{title:"Process Transaction Event",permalink:"/tests-untp/docs/mock-apps/services/process-transaction-event"},next:{title:"Process Aggregation Event",permalink:"/tests-untp/docs/mock-apps/services/process-aggregation-event"}},d={},l=[...i.RM,{value:"Description",id:"description",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"processTransformationEvent"})," service is responsible for processing a transformation event, issuing Verifiable Credentials (VCs) for both the EPCIS transformation event and Digital Product Passports (DPPs), uploading them to storage, and registering link resolvers. It handles the entire lifecycle of creating and managing transformation events and associated DPPs."]}),"\n",(0,r.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\nparticipant C as Client\nparticipant P as processTransformationEvent\nparticipant V as VCKit\nparticipant S as Storage\nparticipant D as DLR\nC->>P: Call processTransformationEvent(data, context)\nP->>P: Validate context\nP->>V: Issue EPCIS VC\nV--\x3e>P: Return EPCIS VC\nP->>S: Upload EPCIS VC\nS--\x3e>P: Return EPCIS VC URL\nP->>D: Register EPCIS link resolver\nD--\x3e>P: Return EPCIS resolver URL\nloop For each output item\nP->>V: Issue DPP VC\nV--\x3e>P: Return DPP VC\nP->>S: Upload DPP VC\nS--\x3e>P: Return DPP VC URL\nP->>D: Register DPP link resolver\nD--\x3e>P: Return DPP resolver URL\nend\nP--\x3e>C: Return EPCIS VC"}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "processTransformationEvent",\n  "parameters": [\n    {\n      "vckit": {\n        "vckitAPIUrl": "https://api.vckit.example.com",\n        "issuer": "did:example:123456789abcdefghi"\n      },\n      "epcisTransformationEvent": {\n        "context": ["https://www.w3.org/2018/credentials/v1", "https://gs1.org/voc/"],\n        "type": ["VerifiableCredential", "EPCISTransformationEvent"],\n        "renderTemplate": [\n          {\n            "type": "html",\n            "template": "<div><h2>Transformation Event</h2><p>Output: {{outputItems.0.epc}}</p></div>"\n          }\n        ],\n        "dlrIdentificationKeyType": "gtin",\n        "dlrLinkTitle": "Transformation Event",\n        "dlrVerificationPage": "https://verify.example.com"\n      },\n      "dlr": {\n        "dlrAPIUrl": "https://dlr.example.com/api",\n        "dlrAPIKey": "dlr-api-key-12345"\n      },\n      "storage": {\n        "url": "https://storage.example.com/upload",\n        "params": {\n          "resultPath": "/url"\n        }\n      },\n      "dpp": {\n        "context": ["https://www.w3.org/2018/credentials/v1", "https://schema.org/"],\n        "type": ["VerifiableCredential", "DigitalProductPassport"],\n        "renderTemplate": [\n          {\n            "type": "html",\n            "template": "<div><h2>Product DPP</h2><p>EPC: {{epc}}</p></div>"\n          }\n        ],\n        "dlrIdentificationKeyType": "gtin",\n        "dlrLinkTitle": "Product DPP",\n        "dlrVerificationPage": "https://verify.example.com"\n      },\n      "dppCredentials": [\n        {\n          "mappingFields": [\n            {\n              "sourcePath": "/vc/credentialSubject/outputItems/0/epc",\n              "destinationPath": "/epc"\n            }\n          ]\n        }\n      ],\n      "identifierKeyPath": "/outputItems/0/epc",\n      "transformationEventCredential": {\n        "mappingFields": [\n          {\n            "sourcePath": "/inputItems",\n            "destinationPath": "/inputQuantityList"\n          },\n          {\n            "sourcePath": "/outputItems",\n            "destinationPath": "/outputQuantityList"\n          }\n        ],\n        "generationFields": [\n          {\n            "path": "/eventTime",\n            "handler": "generateCurrentDatetime"\n          },\n          {\n            "path": "/eventID",\n            "handler": "generateUUID"\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vckit"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Configuration for the VCKit service"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/vckit",children:"VCKit"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"epcisTransformationEvent"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Configuration for the EPCIS Transformation Event"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/credential",children:"Credential"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dlr"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Configuration for the Digital Link Resolver"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/idr",children:"IDR"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"storage"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Configuration for storage service"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/storage",children:"Storage"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dpp"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Configuration for the Digital Product Passport"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/credential",children:"Credential"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dppCredentials"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Mapping configuration for DPP credentials"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/construct-data",children:"Construct Data"}),"[]"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"identifierKeyPath"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"JSON path to the identifier in the credential subject"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"transformationEventCredential"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Mapping and generation configuration for the transformation event credential"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/construct-data",children:"Construct Data"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);