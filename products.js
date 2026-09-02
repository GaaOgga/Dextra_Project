/**
 * DEXTRA PARFUME - Data & Content Configuration
 * Edit konten, teks, dan produk di file ini tanpa perlu mengubah struktur HTML.
 */

const BRAND_DATA = {
    name: "DEXTRA SUPPLY & DISTRIBUTION",
    tagline: "Mitra terpercaya, Solusi terpadu.",
    heroHeading: "Temukan Arah Wangimu Bersama DEXTRA.",
    heroSubheadline:
        "Parfum kualitas premium dengan racikan otentik yang siap nemenin aktivitas seharian kamu. Tahan lama, elegan, dan tetep ramah di kantong!",
    whatsappNumber: "6282331865090", // Ganti dengan nomor WA aktif (format 62...)

    // Value Propositions
    values: [
        {
            title: "Tahan Hingga 12+ Jam",
            desc: "Konsentrasi Eau de Parfum (EDP) tinggi, tetep wangi walau udah muter-muter kota seharian.",
            icon: `<svg class="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        },
        {
            title: "Bahan Impor Kualitas Tinggi",
            desc: "Bibit parfum pilihan langsung diimpor dari Prancis, dijamin aman di kulit dan nggak bikin pusing.",
            icon: `<svg class="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`,
        },
        {
            title: "Harga Anak Muda",
            desc: "Sensasi parfum ratusan ribu tapi cuma seharga jajan kopi kekinian. Hemat tanpa kompromi.",
            icon: `<svg class="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        },
        {
            title: "Ramah Pakaian & Kulit",
            desc: "Nggak ninggalin noda kuning di baju putih dan udah lolos uji dermatologis dasar.",
            icon: `<svg class="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"></path></svg>`,
        },
    ],
};

const PRODUCTS = [
    {
        id: 1,
        name: "Aura Sunset",
        category: "Unisex",
        notes: "Bergamot, Amber, Warm Vanilla",
        price: "Rp 129.000",
        size: "50 ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600",
        description:
            "Kombinasi kehangatan senja yang manis dan menenangkan. Cocok buat kamu yang mau tampil standout saat hang out malam hari.",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Urban Bloom",
        category: "Floral",
        notes: "Peony, White Musk, Fresh Green Tea",
        price: "Rp 119.000",
        size: "50 ml",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600",
        description:
            "Aroma bunga segar yang feminin tanpa terkesan berlebihan. Bikin vibe ngantor atau ngampus kamu makin fresh seharian.",
        badge: "Favorite",
    },
    {
        id: 3,
        name: "Velvet Cedar",
        category: "Woody",
        notes: "Cedarwood, Leather, Cardamom",
        price: "Rp 135.000",
        size: "50 ml",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
        description:
            "Karakter kayu yang hangat dan bold. Pilihan pas buat cowok yang pengen tampil karismatik tapi tetep santai.",
        badge: "New",
    },
    {
        id: 4,
        name: "Oceanic Chill",
        category: "Fresh",
        notes: "Sea Salt, Citrus, Sage",
        price: "Rp 115.000",
        size: "50 ml",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=600",
        description:
            "Sensasi kesegaran angin laut di pagi hari. Pas banget buat nemenin kamu habis workout atau aktivitas outdoor.",
        badge: null,
    },
    {
        id: 5,
        name: "Matcha Serenade",
        category: "Gourmand",
        notes: "Matcha Latte, Jasmine, Tonka Bean",
        price: "Rp 125.000",
        size: "50 ml",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600",
        description:
            "Perpaduan unik rasa pahit-manis matcha khas cafe kekinian. Bikin siapa pun di deket kamu auto nanya 'pakai parfum apa?'",
        badge: "Trending",
    },
    {
        id: 6,
        name: "Midnight Noir",
        category: "Woody",
        notes: "Black Pepper, Dark Chocolate, Oud",
        price: "Rp 139.000",
        size: "50 ml",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600",
        description:
            "Aroma misterius dan mewah yang pas banget buat nge-date atau dinner formal. Bikin gebetan nggak mau jauh-jauh!",
        badge: null,
    },
];

const TESTIMONIALS = [
    {
        id: 1,
        name: "Rian Hidayat",
        role: "Mahasiswa",
        comment:
            "Sumpah Matcha Serenade-nya dapet banget aromanya! Ketahanan di baju gue bisa sampe besoknya. Wajib repeat order sih ini.",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
        rating: 5,
    },
    {
        id: 2,
        name: "Clarissa Putri",
        role: "Content Creator",
        comment:
            "Packaging-nya estetik banget buat dipajang di mejasias. Wangi Aura Sunset bikin nagih, lembut tapi tetep berkelas!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        rating: 5,
    },
    {
        id: 3,
        name: "Dimas Anggara",
        role: "Freelancer",
        comment:
            "Awalnya skeptis karena harganya terjangkau, pas nyoba Velvet Cedar... wah gilak, berasa parfum jutaan!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 5,
    },
];
