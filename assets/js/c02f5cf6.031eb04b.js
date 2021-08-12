"use strict";(self.webpackChunkin_code_documentation=self.webpackChunkin_code_documentation||[]).push([[9998],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},786:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={sidebar_position:6},u="Abfragen",s={unversionedId:"Bezug/Befehle/Abfragen",id:"Bezug/Befehle/Abfragen",isDocsHomePage:!1,title:"Abfragen",description:"Wenn",source:"@site/docs/Bezug/Befehle/Abfragen.md",sourceDirName:"Bezug/Befehle",slug:"/Bezug/Befehle/Abfragen",permalink:"/docs/Bezug/Befehle/Abfragen",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Wiederhole",permalink:"/docs/Bezug/Befehle/Wiederhole"},next:{title:"Gib",permalink:"/docs/Bezug/Befehle/Gib"}},c=[{value:"Wenn",id:"wenn",children:[]},{value:"Vier Parameter",id:"vier-parameter",children:[]},{value:"Sechs Parameter",id:"sechs-parameter",children:[]},{value:"Beispiel",id:"beispiel",children:[]},{value:"Sonst wenn",id:"sonst-wenn",children:[]},{value:"Beispiel",id:"beispiel-1",children:[]},{value:"Beispiel",id:"beispiel-2",children:[]}],d={toc:c};function p(e){var n=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"abfragen"},"Abfragen"),(0,a.kt)("h2",{id:"wenn"},"Wenn"),(0,a.kt)("p",null,'Der "Wenn" Befehl ben\xf6tigt vier oder sechs Parameter.'),(0,a.kt)("h2",{id:"vier-parameter"},"Vier Parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Wenn [variabelnName] [kleiner/gr\xf6\xdfer/gleich/kleiner-gleich/gr\xf6\xdfer-gleich] [andererVariabelName] ist\n    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist\n")),(0,a.kt)("h2",{id:"sechs-parameter"},"Sechs Parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Wenn [variabelnName] [gedr\xfcckt/ber\xfchrt/nicht-ber\xfchrt] wird rufe [methodenName] auf\n")),(0,a.kt)("h2",{id:"beispiel"},"Beispiel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Erstelle nummer\nSetze den Wert von nummer auf 1\n\nWenn nummer gleich 1 ist\n    Gib "Nummer ist 1" in der Konsole aus\n\nErstelle x als Knopf\nWenn x gedr\xfcckt wird rufe xPressed auf\n\nErstelle xPressed als Methode\n    Gib "x wurde gedr\xfcckt" in der Dialogbox aus \n')),(0,a.kt)("h2",{id:"sonst-wenn"},"Sonst wenn"),(0,a.kt)("p",null,'Der "Sonst wenn" Befehl ben\xf6tigt vier Parameter.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Wenn [variabelnName] [kleiner/gr\xf6\xdfer/gleich/kleiner-gleich/gr\xf6\xdfer-gleich] [andererVariabelName] ist\n    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist \nSonst Wenn [variabelnName] [kleiner/gr\xf6\xdfer/gleich/kleiner-gleich/gr\xf6\xdfer-gleich] [andererVariabelName] ist\n    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist\n")),(0,a.kt)("h2",{id:"beispiel-1"},"Beispiel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Erstelle nummer\nSetze den Wert von nummer auf 1\n\nWenn nummer gleich 1 ist\n    Gib "Nummer ist 1" in der Konsole aus\nSonst wenn nummer gleich 2 ist\n    Gib "Nummer ist 2" in der Konsole aus \n')),(0,a.kt)("h1",{id:"sonst"},"Sonst"),(0,a.kt)("p",null,'Der "Sonst" Befehl ben\xf6tigt null Parameter.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Wenn [variabelnName] [kleiner/gr\xf6\xdfer/gleich/kleiner-gleich/gr\xf6\xdfer-gleich] [andererVariabelName] ist\n    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung wahr ist \nSonst\n    // Andere Befehle, die aufgerufen werden sollen wenn die Bedingung nicht wahr ist\n")),(0,a.kt)("h2",{id:"beispiel-2"},"Beispiel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Erstelle nummer\nSetze den Wert von nummer auf 1\n\nWenn nummer gleich 1 ist\n    Gib "Nummer ist 1" in der Konsole aus\nSonst\n    Gib "Nummer ist nicht 2" in der Konsole aus \n')))}p.isMDXComponent=!0}}]);