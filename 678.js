(self.webpackChunkrolissalim_github_io=self.webpackChunkrolissalim_github_io||[]).push([[678],{9589:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),a=["defaultImage"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,s,i=[],o=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{if(!o&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u=function(e){var t=e.defaultImage,n=void 0===t?"/static/no-image.svg":t,i=o(e,a),u=s((0,r.useState)(!1),2),c=u[0],m=u[1],d=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(!c&&d.current){var e=new IntersectionObserver((function(e){s(e,1)[0].intersectionRatio>0&&m(!0)}));return e.observe(d.current),function(){return e.disconnect()}}}),[c,d]),"/cdnnull"==i.src?r.createElement("img",{src:n,className:null==i?void 0:i.className}):c?r.createElement("img",l({},i,{onError:function(e){e.target.onerror=null,e.target.src=n}})):r.createElement(r.Fragment,null,r.createElement("div",{className:"img-placeholder",ref:d},"No Image"))}},7933:(e,t,n)=>{"use strict";n.d(t,{i:()=>i});var r=n(381),a=n.n(r),l=(n(9218),n(6609)),s=function(){return l.ZP.language||"undefined"!=typeof window&&window.localStorage.i18nextLng||"en"};function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD-MM-YYYY HH:mm",n=s(),r=a()(e).locale(n).format(t)||"";return"Invalid date"!=r?r:"-"}},5087:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(7294),a=n(6025),l=n(1072);function s(e){var t=e.hideHeader,n=void 0===t||t,s=e.title,i=void 0===s?"":s,o=e.children,u=e.variant,c=void 0===u?"":u,m=e.className,d=void 0===m?"mb-1":m,j=e.classNameHeader,f=void 0===j?"":j,v=e.classNameBody,b=void 0===v?"":v,y=e.styleHeader,g=(0,l.$G)().t;return r.createElement(r.Fragment,null,r.createElement(a.Z,{bg:c,className:"".concat(d)},!n&&r.createElement(a.Z.Header,{style:y,className:"".concat(f)},r.createElement(a.Z.Title,null,g(i))),r.createElement(a.Z.Body,{className:b},o)))}var i=n(7933),o=n(6609);var u=n(4051),c=n(1555);const m=function(){var e=[{name:"PT. eBdesk Teknologi",join:"".concat((0,i.i)("2014-01","MMMM YYYY")," - ").concat(o.ZP.t("now")),status:o.ZP.t("Permanent Employees"),task:["menganalisis kebutuhan suatu aplikasi","menganalisis database","integrasi api","membuat web baru","Menentukan UI/UX","Maintenance semua web di tim smart city"]},{name:"PT. Quadran",join:"2019 - 2022",status:o.ZP.t("Freelance"),task:["Leader freelances yang sudah direkrut","Menganalisis kebutuhan suatu user","Menganalisis database","Integrasi api","Membuat dan menentukan aplikasi berfungsi dengan baik","Membuat timeline supaya proyek sesuai dengan deadline"]}],t=(0,l.$G)().t;return r.createElement(u.Z,null,null==e?void 0:e.map((function(e,n){return r.createElement(c.Z,{key:n,md:6,sm:12},r.createElement(s,{className:"shadow-sm",key:n,title:null==e?void 0:e.name,hideHeader:!1},r.createElement("div",{className:"border-bottom mb-2"},r.createElement("div",null,"Status"),r.createElement("div",null,null==e?void 0:e.status)),r.createElement("div",{className:""},r.createElement("div",null,t("Join")),r.createElement("div",null,null==e?void 0:e.join))))})))};const d=function(){var e=[{key:o.ZP.t("Fullname"),value:"Nurdin Rolissalim"},{key:o.ZP.t("Gender"),value:o.ZP.t("Man")},{key:o.ZP.t("Birthday"),value:(0,i.i)("1986-06-21","DD MMMM YYYY")},{key:"Email",value:["nurdinif14@gmail.com"," nurdin.rolissalim@gmail.com"]}],t=[{key:o.ZP.t("Tertiary Education"),value:"S1 Teknik Informatika"},{key:"IPK",value:3.12},{key:o.ZP.t("University"),value:"UNIKOM"},{key:o.ZP.t("Graduated"),value:(0,i.i)("2013-08-30","DD MMMM YYYY")}];return r.createElement(s,{className:"shadow-sm mb-2"},r.createElement(u.Z,null,r.createElement(c.Z,{md:6,sm:12},null==e?void 0:e.map((function(t,n){var a;return r.createElement("div",{key:n,className:" mb-3 ".concat(n<e.length-1?"border-bottom":null)},r.createElement("div",{key:n},null==t?void 0:t.key),"string"==typeof(null==t?void 0:t.value)?r.createElement("div",null,null==t?void 0:t.value):null==t||null===(a=t.value)||void 0===a?void 0:a.map((function(e,t){return r.createElement("div",{key:t},e)})))}))),r.createElement(c.Z,{md:6,sm:12},null==t?void 0:t.map((function(t,n){return r.createElement("div",{key:n,className:"".concat(n<e.length-1?"border-bottom mb-3":null)},r.createElement("div",{key:n},null==t?void 0:t.key),r.createElement("div",null,null==t?void 0:t.value))})))))};var j=n(9589),f=n(9655);function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,s,i=[],o=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{if(!o&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw a}}return i}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=function(){var e=b((0,r.useState)(),2),t=e[0],n=e[1],a=b((0,r.useState)(""),2),l=a[0],i=a[1],o=b((0,r.useState)(""),2),u=o[0],c=o[1];return(0,r.useEffect)((function(){var e,t,r=[{key:"image",value:"/static/profile.jpg"},{key:"Github Page",value:"https://rolissalim.github.io/"},{key:"Frontend",value:"React js, PHP, "},{key:"Backend",value:"Node js, express js, PHP "},{key:"Tools",value:"Webpack, babel, mapbox, jwt, e-chart, laravel"}];i(null==r||null===(e=r[0])||void 0===e?void 0:e.value),c(null==r||null===(t=r[1])||void 0===t?void 0:t.value),n((function(){return v(r.slice(2))}))}),[]),r.createElement(s,{className:"mb-2 shadow-sm"},r.createElement("div",{className:"container-image-profile mx-auto d-block"},r.createElement(j.Z,{src:l,className:"fit rounded-circle "})),r.createElement("div",{className:"text-center"},"Software Developer"),r.createElement("div",{className:"text-center"},r.createElement(f.rU,{to:u},u)),r.createElement("div",{className:"text-center"},null==t?void 0:t.map((function(e,t){return r.createElement("div",{key:t},null==e?void 0:e.key," : ",null==e?void 0:e.value)}))))};const k=function(){var e=[{name:"Github",link:"https://github.com/rolissalim",icon:"fa-brands fa-github"},{name:"Gitlab",link:"https://gitlab.com/nurdin_rolissalim",icon:"fa-brands fa-square-gitlab"},{name:"youtube",link:"https://www.youtube.com/@nurdinrolissalim",icon:"fa-brands fa-youtube"},{name:"linkedIn",link:"https://www.linkedin.com/in/nurdin-rolissalim-11208a119/",icon:"fa-brands fa-linkedin"},{name:"instagram",link:"https://www.instagram.com/nurdin_rolissalim/",icon:"fab fa-instagram-square"}];return r.createElement(u.Z,null,null==e?void 0:e.map((function(e,t){return r.createElement(c.Z,{key:t,sm:12,md:6},r.createElement(f.rU,{to:null==e?void 0:e.link,className:"nav-link",target:"_blank",rel:"noopener noreferrer"},r.createElement(s,{key:t,className:"shadow-sm mb-1"},r.createElement("h6",{className:"text-center"},r.createElement("i",{className:null==e?void 0:e.icon}),"  ",null==e?void 0:e.name))))})))};const p=function(){return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement(c.Z,{lg:5},r.createElement(h,null),r.createElement(k,null)),r.createElement(c.Z,{lg:7},r.createElement(d,null),r.createElement(m,null))))}},6700:(e,t,n)=>{var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id=6700}}]);