
export const dropBox = () => {
    const movies = document.querySelector('.menu__list-item--dropDown'),
    headerDropDownMovie = document.querySelector('.header__dropDown'),
    headerWrapper = document.querySelector('.header__flex-wrapper'),
    body = document.querySelector('.body'),
    dropDownMovie = document.querySelector('.header__dropDownMovie');

    movies.addEventListener('mouseover', () => {
        headerDropDownMovie.classList.add('header__dropDown--active');
        headerWrapper.classList.add('header__flex-wrapper--active');

    })

    // хотелось бы конечно чтобы оно исчезало если мышь уводят с блока  а не по клику
    body.addEventListener('click', () => {
        headerDropDownMovie.classList.remove('header__dropDown--active');
        headerWrapper.classList.remove('header__flex-wrapper--active');
    })  
}


