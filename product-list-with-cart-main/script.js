
/*
const data = [
  {
     "image": {
          "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
          "mobile": "./assets/images/image-waffle-mobile.jpg",
          "tablet": "./assets/images/image-waffle-tablet.jpg",
          "desktop": "./assets/images/image-waffle-desktop.jpg"
     },
     "name": "Waffle with Berries",
     "category": "Waffle",
     "price": 6.50
  },
  {
      "image": {
          "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
          "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
          "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
          "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
      },
      "name": "Vanilla Bean Crème Brûlée",
      "category": "Crème Brûlée",
      "price": 7.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
          "mobile": "./assets/images/image-macaron-mobile.jpg",
          "tablet": "./assets/images/image-macaron-tablet.jpg",
          "desktop": "./assets/images/image-macaron-desktop.jpg"
      },
      "name": "Macaron Mix of Five",
      "category": "Macaron",
      "price": 8.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
          "mobile": "./assets/images/image-tiramisu-mobile.jpg",
          "tablet": "./assets/images/image-tiramisu-tablet.jpg",
          "desktop": "./assets/images/image-tiramisu-desktop.jpg"
      },
      "name": "Classic Tiramisu",
      "category": "Tiramisu",
      "price": 5.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
          "mobile": "./assets/images/image-baklava-mobile.jpg",
          "tablet": "./assets/images/image-baklava-tablet.jpg",
          "desktop": "./assets/images/image-baklava-desktop.jpg"
      },
      "name": "Pistachio Baklava",
      "category": "Baklava",
      "price": 4.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
          "mobile": "./assets/images/image-meringue-mobile.jpg",
          "tablet": "./assets/images/image-meringue-tablet.jpg",
          "desktop": "./assets/images/image-meringue-desktop.jpg"
      },
      "name": "Lemon Meringue Pie",
      "category": "Pie",
      "price": 5.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
          "mobile": "./assets/images/image-cake-mobile.jpg",
          "tablet": "./assets/images/image-cake-tablet.jpg",
          "desktop": "./assets/images/image-cake-desktop.jpg"
      },
      "name": "Red Velvet Cake",
      "category": "Cake",
      "price": 4.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
          "mobile": "./assets/images/image-brownie-mobile.jpg",
          "tablet": "./assets/images/image-brownie-tablet.jpg",
          "desktop": "./assets/images/image-brownie-desktop.jpg"
      },
      "name": "Salted Caramel Brownie",
      "category": "Brownie",
      "price": 4.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
          "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
          "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
          "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
      },
      "name": "Vanilla Panna Cotta",
      "category": "Panna Cotta",
      "price": 6.50
   }
];
console.log(data);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  console.log("Dessert data:", data);

  const dessertsContainer = document.querySelector(".desserts");
  const cartCountDisplay = document.getElementById("cart-quantity");
  const cartItemsContainer = document.getElementById("cart-items");
  let totalCartCount = 0;

  const cart = {}; // Обект за проследяване на продуктите и количествата

  if (!dessertsContainer || !cartCountDisplay || !cartItemsContainer) {
    console.error("Missing essential elements (desserts container, cart quantity display, or cart items container).");
    return;
  }

  data.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image-wrapper">
        <img 
          src="${product.image.mobile}" 
          alt="${product.name}" 
          srcset="
            ${product.image.mobile} 375w,
            ${product.image.tablet} 768w,
            ${product.image.desktop} 1440w
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
        />
        <div class="cart-panel">
          <button class="minus">−</button>
          <span class="quantity">1</span>
          <button class="plus">+</button>
        </div>
        <button class="add-to-cart-btn">
          <img src="assets/images/icon-add-to-cart.svg" alt="Cart icon" class="cart-icon" />
          Add to Cart
        </button>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
      </div>
    `;

    dessertsContainer.appendChild(card);

    const plus = card.querySelector(".plus");
    const minus = card.querySelector(".minus");
    const quantity = card.querySelector(".quantity");
    const addToCartBtn = card.querySelector(".add-to-cart-btn");

    plus.addEventListener("click", () => {
      quantity.textContent = parseInt(quantity.textContent) + 1;
    });

    minus.addEventListener("click", () => {
      const current = parseInt(quantity.textContent);
      if (current > 1) {
        quantity.textContent = current - 1;
      }
    });
      
    addToCartBtn.addEventListener("click", () => {
      const count = parseInt(quantity.textContent);
      const name = product.name;

      if (cart[name]) {
        cart[name].quantity += count;
      } else {
        cart[name] = {
          quantity: count,
          price: product.price
        };
      }

      updateCartDisplay();
      quantity.textContent = "1"; // Нулиране на брояча след добавяне
    });
  });

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = "";
    totalCartCount = 0;

    for (const name in cart) {
      const item = cart[name];
      totalCartCount += item.quantity;

      const cartItem = document.createElement("p");
      cartItem.textContent = `${name} × ${item.quantity}`;
      cartItemsContainer.appendChild(cartItem);
    }

    cartCountDisplay.textContent = totalCartCount;
  }
});
*/
/*
const desserts = document.querySelector(".desserts");
const cartItems = document.getElementById("cart-items");
const cartQuantity = document.getElementById("cart-quantity");
const confirmOrder = document.getElementById("confirm-order");
const orderConfirmed = document.querySelector(".orderConfirmed");
const startNewOrder = document.getElementById("startNewOrder");

let products = [];
let cart = {};

// Зареждане на продуктите от data.json
fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    products = data.map((p, i) => ({
      id: i + 1,
      name: p.name,
      category: p.category,
      price: p.price,
      image: p.image.thumbnail
    }));
    renderDesserts();
    updateCart();
  });

// Рендериране на продуктите
function renderDesserts() {
  desserts.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.category}</p>
      <p>${product.name}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    desserts.appendChild(div);
  });

  document.querySelectorAll(".desserts button").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  });
}

// Добавяне в количката
function addToCart(id) {
  const product = products.find(p => p.id == id);
  if (!cart[id]) {
    cart[id] = { ...product, quantity: 1 };
  } else {
    cart[id].quantity++;
  }
  updateCart();
}

// Актуализиране на количката
function updateCart() {
  cartItems.innerHTML = "";
  let totalQty = 0;

  for (let id in cart) {
    const item = cart[id];

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} 
      <button class="decrease" data-id="${id}">-</button>
      x${item.quantity}
      <button class="increase" data-id="${id}">+</button>
      - $${(item.price * item.quantity).toFixed(2)}
    `;

    cartItems.appendChild(li);
    totalQty += item.quantity;
  }

  cartQuantity.textContent = totalQty;
  confirmOrder.style.display = totalQty > 0 ? "block" : "none";

  // Добавяме слушатели за + / –
  document.querySelectorAll(".increase").forEach(btn =>
    btn.addEventListener("click", () => changeQuantity(btn.dataset.id, 1))
  );

  document.querySelectorAll(".decrease").forEach(btn =>
    btn.addEventListener("click", () => changeQuantity(btn.dataset.id, -1))
  );
}

// Промяна на количеството
function changeQuantity(id, amount) {
  if (cart[id]) {
    cart[id].quantity += amount;
    if (cart[id].quantity <= 0) {
      delete cart[id];
    }
    updateCart();
  }
}

// Потвърждаване на поръчка
confirmOrder.addEventListener("click", () => {
  orderConfirmed.style.display = "block";
  desserts.style.display = "none";
  confirmOrder.style.display = "none";
});

// Нова поръчка
startNewOrder.addEventListener("click", () => {
  cart = {};
  updateCart();
  orderConfirmed.style.display = "none";
  desserts.style.display = "grid";
  renderDesserts();
});
*/
document.addEventListener("DOMContentLoaded", () => {
  const dessertsContainer = document.querySelector(".desserts");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartQuantitySpan = document.getElementById("cart-quantity");
  const orderSummary = document.getElementById("orderSummary");
  const confirmOrderBtn = document.getElementById("confirm-order");
  const orderConfirmedSection = document.querySelector(".orderConfirmed");
  const startNewOrderBtn = document.getElementById("startNewOrder");

  let cart = [];

  // ✅ FETCH от твоето data.json
  fetch("data.json")
    .then((response) => response.json())
    .then((products) => {
      products = products.map((p, index) => ({ id: index + 1, ...p }));
      renderProducts(products);
    })
    .catch((error) => console.error("Грешка при зареждане на продуктите:", error));

  function renderProducts(products) {
    dessertsContainer.innerHTML = "";
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <div class="product-image-wrapper">
          <picture>
            <source srcset="${product.image.mobile}" media="(max-width: 480px)">
            <source srcset="${product.image.tablet}" media="(max-width: 1024px)">
            <img src="${product.image.desktop}" alt="${product.name}">
          </picture>
          <button class="add-to-cart-btn" data-id="${product.id}">
            <img src="assets/images/icon-add-to-cart.svg" alt="Add to Cart" class="cart-icon">
            Add to Cart
          </button>
          <div class="cart-panel" data-id="${product.id}">
            <button class="decrease">-</button>
            <span class="quantity">0</span>
            <button class="increase">+</button>
          </div>
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h4 class="product-name">${product.name}</h4>
          <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
      `;
      dessertsContainer.appendChild(card);
    });

    attachEventListeners(products);
  }

  function attachEventListeners(products) {
    const addButtons = document.querySelectorAll(".add-to-cart-btn");
    const cartPanels = document.querySelectorAll(".cart-panel");

    addButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        addToCart(id, products);
        updateCartUI();
        togglePanel(id, btn, true);
      });
    });

    cartPanels.forEach((panel) => {
      const id = parseInt(panel.dataset.id);
      const decreaseBtn = panel.querySelector(".decrease");
      const increaseBtn = panel.querySelector(".increase");
      const quantitySpan = panel.querySelector(".quantity");

      increaseBtn.addEventListener("click", () => {
        addToCart(id, products);
        quantitySpan.textContent = getCartQuantity(id);
        updateCartUI();
      });

      decreaseBtn.addEventListener("click", () => {
        decreaseFromCart(id);
        quantitySpan.textContent = getCartQuantity(id);
        updateCartUI();
        if (getCartQuantity(id) === 0) {
          togglePanel(id, document.querySelector(`.add-to-cart-btn[data-id="${id}"]`), false);
        }
      });
    });
  }

  function addToCart(id, products) {
    const product = products.find((p) => p.id === id);
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }

  function decreaseFromCart(id) {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.quantity--;
      if (existing.quantity <= 0) {
        cart = cart.filter((item) => item.id !== id);
      }
    }
  }

  function getCartQuantity(id) {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  }

  function togglePanel(id, btn, show) {
    const panel = document.querySelector(`.cart-panel[data-id="${id}"]`);
    if (show) {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
      panel.style.opacity = "1";
      panel.style.pointerEvents = "auto";
      panel.querySelector(".quantity").textContent = getCartQuantity(id);
    } else {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
      panel.style.opacity = "0";
      panel.style.pointerEvents = "none";
    }
  }

  function updateCartUI() {
    cartQuantitySpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "Your added items will appear here";
      orderSummary.textContent = "Order Total";
      confirmOrderBtn.classList.add("hidden");
      return;
    }

    confirmOrderBtn.classList.remove("hidden");

    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <p>${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
      </div>`
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    orderSummary.textContent = `Order Total: $${total.toFixed(2)}`;
  }

  confirmOrderBtn.addEventListener("click", () => {
    document.querySelector(".cart").style.display = "none";
    orderConfirmedSection.style.display = "block";
    startNewOrderBtn.classList.remove("hidden");
  });

  startNewOrderBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
    document.querySelector(".cart").style.display = "block";
    orderConfirmedSection.style.display = "none";

    // Връщаме всички панели към "Add to Cart"
    document.querySelectorAll(".cart-panel").forEach((panel) => {
      const id = parseInt(panel.dataset.id);
      togglePanel(id, document.querySelector(`.add-to-cart-btn[data-id="${id}"]`), false);
    });
  });
});
