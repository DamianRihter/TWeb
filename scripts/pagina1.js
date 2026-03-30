const productsData = {
  iphone: {
    title: "Modele iPhone",
    subtitle: "Modelele disponibile din categoria iPhone.",
    items: [
      { name: "iPhone 12", price: "15 999 MDL", specs: ["Ecran 6.1” Super Retina XDR", "Chip A14 Bionic", "Cameră duală 12 MP", "Conectivitate 5G"] },
      { name: "iPhone 12 mini", price: "14 999 MDL", specs: ["Ecran 5.4” Super Retina XDR", "Chip A14 Bionic", "Cameră duală 12 MP", "Design compact și ușor"] },
      { name: "iPhone 12 Pro", price: "18 999 MDL", specs: ["Ecran 6.1” Super Retina XDR", "Chip A14 Bionic", "Sistem Pro de camere", "Scanner LiDAR"] },
      { name: "iPhone 12 Pro Max", price: "20 499 MDL", specs: ["Ecran 6.7” Super Retina XDR", "Chip A14 Bionic", "Zoom optic îmbunătățit", "Autonomie extinsă"] },
      { name: "iPhone 13", price: "17 499 MDL", specs: ["Ecran 6.1” Super Retina XDR", "Chip A15 Bionic", "Cameră duală avansată", "Mod Cinematic"] },
      { name: "iPhone 13 mini", price: "16 799 MDL", specs: ["Ecran 5.4” Super Retina XDR", "Chip A15 Bionic", "Cameră duală 12 MP", "Autonomie optimizată"] },
      { name: "iPhone 13 Pro", price: "21 999 MDL", specs: ["Ecran 6.1” ProMotion 120Hz", "Chip A15 Bionic", "Sistem Pro de camere", "Construcție premium"] },
      { name: "iPhone 13 Pro Max", price: "23 499 MDL", specs: ["Ecran 6.7” ProMotion 120Hz", "Chip A15 Bionic", "Cameră Pro triplă", "Autonomie excelentă"] },
      { name: "iPhone 14", price: "19 499 MDL", specs: ["Ecran 6.1” Super Retina XDR", "Chip A15 Bionic", "Detecție accident", "Cameră duală 12 MP"] },
      { name: "iPhone 14 Plus", price: "21 299 MDL", specs: ["Ecran 6.7” Super Retina XDR", "Chip A15 Bionic", "Autonomie mare", "Cameră duală 12 MP"] },
      { name: "iPhone 14 Pro", price: "25 499 MDL", specs: ["Ecran 6.1” Always-On", "Chip A16 Bionic", "Dynamic Island", "Cameră principală 48 MP"] },
      { name: "iPhone 14 Pro Max", price: "27 999 MDL", specs: ["Ecran 6.7” Always-On", "Chip A16 Bionic", "Dynamic Island", "Cameră 48 MP"] },
      { name: "iPhone 15", price: "21 999 MDL", specs: ["Ecran 6.1” Super Retina XDR", "Chip A16 Bionic", "Port USB-C", "Cameră 48 MP"] },
      { name: "iPhone 15 Plus", price: "23 799 MDL", specs: ["Ecran 6.7” Super Retina XDR", "Chip A16 Bionic", "Autonomie extinsă", "Port USB-C"] },
      { name: "iPhone 15 Pro", price: "28 999 MDL", specs: ["Ecran 6.1” ProMotion", "Chip A17 Pro", "Carcasă din titan", "Sistem Pro de camere"] },
      { name: "iPhone 15 Pro Max", price: "31 499 MDL", specs: ["Ecran 6.7” ProMotion", "Chip A17 Pro", "Titan", "Zoom optic avansat"] }
    ]
  },

  ipad: {
    title: "Modele iPad",
    subtitle: "Modelele disponibile din categoria iPad.",
    items: [
      { name: "iPad (10th generation)", price: "11 999 MDL", specs: ["Ecran 10.9” Liquid Retina", "Chip A14 Bionic", "Port USB-C", "Ideal pentru studiu și multimedia"] },
      { name: "iPad mini (6th generation)", price: "13 499 MDL", specs: ["Ecran 8.3” Liquid Retina", "Chip A15 Bionic", "Compatibil Apple Pencil", "Format compact"] },
      { name: "iPad Air (5th generation)", price: "16 999 MDL", specs: ["Ecran 10.9” Liquid Retina", "Chip M1", "Suport Magic Keyboard", "Potrivit pentru multitasking"] },
      { name: "iPad Pro 11\"", price: "24 999 MDL", specs: ["Ecran 11” de înaltă calitate", "Performanță profesională", "Face ID", "Ideal pentru productivitate"] },
      { name: "iPad Pro 12.9\"", price: "29 999 MDL", specs: ["Ecran 12.9” generos", "Performanță de nivel Pro", "Compatibil Apple Pencil", "Excelent pentru design"] }
    ]
  },

  macbook: {
    title: "Modele MacBook",
    subtitle: "Modelele disponibile din categoria MacBook.",
    items: [
      { name: "MacBook Air M1", price: "18 999 MDL", specs: ["Chip Apple M1", "Autonomie excelentă", "Design subțire și ușor", "Ideal pentru studenți"] },
      { name: "MacBook Air M2", price: "23 499 MDL", specs: ["Chip Apple M2", "Ecran Liquid Retina", "Design modern", "Foarte bun pentru lucru zilnic"] },
      { name: "MacBook Air M3", price: "27 999 MDL", specs: ["Chip Apple M3", "Eficiență energetică excelentă", "Performanță rapidă", "Ideal pentru multitasking"] },
      { name: "MacBook Pro 14\"", price: "36 999 MDL", specs: ["Ecran 14” ProMotion", "Performanță profesională", "Porturi multiple", "Potrivit pentru creație și editare"] },
      { name: "MacBook Pro 16\"", price: "43 999 MDL", specs: ["Ecran 16” mare", "Putere foarte ridicată", "Autonomie excelentă", "Ideal pentru proiecte complexe"] }
    ]
  },

  watch: {
    title: "Modele Apple Watch",
    subtitle: "Modelele disponibile din categoria Apple Watch.",
    items: [
      { name: "Apple Watch Series 7", price: "9 999 MDL", specs: ["Ecran mare și luminos", "Monitorizare sănătate", "Notificări inteligente", "Ideal pentru uz zilnic"] },
      { name: "Apple Watch Series 8", price: "11 499 MDL", specs: ["Senzori avansați", "Monitorizare temperatură", "Fitness tracking", "Integrare cu iPhone"] },
      { name: "Apple Watch Series 9", price: "13 299 MDL", specs: ["Performanță îmbunătățită", "Ecran foarte luminos", "Monitorizare sănătate", "Control prin gesturi"] },
      { name: "Apple Watch SE (2nd generation)", price: "8 499 MDL", specs: ["Model accesibil", "Funcții esențiale", "Fitness și notificări", "Potrivit pentru majoritatea utilizatorilor"] },
      { name: "Apple Watch Ultra", price: "19 999 MDL", specs: ["Carcasă rezistentă", "GPS avansat", "Autonomie mare", "Ideal pentru activități outdoor"] },
      { name: "Apple Watch Ultra 2", price: "22 499 MDL", specs: ["Rezistență ridicată", "Ecran foarte luminos", "Performanță premium", "Potrivit pentru sport și aventură"] }
    ]
  }
};

