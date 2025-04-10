document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".banner-item");
    const totalSlides = slides.length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        const offset = -index * 100;
        document.querySelector(".banner-carrousel").style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", function () {
        showSlide(index + 1);
    });

    prevButton.addEventListener("click", function () {
        showSlide(index - 1);
    });

    // Auto-slide a cada 5 segundos
    setInterval(() => showSlide(index + 1), 5000);
});
