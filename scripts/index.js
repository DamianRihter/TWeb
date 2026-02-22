
// 3D inclinare la carduri
document.querySelectorAll(".cat").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 14;
    const rotateX = (y / rect.height - 0.5) * -14;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "";
  });
});


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


// Cate un element pe lista
document.querySelectorAll(".list li").forEach((li,i)=>{
  li.style.opacity="0";
  li.style.transform="translateY(10px)";
  setTimeout(()=>{
    li.style.transition="all .4s ease";
    li.style.opacity="1";
    li.style.transform="none";
  }, i*70);
});

// Glow pe butoane
document.querySelectorAll(".btn, .infoPill").forEach(el=>{
  el.addEventListener("mousemove",e=>{
    const r=el.getBoundingClientRect();
    const x=e.clientX-r.left;
    const y=e.clientY-r.top;

    el.style.background=
      `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,.15), rgba(255,255,255,.03) 40%)`;
  });

  el.addEventListener("mouseleave",()=>{
    el.style.background="";
  });
});

