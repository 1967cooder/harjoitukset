
/*
document.addEventListener("DOMContentLoaded", () => {
  const dessertsContainer = document.querySelector(".desserts");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartQuantitySpan = document.getElementById("cart-quantity");
  const orderSummary = document.getElementById("orderSummary");
  const confirmOrderBtn = document.getElementById("confirm-order");
  const orderConfirmedSection = document.querySelector(".orderConfirmed");
  const startNewOrderBtn = document.getElementById("startNewOrder");

  const emptyImage = document.querySelector(".cart-empty");
  const emptyText = document.getElementById("empty-text");
  const carbonText = document.querySelector(".carbon-text");

  const confirmedItemsContainer = document.getElementById("confirmed-items");
  const orderTotalConfirmed = document.getElementById("orderTotalConfirmed");

  let cart = [];

  confirmOrderBtn.style.display = "none";

  fetch("data.json")
    .then((response) => response.json())
    .then((products) => {
      products = products.map((p, index) => ({ id: index + 1, ...p }));
      renderProducts(products);
      updateCartUI();
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

  function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCartUI();
  }

  function getCartQuantity(id) {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  }

  function updateCartUI() {
    cartQuantitySpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
      emptyImage.style.display = "block";
      emptyText.style.display = "block";
      cartItemsContainer.style.display = "none";
      orderSummary.style.display = "none";
      carbonText.style.display = "none";
      confirmOrderBtn.style.display = "none";
      cartItemsContainer.innerHTML = "";
      orderSummary.textContent = "Order Total";
    } else {
      emptyImage.style.display = "none";
      emptyText.style.display = "none";
      cartItemsContainer.style.display = "block";
      orderSummary.style.display = "block";
      carbonText.style.display = "block";
      confirmOrderBtn.style.display = "block";

      cartItemsContainer.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item">
          <div>
            <h4>${item.name}</h4>
            <p>${item.quantity}x $${item.price.toFixed(2)} 
            <strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
          </div>
          <button class="remove-item" data-id="${item.id}">X</button>
        </div>`
        )
        .join("");

      document.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.dataset.id);
          removeFromCart(id);
        });
      });

      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      orderSummary.innerHTML = `Order Total <strong>$${total.toFixed(2)}</strong>`;
    }

    // ✅ Червен кант, червен бутон и показване на панела с броячи
    document.querySelectorAll(".product-card").forEach((card) => {
      const imageWrapper = card.querySelector(".product-image-wrapper");
      const btn = card.querySelector(".add-to-cart-btn");
      const panel = card.querySelector(".cart-panel");
      const id = parseInt(btn.dataset.id);
      const quantitySpan = panel.querySelector(".quantity");
      const inCart = cart.some((item) => item.id === id);

      if (inCart) {
        const quantity = getCartQuantity(id);
        quantitySpan.textContent = quantity;

        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
        panel.style.opacity = "1";
        panel.style.pointerEvents = "auto";

        imageWrapper.style.border = "2px solid hsl(14, 86%, 42%)";
        imageWrapper.style.borderRadius = "8px 8px 0 0";
        btn.style.backgroundColor = "hsl(14, 86%, 42%)";
        btn.style.color = "white";
        btn.querySelector(".cart-icon").style.filter = "brightness(0) invert(1)";
      } else {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        panel.style.opacity = "0";
        panel.style.pointerEvents = "none";
        imageWrapper.style.border = "none";
        imageWrapper.style.borderRadius = "0";
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.querySelector(".cart-icon").style.filter = "";

        // ✅ НОВО: Червен текст при hover (преди да се добави в количката)
        btn.addEventListener("mouseenter", () => {
          btn.style.color = "hsl(14, 86%, 42%)";
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.color = "";
        });
      }
    });
  }

  function renderConfirmedItems() {
    if (cart.length === 0) {
      confirmedItemsContainer.innerHTML = "<p>No items ordered.</p>";
      return;
    }

    confirmedItemsContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="confirmed-item">
        <img src="${item.image.desktop}" alt="${item.name}" class="confirmed-item-img" />
        <div>
        <h4>${item.name}</h4>
          <p>${item.quantity}x $${item.price.toFixed(2)}</p> 
          </div> 
         <p><strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
      </div>`
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    orderTotalConfirmed.innerHTML = `<span>Order Total</span><span> <strong>$${total.toFixed(2)}</strong></span>`;
  }

  confirmOrderBtn.addEventListener("click", () => {
    document.querySelector(".cart").style.display = "none";
    orderConfirmedSection.style.display = "block";
    startNewOrderBtn.classList.remove("hidden");
    document.querySelector(".overlay").style.display = "block";
    renderConfirmedItems();
  });

  startNewOrderBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
    document.querySelector(".cart").style.display = "block";
    orderConfirmedSection.style.display = "none";
    startNewOrderBtn.classList.add("hidden");
    document.querySelector(".overlay").style.display = "none";
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

  const emptyImage = document.querySelector(".cart-empty");
  const emptyText = document.getElementById("empty-text");
  const carbonText = document.querySelector(".carbon-text");

  const confirmedItemsContainer = document.getElementById("confirmed-items");
  const orderTotalConfirmed = document.getElementById("orderTotalConfirmed");

  let cart = [];

  confirmOrderBtn.style.display = "none";

  fetch("data.json")
    .then((response) => response.json())
    .then((products) => {
      products = products.map((p, index) => ({ id: index + 1, ...p }));
      renderProducts(products);
      updateCartUI();
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
            <img src="${product.image.desktop}" alt="${product.name}" class="product-image">
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
      });

      // ✅ Hover ефект (преди клик)
      btn.addEventListener("mouseenter", () => {
        if (!cart.some((item) => item.id === parseInt(btn.dataset.id))) {
          btn.style.color = "hsl(14, 86%, 42%)";
          btn.querySelector(".cart-icon").style.filter =
            "brightness(0) saturate(100%) invert(29%) sepia(86%) saturate(2453%) hue-rotate(355deg) brightness(96%) contrast(89%)";
          btn.style.backgroundColor = "white";
        }
      });
      btn.addEventListener("mouseleave", () => {
        if (!cart.some((item) => item.id === parseInt(btn.dataset.id))) {
          btn.style.color = "";
          btn.querySelector(".cart-icon").style.filter = "";
          btn.style.backgroundColor = "";
        }
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

  function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCartUI();
  }

  function getCartQuantity(id) {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  }

  function updateCartUI() {
    cartQuantitySpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
      emptyImage.style.display = "block";
      emptyText.style.display = "block";
      cartItemsContainer.style.display = "none";
      orderSummary.style.display = "none";
      carbonText.style.display = "none";
      confirmOrderBtn.style.display = "none";
      cartItemsContainer.innerHTML = "";
      orderSummary.textContent = "Order Total";
    } else {
      emptyImage.style.display = "none";
      emptyText.style.display = "none";
      cartItemsContainer.style.display = "block";
      orderSummary.style.display = "block";
      carbonText.style.display = "block";
      confirmOrderBtn.style.display = "block";

      cartItemsContainer.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item">
          <div>
            <h4>${item.name}</h4>
            <p>${item.quantity}x $${item.price.toFixed(2)} 
            <strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
          </div>
          <button class="remove-item" data-id="${item.id}">X</button>
        </div>`
        )
        .join("");

      document.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.dataset.id);
          removeFromCart(id);
        });
      });

      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      orderSummary.innerHTML = `Order Total <strong>$${total.toFixed(2)}</strong>`;
    }

    // ✅ Червен кант САМО около снимката
    document.querySelectorAll(".product-card").forEach((card) => {
      const imageWrapper = card.querySelector(".product-image-wrapper");
      const productImage = card.querySelector(".product-image");
      const btn = card.querySelector(".add-to-cart-btn");
      const panel = card.querySelector(".cart-panel");
      const id = parseInt(btn.dataset.id);
      const quantitySpan = panel.querySelector(".quantity");
      const inCart = cart.some((item) => item.id === id);

      if (inCart) {
        const quantity = getCartQuantity(id);
        quantitySpan.textContent = quantity;

        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
        panel.style.opacity = "1";
        panel.style.pointerEvents = "auto";

        // ✅ Червен кант около изображението
        productImage.style.border = "2px solid hsl(14, 86%, 42%)";
        productImage.style.borderRadius = "8px";

        btn.style.backgroundColor = "hsl(14, 86%, 42%)";
        btn.style.color = "white";
        btn.querySelector(".cart-icon").style.filter = "brightness(0) invert(1)";
      } else {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        panel.style.opacity = "0";
        panel.style.pointerEvents = "none";

        productImage.style.border = "none";
        productImage.style.borderRadius = "0";

        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.querySelector(".cart-icon").style.filter = "";
      }
    });
  }

  function renderConfirmedItems() {
    if (cart.length === 0) {
      confirmedItemsContainer.innerHTML = "<p>No items ordered.</p>";
      return;
    }

    confirmedItemsContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="confirmed-item">
        <img src="${item.image.desktop}" alt="${item.name}" class="confirmed-item-img" />
        <div>
        <h4>${item.name}</h4>
          <p>${item.quantity}x $${item.price.toFixed(2)}</p> 
          </div> 
         <p><strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
      </div>`
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    orderTotalConfirmed.innerHTML = `<span>Order Total</span><span> <strong>$${total.toFixed(2)}</strong></span>`;
  }

  confirmOrderBtn.addEventListener("click", () => {
    document.querySelector(".cart").style.display = "none";
    orderConfirmedSection.style.display = "block";
    startNewOrderBtn.classList.remove("hidden");
    document.querySelector(".overlay").style.display = "block";
    renderConfirmedItems();
  });

  startNewOrderBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
    document.querySelector(".cart").style.display = "block";
    orderConfirmedSection.style.display = "none";
    startNewOrderBtn.classList.add("hidden");
    document.querySelector(".overlay").style.display = "none";
  });
});

