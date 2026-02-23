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

// Aparitie la scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section, div, img, p").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});


//Pulsare la buton 
imgs.forEach(img => imgObserver.observe(img));

document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.08)";
        el.style.transition = "0.2s";
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
    });
});

