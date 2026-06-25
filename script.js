// ===========================
// GLOBAL COMPONENTS (Header & Footer)
// ===========================

function loadGlobalComponents() {
  const headerHTML = `
    <header class="bg-n-green text-white sticky top-0 z-50 shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo - bigger -->
        <a href="index.html" class="flex items-center gap-3 group">
          <img src="assets/logo.png" alt="Bhavishya Silver Creation" class="h-16 w-auto object-contain transform group-hover:scale-105 transition duration-300">
        </a>
        <!-- Desktop Nav - bigger font -->
        <nav class="hidden md:flex space-x-10 text-base uppercase tracking-wider font-bold" id="desktop-nav">
          <a href="index.html" class="nav-link transition duration-300" data-page="index.html">Home</a>
          <a href="#about" class="nav-link transition duration-300" data-page="#about">About</a>
          <a href="#collection" class="nav-link transition duration-300" data-page="#collection">Collection</a>
          <a href="products.html" class="nav-link transition duration-300" data-page="products.html">Shop</a>
          <a href="contact.html" class="nav-link transition duration-300" data-page="contact.html">Contact</a>
        </nav>
        <!-- Social Icons -->
        <div class="hidden md:flex items-center space-x-6 text-xl">
          <a href="#" class="hover:text-n-gold transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="hover:text-n-gold transition"><i class="fab fa-instagram"></i></a>
          <a href="https://wa.me/919540816060" class="hover:text-n-gold transition"><i class="fab fa-whatsapp"></i></a>
        </div>
        <!-- Hamburger -->
        <button id="hamburger" class="md:hidden text-3xl focus:outline-none hover:text-n-gold transition">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div id="mobileMenu" class="md:hidden absolute top-full left-0 w-full bg-n-green border-t border-n-text/30 hidden flex-col px-4 py-6 space-y-4 text-center shadow-xl">
        <a href="index.html" class="uppercase tracking-widest text-base font-bold nav-link" data-page="index.html">Home</a>
        <a href="#about" class="uppercase tracking-widest text-base font-bold nav-link" data-page="#about">About</a>
        <a href="#collection" class="uppercase tracking-widest text-base font-bold nav-link" data-page="#collection">Collection</a>
        <a href="products.html" class="uppercase tracking-widest text-base font-bold nav-link" data-page="products.html">Shop</a>
        <a href="contact.html" class="uppercase tracking-widest text-base font-bold nav-link" data-page="contact.html">Contact</a>
        <div class="flex justify-center gap-6 pt-4 mt-2 border-t border-white/10 text-2xl">
          <a href="#" class="hover:text-n-gold transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="hover:text-n-gold transition"><i class="fab fa-instagram"></i></a>
          <a href="https://wa.me/919540816060" class="hover:text-n-gold transition"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="bg-n-green text-white pt-20 pb-10 border-t border-white/10 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div class="space-y-6">
            <img src="assets/logo.png" alt="Bhavishya Silver Creation" class="h-16 w-auto object-contain">
            <p class="text-n-muted text-sm leading-relaxed">The Wholesale Destination for Premium Gold & Silver. Crafting timeless jewellery with love and precision since inception.</p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-n-gold hover:text-n-green transition"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-n-gold hover:text-n-green transition"><i class="fab fa-instagram"></i></a>
              <a href="https://wa.me/919540816060" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-n-gold hover:text-n-green transition"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h4 class="font-heading text-xl mb-6 text-n-gold">Quick Links</h4>
            <ul class="space-y-3 text-sm text-n-muted">
              <li><a href="index.html" class="hover:text-white transition">Home</a></li>
              <li><a href="#about" class="hover:text-white transition">About Us</a></li>
              <li><a href="#collection" class="hover:text-white transition">Collection</a></li>
              <li><a href="products.html" class="hover:text-white transition">Shop All</a></li>
              <li><a href="contact.html" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading text-xl mb-6 text-n-gold">Useful Links</h4>
            <ul class="space-y-3 text-sm text-n-muted">
              <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" class="hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#" class="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading text-xl mb-6 text-n-gold">Subscribe</h4>
            <p class="text-sm text-n-muted mb-4">Get 10% off your first order and weekly exclusive updates.</p>
            <form class="space-y-3" onsubmit="event.preventDefault(); alert('Subscribed!');">
              <input type="email" placeholder="Your Email Address" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-n-gold text-white text-sm transition">
              <button type="submit" class="w-full bg-n-gold hover:bg-n-gold-hover text-n-green py-3 rounded text-sm font-bold uppercase tracking-wider transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-n-muted">&copy; 2026 Bhavishya Silver Creation. All Rights Reserved.</p>
          <div class="flex space-x-4 text-2xl text-n-muted">
            <i class="fab fa-cc-visa hover:text-white transition cursor-pointer"></i>
            <i class="fab fa-cc-mastercard hover:text-white transition cursor-pointer"></i>
            <i class="fab fa-cc-paypal hover:text-white transition cursor-pointer"></i>
          </div>
        </div>
      </div>
    </footer>
  `;

  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  // Active link highlighting (supports anchor links)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentHash = window.location.hash || '';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('text-n-gold', 'border-b-2', 'border-n-gold', 'pb-1');
    link.classList.add('hover:text-n-gold', 'text-white');
    const href = link.getAttribute('href');
    // For anchor links, compare hash; for full pages compare path
    if (href.startsWith('#')) {
      if (href === currentHash) {
        link.classList.add('text-n-gold', 'border-b-2', 'border-n-gold', 'pb-1');
        link.classList.remove('hover:text-n-gold', 'text-white');
      }
    } else {
      if (href === currentPath) {
        link.classList.add('text-n-gold', 'border-b-2', 'border-n-gold', 'pb-1');
        link.classList.remove('hover:text-n-gold', 'text-white');
      }
    }
  });

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }
}

