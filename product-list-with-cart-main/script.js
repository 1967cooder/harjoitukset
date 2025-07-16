




/*
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
        <h4>${item.name}</h4>
        <p>${item.quantity}x $${(item.price)} 
$${(item.price * item.quantity).toFixed(2)}</p>
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
*/
document.addEventListener("DOMContentLoaded", () => {
  const dessertsContainer = document.querySelector(".desserts");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartQuantitySpan = document.getElementById("cart-quantity");
  const orderSummary = document.getElementById("orderSummary");
  const confirmOrderBtn = document.getElementById("confirm-order");
  const orderConfirmedSection = document.querySelector(".orderConfirmed");
  const startNewOrderBtn = document.getElementById("startNewOrder");
  const emptyImage = document.querySelector(".cart-emty");
  const emptyText = document.getElementById("empty-text");
  const carbonText = document.querySelector(".carbon-text");

  let cart = [];

  // ✅ FETCH от data.json
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

  // ✅ ОБНОВЕНА ФУНКЦИЯ ЗА UI
  function updateCartUI() {
    cartQuantitySpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
      // ✅ Показваме празната количка
      emptyImage.style.display = "block";
      emptyText.style.display = "block";

      // ✅ Скриваме съдържанието
      cartItemsContainer.style.display = "none";
      orderSummary.style.display = "none";
      carbonText.style.display = "none";
      confirmOrderBtn.classList.add("hidden");

      cartItemsContainer.innerHTML = "";
      orderSummary.textContent = "Order Total";
      return;
    }

    // ✅ Скриваме празната количка
    emptyImage.style.display = "none";
    emptyText.style.display = "none";

    // ✅ Показваме съдържанието
    cartItemsContainer.style.display = "block";
    orderSummary.style.display = "block";
    carbonText.style.display = "block";
    confirmOrderBtn.classList.remove("hidden");

    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>${item.quantity}x $${item.price.toFixed(2)} 
        <strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
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

    // ✅ Връщаме всички панели към "Add to Cart"
    document.querySelectorAll(".cart-panel").forEach((panel) => {
      const id = parseInt(panel.dataset.id);
      togglePanel(id, document.querySelector(`.add-to-cart-btn[data-id="${id}"]`), false);
    });
  });

  // ✅ Първоначално скриваме съдържанието (когато няма продукти)
  updateCartUI();
});
