scrollToElement = (element) => {
    const navHeight = document.querySelector('.page-nav').innerHeight;
    const targetScroll = document.querySelector(element).offsetTop;

    window.scroll(0, targetScroll);
}