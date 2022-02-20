// LOTTI ANIMATION

var animation = bodymovin.loadAnimation({
  container: document.getElementById("crypto-lotti"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets1.lottiefiles.com/packages/lf20_2omr5gpu.json",
});

// MOBILE NAV

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const sr = ScrollReveal({
  distance: "50px",
  duration: 1300,
  // reset: true,
});

sr.reveal(`.heading-secondary`, {
  origin: "left",
  interval: 300,
  opacity: 0,
  easing: "ease-out",
});

sr.reveal(`.features-discription, .intro-discription, .work-discription`, {
  origin: "right",
  interval: 300,
  opacity: 0,
  easing: "ease-out",
});

sr.reveal(`.features-item, .intro-img-box, .work-item, .footer-wrapper`, {
  origin: "bottom",
  interval: 300,
  opacity: 0,
  easing: "ease-out",
});
