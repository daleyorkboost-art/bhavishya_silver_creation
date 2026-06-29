// ════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════

const allProductsData = [
    // ===== GOLD JEWELRY =====
    { id: 6, name: "18KT Gold Elegance Ring", category: "Gold Jewelry", tag: "New", description: "Shine in every curve of 18 KT elegance.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.57 AM (1).jpeg", featured: true, rating: 4.8 },
    { id: 7, name: "18KT Gold Fossil Ring", category: "Gold Jewelry", tag: "Premium", description: "Crafted in pure 18KT gold ring fossil.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.58 AM.jpeg", featured: true, rating: 4.9 },
    { id: 8, name: "18KT Gold Redefined Ring", category: "Gold Jewelry", tag: "Bestseller", description: "Elegance redefined in 18 KT gold.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.59 AM (1).jpeg", featured: false, rating: 4.7 },
    { id: 9, name: "14KT Gold Daily Wear Ring", category: "Gold Jewelry", tag: "Hot", description: "Faith in style, crafted in 14 KT gold.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.59 AM.jpeg", featured: false, rating: 4.5 },
    { id: 10, name: "18KT Fossil Royal Crown Ring", category: "Gold Jewelry", tag: "Premium", description: "A masterpiece designed for a regal lifestyle.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.01 AM.jpeg", featured: true, rating: 4.9 },
    { id: 27, name: "Gold Temple Necklace Set", category: "Gold Jewelry", tag: "Bestseller", description: "Elaborate antique finish gold temple necklace set.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.49 AM (2).jpeg", featured: true, rating: 5.0 },
    { id: 29, name: "Antique Gold Bridal Choker Set", category: "Gold Jewelry", tag: "Premium", description: "Exquisite heavy antique gold choker set.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.49 AM.jpeg", featured: true, rating: 4.9 },
    { id: 30, name: "Gold Enamel Floral Choker Set", category: "Gold Jewelry", tag: "Trending", description: "Contemporary gold choker necklace featuring enamel work.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.48 AM (2).jpeg", featured: true, rating: 4.8 },
    { id: 32, name: "Antique Gold Statement Rings", category: "Gold Jewelry", tag: "Bestseller", description: "Gorgeous antique finish gold statement rings.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.48 AM.jpeg", featured: false, rating: 4.8 },
    { id: 33, name: "Kundan & Enamel Gold Long Necklace", category: "Gold Jewelry", tag: "Premium", description: "Majestic long gold necklace highlighted by kundan-style settings.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.47 AM (1).jpeg", featured: true, rating: 4.9 },
    { id: 34, name: "Peacock Enamel Gold Long Necklace", category: "Gold Jewelry", tag: "Premium", description: "Elegant long gold necklace decorated with traditional coin motifs.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.47 AM.jpeg", featured: true, rating: 4.9 },
    { id: 50, name: "Heavy Kundan Bridal Choker", category: "Gold Jewelry", tag: "Premium", description: "Breathtaking 22KT gold choker heavily studded with polki.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 54, name: "Men's 22KT Gold Franco Chain", category: "Gold Jewelry", tag: "Hot", description: "Solid 22KT yellow gold Franco link chain.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 55, name: "Pearl & Gold Filigree Choker", category: "Gold Jewelry", tag: "Trending", description: "Delicate gold filigree choker beautifully accented with pearls.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: true, rating: 4.7 },
    { id: 56, name: "Navratna Gold Ring", category: "Gold Jewelry", tag: "Classic", description: "Traditional 18KT gold ring with nine sacred gemstones.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.9 },
    { id: 57, name: "22KT Gold Rope Chain", category: "Gold Jewelry", tag: "Bestseller", description: "Classic 22KT rope chain for men and women. 20 inches.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 58, name: "Gold Layered Necklace", category: "Gold Jewelry", tag: "New", description: "Modern three-layer 18KT gold necklace.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 59, name: "Polki Gold Choker", category: "Gold Jewelry", tag: "Premium", description: "Handcrafted polki diamond choker in 22KT gold.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 60, name: "Gold Floral Haram", category: "Gold Jewelry", tag: "Wedding", description: "Traditional South Indian gold Haram with floral patterns.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 61, name: "18KT Gold Eternity Ring", category: "Gold Jewelry", tag: "Classic", description: "Sleek 18KT gold eternity band.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 124, name: "22KT Handcrafted Gold Bangles", category: "Gold Jewelry", tag: "Premium", description: "Intricately handcrafted 22KT gold bangles.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 125, name: "Gold Meenakari Jhumkas", category: "Gold Jewelry", tag: "Trending", description: "Exquisite gold jhumkas with colorful meenakari work.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 126, name: "Men's 18KT Gold Signet Ring", category: "Gold Jewelry", tag: "Classic", description: "Heavy solid 18KT gold signet ring for men.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 127, name: "Gold Matar Mala Necklace", category: "Gold Jewelry", tag: "Bestseller", description: "Traditional 22KT gold matar mala.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.6 },
    { id: 128, name: "14KT Rose Gold Leaf Pendant", category: "Gold Jewelry", tag: "New", description: "Minimalist rose gold pendant in a leaf motif.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 129, name: "22KT Gold Thushi Necklace", category: "Gold Jewelry", tag: "Wedding", description: "Authentic Maharashtrian gold thushi necklace.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 130, name: "Gold and Pearl Maang Tikka", category: "Gold Jewelry", tag: "Bridal", description: "Bridal 22KT gold maang tikka with fresh water pearls.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 131, name: "Textured 18KT Gold Cuff", category: "Gold Jewelry", tag: "Hot", description: "Modern textured wide gold cuff bracelet.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 4.7 },
    { id: 132, name: "Solid 24K Gold Investment Ring", category: "Gold Jewelry", tag: "Premium", description: "Pure 99.9% 24K gold band.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.9 },
    { id: 133, name: "Gold Coin Charm Bracelet", category: "Gold Jewelry", tag: "Trending", description: "Fun and jingly 18KT gold charm bracelet.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: false, rating: 4.6 },

    // ===== SILVER JEWELRY =====
    { id: 1, name: "Giya Giza Silver Ring", category: "Silver Jewelry", tag: "New", description: "Exclusive 925 silver ring from the Giya Giza collection.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.38 AM (1).jpeg", featured: false, rating: 4.3 },
    { id: 2, name: "Silver Ring with Blue Stone", category: "Silver Jewelry", tag: "Premium", description: "Silver ring with a blue stone in the center.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.54 AM (1).jpeg", featured: false, rating: 4.7 },
    { id: 3, name: "925 Silver Wild Elegance Ring", category: "Silver Jewelry", tag: "Bestseller", description: "Let your style speak wild elegance.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.57 AM (2).jpeg", featured: true, rating: 4.9 },
    { id: 4, name: "TRUE SILVER 925 Sterling Chain", category: "Silver Jewelry", tag: "Hot", description: "Premium quality and lasting shine.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.58 AM (1).jpeg", featured: false, rating: 4.5 },
    { id: 5, name: "Bali Silver Earrings", category: "Silver Jewelry", tag: "Trending", description: "Classic Bali-style silver earrings.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.14 AM.jpeg", featured: false, rating: 4.4 },
    { id: 26, name: "Silver Evil Eye Bracelets", category: "Silver Jewelry", tag: "Trending", description: "Silver bracelets adorned with traditional evil eye beads.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.50 AM.jpeg", featured: false, rating: 4.7 },
    { id: 62, name: "925 Silver Payal (Anklet)", category: "Silver Jewelry", tag: "Classic", description: "Traditional heavy 925 silver anklets with tiny bells.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 63, name: "Silver Toe Rings Set", category: "Silver Jewelry", tag: "Bestseller", description: "Set of two adjustable 925 silver toe rings (bichiya).", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 64, name: "Oxidized Silver Choker", category: "Silver Jewelry", tag: "Boho", description: "Bohemian oxidized silver choker necklace with ghungroos.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 65, name: "Men's Silver Curb Chain", category: "Silver Jewelry", tag: "Hot", description: "Thick 925 sterling silver curb chain for men.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 66, name: "Silver Filigree Bangle", category: "Silver Jewelry", tag: "Premium", description: "Handcrafted 925 silver bangle with delicate filigree work.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 67, name: "Silver Infinity Bracelet", category: "Silver Jewelry", tag: "New", description: "Minimalist silver bracelet featuring the infinity symbol.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: false, rating: 4.4 },
    { id: 68, name: "Antique Silver Jhumkas", category: "Silver Jewelry", tag: "Trending", description: "Large oxidized silver jhumkas with peacock motifs.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 69, name: "Silver Name Necklace", category: "Silver Jewelry", tag: "Custom", description: "Customizable 925 sterling silver nameplate necklace.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.9 },
    { id: 70, name: "Silver Cufflinks Set", category: "Silver Jewelry", tag: "Men", description: "Classic 925 silver cufflinks for formal wear.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 134, name: "Oxidized Silver Hasli", category: "Silver Jewelry", tag: "Boho", description: "Traditional Rajasthani hasli necklace in 925 silver.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 135, name: "Sterling Silver Tennis Bracelet", category: "Silver Jewelry", tag: "Premium", description: "Silver bracelet with AAA grade cubic zirconia.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 136, name: "Silver Lotus Ring", category: "Silver Jewelry", tag: "New", description: "Intricate lotus design ring in oxidized silver.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 137, name: "Silver Hoop Earrings Medium", category: "Silver Jewelry", tag: "Daily Wear", description: "Classic smooth silver hoop earrings.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 138, name: "Silver and Turquoise Pendant", category: "Silver Jewelry", tag: "Trending", description: "Natural turquoise stone set in a 925 silver pendant.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 139, name: "Engraved Silver Kada", category: "Silver Jewelry", tag: "Men", description: "Heavy silver kada with custom engraving option.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 140, name: "Silver Threader Earrings", category: "Silver Jewelry", tag: "Modern", description: "Sleek and minimalist silver threader earrings.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 141, name: "925 Silver Box Chain", category: "Silver Jewelry", tag: "Bestseller", description: "Versatile 18-inch silver box chain.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 142, name: "Marcasite Silver Brooch", category: "Silver Jewelry", tag: "Vintage", description: "Vintage-style silver brooch adorned with marcasite.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 143, name: "Layered Silver Anklet", category: "Silver Jewelry", tag: "Trending", description: "Double-layered 925 sterling silver anklet.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },

    // ===== DIAMOND JEWELRY =====
    { id: 35, name: "Solitaire Engagement Ring", category: "Diamond Jewelry", tag: "Premium", description: "1-carat round brilliant cut solitaire diamond.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 36, name: "Classic Diamond Studs", category: "Diamond Jewelry", tag: "Bestseller", description: "Timeless 0.5-carat diamond stud earrings.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 37, name: "Diamond Tennis Bracelet", category: "Diamond Jewelry", tag: "Premium", description: "Diamonds totaling 3 carats, secured in 18KT white gold.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 38, name: "Rose Gold Diamond Choker", category: "Diamond Jewelry", tag: "New", description: "Avant-garde 18KT rose gold choker with diamonds.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 71, name: "Diamond Drop Earrings", category: "Diamond Jewelry", tag: "Trending", description: "Elegant diamond tear-drop earrings in white gold.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 72, name: "Diamond Halo Ring", category: "Diamond Jewelry", tag: "Premium", description: "Stunning diamond halo ring with a princess-cut center.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 73, name: "Infinity Diamond Bracelet", category: "Diamond Jewelry", tag: "Gift", description: "Delicate diamond infinity bracelet.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 74, name: "Diamond Pendant Necklace", category: "Diamond Jewelry", tag: "Bestseller", description: "Single solitaire diamond pendant on a thin gold chain.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 75, name: "Three-Stone Diamond Ring", category: "Diamond Jewelry", tag: "Anniversary", description: "Symbolic past, present, and future three-stone ring.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 76, name: "Diamond Hoop Earrings", category: "Diamond Jewelry", tag: "Classic", description: "Inside-out diamond hoop earrings in 18KT gold.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 144, name: "Diamond Cluster Ring", category: "Diamond Jewelry", tag: "New", description: "Brilliant cluster of diamonds set in a floral pattern.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 145, name: "Diamond Mang Tika", category: "Diamond Jewelry", tag: "Bridal", description: "Dazzling diamond mang tika for your special day.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 146, name: "Pave Diamond Bangle", category: "Diamond Jewelry", tag: "Luxury", description: "18KT white gold bangle fully paved with diamonds.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 147, name: "Diamond Cross Necklace", category: "Diamond Jewelry", tag: "Classic", description: "Faith elegantly expressed with brilliant cut diamonds.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 148, name: "Men's Diamond Band", category: "Diamond Jewelry", tag: "Wedding", description: "Sleek matte finish band with channel-set diamonds.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 149, name: "Diamond Chandelier Earrings", category: "Diamond Jewelry", tag: "Premium", description: "Dramatic diamond chandelier earrings for evening wear.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 150, name: "Rose Gold Diamond Bracelet", category: "Diamond Jewelry", tag: "Hot", description: "Interlocking loops of rose gold and diamonds.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 151, name: "Emerald Cut Diamond Ring", category: "Diamond Jewelry", tag: "Premium", description: "2-carat emerald cut center diamond with side baguettes.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 152, name: "Diamond Initial Pendant", category: "Diamond Jewelry", tag: "Custom", description: "Sparkling diamond letter pendant.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 153, name: "Vintage Diamond Locket", category: "Diamond Jewelry", tag: "Classic", description: "Antique-inspired gold locket with diamond starburst.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.8 },

    // ===== PLATINUM JEWELRY =====
    { id: 39, name: "Platinum Love Band - Men", category: "Platinum Jewelry", tag: "Premium", description: "PT950 solid platinum men's wedding band.", image: "https://images.unsplash.com/photo-1610633464529-61f22e8dbf28?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 40, name: "Platinum Love Band - Women", category: "Platinum Jewelry", tag: "Premium", description: "PT950 platinum women's wedding band with diamonds.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 41, name: "Platinum Minimalist Chain", category: "Platinum Jewelry", tag: "Bestseller", description: "Sleek and strong PT950 platinum chain.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 77, name: "Platinum Diamond Bracelet", category: "Platinum Jewelry", tag: "Luxury", description: "Heavy platinum bracelet encrusted with diamonds.", image: "https://images.unsplash.com/photo-1610633464529-61f22e8dbf28?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 78, name: "Platinum Engraved Ring", category: "Platinum Jewelry", tag: "Classic", description: "Simple platinum ring with custom engraving option.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 154, name: "Platinum Solitaire Ring", category: "Platinum Jewelry", tag: "Premium", description: "Elegant PT950 ring with a round diamond.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 155, name: "Platinum Infinity Band", category: "Platinum Jewelry", tag: "Anniversary", description: "Continuous infinity design in pure platinum.", image: "https://images.unsplash.com/photo-1610633464529-61f22e8dbf28?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 156, name: "Men's Platinum Curb Bracelet", category: "Platinum Jewelry", tag: "Men", description: "Sturdy and masculine platinum curb link bracelet.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 157, name: "Platinum Drop Pendant", category: "Platinum Jewelry", tag: "Elegant", description: "Minimalist platinum drop pendant.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 158, name: "Platinum Hoop Earrings", category: "Platinum Jewelry", tag: "Daily Wear", description: "Sleek and resilient platinum hoop earrings.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 159, name: "Platinum & Rose Gold Ring", category: "Platinum Jewelry", tag: "New", description: "Two-tone band featuring PT950 and 18KT rose gold.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 160, name: "Platinum Cufflinks", category: "Platinum Jewelry", tag: "Gift", description: "Executive platinum cufflinks with a brushed finish.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 161, name: "Platinum Eternity Band", category: "Platinum Jewelry", tag: "Luxury", description: "Full circle of diamonds set in PT950 platinum.", image: "https://images.unsplash.com/photo-1610633464529-61f22e8dbf28?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 162, name: "Platinum Chain Link Necklace", category: "Platinum Jewelry", tag: "Trending", description: "Modern chunky platinum link necklace.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 163, name: "Platinum Geometric Studs", category: "Platinum Jewelry", tag: "Modern", description: "Contemporary geometric ear studs in platinum.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.6 },

    // ===== MANGALSUTRAS =====
    { id: 42, name: "Traditional Gold Mangalsutra", category: "Mangalsutras", tag: "Classic", description: "22KT gold traditional wati-style mangalsutra.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 43, name: "Modern Diamond Mangalsutra", category: "Mangalsutras", tag: "New", description: "Contemporary 18KT rose gold mangalsutra.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 79, name: "Short Daily Wear Mangalsutra", category: "Mangalsutras", tag: "Bestseller", description: "Lightweight short black bead chain with small gold pendant.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 80, name: "Long Temple Mangalsutra", category: "Mangalsutras", tag: "Wedding", description: "Long 24-inch traditional South Indian mangalsutra.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 81, name: "Floral Diamond Mangalsutra", category: "Mangalsutras", tag: "Premium", description: "Exquisite floral diamond pendant mangalsutra.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 164, name: "Minimalist Gold Mangalsutra", category: "Mangalsutras", tag: "Daily Wear", description: "Very delicate and thin black bead chain with a gold bar.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 165, name: "Kundan Pendant Mangalsutra", category: "Mangalsutras", tag: "Festive", description: "Heavy Kundan pendant attached to a multi-string black bead chain.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 166, name: "Eternity Diamond Mangalsutra", category: "Mangalsutras", tag: "Premium", description: "Double interlocking diamond circles mangalsutra.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 167, name: "Bracelet Style Mangalsutra", category: "Mangalsutras", tag: "Trending", description: "Modern wrist mangalsutra with diamond accents.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 168, name: "Silver Mangalsutra", category: "Mangalsutras", tag: "Affordable", description: "925 silver mangalsutra for sensitive skin.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: false, rating: 4.5 },

    // ===== BANGLES & BRACELETS =====
    { id: 31, name: "Premium Gold Bracelets", category: "Bangles & Bracelets", tag: "Hot", description: "Curated collection of premium gold link bracelets.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.48 AM (1).jpeg", featured: false, rating: 4.6 },
    { id: 44, name: "22KT Antique Bangles (Set of 4)", category: "Bangles & Bracelets", tag: "Premium", description: "Heavy 22KT antique gold bangles with filigree work.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 45, name: "Polki & Emerald Gold Kada", category: "Bangles & Bracelets", tag: "Bestseller", description: "Bold statement kada featuring uncut polki diamonds.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.9 },
    { id: 46, name: "Oxidized Silver Cuff Bracelet", category: "Bangles & Bracelets", tag: "Trending", description: "Tribal-inspired 925 oxidized silver wide cuff.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 82, name: "Bridal Chura Set", category: "Bangles & Bracelets", tag: "Wedding", description: "Traditional red and gold bridal chura set.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 83, name: "Gold Plated Thread Bangles", category: "Bangles & Bracelets", tag: "Festive", description: "Silk thread bangles embellished with gold motifs.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.4 },
    { id: 84, name: "Diamond Pave Bangle", category: "Bangles & Bracelets", tag: "Luxury", description: "Sleek bangle encrusted with pave-set diamonds.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 85, name: "Men's Gold Kada", category: "Bangles & Bracelets", tag: "Men", description: "Solid 22KT gold Sikh kada for men.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 86, name: "Rose Gold Charm Bracelet", category: "Bangles & Bracelets", tag: "Gift", description: "18KT rose gold bracelet with heart and star charms.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 87, name: "Ruby Studded Bangle Set", category: "Bangles & Bracelets", tag: "Classic", description: "Pair of gold bangles fully studded with genuine rubies.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 169, name: "Glass Bangles Set", category: "Bangles & Bracelets", tag: "Traditional", description: "Vibrant multi-colored glass bangles.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 170, name: "Tennis Diamond Bracelet", category: "Bangles & Bracelets", tag: "Luxury", description: "In-line diamond tennis bracelet in white gold.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 171, name: "Adjustable Baby Bangles", category: "Bangles & Bracelets", tag: "Kids", description: "Smooth 22KT gold adjustable bangles for babies.", image: "https://images.unsplash.com/photo-1515562141207-7a8efc1619a9?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 172, name: "Kundan Bangle Set", category: "Bangles & Bracelets", tag: "Bridal", description: "Thick bridal Kundan and Meenakari bangles.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.7 },
    { id: 173, name: "Beaded Silver Bracelet", category: "Bangles & Bracelets", tag: "Casual", description: "Elastic bracelet with pure silver beads.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },

    // ===== EARRINGS & NOSE PINS =====
    { id: 47, name: "18KT Gold Daily Wear Jhumkas", category: "Earrings & Nose Pins", tag: "Classic", description: "Lightweight 18KT gold mini jhumkas.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 48, name: "Silver Chandbali Earrings", category: "Earrings & Nose Pins", tag: "Bestseller", description: "Gorgeous 925 silver oversized chandbalis.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 49, name: "Diamond Floral Nose Pin", category: "Earrings & Nose Pins", tag: "Hot", description: "7-stone diamond floral cluster nose pin.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 88, name: "Gold Nath (Nose Ring)", category: "Earrings & Nose Pins", tag: "Bridal", description: "Traditional Maharashtrian gold nath with pearls.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 89, name: "Single Diamond Nose Stud", category: "Earrings & Nose Pins", tag: "Classic", description: "0.10 carat diamond nose stud in 18KT gold.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 90, name: "Kundan Drop Earrings", category: "Earrings & Nose Pins", tag: "Festive", description: "Heavy kundan and pearl drop earrings.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: true, rating: 4.7 },
    { id: 91, name: "Gold Hoop Earrings", category: "Earrings & Nose Pins", tag: "Daily Wear", description: "Plain 22KT gold medium-sized hoop earrings.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 92, name: "Emerald Stud Earrings", category: "Earrings & Nose Pins", tag: "Premium", description: "Square cut emerald studs surrounded by diamonds.", image: "https://images.unsplash.com/photo-1615486171448-4fdcb5282b3a?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 93, name: "Oxidized Silver Nose Ring", category: "Earrings & Nose Pins", tag: "Boho", description: "Tribal style clip-on oxidized silver nose ring.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 94, name: "Sui Dhaga Gold Earrings", category: "Earrings & Nose Pins", tag: "Trending", description: "Elegant sui dhaga (thread style) long gold earrings.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 174, name: "Polki Chandbalis", category: "Earrings & Nose Pins", tag: "Bridal", description: "Exquisite polki diamond and pearl chandbalis.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 175, name: "Gold Nose Wire (Non-Pierced)", category: "Earrings & Nose Pins", tag: "Utility", description: "Clip-on gold nose ring wire for non-pierced noses.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 176, name: "Platinum Diamond Studs", category: "Earrings & Nose Pins", tag: "Luxury", description: "0.25 carat diamonds set in pure platinum studs.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 177, name: "Temple Motif Gold Jhumkas", category: "Earrings & Nose Pins", tag: "Classic", description: "Traditional South Indian temple jhumkas.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 178, name: "Silver Oxidized Studs", category: "Earrings & Nose Pins", tag: "Daily Wear", description: "Small, lightweight oxidized silver studs.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.5 },

    // ===== RAKHI COLLECTION =====
    { id: 11, name: "Peppa Kids Rakhi", category: "Rakhi Collection", tag: "Kids", description: "PEPPA KIDS RAKHI — Exclusive 925 Silver.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.38 AM.jpeg", featured: true, rating: 5.0 },
    { id: 12, name: "Peppa Kids Rakhi (Variant)", category: "Rakhi Collection", tag: "Kids", description: "PEPPA KIDS RAKHI — Variant design.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.41 AM.jpeg", featured: false, rating: 4.9 },
    { id: 13, name: "GIVYA Silver Rakhi", category: "Rakhi Collection", tag: "Premium", description: "GIVYA 925 silver Rakhi with elegant design.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.40 AM (1).jpeg", featured: false, rating: 4.7 },
    { id: 14, name: "GIVEA Silver Rakhi", category: "Rakhi Collection", tag: "New", description: "GIVEA 925 silver Rakhi for siblings.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.40 AM.jpeg", featured: false, rating: 4.6 },
    { id: 15, name: "Sayma Exclusive Silver Rakhi", category: "Rakhi Collection", tag: "Bestseller", description: "Exclusive 925 Silver Rakhi from Sayma.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.57 AM.jpeg", featured: true, rating: 4.8 },
    { id: 16, name: "GIYA Silver Rakhi", category: "Rakhi Collection", tag: "Premium", description: "GIYA Rakhi in 925 Silver.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.54 AM.jpeg", featured: false, rating: 4.9 },
    { id: 95, name: "Pure 24K Gold Coin Rakhi", category: "Rakhi Collection", tag: "Luxury", description: "Rakhi featuring a 1-gram 24K pure gold center coin.", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 96, name: "Bhabhi Lumba Rakhi", category: "Rakhi Collection", tag: "Trending", description: "Designer Kundan Lumba Rakhi for sister-in-law.", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 179, name: "Om Silver Rakhi", category: "Rakhi Collection", tag: "Religious", description: "Rakhi with an auspicious Om symbol in 925 silver.", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 180, name: "Rudraksha Rakhi Thread", category: "Rakhi Collection", tag: "Traditional", description: "Simple red thread rakhi adorned with a real rudraksha bead.", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop", featured: false, rating: 4.6 },

    // ===== COINS & BARS =====
    { id: 17, name: "MMTC-PAMP 24K Gold Bar 50g", category: "Coins & Bars", tag: "Premium", description: "MMTC-PAMP Swiss Excellence 50g.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.08 AM.jpeg", featured: true, rating: 5.0 },
    { id: 18, name: "Manish Jewellers Gold Coin 64.4g", category: "Coins & Bars", tag: "Bestseller", description: "MANISH JEWELLERS 21D — 64.400 Gm.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.10 AM.jpeg", featured: false, rating: 4.7 },
    { id: 19, name: "Manish Jewellers Gold Coin 50.77g", category: "Coins & Bars", tag: "New", description: "MANISH JEWELLERS 21D — 50.770 Gm.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.31 AM.jpeg", featured: false, rating: 4.6 },
    { id: 97, name: "10g 24K Gold Coin", category: "Coins & Bars", tag: "Investment", description: "Standard 10-gram 999.9 pure gold coin.", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 98, name: "100g 999 Pure Silver Bar", category: "Coins & Bars", tag: "Bestseller", description: "100-gram minted silver bar for investment.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 99, name: "Silver Laxmi Ganesh Coin", category: "Coins & Bars", tag: "Religious", description: "20g silver coin with Laxmi-Ganesh engraving for Diwali.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 181, name: "1g 24K Gold Coin", category: "Coins & Bars", tag: "Gift", description: "Affordable 1-gram 999.9 pure gold coin.", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 182, name: "50g Silver Coin", category: "Coins & Bars", tag: "Investment", description: "50-gram 999 pure silver coin with floral design.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 183, name: "5g 24K Gold Bar", category: "Coins & Bars", tag: "Hot", description: "5-gram certified gold bar in tamper-proof packaging.", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 184, name: "1KG Silver Brick", category: "Coins & Bars", tag: "Premium", description: "1 kilogram 999 pure silver brick for serious investors.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: true, rating: 5.0 },

    // ===== PENDANTS =====
    { id: 20, name: "Silver-Plated Shankh Pendant", category: "Pendants", tag: "New", description: "Detailed silver-plated shankh pendant.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.03 AM (1).jpeg", featured: true, rating: 4.9 },
    { id: 21, name: "Premium Silver Rashi Pendant", category: "Pendants", tag: "Premium", description: "Premium Silver Rashi 999 pendant.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.03 AM (2).jpeg", featured: true, rating: 4.8 },
    { id: 22, name: "Gemstone Pendant STONE 6691", category: "Pendants", tag: "Hot", description: "STONE 6691 gemstone pendant.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.42.13 AM (1).jpeg", featured: false, rating: 4.7 },
    { id: 100, name: "Gold Alphabet Pendant", category: "Pendants", tag: "Custom", description: "18KT gold initial pendant (all letters available).", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 101, name: "Diamond Heart Pendant", category: "Pendants", tag: "Gift", description: "Romantic open heart pendant paved with diamonds.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 102, name: "Gold Om Pendant", category: "Pendants", tag: "Religious", description: "Traditional 22KT gold Om symbol pendant.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 103, name: "Silver Cross Pendant", category: "Pendants", tag: "Classic", description: "Minimalist 925 sterling silver cross pendant.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 104, name: "Pearl Drop Pendant", category: "Pendants", tag: "Elegant", description: "Single South Sea pearl suspended on a gold bail.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 185, name: "Ruby Teardrop Pendant", category: "Pendants", tag: "Premium", description: "Vibrant ruby set in a teardrop gold frame.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 186, name: "Ganesha Gold Pendant", category: "Pendants", tag: "Religious", description: "22KT gold Lord Ganesha intricately designed pendant.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 187, name: "Evil Eye Silver Pendant", category: "Pendants", tag: "Trending", description: "Protective evil eye pendant with blue enamel on silver.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 188, name: "Swastik Pendant", category: "Pendants", tag: "Classic", description: "Simple swastik symbol in 18KT gold.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 189, name: "Diamond Solitaire Pendant", category: "Pendants", tag: "Luxury", description: "0.50-carat solitaire diamond pendant.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 190, name: "Oxidized Leaf Pendant", category: "Pendants", tag: "Boho", description: "Large tribal leaf motif pendant in oxidized silver.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 191, name: "Rose Gold Tree of Life Pendant", category: "Pendants", tag: "Gift", description: "Delicate tree of life design in 18KT rose gold.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: true, rating: 4.8 },

    // ===== BRANDED JEWELRY =====
    { id: 23, name: "GIVA GIVATREE Pendant", category: "Branded Jewelry", tag: "Bestseller", description: "GIVA GIVATREE — exclusive designer pendant.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.42 AM.jpeg", featured: true, rating: 4.9 },
    { id: 24, name: "GIYA Golden Silver Ring", category: "Branded Jewelry", tag: "Premium", description: "GIYA GOLDEN — luxurious silver ring with golden finish.", image: "assets/products/WhatsApp Image 2026-06-25 at 10.41.51 AM.jpeg", featured: false, rating: 4.6 },
    { id: 105, name: "Mia by Tanishq Bracelet", category: "Branded Jewelry", tag: "Hot", description: "Contemporary office-wear 14KT gold bracelet by Mia.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 192, name: "Swarovski Swan Necklace", category: "Branded Jewelry", tag: "Luxury", description: "Iconic Swarovski crystal swan pendant.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 193, name: "CaratLane Diamond Mangalsutra", category: "Branded Jewelry", tag: "Bestseller", description: "Modern lightweight diamond mangalsutra by CaratLane.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.8 },

    // ===== SILVERWARE =====
    { id: 25, name: "Pure Silver Dining Thali Set", category: "Silverware", tag: "Premium", description: "Complete pure silver dining set.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.45.06 AM.jpeg", featured: true, rating: 4.9 },
    { id: 51, name: "Silver Pooja Thali Set", category: "Silverware", tag: "Bestseller", description: "Auspicious 999 pure silver pooja thali.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 52, name: "Pure Silver Kalash", category: "Silverware", tag: "Premium", description: "Intricately carved pure silver Kalash.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 53, name: "Silver Diya Set of 2", category: "Silverware", tag: "Hot", description: "Pair of heavy solid silver diyas.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 106, name: "Silver Baby Feeding Set", category: "Silverware", tag: "Gift", description: "999 silver baby bowl, spoon, and small glass.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 107, name: "Silver Wine Goblets (Set of 2)", category: "Silverware", tag: "Luxury", description: "Exquisite pure silver goblets for special toasts.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 108, name: "Silver Sindoor Box", category: "Silverware", tag: "Bridal", description: "Beautifully carved silver sindoor dibbi.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 109, name: "Silver Photo Frame", category: "Silverware", tag: "Gift", description: "Ornate 925 silver 5x7 photo frame.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 194, name: "Silver Rose Flower", category: "Silverware", tag: "Gift", description: "Everlasting silver rose for home decor or gifting.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 195, name: "Silver Agarbatti Stand", category: "Silverware", tag: "Religious", description: "Elegant silver incense stick holder.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.5 },

    // ===== ACCESSORIES =====
    { id: 28, name: "Gold-Plated Hair Claws", category: "Accessories", tag: "New", description: "Minimalist gold-plated hair claw clips.", image: "assets/products/WhatsApp Image 2026-06-29 at 10.44.49 AM (1).jpeg", featured: false, rating: 4.5 },
    { id: 110, name: "Bridal Hair Brooch (Juda Pin)", category: "Accessories", tag: "Wedding", description: "Kundan and pearl embellished gold-plated hair brooch.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 111, name: "Gold Plated Waist Belt (Kamarbandh)", category: "Accessories", tag: "Bridal", description: "Traditional South Indian style waist belt.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 112, name: "Jewelry Storage Box", category: "Accessories", tag: "Utility", description: "Premium velvet-lined multi-layer jewelry organizer.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 113, name: "Silver Anklet Bells (Ghungroo)", category: "Accessories", tag: "Dance", description: "Authentic heavy silver ghungroo for classical dancers.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 196, name: "Jewelry Cleaning Kit", category: "Accessories", tag: "Utility", description: "Safe and effective cleaning solution and cloth for jewelry.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 197, name: "Gold Polished Hair Pins", category: "Accessories", tag: "Wedding", description: "Set of 6 gold-polished hair pins for bridal updos.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: false, rating: 4.5 },
    { id: 198, name: "Pearl Spectacle Chain", category: "Accessories", tag: "Trending", description: "Elegant eyeglass chain adorned with freshwater pearls.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 199, name: "Men's Tie Clip", category: "Accessories", tag: "Men", description: "Sleek 925 sterling silver tie clip.", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 200, name: "Velvet Ring Bearer Box", category: "Accessories", tag: "Wedding", description: "Hexagonal plush velvet box for wedding rings.", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=600&h=600&fit=crop", featured: true, rating: 4.9 },

    // ===== GEMSTONE JEWELRY =====
    { id: 114, name: "Ceylon Sapphire Ring", category: "Gemstone Jewelry", tag: "Premium", description: "Authentic blue Ceylon sapphire set in 18KT white gold.", image: "https://images.unsplash.com/photo-1615486171448-4fdcb5282b3a?w=600&h=600&fit=crop", featured: true, rating: 5.0 },
    { id: 115, name: "Burmese Ruby Pendant", category: "Gemstone Jewelry", tag: "Luxury", description: "Deep red Burmese ruby surrounded by a diamond halo.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 116, name: "Amethyst Silver Ring", category: "Gemstone Jewelry", tag: "Trending", description: "Large cushion-cut amethyst set in 925 sterling silver.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 117, name: "Emerald Tennis Bracelet", category: "Gemstone Jewelry", tag: "Premium", description: "Line of vivid green emeralds crafted in 18KT yellow gold.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.8 },
    { id: 118, name: "Navratna Necklace", category: "Gemstone Jewelry", tag: "Classic", description: "Traditional necklace featuring all nine astrological gems.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 201, name: "Topaz Drop Earrings", category: "Gemstone Jewelry", tag: "Elegant", description: "Blue topaz drop earrings set in white gold.", image: "https://images.unsplash.com/photo-1615486171448-4fdcb5282b3a?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 202, name: "Opal Halo Ring", category: "Gemstone Jewelry", tag: "New", description: "Mesmerizing Ethiopian opal with a diamond halo.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 203, name: "Citrine Gold Pendant", category: "Gemstone Jewelry", tag: "Trending", description: "Sunny citrine gemstone pendant in 14KT gold.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 204, name: "Garnet Silver Bracelet", category: "Gemstone Jewelry", tag: "Classic", description: "Deep red garnet stones in a sterling silver link bracelet.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 205, name: "Yellow Sapphire Ring (Pukhraj)", category: "Gemstone Jewelry", tag: "Astrology", description: "Certified unheated yellow sapphire in 22KT gold.", image: "https://images.unsplash.com/photo-1615486171448-4fdcb5282b3a?w=600&h=600&fit=crop", featured: true, rating: 5.0 },

    // ===== KIDS JEWELRY =====
    { id: 119, name: "Gold Black Bead Nazariya", category: "Kids Jewelry", tag: "Bestseller", description: "Traditional gold and black bead bracelet to ward off evil.", image: "https://images.unsplash.com/photo-1515562141207-7a8efc1619a9?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 120, name: "Silver Kids Anklets", category: "Kids Jewelry", tag: "Classic", description: "Smooth, skin-friendly pure silver anklets with soft-sounding bells.", image: "https://images.unsplash.com/photo-1515562141207-7a8efc1619a9?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 121, name: "Kids Gold Ear Studs", category: "Kids Jewelry", tag: "Daily Wear", description: "Tiny 18KT gold ball studs with secure screw-on backs.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 122, name: "Mickey Mouse Gold Pendant", category: "Kids Jewelry", tag: "New", description: "Cute enamel Mickey Mouse pendant in 14KT gold.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 123, name: "Personalized Silver Bracelet", category: "Kids Jewelry", tag: "Gift", description: "Customizable silver ID bracelet for babies and toddlers.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 206, name: "Butterfly Enamel Ear Studs", category: "Kids Jewelry", tag: "Trending", description: "Colorful enamel butterfly studs in silver.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", featured: false, rating: 4.7 },
    { id: 207, name: "Kids Gold Chain", category: "Kids Jewelry", tag: "Classic", description: "Lightweight and durable 14-inch 18KT gold chain.", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop", featured: false, rating: 4.8 },
    { id: 208, name: "Silver Black Bead Anklets", category: "Kids Jewelry", tag: "Protective", description: "Silver anklets with black beads for newborn babies.", image: "https://images.unsplash.com/photo-1515562141207-7a8efc1619a9?w=600&h=600&fit=crop", featured: true, rating: 4.9 },
    { id: 209, name: "Flower Diamond Pendant (Kids)", category: "Kids Jewelry", tag: "Premium", description: "Tiny diamond flower pendant for girls.", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop", featured: false, rating: 4.6 },
    { id: 210, name: "Hello Kitty Silver Ring", category: "Kids Jewelry", tag: "New", description: "Adjustable silver ring with Hello Kitty motif.", image: "https://images.unsplash.com/photo-1515562141207-7a8efc1619a9?w=600&h=600&fit=crop", featured: true, rating: 4.8 }
];

// ─── CATEGORIES ───
const categoriesData = [
    { name: "Gold Jewelry", items: "30 items", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop" },
    { name: "Silver Jewelry", items: "25 items", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop" },
    { name: "Diamond Jewelry", items: "20 items", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=400&fit=crop" },
    { name: "Platinum Jewelry", items: "15 items", image: "https://images.unsplash.com/photo-1610633464529-61f22e8dbf28?w=400&h=400&fit=crop" },
    { name: "Mangalsutras", items: "10 items", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop" },
    { name: "Bangles & Bracelets", items: "15 items", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop" },
    { name: "Earrings & Nose Pins", items: "15 items", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop" },
    { name: "Rakhi Collection", items: "10 items", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop" },
    { name: "Coins & Bars", items: "10 items", image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=400&fit=crop" },
    { name: "Pendants", items: "15 items", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop" },
    { name: "Branded Jewelry", items: "5 items", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop" },
    { name: "Silverware", items: "10 items", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=400&fit=crop" },
    { name: "Accessories", items: "10 items", image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=400&h=400&fit=crop" },
    { name: "Gemstone Jewelry", items: "10 items", image: "https://images.unsplash.com/photo-1615486171448-4fdcb5282b3a?w=400&h=400&fit=crop" },
    { name: "Kids Jewelry", items: "10 items", image: "https://images.unsplash.com/photo-1515562141207-7a8efc1619a9?w=400&h=400&fit=crop" }
];

// ─── BRANDS ───
const brandsData = [
    { name: "MMTC PAMP", icon: "fa-shield-alt" },
    { name: "ACPL True Silver", icon: "fa-certificate" },
    { name: "GIVA", icon: "fa-gem" },
    { name: "EMRALD", icon: "fa-crown" },
    { name: "KUNDAN", icon: "fa-star" },
    { name: "AUGMONT", icon: "fa-crown" }
];

// ─── TESTIMONIALS (12 total) ───
const testimonialsData = [
    { name: "Pooja Parikh", subtitle: "Darpana Meen Earrings (Set Of 2)", quote: "They are great quality and such a unique piece of jewellery; they fit my small ears perfectly but also look good on my mom's ears that are slightly bigger than mine.", stars: 5 },
    { name: "Kirti Surana", subtitle: "Basra Bride Earrings", quote: "What a beautiful pair of earrings. Every bride must have it. It is so worth it. Very very happy. The packaging is luxurious.", stars: 5 },
    { name: "Mimi", subtitle: "Basra Zainud Choker", quote: "Very pretty and classy necklace. The design is elegant, you can style it beautifully with both traditional outfits and fusion wear.", stars: 5 },
    { name: "Rhea Kapoor", subtitle: "Gold Temple Necklace", quote: "The craftsmanship on this piece is absolutely stunning. I've received so many compliments. Manish Jewellers truly understands quality.", stars: 5 },
    { name: "Ananya Sharma", subtitle: "Silver Choker Set", quote: "I was looking for something unique for my wedding. The team helped me design a custom piece that was beyond my expectations.", stars: 5 },
    { name: "Priya Mehta", subtitle: "Diamond Solitaire Ring", quote: "The diamond is certified and the setting is perfect. I feel so confident wearing it every day. Thank you for the excellent service.", stars: 5 },
    { name: "Sneha Reddy", subtitle: "Gold Mangalsutra", quote: "A beautiful piece that I will cherish forever. The purity is guaranteed and the design is timeless. Highly recommend Manish Jewellers.", stars: 5 },
    { name: "Neha Jain", subtitle: "Pearl Drop Earrings", quote: "The pearls are lustrous and the gold work is exquisite. This is my go-to brand for all my jewellery needs now.", stars: 4 },
    { name: "Karishma Singh", subtitle: "Platinum Wedding Band", quote: "We got our wedding bands from Manish Jewellers and we couldn't be happier. The platinum is high quality and the engraving is perfect.", stars: 5 },
    { name: "Deepa Nair", subtitle: "Antique Silver Jhumkas", quote: "I love the antique finish on these jhumkas. They go perfectly with my traditional sarees. Great value for money.", stars: 4 },
    { name: "Shreya Malhotra", subtitle: "Kundan Bridal Set", quote: "The bridal set was the highlight of my wedding. Everyone asked where I got it from. Manish Jewellers is the best!", stars: 5 },
    { name: "Nikita Bose", subtitle: "Gold and Diamond Bracelet", quote: "A perfect gift for my mother's anniversary. She absolutely loved it. The quality and design are world-class.", stars: 5 }
];

// ─── REEL VIDEOS ───
const reelUrls = [
    'assets/videos/insta1.mp4',
    'assets/videos/insta2.mp4',
    'assets/videos/insta3.mp4',
    'assets/videos/insta4.mp4',
    'assets/videos/insta5.mp4',
    'assets/videos/insta6.mp4',
    'assets/videos/insta7.mp4',
    'assets/videos/insta8.mp4',
    'assets/videos/reel-vid-1.mp4',
    'assets/videos/reel-vid-2.mp4',
    'assets/videos/reel-vid-3.mp4',
    'assets/videos/reel-vid-4.mp4',
    'assets/videos/reel-vid-5.mp4',
    'assets/videos/reel-vid-6.mp4',
    'assets/videos/reel-vid-7.mp4',
    'assets/videos/reel-vid-8.mp4',
];

// ─── CONSTANTS ───
const WHATSAPP_NUMBER = '+919540816060';
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/manish_jewellers_21d_faridabad';
let lastDeviceType = '';

// ─── HELPERS ───
function getTagClass(tag) {
    if (!tag) return "";
    const map = { new: "new", hot: "hot", sale: "sale", premium: "premium", bestseller: "bestseller", trending: "trending" };
    return map[tag.toLowerCase()] || "";
}

function renderProductCardEcom(p) {
    const tagClass = getTagClass(p.tag);
    const tagDisplay = p.tag || "";
    const rating = p.rating || 0;
    const isMobile = window.innerWidth < 768;
    const waMessage = encodeURIComponent(`I'm interested in ${p.name} from Bhavishya Silver Creation`);

    // On mobile: direct phone call, on desktop: WhatsApp chat
    const viewAction = isMobile ?
        `window.location.href='tel:${WHATSAPP_NUMBER.replace('+', '')}'` :
        `window.open('https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}', '_blank')`;

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
                <button class="view-btn" onclick="${viewAction}">
                    <i class="fas fa-eye"></i> ${isMobile ? 'Call Now' : 'View'}
                </button>
            </div>
        </div>
    `;
}

// ─── RENDER REELS ───
function renderReels() {
    const grid = document.getElementById('reelsGrid');
    if (!grid) return;
    const isMobile = window.innerWidth < 768;
    const currentDevice = isMobile ? 'mobile' : 'desktop';
    if (lastDeviceType === currentDevice && grid.children.length > 0) return;
    lastDeviceType = currentDevice;

    grid.innerHTML = reelUrls.map((url, index) => `
        <div class="reel-item" data-index="${index}">
            <div class="reel-placeholder">
                <i class="fab fa-instagram"></i>
                <span>Reel ${index + 1}</span>
                <span>${isMobile ? 'Tap to play' : 'Hover to play'}</span>
            </div>
            <video src="${url}" muted playsinline preload="metadata" loading="lazy"></video>
            ${isMobile ? `<button class="reel-play-btn"><i class="fas fa-play"></i></button>` : ''}
            <a href="${INSTAGRAM_PROFILE_URL}" target="_blank" class="reel-link-overlay"></a>
        </div>
    `).join('');

    document.querySelectorAll('.reel-item').forEach(item => {
        const video = item.querySelector('video');
        const placeholder = item.querySelector('.reel-placeholder');
        const playBtn = item.querySelector('.reel-play-btn');

        if (!video) return;
        video.style.opacity = '0';
        video.addEventListener('loadedmetadata', () => video.style.opacity = '1');
        video.addEventListener('error', () => {
            video.style.opacity = '1';
            if (placeholder) placeholder.innerHTML = `<i class="fas fa-exclamation-triangle" style="color:#e74c3c;"></i><span>Video unavailable</span>`;
        });

        if (isMobile && playBtn) {
            playBtn.addEventListener('click', e => {
                e.stopPropagation();
                if (video.paused) {
                    video.play().catch(() => {});
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    if (placeholder) placeholder.style.opacity = '0';
                    item.classList.add('loaded');
                } else {
                    video.pause();
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
            item.addEventListener('click', e => {
                if (e.target.closest('.reel-link-overlay')) return;
                if (playBtn) playBtn.click();
            });
            video.addEventListener('ended', () => { if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>'; });
        } else {
            item.addEventListener('mouseenter', () => {
                video.style.opacity = '1';
                if (placeholder) placeholder.style.opacity = '0';
                item.classList.add('loaded');
                video.play().catch(() => {});
            });
            item.addEventListener('mouseleave', () => { if (!video.paused) video.pause(); });
        }

        const overlay = item.querySelector('.reel-link-overlay');
        if (overlay) overlay.addEventListener('click', () => { if (!video.paused) video.pause(); if (isMobile && playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>'; });
    });
}

// ─── HERO VIDEO ───
function initHeroVideo() {
    const heroVideo = document.getElementById('heroVideo');
    if (!heroVideo) return;
    heroVideo.muted = true;
    heroVideo.play().catch(() => {
        const wrapper = document.getElementById('heroVideoWrapper');
        if (wrapper) wrapper.addEventListener('click', () => heroVideo.play().catch(() => {}));
    });
    heroVideo.addEventListener('ended', () => { heroVideo.currentTime = 0; heroVideo.play().catch(() => {}); });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && !heroVideo.paused) heroVideo.pause();
        else if (!document.hidden && heroVideo.paused) heroVideo.play().catch(() => {});
    });
}

// ─── DOM READY ───
document.addEventListener("DOMContentLoaded", function() {

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 40 });
    }

    initHeroVideo();

    // Categories
    const catGrid = document.getElementById("categoriesGrid");
    if (catGrid) {
        catGrid.innerHTML = categoriesData.map(cat => `
            <div class="category-card" onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})">
                <div class="category-image-wrap">
                    <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.src='https://placehold.co/200x200/fbf7f0/dcb36d?text=${encodeURIComponent(cat.name)}'">
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-brand-muted mt-3 block">${cat.items}</span>
                <h3 class="font-heading text-2xl text-brand-dark mt-1 mb-3">${cat.name}</h3>
                <span class="text-sm font-bold text-brand-dark hover:text-brand-gold transition">Explore <i class="fas fa-arrow-right ml-1"></i></span>
            </div>
        `).join('');
    }

    // Brands
    const brandsGrid = document.getElementById("brandsGrid");
    if (brandsGrid) {
        brandsGrid.innerHTML = brandsData.map(brand => `
            <div class="brand-item">
                <i class="fas ${brand.icon} brand-icon"></i>
                <div class="brand-name">${brand.name}</div>
            </div>
        `).join('');
    }

    // Testimonials (scrollable)
    const tGrid = document.getElementById("testimonialsGrid");
    if (tGrid) {
        tGrid.innerHTML = testimonialsData.map(t => `
            <div class="testimonial-card">
                <div class="stars">${'★'.repeat(Math.round(t.stars))}${'☆'.repeat(5 - Math.round(t.stars))}</div>
                <div class="name">${t.name}</div>
                <div class="subtitle">${t.subtitle}</div>
                <div class="quote">${t.quote}</div>
            </div>
        `).join('');
    }

    // Reels
    renderReels();

    // Products
    const allGrid = document.getElementById("allProductsGrid");
    if (allGrid) {
        allGrid.innerHTML = allProductsData.map(renderProductCardEcom).join('');
        const countEl = document.getElementById("productCount");
        if (countEl) countEl.textContent = `${allProductsData.length} products`;
    }

    // Filter chips
    const uniqueCategories = ['All', ...new Set(allProductsData.map(p => p.category))];
    const filterContainer = document.getElementById('offerFilters');
    if (filterContainer) {
        filterContainer.innerHTML = uniqueCategories.map(cat =>
            `<button class="offer-chip ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
        ).join('');
    }

    document.querySelectorAll('.offer-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.offer-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.cat;
            const grid = document.getElementById("allProductsGrid");
            if (!grid) return;
            const filtered = filter === 'All' ? allProductsData : allProductsData.filter(p => p.category === filter);
            grid.innerHTML = filtered.map(renderProductCardEcom).join('');
            const countEl = document.getElementById("productCount");
            if (countEl) countEl.textContent = `${filtered.length} products`;
        });
    });

    // Mobile categories
    const mobileCats = document.getElementById("mobileCategoriesCompact");
    if (mobileCats) {
        mobileCats.innerHTML = categoriesData.map(c =>
            `<a href="#products" class="mobile-cat-chip">${c.name}</a>`
        ).join('');
    }

    // Header scroll
    const header = document.getElementById("mainHeader");
    window.addEventListener("scroll", function() {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        header.classList.toggle("header-scrolled", scroll > 30);
    });

    // Hamburger
    const hamburger = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileOverlay");

    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.remove('hidden');
        requestAnimationFrame(() => overlay.classList.add('open'));
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('active');
        setTimeout(() => { overlay.classList.add('hidden'); document.body.style.overflow = ''; }, 400);
    }

    if (hamburger && mobileMenu && overlay) {
        hamburger.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
        overlay.addEventListener('click', closeMenu);
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }

    // Contact form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const message = document.getElementById("contactMessage").value.trim();
            if (!name || !email || !message) { alert("Please fill in all fields."); return; }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) { alert("Please enter a valid email address."); return; }
            const waText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
            window.open(waUrl, '_blank');
            setTimeout(() => contactForm.reset(), 500);
        });
    }

    // Subscribe
    const subForm = document.getElementById("subscribeForm");
    if (subForm) {
        subForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value.trim()) { alert("Subscribed! You'll receive updates shortly."); this.reset(); }
            else alert("Please enter a valid email address.");
        });
    }

    // Resize reels
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(renderReels, 300);
    });

});