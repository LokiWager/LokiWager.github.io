import"./hoisted.5ITtbDzT.js";import"./astro/assets-service.1mn5GyWb.js";const t=document.getElementById("to-top-btn"),n=document.getElementById("blog-hero");function r(e){e.forEach(o=>{t.dataset.show=(!o.isIntersecting).toString()})}t.addEventListener("click",()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})});const c=new IntersectionObserver(r);c.observe(n);
