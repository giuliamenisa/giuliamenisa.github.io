var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("langueges").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("skills").style.display = "none";
}

function show(id) {
  document.getElementById("skills").style.display = "block";
}

function dislpayHome() {
  hideAllPages();
  show("home");
}
function displaySkills() {
  hideAllPages();
  console.warn("trebuie sa afisam skills page");
  show("skills");
}
function displayLanguages() {
  hideAllPages();
  show("languages");
}
function displayProject() {
  hideAllPages();
  show("project");
}

dislpayHome();
