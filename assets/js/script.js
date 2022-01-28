document.addEventListener("DOMContentLoaded", () => {

    const mobileNavigation = document.querySelector('.wrapper-mobile-nav')
    document.querySelector('.more-mobile-nav').addEventListener('click', (e) => {
        mobileNavigation.classList.toggle('show-mobile-nav')
    })

    document.querySelector('.more-mobile-nav-close').addEventListener('click', (e) => {
        mobileNavigation.classList.toggle('show-mobile-nav')
    })
})