// ===========================
// DATA
// ===========================
const categories = [
  { icon: "fa-gem", name: "Diamond", items: "24 items" },
  { icon: "fa-ring", name: "Engagement", items: "18 items" },
  { icon: "fa-crown", name: "Bridal", items: "12 items" },
  { icon: "fa-star", name: "Special", items: "9 items" },
];

const allProducts = [
  { id: 1, name: "Emerald Halo Ring", category: "Ring", price: 2999, oldPrice: 3999, tag: "NEW", emoji: "💍", featured: true },
  { id: 2, name: "Diamond Stud Earrings", category: "Earrings", price: 1899, oldPrice: 2499, tag: "HOT", emoji: "✨", featured: true },
  { id: 3, name: "Solitaire Pendant", category: "Pendant", price: 1599, oldPrice: 2099, tag: "BEST", emoji: "💎", featured: false },
  { id: 4, name: "Gold Chain Necklace", category: "Necklace", price: 2499, oldPrice: 3299, tag: "SALE", emoji: "📿", featured: false },
  { id: 5, name: "Pearl Bracelet", category: "Bracelet", price: 999, oldPrice: null, tag: null, emoji: "🔮", featured: false },
  { id: 6, name: "Sapphire Cocktail Ring", category: "Ring", price: 2199, oldPrice: 2799, tag: "NEW", emoji: "💍", featured: false },
  { id: 7, name: "Diamond Tennis Bracelet", category: "Bracelet", price: 3999, oldPrice: 4999, tag: "LUXE", emoji: "✨", featured: true },
  { id: 8, name: "Pearl Drop Earrings", category: "Earrings", price: 1299, oldPrice: null, tag: null, emoji: "🌸", featured: false },
];

// ===========================
// Renderers
// ===========================
function renderCategoryCard(cat) {
  return `
    <div class="bg-n-card p-8 rounded-xl text-center transform hover:-translate-y-2 hover:shadow-xl transition duration-300 border border-transparent hover:border-n-gold group cursor-pointer" onclick="window.location.href='#collection'">
      <div class="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-n-gold text-2xl mb-4 group-hover:bg-n-gold group-hover:text-white transition duration-300 shadow-md">
        <i class="fas ${cat.icon}"></i>
      </div>
      <span class="text-xs text-n-muted uppercase tracking-widest font-bold">${cat.items}</span>
      <h3 class="font-heading text-2xl text-n-green mt-1 mb-4">${cat.name}</h3>
      <span class="text-sm font-bold text-n-green group-hover:text-n-gold transition">Explore <i class="fas fa-arrow-right ml-1"></i></span>
    </div>
  `;
}

