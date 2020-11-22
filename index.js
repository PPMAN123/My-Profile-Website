const triggerFadeIn = () =>{
    const allHiddenElements = document.querySelectorAll('.hidden');
    allHiddenElements.forEach((hiddenElement, index) => {
        setTimeout(() => {
            hiddenElement.style.opacity = 1
            hiddenElement.style.transform='translateY(0px)'
        }, index*100);
    });
}

const toggleMobileNav = (e) => {
    e.preventDefault();
    const mobileNav = document.querySelector('.mobile-nav');
    if(mobileNav.classList.contains('show')){
        //shown on the page
        mobileNav.classList.remove('show');
    }else{
        //when it's hidden, and now is open
        mobileNav.classList.add('show');
    }
}

const attachMobileNavButton = () =>{
    const mobileNavAnchors = document.querySelectorAll('.mobile-nav-anchor')
    mobileNavAnchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMobileNav);
    });
}

const attatchOnSubmitToForm = () =>{
    const form = document.querySelector('form.contact-form');
    if(form){form.addEventListener('submit' , e =>{
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const message = form.querySelector('[name="message"]').value;
        window.open(`mailto:ethan.zhou0504@gmail.com?subject=FeedBack From ${name}&body=${message}`)
    })}
}

attachListenerToWindowUnload = () =>{
    window.addEventListener('beforeunload' , e =>{
        e.preventDefault();
        e.returnValue = 'Benis';
    })
}

window.onContactFormSubmit = token =>{
    console.log(token);
    const form = document.querySelector('form.contact-form');
    if(form){
        form.submit();
    }
}

const hideheaderArea = () =>{
    const headArea = document.querySelector('.header-area');
    headArea.classList.add('hide');
}

const showHeaderArea = () =>{
    const headArea = document.querySelector('.header-area');
    headArea.classList.remove('hide');
}

const attachListenerToScroll = () =>{
    let lastScrollPosition = 0;
    const scrollHandler = e =>{
            console.log(e);
            const currentScrollPosition = window.scrollY;
            if(currentScrollPosition > lastScrollPosition){
                hideheaderArea();
            }else{
                showHeaderArea();
            }
            lastScrollPosition = currentScrollPosition;
    }
    const throttledScrollHander = _.throttle(scrollHandler, 300);
    window.addEventListener('scroll' , throttledScrollHander);
}

const requestForImage = () =>{
    const requestPromise = axios.get('https://picsum.photos/200/300');
    requestPromise.then(response =>{
        const content = response.data;
        console.log(content);
    }).catch(error => {
        console.error(error);
    })
}

const handleLocationSearchSuccess = position =>{
    const {coords} = position;
    const {longitude, latitude} = coords;

    window.open(`https://www.google.com/maps/place/${latitude},${longitude}`)
    alert(`you are at lon:${longitude}, lat:${latitude}`)
}

const handleLocationSearchFailed = () =>{
    alert('y u no trust us')
}

const getLocation = () =>{
    if(!navigator.geolocation){
        alert('GET FUCKING CHROME YOU PLEB SHIT')
    }else{
        navigator.geolocation.getCurrentPosition(handleLocationSearchSuccess, handleLocationSearchFailed);
    }
}

window.onload = function(){
    triggerFadeIn();
    attachMobileNavButton();
    attatchOnSubmitToForm();
    attachListenerToScroll();
    getLocation();
    // attachListenerToWindowUnload();
    // alert("boo");
}

//HTTP requests
//1. GET
//2. POST
//3. DELETE
//4. PATCH

//global browser functions
//window.document = the entire html document
//