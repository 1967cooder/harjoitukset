



//Project container-----------------------------------------


  const projects = [
    {
      id: "grid",
      title: "Grid",
      img: "images/turquoise-light.webp",
      link: "Grid_harjoitus copy/index.html"
    },
    {
      id: "icebreaker",
      title: "Icebreaker",
      img: "images/turquoise-light.webp",
      link: "Icebreaker2 copy/index1.html"
    },
    {
      id: "01_flex-projecti",
      title: "FlexFest",
      img: "images/turquoise-light.webp",
      link: "01_flex-projecti copy/flexfest.html"
    },
    {
      id: "08_palloexample",
      title: "08_palloexample",
      img: "images/turquoise-light.webp",
      link: "08_palloexample copy/index.html"
    },
    {
      id: "transition harjoitus",
      title: "Transition harjoitus",
      img: "images/turquoise-light.webp",
      link: "Transition harjoitus copy/index.html"
    },
       
  ];

  const container = document.getElementById("projectContainer");

  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project";
    div.id = project.id;
    div.innerHTML = `
      <img src="${project.img}" alt="${project.title}" width="300" height="200" />
      <h3>${project.title}</h3>
      <a href="${project.link}">See more</a>
    `;
    container.appendChild(div);
  });

