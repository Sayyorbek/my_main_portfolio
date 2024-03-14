let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scrooll-down',{delay:500, origin:'right'});


 let text = document.getElementsByTagName('h1') [0],    
 hero = document.querySelector('.hero'),       
 btn = document.querySelectorAll('#btn')[0]    
function hover() { 
    text.textContent = 'hi my name is Enlur' 
} 
text.addEventListener('mouseenter', hover) 
text.addEventListener('mouseleave', function () {
    this.textContent = 'Sayyorbek'
})
