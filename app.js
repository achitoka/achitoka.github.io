const typed = new Typed('.multiple-text', {
  strings: ['Data Scientist', 'Game Designer'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// category: Classification, Regression, Computer Vision, Recommender System, NLP, Data Analytics, Game Design, Asset Creation
// category update tba

const projects = [
  {
    title: "Tomato Quality Detection",
    skill: ["Computer Vision", "Classification", "Python"], 
    link: "#",
    img: "img/tomato.jpg",
    categories: ["Computer Vision", "Classification"]
  },
  {
    title: "Chocolate Bar Recommendation",
    skill: ["Recommender System", "Python"],
    link: "#",
    img: "img/chocolatepink.jpg",
    categories: ["Recommender System"]
  },
  {
    title: "Movie Recommendation System",
    skill: ["Recommender System", "Streamlit"],
    link: "#",
    img: "img/movie.jpg",
    categories: ["Recommender System"]
  },
  {
    title: "Tomato Quality Detection",
    skill: ["Computer Vision", "Classification", "Python"], 
    link: "#",
    img: "img/tomato.jpg",
    categories: ["Computer Vision", "Classification"]
  },
  {
    title: "Chocolate Bar Recommendation",
    skill: ["Recommender System", "Python"],
    link: "#",
    img: "img/chocolatepink.jpg",
    categories: ["Recommender System"]
  },
  {
    title: "Movie Recommendation System",
    skill: ["Recommender System", "Streamlit"],
    link: "#",
    img: "img/movie.jpg",
    categories: ["Recommender System"]
  },
];


let categories = new Set();
projects.forEach(p => p.categories.forEach(c => categories.add(c)));

// category button
const categoryBox = document.querySelector(".category-box");
let categoryHTML = `<button class="cat-btn active" data-cat="All">All</button>`;
categories.forEach(c => {
    categoryHTML += `<button class="cat-btn" data-cat="${c}">${c}</button>`;
});
categoryBox.innerHTML = categoryHTML;

// project render function
const projectBox = document.querySelector(".project-box");

function renderProjects(filter = "All") {
  projectBox.innerHTML = "";
  projects
    .filter(p => filter === "All" || p.categories.includes(filter))
    .forEach(p => {
      const card = `
        <div class="project-card">
          <img class="project-img" src="${p.img}" alt="${p.title}">
          <h3 class="title-card">${p.title}</h3>
          <div class="skill-card">
            ${p.skill.map(s => `<span class="skill-badge">${s}</span>`).join("")}
          </div>
          <a class="link-card" href="${p.link}" target="_blank">View Project</a>
        </div>
      `;
      projectBox.innerHTML += card;
    });
}

// all default render all
renderProjects();

// category event listener
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.cat);
  });
});


