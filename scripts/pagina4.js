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


(function () {
  const TEXT_TRANS_Y = 18;        
  const IMG_TRANS_X = 120;         
  const STAGGER = 90;              
  const DURATION = 450;            
  const ROOT_MARGIN = '0px 0px -12% 0px'; 

  function setInitialStyles(container) {
    const textChildren = container.querySelectorAll('h1, h2, h3, p, li, ol, ul, .badge, .cardInner > *:not(.cardMedia)');
    textChildren.forEach(el => {
      if (el.dataset.revealInit) return;
      el.dataset.revealInit = '1';
      el.style.opacity = '0';
      el.style.transform = `translateY(${TEXT_TRANS_Y}px)`;
      el.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`;
      el.style.willChange = 'opacity, transform';
    });

    const imgs = container.querySelectorAll('img');
    imgs.forEach((img, idx) => {
      if (img.dataset.revealInit) return;
      img.dataset.revealInit = '1';
      img.style.opacity = '0';
      let dir = img.dataset.imgSide || ((idx % 2 === 0) ? 'right' : 'left');
      const offset = (dir === 'left') ? -IMG_TRANS_X : IMG_TRANS_X;
      img.style.transform = `translateX(${offset}px)`;
      img.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`;
      img.style.willChange = 'opacity, transform';
    });
  }

  // Animare: apare elementele cu stagger 
  function revealContainer(container) {
    const textChildren = Array.from(container.querySelectorAll('h1, h2, h3, p, li, ol, ul, .badge, .cardInner > *:not(.cardMedia)'))
      .filter(el => el.dataset.revealed !== '1');

    textChildren.forEach((el, i) => {
      const delay = i * STAGGER;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.dataset.revealed = '1';
      }, delay);
    });

    // Imagini 
    const imgs = Array.from(container.querySelectorAll('img')).filter(img => img.dataset.revealed !== '1');
    imgs.forEach((img, i) => {
      const delay = (textChildren.length * STAGGER) + (i * STAGGER / 1.2);
      setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'translateX(0)';
        img.dataset.revealed = '1';
      }, delay);
    });
  }

  
  function prepareAll() {
    const targets = document.querySelectorAll('.hero, .card, .sectionTitle, .listPanel, .badgeRow, .cardGrid, .heroMedia');
    targets.forEach(container => setInitialStyles(container));
  }

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealContainer(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: ROOT_MARGIN,
    threshold: 0.12
  });

  function observeAll() {
    const targets = document.querySelectorAll('.hero, .card, .sectionTitle, .listPanel, .badgeRow, .cardGrid, .heroMedia');
    targets.forEach(t => {
      if (t.dataset.observed) return;
      t.dataset.observed = '1';
      io.observe(t);
    });
  }

  // Imagine stanga dreapta
  function assignImageSides() {
    document.querySelectorAll('.cardGrid').forEach((grid, idx) => {
      const medias = grid.querySelectorAll('.cardMedia img');
      medias.forEach((img, i) => {
        const article = img.closest('.card');
        if (!article) return;
        const articleIndex = Array.from(article.parentElement.children).indexOf(article);
        const side = (articleIndex % 2 === 0) ? 'right' : 'left';
        img.dataset.imgSide = side;
      });
    });

    document.querySelectorAll('.heroMedia img').forEach(img => {
      if (!img.dataset.imgSide) img.dataset.imgSide = 'right';
    });

    document.querySelectorAll('.card:not(.cardGrid) .cardMedia img').forEach(img => {
      if (!img.dataset.imgSide) img.dataset.imgSide = 'right';
    });

    document.querySelectorAll('.listPanel img').forEach(img => {
      if (!img.dataset.imgSide) img.dataset.imgSide = 'left';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    assignImageSides();
    prepareAll();
    observeAll();

    window.addEventListener('load', () => {
      prepareAll();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        assignImageSides();
        prepareAll();
      }, 200);
    });
  });

})();

//Pulsare la buton
document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.08)";
        el.style.transition = "0.2s";
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
    });
});