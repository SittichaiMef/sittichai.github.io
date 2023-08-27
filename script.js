let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Computer Programmer', 'Software Tester'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,

})
//let navLinks = document.querySelectorAll('nav ul li a')

//let sections = document.querySelectorAll('section')

//window.addEventListener('scroll', function (){
//const scrollPos = window.scrollY
//sections.forEach(section => {
//if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
//navLinks.forEach(link => {
//link.classList.remove('active');
//if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
//link.classList.add('ative')
// }
// });
// }
//});
//});

function functionToActiveNav(element) {
    const elements_a = document.querySelectorAll('.nav-li-manu-a');
    elements_a.forEach((element_li_a) => {
        element_li_a.classList.remove('active');
    });
    let children = element.querySelector('a')
    children.classList.add("active");
    
}
