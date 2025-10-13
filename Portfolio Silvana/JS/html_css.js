//Project container-----------------------------------------

const projects = [
  {
    id: "grid",
    title: "Grid",
    img: "images/turquoise-light.webp",
    link: "Grid_harjoitus copy/index.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/Grid_harjoitus%20copy",
  },
  {
    id: "icebreaker",
    title: "Icebreaker",
    img: "images/turquoise-light.webp",
    link: "Icebreaker2 copy/index1.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/Icebreaker2%20copy",
  },
  {
    id: "01_flex-projecti",
    title: "FlexFest",
    img: "images/turquoise-light.webp",
    link: "01_flex-projecti copy/flexfest.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/01_flex-projecti%20copy",
  },
  {
    id: "08_palloexample",
    title: "08_palloexample",
    img: "images/turquoise-light.webp",
    link: "08_palloexample copy/index.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/08_palloexample%20copy",
  },
  {
    id: "transition harjoitus",
    title: "Transition harjoitus",
    img: "images/turquoise-light.webp",
    link: "Transition harjoitus copy/index.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/Transition%20harjoitus%20copy",
  },
  {
    id: "order-summary",
    title: "Order-summary",
    img: "images/turquoise-light.webp",
    link: "order-summary-component-main/index.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/order-summary-component-main",
  },
  {
    id: "bento-grid-main",
    title: "Bento-grid-main",
    img: "images/turquoise-light.webp",
    link: "bento-grid-main copy/index.html",
    github:
      "https://github.com/1967cooder/harjoitukset/tree/main/Portfolio%20Silvana/bento-grid-main%20copy",
  },
];

const container = document.getElementById("projectContainer");

projects.forEach((project) => {
  const div = document.createElement("div");
  div.className = "project";
  div.id = project.id;
  div.innerHTML = `
    <div class="image-container">
      <img src="${project.img}" alt="${project.title}" width="300" height="200" />
      <a href="${project.github}" target="_blank" class="overlay-link">GitHub</a>
    </div>
      <h3>${project.title}</h3>
      <a href="${project.link}">See more</a>
    `;
  container.appendChild(div);
});
