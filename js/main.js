const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const DDM = document.querySelector(".dropDownMenu")


const DDMUL = document.createElement('ul')
DDMUL.setAttribute('class', 'ddm')
const DDMLI1 = document.createElement('li')
DDMLI1.setAttribute('class', 'navbar_item')
const DDMLI1A = document.createElement('a')
DDMLI1A.setAttribute('class', 'navbar_links')
DDMLI1A.setAttribute('href', 'dokumentacija.pdf')
const DDMLI1Atext = document.createTextNode('Dokumentacija')
const DDMLI2 = document.createElement('li')
DDMLI2.setAttribute('class', 'navbar_item')
const DDMLI2A = document.createElement('a')
DDMLI2A.setAttribute('class', 'navbar_links')
DDMLI2A.setAttribute('href', 'autor.html')
const DDMLI2Atext = document.createTextNode('Autor')

DDMLI1A.appendChild(DDMLI1Atext)
DDMLI2A.appendChild(DDMLI2Atext)

DDMLI1.appendChild(DDMLI1A)
DDMLI2.appendChild(DDMLI2A)

DDMUL.appendChild(DDMLI1)
DDMUL.appendChild(DDMLI2)

DDM.appendChild(DDMUL)

$('.dropDownMenu ul').hide();

