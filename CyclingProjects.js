const projects = [
  {
    title: "Mini-Game Mayhem VR",
    image: "Images/Gifs/MazeEye.png",
    description: "This project is a VR game that I made using Unity and C#. The game is a collection of mini-games that the player can play through."
  },
  {
    title: "Valorant Website",
    image: "Images/Gifs/Valorant Website Logo.jpg",
    description: "This project is a website for the game Valorant that I made featuring some D3.js graphs and use of HTML, CSS, and Javascript."
  },
  {
    title: "Unreal Engine Projects",
    image: "Images/Gifs/Unreal.jpg",
    description: "Throughout the game Major I have created a couple different Unreal Engine projects."
  }
];

let currentIndex = 0;

function updateProject() {
  const project = projects[currentIndex];
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-image").src = project.image;
  document.getElementById("project-description").textContent = project.description;
}

document.getElementById("next-project").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateProject();
});

document.getElementById("prev-project").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateProject();
});

// Initialize first project
updateProject();