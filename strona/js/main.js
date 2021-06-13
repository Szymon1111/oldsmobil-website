const navBar = document.querySelector('.page-nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight - navBar.offsetHeight)
        navBar.classList.add('page-nav-min')
    else
        navBar.classList.remove('page-nav-min')


})