function renderProductCard(p) {
  const tagHtml = p.tag ? `<span class="bg-white text-n-green text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-wider">${p.tag}</span>` : "";
  const oldPriceHtml = p.oldPrice ? `<span class="line-through text-n-muted text-sm ml-2">$${p.oldPrice}</span>` : "";
  return `
    <div class="bg-n-card rounded-xl p-5 flex flex-col relative transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-transparent hover:border-n-gold group">
      <div class="flex justify-between items-start mb-4 relative z-10">
        <div>
          <span class="text-[10px] text-n-muted uppercase tracking-widest font-bold">${p.category}</span>
          <h3 class="font-heading text-xl text-n-green mt-1 leading-tight">${p.name}</h3>
        </div>
        <div class="flex flex-col gap-1 items-end">${tagHtml}</div>
      </div>
      <div class="flex-grow flex items-center justify-center py-8">
        <span class="text-6xl group-hover:scale-110 transition duration-500 drop-shadow-md">${p.emoji}</span>
      </div>
      <div class="mt-auto pt-4 border-t border-n-gold/20">
        <div class="mb-4">
          <span class="font-bold text-xl text-n-green">$${p.price}</span>
          ${oldPriceHtml}
        </div>
        <button onclick="alert('Added ${p.name} to cart!')" class="w-full bg-n-green hover:bg-black text-white py-3 rounded text-sm font-bold uppercase tracking-wider transition duration-300 flex justify-center items-center gap-2">
          More Details
        </button>
      </div>
    </div>
  `;
}

// ===========================
// Page Initialization
// ===========================

loadGlobalComponents();

document.addEventListener("DOMContentLoaded", function () {
  // Init AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
  });

  // Homepage: Categories
  const catGrid = document.getElementById("categoriesGrid");
  if (catGrid) catGrid.innerHTML = categories.map(renderCategoryCard).join("");

  // Homepage: Collection (show 4 products)
  const collectionGrid = document.getElementById("collectionProductsGrid");
  if (collectionGrid) collectionGrid.innerHTML = allProducts.slice(0, 4).map(renderProductCard).join("");

  // Homepage: Diamond carousel (show 4 products)
  const diamondGrid = document.getElementById("perfectDiamondGrid");
  if (diamondGrid) diamondGrid.innerHTML = allProducts.slice(0, 4).map(renderProductCard).join("");

  // Products page logic (if on products.html)
  const allProductsGrid = document.getElementById("allProductsGrid");
  if (allProductsGrid) {
    let currentFilter = "All";
    const filterContainer = document.getElementById("categoryFilters");
    const searchInput = document.getElementById("searchInput");
    const resetBtn = document.getElementById("resetFilters");

    const renderShop = (data) => {
      if (data.length === 0) {
        allProductsGrid.innerHTML = `<div class="col-span-full py-12 text-center text-n-muted">No products found.</div>`;
      } else {
        allProductsGrid.innerHTML = data.map(renderProductCard).join("");
      }
    };

    if (filterContainer) {
      const cats = ["All", ...new Set(allProducts.map(p => p.category))];
      filterContainer.innerHTML = cats.map(cat =>
        `<button class="filter-chip px-5 py-2 rounded-full border border-n-green text-sm font-semibold transition ${cat === 'All' ? 'bg-n-green text-white' : 'bg-transparent text-n-green hover:bg-n-green hover:text-white'}" data-cat="${cat}">${cat}</button>`
      ).join("");

      filterContainer.addEventListener("click", (e) => {
        if (e.target.tagName === 'BUTTON') {
          document.querySelectorAll(".filter-chip").forEach(btn => {
            btn.classList.remove('bg-n-green', 'text-white');
            btn.classList.add('bg-transparent', 'text-n-green');
          });
          e.target.classList.remove('bg-transparent', 'text-n-green');
          e.target.classList.add('bg-n-green', 'text-white');
          currentFilter = e.target.dataset.cat;
          applyFilters();
        }
      });
    }

    const applyFilters = () => {
      const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
      const filtered = allProducts.filter(p => {
        const matchesCat = currentFilter === "All" || p.category === currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        return matchesCat && matchesSearch;
      });
      renderShop(filtered);
    };

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        document.querySelector('.filter-chip[data-cat="All"]')?.click();
      });
    }
    renderShop(allProducts);
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully! We will contact you soon.");
      contactForm.reset();
    });
  }
});