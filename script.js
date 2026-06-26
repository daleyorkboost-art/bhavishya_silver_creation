// ════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════

const categoriesData = [
    {
        name: "Gold Jewelry",
        items: "8 items",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center"
    },
    {
        name: "Silver Jewelry",
        items: "12 items",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center"
    },
    {
        name: "Rakhi Collection",
        items: "6 items",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop&crop=center"
    },
    {
        name: "Coins & Bars",
        items: "4 items",
        image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=400&fit=crop&crop=center"
    },
    {
        name: "Pendants",
        items: "7 items",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center"
    },
    {
        name: "Branded Jewelry",
        items: "5 items",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center"
    },
];

// ─── Complete Products Data from WhatsApp Images ───
const allProductsData = [
    // ===== SILVER JEWELRY =====
    {
        id: 1,
        name: "Giya Giza Silver Ring",
        category: "Silver Jewelry",
        tag: "New",
        description: "Exclusive 925 silver ring from the Giya Giza collection. Elegant and timeless.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.38 AM (1).jpeg",
        featured: false,
        rating: 4.3
    },
    {
        id: 2,
        name: "Silver Ring with Blue Stone",
        category: "Silver Jewelry",
        tag: "Premium",
        description: "A silver ring with a blue stone in the center, presented in a white box with a clear lid. Labeled '40'.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.54 AM (1).jpeg",
        featured: false,
        rating: 4.7
    },
    {
        id: 3,
        name: "925 Silver Wild Elegance Ring",
        category: "Silver Jewelry",
        tag: "Bestseller",
        description: "Let your style speak wild elegance. Luxury in 925 silver. Power. Pride. Pure silver.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.57 AM (2).jpeg",
        featured: true,
        rating: 4.9
    },
    {
        id: 4,
        name: "TRUE SILVER 925 Sterling Chain",
        category: "Silver Jewelry",
        tag: "Hot",
        description: "TRUE SILVER 925 Sterling Silver. Premium quality and lasting shine.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.58 AM (1).jpeg",
        featured: false,
        rating: 4.5
    },
    {
        id: 5,
        name: "Bali Silver Earrings",
        category: "Silver Jewelry",
        tag: "Trending",
        description: "Classic Bali-style silver earrings with intricate craftsmanship.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.14 AM.jpeg",
        featured: false,
        rating: 4.4
    },

    // ===== GOLD JEWELRY =====
    {
        id: 6,
        name: "18KT Gold Elegance Ring",
        category: "Gold Jewelry",
        tag: "New",
        description: "Shine in every curve of 18 KT elegance — simple, stylish, stunning.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.57 AM (1).jpeg",
        featured: true,
        rating: 4.8
    },
    {
        id: 7,
        name: "18KT Gold Fossil Ring",
        category: "Gold Jewelry",
        tag: "Premium",
        description: "Crafted in pure 18KT gold ring fossil. A perfect keepsake for moments that matter.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.58 AM.jpeg",
        featured: true,
        rating: 4.9
    },
    {
        id: 8,
        name: "18KT Gold Redefined Ring",
        category: "Gold Jewelry",
        tag: "Bestseller",
        description: "Elegance redefined in 18 KT gold. Trust is our tradition.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.59 AM (1).jpeg",
        featured: false,
        rating: 4.7
    },
    {
        id: 9,
        name: "14KT Gold Daily Wear Ring",
        category: "Gold Jewelry",
        tag: "Hot",
        description: "Faith in style, crafted in 14 KT gold. Perfect for daily wear or special occasions.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.59 AM.jpeg",
        featured: false,
        rating: 4.5
    },
    {
        id: 10,
        name: "18KT Fossil Royal Crown Ring",
        category: "Gold Jewelry",
        tag: "Premium",
        description: "A masterpiece designed for a regal lifestyle in 18kt FOSSIL. Time now wears a royal crown on your finger.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.01 AM.jpeg",
        featured: true,
        rating: 4.9
    },

    // ===== RAKHI COLLECTION =====
    {
        id: 11,
        name: "Peppa Kids Rakhi",
        category: "Rakhi Collection",
        tag: "Kids",
        description: "PEPPA KIDS RAKHI — Exclusive 925 Silver Rakhi. राखी भाई-बहन के रिश्ते की अटूट डोर।",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.38 AM.jpeg",
        featured: true,
        rating: 5.0
    },
    {
        id: 12,
        name: "Peppa Kids Rakhi (Variant)",
        category: "Rakhi Collection",
        tag: "Kids",
        description: "PEPPA KIDS RAKHI — Exclusive 925 Silver Rakhi. राजी भाई-बहन के रिश्ते की अटूट ओर।",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.41 AM.jpeg",
        featured: false,
        rating: 4.9
    },
    {
        id: 13,
        name: "GIVYA Silver Rakhi",
        category: "Rakhi Collection",
        tag: "Premium",
        description: "GIVYA 925 silver Rakhi with elegant design and superior finish.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.40 AM (1).jpeg",
        featured: false,
        rating: 4.7
    },
    {
        id: 14,
        name: "GIVEA Silver Rakhi",
        category: "Rakhi Collection",
        tag: "New",
        description: "GIVEA 925 silver Rakhi, perfect for celebrating the bond of siblings.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.40 AM.jpeg",
        featured: false,
        rating: 4.6
    },
    {
        id: 15,
        name: "Sayma Exclusive Silver Rakhi",
        category: "Rakhi Collection",
        tag: "Bestseller",
        description: "Exclusive 925 Silver Rakhi from Sayma. Premium quality and intricate design.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.57 AM.jpeg",
        featured: true,
        rating: 4.8
    },
    {
        id: 16,
        name: "GIYA Silver Rakhi",
        category: "Rakhi Collection",
        tag: "Premium",
        description: "GIYA Rakhi in 925 Silver. ELLERY LIMITED — a symbol of love and tradition.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.54 AM.jpeg",
        featured: false,
        rating: 4.9
    },

    // ===== COINS & BARS =====
    {
        id: 17,
        name: "MMTC-PAMP 24K Gold Bar 50g",
        category: "Coins & Bars",
        tag: "Premium",
        description: "MMTC-PAMP Swiss Excellence. Made in India. 24K 999.9+ Purest Gold. LBMA GOOD DELIVERY REFINER.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.08 AM.jpeg",
        featured: true,
        rating: 5.0
    },
    {
        id: 18,
        name: "Manish Jewellers Gold Coin 64.4g",
        category: "Coins & Bars",
        tag: "Bestseller",
        description: "MANISH JEWELLERS 21D — 64.400 Gm of pure gold. Trust Is Our Tradition.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.10 AM.jpeg",
        featured: false,
        rating: 4.7
    },
    {
        id: 19,
        name: "Manish Jewellers Gold Coin 50.77g",
        category: "Coins & Bars",
        tag: "New",
        description: "MANISH JEWELLERS 21D — 50.770 Gm of premium gold. A symbol of wealth.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.31 AM.jpeg",
        featured: false,
        rating: 4.6
    },

    // ===== PENDANTS =====
    {
        id: 20,
        name: "Silver-Plated Shankh Pendant",
        category: "Pendants",
        tag: "New",
        description: "Invite positivity and peace with this finely detailed silver-plated shankh, a symbol of purity and sacred energy.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.03 AM (1).jpeg",
        featured: true,
        rating: 4.9
    },
    {
        id: 21,
        name: "Premium Silver Rashi Pendant",
        category: "Pendants",
        tag: "Premium",
        description: "Premium Silver Rashi 999 — a sacred pendant for zodiac protection and style.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.03 AM (2).jpeg",
        featured: true,
        rating: 4.8
    },
    {
        id: 22,
        name: "Gemstone Pendant STONE 6691",
        category: "Pendants",
        tag: "Hot",
        description: "STONE 6691 | MMT: 5.32D | GWT: 0.030 | BALL 188CT — a stunning gemstone pendant with intricate detailing.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.13 AM (1).jpeg",
        featured: false,
        rating: 4.7
    },

    // ===== BRANDED JEWELRY =====
    {
        id: 23,
        name: "GIVA GIVATREE Pendant",
        category: "Branded Jewelry",
        tag: "Bestseller",
        description: "GIVA GIVATREE — exclusive designer pendant crafted with 925 silver and modern aesthetics.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.42 AM.jpeg",
        featured: true,
        rating: 4.9
    },
    {
        id: 24,
        name: "GIYA Golden Silver Ring",
        category: "Branded Jewelry",
        tag: "Premium",
        description: "GIYA GOLDEN — a luxurious silver ring with a golden finish, perfect for festive wear.",
        image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.51 AM.jpeg",
        featured: false,
        rating: 4.6
    }
];

