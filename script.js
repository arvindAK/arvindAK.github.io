const projects = [
  {title: "Random Quote Generator",
  description: "Displays a quote from an array of 10 quotes and changes the background colour every 30 seconds or on the users click.",
  link: "https://arvindak.github.io/THFS-Project1_QuotesDisplay/#",
  projectNumber: 1
  },

  {title: "Pagination and dynamic filtering",
  description: "Dynamicly search and filtering a dataset of students.",
  link: "https://arvindak.github.io/THFS-Project2_Pagination/#",
  projectNumber: 2
  },

  {title: "Form validation",
  description: "Using client side validation that provides real timeout feedback to the user.",
  link: "https://arvindak.github.io/THFS-Project3_InteractiveForm/#",
  projectNumber: 3
  },

  {title: "Tic-Tac-Toe",
  description: "Play against a local player or your computer.",
  link: "https://arvindak.github.io/THFS-Project4_Tic-Tac-Toe/#",
  projectNumber: 4
  },

  {title: "API Awesome Employee Fetching",
  description: "Fetch 12 users from an API, diplay them in cards and use modals to inspect each card.",
  link: "https://arvindak.github.io/THFS-Project5_API/#",
  projectNumber: 5
  }
];


(function(){
  let projectHTML = [];
  projects.reverse().forEach(project =>{
    let someHtml = `
      <div class="flip3D item${project.projectNumber}">
        <div class="back">
          <h2 class="project-title">${project.title}</h2>
          <p class="sub-heading">Treehouse project ${project.projectNumber}</p>
          <p>${project.description}</p>
          <a href=${project.link} class="button">Visit Project ${project.projectNumber}</a>
        </div>
        <div class="front">
        </div>
      </div>`;
    projectHTML += someHtml;
  })
  document.querySelector('.wrapper').insertAdjacentHTML('afterBegin', projectHTML);
})()
