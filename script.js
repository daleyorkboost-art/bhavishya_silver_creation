// ===========================
// DATA
// ===========================
const categoriesData = [
  {
    id: "bracelet",
    name: "Bracelet",
    icon: "fa-ring",
    description: "Elegant designs",
    badge: "New",
  },
  {
    id: "earrings",
    name: "Earrings",
    icon: "fa-gem",
    description: "Stunning sparkle",
    badge: "New",
  },
  {
    id: "couple-rings",
    name: "Couple Rings",
    icon: "fa-heart",
    description: "Forever together",
    badge: null,
  },
  {
    id: "kundan",
    name: "Kundan Necklace",
    icon: "fa-crown",
    description: "Royal heritage",
    badge: "Sale",
  },
  {
    id: "diamond-rings",
    name: "Diamond Rings",
    icon: "fa-star",
    description: "Timeless beauty",
    badge: "New",
  },
  {
    id: "diamond-necklace",
    name: "Diamond Necklace",
    icon: "fa-snowflake",
    description: "Luxury defined",
    badge: "New",
  },
];

const productsData = [
  {
    id: 1,
    name: "Elegant Diamond Bracelet",
    category: "Bracelet",
    desc: "A timeless piece crafted with brilliant diamonds and fine silver.",
    badge: "New",
    sale: true,
    image: null,
  },
  {
    id: 2,
    name: "Sparkling Diamond Earrings",
    category: "Earrings",
    desc: "Stunning drop earrings that catch the light from every angle.",
    badge: "New",
    sale: true,
    image: null,
  },
  {
    id: 3,
    name: "Luxury Diamond Ring",
    category: "Diamond Rings",
    desc: "A stunning solitaire ring with a brilliant-cut diamond.",
    badge: "New",
    sale: true,
    image: null,
  },
  {
    id: 4,
    name: "Royal Diamond Necklace",
    category: "Diamond Necklace",
    desc: "An exquisite necklace with a cascading arrangement of diamonds.",
    badge: "New",
    sale: true,
    image: null,
  },
  {
    id: 5,
    name: "Gold Plated Bracelet",
    category: "Bracelet",
    desc: "Elegant gold-plated bracelet with intricate floral details.",
    badge: "Sale",
    sale: true,
    image: null,
  },
  {
    id: 6,
    name: "Pearl Drop Earrings",
    category: "Earrings",
    desc: "Classic pearl drop earrings with a modern twist.",
    badge: "New",
    sale: false,
    image: null,
  },
  {
    id: 7,
    name: "Infinity Couple Ring",
    category: "Couple Rings",
    desc: "Matching rings with infinity symbol, perfect for couples.",
    badge: null,
    sale: false,
    image: null,
  },
  {
    id: 8,
    name: "Kundan Choker Set",
    category: "Kundan Necklace",
    desc: "Traditional kundan choker with ruby and emerald accents.",
    badge: "Sale",
    sale: true,
    image: null,
  },
  {
    id: 9,
    name: "Solitare Diamond Ring",
    category: "Diamond Rings",
    desc: "Classic solitaire diamond ring with a platinum band.",
    badge: "New",
    sale: false,
    image: null,
  },
  {
    id: 10,
    name: "Emerald Diamond Necklace",
    category: "Diamond Necklace",
    desc: "Stunning emerald and diamond necklace for special occasions.",
    badge: "New",
    sale: true,
    image: null,
  },
  {
    id: 11,
    name: "Leather Wrap Bracelet",
    category: "Bracelet",
    desc: "Bohemian leather wrap bracelet with silver charms.",
    badge: null,
    sale: false,
    image: null,
  },
  {
    id: 12,
    name: "Hoop Diamond Earrings",
    category: "Earrings",
    desc: "Modern hoop earrings accented with small diamonds.",
    badge: "New",
    sale: false,
    image: null,
  },
  {
    id: 13,
    name: "Rose Gold Couple Ring",
    category: "Couple Rings",
    desc: "Romantic rose gold rings with engraved initials.",
    badge: "New",
    sale: false,
    image: null,
  },
  {
    id: 14,
    name: "Antique Kundan Necklace",
    category: "Kundan Necklace",
    desc: "Vintage-style kundan necklace with uncut diamonds.",
    badge: "Sale",
    sale: true,
    image: null,
  },
  {
    id: 15,
    name: "Three-Stone Diamond Ring",
    category: "Diamond Rings",
    desc: "Elegant three-stone diamond ring symbolizing past, present, future.",
    badge: null,
    sale: false,
    image: null,
  },
];

const HOMEPAGE_PRODUCT_COUNT = 8;

// ===========================
// HELPERS
// ===========================
function getIconHtml(iconName) {
  return `<i class="fas ${iconName}"></i>`;
}

function getBadgeHtml(badge, sale) {
  let html = "";
  if (badge) {
    const cls = badge.toLowerCase() === "sale" ? "badge-sale" : "badge-new";
    html += `<span class="badge ${cls}">${badge}</span>`;
  }
  if (sale && badge !== "Sale") {
    html += ` <span class="badge badge-sale">Sale</span>`;
  }
  return html;
}

