// scripts.js

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.logo {
    height: 50px;
}

.auth-links {
    display: flex;
    gap: 20px;
}

.auth-links a {
    text-decoration: none;
    color: #4a90e2;
    font-weight: bold;
}

.auth-links a:hover {
    text-decoration: underline;
}

.country-selector {
    margin-top: 10px;
    text-align: right;
}

.country-selector label {
    margin-right: 10px;
}

.country-selector select {
    padding: 5px;
    font-size: 14px;
}