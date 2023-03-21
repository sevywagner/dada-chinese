"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[818],{3818:function(t,e,n){n.r(e),n.d(e,{default:function(){return Q}});var r,o,a,i=n(9439),c=n(2791),u=n(9434),s="checkout-item_item__ds-f5",l="checkout-item_title__Q75xj",d="checkout-item_price__Q4+Ir",f="checkout-item_quantity__R6c8N",p=n(184),h=function(t){var e=t.title,n=t.price,r=t.quantity;return(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("p",{className:l,children:e}),(0,p.jsxs)("p",{className:d,children:["$",n]}),(0,p.jsx)("p",{className:f,children:r})]})};!function(t){t.INITIAL="initial",t.PENDING="pending",t.REJECTED="rejected",t.RESOLVED="resolved"}(r||(r={})),function(t){t.LOADING_STATUS="setLoadingStatus",t.RESET_OPTIONS="resetOptions",t.SET_BRAINTREE_INSTANCE="braintreeInstance"}(o||(o={})),function(t){t.NUMBER="number",t.CVV="cvv",t.EXPIRATION_DATE="expirationDate",t.EXPIRATION_MONTH="expirationMonth",t.EXPIRATION_YEAR="expirationYear",t.POSTAL_CODE="postalCode"}(a||(a={}));var v="data-react-paypal-script-id",m="data-sdk-integration-source",y="react-paypal-js",E="data-namespace",b="Failed to load the PayPal JS SDK script.",N="3.84.0",w=("https://js.braintreegateway.com/web/".concat(N,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(N,"/js/paypal-checkout.min.js"),"paypal"),S=function(){return S=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},S.apply(this,arguments)};function g(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function P(t,e,n){if(n||2===arguments.length)for(var r,o=0,a=e.length;o<a;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function I(t){return void 0===t&&(t=w),window[t]}function j(t){var e=t.reactComponentName,n=t.sdkComponentKey,r=t.sdkRequestedComponents,o=void 0===r?"":r,a=t.sdkDataNamespace,i=void 0===a?w:a,c=n.charAt(0).toUpperCase().concat(n.substring(1)),u="Unable to render <".concat(e," /> because window.").concat(i,".").concat(c," is undefined.");if(!o.includes(n)){var s=[o,n].filter(Boolean).join();u+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(s,"'}}>`.")}return u}function A(t){return"react-paypal-js-".concat(function(t){for(var e="",n=0;n<t.length;n++){var r=t[n].charCodeAt(0)*n;t[n+1]&&(r+=t[n+1].charCodeAt(0)*(n-1)),e+=String.fromCharCode(97+Math.abs(r)%26)}return e}(JSON.stringify(t)))}function O(t,e){var n;switch(e.type){case o.LOADING_STATUS:return S(S({},t),{loadingStatus:e.value});case o.RESET_OPTIONS:return function(t){var e=self.document.querySelector("script[".concat(v,'="').concat(t,'"]'));(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)}(t.options[v]),delete e.value[v],S(S({},t),{loadingStatus:r.PENDING,options:S(S({},e.value),(n={},n[v]="".concat(A(e.value)),n[m]=y,n))});case o.SET_BRAINTREE_INSTANCE:return S(S({},t),{braintreePayPalCheckoutInstance:e.value});default:return t}}var k=(0,c.createContext)(null);function R(t){if("function"===typeof(null===t||void 0===t?void 0:t.dispatch)&&0!==t.dispatch.length)return t;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function C(){var t=R((0,c.useContext)(k));return[S(S({},t),{isInitial:t.loadingStatus===r.INITIAL,isPending:t.loadingStatus===r.PENDING,isResolved:t.loadingStatus===r.RESOLVED,isRejected:t.loadingStatus===r.REJECTED}),t.dispatch]}(0,c.createContext)({});var T=function t(e){var n=e.className,r=void 0===n?"":n,o=e.disabled,a=void 0!==o&&o,i=e.children,u=e.forceReRender,s=void 0===u?[]:u,l=g(e,["className","disabled","children","forceReRender"]),d=a?{opacity:.38}:{},f="".concat(r," ").concat(a?"paypal-buttons-disabled":"").trim(),p=(0,c.useRef)(null),h=(0,c.useRef)(null),v=C()[0],m=v.isResolved,y=v.options,b=(0,c.useState)(null),N=b[0],w=b[1],A=(0,c.useState)(!0),O=A[0],k=A[1],R=(0,c.useState)(null)[1];function T(){null!==h.current&&h.current.close().catch((function(){}))}return(0,c.useEffect)((function(){if(!1===m)return T;var e=I(y[E]);if(void 0===e||void 0===e.Buttons)return R((function(){throw new Error(j({reactComponentName:t.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:y.components,sdkDataNamespace:y[E]}))})),T;try{h.current=e.Buttons(S(S({},l),{onInit:function(t,e){w(e),"function"===typeof l.onInit&&l.onInit(t,e)}}))}catch(n){return R((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(n))}))}return!1===h.current.isEligible()?(k(!1),T):p.current?(h.current.render(p.current).catch((function(t){null!==p.current&&0!==p.current.children.length&&R((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(t))}))})),T):T}),P(P([m],s,!0),[l.fundingSource],!1)),(0,c.useEffect)((function(){null!==N&&(!0===a?N.disable().catch((function(){})):N.enable().catch((function(){})))}),[a,N]),c.createElement(c.Fragment,null,O?c.createElement("div",{ref:p,style:d,className:f}):i)};function _(t){var e="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(e=t.sdkBaseURL,delete t.sdkBaseURL),function(t){var e=t["merchant-id"],n=t["data-merchant-id"],r="",o="";Array.isArray(e)?e.length>1?(r="*",o=e.toString()):r=e.toString():"string"===typeof e&&e.length>0?r=e:"string"===typeof n&&n.length>0&&(r="*",o=n);t["merchant-id"]=r,t["data-merchant-id"]=o}(t);var n=Object.keys(t).filter((function(e){return"undefined"!==typeof t[e]&&null!==t[e]&&""!==t[e]})).reduce((function(e,n){var r=t[n].toString();return"data-"===n.substring(0,5)?e.dataAttributes[n]=r:e.queryParams[n]=r,e}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,o=n.dataAttributes;return{url:"".concat(e,"?").concat(x(r)),dataAttributes:o}}function x(t){var e="";return Object.keys(t).forEach((function(n){0!==e.length&&(e+="&"),e+=n+"="+t[n]})),e}function D(t,e){void 0===e&&(e={});var n=document.createElement("script");return n.src=t,Object.keys(e).forEach((function(t){n.setAttribute(t,e[t]),"data-csp-nonce"===t&&n.setAttribute("nonce",e["data-csp-nonce"])})),n}function L(t,e){if(void 0===e&&(e=B()),U(t,e),"undefined"===typeof window)return e.resolve(null);var n=_(t),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",i=M(a);return function(t,e){var n=document.querySelector('script[src="'.concat(t,'"]'));if(null===n)return null;var r=D(t,e),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(t){o.dataset[t]!==r.dataset[t]&&(a=!1)})),a?n:null}(r,o)&&i?e.resolve(i):q({url:r,attributes:o},e).then((function(){var t=M(a);if(t)return t;throw new Error("The window.".concat(a," global variable is not available."))}))}function q(t,e){void 0===e&&(e=B()),U(t,e);var n=t.url,r=t.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new e((function(t,e){if("undefined"===typeof window)return t();!function(t){var e=t.url,n=t.attributes,r=t.onSuccess,o=t.onError,a=D(e,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return t()},onError:function(){var t=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&e(t),n.text()})).then((function(t){var n=function(t){var e=t.split("/* Original Error:")[1];return e?e.replace(/\n/g,"").replace("*/","").trim():t}(t);e(new Error(n))})).catch((function(t){e(t)})):e(t)}})}))}function B(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function M(t){return window[t]}function U(t,e){if("object"!==typeof t||null===t)throw new Error("Expected an options object.");if("undefined"!==typeof e&&"function"!==typeof e)throw new Error("Expected PromisePonyfill to be a function.")}T.displayName="PayPalButtons";(function t(e){var n=e.className,r=void 0===n?"":n,o=e.children,a=g(e,["className","children"]),i=C()[0],u=i.isResolved,s=i.options,l=(0,c.useRef)(null),d=(0,c.useState)(!0),f=d[0],p=d[1],h=(0,c.useState)(null)[1];return(0,c.useEffect)((function(){if(!1!==u){var e=I(s[E]);if(void 0===e||void 0===e.Marks)return h((function(){throw new Error(j({reactComponentName:t.displayName,sdkComponentKey:"marks",sdkRequestedComponents:s.components,sdkDataNamespace:s[E]}))}));!function(t){var e=l.current;if(!e||!t.isEligible())return p(!1);e.firstChild&&e.removeChild(e.firstChild),t.render(e).catch((function(t){null!==e&&0!==e.children.length&&h((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(t))}))}))}(e.Marks(S({},a)))}}),[u,a.fundingSource]),c.createElement(c.Fragment,null,f?c.createElement("div",{ref:l,className:r}):o)}).displayName="PayPalMarks";var G=function(t){var e,n=t.options,a=void 0===n?{"client-id":"test"}:n,i=t.children,u=t.deferLoading,s=void 0!==u&&u,l=(0,c.useReducer)(O,{options:S(S({},a),(e={},e[v]="".concat(A(a)),e[m]=y,e)),loadingStatus:s?r.INITIAL:r.PENDING}),d=l[0],f=l[1];return(0,c.useEffect)((function(){if(!1===s&&d.loadingStatus===r.INITIAL)return f({type:o.LOADING_STATUS,value:r.PENDING});if(d.loadingStatus===r.PENDING){var t=!0;return L(d.options).then((function(){t&&f({type:o.LOADING_STATUS,value:r.RESOLVED})})).catch((function(e){console.error("".concat(b," ").concat(e)),t&&f({type:o.LOADING_STATUS,value:r.REJECTED})})),function(){t=!1}}}),[d.options,s,d.loadingStatus]),c.createElement(k.Provider,{value:S(S({},d),{dispatch:f})},i)},F=n(7689),K=function(t){var e=t.totalAmount,n=(0,F.s0)();return(0,p.jsx)(G,{options:{"client-id":"AcNOytnjExuv-KS5qOHxR49tPBcnhrcmbiMx1rhUqpiy7YsFFwavvM65ZsMyM6RGs7PicM8vKqQyfdrj"},children:(0,p.jsx)(T,{createOrder:function(t,n){return n.order.create({purchase_units:[{description:"Purchase from Dada Chinese Webstore",amount:{value:""+e}}]})},onApprove:function(t,e){return e.order.capture().then((function(t){n("/dada-chinese/order-confirmation")})).catch((function(t){console.log(t)}))},onError:function(t){console.log(t)}})})},V=n(2845),Z=n(3264),J=n(2626),Q=function(){var t=(0,c.useState)(!1),e=(0,i.Z)(t,2),n=e[0],r=e[1],o=(0,u.v9)((function(t){return t.cart}));return(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:Z.Z.title,children:"Checkout"}),o.items.map((function(t){return(0,p.jsx)(h,{title:t.title,price:t.price,quantity:t.quantity},t.title)})),(0,p.jsx)("div",{className:J.Z.wrap,children:n?(0,p.jsx)(K,{totalAmount:o.totalPrice}):(0,p.jsx)(V.Z,{onClick:function(){r((function(t){return!t}))},children:"Checkout"})})]})}},2626:function(t,e){e.Z={wrap:"checkout_wrap__qFQpx",form:"checkout_form__8VUDs"}}}]);
//# sourceMappingURL=818.9ff56236.chunk.js.map