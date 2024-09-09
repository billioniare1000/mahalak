document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "منتج 1",
      price: "100 pound ",
      image: "./img/th (3).jpg",
    },
    {
      id: 2,
      name: "منتج 2",
      price: "200 pound ",
      image: "./img/th (2).jpg",
    },
    {
      id: 3,
      name: "منتج 3",
      price: "300 pound ",
      image: "./img/th.jpg",
    },
  ];

  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-md-4";
    productDiv.innerHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="btn btn-primary" id="nmn" onclick="purchaseProduct(${product.id})">اشترِ الآن</button>
            </div>
        `;
    productList.appendChild(productDiv);
  });

  document.getElementById("toggle-lang").addEventListener("click", (e) => {
    e.preventDefault();
    toggleLanguage();
  });
});

function purchaseProduct(productId) {
  alert(`تمت إضافة المنتج ${productId} إلى سلة المشتريات.`);
}

function toggleLanguage() {
  const isArabic = document.documentElement.lang === "ar";
  document.documentElement.lang = isArabic ? "en" : "ar";
  document.documentElement.dir = isArabic ? "ltr" : "rtl";
  document.getElementById("toggle-lang").textContent = isArabic
    ? "العربية"
    : "English";
  // Update text content based on the selected language
  updateTextContent();
}

function updateTextContent() {
  const isArabic = document.documentElement.lang === "ar";
  document.querySelector("header h1").textContent = isArabic
    ? "محلك"
    : "Your Store";
  document.querySelector("#home h2").textContent = isArabic
    ? "مرحبا بكم في محلك"
    : "Welcome to Your Store";
  document.querySelector("#home p").textContent = isArabic
    ? "اكتشف منتجات التجار المميزين وشراء ما تحتاجه بكل سهولة."
    : "Discover the best products from merchants and buy what you need easily.";
  document.querySelector("#products h2").textContent = isArabic
    ? "المنتجات"
    : "Products";
  document.querySelector("#contact h2").textContent = isArabic
    ? "اتصل بنا"
    : "Contact Us";
  document.querySelector("#contact button").textContent = isArabic
    ? "أرسل"
    : "Send";

  document.querySelector("#neme").textContent = isArabic ? "الاسم" : "name: ";
  document.querySelector("#emeil").textContent = isArabic
    ? " البريد الالكتروني  "
    : " email:";
  document.querySelector("#massage").textContent = isArabic
    ? " الرساله "
    : "message:";
  document.querySelector("#1").tagName = isArabic ? "منتج 1 " : "Product 1 ";
}
