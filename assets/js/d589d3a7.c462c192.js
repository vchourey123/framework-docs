"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,title:"Getting Started",description:"A short guide to start using Atri Framework for app development",slug:"/"},o=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"A short guide to start using Atri Framework for app development",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting Started",description:"A short guide to start using Atri Framework for app development",slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/intro"}},p={},s=[{value:"Install Pre-Requisites",id:"install-pre-requisites",level:2},{value:"Install Docker",id:"install-docker",level:3},{value:"Install Python 3.7+",id:"install-python-37",level:3},{value:"Install virtual environment package",id:"install-virtual-environment-package",level:3},{value:"Install Pipenv (preferred)",id:"install-pipenv-preferred",level:4},{value:"Install Conda",id:"install-conda",level:4},{value:"Create an App",id:"create-an-app",level:2},{value:"Create a virual environment",id:"create-a-virual-environment",level:3},{value:"Install <code>atri</code> CLI",id:"install-atri-cli",level:3},{value:"Start the Atri engine",id:"start-the-atri-engine",level:3},{value:"Activate pipenv environment",id:"activate-pipenv-environment",level:4},{value:"Activate conda environment",id:"activate-conda-environment",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-pre-requisites"},"Install Pre-Requisites"),(0,a.kt)("h3",{id:"install-docker"},"Install Docker"),(0,a.kt)("p",null,"The Atri engine hosts visual editor and all the app generation logic and runs inside a docker container, hence, we need to install docker desktop in our system. Installing docker desktop is very easy. Please follow OS specific instructions from docker's official website."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/install/linux-install/"},"Install Docker Desktop on Linux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/install/mac-install/"},"Install Docker Desktop on Mac")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/install/windows-install/"},"Install Docker Desktop on Windows"))),(0,a.kt)("h3",{id:"install-python-37"},"Install Python 3.7+"),(0,a.kt)("p",null,"The Atri framework supports Python 3.7+. If you don't have Python installed already please download latest version of Python from ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"python.org"),"."),(0,a.kt)("h3",{id:"install-virtual-environment-package"},"Install virtual environment package"),(0,a.kt)("p",null,"We enforce best practices for app development, hence, ",(0,a.kt)("inlineCode",{parentName:"p"},"atri")," CLI works only from inside a virtual environment. We currently support two virtual environment packages - ",(0,a.kt)("inlineCode",{parentName:"p"},"pipenv"),"(preferred) and ",(0,a.kt)("inlineCode",{parentName:"p"},"conda"),"."),(0,a.kt)("h4",{id:"install-pipenv-preferred"},"Install Pipenv (preferred)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install --user pipenv\n")),(0,a.kt)("h4",{id:"install-conda"},"Install Conda"),(0,a.kt)("p",null,"Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation"},"this link")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"conda"),"."),(0,a.kt)("h2",{id:"create-an-app"},"Create an App"),(0,a.kt)("p",null,"Create an empty directory. This directory will contain all the files for your app. You can create this empty directory anywhere in your repository. In this example, we are creating a directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app")," and then move into that directory. You can choose any name for this directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir my_app\ncd my_app\n")),(0,a.kt)("h3",{id:"create-a-virual-environment"},"Create a virual environment"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"pipenv")," then run the following command to create an environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pipenv install\n")),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"conda")," then run the following command to create an environment. In this example we are giving the environment the name ",(0,a.kt)("inlineCode",{parentName:"p"},"my_env"),". You can choose any name for this environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda create -y -n my_env python\n")),(0,a.kt)("h3",{id:"install-atri-cli"},"Install ",(0,a.kt)("inlineCode",{parentName:"h3"},"atri")," CLI"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"pipenv")," then run the following command to install ",(0,a.kt)("inlineCode",{parentName:"p"},"atri")," CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pipenv install atri\n")),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"conda")," then run the following command to activate the environment and install ",(0,a.kt)("inlineCode",{parentName:"p"},"atri")," CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda activate my_env\npip install atri\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"my_env")," with your own environment name that you created using ",(0,a.kt)("inlineCode",{parentName:"p"},"conda create ...")," command in previous step.")),(0,a.kt)("h3",{id:"start-the-atri-engine"},"Start the Atri engine"),(0,a.kt)("p",null,"Start Docker if it is not already running. Make sure that you have activated the virutal environment."),(0,a.kt)("h4",{id:"activate-pipenv-environment"},"Activate pipenv environment"),(0,a.kt)("p",null,"From inside ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app")," directory, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pipenv shell\n")),(0,a.kt)("h4",{id:"activate-conda-environment"},"Activate conda environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda activate my_env\n")),(0,a.kt)("p",null,"Once the docker is running and the virtual environment is activated, please run the following command from inside ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"atri start\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This will start the visual editor at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4002"),". If the editor doesn't open automatically in the browser, please open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4002")," in the browser.")))}c.isMDXComponent=!0}}]);