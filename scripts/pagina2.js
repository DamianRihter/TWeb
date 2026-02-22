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


// Slide lateral imagini 
const style=document.createElement("style");
style.textContent=`
.slide-init{
  opacity:0;
  transform:translateX(var(--dir,-90px)) scale(.98);
  filter:blur(8px);
}
.slide-show{
  opacity:1;
  transform:none;
  filter:blur(0);
  transition:
    transform .85s cubic-bezier(.22,.9,.22,1),
    opacity .8s ease,
    filter .9s ease;
}
`;
document.head.appendChild(style);


const imgs=[
  ...document.querySelectorAll(".serviceMedia img"),
  ...document.querySelectorAll(".heroMedia img")
];

imgs.forEach((img,i)=>{
  img.style.setProperty("--dir", i%2 ? "90px" : "-90px");
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

imgs.forEach(img=>observer.observe(img));

// 3D inclinare carduri
(() => {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  Array.from(document.querySelectorAll('.service')).forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    let raf = null;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(900px) rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) scale(1.01)`;
      });
    }, { passive: true });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; if (raf) cancelAnimationFrame(raf); });
  });
})();