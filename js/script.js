let nav = document.querySelector('nav');
let red =document.querySelector('.red')
let navUl = document.querySelector('.navUl');
let xmark = document.querySelector('.xmark');

window.addEventListener('scroll', ()=>{
    nav.classList.toggle('navbar', window.scrollY > 0)
    red.classList.toggle('noir', window.scrollY > 0)
})


let bars = document.querySelector('#bars');

    bars.addEventListener('click', ()=>{
        navUl.style.display = 'flex';
    })

    xmark.addEventListener('click', ()=>{
        navUl.style.display = 'none'
    })


    let login = document.querySelector('.header-login');
    let connexion = document.querySelector('.fa-user');
    let loginXmark = document.querySelector('.login-xmark');

        connexion.addEventListener('click', ()=>{
            login.style.display = "flex"
            
        } )

        loginXmark.addEventListener('click', ()=>{
            login.style.display = "none"
            
        } )
/* INFO*/ 
const xmarks = document.querySelector('.icon-xmark');
const topInfo = document.querySelector('.top-info');
const infoCircle = document.querySelector('.icon-info-circle');


infoCircle.addEventListener('click',  ()=>{
    topInfo.style.display = 'flex'
})
xmarks.addEventListener('click', ()=>{
   topInfo.style.display = "none"
})
/* show scroll up*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//scrollreveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.header-center-left`, {delay: 800,origin:'top'})
sr.reveal(`.header-center-right`, {delay: 700,origin:'top'})
sr.reveal(`.apropos-left`, {origin:'left'})
sr.reveal(`.apropos-right`, {origin:'right'})
sr.reveal(`.skills-rows1`, {delay: 800, origin: 'bottom', interval: 100})
sr.reveal(`.skills-rows2`, {delay: 700, origin: 'bottom', interval: 100})
sr.reveal(`.skills-rows3`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills-rows4`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.skills-rows5`, {delay: 400, origin: 'bottom', interval: 100})
sr.reveal(`.skills-rows6`, {delay: 300, origin: 'bottom', interval: 100})
sr.reveal(`.skills-right`, {origin:'right'})
sr.reveal(`.service-container`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.work-container`)
sr.reveal(`.temoignage-container`)
sr.reveal(`.footer`, {origin:'bottom'})
