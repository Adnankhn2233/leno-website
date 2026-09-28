document.addEventListener('DOMContentLoaded',function (){

    // mobile menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active')
    });

    //video modal 

    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    //open modal when clicked 
    videoButton.addEventListener('click', function () {

        //show the modal 
        modal.style.display = 'block';

        //replace the src  with the video url 
        videoPlayer.src = 'https://www.youtube.com/embed/3LRZRSIh_KE?start=1008';

        // close modal on the close button
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            videoPlayer.src = '';

        })

        //close modal on the click outter
        window.addEventListener('click', function(event) {
            if(event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        })

    window.addEventListener   


    })
})

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
     console.log(window.scrollY);

    if(window.scrollY > 0)
    {
        navbar.classList.add('navbar--scroll');
    }else {
        navbar.classList.remove('navbar--scroll');
    }
})


// animation of the website 


gsap.from(".navbar__logo", {
    y : -100,
    duration : 1,
})

gsap.from(".navbar__menu", {
    y : -100, 
    duration : 1, 
    delay : 1

})

gsap.from(".hero__title", {
    z: -500,
    opacity: 0,
    duration: 2,
    delay : 2,
    ease: "power3.out"
});

gsap.from(".hero__description", {
    z : -500,
    opacity: 0,
    duration: 1,
    delay: 3,
    ease: "power3.out"
})

gsap.from(".hero__buttons", {
    y : 300,
    opacity : 0,
    duration: 1,
    delay : 4,
})

gsap.from(".hero__image", {
    x : 500,
    opacity : 0,
    duration: 1,
    delay: 5

})



// Testimonials animation
gsap.from(".testimonials__card", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    delay:0.25,
    stagger: 0.25,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
    }
});


// preview 

const previewTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".preview",
        start: "top 75%",
        toggleActions: "play reverse play reverse"
    }
});

previewTl
    .from(".preview__title", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8
    })
    .from(".preview__description", {
        scale: 0.8,
        opacity: 0,
        duration: 0.7
    }, "-=0.3")
    .from(".preview__image-container", {
        scale: 0.8,
        opacity: 0,
        duration: 1
    }, "-=0.3");



const detailTl = gsap.timeline({
    scrollTrigger: {
        trigger:".details__grid",
        start : "top 75%",
        toggleActions:"play reverse play reverse",
        
    }
})

detailTl
     .from (".details__grid-image",{
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger:0.5
     },"-=0.3")
     .from(".details__grid-content",{
        scale: 0.8,
        opacity:0,
        duration:0.9,
        stagger:0.5
     },"-=0.3")


