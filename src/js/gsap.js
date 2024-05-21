import { gsap } from "gsap";

gsap.to(".box", {
    x: '80vw',
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'power3.inOut'

})