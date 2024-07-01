"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[793],{8481:(n,e,i)=>{i.d(e,{Ay:()=>c,RM:()=>s});var t=i(4848),a=i(8453);const s=[];function r(n){const e={admonition:"admonition",p:"p",...(0,a.R)(),...n.components};return(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function c(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},4566:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),a=i(8453),s=i(8481);const r={sidebar_position:117,title:"Scanning App"},c=void 0,o={id:"mock-apps/scanning-app",title:"Scanning App",description:"Description",source:"@site/docs/mock-apps/scanning-app.md",sourceDirName:"mock-apps",slug:"/mock-apps/scanning-app",permalink:"/tests-untp/docs/mock-apps/scanning-app",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/scanning-app.md",tags:[],version:"current",sidebarPosition:117,frontMatter:{sidebar_position:117,title:"Scanning App"},sidebar:"tutorialSidebar",previous:{title:"Component Type",permalink:"/tests-untp/docs/mock-apps/common/component-type"},next:{title:"Verify App",permalink:"/tests-untp/docs/mock-apps/verify-app"}},p={},d=[...s.RM,{value:"Description",id:"description",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Components",id:"components",level:2},{value:"Scanning",id:"scanning",level:3},{value:"Verify",id:"verify",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2}];function l(n){const e={a:"a",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"The default Scanning App is a React-based application that enables users to scan QR codes, verify Digital Product Passports (DPPs), and display the verified credentials. It comprises several components that manage different aspects of the scanning and verification process."}),"\n",(0,t.jsx)(e.h2,{id:"diagram",children:"Diagram"}),"\n",(0,t.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant U as User\n    participant S as Scanner\n    participant V as Verifier\n    participant IP as Identity Provider\n    participant DLR as DLR Service\n    participant VS as Verification Service\n\n    U->>S: Scan QR Code\n    S->>IP: Get DLR URL\n    IP--\x3e>S: Return DLR URL\n    S->>DLR: Fetch DLR Passport\n    DLR--\x3e>S: Return DLR Passport\n    S->>V: Redirect to Verify Page\n    V->>VS: Verify Credential\n    VS--\x3e>V: Return Verification Result\n    V->>U: Display Verified Credential"}),"\n",(0,t.jsx)(e.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(e.h3,{id:"scanning",children:"Scanning"}),"\n",(0,t.jsx)(e.p,{children:"The Scanning component handles the QR code scanning process."}),"\n",(0,t.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant U as User\n    participant S as Scanning Component\n    participant SC as Scanner Component\n    participant IP as Identity Provider\n    participant DLR as DLR Service\n\n    U->>S: Access Scanning Page\n    S->>SC: Initialize Scanner\n    U->>SC: Scan QR Code\n    SC->>S: Return Scanned Data\n    S->>IP: Get DLR URL\n    IP--\x3e>S: Return DLR URL\n    S->>DLR: Fetch DLR Passport\n    DLR--\x3e>S: Return DLR Passport\n    S->>S: Redirect to Verify Page"}),"\n",(0,t.jsx)(e.h3,{id:"verify",children:"Verify"}),"\n",(0,t.jsx)(e.p,{children:"The Verify component manages the verification of the scanned credential."}),"\n",(0,t.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant U as User\n    participant V as Verify Component\n    participant VS as Verification Service\n    participant D as Decryption Service\n\n    U->>V: Access Verify Page\n    V->>D: Decrypt Encrypted VC\n    D--\x3e>V: Return Decrypted VC\n    V->>VS: Send VC for Verification\n    VS--\x3e>V: Return Verification Result\n    V->>U: Display Verified Credential or Error"}),"\n",(0,t.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(e.p,{children:"The application uses a configuration file (app-config.json) to define various settings:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/mock-apps/configuration/system-config",children:"Apps configurations"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/mock-apps/common/identify-provider",children:"Identity provider settings"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/mock-apps/common/default-verification-service-link",children:"Default verification service link"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(e.p,{children:"To use the Scanning App:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Navigate to the home page to view available applications and features."}),"\n",(0,t.jsx)(e.li,{children:"Select the Scanning option within the sidebar to open the QR code scanner."}),"\n",(0,t.jsx)(e.li,{children:"Scan a valid barcode containing an identifier associated with a product."}),"\n",(0,t.jsx)(e.li,{children:"The app will process the scanned data and redirect to the Verify page."}),"\n",(0,t.jsx)(e.li,{children:"The Verify page will display the verified credential."}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var t=i(6540);const a={},s=t.createContext(a);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);