!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var c=r("6JpON"),u=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');document.querySelector("button").addEventListener("click",(function(n){var o=function(n){var o=n;(function(n,o,t){return new Promise((function(r,u){var i=Math.random()>.3,l=o+(n-1)*t;setTimeout((function(){i?r(e(c).Notify.success("Fulfilled promise ".concat(n," in ").concat(l," ms"))):u(e(c).Notify.failure("Rejected promise ".concat(n," in ").concat(l," ms")))}),l)}))})(o,t,r).then((function(){console.log("Fulfilled promise ".concat(o," in ").concat(t+(o-1)*r," ms"))})).catch((function(){console.log("Rejected promise ".concat(o," in ").concat(t+(o-1)*r," ms"))}))};n.preventDefault();for(var t=Number(u.value),r=Number(i.value),a=Number(l.value),f=1;f<=a;f+=1)o(f)}))}();
//# sourceMappingURL=03-promises.9ec030ea.js.map