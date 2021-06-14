const navBar = document.querySelector('.page-nav');
const navBarBackground = document.querySelector('.page-nav-background');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        navBar.classList.add('page-nav-min');
        navBarBackground.classList.add('page-nav-background-min');
    }
    else{
        navBar.classList.remove('page-nav-min');
        navBarBackground.classList.remove('page-nav-background-min');
    }
        


})