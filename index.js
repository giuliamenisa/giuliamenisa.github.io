var skillsEl = document.getElementById("skills-list");

var skills = [];

var r1 = fetch("skills.json");
r1.then(function (raspuns) {
  var r2 = raspuns.json();
  console.warn("gata", r2);

  r2.then(function (r3) {
    console.warn("skills", skills);
  });
});
console.warn("r1", r1, skills);

function displaySkills(skills) {
  var skillsHTML = skills.map(function (skills) {
    return `<li>${skillsname} - <span>${skill.endorcements}</span></li>`;
  });
}

var pagesIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    console.info("inside for each", page.id);
    hide(page.id);
  });
  pagesIds.forEach(function (pageId) {
    hide(pageId);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  console.warn("init menu");

  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        //var id = e.target.getAttribute("data-page");
        var id = e.target.dataset.page;
        displayPage(id);
      }
    });
}

displayPage("skills");
initMenu();