const spotlightData = [
    { name: "18KT Fossil Royal Crown Ring", tag: "Premium", emoji: "💍" },
    { name: "MMTC-PAMP 24K Gold Bar 50g", tag: "Bestseller", emoji: "🏅" },
    { name: "Peppa Kids Rakhi", tag: "Top Rated", emoji: "🎀" },
    { name: "Silver-Plated Shankh Pendant", tag: "New", emoji: "🐚" },
];

const testimonialsData = [
    {
        name: "Pooja Parikh",
        subtitle: "Darpana Meen Earrings (Set Of 2)",
        quote: "They are great quality and such a unique piece of jewellery; they fit my small ears perfectly but also look good on my mom's ears that are slightly bigger than mine.",
        stars: 5,
    },
    {
        name: "Kirti Surana",
        subtitle: "Basra Bride Earrings",
        quote: "What a beautiful pair of earrings. Every bride must have it. It is so worth it. Very very happy. The packaging is luxurious. It doesn't tarnish. I have ordered two more other jewels from this brand.",
        stars: 5,
    },
    {
        name: "Mimi",
        subtitle: "Basra Zainud Choker",
        quote: "Very pretty and classy necklace. The design is elegant, you can style it beautifully with both traditional outfits and fusion wear.",
        stars: 5,
    },
];

