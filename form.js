// form.js

// Function to simulate LinkedIn auto-fill
function autoFillLinkedIn() {
  alert("Auto-filling data from LinkedIn (demo simulation)");

  // Dummy data fill
  document.getElementById("name").value = "Divya Thakur";
  document.getElementById("email").value = "divya.thakur@example.com";
  document.getElementById("phone").value = "9876543210";
  document.getElementById("education").value = "B.Tech in Computer Science, AKTU (2025)";
  document.getElementById("skills").value = "HTML, CSS, JavaScript, Python, Communication";
  document.getElementById("experience").value = "Intern at TechNova Pvt Ltd - Worked on frontend UI";
  document.getElementById("projects").value = "AI Resume Builder using HTML, CSS, JS";
}

// Save form data to localStorage
function saveFormData() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    education: document.getElementById("education").value,
    skills: document.getElementById("skills").value,
    experience: document.getElementById("experience").value,
    projects: document.getElementById("projects").value
  };

  localStorage.setItem("resumeData", JSON.stringify(formData));
  window.location.href = "templates.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("linkedinBtn").addEventListener("click", autoFillLinkedIn);
  document.getElementById("nextBtn").addEventListener("click", saveFormData);
});
