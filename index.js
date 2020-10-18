const triggerFadeIn = () =>{
    const allHiddenElements = document.querySelectorAll('.hidden');
    allHiddenElements.forEach((hiddenElement, index) => {
        setTimeout(() => {
            hiddenElement.style.opacity = 1
            hiddenElement.style.transform='translateY(0px)'
        }, index*100);
    })
}

const toggleMobileNav = (e) => {
    e.preventDefault();
    const mobileNav = document.querySelector('.mobile-nav');
    if(mobileNav.classList.contains('show')){
        //shown on the page
        mobileNav.classList.remove('show');
    }else{
        //when it's hidden, and now is clicked
        mobileNav.classList.add('show');
    }
}

const attachMobileNavButton = () =>{
    const mobileNavAnchors = document.querySelectorAll('.mobile-nav-anchor')
    mobileNavAnchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMobileNav);
    });
}

window.onload = function(){
    triggerFadeIn();
    attachMobileNavButton();
}