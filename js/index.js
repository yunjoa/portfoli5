/* Logo to header animation */
let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 0,
    end: () => window.innerHeight * 0.2,
    scrub: 0.6,
  },
});
logoTl.fromTo(
  ".logo",
  {
    top: "15vw",
    yPercent: -50,
    scale: 1.7,
  },
  {
    top: "2vw",
    yPercent: 0,
    scale: 1,
    duration: 0.8,
  }
);

const menuProject = document.querySelector(".menu-project");
const menuAbout = document.querySelector(".menu-about");
const messageWrap = document.querySelector(".message-wrap");
const introWrap = document.querySelector(".intro-wrap");
const menuWrap = document.querySelector(".menu-wrap");

document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop;
});


window.onload = function () {
  window.addEventListener("scroll", () => {
    // let currentScrollValue = document.documentElement.scrollTop;
    let currentScrollValue = window.pageYOffset;
    
    // if (currentScrollValue > screen.height) {
    if (currentScrollValue > introWrap.clientHeight) {
      menuWrap.classList.add("hide");
    } else {
      menuWrap.classList.remove("hide");
    }
  });
};


menuProject.addEventListener("click", () => {
  console.log("0");
  const project = document.querySelector(".project-wrap");
  project.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

menuAbout.addEventListener("click", () => {
  console.log("1");
  const about = document.querySelector(".about-wrap");
  about.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  console.log("찍혀?로고?");
  window.scrollTo(0, 0, {
    behavior: "smooth",
    block: "start",
  });
});



