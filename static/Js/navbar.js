var iconMenu = document.querySelector('.menu-icons')
var spansBurger = document.querySelectorAll('.burger-menu')
var items = document.querySelector('.links-tab')
iconMenu.addEventListener('click',()=>{
    spansBurger[0].classList.toggle('icon')
    spansBurger[1].classList.toggle('hide')
    spansBurger[2].classList.toggle('icon')

    items.classList.toggle('height-added');
})