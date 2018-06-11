const projects = [
  {title: "Random Quote Generator",
  description: "Randomly display a quote from an array and also change the background colour.",
  link: "https://arvindak.github.io/THFS-Project1_QuotesDisplay/#",
  img: "media/project1.png",
  buttonTxt: "Project 1",
  cssClass: "small"
  },
  {title: "Pagination and dynamic filtering",
  description: "Dynamicly search and filtering a dataset of students.",
  link: "https://arvindak.github.io/THFS-Project2_Pagination/#",
  img: "media/project2.png",
  buttonTxt: "Project 2",
  cssClass: "large"
  },
  {title: "Pagination and dynamic filtering",
  description: "Using client side validation that provides real timeout feedback to the user.",
  link: "https://arvindak.github.io/THFS-Project3_InteractiveForm/#",
  img: "media/project3.png",
  buttonTxt: "Project 3",
  cssClass: "tall"
  },
  {title: "Tic-Tac-Toe",
  description: "Play against a local player or your computer.",
  link: "https://arvindak.github.io/THFS-Project4_Tic-Tac-Toe/#",
  img: "media/project4.png",
  buttonTxt: "Project 4",
  cssClass: "medium"
  },
  {title: "API Awesome Employee Fetching",
  description: "Fetch 12 users from an API, diplay them in cards and use modals to inspect each card.",
  link: "https://arvindak.github.io/THFS-Project5_API/#",
  img: "media/project5.png",
  buttonTxt: "Project 5",
  cssClass: "large"
  }
];

(function(){
  let projectHTML = [];
  projects.forEach(project =>{
    someHTML = `
      <div class="item"><img class="project-img" src=${project.img}></div>`
     projectHTML += someHTML;
  });

document.querySelectorAll('.bg').forEach(card =>
  card.addEventListener('mouseover', e=>{
    console.log(e.target)
  }));
