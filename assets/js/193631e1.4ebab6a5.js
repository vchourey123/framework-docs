"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[2731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Template Manager",description:"Managing different templates in an app"},i=void 0,p={unversionedId:"concepts-visual-editor/template-manager",id:"concepts-visual-editor/template-manager",title:"Template Manager",description:"Managing different templates in an app",source:"@site/docs/concepts-visual-editor/template-manager.md",sourceDirName:"concepts-visual-editor",slug:"/concepts-visual-editor/template-manager",permalink:"/concepts-visual-editor/template-manager",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/concepts-visual-editor/template-manager.md",tags:[],version:"current",frontMatter:{title:"Template Manager",description:"Managing different templates in an app"},sidebar:"docs",previous:{title:"Component Manager",permalink:"/concepts-visual-editor/component-manager"},next:{title:"Breakpoints",permalink:"/concepts-visual-editor/breakpoints"}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During app development, often it is helpful to group a set of components so that they can be used quickly at different places in our app with the same style and custom properties. E.g. we may need multiple search boxes in our app in different pages. We can group them together and create a template."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Template Manager")," lists all the templates that can be used during development. "),(0,a.kt)("p",null,"The template manager contains two categories of templates:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User generated"),(0,a.kt)("li",{parentName:"ol"},"Default")),(0,a.kt)("p",null,"We can create a new template or use an existing one."))}u.isMDXComponent=!0}}]);