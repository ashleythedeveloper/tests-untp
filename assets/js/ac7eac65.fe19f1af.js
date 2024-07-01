"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2344],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var r=t(4848),i=t(8453);const s=[];function o(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},3880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),i=t(8453),s=t(8481);const o={sidebar_position:8,title:"System"},a=void 0,c={id:"mock-apps/configuration/system-config",title:"System",description:"This is a high-level system configuration used to brand the mock app system, define the apps contained within the mock app system, and define the connections to common external services that each app can use.",source:"@site/docs/mock-apps/configuration/system-config.md",sourceDirName:"mock-apps/configuration",slug:"/mock-apps/configuration/system-config",permalink:"/tests-untp/docs/mock-apps/configuration/system-config",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/configuration/system-config.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"System"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/tests-untp/docs/mock-apps/configuration/"},next:{title:"General Feature",permalink:"/tests-untp/docs/mock-apps/configuration/general-feature-config"}},l={},d=[...s.RM,{value:"Diagram",id:"diagram",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(n.p,{children:"This is a high-level system configuration used to brand the mock app system, define the apps contained within the mock app system, and define the connections to common external services that each app can use."}),"\n",(0,r.jsx)(n.p,{children:"An example of a common service that is shared across all mock apps is a mock or real service which serves information about products like the global VerifiedByGS1 service, which given an identifier, can return generic information about that product, but more importantly a link to the Identity Resolver service of the value chain actor."}),"\n",(0,r.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"graph TD\n    A[Mock App System Config]\n    A --\x3e B[Name]\n    A --\x3e C[Styles]\n    A --\x3e D[Apps]\n    A --\x3e E[General Features]\n    A --\x3e F[Identify Provider]\n    A --\x3e G[Default Verification Service Link]\n\n    D --\x3e D1[App 1]\n    D --\x3e D2[App 2]\n\n    E --\x3e E1[General Feature 1]\n    E --\x3e E2[General Feature 2]"}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The name of the mock app system (displayed in the header)"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styles"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Custom styling options for the overall system"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/style",children:"Style"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"generalFeatures"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"A list of common features accessible across all apps"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/mock-apps/configuration/general-feature-config",children:"GeneralFeature"}),"[]"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"apps"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"A collection of individual apps representing different actors in the value chain"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/mock-apps/configuration/app-config",children:"App"}),"[]"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"identifyProvider"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The service used to resolve identifiers to their respective Identity Resolver Services (E.g. Mock Verified By GS1 Service)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/identify-provider",children:"IdentifyProvider"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"defaultVerificationServiceLink"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The default link to the verification service for credential verification (used by the verify page)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/default-verification-service-link",children:"DefaultVerificationServiceLink"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Steel Value Chain Example",\n  "styles": {\n    "primaryColor": "rgb(255, 207, 7)",\n    "secondaryColor": "black",\n    "tertiaryColor": "black"\n  },\n  "generalFeatures": [\n    {\n      "name": "General features",\n      "type": "",\n      "styles": {\n        "primaryColor": "rgb(255, 207, 7)",\n        "secondaryColor": "black",\n        "tertiaryColor": "black"\n      },\n      "features": []\n    }\n  ],\n  "apps": [\n    {\n      "name": "Steel Mill 1",\n      "type": "producer",\n      "assets": {\n        "logo": "https://example.com/Logo.jpg",\n        "brandTitle": "Steel Mill 1",\n        "passportVC": "",\n        "transactionEventVC": ""\n      },\n      "styles": {\n        "primaryColor": "#b22166",\n        "secondaryColor": "#391561",\n        "tertiaryColor": "#ffffff"\n      },\n      "features": [\n        {\n          "name": "Issue DPP",\n          "id": "produce_product",\n          "components": [\n            ...\n          ],\n          "services": [\n          ...\n          ]\n        },\n        {\n          "name": "Sale Steel",\n          "id": "transaction_product",\n          "components": [...],\n          "services": [...]\n        }\n      ]\n    },\n    {\n      "name": "Steel Mill 2",\n      "type": "producer",\n      "assets": {\n        "logo": "https://example.com/Logo.jpg",\n        "brandTitle": "Steel Mill 2",\n        "passportVC": "",\n        "transactionEventVC": ""\n      },\n      "styles": {\n        "primaryColor": "#b22166",\n        "secondaryColor": "#391561",\n        "tertiaryColor": "#ffffff"\n      },\n      "features": [\n        {\n          "name": "Issue DPP",\n          "id": "produce_product",\n          "components": [\n            ...\n          ],\n          "services": [\n          ...\n          ]\n        },\n        {\n          "name": "Sale Steel",\n          "id": "transaction_product",\n          "components": [...],\n          "services": [...]\n        }\n      ]\n    },\n    {\n      "name": "Steel Processor",\n      "type": "processor",\n      "assets": {\n        "logo": "https://example.com/Logo.jpg",\n        "brandTitle": "Steel Processor",\n      },\n      "styles": {\n        "primaryColor": "#b22166",\n        "secondaryColor": "#391561",\n        "tertiaryColor": "#ffffff"\n      },\n      "features": [\n        {\n          "name": "Process Steel",\n          "id": "process_product",\n          "components": [...],\n          "services": [...]\n        }\n      ]\n    }\n  ],\n  "identifyProvider": {\n    "type": "gs1",\n    "url": "http://localhost:3333/products"\n  },\n  "defaultVerificationServiceLink": {\n    "title": "Default Verification Service",\n    "context": "Default Verification Service",\n    "type": "application/json",\n    "href": "http://localhost:3332/agent/routeVerificationCredential",\n    "hreflang": ["en"],\n    "apiKey": "test123"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);