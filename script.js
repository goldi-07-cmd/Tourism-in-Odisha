document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    // Smooth scrolling to section on click
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: "smooth"
            });
        });
    });
});
