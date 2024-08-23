import{i as f,S as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function p(t){const i=`https://pixabay.com/api/?key=45536153-cc603d9bdbd983a3052077003&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(i);if(!n.ok)throw new Error("Failed to fetch images");return await n.json()}function h(){const t=document.querySelector(".js-gallery");t.innerHTML=""}function y(t,o){const i=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:s,views:l,comments:d,downloads:u})=>`
        <li>
            <a class="gallery__item" href="${e}">
                <img class="gallery__image" src="${n}" alt="${r}" />
            </a>
            <div class="image-info">
                <div class="image-info-item">Likes<span>${s}</span></div>
                <div class="image-info-item">Views<span>${l}</span></div>
                <div class="image-info-item">Comments<span>${d}</span></div>
                <div class="image-info-item">Downloads<span>${u}</span></div>
            </div>
        </li>
    `).join("");o.innerHTML=i,v()}function g(){const t=document.createElement("div");t.classList.add("loader"),document.body.appendChild(t)}function c(){const t=document.querySelector(".loader");t&&t.remove()}function a(t){f.show({message:t,position:"topRight"})}function v(){new m(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector(".form"),b=document.querySelector(".input"),w=document.querySelector(".js-gallery");L.addEventListener("submit",t=>{t.preventDefault();const o=b.value.trim();if(!o){a("Please enter a search query");return}h(),g(),p(o).then(i=>{if(c(),i.hits.length===0){a("Sorry, there are no images matching your search query. Please try again!");return}y(i.hits,w)}).catch(i=>{c(),a("Failed to load images. Please try again later.")})});
//# sourceMappingURL=commonHelpers.js.map
