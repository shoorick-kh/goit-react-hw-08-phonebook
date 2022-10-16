"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[124],{124:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(791),a=t(434),u=t(634),c="NOT_FOUND";var i=function(e,n){return e===n};function o(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?i:r,u=t.maxSize,o=void 0===u?1:u,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:c},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return c}return{get:r,put:function(n,a){r(n)===c&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function m(){var n=f.get(arguments);if(n===c){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return m.clearCache=function(){return f.clear()},m}function s(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,c=0,i={memoizeOptions:void 0},o=r.pop();if("object"===typeof o&&(i=o,o=r.pop()),"function"!==typeof o)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof o+"]");var l=i,f=l.memoizeOptions,m=void 0===f?t:f,p=Array.isArray(m)?m:[m],d=s(r),h=e.apply(void 0,[function(){return c++,o.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(v,{resultFunc:o,memoizedResultFunc:h,dependencies:d,lastResult:function(){return u},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),v};return a}var f=l(o),m=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.error},d=f([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),h="Container_container__VVOCq",v=t(184),y=function(e){var n=e.children;return(0,v.jsx)("main",{className:h,children:n})},_="ContactForm_form__dhl+T",b="ContactForm_label__-cVXI",x="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9",g=function(){var e=(0,a.I0)();return(0,v.jsxs)("form",{className:_,onSubmit:function(n){n.preventDefault();var t=n.target,r=t.elements.name.value,a=t.elements.number.value;e((0,u.uK)({name:r,number:a})),t.reset()},children:[(0,v.jsxs)("label",{className:b,children:["Name:",(0,v.jsx)("input",{className:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{className:b,children:["Tel:",(0,v.jsx)("input",{className:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})},N=t(165),C="FilterName_filter__b1NjZ",w="FilterName_input__ZEAzA",k=function(){var e=(0,a.I0)();return(0,v.jsxs)("label",{className:C,children:["Find contacts by name:",(0,v.jsx)("input",{className:w,type:"text",onChange:function(n){e((0,N.D)(n.target.value))}})]})},A="ContactList_list__csErn",F={name:"ContactItem_name__XjpNK",number:"ContactItem_number__mfZ8x"},z=function(e){var n=e.contact,t=(0,a.I0)();return(0,v.jsxs)("li",{className:F.item,children:[(0,v.jsx)("span",{className:F.name,children:n.name}),(0,v.jsx)("span",{className:F.number,children:n.number}),(0,v.jsx)("button",{className:F.button,type:"button",onClick:function(){t((0,u.GK)(n.id))},children:"Delete"})]})},E=function(){var e=(0,a.v9)(d);return(0,v.jsx)("ul",{className:A,children:e&&e.map((function(e){return(0,v.jsx)(z,{contact:e},e.id)}))})};function I(){var e=(0,a.I0)(),n=(0,a.v9)(m),t=(0,a.v9)(p);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(y,{children:[(0,v.jsx)("h1",{children:"Phone book"}),(0,v.jsx)(g,{}),(0,v.jsx)(k,{}),n&&!t&&(0,v.jsx)("b",{children:"... please wait ..."}),(0,v.jsx)(E,{})]})})}}}]);
//# sourceMappingURL=124.27d0222c.chunk.js.map