
const pageNav = document.querySelector('.page-nav');
const navBarBackground = document.querySelector('.page-nav-background');

const setPageNavPosition = () => {
    pageNav.style.top = `${window.innerHeight}px`;
    document.querySelector('#foo').innerHTML = window.innerHeight;
}

let scrollDirection = 'down';
let prevScrollY = window.scrollY;

window.addEventListener('scroll', () => {

    if(window.innerWidth > 960){

        if(window.scrollY > window.innerHeight / 4){
            pageNav.classList.add('page-nav-min');
            navBarBackground.classList.add('page-nav-background-min');
        }
        else{
            pageNav.classList.remove('page-nav-min');
            navBarBackground.classList.remove('page-nav-background-min');
        }
    }
    else{
        if(!pageNav.classList.contains('open')){
            if(window.scrollY - prevScrollY < 0)
                pageNav.style.transform = 'translate(-50%, calc(-100% - 140px))';
            else
                pageNav.style.transform = 'translate(-50%, calc(-100% - 80px))';

            prevScrollY = window.scrollY;
        }
        

    }
})

if(window.innerWidth <= 960){
    pageNav.addEventListener('click', () => {
        pageNav.classList.toggle('open');
    })
}