// lang.js
const translations = {
  uz: {
    home: "Bosh sahifa",
    products: "Mahsulotlar",
    about: "Biz haqimizda",
    contact: "Aloqa",
    admin: "Admin",
    heroTitle: "Erkaklar uchun premium kiyimlar",
    heroDesc: "Eng yuqori sifat, nafis dizayn va mukammal uslub.",
    heroBtn: "Mahsulotlarni ko‘rish",
    feature1Title: "Sifatli Materiallar",
    feature1Desc: "Bizning kiyimlar faqat premium matolardan tayyorlanadi.",
    feature2Title: "Yevropa Dizayni",
    feature2Desc: "Har bir detal — zamonaviy erkaklar uslubiga mos.",
    feature3Title: "Tez Yetkazib Berish",
    feature3Desc: "Buyurtmalaringiz 1-2 kun ichida yetkaziladi.",
    footer: "© 2025 Exclusive Premium House | Barcha huquqlar himoyalangan.",
    productsTitle: "Bizning Mahsulotlar",
  },
  ru: {
    home: "Главная",
    products: "Продукты",
    about: "О нас",
    contact: "Контакты",
    admin: "Админ",
    heroTitle: "Премиальная одежда для мужчин",
    heroDesc: "Высокое качество, изысканный дизайн и идеальный стиль.",
    heroBtn: "Посмотреть продукты",
    feature1Title: "Качественные материалы",
    feature1Desc: "Наша одежда изготовлена только из премиальных тканей.",
    feature2Title: "Европейский дизайн",
    feature2Desc: "Каждая деталь соответствует современному мужскому стилю.",
    feature3Title: "Быстрая доставка",
    feature3Desc: "Ваши заказы доставляются за 1–2 дня.",
    footer: "© 2025 Exclusive Premium House | Все права защищены.",
    productsTitle: "Наши Продукты",
  },
  en: {
    home: "Home",
    products: "Products",
    about: "About Us",
    contact: "Contact",
    admin: "Admin",
    heroTitle: "Premium clothing for men",
    heroDesc: "Highest quality, elegant design, and perfect style.",
    heroBtn: "View Products",
    feature1Title: "Quality Materials",
    feature1Desc: "Our clothes are made only from premium fabrics.",
    feature2Title: "European Design",
    feature2Desc: "Every detail fits modern men's style.",
    feature3Title: "Fast Delivery",
    feature3Desc: "Your orders are delivered within 1–2 days.",
    footer: "© 2025 Exclusive Premium House | All rights reserved.",
    productsTitle: "Our Products",
  }
};

// tilni qo‘llash funksiyasi
function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-switcher button").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`.lang-switcher button[data-lang="${lang}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

// tilni yuklash
const savedLang = localStorage.getItem("siteLang") || "uz";
applyLanguage(savedLang);

// Tugmalarni eshitish
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-switcher button").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      localStorage.setItem("siteLang", lang);
      applyLanguage(lang);
    });
  });
});
