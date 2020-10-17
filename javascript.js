const scrollNav = document.querySelector('nav');
const Toggler = document.querySelector('#menu-btn');
const ul = document.querySelector('.nav-links');



// console.log(scrollNav)
window.addEventListener("scroll", function () {
    var logo = this.document.querySelector(".company-logo a");
    var header = this.document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("sticky", window.scrollY > 0);
})

Toggler.addEventListener("click", dropDown);
function dropDown() {
    Toggler.classList.toggle("open");
    ul.classList.toggle("open");
}


    const mobileMenuItems = document.querySelectorAll(".nav-links li");
    // console.log(mobileMenuItems)
    mobileMenuItems.forEach((i) => {
        i.addEventListener("click", () => {
            ul.classList.remove("open");
            Toggler.classList.remove("open");
        });
    });
