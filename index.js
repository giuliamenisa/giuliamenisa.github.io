var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 3 },
  { name: "Drive", endorcements: 2 },
];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  console.info(skills[i].endorcements);
  skillsHTML +=
    "<li>" + skills[i].name + " - " + skills[i].endorcements + "</li>";
}

skillsEl.innerHTML = skillsHTML;

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
