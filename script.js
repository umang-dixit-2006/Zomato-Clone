// script.js

// Simulated animation on input focus
document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('main input');

    inputBox.addEventListener('focus', () => {
        inputBox.style.backgroundColor = "#fff5f5";
    });

    inputBox.addEventListener('blur', () => {
        inputBox.style.backgroundColor = "#fff";
    });
});

// Simulated user interaction animation
document.querySelectorAll('.logo ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = "scale(1.05)";
        link.style.transition = "transform 0.2s";
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = "scale(1)";
    });
});
