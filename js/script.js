// Navigation Toggle for Mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Show Project Details in a Modal
const projectModal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.querySelectorAll(".close-modal");

function showProjectDetails(projectId) {
  // You can replace this with real project data
  const projects = [
    {
      title: "Project One",
      description:
        "Detailed description for Project One. This project focuses on responsive design and includes various features.",
      technologies: "HTML, CSS, JavaScript",
    },
    // Add more projects as needed
  ];

  const project = projects[projectId - 1];
  if (project) {
    modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p><strong>Technologies Used:</strong> ${project.technologies}</p>
        `;
    projectModal.style.display = "block";
  }
}

// Close Modal
closeModal.forEach((button) => {
  button.addEventListener("click", () => {
    projectModal.style.display = "none";
  });
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
const thankYouModal = document.getElementById("thank-you-modal");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Display the thank you modal
  document.getElementById("submission-details").innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `;
  thankYouModal.style.display = "block";

  // Reset the form
  contactForm.reset();
});

// Close Thank You Modal
const closeThankYouModal = thankYouModal.querySelector(".close-modal");
closeThankYouModal.addEventListener("click", () => {
  thankYouModal.style.display = "none";
});
