// === FIREBASE IMPORTLAR ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// === FIREBASE CONFIG ===
const firebaseConfig = {
  apiKey: "AIzaSyA8pO6GBi5MeeycsKIgZUOYvAUM639kKvI",
  authDomain: "premiumuz-9f03d.firebaseapp.com",
  databaseURL: "https://premiumuz-9f03d-default-rtdb.firebaseio.com",
  projectId: "premiumuz-9f03d",
  storageBucket: "premiumuz-9f03d.firebasestorage.app",
  messagingSenderId: "874271730419",
  appId: "1:874271730419:web:74f35f5465a8ff4771a586",
  measurementId: "G-T0DE6KSDGH"
};

// === FIREBASE ISHGA TUSHIRISH ===
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// === SAVATCHA ===
const cartTable = document.querySelector("#cartTable tbody");
const totalPriceEl = document.getElementById("totalPrice");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Savatchani render qilish
function renderCart() {
  cartTable.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${Number(item.price).toLocaleString()} so‘m</td>
    `;
    cartTable.appendChild(row);
    total += Number(item.price);
  });
  totalPriceEl.textContent = total.toLocaleString();
}

renderCart();

// Buyurtmani yuborish
document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("⚠️ Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  if (cart.length === 0) {
    alert("⚠️ Savatchangiz bo‘sh!");
    return;
  }

  try {
    // Buyurtmani Firebase’ga yozamiz
    const orderRef = ref(db, "orders");
    const newOrder = push(orderRef);
    await set(newOrder, {
      name,
      phone,
      address,
      items: cart,
      total: totalPriceEl.textContent,
      time: new Date().toLocaleString(),
    });

    alert("✅ Buyurtma muvaffaqiyatli yuborildi!");
    localStorage.removeItem("cart");
    cart = [];
    renderCart();

    // Formani tozalash
    document.getElementById("orderForm").reset();
  } catch (err) {
    alert("❌ Xatolik yuz berdi: " + err.message);
  }
});
