"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3187],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>d});var i=t(4848),s=t(8453);const d=[];function r(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(4848),s=t(8453),d=t(8481);const r={sidebar_position:34,title:"Construct Data"},a=void 0,c={id:"mock-apps/common/construct-data",title:"Construct Data",description:"Description",source:"@site/docs/mock-apps/common/construct-data.md",sourceDirName:"mock-apps/common",slug:"/mock-apps/common/construct-data",permalink:"/docs/mock-apps/common/construct-data",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/common/construct-data.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_position:34,title:"Construct Data"},sidebar:"tutorialSidebar",previous:{title:"Local Storage",permalink:"/docs/mock-apps/common/local-storage"},next:{title:"Identify Provider",permalink:"/docs/mock-apps/common/identify-provider"}},o={},l=[...d.RM,{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3},{value:"Definitions",id:"definitions",level:3},{value:"mappingFields",id:"mappingfields",level:4},{value:"dummyFields",id:"dummyfields",level:4},{value:"generationFields",id:"generationfields",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"constructData"})," object defines the schema for constructing event data, including field mappings, default values, and data generation rules. It is used in the ",(0,i.jsx)(n.a,{href:"/docs/mock-apps/components/json-form",children:"Json Form component"})," and is used when data needs to be mapped from one credential to another."]}),"\n",(0,i.jsx)(n.p,{children:"For example, when values from a DPP need to be mapped to properties within a transaction event or transformation event credential."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "mappingFields": [\n        {\n        "sourcePath": "/vc/credentialSubject/productIdentifier/0/identifierValue",\n        "destinationPath": "/eventID"\n        },\n        {\n        "sourcePath": "/vc/credentialSubject/productIdentifier/0/identifierValue",\n        "destinationPath": "/epcList/index/name"\n        },\n        {\n        "sourcePath": "/linkResolver",\n        "destinationPath": "/epcList/index/itemID"\n        }\n    ],\n    "dummyFields": [\n        {\n        "path": "/action",\n        "data": "observe"\n        },\n        {\n        "path": "/disposition",\n        "data": "https://ref.gs1.org/cbv/Disp/in_transit"\n        },\n        {\n        "path": "/bizStep",\n        "data": "https://ref.gs1.org/cbv/BizStep/receiving"\n        },\n        {\n        "path": "/bizLocation",\n        "data": "https://example.com/warehouse"\n        },\n        {\n        "path": "/sourceParty",\n        "data": {\n            "id": "did:web:api.acrs.pyx.io:top-line-steel",\n            "name": "Top Line Steel",\n            "identifiers": [\n            {\n                "scheme": "https://example.com/scheme/source",\n                "identifierValue": "SRC123456",\n                "binding": {\n                "type": "w3c_vc",\n                "assuranceLevel": "3rdParty",\n                "reference": "https://example.com/source_evidence"\n                }\n            }\n            ]\n        }\n        },\n        {\n        "path": "/destinationParty",\n        "data": {\n            "id": "did:web:api.acrs.pyx.io:steel-processor",\n            "name": "Steel Processor",\n            "identifiers": [\n            {\n                "scheme": "https://example.com/scheme/destination",\n                "identifierValue": "DST7891011",\n                "binding": {\n                "type": "w3c_vc",\n                "assuranceLevel": "3rdParty",\n                "reference": "https://example.com/destination_evidence"\n                }\n            }\n            ]\n        }\n        }\n    ],\n    "generationFields": [\n        {\n        "path": "/eventID",\n        "handler": "generateIdWithSerialNumber"\n        },\n        {\n        "path": "/eventTime",\n        "handler": "generateCurrentDatetime"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mappingFields"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{children:"An array of objects that define how data should be mapped from source paths to destination paths"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/construct-data#mappingfields",children:"MappingFields"}),"[]"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dummyFields"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{children:"An array of objects that specify default values for certain fields in the event data"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/construct-data#dummyfields",children:"DummyFields"}),"[]"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"generationFields"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{children:"An array of objects that define fields whose values should be dynamically generated"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/construct-data#generationfields",children:"GenerationFields"}),"[]"]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"mappingfields",children:"mappingFields"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sourcePath"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The path in the source data where the value should be taken from"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationPath"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The path in the destination data where the value should be placed"}),(0,i.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"dummyfields",children:"dummyFields"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The path in the event data where the default value should be set"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"data"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The default value to be set at the specified path"}),(0,i.jsx)(n.td,{children:"Any"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"generationfields",children:"generationFields"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The path in the event data where the generated value should be set"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"handler"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The name of the function or method that should be used to generate the value"}),(0,i.jsx)(n.td,{children:"Handler"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"This structure allows for flexible data construction by mapping existing data, providing default values, and generating dynamic data as needed for the event."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mappingFields"})," define how data is transferred from source to destination, ",(0,i.jsx)(n.code,{children:"dummyFields"})," set default values, and ",(0,i.jsx)(n.code,{children:"generationFields"})," specify which fields should have their values dynamically generated using specific handler functions."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);