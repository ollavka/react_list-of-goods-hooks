(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,r=n(7),c=n.n(r),o=n(6),i=n(8),a=n(1);!function(t){t.Alphabet="alphabet",t.Length="length",t.Default=""}(s||(s={}));var l=n(0),u=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})},b=n(4),h=n.n(b),d=function(t){var e=t.sortField,n=t.sortBy,r=t.isReversed,c=t.changeOrder;return Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return n(s.Alphabet)},className:h()("button","is-info",{"is-light":e!==s.Alphabet}),children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(s.Length)},className:h()("button","is-success",{"is-light":e!==s.Length}),children:"Sort by length"}),Object(l.jsx)("button",{type:"button",onClick:function(){return c((function(t){return!t}))},className:h()("button","is-warning",{"is-light":!r}),children:"Reverse"}),(e||r)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){n(s.Default),c(!1)},children:"Reset"})]})},j=(n(14),n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]);var g=function(){var t=Object(a.useState)(s.Default),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(!1),b=Object(o.a)(c,2),h=b[0],g=b[1],f=function(t,e){var n=e.sortField,r=e.isReversed,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case s.Alphabet:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(j,{sortField:n,isReversed:h});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsx)(d,{sortField:n,sortBy:r,isReversed:h,changeOrder:g}),Object(l.jsx)(u,{goods:f})]})};c.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2d0c2fc4.chunk.js.map