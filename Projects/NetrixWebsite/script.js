function locomotivecode(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
locomotivecode()

function init(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()

function page1Gsap(){
var tl1 = gsap.timeline()

tl1.from("#text h1",{
    y: 100,
    opacity:0,
    stagger:0.1,
    delay:0.5
})
tl1.from("#nav img, #nav a, #img-div",{
    y: -100,
    opacity: 0,
})
}
page1Gsap()

function page2Gsap(){
    
gsap.from("#text1, #video1, #first-container",{
    y:40,
    opacity:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub: 2
    }
})
gsap.to("#first-border",{
    left:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 60%",
        scrub: 3.6
    }
})

gsap.from("#second-text, #second-video, #second-container",{
    y:40,
    opacity:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -50%",
        end:"top -120%",
        scrub: 2
    }
})

gsap.to("#second-border",{
    left:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -60%",
        end:"top -60%",
        scrub: 3.6
    }
})

gsap.from("#third-text, #third-video, #third-container",{
    y:40,
    opacity:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -160%",
        end:"top -230%",
        scrub: 2
    }
})

gsap.to("#third-border",{
    left:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -170%",
        end:"top -170%",
        scrub: 3.6
    }
})

gsap.from("#fourth-text, #fourth-video, #fourth-container",{
    y:40,
    opacity:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -300%",
        end:"top -370%",
        scrub: 2
    }
})

gsap.to("#fourth-border",{
    left:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -310%",
        end:"top -310%",
        scrub: 3.6
    }
})

gsap.from("#fifth-text, #fifth-video, #fifth-container",{
    y:40,
    opacity:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -430%",
        end:"top -500%",
        scrub: 2
    }
})

gsap.to("#fifth-border",{
    left:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top -440%",
        end:"top -440%",
        scrub: 3.6
    }
})
}
page2Gsap()


function page3event(){
    
var first = document.querySelector("#f1")
var ft = document.querySelector("#ft")
var fd = document.querySelector("#fd h3")
var page3 = document.querySelector("#page3")
value = 1


function first1(){
    if(value == 1){
        ft.style.display = "flex"
        fd.innerHTML = "close"
        fd.style.backgroundColor = "#d2cfcf57"
        page3.style.height = "140vh"
        value = 0
    }
    else{
        ft.style.display = "none"
        fd.innerHTML = "read"
        fd.style.backgroundColor = ""
        page3.style.height = "110vh"
        value = 1
    }
    ft.addEventListener("click",function(){
        ft.style.display = "none",
        fd.innerHTML = "read",
        fd.style.backgroundColor = ""
        page3.style.height = "110vh"
    })
    st.style.display = "none"
    sd.innerHTML = "read"
    sd.style.backgroundColor = ""
    tt.style.display = "none"
    td.innerHTML = "read"
    td.backgroundColor = ""
}

first.addEventListener("click",function(){
    first1()
})



var second = document.querySelector("#s2")
var st = document.querySelector("#st")
var sd = document.querySelector("#sd h3")
value = 0


function first2(){
    if(value == 0){
        st.style.display = "flex"
        sd.innerHTML = "close"
        sd.style.backgroundColor = "#d2cfcf57"
        page3.style.height = "130vh"
        value = 1
    }
    else{
        st.style.display = "none"
        sd.innerHTML = "read"
        sd.style.backgroundColor = ""
        page3.style.height = "110vh"
        value = 0
    }
    st.addEventListener("click",function(){
        st.style.display = "none",
        sd.innerHTML = "read",
        sd.style.backgroundColor = ""
        page3.style.height = "110vh"
    })
    ft.style.display = "none"
    fd.innerHTML = "read"
    fd.style.backgroundColor = ""
    tt.style.display = "none"
    td.innerHTML = "read"
    td.backgroundColor = ""
}

second.addEventListener("click",function(){
    first2()
})



var third = document.querySelector("#t3")
var tt = document.querySelector("#tt")
var td = document.querySelector("#td h3")
value = 1


function first3(){
    if(value == 1){
        tt.style.display = "flex"
        td.innerHTML = "close"
        td.style.backgroundColor = "#d2cfcf57"
        page3.style.height = "138vh"
        value = 0
    }
    else{
        tt.style.display = "none"
        td.innerHTML = "read"
        td.style.backgroundColor = ""
        page3.style.height = "110vh"
        value = 1
    }
    tt.addEventListener("click",function(){
        tt.style.display = "none",
        td.innerHTML = "read",
        td.style.backgroundColor = ""
        page3.style.height = "110vh"
    })
    ft.style.display = "none"
    fd.innerHTML = "read"
    fd.style.backgroundColor = ""
    st.style.display = "none"
    sd.innerHTML = "read"
    sd.style.backgroundColor = ""
}

third.addEventListener("click",function(){
    first3()
})
}
page3event()

function page3Gsap(){
    var tll = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            // markers:true,
            start:"top 50%",
            end:"top -30%",
            scrub:2
        }
    })
    
    tll.from("#page3-text h1",{
        y: 100,
        opacity:0,
        stagger:5,
        duration:5
    })
    
    tll.from(".review",{
        y:100,
        opacity:0,
        stagger:3,
        duration:4,
        delay:2
    })
}
page3Gsap()

