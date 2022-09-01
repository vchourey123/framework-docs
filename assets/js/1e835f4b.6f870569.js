"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Navigation via backend",description:"How to navigate from one page to another using Atri framework's controller"},i=void 0,l={unversionedId:"guides-backend/navigate",id:"guides-backend/navigate",title:"Navigation via backend",description:"How to navigate from one page to another using Atri framework's controller",source:"@site/docs/guides-backend/navigate.md",sourceDirName:"guides-backend",slug:"/guides-backend/navigate",permalink:"/guides-backend/navigate",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/guides-backend/navigate.md",tags:[],version:"current",frontMatter:{title:"Navigation via backend",description:"How to navigate from one page to another using Atri framework's controller"},sidebar:"docs",previous:{title:"How-to guides [backend]",permalink:"/category/how-to-guides-backend"},next:{title:"How-to guides [frontend]",permalink:"/category/how-to-guides-frontend"}},p={},s=[{value:"Navigate internally",id:"navigate-internally",level:2},{value:"Navigate externally",id:"navigate-externally",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some situations we might want to navigate from one page to another, but, the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," to navigate to is only known upon a user event i.e. the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," is dynamic. If you want to navigate to a fixed url you can see ",(0,r.kt)("a",{parentName:"p",href:"/concepts-visual-editor/actions-panel#4-internal-navigation"},"navigate internally")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.atrilabs.com/concepts-visual-editor/actions-panel#5-external-navigation"},"navigate externally")," in editor."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," to navigate to should contain some query parameter."),(0,r.kt)("h2",{id:"navigate-internally"},"Navigate internally"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," you want to navigate to is one of the pages from your app, then you can simply provide an email like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def handle_event(at: Atri, req: Request, res: Response):\n    url = "/pagename"\n    res.headers.append("location", url)\n')),(0,r.kt)("p",null,"You can pass query as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import urllib.parse\n\ndef handle_event(at: Atri, req: Request, res: Response):\n    query = {\n        "param1": "value1",\n        "param2": "value2"\n    }\n\n    url = "/pagename" + "?" + urllib.parse.urlencode(query)\n    res.headers.append("location", url)\n')),(0,r.kt)("h2",{id:"navigate-externally"},"Navigate externally"),(0,r.kt)("p",null,"If you want to navigate to an external url, simply pass in the full url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def handle_event(at: Atri, req: Request, res: Response):\n    url = "https://atrilabs.com"\n    res.headers.append("location", url)\n')))}c.isMDXComponent=!0}}]);