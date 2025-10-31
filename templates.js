document.addEventListener("DOMContentLoaded", () => {
  const templatesGrid = document.getElementById("templatesGrid");

  // Template data — yahan images aur names likhe hain
  const templates = [
    { id: 1, name: "Modern Blue", preview: "https://via.placeholder.com/250x350?text=Template+1" },
    { id: 2, name: "Minimal White", preview: "https://via.placeholder.com/250x350?text=Template+2" },
    { id: 3, name: "Elegant Gray", preview: "https://via.placeholder.com/250x350?text=Template+3" },
  ];

  // Ye loop sab templates ko page pe add karega
  templates.forEach((temp) => {
    const div = document.createElement("div");
    div.classList.add("template-box");
    div.setAttribute("data-id", temp.id);

    div.innerHTML = `
      <img src="${temp.preview}" alt="${temp.name}">
      <h3>${temp.name}</h3>
    `;

    templatesGrid.appendChild(div);
  });

  // Ab har template click hone par select hoga
  const templateBoxes = document.querySelectorAll(".template-box");

  templateBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const id = box.getAttribute("data-id");
      selectTemplate(id);
    });
  });
});

// Pehle se likha hua selectTemplate() function
function selectTemplate(templateId) {
  localStorage.setItem("selectedTemplate", templateId);
  window.location.href = "preview.html";
}
