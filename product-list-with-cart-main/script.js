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
]
/*
document.addEventListener("DOMContentLoaded", () => {
    const dessertsContainer = document.querySelector(".desserts");
  
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
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



            <button class="add-to-cart-btn">Add to Cart</button>
            </div>
            <div class="product-info">           
               <p class="product-category">${product.category}</p>
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">$${product.price.toFixed(2)}</p>
              
            </div>
          `;
          dessertsContainer.appendChild(card);
        });
      })
      .catch(err => console.error('Error loading product data:', err));
  });
*/
document.addEventListener("DOMContentLoaded", () => {
  const dessertsContainer = document.querySelector(".desserts");

  fetch('data.json')
    .then(res => res.json())
    .then(data => {
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
            <button class="add-to-cart-btn">Add to Cart</button>
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

        plus.addEventListener("click", () => {
          quantity.textContent = parseInt(quantity.textContent) + 1;
        });

        minus.addEventListener("click", () => {
          const current = parseInt(quantity.textContent);
          if (current > 1) {
            quantity.textContent = current - 1;
          }
        });
      });
    })
    .catch(err => console.error('Error loading product data:', err));
});