const categoryCards = document.querySelectorAll(".category-card");
const productsContainer = document.getElementById("productsContainer");
const catalogTitle = document.getElementById("catalogTitle");
const catalogSubtitle = document.getElementById("catalogSubtitle");

const cartBtn = document.getElementById("cartBtn");
const cartDropdown = document.getElementById("cartDropdown");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

function renderProducts(categoryKey) {
  const category = productsData[categoryKey];
  if (!category) return;

  catalogTitle.textContent = category.title;
  catalogSubtitle.textContent = category.subtitle;

  productsContainer.innerHTML = category.items.map(product => `
    <article class="product-card">
      <h3>${product.name}</h3>
      <ul class="product-specs">
        ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
      </ul>
      <div class="product-bottom">
        <span class="product-price">${product.price}</span>
        <button class="add-cart-btn" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', '${product.price}')">
          Adaugă în coș
        </button>
      </div>
    </article>
  `).join("");
}

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    categoryCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");
    renderProducts(card.dataset.category);

    document.querySelector(".catalog-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function parsePrice(priceText) {
  return Number(priceText.replace(/[^\d]/g, ""));
}

function formatPrice(value) {
  return value.toLocaleString("ro-RO") + " MDL";
}

function addToCart(name, price) {
  const cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  renderCart();
  alert(`Produsul "${name}" a fost adăugat în coș.`);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = getCart();

  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">Coșul este gol.</p>`;
    cartTotal.textContent = "0 MDL";
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map((item, index) => {
    total += parsePrice(item.price);

    return `
      <div class="cart-item">
        <div class="cart-item-top">
          <div>
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">${item.price}</p>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${index})">Șterge</button>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = formatPrice(total);
}

if (cartBtn && cartDropdown) {
  cartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!cartDropdown.contains(e.target) && !cartBtn.contains(e.target)) {
      cartDropdown.classList.remove("open");
    }
  });
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

renderCart();