(this["webpackJsonpreact.3"]=this["webpackJsonpreact.3"]||[]).push([[0],{105:function(n,e,t){},106:function(n,e,t){},194:function(n,e,t){"use strict";t.r(e);var i,a,c,s,r,o=t(0),l=t.n(o),d=t(22),j=t.n(d),h=(t(105),t(106),t(15)),u=t(16),p=(u.a.div(i||(i=Object(h.a)(["\n  width: 100%;\n  min-height: 100vh;\n"]))),u.a.div(a||(a=Object(h.a)(['\n  width: 100%;\n  height: 140px;\n  background-color: #e61400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;\n  p {\n    display: flex;\n    align-items: center;\n  }\n'])))),x=u.a.div(c||(c=Object(h.a)(["\n  width: fit-content;\n  height: fit-content;\n  background-color: #fff;\n  padding: 0px 14px;\n  letter-spacing: 3px;\n  color: #2b2b2b;\n  font-weight: 700;\n  font-size: 65px;\n  margin: 0;\n  span {\n    color: #e61400;\n    font-weight: 700;\n  }\n"]))),b=u.a.span(s||(s=Object(h.a)(["\n    color: white;\n    margin-left: 24px;\n"]))),O=(u.a.p(r||(r=Object(h.a)(["\n font-size: 28px;\nmargin-top: 100px;\n\nfont-family:Georgia, 'Times New Roman', Times, serif;\n\n"]))),t(3));var f,g,v,m,y,w=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(p,{children:Object(O.jsxs)("p",{children:[Object(O.jsxs)(x,{children:[Object(O.jsx)("span",{children:"Y"}),"andex"]}),Object(O.jsx)(b,{children:"dictionary"})]})})})},R=t(99),k=t(86),E=t.n(k),T=u.a.div(f||(f=Object(h.a)(['\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(248, 248, 175);\n  display: flex;\n  /* flex-wrap: wrap; */\n  justify-content: center;\n  padding: 0 200px;\n  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;\n  /* margin-top: 100px; */\n  padding-top: 100px;\n  \n\n  select {\n    width: fit-content;\n    height: 45px;\n    padding: auto 20px;\n    /* border: none; */\n    border-radius: 5px;\n    margin: 10px 50px;\n    paint-order: 7px 16px;\n    font-size: 14px;\n    padding: 5px 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n']))),F=u.a.div(g||(g=Object(h.a)(["\n  width: 50%;\n"]))),I=u.a.div(v||(v=Object(h.a)(["\n  width: 100%;\n  margin-right: 50px;\n  textarea {\n    width: 100%;\n    height: 200px;\n    border: 1px solid black;\n    border-radius: 10px;\n    font-size: 20px;\n    font-family: monospace;\n    padding: 20px 0px 0px 15px;\n  }\n"]))),S=u.a.p(m||(m=Object(h.a)(["\n  font-weight: 400;\n"]))),z=u.a.div(y||(y=Object(h.a)(["\n  width: 50%;\n"]))),G=t(197);var P=function(){var n=Object(o.useState)([]),e=Object(R.a)(n,2),t=e[0],i=e[1];return Object(o.useEffect)((function(){}),[]),G.a.Option,Object(O.jsxs)(T,{children:[Object(O.jsxs)(F,{children:[Object(O.jsx)(I,{children:Object(O.jsx)("textarea",{onChange:function(n){var e=document.getElementById("select").value;E.a.get("https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=".concat("dict.1.1.20210915T143839Z.96e17f7f60ad28d4.e1bf52d3b734ee95be20a7e82dfe268e2601fce7","&lang=").concat(e,"&text=").concat(n.target.value)).then((function(n){console.log(n.data),i(n.data.def)})).catch()},placeholder:"Type something to translate",name:"translate_word",id:"textarea",autoFocus:!0})}),Object(O.jsxs)(S,{children:["Powered by ",Object(O.jsx)("a",{style:{color:"red"},href:"https://yandex.com/dev/dictionary/",target:"_blank",children:"Masaidov Bekzod"})]})]}),Object(O.jsxs)("select",{id:"select",defaultValue:"en-ru",children:[Object(O.jsx)("option",{value:"ru-ru",children:"Russian \u279e Russian "}),Object(O.jsx)("option",{value:"ru-en",children:"Russian \u279e English "}),Object(O.jsx)("option",{value:"ru-pl",children:"Russian \u279e Polandish "}),Object(O.jsx)("option",{value:"ru-uk",children:"Russian \u279e Ukrainian "}),Object(O.jsx)("option",{value:"ru-de",children:"Russian \u279e German "}),Object(O.jsx)("option",{value:"ru-fr",children:"Russian \u279e French "}),Object(O.jsx)("option",{value:"ru-es",children:"Russian \u279e Spanish "}),Object(O.jsx)("option",{value:"ru-it",children:"Russian \u279e Italian "}),Object(O.jsx)("option",{value:"ru-tr",children:"Russian \u279e Turkish "}),Object(O.jsx)("option",{value:"en-ru",children:"English \u279e Russian "}),Object(O.jsx)("option",{value:"en-en",children:"English \u279e English "}),Object(O.jsx)("option",{value:"en-de",children:"English \u279e German "}),Object(O.jsx)("option",{value:"en-fr",children:"English \u279e French "}),Object(O.jsx)("option",{value:"en-es",children:"English \u279e Spanish "}),Object(O.jsx)("option",{value:"en-it",children:"English \u279e Italian "}),Object(O.jsx)("option",{value:"en-tr",children:"English \u279e Turkish "}),Object(O.jsx)("option",{value:"pl-ru",children:"Polandish \u279e Russian "}),Object(O.jsx)("option",{value:"uk-ru",children:"Ukrainian \u279e Russian "}),Object(O.jsx)("option",{value:"de-ru",children:"German \u279e Russian "}),Object(O.jsx)("option",{value:"de-en",children:"German \u279e English "}),Object(O.jsx)("option",{value:"fr-ru",children:"French \u279e Russian "}),Object(O.jsx)("option",{value:"fr-en",children:"French \u279e English "}),Object(O.jsx)("option",{value:"es-ru",children:"Spanish \u279e Russian "}),Object(O.jsx)("option",{value:"es-en",children:"Spanish \u279e English "}),Object(O.jsx)("option",{value:"it-ru",children:"Italian \u279e Russian "}),Object(O.jsx)("option",{value:"it-en",children:"Italian \u279e English "}),Object(O.jsx)("option",{value:"tr-ru",children:"Turkish \u279e Russian "}),Object(O.jsx)("option",{value:"tr-en",children:"Turkish \u279e English "})]}),Object(O.jsx)(z,{children:Object(O.jsx)("ul",{children:t.map((function(n){return Object(O.jsxs)("ol",{children:[Object(O.jsx)("b",{children:null===n||void 0===n?void 0:n.text})," [",null===n||void 0===n?void 0:n.ts,"] ",null===n||void 0===n?void 0:n.pos,null===n||void 0===n?void 0:n.tr.map((function(n){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{color:"red",marginRight:"10px"},children:n.text}),n.gen,","]})}))]})}))})})]})};var B=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{}),Object(O.jsx)(P,{})]})};var C=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(B,{})})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,198)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;t(n),i(n),a(n),c(n),s(n)}))};j.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),U()}},[[194,1,2]]]);
//# sourceMappingURL=main.bb19f2ba.chunk.js.map