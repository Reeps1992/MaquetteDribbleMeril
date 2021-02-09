'use strict'

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementsByClassName('search-btn')[0];

searchBtn.addEventListener('click', () => {
    if (!searchInput.classList.contains('search-active')) {
        searchBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
    else {
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    }
    searchInput.classList.toggle('search-active');
});

const form = document.getElementsByTagName('form');
form[0].addEventListener('submit', (e) => {
    e.preventDefault();
    searchInput.classList.toggle('search-active');
});

/* Problème : le document scroll quand je rentre quelque chose dans les inputs //TODO

const sections = document.getElementsByClassName('wheel-anchor');
var scrollLength = sections.length;
var currentView = 0;

window.addEventListener('keypress', () => {
    currentView += 1;
    if (currentView === scrollLength) {
        currentView = 0;
    }
    let newCoord = sections[currentView].offsetTop;
    window.scroll(0 ,newCoord);
})

*/
