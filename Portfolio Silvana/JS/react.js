//Project container-----------------------------------------
const container = document.getElementById("projectContainer");

const projects = [
  {
    id: "hrapp",
    title: "hrApp",
    img: "images/randomImages/ReactProjects.webp",
    link: "https://1967cooder.github.io/hrApp/#/",
    github: "https://github.com/1967cooder/hrApp/blob/Step7/README.md",
  },
  {
    id: "",
    title: "",
    img: "images/randomImages/ReactProjects.webp",
    link: "",
    github: "",
  },
  {
    id: "",
    title: "",
    img: "images/randomImages/ReactProjects.webp",
    link: "",
    github: "",
  },
];

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
    
    <a href="${project.link}"target="_blank" rel="noopener">See more</a>
  `;
  container.appendChild(div);
});
