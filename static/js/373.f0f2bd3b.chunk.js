"use strict";(self.webpackChunkdu_6=self.webpackChunkdu_6||[]).push([[373],{9646:function(n,e,r){r.d(e,{Z:function(){return b}});var t,i,o,a,s,l=r(1413),c=r(4925),d=r(168),u=(r(2791),r(2683)),h=r(184),p=u.ZP.div(t||(t=(0,d.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),m=function(n){var e=n.size,r=void 0===e?"40px":e,t=n.borderSize,i=void 0===t?"5px":t;return(0,h.jsx)(p,{size:r,borderSize:i})},f=r(1087),x=["to","kind","type","onClick","children"],g=u.ZP.button(i||(i=(0,d.Z)(["\n  ",";\n  ",";\n  ",";\n  border-radius: 8px;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1;\n  max-width: 100%;\n  padding: 0 20px;\n  display: block;\n  height: ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return"secondary"===n.kind&&(0,u.iv)(o||(o=(0,d.Z)(["\n      background: linear-gradient(\n        to left top,\n        ",",\n        ","\n      );\n      color: ",";\n    "])),(function(n){return n.theme.secondary}),(function(n){return n.theme.primary}),(function(n){return n.theme.grayLight}))}),(function(n){return"ghost"===n.kind&&(0,u.iv)(a||(a=(0,d.Z)(["\n      background: linear-gradient(\n        to left bottom,\n        ",",\n        ","\n      );\n      color: ",";\n    "])),(function(n){return n.theme.accent}),(function(n){return n.theme.secondary}),(function(n){return n.theme.black}))}),(function(n){return"primary"===n.kind&&(0,u.iv)(s||(s=(0,d.Z)(["\n      color: white;\n      background: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}))}),(function(n){return n.height||"66px"})),b=function(n){var e=n.to,r=n.kind,t=void 0===r?"secondary":r,i=n.type,o=void 0===i?"button":i,a=n.onClick,s=void 0===a?function(){}:a,d=n.children,u=(0,c.Z)(n,x),p=u.isLoading?(0,h.jsx)(m,{size:"30px"}):d;return""!==e&&"string"===typeof e?(0,h.jsx)(f.OL,{to:e,className:"inline-block",children:(0,h.jsx)(g,(0,l.Z)((0,l.Z)({kind:t,type:o,onClick:s},u),{},{children:p}))}):(0,h.jsx)(g,(0,l.Z)((0,l.Z)({disabled:!0,kind:t,type:o,onClick:s},u),{},{children:p}))}},102:function(n,e,r){r.d(e,{z:function(){return t.Z}});var t=r(9646)},6356:function(n,e,r){var t,i=r(168),o=(r(2791),r(2683)),a=r(184),s=o.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 10px;\n  margin-bottom: 25px;\n"])));e.Z=function(n){var e=n.children;return(0,a.jsx)(s,{children:e})}},3330:function(n,e,r){r.d(e,{g:function(){return t.Z},Y:function(){return o}});var t=r(6356),i=(r(2791),r(184)),o=function(n){var e=n.children;return(0,i.jsx)("div",{className:"flex flex-wrap gap-5",children:e})}},3031:function(n,e,r){var t=r(1413),i=r(4925),o=r(2791),a=r(184),s=["name","className","progress","image","handleDeleteImage"];e.Z=function(n){var e=n.name,r=n.className,l=void 0===r?"":r,c=n.progress,d=void 0===c?0:c,u=n.image,h=void 0===u?"":u,p=n.handleDeleteImage,m=void 0===p?function(){}:p,f=(0,i.Z)(n,s);return(0,a.jsxs)("label",{className:"".concat(l," cursor-pointer flex items-center justify-center border border-dashed w-full h-[300px] relative overflow-hidden group"),children:[(0,a.jsx)("input",(0,t.Z)({type:"file",name:e,className:"hidden-input",onChange:function(){}},f)),!h&&0===d&&(0,a.jsxs)("div",{className:"flex flex-col items-center text-center pointer-events-none",children:[(0,a.jsx)("img",{src:"/img-upload.png",alt:"upload-img",className:"max-w-[80px] mb-5"}),(0,a.jsx)("p",{className:"font-semibold",children:"Choose photo"})]}),h&&(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)("img",{src:h,className:"object-cover w-full h-full",alt:""}),(0,a.jsx)("button",{type:"button",className:"absolute z-10 flex items-center justify-center invisible w-16 h-16 text-red-500 transition-all bg-white rounded-full opacity-0 cursor-pointer group-hover:opacity-100 group-hover:visible",onClick:m,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),!h&&(0,a.jsx)("div",{className:"absolute bottom-0 left-0 w-10 h-1 transition-all bg-green-400 image-upload-progress",style:{width:"".concat(d,"%")}}),!h&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"bg-[#1c0a4d] absolute inset-0 w-full h-full transition-all opacity-0 z-9",style:{opacity:d/100}})})]})}},9248:function(n,e,r){var t,i=r(1413),o=r(4925),a=r(168),s=(r(2791),r(2683)),l=r(1134),c=r(184),d=["name","type","children","control"],u=s.ZP.div(t||(t=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    background: #000648;\n    width: 100%;\n    padding: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 8px;\n    transition: all 0.2s linear;\n    color: ",";\n    font-size: 20px;\n  }\n  input:focus {\n    background-color: transparent!important;\n    border-color: ",";\n  }\n  input::-webkit-input-placeholder {\n    color: #b2b3bd;\n  }\n  input::-moz-input-placeholder {\n    color: #b2b3bd;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n"])),(function(n){return n.hasIcon?"16px 60px 16px 20px":"16px 20px"}),(function(n){return n.theme.grayF3}),(function(n){return n.theme.grayf1}),(function(n){return n.theme.black}),(function(n){return n.theme.primary}));e.Z=function(n){var e=n.name,r=void 0===e?"":e,t=n.type,a=void 0===t?"text":t,s=n.children,h=n.control,p=(0,o.Z)(n,d),m=(0,l.bc)({control:h,name:r,defaultValue:""}).field;return(0,c.jsxs)(u,{hasIcon:!!s,children:[(0,c.jsx)("input",(0,i.Z)((0,i.Z)({id:r,type:a},m),p)),s?(0,c.jsx)("div",{className:"input-icon",children:s}):null]})}},3117:function(n,e,r){r.d(e,{I:function(){return t.Z}});var t=r(9248)},3453:function(n,e,r){var t,i=r(1413),o=r(4925),a=r(168),s=(r(2791),r(2683)),l=r(184),c=["htmlFor","children"],d=s.ZP.label(t||(t=(0,a.Z)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 20px;\n  cursor: pointer;\n"])),(function(n){return n.theme.gray4b}));e.Z=function(n){var e=n.htmlFor,r=void 0===e?"":e,t=n.children,a=(0,o.Z)(n,c);return(0,l.jsx)(d,(0,i.Z)((0,i.Z)({htmlFor:r},a),{},{children:t}))}},2753:function(n,e,r){var t,i=r(168),o=(r(2791),r(2683)),a=r(184),s=o.ZP.span(t||(t=(0,i.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n"])));e.Z=function(n){var e=n.children,r=n.type,t="text-gray-500 bg-gray-100";switch(void 0===r?"default":r){case"success":t="text-#008000-500 bg-green-100";break;case"warning":t="text-orange-500 bg-orange-100";break;case"danger":t="text-red-500 bg-red-100"}return(0,a.jsx)(s,{className:t,children:e})}},4954:function(n,e,r){r.d(e,{O:function(){return i.Z},_:function(){return t.Z}});var t=r(3453),i=r(2753)},1418:function(n,e,r){r(2791);var t=r(184);e.Z=function(n){var e=n.title,r=void 0===e?"":e,i=n.desc,o=void 0===i?"":i,a=n.children;return(0,t.jsxs)("div",{className:"flex items-start justify-between mb-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"dashboard-heading",children:r}),(0,t.jsx)("p",{className:"dashboard-short-desc",children:o})]}),a]})}},373:function(n,e,r){r.r(e);var t=r(102),i=r(3330),o=r(3031),a=r(3117),s=r(4954),l=r(1418),c=(r(2791),r(1134)),d=r(184);e.default=function(){var n=(0,c.cI)({mode:"onChange"}).control;return(0,d.jsxs)("div",{children:[(0,d.jsx)(l.Z,{title:"Account information",desc:"Update your account information"}),(0,d.jsxs)("form",{children:[(0,d.jsx)("div",{className:"mb-10 text-center",children:(0,d.jsx)(o.Z,{className:"w-[200px] h-[200px] !rounded-full min-h-0 mx-auto"})}),(0,d.jsxs)("div",{className:"form-layout",children:[(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"Fullname"}),(0,d.jsx)(a.I,{control:n,name:"fullname",placeholder:"Enter your fullname"})]}),(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"Username"}),(0,d.jsx)(a.I,{control:n,name:"username",placeholder:"Enter your username"})]})]}),(0,d.jsxs)("div",{className:"form-layout",children:[(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"Date of Birth"}),(0,d.jsx)(a.I,{control:n,name:"birthday",placeholder:"dd/mm/yyyy"})]}),(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"Mobile Number"}),(0,d.jsx)(a.I,{control:n,name:"phone",placeholder:"Enter your phone number"})]})]}),(0,d.jsxs)("div",{className:"form-layout",children:[(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"Email"}),(0,d.jsx)(a.I,{control:n,name:"email",type:"email",placeholder:"Enter your email address"})]}),(0,d.jsx)(i.g,{})]}),(0,d.jsxs)("div",{className:"form-layout",children:[(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"New Password"}),(0,d.jsx)(a.I,{control:n,name:"password",type:"password",placeholder:"Enter your password"})]}),(0,d.jsxs)(i.g,{children:[(0,d.jsx)(s._,{children:"Confirm Password"}),(0,d.jsx)(a.I,{control:n,name:"confirmPassword",type:"password",placeholder:"Enter your confirm password"})]})]}),(0,d.jsx)(t.z,{kind:"primary",className:"mx-auto w-[200px]",children:"Update"})]})]})}}}]);
//# sourceMappingURL=373.f0f2bd3b.chunk.js.map