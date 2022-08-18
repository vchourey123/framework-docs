"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[7251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Upload Button",description:"Create an upload button to upload one or many files"},i=void 0,l={unversionedId:"comp-reference/basics/upload",id:"comp-reference/basics/upload",title:"Upload Button",description:"Create an upload button to upload one or many files",source:"@site/docs/comp-reference/basics/upload.md",sourceDirName:"comp-reference/basics",slug:"/comp-reference/basics/upload",permalink:"/comp-reference/basics/upload",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/comp-reference/basics/upload.md",tags:[],version:"current",frontMatter:{title:"Upload Button",description:"Create an upload button to upload one or many files"},sidebar:"docs",previous:{title:"Basics",permalink:"/category/basics"},next:{title:"Data",permalink:"/category/data"}},s={},p=[{value:"Upload one file",id:"upload-one-file",level:2},{value:"Upload many files",id:"upload-many-files",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upload-one-file"},"Upload one file"),(0,o.kt)("p",null,"Drag & drop an ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload")," button from component picker onto the canvas. You can make changes to the look and feel of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload")," button in the styles panel. Once ready with your changes you can hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Publish")," on the top right corner."),(0,o.kt)("p",null,"Now, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," file, the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle_event")," function will be called everytime user uploads a file. Let's assume the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload")," component is ",(0,o.kt)("inlineCode",{parentName:"p"},"upload1"),", then, we can write the following python code -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def handle_event(at: Atri, req: Request, res: Response):\n    # some code for handling other events ...\n\n    # check if file upload event has been triggered\n    if at.upload1.onChange:\n        # sanity check if user has successfully uploaded a file\n        if at.upload1.io.files != None:\n            files = at.upload1.io.files\n            # check if user has uploaded one or more files\n            if len(files) > 0:\n                # grab the first file\n                # Note: files[0].file is a starlette.UploadFile object\n                # It has some information like content_type that can be used\n                # to identify the type of file.\n                uploadFile = files[0].file\n                # get the python's BinaryIO file from starlette.UploadFile\n                binaryFile = uploadFile.file\n                # read the bytes in file\n                data = file.read()\n                # optional - convert bytes into utf-8 format\n                data_utf8 = data.decode()\n                # process data as you process bytes in python ...\n                # process data_utf8 as you process strings in python ...\n")),(0,o.kt)("h2",{id:"upload-many-files"},"Upload many files"),(0,o.kt)("p",null,"If you want to allow user to upload multiple files, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"multiple")," checkbox in ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload")," button's custom panel to checked/ticked. Hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Publish")," when you are ready with your changes."),(0,o.kt)("p",null,"All the python code will stay the same, except, we can read all files in a loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def handle_event(at: Atri, req: Request, res: Response):\n    # some code for handling other events ...\n\n    # check if file upload event has been triggered\n    if at.upload1.onChange:\n        # sanity check if user has successfully uploaded a file\n        if at.upload1.io.files != None:\n            files = at.upload1.io.files\n            # here is the difference, we are looping over all files\n            for i, uploadFile in enumerate(files):\n                # get the python's BinaryIO file from starlette.UploadFile\n                binaryFile = uploadFile.file\n                # read the bytes in file\n                data = binaryFile.read()\n                # optional - convert bytes into utf-8 format\n                data_utf8 = data.decode()\n                # process data as you process bytes in python ...\n                # process data_utf8 as you process strings in python ...\n")))}d.isMDXComponent=!0}}]);