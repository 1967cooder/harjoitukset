
/*

document.addEventListener("DOMContentLoaded", () => {
    const ordersList = document.getElementById("ordersList");
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
  
    if (orders.length === 0) {
      ordersList.innerHTML = "<p>Ei tilauksia.</p>";
      return;
    }
  
    orders.forEach(order => {
      const orderDiv = document.createElement("div");
      orderDiv.className = `order ${order.status}`;
  
      orderDiv.innerHTML = `
        <h3>Tilaus #${order.id}</h3>
        <p><strong>Asiakas:</strong> ${order.customerName}</p>
        <p><strong>Tyyppi:</strong> ${order.selectedPancake}</p>
        <p><strong>Täytteet:</strong> ${order.toppings.join(", ") || "Ei"}</p>
        <p><strong>Lisukkeet:</strong> ${order.extras.join(", ") || "Ei"}</p>
        <p><strong>Toimitus:</strong> ${order.deliveryMethod}</p>
        <p><strong>Hinta:</strong> ${order.totalPrice}€</p>
        <label>Tila:
          <select data-id="${order.id}">
            <option value="waiting" ${order.status === "waiting" ? "selected" : ""}>⏳ waiting</option>
            <option value="ready" ${order.status === "ready" ? "selected" : ""}>✅ ready</option>
            <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>📦 delivered</option>
          </select>
        </label>
      `;
      ordersList.appendChild(orderDiv);
    });
  
    // Tilan päivitys
    ordersList.addEventListener("change", (e) => {
      if (e.target.tagName === "SELECT") {
        const id = parseInt(e.target.dataset.id);
        const newStatus = e.target.value;
        const order = orders.find(o => o.id === id);
        if (order) {
          order.status = newStatus;
          localStorage.setItem("orders", JSON.stringify(orders));
          location.reload(); // Päivittää näkymän
        }
      }
    });
  });
  */
  document.addEventListener("DOMContentLoaded", () => {
    const ordersList = document.getElementById("ordersList");
    const statusFilter = document.getElementById("statusFilter");
    const scrollBtn = document.getElementById("scrollTopBtn");

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Järjestys uusimmat ensin
    orders.sort((a, b) => b.id - a.id);

    function renderOrders(filterStatus = "all") {
      ordersList.innerHTML = "";

      const filteredOrders = filterStatus === "all" ? orders : orders.filter(order => order.status === filterStatus);

      if (filteredOrders.length === 0) {
        ordersList.innerHTML = "<p>Ei tilauksia.</p>";
        return;
      }

      filteredOrders.forEach(order => {
        const orderDiv = document.createElement("div");
        orderDiv.className = `order ${order.status}`;

        orderDiv.innerHTML = `
          <h3>Tilaus #${order.id}</h3>
          <p><strong>Asiakas:</strong> ${order.customerName}</p>
          <p><strong>Tyyppi:</strong> ${order.selectedPancake}</p>
          <p><strong>Täytteet:</strong> ${order.toppings.join(", ") || "Ei"}</p>
          <p><strong>Lisukkeet:</strong> ${order.extras.join(", ") || "Ei"}</p>
          <p><strong>Toimitus:</strong> ${order.deliveryMethod}</p>
          <p><strong>Hinta:</strong> ${order.totalPrice}€</p>
          <label>Tila:
            <select data-id="${order.id}">
              <option value="waiting" ${order.status === "waiting" ? "selected" : ""}>🟡 waiting</option>
              <option value="ready" ${order.status === "ready" ? "selected" : ""}> 🔵 ready</option>
              <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>🟢 delivered</option>
            </select>
          </label>
          <button class="deleteBtn" data-id="${order.id}">🗑 Poista</button>
        `;
        ordersList.appendChild(orderDiv);
      });
    }

    // Tilan päivitys
    ordersList.addEventListener("change", (e) => {
      if (e.target.tagName === "SELECT") {
        const id = parseInt(e.target.dataset.id);
        const newStatus = e.target.value;
        const order = orders.find(o => o.id === id);
        if (order) {
          order.status = newStatus;
          localStorage.setItem("orders", JSON.stringify(orders));
          renderOrders(statusFilter.value);
        }
      }
    });

    // Poistopainike
    ordersList.addEventListener("click", (e) => {
      if (e.target.classList.contains("deleteBtn")) {
        const id = parseInt(e.target.dataset.id);
        orders = orders.filter(order => order.id !== id);
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders(statusFilter.value);
      }
    });

    // Suodatus
    statusFilter.addEventListener("change", () => {
      renderOrders(statusFilter.value);
    });

    


  //scroll button
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  renderOrders();
});