(self.webpackChunkrolissalim_github_io=self.webpackChunkrolissalim_github_io||[]).push([[251],{9589:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),l=["defaultImage"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const c=function(e){var t=e.defaultImage,r=void 0===t?"/static/no-image.svg":t,i=s(e,l),c=a((0,n.useState)(!1),2),u=c[0],f=c[1],m=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(!u&&m.current){var e=new IntersectionObserver((function(e){a(e,1)[0].intersectionRatio>0&&f(!0)}));return e.observe(m.current),function(){return e.disconnect()}}}),[u,m]),"/cdnnull"==i.src?n.createElement("img",{src:r,className:null==i?void 0:i.className}):u?n.createElement("img",o({},i,{onError:function(e){e.target.onerror=null,e.target.src=r}})):n.createElement(n.Fragment,null,n.createElement("div",{className:"img-placeholder",ref:m},"No Image"))}},7933:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});var n=r(381),l=r.n(n),o=(r(9218),r(6609)),a=function(){return o.ZP.language||"undefined"!=typeof window&&window.localStorage.i18nextLng||"en"};function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD-MM-YYYY HH:mm",r=a(),n=l()(e).locale(r).format(t)||"";return"Invalid date"!=n?n:"-"}},4796:(e,t,r)=>{"use strict";r.d(t,{Z:()=>D});var n=r(9589),l=r(7294);function o(e){var t=e.data,r=e.handleClick,o=e.height,a=void 0===o?"5rem":o,i=e.width,s=void 0===i?"8rem":i;return l.createElement(l.Fragment,null,l.createElement("div",{className:"me-2 d-flex justify-content-start my-2"},null==t?void 0:t.map((function(e,t){return l.createElement("div",{key:t,className:"me-1 pointer",style:{height:a,width:s},onClick:function(){return function(e){r&&r(e)}(e)}},l.createElement(n.Z,{src:e||"-",className:"fit"}))}))))}var a=r(6025);function i(e){var t=e.children,r=e.variant,o=void 0===r?"":r,i=e.className,s=void 0===i?"":i,c=e.image,u=e.height,f=void 0===u?"10rem":u,m=e.handleSelected,j=e.item;return l.createElement(l.Fragment,null,l.createElement(a.Z,{bg:o,className:"mb-2 ".concat(s)},l.createElement("div",{className:" ".concat(m?" pointer ":""),style:{height:f},onClick:function(){return function(e){m&&m(e)}(j)}},l.createElement(n.Z,{src:c,className:"fit card-img-top",defaultImage:"/static/no-image.svg"})),l.createElement(a.Z.Body,null,t)))}var s=r(1881);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const y=function(e){var t=e.modalProps,r=e.children,n=j((0,l.useState)({show:!1,approved:!1,size:(null==t?void 0:t.size)||"sm",icon:"",title:"Data",textApproved:"Yes",classApproved:"primary",textDecline:"No",scrollable:!1}),2),o=n[0],a=n[1];(0,l.useEffect)((function(){a(f(f({},o),t))}),[t]);return l.createElement(s.Z,{className:"confirm-delete",centered:!0,backdrop:"static",keyboard:!1,size:(null==o?void 0:o.size)||"lg",show:null==o?void 0:o.show,onHide:function(){a(f(f({},o),{},{show:!1}))},scrollable:null==o?void 0:o.scrollable},l.createElement(s.Z.Header,{closeButton:!0},l.createElement(s.Z.Title,null,null==o?void 0:o.title)),l.createElement(s.Z.Body,null,r))};var b=r(6486),v=r(4051),g=r(1555),p=r(7977),h=r(1072);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){var t=e.height,r=void 0===t?"30rem":t,a=e.images,i=e.heightHorinzotal,s=void 0===i?"5rem":i,c=e.widthHorinzotal,u=void 0===c?"8rem":c,f=O((0,l.useState)(),2),m=f[0],j=f[1],d=O((0,l.useState)([]),2),y=d[0],b=d[1];return(0,l.useEffect)((function(){var e;a&&a.length>0&&(e=(null==a?void 0:a[0])||"-"),b(a),j(e)}),[a]),l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("div",{className:"",style:{height:r}},l.createElement(n.Z,{src:m||"-",className:"fit-height card-img-top"}))),l.createElement(o,{data:y,handleClick:j,height:s,width:u}))}const S=function(e){var t=e.dataSelected;return console.log("dataSelected",t),l.createElement(l.Fragment,null,l.createElement(E,{images:null==t?void 0:t.images}))};var k=r(9655);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===P(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const D=function(e){var t=e.data,r=((0,h.$G)().t,x((0,l.useState)(),2)),n=r[0],o=r[1],s=x((0,l.useState)({show:!1,size:"lg",title:"Data Detail"}),2),c=s[0],u=s[1],f=function(e){o((function(){return e})),u((function(t){return A(A({},t),{},{show:!0,title:null==e?void 0:e.name})}))};return console.log("data",t),l.createElement(l.Fragment,null,l.createElement(v.Z,null,null==t?void 0:t.map((function(e,t){var r;return l.createElement(g.Z,{lg:3,md:4,sm:6,xs:12,key:t},l.createElement(i,{handleSelected:f,item:e,className:"shadow-sm border-0",image:(null==e||null===(r=e.images)||void 0===r?void 0:r[0])||"-"},l.createElement(a.Z.Title,{className:"h6"},l.createElement("div",{className:"text-wrap"},null==e?void 0:e.name)),l.createElement("div",null," ",null==e?void 0:e.program_language," "),l.createElement("div",{className:"mb-1 fs-7 text-muted"},null==e?void 0:e.short_description),null!=e&&e.source_code?l.createElement(k.rU,{to:null==e?void 0:e.source_code,target:"_blank"},"source code"):null,null!=e&&e.link?l.createElement(k.rU,{to:null==e?void 0:e.link,target:"_blank"},"view web"):null,l.createElement("div",{className:"d-flex justify-content-between mb-1"},l.createElement("div",{className:""},null==e?void 0:e.period),l.createElement("div",{className:""},l.createElement(p.Z,{bg:(0,b.get)({Development:"warning",Maintenance:"primary",Production:"success","has been upgraded":"info",Pending:"danger","Pending development":"danger","Pending publish":"danger","Cancel development":"danger"},null==e?void 0:e.status)||"primary"},null==e?void 0:e.status)))))}))),l.createElement(y,{modalProps:c},l.createElement(S,{dataSelected:n})))}},6700:(e,t,r)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function l(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=o,e.exports=l,l.id=6700}}]);