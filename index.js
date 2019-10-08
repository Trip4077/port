const moreInfoArr = document.querySelectorAll('.project span');
const projects = document.querySelectorAll('.project');
console.log(projects[1].children)

for(let i = 0; i < moreInfoArr.length; i++) {
    moreInfoArr[i].addEventListener('click', () => {
        projects[i].children[4].classList.toggle('display');
    });
}

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 25
});
