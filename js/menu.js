const hamMenuBtn = document.querySelector('.menu__contenido-links-imagenes'); //header__main-ham-menu-cont
const smallMenu = document.querySelector('.menu__sub-nav'); //header__sm-menu
const headerHamMenuBtn = document.querySelector('.menu_contenido-menu'); //header__main-ham-menu
const headerHamMenuCloseBtn = document.querySelector('.menu_contenido-cerrar'); //header__main-ham-menu-close
const headerSmallMenuLinks = document.querySelectorAll('.menu__list__item-sub'); //header__sm-menu-link

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('menu__sub-nav--active')) {
        smallMenu.classList.remove('menu__sub-nav--active')
    } else {
        smallMenu.classList.add('menu__sub-nav--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    } else {
        headerHamMenuBtn.classList.add('d-none')
        headerHamMenuCloseBtn.classList.remove('d-none')
    }
    })

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('menu__sub-nav--active')
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    })
}