const collectionsData = [
    "Gold Collection", "Silver Collection", "Rakhi Special",
    "Coins & Bars", "Pendants", "Branded Jewelry",
    "Daily Wear", "Festive Collection"
];

// ─── Instagram Reel Videos ───
const reelUrls = [
    'assets/videos/insta1.mp4',
    'assets/videos/insta2.mp4',
    'assets/videos/insta3.mp4',
    'assets/videos/insta4.mp4',
    'assets/videos/insta5.mp4',
    'assets/videos/insta6.mp4',
    'assets/videos/insta7.mp4',
    'assets/videos/insta8.mp4',
];

// ─── Instagram profile URL ───
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/manish_jewellers_21d_faridabad';

// ─── WhatsApp Number (with country code for consistency) ───
const WHATSAPP_NUMBER = '+919540816060';

// ─── Flag to prevent re-render loops ───
let lastDeviceType = '';

// ════════════════════════════════════════════
// RENDER HELPERS
// ════════════════════════════════════════════

function renderStars(count) {
    let html = "";
    const fullStars = Math.floor(count);
    const halfStar = count % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            html += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && halfStar) {
            html += '<i class="fas fa-star-half-alt"></i>';
        } else {
            html += '<i class="far fa-star" style="color:rgba(255,255,255,0.3);"></i>';
        }
    }
    return html;
}

function renderStarsPlain(count) {
    let html = "";
    for (let i = 0; i < 5; i++) {
        html += i < Math.round(count) ? "★" : '<span class="text-[#ddd]">☆</span>';
    }
    return html;
}

function getTagClass(tag) {
    if (!tag) return "";
    const map = { 
        new: "new", 
        hot: "hot", 
        sale: "sale", 
        premium: "premium", 
        bestseller: "bestseller", 
        trending: "trending"
    };
    return map[tag.toLowerCase()] || "";
}

// ─── E-COMMERCE PRODUCT CARD (View → WhatsApp) ───
function renderProductCardEcom(p) {
    const tagClass = getTagClass(p.tag);
    const tagDisplay = p.tag || "";
    const rating = p.rating || 0;
    // Encode product name for WhatsApp message
    const waMessage = encodeURIComponent(`I'm interested in ${p.name} from Bhavishya Silver Creation`);
    return `
        <div class="product-card-ecom">
            <div class="product-image-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/fbf7f0/dcb36d?text=${encodeURIComponent(p.name.substring(0, 20))}'">
                ${tagDisplay ? `<span class="product-badge ${tagClass}">${tagDisplay}</span>` : ''}
                <div class="product-rating">
                    <i class="fas fa-star"></i> ${rating}
                </div>
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-category">${p.category}</div>
                <button class="view-btn" onclick="window.open('https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}', '_blank')">
                    <i class="fas fa-eye"></i> View
                </button>
            </div>
        </div>
    `;
}

