import { gsap } from "gsap";


var tl = gsap.timeline()


// hero image
tl.to(".hero-img",  {
    opacity: 1,
    y: 0,
    duration: 2,
    scale: 1,
} )



// Second Timeline for Hero Text
var secondTl = gsap.timeline()

secondTl.fromTo(".hero-h1", {x: 100, opacity: 0}, {
    opacity: 1,
    x: 0,
})

// hero text
secondTl.fromTo(".hero-text", {x: 100, opacity: 0}, {
    opacity: 1,
    x: 0,
})


// hero buttons
secondTl.fromTo(".hero-btn", {opacity: 0,}, {
    opacity: 1,
    y: 0,
})