const hiddenElements_left = document.querySelectorAll(".hidden-l");
const hiddenElements_rifth = document.querySelectorAll(".hidden-r");
const hiddenElements_botton = document.querySelectorAll(".hidden-b");
const hiddenElements_top = document.querySelectorAll(".hidden-t");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

hiddenElements_left.forEach((element) => observer.observe(element));
hiddenElements_rifth.forEach((element) => observer.observe(element));
hiddenElements_botton.forEach((element) => observer.observe(element));
hiddenElements_top.forEach((element) => observer.observe(element));
