(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const u="/encriptadorProyecto/assets/Munheco-fc485c51.svg",i=`<img src="${u}" alt="Diamantes" class="imagen">
<div class="area-mensajes">
<h2 class="sub-mensaje">Ningun mensaje fue encontrado</h2>
<p class="texto">Ingresa el texto que desea encriptar o desencriptar.</p>
</div>`,d=t=>{document.querySelector(".area-respuesta").innerHTML="";const e=document.querySelector(".area-respuesta"),n=document.createElement("button");n.className="boton",n.textContent="Copiar";const a=document.createElement("p");a.className="texto-respuesta",a.textContent=t,n.addEventListener("click",()=>{navigator.clipboard.writeText(t)}),e.appendChild(a),e.appendChild(n)};function l(t){return t.split("").map(a=>p(a)).join("")}function p(t){switch(t){case"a":return"ai";case"e":return"enter";case"i":return"imes";case"o":return"ober";case"u":return"ufat";default:return t}}const f=[{encriptado:"ai",vocal:"a"},{encriptado:"enter",vocal:"e"},{encriptado:"imes",vocal:"i"},{encriptado:"ober",vocal:"o"},{encriptado:"ufat",vocal:"u"}];function m(t){let e=t;return f.forEach(n=>{e=v(e,n.vocal,n.encriptado)}),e}function v(t,e,n){return t.split(n).join(e)}function y(){const t=document.querySelector(".area-respuesta");t.innerHTML=i;const e=document.querySelector(".entrada"),n=document.querySelectorAll(".boton-entrada");n[0].addEventListener("click",()=>{s(t,e,l)}),n[1].addEventListener("click",()=>{s(t,e,m)})}function s(t,e,n){if(!e.value)t.innerHTML=i;else{const a=n(e.value);d(a),e.value=""}}y();