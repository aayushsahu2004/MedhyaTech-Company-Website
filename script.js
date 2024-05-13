function HiddenNavBarNone(){
  document.querySelector("#nav3").style.opacity = "0"
}

function HiddenNavBarInitial(){
  document.querySelector("#nav3").style.opacity = "1"
}

function body(){
  document.getElementById('body').style.overflowY = 'hidden'
}


function body1(){
  document.getElementById('body').style.overflowY = 'auto'
}

function topscreen(){
    var tl = gsap.timeline()
tl  

    .add(function(){
      HiddenNavBarNone();
      body();
    })
    .from("#name h1",{
        opacity:0,
        y:100
    })
    .from("#name p",{
        opacity:0,
        onStart:function(){
            $('#name p').textillate({ in: { effect: 'fadeInUpBig' } });
        }
    })
    .from("#second-bottom",{
        opacity:0,
        onStart:function(){
            $('#second-bottom').textillate({ 
                in:{ effect: 'fadeInUp',
                callback:function(){
                    $('#second-bottom').textillate('out')
                } }, 
                out:{ effect: 'fadeOutUp'}});
    
        }
    })
    .from("#bottom",{
        opacity:0,
        delay:0.7,
        duration:0.7,
        onStart:function(){
            $('#bottom').textillate({ 
                in:{ effect: 'fadeInUp',
                callback:function(){
                    $('#bottom').textillate('out')
                } },
                out:{ effect: 'fadeOutUp'}});
    
        }
    })
    .from("#second-top",{
        opacity:0,
        delay:0.7,
        duration:0.7,
        onStart:function(){
            $('#second-top').textillate({ 
                in:{ effect: 'fadeInUp',
                callback:function(){
                    $('#second-top').textillate('out')
                } },
                out:{ effect: 'fadeOutUp'}});
     
        }
    })
    .from("#top",{
        opacity:0,
        delay:0.7,
        duration:0.7,
        onStart:function(){
            $('#top').textillate({ 
            in:{ effect: 'fadeInUp'}});
        }
    })
    .to("#top-screen",{
        top: "-120%",
        delay:0.7,
        duration:1.2,
        ease:"Power4.easeOut"
    })
    .from(".swiper-slide",{
      opacity:0
    })
    .from("#nav1",{
        opacity:0,
        y:20
    })
    .from("#nav2",{
        opacity:0,
        y:20
    })
    .from(".text",{
      z:"-100",
      opacity:0, 
      duration:2
    })

    .add(function(){
      HiddenNavBarInitial();
      body1();
    })
}
topscreen()

function locomotive(){
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
locomotive()

function homepageslider(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
homepageslider()

function HiddenNavBar(){
    document.addEventListener("wheel",function(dets){

        if(dets.offsetY > 300){
            if(dets.deltaY > 0){
                gsap.to("#nav3",{
                    top:"0%",
                    duration:0.5,
                    ease:Power4.easeNone, 
                })
            }
        }
        if(dets.deltaY < 0){
            gsap.to("#nav3",{
                top:"-10%",
                duration:0.5,
                ease:Power4.easeNone,
            })
        }
    })
}
HiddenNavBar()


function MenuAndBack(){
  document.querySelector("#menu-click").addEventListener("click", function(){
    var menu = document.querySelector(".menu")
    menu.style.display = "initial"
    menu.style.transform = "translateX(0%)"
    document.querySelector("#main").style.display = "none"
  })
  
  document.querySelector(".back-icon").addEventListener("click", function(){
    var menu = document.querySelector(".menu")
    menu.style.display = "none"
    menu.style.transform = "translateX(100%)"
    document.querySelector("#main").style.display = "initial"
  })
}
MenuAndBack();

function DetailsFunction(){
function DetailsInterval(){
  function firstchange(){
    var a = 0
    setInterval(function(){
      a++
      if(a<200){
        document.querySelector("#first-change").innerHTML = a
      } 
      else{
        a = 200
        document.querySelector("#first-change").innerHTML = a
      }
    }, 0)
  }
  firstchange()

  function secondchange(){
    var a = 0
    setInterval(function(){
      a++
      if(a<10){
        document.querySelector("#second-change").innerHTML = a
      } 
      else{
        a = 10
        document.querySelector("#second-change").innerHTML = a
      }
    }, 85)
  }
  secondchange()

  function thirdchange(){
    var a = 0
    setInterval(function(){
      a++
      if(a<85){
        document.querySelector("#third-change").innerHTML = a
      } 
      else{
        a = 85
        document.querySelector("#third-change").innerHTML = a
      }
    }, 9)
  }
  thirdchange()

  function fourthchange(){
    var a = 0
    setInterval(function(){
      a++
      if(a<5){
        document.querySelector("#fourth-change").innerHTML = a
      } 
      else{
        a = 5
        document.querySelector("#fourth-change").innerHTML = a
      }
    }, 130)
  }
  fourthchange()
}
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#details',
    scroller:"#main",
    start: 'top 74%',
    end:"top 74%",
  }
});
tl.add(function(){
 DetailsInterval()
});
}
DetailsFunction();
