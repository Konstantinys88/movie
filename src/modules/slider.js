
export const slider = () => {
    const sliderWrapper = document.querySelector('.slider__wrapper'),
        sliderInner = document.querySelector('.slider__inner'),
        sliderItem = document.querySelectorAll('.slider__item'),
        back = document.querySelector('.slider__btn--back'),
        next = document.querySelector('.slider__btn--next');

    let offset = 0;

    const width = window.getComputedStyle(sliderWrapper).width;

    sliderInner.style.width = 100 * sliderItem.length + "%";

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (sliderItem.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`
    });

    back.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (sliderItem.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`
    });








}