// ===========================
// RENDER CATEGORIES
// ===========================
function renderCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = categoriesData
    .map(
      (cat) => `
        <div class="category-card animate-on-scroll">
            <div class="icon">${getIconHtml(cat.icon)}</div>
            <h4>${cat.name}</h4>
            <p>${cat.description}</p>
            ${cat.badge ? `<span class="badge ${cat.badge === "Sale" ? "badge-sale" : "badge-new"}">${cat.badge}</span>` : ""}
        </div>
      `,
    )
    .join("");
}

// ===========================
// RENDER PRODUCTS
// ===========================
function renderProducts(products, containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? products.slice(0, limit) : products;
  if (list.length === 0) {
    container.innerHTML = `<div class="no-products-msg">✨ No products found.</div>`;
    return;
  }
  container.innerHTML = list
    .map(
      (p) => `
        <div class="product-card animate-on-scroll">
            <div class="image">
                ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<i class="fas fa-gem"></i>`}
                ${getBadgeHtml(p.badge, p.sale)}
            </div>
            <div class="info">
                <div class="category-label">${p.category}</div>
                <h4>${p.name}</h4>
                <p class="desc">${p.desc}</p>
                <button class="btn-add" data-id="${p.id}">Add To Cart</button>
            </div>
        </div>
      `,
    )
    .join("");

  container.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("✨ Item added to your cart!");
    });
  });
}

// ===========================
// PRODUCTS PAGE (filter + search)
// ===========================
function initProductsPage() {
  const grid = document.getElementById("allProductsGrid");
  if (!grid) return;

  let filteredProducts = [...productsData];

  function renderFiltered() {
    renderProducts(filteredProducts, "allProductsGrid");
  }

  const filterContainer = document.getElementById("categoryFilters");
  if (filterContainer) {
    const allCats = ["All", ...new Set(productsData.map((p) => p.category))];
    filterContainer.innerHTML = allCats
      .map(
        (cat) =>
          `<span class="filter-chip ${cat === "All" ? "active" : ""}" data-category="${cat}">${cat}</span>`,
      )
      .join("");

    filterContainer.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", function () {
        filterContainer
          .querySelectorAll(".filter-chip")
          .forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        const cat = this.dataset.category;
        const searchVal =
          document.getElementById("searchInput")?.value.toLowerCase().trim() ||
          "";
        filteredProducts = productsData.filter((p) => {
          const matchCat = cat === "All" || p.category === cat;
          const matchSearch =
            p.name.toLowerCase().includes(searchVal) ||
            p.desc.toLowerCase().includes(searchVal);
          return matchCat && matchSearch;
        });
        renderFiltered();
      });
    });
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const val = this.value.toLowerCase().trim();
      const activeCat =
        document.querySelector(".filter-chip.active")?.dataset.category ||
        "All";
      filteredProducts = productsData.filter((p) => {
        const matchCat = activeCat === "All" || p.category === activeCat;
        const matchSearch =
          p.name.toLowerCase().includes(val) ||
          p.desc.toLowerCase().includes(val);
        return matchCat && matchSearch;
      });
      renderFiltered();
    });
  }

  const resetBtn = document.getElementById("resetFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-chip")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelector('.filter-chip[data-category="All"]')
        ?.classList.add("active");
      if (searchInput) searchInput.value = "";
      filteredProducts = [...productsData];
      renderFiltered();
    });
  }

  renderFiltered();
}

// ===========================
// TRANSPARENT HEADER ON SCROLL
// ===========================
function initTransparentHeader() {
  const header = document.querySelector(".main-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ===========================
// HAMBURGER MENU
// ===========================
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-header")) {
      navLinks.classList.remove("open");
    }
  });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -30px 0px" },
  );
  elements.forEach((el) => observer.observe(el));
}

// ===========================
// NEWSLETTER
// ===========================
function initNewsletter() {
  const btn = document.querySelector(".newsletter .btn");
  if (!btn) return;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const input = this.closest(".newsletter").querySelector("input");
    if (input && input.value.trim() !== "") {
      alert("🎉 Thanks for subscribing! Check your email for 10% off.");
      input.value = "";
    } else {
      alert("Please enter your email address.");
    }
  });
}

// ===========================
// BACK TO TOP
// ===========================
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===========================
// SMOOTH SCROLL
// ===========================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ===========================
// ACTIVE NAV ON SCROLL
// ===========================
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}

// ===========================
// CONTACT FORM
// ===========================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    const btn = form.querySelector(".btn");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;
    setTimeout(() => {
      alert(
        "✅ Thank you for reaching out! We'll get back to you within 24 hours.",
      );
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1500);
  });
}

// ===========================
// INITIALIZE EVERYTHING
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  // Render homepage dynamic sections
  renderCategories("categoriesGrid");
  renderProducts(productsData, "productsGrid", HOMEPAGE_PRODUCT_COUNT);

  // Products page (if present)
  if (document.getElementById("allProductsGrid")) {
    initProductsPage();
  }

  // UI interactions
  initTransparentHeader();
  initHamburger();
  initScrollAnimations();
  initNewsletter();
  initBackToTop();
  initSmoothScroll();
  initActiveNav();
  initContactForm();

  console.log("✨ Bhavishya Silver Creation — website loaded.");
});