// ─── Category Card ───
function renderCategoryCard(cat) {
    return `
        <div class="category-card" onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})">
            <div class="category-image-wrap">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full aspect-square object-cover rounded-full" onerror="this.src='https://placehold.co/200x200/fbf7f0/dcb36d?text=${encodeURIComponent(cat.name)}'">
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-brand-muted mt-3 block">${cat.items}</span>
            <h3 class="font-heading text-2xl text-brand-dark mt-1 mb-3">${cat.name}</h3>
            <span class="text-sm font-bold text-brand-dark hover:text-brand-gold transition">Explore <i class="fas fa-arrow-right ml-1"></i></span>
        </div>
    `;
}

function renderSpotlightItem(item) {
    return `
        <div class="spotlight-item">
            <div class="sp-img"><i class="fas fa-gem"></i></div>
            <h4 class="text-sm font-medium text-brand-dark mt-1.5 leading-tight">${item.name}</h4>
            <span class="text-brand-muted text-xs font-normal">${item.tag}</span>
        </div>
    `;
}

function renderTestimonial(t) {
    return `
        <div class="testimonial-card">
            <div class="text-brand-gold text-sm mb-2">${renderStarsPlain(t.stars)}</div>
            <div class="font-bold text-brand-dark text-base">${t.name}</div>
            <div class="text-brand-muted text-sm mb-2">${t.subtitle}</div>
            <p class="text-gray-600 text-sm leading-relaxed italic">${t.quote}</p>
        </div>
    `;
}


// ════════════════════════════════════════════
// REELS RENDERER — with Play/Pause button on mobile
// ════════════════════════════════════════════

function renderReels() {
    const grid = document.getElementById('reelsGrid');
    if (!grid) return;

    const isMobile = window.innerWidth < 768;

    // Avoid unnecessary re-renders if device type hasn't changed
    const currentDevice = isMobile ? 'mobile' : 'desktop';
    if (lastDeviceType === currentDevice && grid.children.length > 0) {
        // If already rendered and device type same, skip re-render
        return;
    }
    lastDeviceType = currentDevice;

    grid.innerHTML = reelUrls.map((url, index) => `
        <div class="reel-item" data-index="${index}">
            <div class="reel-placeholder">
                <i class="fab fa-instagram"></i>
                <span>Reel ${index + 1}</span>
                <span>${isMobile ? 'Tap to play' : 'Hover to play'}</span>
            </div>
            <video 
                src="${url}"
                muted
                playsinline
                preload="metadata"
                loading="lazy"
            ></video>
            ${isMobile ? `
                <button class="reel-play-btn" aria-label="Play/Pause video">
                    <i class="fas fa-play"></i>
                </button>
            ` : ''}
            <a href="${INSTAGRAM_PROFILE_URL}" target="_blank" class="reel-link-overlay" aria-label="View on Instagram"></a>
        </div>
    `).join('');

    const reelItems = document.querySelectorAll('.reel-item');
    reelItems.forEach((item) => {
        const video = item.querySelector('video');
        const placeholder = item.querySelector('.reel-placeholder');
        const playBtn = item.querySelector('.reel-play-btn');
        if (!video) return;

        video.style.opacity = '0';

        video.addEventListener('loadedmetadata', function() {
            video.style.opacity = '1';
        });

        video.addEventListener('error', function() {
            video.style.opacity = '1';
            if (placeholder) {
                placeholder.innerHTML = `
                    <i class="fas fa-exclamation-triangle" style="color:#e74c3c;"></i>
                    <span>Video unavailable</span>
                `;
            }
        });

        if (isMobile) {
            // Mobile: Play/Pause button toggle
            if (playBtn) {
                playBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (video.paused) {
                        video.play().catch(function(e) {
                            // If play fails, show a message or retry
                            console.warn('Video play failed:', e);
                        });
                        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                        if (placeholder) placeholder.style.opacity = '0';
                        item.classList.add('loaded');
                    } else {
                        video.pause();
                        playBtn.innerHTML = '<i class="fas fa-play"></i>';
                    }
                });
            }

            // Click on video area to toggle (but not on the Instagram overlay)
            item.addEventListener('click', function(e) {
                if (e.target.closest('.reel-link-overlay')) return;
                if (playBtn) {
                    playBtn.click();
                }
            });

            video.addEventListener('ended', function() {
                if (playBtn) {
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });

        } else {
            // Desktop: Hover play/pause
            item.addEventListener('mouseenter', function() {
                video.style.opacity = '1';
                if (placeholder) placeholder.style.opacity = '0';
                item.classList.add('loaded');
                video.play().catch(function(e) {
                    console.warn('Video play failed:', e);
                });
            });

            item.addEventListener('mouseleave', function() {
                if (!video.paused) {
                    video.pause();
                }
            });
        }

        // Instagram overlay: pause video
        const overlay = item.querySelector('.reel-link-overlay');
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                if (!video.paused) {
                    video.pause();
                }
                if (isMobile && playBtn) {
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
        }

        document.addEventListener('visibilitychange', function() {
            if (document.hidden && !video.paused) {
                video.pause();
                if (isMobile && playBtn) {
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            }
        });
    });
}


