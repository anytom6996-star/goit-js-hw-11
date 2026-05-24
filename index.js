import{a as u,S as p,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",h="43121129-d44587e207dc12fa46ae63de0";async function y(s){return(await u.get(m,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(){l.innerHTML=""}function L(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img
            src="${t.webformatURL}"
            alt="${t.tags}"
            class="gallery-image"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${t.likes}</p>
          <p><b>Views</b> ${t.views}</p>
          <p><b>Comments</b> ${t.comments}</p>
          <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function w(){d.classList.add("is-visible")}function f(){d.classList.remove("is-visible")}const c=document.querySelector(".form");f();c.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.error({message:"Please fill in the search field!",position:"topRight"});return}b(),w();try{const t=await y(o);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}catch(t){a.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}finally{f(),c.reset()}});
//# sourceMappingURL=index.js.map
