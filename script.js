document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        form.reset();
    });

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        box.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
