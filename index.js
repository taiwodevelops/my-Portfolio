document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); // Stagger the animations by 300ms
    });
});