// Progres bar la scroll
const bar=document.createElement("div");
bar.style.position="fixed";
bar.style.top="0";
bar.style.left="0";
bar.style.height="3px";
bar.style.width="0%";
bar.style.zIndex="999999";
bar.style.background="linear-gradient(90deg,#7c5cff,#2dd4bf)";
document.body.appendChild(bar);

window.addEventListener("scroll",()=>{
  const scrolled=window.scrollY;
  const height=document.documentElement.scrollHeight-window.innerHeight;
  bar.style.width=(scrolled/height)*100+"%";
});

// Apare cate un element pe lista
document.querySelectorAll(".body li").forEach((li,i)=>{
  li.style.opacity="0";
  li.style.transform="translateY(10px)";

  setTimeout(()=>{
    li.style.transition="all .4s ease";
    li.style.opacity="1";
    li.style.transform="none";
  }, i*90);
});

// Imaginile intra din lateral 
const style=document.createElement("style");
style.textContent=`
.slide-init{
  opacity:0;
  transform:translateX(var(--dir, -80px));
}
.slide-show{
  opacity:1;
  transform:none;
  transition:transform .8s cubic-bezier(.22,.9,.22,1), opacity .8s ease;
}
`;
document.head.appendChild(style);


const images=[...document.querySelectorAll(".product .imgFrame")];

images.forEach((img,i)=>{
  img.style.setProperty("--dir", i%2 ? "80px" : "-80px");
  img.classList.add("slide-init");
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("slide-show");
      observer.unobserve(e.target);
    }
  });
},{threshold:.25});

images.forEach(img=>observer.observe(img));


// Glow pe card activ
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.boxShadow="0 0 0 2px rgba(124,92,255,.7), 0 25px 60px rgba(0,0,0,.5)";
    }else{
      e.target.style.boxShadow="";
    }
  });
},{threshold:.6});

document.querySelectorAll(".product").forEach(p=>obs.observe(p));

document.querySelectorAll(".product").forEach(card=>{
  card.addEventListener("click", e=>{
    const r=card.getBoundingClientRect();
    const ripple=document.createElement("span");

    const size=Math.max(r.width,r.height);
    ripple.style.position="absolute";
    ripple.style.borderRadius="50%";
    ripple.style.pointerEvents="none";
    ripple.style.width=size+"px";
    ripple.style.height=size+"px";
    ripple.style.left=(e.clientX-r.left-size/2)+"px";
    ripple.style.top=(e.clientY-r.top-size/2)+"px";
    ripple.style.background="rgba(255,255,255,.15)";
    ripple.style.transform="scale(0)";
    ripple.style.transition="transform .6s ease, opacity .6s ease";

    card.style.position="relative";
    card.appendChild(ripple);

    requestAnimationFrame(()=>{
      ripple.style.transform="scale(1)";
      ripple.style.opacity="0";
    });

    setTimeout(()=>ripple.remove(),600);
  });
});

