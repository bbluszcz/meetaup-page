"use strict";function countdown(){var e=new Date,t=new Date("december 31, 2017 00:00:00"),o=e.getTime(),n=t.getTime()-o,r=Math.floor(n/1e3),s=Math.floor(r/60),i=Math.floor(s/60),a=Math.floor(i/24);i%=24,s%=60,r%=60,a<10&&(a="0"+a),i<10&&(i="0"+i),s<10&&(s="0"+s),r<10&&(r="0"+r),document.getElementById("clock").innerHTML="<span>"+a+"</span><span>"+i+"</span><span>"+s+"</span><span>"+r+"</span>"}function initMap(){var e={lat:51.11,lng:17.03},t=new google.maps.Map(document.getElementById("map"),{zoom:12,center:e});new google.maps.Marker({position:e,map:t})}setInterval(countdown,1e3);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,s,i){"object"===(void 0===s?"undefined":_typeof(s))&&(i=s,s=0),"function"==typeof i&&(i={onAfter:i}),"max"===r&&(r=9e9),i=e.extend({},n.defaults,i),s=s||i.duration;var a=i.queue&&1<i.axis.length;return a&&(s/=2),i.offset=o(i.offset),i.over=o(i.over),this.each(function(){function c(t){var o=e.extend({},i,{queue:!0,duration:s,complete:t&&function(){t.call(d,f,i)}});m.animate(v,o)}if(null!==r){var l,u=t(this),d=u?this.contentWindow||window:this,m=e(d),f=r,v={};switch(void 0===f?"undefined":_typeof(f)){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=o(f);break}f=u?e(f):e(f,d);case"object":if(0===f.length)return;(f.is||f.style)&&(l=(f=e(f)).offset())}var p=e.isFunction(i.offset)&&i.offset(d,f)||i.offset;e.each(i.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",r=o.toLowerCase(),s="scroll"+o,y=m[s](),L=n.max(d,t);l?(v[s]=l[r]+(u?0:y-m.offset()[r]),i.margin&&(v[s]-=parseInt(f.css("margin"+o),10)||0,v[s]-=parseInt(f.css("border"+o+"Width"),10)||0),v[s]+=p[r]||0,i.over[r]&&(v[s]+=f["x"===t?"width":"height"]()*i.over[r])):(o=f[r],v[s]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*L:o),i.limit&&/^\d+$/.test(v[s])&&(v[s]=0>=v[s]?0:Math.min(v[s],L)),!e&&1<i.axis.length&&(y===v[s]?v={}:a&&(c(i.onAfterFirst),v={}))}),c(i.onAfter)}})},n.max=function(o,n){var r="scroll"+(s="x"===n?"Width":"Height");if(!t(o))return o[r]-e(o)[s.toLowerCase()]();var s="client"+s,i=(a=o.ownerDocument||o.document).documentElement,a=a.body;return Math.max(i[r],a[r])-Math.min(i[s],a[s])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n}),$(".burger-container").click(function(){$(this).toggleClass("cross")}),$(".burger-container").click(function(){$(".menu").slideToggle("show-menu")}),$(".contact-box__adress button").click(function(){$(".contact .mask").hide(1e3)}),$(".show-form__button").click(function(){$(".contact .mask").show(1e3)}),$(".past-event__button").click(function(){$(".past-event__more").slideToggle(1e3)}),jQuery(function(e){e("#eventLink").click(function(){e.scrollTo(e("#eventSection"),500)}),e("#speakerLink").click(function(){e.scrollTo(e("#speakerSection"),800)}),e("#sponsorLink").click(function(){e.scrollTo(e("#sponsorSection"),1e3)}),e("#pastLink").click(function(){e.scrollTo(e("#pastSection"),1200)}),e("#contactLink").click(function(){e.scrollTo(e("#contactSection"),1400)}),e("#scrollUp").click(function(){e.scrollTo(e("#wrapperPage"),1400)})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".form"),t=document.querySelector(".input-name"),o=document.querySelector(".input-phone"),n=document.querySelector(".input-email"),r=document.querySelector(".input-username"),s=document.querySelector(".email-message-input"),i=document.querySelector(".form__textarea");t.addEventListener("blur",function(){var e=document.querySelector(".input-name").value,o=document.querySelector(".comment-name");/^[a-zA-Z]{3,10}$/.test(e)?(t.classList.remove("valid-noOk"),t.classList.add("valid-ok"),o.innerHTML="Correct name",o.style.color="green"):(t.classList.add("valid-noOk"),t.classList.remove("valid-ok"),o.innerHTML="Incorrect name",o.style.color="red")}),n.addEventListener("blur",function(){var e=document.querySelector(".input-email").value,t=document.querySelector(".comment-email");/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/.test(e)?(n.classList.add("valid-ok"),n.classList.remove("valid-noOk"),t.innerHTML="Correct e-mail address",t.style.color="green"):(n.classList.add("valid-noOk"),n.classList.remove("valid-ok"),t.innerHTML="Incorrect e-mail address",t.style.color="red")}),o.addEventListener("blur",function(){var e=document.querySelector(".input-phone").value,t=document.querySelector(".comment-phone");/^[0-9]{9}$/.test(e)?(o.classList.add("valid-ok"),o.classList.remove("valid-noOk"),t.innerHTML="Correct phone number",t.style.color="green"):(o.classList.add("valid-noOk"),o.classList.remove("valid-ok"),t.innerHTML="Phone number should contains 9 numbers",t.style.color="red")}),r.addEventListener("blur",function(){var e=document.querySelector(".input-username").value,t=document.querySelector(".comment-username");/^[a-zA-Z]{3,15}$/.test(e)?(r.classList.add("valid-ok"),r.classList.remove("valid-noOk"),t.innerHTML="Correct username",t.style.color="green"):(r.classList.add("valid-noOk"),r.classList.remove("valid-ok"),t.innerHTML="Incorrect username",t.style.color="red")}),e.addEventListener("submit",function(e){e.preventDefault(),t.classList.contains("valid-ok")&&o.classList.contains("valid-ok")&&n.classList.contains("valid-ok")&&r.classList.contains("valid-ok")}),s.addEventListener("blur",function(){var e=document.querySelector(".email-message-input").value,t=document.querySelector(".message-comment");/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/.test(e)?(s.classList.add("valid-ok"),s.classList.remove("valid-noOk"),t.innerHTML="Correct e-mail address",t.style.color="green"):(s.classList.add("valid-noOk"),s.classList.remove("valid-ok"),t.innerHTML="incorrect e-mail address",t.style.color="red")}),i.addEventListener("blur",function(){""!==document.querySelector(".form__textarea").value?(i.classList.add("valid-ok"),i.classList.remove("valid-noOk")):(i.classList.remove("valid-ok"),i.classList.add("valid-noOk"))})});