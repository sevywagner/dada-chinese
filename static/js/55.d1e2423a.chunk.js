"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[55],{7055:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r,a,o,i=n(9439),c=n(2791),s=n(9434),l="checkout-item_item__ds-f5",u="checkout-item_title__Q75xj",d="checkout-item_price__Q4+Ir",f="checkout-item_quantity__R6c8N",p=n(184),h=function(e){var t=e.title,n=e.price,r=e.quantity;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("p",{className:u,children:t}),r>1&&(0,p.jsxs)("p",{className:f,children:["x",r]}),n?(0,p.jsxs)("p",{className:d,children:["$",n]}):(0,p.jsx)("p",{className:d,children:"Price"})]})})};!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(a||(a={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(o||(o={}));var m="data-react-paypal-script-id",v="data-sdk-integration-source",y="react-paypal-js",g="data-namespace",N="Failed to load the PayPal JS SDK script.",S="3.84.0",E=("https://js.braintreegateway.com/web/".concat(S,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(S,"/js/paypal-checkout.min.js"),"paypal"),_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_.apply(this,arguments)};function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function b(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function x(e){return void 0===e&&(e=E),window[e]}function P(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,a=void 0===r?"":r,o=e.sdkDataNamespace,i=void 0===o?E:o,c=n.charAt(0).toUpperCase().concat(n.substring(1)),s="Unable to render <".concat(t," /> because window.").concat(i,".").concat(c," is undefined.");if(!a.includes(n)){var l=[a,n].filter(Boolean).join();s+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(l,"'}}>`.")}return s}function k(e){return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e)))}function w(e,t){var n;switch(t.type){case a.LOADING_STATUS:return _(_({},e),{loadingStatus:t.value});case a.RESET_OPTIONS:return function(e){var t=self.document.querySelector("script[".concat(m,'="').concat(e,'"]'));(null===t||void 0===t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}(e.options[m]),delete t.value[m],_(_({},e),{loadingStatus:r.PENDING,options:_(_({},t.value),(n={},n[m]="".concat(k(t.value)),n[v]=y,n))});case a.SET_BRAINTREE_INSTANCE:return _(_({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var I=(0,c.createContext)(null);function A(e){if("function"===typeof(null===e||void 0===e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function R(){var e=A((0,c.useContext)(I));return[_(_({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}(0,c.createContext)({});var O=function e(t){var n=t.className,r=void 0===n?"":n,a=t.disabled,o=void 0!==a&&a,i=t.children,s=t.forceReRender,l=void 0===s?[]:s,u=j(t,["className","disabled","children","forceReRender"]),d=o?{opacity:.38}:{},f="".concat(r," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,c.useRef)(null),h=(0,c.useRef)(null),m=R()[0],v=m.isResolved,y=m.options,N=(0,c.useState)(null),S=N[0],E=N[1],k=(0,c.useState)(!0),w=k[0],I=k[1],A=(0,c.useState)(null)[1];function O(){null!==h.current&&h.current.close().catch((function(){}))}return(0,c.useEffect)((function(){if(!1===v)return O;var t=x(y[g]);if(void 0===t||void 0===t.Buttons)return A((function(){throw new Error(P({reactComponentName:e.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:y.components,sdkDataNamespace:y[g]}))})),O;try{h.current=t.Buttons(_(_({},u),{onInit:function(e,t){E(t),"function"===typeof u.onInit&&u.onInit(e,t)}}))}catch(n){return A((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(n))}))}return!1===h.current.isEligible()?(I(!1),O):p.current?(h.current.render(p.current).catch((function(e){null!==p.current&&0!==p.current.children.length&&A((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),O):O}),b(b([v],l,!0),[u.fundingSource],!1)),(0,c.useEffect)((function(){null!==S&&(!0===o?S.disable().catch((function(){})):S.enable().catch((function(){})))}),[o,S]),c.createElement(c.Fragment,null,w?c.createElement("div",{ref:p,style:d,className:f}):i)};function T(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",a="";Array.isArray(t)?t.length>1?(r="*",a=t.toString()):r=t.toString():"string"===typeof t&&t.length>0?r=t:"string"===typeof n&&n.length>0&&(r="*",a=n);e["merchant-id"]=r,e["data-merchant-id"]=a}(e);var n=Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,n){var r=e[n].toString();return"data-"===n.substring(0,5)?t.dataAttributes[n]=r:t.queryParams[n]=r,t}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,a=n.dataAttributes;return{url:"".concat(t,"?").concat(C(r)),dataAttributes:a}}function C(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function D(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function L(e,t){if(void 0===t&&(t=U()),F(e,t),"undefined"===typeof window)return t.resolve(null);var n=T(e),r=n.url,a=n.dataAttributes,o=a["data-namespace"]||"paypal",i=q(o);return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=D(e,t),a=n.cloneNode();if(delete a.dataset.uidAuto,Object.keys(a.dataset).length!==Object.keys(r.dataset).length)return null;var o=!0;return Object.keys(a.dataset).forEach((function(e){a.dataset[e]!==r.dataset[e]&&(o=!1)})),o?n:null}(r,a)&&i?t.resolve(i):B({url:r,attributes:a},t).then((function(){var e=q(o);if(e)return e;throw new Error("The window.".concat(o," global variable is not available."))}))}function B(e,t){void 0===t&&(t=U()),F(e,t);var n=e.url,r=e.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"===typeof window)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,a=e.onError,o=D(t,n);o.onerror=a,o.onload=r,document.head.insertBefore(o,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&t(e),n.text()})).then((function(e){var n=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(n))})).catch((function(e){t(e)})):t(e)}})}))}function U(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function q(e){return window[e]}function F(e,t){if("object"!==typeof e||null===e)throw new Error("Expected an options object.");if("undefined"!==typeof t&&"function"!==typeof t)throw new Error("Expected PromisePonyfill to be a function.")}O.displayName="PayPalButtons";(function e(t){var n=t.className,r=void 0===n?"":n,a=t.children,o=j(t,["className","children"]),i=R()[0],s=i.isResolved,l=i.options,u=(0,c.useRef)(null),d=(0,c.useState)(!0),f=d[0],p=d[1],h=(0,c.useState)(null)[1];return(0,c.useEffect)((function(){if(!1!==s){var t=x(l[g]);if(void 0===t||void 0===t.Marks)return h((function(){throw new Error(P({reactComponentName:e.displayName,sdkComponentKey:"marks",sdkRequestedComponents:l.components,sdkDataNamespace:l[g]}))}));!function(e){var t=u.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&h((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(e))}))}))}(t.Marks(_({},o)))}}),[s,o.fundingSource]),c.createElement(c.Fragment,null,f?c.createElement("div",{ref:u,className:r}):a)}).displayName="PayPalMarks";var M=function(e){var t,n=e.options,o=void 0===n?{"client-id":"test"}:n,i=e.children,s=e.deferLoading,l=void 0!==s&&s,u=(0,c.useReducer)(w,{options:_(_({},o),(t={},t[m]="".concat(k(o)),t[v]=y,t)),loadingStatus:l?r.INITIAL:r.PENDING}),d=u[0],f=u[1];return(0,c.useEffect)((function(){if(!1===l&&d.loadingStatus===r.INITIAL)return f({type:a.LOADING_STATUS,value:r.PENDING});if(d.loadingStatus===r.PENDING){var e=!0;return L(d.options).then((function(){e&&f({type:a.LOADING_STATUS,value:r.RESOLVED})})).catch((function(t){console.error("".concat(N," ").concat(t)),e&&f({type:a.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[d.options,l,d.loadingStatus]),c.createElement(I.Provider,{value:_(_({},d),{dispatch:f})},i)},G=n(7689),Z=n(7558),J=function(e){e.totalAmount;var t=e.onApprove,n=(0,s.I0)(),r=(0,G.s0)();return(0,p.jsx)(M,{options:{"client-id":"AcNOytnjExuv-KS5qOHxR49tPBcnhrcmbiMx1rhUqpiy7YsFFwavvM65ZsMyM6RGs7PicM8vKqQyfdrj"},children:(0,p.jsx)(O,{createSubscription:function(e,t){return t.subscription.create({plan_id:"P-4RU74068SC498771DMSXCTCY"})},onApprove:function(e,a){t(),r("/dada-chinese/order-confirmation"),n(Z.U.resetCart({guest:null===localStorage.getItem("token")}))},onError:function(e){console.log(e)}})})},K=n(2845),V=n(3264),Q="checkout_wrap__qFQpx",X="checkout_form__8VUDs",Y="checkout_section__IudwW",z="checkout_subtitle__74zhl",H="checkout_total__8FLne",$="checkout_total__text__LDVRi",W="checkout_summary__I3BxR",ee="checkout_list-wrap__f35ZQ",te="checkout_box-wrap__HStVi",ne="checkout_input__nBZ9u",re=(n(4644),function(){var e=(0,s.v9)((function(e){return e.cart})),t=e.items.findIndex((function(e){return"t1"===e.id})),n=(0,c.useState)(!1),r=(0,i.Z)(n,2),a=r[0],o=r[1],l=(0,c.useState)(),u=(0,i.Z)(l,2),d=u[0],f=u[1],m=(0,c.useRef)(),v=(0,c.useRef)(),y=(0,c.useRef)(),g=(0,c.useRef)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:V.Z.title,children:"Checkout"}),(0,p.jsx)("div",{className:Q,children:(0,p.jsxs)("div",{className:te,children:[(0,p.jsxs)("div",{className:ee,children:[(0,p.jsx)("p",{className:W,children:"Summary"}),e.items.map((function(e){return(0,p.jsx)(h,{title:e.title,price:e.price,quantity:e.quantity},e.title)})),(0,p.jsxs)("div",{className:H,children:[(0,p.jsx)("p",{className:$,children:"Total:"}),(0,p.jsxs)("p",{className:$,children:["$",e.totalPrice]})]})]}),(0,p.jsxs)("div",{className:Y,children:[d&&(0,p.jsx)("p",{className:V.Z.error,children:d}),(0,p.jsxs)("form",{className:X,onSubmit:function(e){if(e.preventDefault(),-1!==t&&""===m.current.value.trim()||!localStorage.getItem("token")&&(""===y.current.value.trim()||""===g.current.value.trim()))return f("Please fill out the entirety of the form");o((function(e){return!e}))},children:[!localStorage.getItem("token")&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:z,children:"Basic Info"}),(0,p.jsxs)("fieldset",{children:[(0,p.jsx)("legend",{children:"Name"}),(0,p.jsx)("input",{name:"name",className:ne,type:"text",ref:y})]}),(0,p.jsxs)("fieldset",{children:[(0,p.jsx)("legend",{children:"Email"}),(0,p.jsx)("input",{name:"email",className:ne,type:"text",ref:g})]})]}),-1!==t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:z,children:"Shipping Info"}),(0,p.jsxs)("fieldset",{children:[(0,p.jsx)("legend",{children:"Address"}),(0,p.jsx)("input",{name:"address",className:ne,type:"text",ref:m})]}),(0,p.jsxs)("fieldset",{children:[(0,p.jsx)("legend",{children:"Apt # (optional)"}),(0,p.jsx)("input",{type:"text",className:ne,ref:v})]})]}),localStorage.getItem("token")&&-1===t&&(0,p.jsx)("p",{className:V.Z.title,children:"Thank you for choosing Dada Chinese!"}),(0,p.jsx)("div",{className:Q,children:a?(0,p.jsx)(J,{onApprove:function(){var n="";-1!==t&&(n=""!==v.current.value.trim()?m.current.value+" Apt #: "+v.current.value:m.current.value);var r=!1,a="https://dada-chinese-rest-api.herokuapp.com/shop/new-order",o="https://dada-chinese-rest-api.herokuapp.com/shop/new-order-guest",i=g.current.value||null,c=JSON.stringify({items:e.items,totalPrice:e.totalPrice}),s=JSON.stringify({items:e.items,totalPrice:e.totalPrice,address:n,name:y.current.value||"",email:g.current.value||""}),l={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},u={"Content-Type":"application/json"};fetch(null!==localStorage.getItem("token")?a:o,{method:"PUT",body:null!==localStorage.getItem("token")?c:s,headers:null!==localStorage.getItem("token")?l:u}).then((function(e){return e.ok||(r=!0),e.json()})).then((function(t){return r?void f(t.error):(a="https://dada-chinese-rest-api.herokuapp.com/shop/order-email",o="https://dada-chinese-rest-api.herokuapp.com/shop/order-email-guest",c=JSON.stringify({cartItems:e.items}),s=JSON.stringify({cartItems:e.items,email:i}),console.log(t.message),fetch(null!==localStorage.getItem("token")?a:o,{method:"POST",body:null!==localStorage.getItem("token")?c:s,headers:null!==localStorage.getItem("token")?l:u}))})).then((function(){})).catch((function(e){f(e.message),console.log(e)}))},totalAmount:e.totalPrice}):(0,p.jsx)(K.Z,{children:"Pay"})}),(0,p.jsx)("div",{id:"paypal-button-container"})]})]})]})})]})})},4644:function(e,t){t.Z={contact:"contact-form_contact__e1TKj",wrap:"contact-form_wrap__7XlKk",invalid:"contact-form_invalid__EycRU",label:"contact-form_label__AksD3",submit:"contact-form_submit__B9Q05",hover:"contact-form_hover__EZvMx"}}}]);
//# sourceMappingURL=55.d1e2423a.chunk.js.map