function page4Gsap(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top -10%",
            scrub:2
        }
    })
    
    tl3.from("#page4 #top",{
        y:100,
        opacity:0
    })
    
    tl3.from("#page4 #bottom h3",{
        y:100,
        opacity:0
    })
}
page4Gsap()

function page5event(){
    
var text1 = document.querySelector("#right .center #center-text1")
var text2 = document.querySelector("#right .center #center-text2")
var text3 = document.querySelector("#right .center #center-text3")
var text4 = document.querySelector("#right .center #center-text4")
var text5 = document.querySelector("#right .center #center-text5")
var text6 = document.querySelector("#right .center #center-text6")
var text7 = document.querySelector("#right .center #center-text7")

var img1 = document.querySelector("#left #img1")
var img2 = document.querySelector("#left #img2")
var img3 = document.querySelector("#left #img3")
var img4 = document.querySelector("#left #img4")
var img5 = document.querySelector("#left #img5")
var img6 = document.querySelector("#left #img6")
var img7 = document.querySelector("#left #img7")

text1.addEventListener("mouseenter",function(){
    gsap.to("#img1",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text1.addEventListener("mouseleave",function(){
    gsap.to("#img1",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img1.addEventListener("mouseenter",function(){
    gsap.to("#img1",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

img1.addEventListener("mouseleave",function(){
    gsap.to("#img1",{
        y:-20,
        opacity:0,
        duration:0.5
    })
    img1.style.cursor = "pointer"
})

text2.addEventListener("mouseenter",function(){
    gsap.to("#img2",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text2.addEventListener("mouseleave",function(){
    gsap.to("#img2",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img2.addEventListener("mouseenter",function(){
    gsap.to("#img2",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

img2.addEventListener("mouseleave",function(){
    gsap.to("#img2",{
        y:-20,
        opacity:0,
        duration:0.5
    })
    img2.style.cursor = "pointer"
})

text3.addEventListener("mouseenter",function(){
    gsap.to("#img3",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text3.addEventListener("mouseleave",function(){
    gsap.to("#img3",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img3.addEventListener("mouseenter",function(){
    gsap.to("#img3",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

img3.addEventListener("mouseleave",function(){
    gsap.to("#img3",{
        y:-20,
        opacity:0,
        duration:0.5
    })
    img3.style.cursor = "pointer"
})

text4.addEventListener("mouseenter",function(){
    gsap.to("#img4",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text4.addEventListener("mouseleave",function(){
    gsap.to("#img4",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img4.addEventListener("mouseenter",function(){
    gsap.to("#img4",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

img4.addEventListener("mouseleave",function(){
    gsap.to("#img4",{
        y:-20,
        opacity:0,
        duration:0.5
    })
    img4.style.cursor = "pointer"
})

text5.addEventListener("mouseenter",function(){
    gsap.to("#img5",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text5.addEventListener("mouseleave",function(){
    gsap.to("#img5",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img5.addEventListener("mouseenter",function(){
    gsap.to("#img5",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

img5.addEventListener("mouseleave",function(){
    gsap.to("#img5",{
        y:-20,
        opacity:0,
        duration:0.5
    })
    img5.style.cursor = "pointer"
})

text6.addEventListener("mouseenter",function(){
    gsap.to("#img6",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text6.addEventListener("mouseleave",function(){
    gsap.to("#img6",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img6.addEventListener("mouseenter",function(){
    gsap.to("#img6",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

img6.addEventListener("mouseleave",function(){
    gsap.to("#img6",{
        y:-20,
        opacity:0,
        duration:0.5
    })
    img6.style.cursor = "pointer"
})

text7.addEventListener("mouseenter",function(){
    gsap.to("#img7",{
        y:20,
        opacity:1,
        duration:0.5
    })
})

text7.addEventListener("mouseleave",function(){
    gsap.to("#img7",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})

img7.addEventListener("mouseenter",function(){
    gsap.to("#img7",{
        y:20,
        opacity:1,
        duration:0.5
    })
    img7.style.cursor = "pointer"
})

img7.addEventListener("mouseleave",function(){
    gsap.to("#img7",{
        y:-20,
        opacity:0,
        duration:0.5
    })
})
}
page5event()

function page5Gsap(){
    gsap.from("#page5 #right #center1",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 50%",
            end:"top 50%",
            // scrub:3
        }
    })
    gsap.from("#page5 #right #center2",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 40%",
            end:"top 40%",
            // scrub:3
        }
    })
    gsap.from("#page5 #right #center3",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 30%",
            end:"top 30%",
            // scrub:3
        }
    })
    gsap.from("#page5 #right #center4",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 20%",
            end:"top 20%",
            // scrub:3
        }
    })
    gsap.from("#page5 #right #center5",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 10%",
            end:"top 10%",
            // scrub:3
        }
    })
    gsap.from("#page5 #right #center6",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 0%",
            end:"top 0%",
            // scrub:3
        }
    })
    gsap.from("#page5 #right #center7",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top -10%",
            end:"top -10%",
            // scrub:3
        }
    })
    
}
page5Gsap()