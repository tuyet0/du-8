(self.webpackChunkdu_6=self.webpackChunkdu_6||[]).push([[235],{9646:function(n,e,r){"use strict";r.d(e,{Z:function(){return b}});var t,i,o,a,s,c=r(1413),u=r(4925),d=r(168),l=(r(2791),r(2683)),h=r(184),p=l.ZP.div(t||(t=(0,d.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),f=function(n){var e=n.size,r=void 0===e?"40px":e,t=n.borderSize,i=void 0===t?"5px":t;return(0,h.jsx)(p,{size:r,borderSize:i})},m=r(1087),g=["to","kind","type","onClick","children"],x=l.ZP.button(i||(i=(0,d.Z)(["\n  ",";\n  ",";\n  ",";\n  border-radius: 8px;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1;\n  max-width: 100%;\n  padding: 0 20px;\n  display: block;\n  height: ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return"secondary"===n.kind&&(0,l.iv)(o||(o=(0,d.Z)(["\n      background: linear-gradient(\n        to left top,\n        ",",\n        ","\n      );\n      color: ",";\n    "])),(function(n){return n.theme.secondary}),(function(n){return n.theme.primary}),(function(n){return n.theme.grayLight}))}),(function(n){return"ghost"===n.kind&&(0,l.iv)(a||(a=(0,d.Z)(["\n      background: linear-gradient(\n        to left bottom,\n        ",",\n        ","\n      );\n      color: ",";\n    "])),(function(n){return n.theme.accent}),(function(n){return n.theme.secondary}),(function(n){return n.theme.black}))}),(function(n){return"primary"===n.kind&&(0,l.iv)(s||(s=(0,d.Z)(["\n      color: white;\n      background: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}))}),(function(n){return n.height||"66px"})),b=function(n){var e=n.to,r=n.kind,t=void 0===r?"secondary":r,i=n.type,o=void 0===i?"button":i,a=n.onClick,s=void 0===a?function(){}:a,d=n.children,l=(0,u.Z)(n,g),p=l.isLoading?(0,h.jsx)(f,{size:"30px"}):d;return""!==e&&"string"===typeof e?(0,h.jsx)(m.OL,{to:e,className:"inline-block",children:(0,h.jsx)(x,(0,c.Z)((0,c.Z)({kind:t,type:o,onClick:s},l),{},{children:p}))}):(0,h.jsx)(x,(0,c.Z)((0,c.Z)({disabled:!0,kind:t,type:o,onClick:s},l),{},{children:p}))}},102:function(n,e,r){"use strict";r.d(e,{z:function(){return t.Z}});var t=r(9646)},8119:function(n,e,r){"use strict";var t=r(1413),i=r(4925),o=(r(2791),r(1134)),a=r(184),s=["checked","children","control","name"];e.Z=function(n){var e=n.checked,r=n.children,c=n.control,u=n.name,d=(0,i.Z)(n,s),l=(0,o.bc)({control:c,name:u,defaultValue:""}).field;return(0,a.jsxs)("label",{children:[(0,a.jsx)("input",(0,t.Z)((0,t.Z)({checked:e,type:"radio",className:"hidden-input"},l),d)),(0,a.jsxs)("div",{className:"flex items-center gap-x-3 font-medium cursor-pointer",children:[(0,a.jsx)("div",{className:"w-7 h-7 rounded-full border flex items-center justify-center p-1  ".concat(e?"bg-primary border-primary text-white":"border-gray-200 text-transparent"),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,a.jsx)("span",{children:r})]})]})}},9254:function(n,e,r){"use strict";r.d(e,{Y:function(){return t.Z}});r(2791),r(184);var t=r(8119)},6356:function(n,e,r){"use strict";var t,i=r(168),o=(r(2791),r(2683)),a=r(184),s=o.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 10px;\n  margin-bottom: 25px;\n"])));e.Z=function(n){var e=n.children;return(0,a.jsx)(s,{children:e})}},3330:function(n,e,r){"use strict";r.d(e,{g:function(){return t.Z},Y:function(){return o}});var t=r(6356),i=(r(2791),r(184)),o=function(n){var e=n.children;return(0,i.jsx)("div",{className:"flex flex-wrap gap-5",children:e})}},9248:function(n,e,r){"use strict";var t,i=r(1413),o=r(4925),a=r(168),s=(r(2791),r(2683)),c=r(1134),u=r(184),d=["name","type","children","control"],l=s.ZP.div(t||(t=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    background: #000648;\n    width: 100%;\n    padding: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 8px;\n    transition: all 0.2s linear;\n    color: ",";\n    font-size: 20px;\n  }\n  input:focus {\n    background-color: transparent!important;\n    border-color: ",";\n  }\n  input::-webkit-input-placeholder {\n    color: #b2b3bd;\n  }\n  input::-moz-input-placeholder {\n    color: #b2b3bd;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n"])),(function(n){return n.hasIcon?"16px 60px 16px 20px":"16px 20px"}),(function(n){return n.theme.grayF3}),(function(n){return n.theme.grayf1}),(function(n){return n.theme.black}),(function(n){return n.theme.primary}));e.Z=function(n){var e=n.name,r=void 0===e?"":e,t=n.type,a=void 0===t?"text":t,s=n.children,h=n.control,p=(0,o.Z)(n,d),f=(0,c.bc)({control:h,name:r,defaultValue:""}).field;return(0,u.jsxs)(l,{hasIcon:!!s,children:[(0,u.jsx)("input",(0,i.Z)((0,i.Z)({id:r,type:a},f),p)),s?(0,u.jsx)("div",{className:"input-icon",children:s}):null]})}},3117:function(n,e,r){"use strict";r.d(e,{I:function(){return t.Z}});var t=r(9248)},3453:function(n,e,r){"use strict";var t,i=r(1413),o=r(4925),a=r(168),s=(r(2791),r(2683)),c=r(184),u=["htmlFor","children"],d=s.ZP.label(t||(t=(0,a.Z)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 20px;\n  cursor: pointer;\n"])),(function(n){return n.theme.gray4b}));e.Z=function(n){var e=n.htmlFor,r=void 0===e?"":e,t=n.children,a=(0,o.Z)(n,u);return(0,c.jsx)(d,(0,i.Z)((0,i.Z)({htmlFor:r},a),{},{children:t}))}},2753:function(n,e,r){"use strict";var t,i=r(168),o=(r(2791),r(2683)),a=r(184),s=o.ZP.span(t||(t=(0,i.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n"])));e.Z=function(n){var e=n.children,r=n.type,t="text-gray-500 bg-gray-100";switch(void 0===r?"default":r){case"success":t="text-#008000-500 bg-green-100";break;case"warning":t="text-orange-500 bg-orange-100";break;case"danger":t="text-red-500 bg-red-100"}return(0,a.jsx)(s,{className:t,children:e})}},4954:function(n,e,r){"use strict";r.d(e,{O:function(){return i.Z},_:function(){return t.Z}});var t=r(3453),i=r(2753)},4235:function(n,e,r){"use strict";r.r(e);var t=r(4165),i=r(5861),o=r(9439),a=r(2791),s=r(1087),c=r(1418),u=r(102),d=r(9254),l=r(3330),h=r(3117),p=r(4954),f=r(1134),m=r(3585),g=r(2077),x=r(2481),b=r(333),y=r.n(b),v=r(9085),k=r(7689),Z=r(184);e.default=function(){var n=(0,f.cI)({mode:"onChange",defaultValues:{name:"",slug:"",status:1,createdAt:new Date}}),e=n.control,r=n.handleSubmit,b=n.watch,j=n.reset,w=n.formState.isSubmitting,A=(0,k.s0)(),E=(0,s.lr)(),O=(0,o.Z)(E,1)[0].get("id");(0,a.useEffect)((function(){function n(){return(n=(0,i.Z)((0,t.Z)().mark((function n(){var e,r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!O){n.next=7;break}return e=(0,x.JU)(g.db,"Categories",O),n.next=5,(0,x.QT)(e);case 5:r=n.sent,j(r.data());case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Something went wrong: "+n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[O,j]);var z=b("status"),N=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=(0,x.JU)(g.db,"Categories",O),n.next=4,(0,x.r7)(r,{name:e.name,slug:y()(e.slug||e.name,{lower:!0}),status:Number(e.status)});case 4:v.Am.success("Update category successfully"),A("/manage/category"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert("Something went wrong:"+n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return O?(0,Z.jsxs)("div",{children:[(0,Z.jsx)(c.Z,{title:"Update category",desc:"Update your category id: ".concat(O)}),(0,Z.jsxs)("form",{onSubmit:r(N),autoComplete:"off ",children:[(0,Z.jsxs)("div",{className:"form-layout",children:[(0,Z.jsxs)(l.g,{children:[(0,Z.jsx)(p._,{children:"Name"}),(0,Z.jsx)(h.I,{control:e,name:"name",placeholder:"Enter your category name",required:!0})]}),(0,Z.jsxs)(l.g,{children:[(0,Z.jsx)(p._,{children:"Slug"}),(0,Z.jsx)(h.I,{control:e,name:"slug",placeholder:"Enter your slug"})]})]}),(0,Z.jsx)("div",{className:"form-layout",children:(0,Z.jsxs)(l.g,{children:[(0,Z.jsx)(p._,{children:"Status"}),(0,Z.jsxs)(l.Y,{children:[(0,Z.jsx)(d.Y,{name:"status",control:e,checked:Number(z)===m.bk.APPROVED,value:m.bk.APPROVED,children:"Approved"}),(0,Z.jsx)(d.Y,{name:"status",control:e,checked:Number(z)===m.bk.UNAPPROVED,value:m.bk.UNAPPROVED,children:"Unapproved"})]})]})}),(0,Z.jsx)(u.z,{kind:"primary",className:"mx-auto w-[200px]",type:"submit",disabled:w,isLoading:w,children:"Update category"})]})]}):null}},1418:function(n,e,r){"use strict";r(2791);var t=r(184);e.Z=function(n){var e=n.title,r=void 0===e?"":e,i=n.desc,o=void 0===i?"":i,a=n.children;return(0,t.jsxs)("div",{className:"flex items-start justify-between mb-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"dashboard-heading",children:r}),(0,t.jsx)("p",{className:"dashboard-short-desc",children:o})]}),a]})}},333:function(n){var e;e=function(){var n=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E\'","\u0538":"Y\'","\u0539":"T\'","\u053a":"JH","\u053b":"I","\u053c":"L","\u053d":"X","\u053e":"C\'","\u053f":"K","\u0540":"H","\u0541":"D\'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054a":"P","\u054b":"J","\u054c":"R\'","\u054d":"S","\u054e":"V","\u054f":"T","\u0550":"R","\u0551":"C","\u0553":"P\'","\u0554":"Q\'","\u0555":"O\'\'","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064a":"y","\u064b":"an","\u064c":"on","\u064d":"en","\u064e":"a","\u064f":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067e":"p","\u0686":"ch","\u0698":"zh","\u06a9":"k","\u06af":"g","\u06cc":"y","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e62":"S","\u1e63":"s","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2013":"-","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u201e":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial","\ufef5":"laa","\ufef7":"laa","\ufef9":"lai","\ufefb":"la"}'),e=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042a":"A","\u042c":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044a":"a","\u044c":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","\u20a3":"francos","\u2211":"suma","\u221e":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","\u2211":"soma","\xa3":"libra","\u221e":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function r(r,t){if("string"!==typeof r)throw new Error("slugify: string argument expected");var i=e[(t="string"===typeof t?{replacement:t}:t||{}).locale]||{},o=void 0===t.replacement?"-":t.replacement,a=void 0===t.trim||t.trim,s=r.normalize().split("").reduce((function(e,r){var a=i[r];return void 0===a&&(a=n[r]),void 0===a&&(a=r),a===o&&(a=" "),e+a.replace(t.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return t.strict&&(s=s.replace(/[^A-Za-z0-9\s]/g,"")),a&&(s=s.trim()),s=s.replace(/\s+/g,o),t.lower&&(s=s.toLowerCase()),s}return r.extend=function(e){Object.assign(n,e)},r},n.exports=e(),n.exports.default=e()}}]);
//# sourceMappingURL=235.4ea01ae8.chunk.js.map