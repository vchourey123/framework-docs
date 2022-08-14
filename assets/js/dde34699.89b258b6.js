"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[1190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"Install Atri using pipenv",description:"How to install Atri Framework when you are using pipenv virtual environment",slug:"getting-started/installation/using-pipenv"},o=void 0,l={unversionedId:"install_with_pipenv",id:"install_with_pipenv",title:"Install Atri using pipenv",description:"How to install Atri Framework when you are using pipenv virtual environment",source:"@site/docs/install_with_pipenv.md",sourceDirName:".",slug:"/getting-started/installation/using-pipenv",permalink:"/getting-started/installation/using-pipenv",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/install_with_pipenv.md",tags:[],version:"current",frontMatter:{title:"Install Atri using pipenv",description:"How to install Atri Framework when you are using pipenv virtual environment",slug:"getting-started/installation/using-pipenv"},sidebar:"docs",previous:{title:"Install Prerequisites",permalink:"/getting-started/installation/install_prereqs"},next:{title:"Install Atri using conda",permalink:"/getting-started/installation/using-conda"}},p={},s=[{value:"Create a Project Directory",id:"create-a-project-directory",level:3},{value:"Install <code>atri</code> CLI",id:"install-atri-cli",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"create-a-project-directory"},"Create a Project Directory"),(0,i.kt)("p",null,"Create an empty directory anywhere in your repository. It will later contain all the files for your app. In this example, we are creating a directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"my_app"),". You can choose any name for this directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir my_app\n")),(0,i.kt)("h3",{id:"install-atri-cli"},"Install ",(0,i.kt)("inlineCode",{parentName:"h3"},"atri")," CLI"),(0,i.kt)("p",null,"From inside the app directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"my_app")," in this example, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd my_app\npipenv install atri\n")),(0,i.kt)("h3",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Congratulations! Atri framework has been successfully installed. "),(0,i.kt)("p",null,"Let us now ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/start-engine"},"start the Atri engine"),"."))}u.isMDXComponent=!0}}]);