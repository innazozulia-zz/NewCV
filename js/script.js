let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
// let icon = document.querySelector(".fa-solid");
// let sidebar = document.querySelector(".fas");
// let html = document.querySelector(".fa-html5");
// let css = document.querySelector(".fa-css3");
// let js = document.querySelector(".fa-js");
// let sass = document.querySelector(".fa-sass");
// let bootstrap = document.querySelector(".fa-bootstrap");
// let gulp = document.querySelector(".fa-gulp");
// let git = document.querySelector(".fa-github-square");
// let npm = document.querySelector(".fa-npm");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
//    icon.classList.toggle("dark-icon");
//    sidebar.classList.toggle("dark-icon");
//    html.classList.toggle("dark-icon");
//    css.classList.toggle("dark-icon");
//    js.classList.toggle("dark-icon");
//    sass.classList.toggle("dark-icon");
//    bootstrap.classList.toggle("dark-icon");
//    gulp.classList.toggle("dark-icon");
//    git.classList.toggle("dark-icon");
//    npm.classList.toggle("dark-icon");
// }

window.onscroll = () => {
  if (window.innerWidth < 991) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }

  document.querySelectorAll("section").forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll(".header .navbar a").forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
