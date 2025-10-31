// preview.js

function loadResume() {
  const data = JSON.parse(localStorage.getItem("resumeData"));
  const templateId = localStorage.getItem("selectedTemplate");

  if (!data) {
    alert("No resume data found! Please fill the form first.");
    window.location.href = "form.html";
    return;
  }

  // Display template design (simple simulation)
  document.getElementById("resumeName").innerText = data.name;
  document.getElementById("resumeEmail").innerText = data.email;
  document.getElementById("resumePhone").innerText = data.phone;
  document.getElementById("resumeEducation").innerText = data.education;
  document.getElementById("resumeSkills").innerText = data.skills;
  document.getElementById("resumeExperience").innerText = data.experience;
  document.getElementById("resumeProjects").innerText = data.projects;

  document.getElementById("templateId").innerText = "Template: " + templateId;
}

// Simulate AI suggestions
function showAISuggestions() {
  const suggestions = [
    "Add more action verbs to your experience section.",
    "Keep skills in bullet points for better readability.",
    "Use numbers or results in your achievements.",
    "Add a short professional summary on top."
  ];
  alert("💡 AI Suggestions:\n\n" + suggestions.join("\n"));
}

// Simulate ATS score
function showATSScore() {
  const score = Math.floor(Math.random() * (95 - 65 + 1)) + 65; // random 65–95%
  alert("📊 Your ATS Score: " + score + "%");
}

document.addEventListener("DOMContentLoaded", () => {
  loadResume();

  document.getElementById("aiBtn").addEventListener("click", showAISuggestions);
  document.getElementById("atsBtn").addEventListener("click", showATSScore);
});