// ════════════════════════════════════════════
// HERO VIDEO — AUTOPLAY (muted for mobile)
// ════════════════════════════════════════════

function initHeroVideo() {
    const heroVideo = document.getElementById('heroVideo');
    if (!heroVideo) return;

    // Ensure video is muted for autoplay on mobile
    heroVideo.muted = true;

    heroVideo.play().catch(function(error) {
        console.log('Autoplay blocked. Click to play.');
        const wrapper = document.getElementById('heroVideoWrapper');
        if (wrapper) {
            wrapper.addEventListener('click', function() {
                heroVideo.play().catch(function(e) {
                    console.warn('Play failed:', e);
                });
            });
        }
    });

    heroVideo.addEventListener('ended', function() {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(function() {});
    });

    document.addEventListener('visibilitychange', function() {
        if (document.hidden && !heroVideo.paused) {
            heroVideo.pause();
        } else if (!document.hidden && heroVideo.paused) {
            heroVideo.play().catch(function() {});
        }
    });
}


// ════════════════════════════════════════════
// DOM READY
// ════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", function() {

    // ── Init AOS with fallback ──
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 40,
        });
    } else {
        // Fallback: manually add animation classes
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('animate-fade-up');
        });
    }

    // ── Hero Video ──
    initHeroVideo();

    // ── Categories ──
    const catGrid = document.getElementById("categoriesGrid");
    if (catGrid) catGrid.innerHTML = categoriesData.map(renderCategoryCard).join("");

    // ── Collection (featured products) ──
    const featured = allProductsData.filter(p => p.featured);
    const collGrid = document.getElementById("collectionProductsGrid");
    if (collGrid) {
        collGrid.innerHTML = featured.map(renderProductCardEcom).join("");
    }

    // ── Spotlight ──
    const spGrid = document.getElementById("perfectDiamondGrid");
    if (spGrid) spGrid.innerHTML = spotlightData.map(renderSpotlightItem).join("");

    // ── Testimonials ──
    const tGrid = document.getElementById("testimonialsGrid");
    if (tGrid) tGrid.innerHTML = testimonialsData.map(renderTestimonial).join("");

    // ── Collections ──
    const colGrid = document.getElementById("collectionGrid");
    if (colGrid) {
        const collectionIcons = ['💎', '✨', '🌟', '💫', '👑', '🎀', '👜', '🔮'];
        colGrid.innerHTML = collectionsData.map((name, index) => `
            <div class="collection-item" onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})">
                <span class="collection-icon">${collectionIcons[index % collectionIcons.length]}</span>
                ${name}
            </div>
        `).join("");
    }

    // ── Reels ──
    renderReels();

    // ── PRODUCTS - All Products Grid ──
    const allGrid = document.getElementById("allProductsGrid");
    if (allGrid) {
        allGrid.innerHTML = allProductsData.map(renderProductCardEcom).join("");
        const countEl = document.getElementById("productCount");
        if (countEl) {
            countEl.textContent = `${allProductsData.length} products`;
        }
    }

    // ── Offer Filter Chips (by category) ──
    const uniqueCategories = ['All', ...new Set(allProductsData.map(p => p.category))];
    const filterContainer = document.getElementById('offerFilters');
    if (filterContainer) {
        filterContainer.innerHTML = uniqueCategories.map(cat =>
            `<button class="offer-chip ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
        ).join('');
    }

    const offerChips = document.querySelectorAll('.offer-chip');
    offerChips.forEach(chip => {
        chip.addEventListener('click', function() {
            offerChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.cat;
            const grid = document.getElementById("allProductsGrid");
            if (!grid) return;
            
            let filtered = allProductsData;
            if (filter !== 'All') {
                filtered = allProductsData.filter(p => p.category === filter);
            }
            
            grid.innerHTML = filtered.map(renderProductCardEcom).join("");
            
            const countEl = document.getElementById("productCount");
            if (countEl) {
                countEl.textContent = `${filtered.length} products`;
            }
        });
    });

    // ── Contact Form ──
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const message = document.getElementById("contactMessage").value.trim();
            
            // Validation
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            const waText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
            window.open(waUrl, '_blank');
            // Optionally reset the form after a moment
            setTimeout(() => contactForm.reset(), 500);
        });
    }

    // ── Subscribe Form (consistent event binding) ──
    const subscribeForm = document.getElementById("subscribeForm");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value.trim()) {
                alert("Subscribed! You'll receive updates shortly.");
                this.reset();
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    // ── Compact Hamburger Menu ──
    const hamburger = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileOverlay");

    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.remove('hidden');
        // Use requestAnimationFrame to avoid flicker
        requestAnimationFrame(() => {
            overlay.classList.add('open');
        });
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('active');
        setTimeout(() => {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }, 400);
    }

    if (hamburger && mobileMenu && overlay) {
        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // ── Populate mobile categories ──
    const mobileCats = document.getElementById("mobileCategoriesCompact");
    if (mobileCats) {
        const catNames = categoriesData.map(c => c.name);
        mobileCats.innerHTML = catNames.map(name =>
            `<a href="#products" class="mobile-cat-chip">${name}</a>`
        ).join("");
    }

    // ── Header scroll effect ──
    const header = document.getElementById("mainHeader");
    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 30) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    // ── Nav active state on scroll ──
    const sections = ["home", "about", "collection", "products", "instagram-shorts", "contact"];
    const navLinks = document.querySelectorAll(".mobile-nav-compact");

    window.addEventListener("scroll", function() {
        let current = "";
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.offsetTop - 120;
                const bottom = top + el.offsetHeight;
                const scroll = window.pageYOffset || document.documentElement.scrollTop;
                if (scroll >= top && scroll < bottom) current = id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // ── Diamond Carousel ──
    const prevBtn = document.getElementById("diamondPrev");
    const nextBtn = document.getElementById("diamondNext");
    const diamondGrid = document.getElementById("perfectDiamondGrid");

    if (prevBtn && nextBtn && diamondGrid) {
        let currentIndex = 0;

        const updateCarousel = () => {
            const rotated = [];
            for (let i = 0; i < spotlightData.length; i++) {
                rotated.push(spotlightData[(currentIndex + i) % spotlightData.length]);
            }
            diamondGrid.innerHTML = rotated.map(renderSpotlightItem).join("");
        };

        prevBtn.addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + spotlightData.length) % spotlightData.length;
            updateCarousel();
        });

        nextBtn.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % spotlightData.length;
            updateCarousel();
        });
    }

    // ── Logo fallback (for multiple logo variants) ──
    document.querySelectorAll('img[src^="assets/logo"]').forEach(img => {
        img.addEventListener("error", function() {
            this.style.display = "none";
            const parent = this.parentElement;
            if (parent && !parent.querySelector('.logo-fallback')) {
                const fallback = document.createElement("span");
                fallback.className = "font-heading text-2xl font-bold text-brand-dark logo-fallback";
                fallback.textContent = "Bhavishya Silver";
                parent.appendChild(fallback);
            }
        });
    });

    // ── Re-render reels on resize (only when device type changes) ──
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            renderReels();
        }, 300);
    });

});