!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(S,t),s?b(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function S(){var e=g();if(w(e))return O(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?b(e):(r=o=void 0,u)}function h(){var e=g(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(S,t),b(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=I(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(I(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:O(g())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')};j.form.addEventListener("input",e(t)((function(){var e={email:j.emailInput.value,message:j.messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=t.email,r=t.message;j.emailInput.value=n,j.messageInput.value=r}})),j.form.addEventListener("submit",(function(e){e.preventDefault();var t=j.emailInput.value,n=j.messageInput.value;if(""===t.trim()||""===n.trim())return!1;var r={email:t,message:n};console.log(r),j.form.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.a9c5e4d7.js.map
