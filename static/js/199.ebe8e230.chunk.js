"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[199],{5452:function(e,t,n){n.d(t,{Z:function(){return p}});var r="checkout-item_item__ds-f5",a="checkout-item_wrap__xvNEG",o="checkout-item_title__Q75xj",c="checkout-item_price__Q4+Ir",i="checkout-item_quantity__R6c8N",s="checkout-item_section__Gu457",l="checkout-item_middle-section__Qunet",u="checkout-item_mid-wrap__KLH5b",d="checkout-item_half-section__WOtWb",f=n(184),p=function(e){var t=e.title,n=e.price,p=e.quantity,h=e.time;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("section",{className:h?s:d,children:(0,f.jsx)("p",{className:o,children:t})}),(0,f.jsx)("section",{className:h?l:s,children:(0,f.jsxs)("div",{className:h?a:u,children:[p>1&&(0,f.jsxs)("p",{className:i,children:["x",p]}),n?(0,f.jsxs)("p",{className:c,children:["$",n]}):(0,f.jsx)("p",{className:c,children:"Price"})]})}),h&&(0,f.jsx)("section",{className:s,children:(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)("p",{children:h.split(" ")[0]}),(0,f.jsx)("p",{children:h.split(" ")[1]})]})})]})})}},9102:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r,a,o,c=n(9439),i=n(2791),s=n(9434),l=n(7689),u=n(5452);!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(a||(a={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(o||(o={}));var d="data-react-paypal-script-id",f="data-sdk-integration-source",p="react-paypal-js",h="data-namespace",m="Failed to load the PayPal JS SDK script.",v="3.84.0",_=("https://js.braintreegateway.com/web/".concat(v,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(v,"/js/paypal-checkout.min.js"),"paypal"),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function N(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function j(e){return void 0===e&&(e=_),window[e]}function E(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,a=void 0===r?"":r,o=e.sdkDataNamespace,c=void 0===o?_:o,i=n.charAt(0).toUpperCase().concat(n.substring(1)),s="Unable to render <".concat(t," /> because window.").concat(c,".").concat(i," is undefined.");if(!a.includes(n)){var l=[a,n].filter(Boolean).join();s+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(l,"'}}>`.")}return s}function x(e){return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e)))}function b(e,t){var n;switch(t.type){case a.LOADING_STATUS:return y(y({},e),{loadingStatus:t.value});case a.RESET_OPTIONS:return function(e){var t=self.document.querySelector("script[".concat(d,'="').concat(e,'"]'));(null===t||void 0===t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}(e.options[d]),delete t.value[d],y(y({},e),{loadingStatus:r.PENDING,options:y(y({},t.value),(n={},n[d]="".concat(x(t.value)),n[f]=p,n))});case a.SET_BRAINTREE_INSTANCE:return y(y({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var S=(0,i.createContext)(null);function k(e){if("function"===typeof(null===e||void 0===e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function w(){var e=k((0,i.useContext)(S));return[y(y({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}(0,i.createContext)({});var I=function e(t){var n=t.className,r=void 0===n?"":n,a=t.disabled,o=void 0!==a&&a,c=t.children,s=t.forceReRender,l=void 0===s?[]:s,u=g(t,["className","disabled","children","forceReRender"]),d=o?{opacity:.38}:{},f="".concat(r," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,i.useRef)(null),m=(0,i.useRef)(null),v=w()[0],_=v.isResolved,x=v.options,b=(0,i.useState)(null),S=b[0],k=b[1],I=(0,i.useState)(!0),P=I[0],A=I[1],T=(0,i.useState)(null)[1];function C(){null!==m.current&&m.current.close().catch((function(){}))}return(0,i.useEffect)((function(){if(!1===_)return C;var t=j(x[h]);if(void 0===t||void 0===t.Buttons)return T((function(){throw new Error(E({reactComponentName:e.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:x.components,sdkDataNamespace:x[h]}))})),C;try{m.current=t.Buttons(y(y({},u),{onInit:function(e,t){k(t),"function"===typeof u.onInit&&u.onInit(e,t)}}))}catch(n){return T((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(n))}))}return!1===m.current.isEligible()?(A(!1),C):p.current?(m.current.render(p.current).catch((function(e){null!==p.current&&0!==p.current.children.length&&T((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),C):C}),N(N([_],l,!0),[u.fundingSource],!1)),(0,i.useEffect)((function(){null!==S&&(!0===o?S.disable().catch((function(){})):S.enable().catch((function(){})))}),[o,S]),i.createElement(i.Fragment,null,P?i.createElement("div",{ref:p,style:d,className:f}):c)};function P(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",a="";Array.isArray(t)?t.length>1?(r="*",a=t.toString()):r=t.toString():"string"===typeof t&&t.length>0?r=t:"string"===typeof n&&n.length>0&&(r="*",a=n);e["merchant-id"]=r,e["data-merchant-id"]=a}(e);var n=Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,n){var r=e[n].toString();return"data-"===n.substring(0,5)?t.dataAttributes[n]=r:t.queryParams[n]=r,t}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,a=n.dataAttributes;return{url:"".concat(t,"?").concat(A(r)),dataAttributes:a}}function A(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function T(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function C(e,t){if(void 0===t&&(t=O()),L(e,t),"undefined"===typeof window)return t.resolve(null);var n=P(e),r=n.url,a=n.dataAttributes,o=a["data-namespace"]||"paypal",c=D(o);return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=T(e,t),a=n.cloneNode();if(delete a.dataset.uidAuto,Object.keys(a.dataset).length!==Object.keys(r.dataset).length)return null;var o=!0;return Object.keys(a.dataset).forEach((function(e){a.dataset[e]!==r.dataset[e]&&(o=!1)})),o?n:null}(r,a)&&c?t.resolve(c):R({url:r,attributes:a},t).then((function(){var e=D(o);if(e)return e;throw new Error("The window.".concat(o," global variable is not available."))}))}function R(e,t){void 0===t&&(t=O()),L(e,t);var n=e.url,r=e.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"===typeof window)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,a=e.onError,o=T(t,n);o.onerror=a,o.onload=r,document.head.insertBefore(o,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&t(e),n.text()})).then((function(e){var n=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(n))})).catch((function(e){t(e)})):t(e)}})}))}function O(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function D(e){return window[e]}function L(e,t){if("object"!==typeof e||null===e)throw new Error("Expected an options object.");if("undefined"!==typeof t&&"function"!==typeof t)throw new Error("Expected PromisePonyfill to be a function.")}I.displayName="PayPalButtons";(function e(t){var n=t.className,r=void 0===n?"":n,a=t.children,o=g(t,["className","children"]),c=w()[0],s=c.isResolved,l=c.options,u=(0,i.useRef)(null),d=(0,i.useState)(!0),f=d[0],p=d[1],m=(0,i.useState)(null)[1];return(0,i.useEffect)((function(){if(!1!==s){var t=j(l[h]);if(void 0===t||void 0===t.Marks)return m((function(){throw new Error(E({reactComponentName:e.displayName,sdkComponentKey:"marks",sdkRequestedComponents:l.components,sdkDataNamespace:l[h]}))}));!function(e){var t=u.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&m((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(e))}))}))}(t.Marks(y({},o)))}}),[s,o.fundingSource]),i.createElement(i.Fragment,null,f?i.createElement("div",{ref:u,className:r}):a)}).displayName="PayPalMarks";var U=function(e){var t,n=e.options,o=void 0===n?{"client-id":"test"}:n,c=e.children,s=e.deferLoading,l=void 0!==s&&s,u=(0,i.useReducer)(b,{options:y(y({},o),(t={},t[d]="".concat(x(o)),t[f]=p,t)),loadingStatus:l?r.INITIAL:r.PENDING}),h=u[0],v=u[1];return(0,i.useEffect)((function(){if(!1===l&&h.loadingStatus===r.INITIAL)return v({type:a.LOADING_STATUS,value:r.PENDING});if(h.loadingStatus===r.PENDING){var e=!0;return C(h.options).then((function(){e&&v({type:a.LOADING_STATUS,value:r.RESOLVED})})).catch((function(t){console.error("".concat(m," ").concat(t)),e&&v({type:a.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[h.options,l,h.loadingStatus]),i.createElement(S.Provider,{value:y(y({},h),{dispatch:v})},c)},B=n(7558),Z=n(184),G=function(e){var t=e.totalAmount,n=e.onApprove,r=(0,s.I0)(),a=(0,l.s0)();return(0,Z.jsx)(U,{options:{"client-id":"AXHIEMZTDEWyn9VV0mTVL0tYu5u-ikyUQBpNur2j1frAoZoGIajecrgwZ-iCoEe_jHU1b2Ya_jlmAaUc"},children:(0,Z.jsx)(I,{createOrder:function(e,n){return n.order.create({purchase_units:[{description:"Credit for Dada Chinese Classes or Textbooks",amount:{currency_code:"USD",value:parseInt(t)}}]}).then((function(e){return console.log(e),e}))},onApprove:function(e,t){return t.order.capture().then((function(e){var t=e.payer;console.log(t),n(),a("/order-confirmation"),r(B.U.resetCart({guest:null===localStorage.getItem("token")}))}))},onError:function(e){console.log(e)}})})},q=n(2845),F=n(3264),M={wrap:"checkout_wrap__qFQpx",form:"checkout_form__8VUDs",section:"checkout_section__IudwW",subtitle:"checkout_subtitle__74zhl",total:"checkout_total__8FLne",total__text:"checkout_total__text__LDVRi",summary:"checkout_summary__I3BxR","list-wrap":"checkout_list-wrap__f35ZQ","box-wrap":"checkout_box-wrap__HStVi",input:"checkout_input__nBZ9u","border-change":"checkout_border-change__cFH4P",credit:"checkout_credit__IWI6i",hover:"checkout_hover__LnPz9",text:"checkout_text__offQM"},V=(n(4644),function(){var e=(0,s.v9)((function(e){return e.cart})),t=(0,i.useState)(!1),n=(0,c.Z)(t,2),r=n[0],a=n[1],o=(0,i.useState)(),d=(0,c.Z)(o,2),f=d[0],p=d[1],h=(0,i.useState)(e.totalPrice),m=(0,c.Z)(h,2),v=m[0],_=m[1],y=e.items.findIndex((function(e){return"t1"===e.id})),g=((0,l.s0)(),(0,s.I0)()),N=(0,i.useRef)(),j=(0,i.useRef)(),E=(0,i.useRef)(),x=(0,i.useRef)(),b=function(e){if(e.preventDefault(),-1!==y&&""===N.current.value.trim()||!localStorage.getItem("token")&&(""===E.current.value.trim()||""===x.current.value.trim()))return p("Please fill out the entirety of the form");a((function(e){return!e}))};return(0,i.useEffect)((function(){_(e.totalPrice)}),[e.totalPrice]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("p",{className:F.Z.title,children:"Checkout"}),(0,Z.jsx)("div",{className:M.wrap,children:(0,Z.jsxs)("div",{className:M["box-wrap"],children:[(0,Z.jsxs)("div",{className:M["list-wrap"],children:[(0,Z.jsx)("p",{className:M.summary,children:"Summary"}),e.items.map((function(e){return(0,Z.jsx)(u.Z,{title:e.title,price:e.price,quantity:e.quantity,time:e.time},e.title)})),(0,Z.jsxs)("div",{className:M.total,children:[(0,Z.jsx)("p",{className:M.total__text,children:"Total:"}),(0,Z.jsxs)("p",{className:M.total__text,children:["$",v]})]})]}),(0,Z.jsxs)("div",{className:M.section,children:[f&&(0,Z.jsx)("p",{className:F.Z.error,children:f}),(0,Z.jsxs)("form",{className:M.form,onSubmit:b,children:[!localStorage.getItem("token")&&(0,Z.jsxs)("div",{className:M.form__section,children:[(0,Z.jsx)("p",{className:M.subtitle,children:"Basic Info"}),(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Name"}),(0,Z.jsx)("input",{name:"name",className:M.input,type:"text",ref:E})]}),(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Email"}),(0,Z.jsx)("input",{name:"email",className:M.input,type:"text",ref:x})]})]}),-1!==y&&(0,Z.jsxs)("div",{className:M.form__section,children:[(0,Z.jsx)("p",{className:M.subtitle,children:"Shipping Info"}),(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Address"}),(0,Z.jsx)("input",{name:"address",className:M.input,type:"text",ref:N})]}),(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Apt # (optional)"}),(0,Z.jsx)("input",{type:"text",className:M.input,ref:j})]})]}),(0,Z.jsx)("div",{className:M.text,children:localStorage.getItem("token")&&-1===y&&(0,Z.jsx)("p",{className:F.Z.title,children:"Thank you for choosing Dada Chinese!"})}),(0,Z.jsx)("div",{className:M.wrap,children:r?0!==v&&(0,Z.jsx)(G,{onApprove:function(){var t="";-1!==y&&(t=""!==j.current.value.trim()?N.current.value+" Apt #: "+j.current.value:N.current.value);var n=!1;localStorage.getItem("token")||x.current.value;var r=JSON.stringify({items:e.items,totalPrice:e.totalPrice,address:t}),a=JSON.stringify({items:e.items,totalPrice:e.totalPrice,address:t,name:localStorage.getItem("token")?"":E.current.value,email:localStorage.getItem("token")?"":x.current.value}),o={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")};fetch(null!==localStorage.getItem("token")?"https://dada-chinese-rest-api.herokuapp.com/shop/new-order":"https://dada-chinese-rest-api.herokuapp.com/shop/new-order-guest",{method:"PUT",body:null!==localStorage.getItem("token")?r:a,headers:null!==localStorage.getItem("token")?o:{"Content-Type":"application/json"}}).then((function(e){return e.ok||(n=!0),e.json()})).then((function(e){n?p(e.error):g(B.U.resetCart())})).catch((function(e){p(e.message),console.log(e)}))},totalAmount:v}):(0,Z.jsx)(q.Z,{onClick:b,children:"Pay"})})]})]})]})})]})})},4644:function(e,t){t.Z={contact:"contact-form_contact__e1TKj",wrap:"contact-form_wrap__7XlKk",invalid:"contact-form_invalid__EycRU",label:"contact-form_label__AksD3",submit:"contact-form_submit__B9Q05",hover:"contact-form_hover__EZvMx"}}}]);
//# sourceMappingURL=199.ebe8e230.chunk.js.map