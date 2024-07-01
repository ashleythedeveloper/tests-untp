"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3169],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>o});var r=t(4848),i=t(8453);const o=[];function s(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},4259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(4848),i=t(8453),o=t(8481);const s={sidebar_position:119,title:"Conformity Credential"},a=void 0,c={id:"mock-apps/conformity-credential",title:"Conformity Credential",description:"Description",source:"@site/docs/mock-apps/conformity-credential.md",sourceDirName:"mock-apps",slug:"/mock-apps/conformity-credential",permalink:"/tests-untp/docs/mock-apps/conformity-credential",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/conformity-credential.md",tags:[],version:"current",sidebarPosition:119,frontMatter:{sidebar_position:119,title:"Conformity Credential"},sidebar:"tutorialSidebar",previous:{title:"Verify App",permalink:"/tests-untp/docs/mock-apps/verify-app"}},p={},l=[...o.RM,{value:"Description",id:"description",level:2},{value:"Manually Import Conformity Credential",id:"manually-import-conformity-credential",level:3},{value:"Create Conformity Credential Within Mock App System",id:"create-conformity-credential-within-mock-app-system",level:3},{value:"Request Conformity Credential from External Service",id:"request-conformity-credential-from-external-service",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This document outlines three methods for creating and using conformity credentials within the mock app system. Each method offers different levels of automation and integration with external services."}),"\n",(0,r.jsx)(n.h3,{id:"manually-import-conformity-credential",children:"Manually Import Conformity Credential"}),"\n",(0,r.jsx)(n.p,{children:"This method involves manually creating and importing a conformity credential."}),"\n",(0,r.jsx)(n.p,{children:"Steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Craft the conformity credential payload based on the ",(0,r.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential#versions",children:"desired schema"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Sign the credential using the ",(0,r.jsx)(n.a,{href:"/docs/mock-apps/dependent-services/verifiable-credential-service",children:"verifiable credential service"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Store the credential in an external or ",(0,r.jsx)(n.a,{href:"/docs/mock-apps/dependent-services/storage-service",children:"local storage service"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Include the URL to the conformity credential within the DPP data props in the app config."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example config snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Steel Mill 1",\n  "type": "producer",\n  "assets": {\n    "logo": "https://example.com/Logo.jpg",\n    "brandTitle": "Steel Mill 1"\n  },\n  "features": [\n    {\n      "name": "Issue DPP",\n      "id": "produce_product",\n      "components": [\n        {\n          "name": "JsonForm",\n          "type": "EntryData",\n          "props": {\n            "schema": {\n              "type": "object",\n              "properties": {\n                "conformityClaim": {\n                  "type": "array",\n                  "items": {\n                    "type": "object",\n                    "properties": {\n                      "topic": { "type": "string" },\n                      "standardOrRegulation": { "type": "string" },\n                      "criteriaReference": { "type": "string" },\n                      "claimedValues": {\n                        "type": "array",\n                        "items": {\n                          "type": "object",\n                          "properties": {\n                            "name": { "type": "string" },\n                            "value": {\n                              "type": "object",\n                              "properties": {\n                                "value": { "type": "number" },\n                                "unit": { "type": "string" }\n                              }\n                            },\n                            "accuracy": { "type": "number" }\n                          }\n                        }\n                      },\n                      "benchmarkValue": {\n                        "type": "object",\n                        "properties": {\n                          "name": { "type": "string" },\n                          "value": {\n                            "type": "object",\n                            "properties": {\n                              "value": { "type": "number" },\n                              "unit": { "type": "string" }\n                            }\n                          }\n                        }\n                      },\n                      "benchmarkReference": { "type": "string" },\n                      "conformance": { "type": "boolean" },\n                      "conformityEvidence": {\n                        "type": "object",\n                        "properties": {\n                          "type": { "type": "string" },\n                          "assuranceLevel": { "type": "string" },\n                          "reference": { "type": "string" }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            },\n            "data": {\n              "conformityClaim": [\n                {\n                  "topic": "environment.emissions",\n                  "standardOrRegulation": "https://example.org/standards/environment",\n                  "criteriaReference": "https://example.org/standards/environment/criteria",\n                  "claimedValues": [\n                    { "name": "GHG Emissions", "value": { "value": 50, "unit": "KG_CO2E" }, "accuracy": 0.98 }\n                  ],\n                  "benchmarkValue": { "name": "Industry Benchmark", "value": { "value": 60, "unit": "KG_CO2E" } },\n                  "benchmarkReference": "https://example.org/benchmarks/environment",\n                  "conformance": true,\n                  "conformityEvidence": {\n                    "type": "w3c_vc",\n                    "assuranceLevel": "3rdParty",\n                    "reference": "https://storage.example.com/conformity-credentials/steel-mill-1-emissions.json"\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ],\n      "services": []\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-conformity-credential-within-mock-app-system",children:"Create Conformity Credential Within Mock App System"}),"\n",(0,r.jsx)(n.p,{children:"This method involves creating the conformity credential within the mock app system using a feature with a JsonForm component and storing it in local storage or a storage service."}),"\n",(0,r.jsx)(n.p,{children:"Example config snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Steel Mill 1",\n  "type": "producer",\n  "features": [\n    {\n      "name": "Create Conformity Credential",\n      "id": "create_conformity_credential",\n      "components": [\n        {\n          "name": "JsonForm",\n          "type": "EntryData",\n          "props": {\n            "schema": {\n              "type": "object",\n              "properties": {\n                "topic": { "type": "string" },\n                "standardOrRegulation": { "type": "string" },\n                "criteriaReference": { "type": "string" },\n                "claimedValues": {\n                  "type": "array",\n                  "items": {\n                    "type": "object",\n                    "properties": {\n                      "name": { "type": "string" },\n                      "value": {\n                        "type": "object",\n                        "properties": {\n                          "value": { "type": "number" },\n                          "unit": { "type": "string" }\n                        }\n                      },\n                      "accuracy": { "type": "number" }\n                    }\n                  }\n                },\n                "benchmarkValue": {\n                  "type": "object",\n                  "properties": {\n                    "name": { "type": "string" },\n                    "value": {\n                      "type": "object",\n                      "properties": {\n                        "value": { "type": "number" },\n                        "unit": { "type": "string" }\n                      }\n                    }\n                  }\n                },\n                "benchmarkReference": { "type": "string" },\n                "conformance": { "type": "boolean" }\n              }\n            }\n          }\n        },\n        {\n          "name": "CustomButton",\n          "type": "Submit",\n          "props": {\n            "label": "Create Conformity Credential"\n          }\n        }\n      ],\n      "services": [\n        {\n          "name": "mergeToLocalStorage",\n          "parameters": [\n            {\n              "storageKey": "Steel_Mill_1_conformity_credentials",\n              "objectKeyPath": "/topic"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"request-conformity-credential-from-external-service",children:"Request Conformity Credential from External Service"}),"\n",(0,r.jsx)(n.p,{children:"This method uses the ConformityCredential component to request a conformity credential from an external service and manage the received credentials."}),"\n",(0,r.jsx)(n.p,{children:"Example config snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Steel Mill 1",\n  "type": "producer",\n  "features": [\n    {\n      "name": "Request Conformity Credential",\n      "id": "request_conformity_credential",\n      "components": [\n        {\n          "name": "ConformityCredential",\n          "type": "Void",\n          "props": {\n            "credentialRequestConfigs": [\n              {\n                "url": "https://example.com/emissions-assessment",\n                "params": {},\n                "options": {\n                  "headers": [],\n                  "method": "POST"\n                },\n                "credentialName": "Emissions Assessment",\n                "credentialPath": "/body/credential",\n                "appOnly": "Steel Mill 1"\n              }\n            ],\n            "storedCredentialsConfig": {\n              "url": "https://storage.example.com",\n              "params": {},\n              "options": {\n                "bucket": "conformity-credentials"\n              },\n              "type": "s3"\n            }\n          }\n        }\n      ],\n      "services": []\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);