function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function E(e){return l=e,u=setTimeout(j,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function j(){var e=v();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,r-(e-l)):n}(e))}function h(e){return u=void 0,p&&i?b(e):(i=o=void 0,a)}function w(){var e=v(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const b={formEl:document.querySelector(".feedback-form"),emailEl:document.querySelector('input[type="email"][name="email"]'),messageEl:document.querySelector('textarea[name="message"]'),btnEl:document.querySelector('button[type="submit"]')};let E={};b.formEl.addEventListener("input",e(t)((function(){data={email:b.emailEl.value.trim(),message:b.messageEl.value.trim()},localStorage.setItem("feedback-form-state",JSON.stringify(data))}),500)),b.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(E)})),function(){const e=localStorage.getItem("feedback-form-state");var t;if(E=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{},!e)return;b.emailEl.value=E.email,b.messageEl.value=E.message}();
//# sourceMappingURL=03-feedback.154a87f2.js.map
