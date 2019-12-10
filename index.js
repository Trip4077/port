// Project Tech Stack Logic

const moreInfoArr = document.querySelectorAll('.project span');
const projects = document.querySelectorAll('.project');

for(let i = 0; i < moreInfoArr.length; i++) {
    moreInfoArr[i].addEventListener('click', () => {
        projects[i].children[4].classList.toggle('display');
    });
}

// Typing Animation - Header

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 25
});

// Skills Accordian

const skillHeaders = document.querySelectorAll('.subtitle');
const skillRows = document.querySelectorAll('.skills-row');

for(let i = 0; i < skillHeaders.length; i++) {
    skillHeaders[i].addEventListener('click', () => {
        skillRows[i].classList.toggle('display');
    });
}
console.log(skillRows)