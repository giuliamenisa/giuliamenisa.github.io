var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

var pagesIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
  pagesIds.forEach(function (pageId) {
    hide(pageId);
  });
  // hide("home");
  // hide("languages");
  // hide("projects");
  // hide("skills");
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPages(id) {
  hideAllPages();
  show(id);
}

displayPages("home");
