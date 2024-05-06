

// creating timeline
const tl = gsap.timeline()


// HOME PAGE REVEAL ANIMATIONS
 

// gsap animation for navbar
tl.from(".Header .links-box .logo, .Header .links-box .links-box-child .links-item, .Header .social-media-links .social-media-links-box .social-links", {
    y: -100,
    duration: 1,
    delay: .5,
    opacity: 0,
    stagger: 0.2
})

//gsap animation for web developer part in home 
tl.from(".center-box-leftchid-content .bg-color-txt", {
    x: -100,
    opacity: 0,
})

//gsap animation for three lines below web developer part in home
tl.from(".center-box-leftchid-content .main-txt, .center-box-leftchid-content .light-txt-info", {
    y: 100,
    opacity: 0,
    stagger:0.2
})

//gsap animation for see my works
tl.from(".btn-box", {
    x: 100,
    opacity: 0,
})

//gsap animation for black circle on thr right behind dude in home page
tl.from(".center-box-rightchild .background-cover", {
      y: 100,
      opacity: 0,
})

//gsap animation for the dude on the right
tl.from(".center-box-rightchild .home-img", {
    y: 100,
    opacity: 0,
    // scale: 0,
    opacity: 0
})

//gsap animation for the project created and experience
tl.from(".experience-box .number, .experience-box .text-box", {
    x: -100,
    opacity: 0,
    stagger: 0.2
})

//Second page below Home page
// Scrolltigeer ! important

tl.from(".center-box-right-child .header-txt", {
    x: -100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#works",
        start: "10% 30%",
        end: "18% 20%",
        scrub: 1,
        // markers: true,
    }
},'a')

tl.from(".center-box-right-child .brand-txt", {
    y: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#works",
        start: "12% 35%",
        end: "24% 20%",
        scrub: 1,
        // markers: true,
    }
},'a')

tl.from(".center-box-right-child .sub-brand-txt", {
    x: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#works",
        start: "15% 35%",
        end: "26% 20%",
        scrub: 1,
        // markers: true,
    }
},'a')

tl.from(".center-box-right-child .brand-info ", {
    y: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#works",
        start: "10% 35%",
        end: "25% 20%",
        scrub: 1,
        // markers: true,
        // pin: true,
    }
},'a')

tl.from(".project-heading", {
    x: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#kuchbhi",
        start: "10% 30%",
        end: "15% 20%",
        scrub: 1,
        ease: "power1.in"
        // markers: true,
    }
},'b')
tl.from(".project-card", {
    opacity:0,
    scrollTrigger: {
        trigger: "#kuchbhi",
        start: "15% 35%",
        end: "26% 20%",
        scrub: 1,
        ease: "power1.in"
        // markers: true,
    }
},'b')

// tl.from(".center-box-left-child  .project-box", {
//     y: 100,
//     opacity:0,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: "#works",
//         start: "10% 35%",
//         end: "25% 20%",
//         scrub: true,
//         markers: true,
        
//     }
// },'a')

// tl.from(".project-heading-txt-box, .project-heading-txt-box i, .project-box .project-info-txt", {
//     y: 100,
//     opacity:0,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: "#works",
//         start: "10% 35%",
//         end: "25% 20%",
//         scrub: true,
//         // markers: true,
        
//     }
// },'a')

// tl.from(".project-box .project-btn-box", {
//     x: -100,
//     opacity:0,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: "#works",
//         start: "10% 35%",
//         end: "25% 20%",
//         scrub: true,
//         // markers: true,
        
//     }
// },'a')