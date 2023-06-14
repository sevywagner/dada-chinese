"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[55],{7055:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r,o,a,c=n(9439),i=n(2791),s=n(9434),u=n(7558),l="checkout-item_item__ds-f5",d="checkout-item_title__Q75xj",f="checkout-item_price__Q4+Ir",p="checkout-item_quantity__R6c8N",h=n(184),m=function(e){var t=e.title,n=e.price,r=e.quantity;return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("p",{className:d,children:t}),n?(0,h.jsxs)("p",{className:f,children:["$",n]}):(0,h.jsx)("p",{className:f,children:"Price"}),(0,h.jsx)("p",{className:p,children:r})]})};!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(o||(o={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(a||(a={}));var v="data-react-paypal-script-id",y="data-sdk-integration-source",E="react-paypal-js",g="data-namespace",N="Failed to load the PayPal JS SDK script.",b="3.84.0",S=("https://js.braintreegateway.com/web/".concat(b,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(b,"/js/paypal-checkout.min.js"),"paypal"),j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},j.apply(this,arguments)};function P(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function w(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function _(e){return void 0===e&&(e=S),window[e]}function A(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,c=void 0===a?S:a,i=n.charAt(0).toUpperCase().concat(n.substring(1)),s="Unable to render <".concat(t," /> because window.").concat(c,".").concat(i," is undefined.");if(!o.includes(n)){var u=[o,n].filter(Boolean).join();s+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(u,"'}}>`.")}return s}function k(e){return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e)))}function I(e,t){var n;switch(t.type){case o.LOADING_STATUS:return j(j({},e),{loadingStatus:t.value});case o.RESET_OPTIONS:return function(e){var t=self.document.querySelector("script[".concat(v,'="').concat(e,'"]'));(null===t||void 0===t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}(e.options[v]),delete t.value[v],j(j({},e),{loadingStatus:r.PENDING,options:j(j({},t.value),(n={},n[v]="".concat(k(t.value)),n[y]=E,n))});case o.SET_BRAINTREE_INSTANCE:return j(j({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var x=(0,i.createContext)(null);function O(e){if("function"===typeof(null===e||void 0===e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function T(){var e=O((0,i.useContext)(x));return[j(j({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}(0,i.createContext)({});var R=function e(t){var n=t.className,r=void 0===n?"":n,o=t.disabled,a=void 0!==o&&o,c=t.children,s=t.forceReRender,u=void 0===s?[]:s,l=P(t,["className","disabled","children","forceReRender"]),d=a?{opacity:.38}:{},f="".concat(r," ").concat(a?"paypal-buttons-disabled":"").trim(),p=(0,i.useRef)(null),h=(0,i.useRef)(null),m=T()[0],v=m.isResolved,y=m.options,E=(0,i.useState)(null),N=E[0],b=E[1],S=(0,i.useState)(!0),k=S[0],I=S[1],x=(0,i.useState)(null)[1];function O(){null!==h.current&&h.current.close().catch((function(){}))}return(0,i.useEffect)((function(){if(!1===v)return O;var t=_(y[g]);if(void 0===t||void 0===t.Buttons)return x((function(){throw new Error(A({reactComponentName:e.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:y.components,sdkDataNamespace:y[g]}))})),O;try{h.current=t.Buttons(j(j({},l),{onInit:function(e,t){b(t),"function"===typeof l.onInit&&l.onInit(e,t)}}))}catch(n){return x((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(n))}))}return!1===h.current.isEligible()?(I(!1),O):p.current?(h.current.render(p.current).catch((function(e){null!==p.current&&0!==p.current.children.length&&x((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),O):O}),w(w([v],u,!0),[l.fundingSource],!1)),(0,i.useEffect)((function(){null!==N&&(!0===a?N.disable().catch((function(){})):N.enable().catch((function(){})))}),[a,N]),i.createElement(i.Fragment,null,k?i.createElement("div",{ref:p,style:d,className:f}):c)};function C(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",o="";Array.isArray(t)?t.length>1?(r="*",o=t.toString()):r=t.toString():"string"===typeof t&&t.length>0?r=t:"string"===typeof n&&n.length>0&&(r="*",o=n);e["merchant-id"]=r,e["data-merchant-id"]=o}(e);var n=Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,n){var r=e[n].toString();return"data-"===n.substring(0,5)?t.dataAttributes[n]=r:t.queryParams[n]=r,t}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,o=n.dataAttributes;return{url:"".concat(t,"?").concat(D(r)),dataAttributes:o}}function D(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function L(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function q(e,t){if(void 0===t&&(t=U()),Z(e,t),"undefined"===typeof window)return t.resolve(null);var n=C(e),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",c=M(a);return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=L(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)})),a?n:null}(r,o)&&c?t.resolve(c):B({url:r,attributes:o},t).then((function(){var e=M(a);if(e)return e;throw new Error("The window.".concat(a," global variable is not available."))}))}function B(e,t){void 0===t&&(t=U()),Z(e,t);var n=e.url,r=e.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"===typeof window)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,o=e.onError,a=L(t,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&t(e),n.text()})).then((function(e){var n=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(n))})).catch((function(e){t(e)})):t(e)}})}))}function U(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function M(e){return window[e]}function Z(e,t){if("object"!==typeof e||null===e)throw new Error("Expected an options object.");if("undefined"!==typeof t&&"function"!==typeof t)throw new Error("Expected PromisePonyfill to be a function.")}R.displayName="PayPalButtons";(function e(t){var n=t.className,r=void 0===n?"":n,o=t.children,a=P(t,["className","children"]),c=T()[0],s=c.isResolved,u=c.options,l=(0,i.useRef)(null),d=(0,i.useState)(!0),f=d[0],p=d[1],h=(0,i.useState)(null)[1];return(0,i.useEffect)((function(){if(!1!==s){var t=_(u[g]);if(void 0===t||void 0===t.Marks)return h((function(){throw new Error(A({reactComponentName:e.displayName,sdkComponentKey:"marks",sdkRequestedComponents:u.components,sdkDataNamespace:u[g]}))}));!function(e){var t=l.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&h((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(e))}))}))}(t.Marks(j({},a)))}}),[s,a.fundingSource]),i.createElement(i.Fragment,null,f?i.createElement("div",{ref:l,className:r}):o)}).displayName="PayPalMarks";var G=function(e){var t,n=e.options,a=void 0===n?{"client-id":"test"}:n,c=e.children,s=e.deferLoading,u=void 0!==s&&s,l=(0,i.useReducer)(I,{options:j(j({},a),(t={},t[v]="".concat(k(a)),t[y]=E,t)),loadingStatus:u?r.INITIAL:r.PENDING}),d=l[0],f=l[1];return(0,i.useEffect)((function(){if(!1===u&&d.loadingStatus===r.INITIAL)return f({type:o.LOADING_STATUS,value:r.PENDING});if(d.loadingStatus===r.PENDING){var e=!0;return q(d.options).then((function(){e&&f({type:o.LOADING_STATUS,value:r.RESOLVED})})).catch((function(t){console.error("".concat(N," ").concat(t)),e&&f({type:o.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[d.options,u,d.loadingStatus]),i.createElement(x.Provider,{value:j(j({},d),{dispatch:f})},c)},F=n(7689),K=function(e){var t=e.totalAmount,n=e.onApprove,r=(0,F.s0)();return(0,h.jsx)(G,{options:{"client-id":"AcNOytnjExuv-KS5qOHxR49tPBcnhrcmbiMx1rhUqpiy7YsFFwavvM65ZsMyM6RGs7PicM8vKqQyfdrj"},children:(0,h.jsx)(R,{createOrder:function(e,n){return n.order.create({purchase_units:[{description:"Purchase from Dada Chinese Webstore",amount:{value:""+t}}]})},onApprove:function(e,t){return t.order.capture().then((function(e){n(),r("/dada-chinese/order-confirmation")})).catch((function(e){console.log(e)}))},onError:function(e){console.log(e)}})})},J=n(2845),Q=n(3264),V="checkout_wrap__qFQpx",X="checkout_form__8VUDs",z="checkout_list-wrap__f35ZQ",Y=(n(4644),function(){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),n=t[0],r=t[1],o=(0,i.useState)(),a=(0,c.Z)(o,2),l=a[0],d=a[1],f=(0,s.I0)(),p=(0,i.useRef)(),v=(0,i.useRef)(),y=(0,i.useRef)(),E=(0,s.v9)((function(e){return e.cart}));return(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:Q.Z.title,children:"Checkout"}),(0,h.jsx)("div",{className:Q.Z.wrap,children:(0,h.jsxs)("div",{className:z,children:[(0,h.jsx)(m,{title:"Item",quantity:"Quantity"}),E.items.map((function(e){return(0,h.jsx)(m,{title:e.title,price:e.price,quantity:e.quantity},e.title)}))]})}),(0,h.jsx)("p",{className:Q.Z.title,children:"Last Thing..."}),!l&&(0,h.jsxs)("p",{className:Q.Z.subtitle,children:["Please enter your ",!localStorage.getItem("token")&&"Name and"," Address"]}),l&&(0,h.jsx)("p",{className:Q.Z.error,children:l}),(0,h.jsx)("div",{className:Q.Z.wrap,children:(0,h.jsxs)("form",{className:X,children:[!localStorage.getItem("token")&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{children:"Name"}),(0,h.jsx)("input",{type:"text",ref:y})]}),(0,h.jsx)("label",{children:"Address"}),(0,h.jsx)("input",{type:"text",ref:p}),(0,h.jsx)("label",{children:"Apt # (optional)"}),(0,h.jsx)("input",{type:"text",ref:v})]})}),(0,h.jsxs)("p",{className:Q.Z.title,children:["Total Price: $",E.totalPrice]}),(0,h.jsx)("div",{className:V,children:n?(0,h.jsx)(K,{onApprove:function(){var e=""!==v.current.value.trim()?p.current.value+" Apt #: "+v.current.value:p.current.value,t=!1;fetch("https://dada-chinese-rest-api.herokuapp.com/shop/new-order",{method:"PUT",body:JSON.stringify({items:E.items,totalPrice:E.totalPrice,address:e}),headers:{"Content-Type":"Application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.ok||(t=!0),e.json()})).then((function(e){t?d(e.error):(console.log(e.message),localStorage.getItem("token")&&fetch("https://dada-chinese-rest-api.herokuapp.com/shop/order-email",{method:"POST",body:JSON.stringify({cartItems:E.items}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){if(e.ok)return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),f(u.U.resetCartAsGuest()))})).catch((function(e){d(e.message),console.log(e)}))},totalAmount:E.totalPrice}):(0,h.jsx)(J.Z,{onClick:function(){if(""===p.current.value||!localStorage.getItem("token")&&""===y.current.value)return d("Please fill out the entirety of the form");r((function(e){return!e}))},children:"Checkout"})})]})})},4644:function(e,t){t.Z={contact:"contact-form_contact__e1TKj",wrap:"contact-form_wrap__7XlKk",invalid:"contact-form_invalid__EycRU",label:"contact-form_label__AksD3",submit:"contact-form_submit__B9Q05",hover:"contact-form_hover__EZvMx"}}}]);
//# sourceMappingURL=55.09dab15d.chunk.js.map