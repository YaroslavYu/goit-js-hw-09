!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body"),d=null;function n(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));a.style.backgroundColor=e}t.disabled=!0,e.addEventListener("click",(function(){d=setInterval(n,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.4447bdc9.js.map
