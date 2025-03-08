let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = document.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    let itemOld = document.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    let itemOld = document.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)
}

let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') 
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') 
})
