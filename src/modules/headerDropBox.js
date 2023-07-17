
export const dropBox = () => {
    const movies = document.querySelector('.menu__list-item--dropDown'),
    headerDropDownMovie = document.querySelector('.header__dropDown'),
    headerWrapper = document.querySelector('.header__flex-wrapper');


    movies.addEventListener('mouseover', () => {
        headerDropDownMovie.classList.add('header__dropDown--active');
        headerWrapper.classList.add('header__flex-wrapper--active');

    })

    headerDropDownMovie.addEventListener('mouseout', () => {
        headerDropDownMovie.classList.remove('header__dropDown--active');
        headerWrapper.classList.remove('header__flex-wrapper--active');
    })
    
}


