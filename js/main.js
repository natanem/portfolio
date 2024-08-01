// document.querySelector("video").play()
const goUpEl = document.querySelector(".go-up");

const options = {
  //   rootMargin: "50px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.style.translate = 0;
    }
  });
}, options);

observer.observe(document.querySelector(".form"));

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    goUpEl.classList.remove("hide");
  } else {
    goUpEl.classList.add("hide");
  }
});
goUpEl.addEventListener("click", () => {
  console.log("clicked");
  window.scrollTo(0, 0);
});
