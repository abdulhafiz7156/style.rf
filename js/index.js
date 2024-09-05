const slider = document.querySelector('.articles__block__cards');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');

function updateButtonVisibility() {
    if (slider.scrollLeft > 0) {
        prevButton.style.display = 'block';
    } else {
        prevButton.style.display = 'none';
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

nextButton.addEventListener('click', () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: 'smooth'
    });
});

slider.addEventListener('scroll', updateButtonVisibility);

// Initial check to set button visibility
updateButtonVisibility();


// it is code of header menu burger

document.getElementById('burgerMenu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('mobileMenu').classList.toggle('active');
});
// it is code of header menu burger
