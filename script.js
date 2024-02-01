// gsap.to("#box",{
//     x: 1000,
//     y:200,
//     duration:2,
//     delay:1,

// })

// gsap.from("#box",{
//     x: 1000,
//     y:200,
//     duration:2,
//     delay:1,

// })

var tl = gsap.timeline()

tl.from("h3",{
    y:-200,
    duration:0.8,
    delay:0.5,
    stagger:1,
    opacity:0
})

tl.from("h1",{
    x:-200,
    duration:0.8,
    delay:0.5,
    stagger:1,
    opacity:0
})

tl.from("img",{
    x:200,
    duration:0.8,
    delay:0.5,
    stagger:1,
    opacity:0
})