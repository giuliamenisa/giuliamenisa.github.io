var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("langueges").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function dislpayHome() {
  hideAllPages();
  document.getElementById("home").style.display = "block";
}
function displaySkills() {
  hideAllPages();
  console.warn("trebuie sa afisam skills page");

  document.getElementById("skills").style.display = "block";
}
function displayLanguages() {
  hideAllPages();
  document.getElementById("languages").style.display = "block";
}
function displayProject() {
  hideAllPages();
  document.getElementById("project").style.display = "block";
}

dislpayHome();
