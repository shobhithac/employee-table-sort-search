(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(63)},48:function(e,t,a){},49:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),o=(a(48),a(49),a(14)),s=a(4),i=a(68),u=a(69),m=a(36),f=a(74),b=a(72),d=a(70),E=a(71),y=a(38),p=function(e){var t=e.columns,a=e.handleSorting,r=Object(n.useState)(""),c=Object(s.a)(r,2),o=c[0],i=c[1],u=Object(n.useState)("asc"),m=Object(s.a)(u,2),f=m[0],b=m[1];return l.a.createElement("thead",null,l.a.createElement("tr",null,t.map(function(e){var t=e.label,n=e.key,r=e.sortable,c=r?o===n&&"asc"===f?"up":o===n&&"desc"===f?"down":"default":"";return l.a.createElement("th",{key:t,className:c,onClick:r?function(){return function(e){var t=e===o&&"asc"===f?"desc":"asc";i(e),b(t),a(e,t)}(n)}:function(){}},t)})))},v=function(e){var t=e.tableData,a=e.columns;return l.a.createElement("tbody",null,0===t.length?l.a.createElement("tr",null,l.a.createElement("td",{colSpan:a.length},"No data available")):t.map(function(e){return l.a.createElement("tr",{key:e.id,"data-testid":"employee-info-row"},a.map(function(t){var a=t.key,n=e[a]?e[a]:"\u2014\u2014";return l.a.createElement("td",{key:a},n)}))}))},j=a(16),g=[{label:"First Name",key:"first_name",sortable:!0},{label:"Last Name",key:"last_name",sortable:!0},{label:"Email",key:"email",sortable:!1},{label:"Date of Birth",key:"dob",sortable:!1},{label:"Address",key:"address",sortable:!1},{label:"Salary",key:"salary",sortable:!1}],h=function(){var e=Object(j.c)(function(e){return e.empDetailsReducers.employees}),t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],h=Object(n.useState)([]),O=Object(s.a)(h,2),S=O[0],k=O[1],C=Object(n.useState)(0),w=Object(s.a)(C,2),x=w[0],D=w[1],L=Object(n.useState)(25),I=Object(s.a)(L,1)[0],F=Object(n.useState)(""),$=Object(s.a)(F,2),_=$[0],M=$[1],N=0===x?1:x*I+1,A=0===x?I:(x+1)*I,K=function(e){D(e);var t=r.slice(I*e,I*e+I);k(t)};return Object(n.useEffect)(function(){M("")},[x]),Object(n.useEffect)(function(){e.length&&c(e)},[e]),Object(n.useEffect)(function(){D(0),k(r.slice(0,I))},[r]),l.a.createElement(i.a,{fluid:!0,"aria-label":"employee-table-container"},l.a.createElement(u.a,{style:{alignItems:"center",justifyContent:"flex-end"}},l.a.createElement(m.a,{xs:"6"},l.a.createElement(f.a.Control,{type:"text",placeholder:"Search by first name/last name",value:_,onChange:function(e){return function(e){var t=e.target.value.toLowerCase();M(t);var a=r.slice(I*x,I*x+I).filter(function(e){var a=e.first_name.toLowerCase(),n=e.last_name.toLowerCase();return a.includes(t)||n.includes(t)});k(a)}(e)}})),l.a.createElement(m.a,{xs:"6",style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(b.a,{onSelect:function(e){var t=0,a=1/0,n=r.slice(I*x,I*x+I);if("all"===e)k(n);else{"25000"===e?a=25e3:"50000"===e?(t=25e3,a=5e4):"100000"===e&&(t=5e4,a=1e5);var l=n.filter(function(e){var n=parseFloat(e.salary.replace("$","").replace(",",""));return n>=t&&n<=a});k(l)}}},l.a.createElement(b.a.Toggle,{id:"dropdown-basic"},"Filter by Salary"),l.a.createElement(b.a.Menu,null,l.a.createElement(b.a.Item,{eventKey:"all"},"All"),l.a.createElement(b.a.Item,{eventKey:"25000"},"Less than $25,000"),l.a.createElement(b.a.Item,{eventKey:"50000"},"$25,000 - $50,000"),l.a.createElement(b.a.Item,{eventKey:"100000"},"$50,000 - $100,000"))))),l.a.createElement(u.a,null,l.a.createElement(m.a,{xs:"12"},l.a.createElement(d.a,{className:"table",responsive:!0,striped:!0},l.a.createElement(p,{columns:g,handleSorting:function(e,t){if(e){var a=Object(o.a)(S).sort(function(a,n){return null===a[e]?1:null===n[e]?-1:null===a[e]&&null===n[e]?0:a[e].toString().localeCompare(n[e].toString(),"en",{numeric:!0})*("asc"===t?1:-1)});k(a)}}}),l.a.createElement(v,{columns:g,tableData:S})))),l.a.createElement(u.a,{style:{alignItems:"center",justifyContent:"flex-end"}},l.a.createElement(m.a,{xs:"6"},l.a.createElement("p",null),l.a.createElement("p",null,"Count: ",S.length," | Showing ",N,"-",A," of ",r.length," entries")),l.a.createElement(m.a,{xs:"6",style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(E.a,{"aria-label":"pagination"},l.a.createElement(y.a,{variant:"primary",onClick:function(){return K(x-1)},disabled:0===x},"<"),l.a.createElement(y.a,{variant:"primary",onClick:function(){return K(x+1)},disabled:x+1===Math.floor(r.length/I)},">")))))},O=a(73),S=function(){var e=Object(j.b)(),t=function(){O.a.get("https://mocki.io/v1/4b8fe8d1-24d0-49f4-8214-66ea2fd3e5ea").then(function(t){var a=t.data;e({type:"ADD_EMPLOYEES",payload:a.employees})}).catch(function(e){console.error(e)})};return Object(n.useEffect)(function(){t()},[]),l.a.createElement(h,null)},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})},C=(a(62),a(29)),w=a(3),x={employees:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EMPLOYEES":return Object(w.a)({},e,{employees:t.payload});default:return e}},L=Object(C.a)({empDetailsReducers:D}),I=Object(C.b)(L);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j.a,{store:I},l.a.createElement(S,null)))),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.e3567b23.chunk.js.map