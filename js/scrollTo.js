scrollToElement = (element) => {
    let navHeight = document.querySelector('.page-nav').offsetHeight;

    if(window.innerWidth <= 960)
        navHeight = 0;

    const targetScroll = document.querySelector(element).offsetTop - navHeight;

    window.scroll(0, targetScroll);
}