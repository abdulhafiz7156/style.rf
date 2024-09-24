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


// filter
let status = false
const button = document.querySelector('.search__filter-btn')
const content = document.querySelector('.search__popup')



button.addEventListener('click', ()=> {
  if (status === false) {
    content.style.display = 'block'
    status = true
  } else {
    content.style.display = 'none'
    status = false

  }
})
