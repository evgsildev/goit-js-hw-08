!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,u,a,f,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),s?j(e):a}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=p();if(T(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function h(e){return f=void 0,b&&o?j(e):(o=i=void 0,a)}function w(){var e=p(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(O,t),j(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=y(t)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function g(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=g(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),S=document.querySelector("input"),T=document.querySelector("textarea"),O="feedback-form-state";j.addEventListener("input",(function(e){var t=e.currentTarget.elements,n=t.email,r=t.message,o={email:n.value,message:r.value};localStorage.setItem(O,JSON.stringify(o))})),j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message,o={email:n.value,message:r.value};console.log(o),e.currentTarget.reset(),localStorage.clear()})),function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e);S.value=t.email,T.value=t.message}}()}();
//# sourceMappingURL=03-feedback.1dcb8761.js.map
