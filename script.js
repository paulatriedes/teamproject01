document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;
    const slideWidth = slides.children[0].clientWidth;

    function showSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        const offset = -index * slideWidth;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Show the first slide on page load
    showSlide(currentIndex);

    // Set up the auto-slide interval
    setInterval(function () {
        nextSlide();
    }, 3000);
});
