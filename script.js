const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const moonIconUrl = "https://ik.imagekit.io/uko16m2rv/Moon.png?updatedAt=1750918124260";
const sunIconUrl = "https://ik.imagekit.io/uko16m2rv/Group%2021%20(1).png?updatedAt=1750918124187";


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.src = sunIconUrl;
  } else {
    themeIcon.src = moonIconUrl;
  }
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const target = link.getAttribute("href");

    if (target === "#about") {
      e.preventDefault();
      document.getElementById("home").classList.add("hidden");
      document.getElementById("about").classList.remove("hidden");
    } else if (target === "#home") {
      e.preventDefault();
      document.getElementById("about").classList.add("hidden");
      document.getElementById("home").classList.remove("hidden");
    }
  });
});