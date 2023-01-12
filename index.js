var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
  hide("home");
  hide("languages");
  hide("projects");
  hide("skills");
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayHome() {
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

displayHome();
