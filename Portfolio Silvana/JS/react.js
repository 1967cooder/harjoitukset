
//Project container-----------------------------------------


const projects = [
    {
        id: "",
        title: "",
        img: "images/randomImages/ReactProjects.webp",
        link: ""
      },
      {
        id: "",
        title: "",
        img: "images/randomImages/ReactProjects.webp",
        link: ""
      },
      {
        id: "",
        title: "",
        img: "images/randomImages/ReactProjects.webp",
        link: ""
      },
]




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
