function HiddenNavBarNone() {
  document.querySelector("#nav3").style.opacity = "0"
}

function HiddenNavBarInitial() {
  document.querySelector("#nav3").style.opacity = "1"
}

function body() {
  document.querySelector('.body').style.overflowY = 'hidden'
}


function body1() {
  document.querySelector('.body').style.overflowY = 'auto'
}

// function topscreen() {
//   var tl = gsap.timeline()
//   tl
//     .from(".swiper-slide", {
//       opacity: 0
//     })
//     .from("#nav1", {
//       opacity: 0,
//       y: 20
//     })
//     .from("#nav2", {
//       opacity: 0,
//       y: 20
//     })
//   if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
//     tl.from(".slider", {
//       opacity: 0,
//     })
//   }
//   tl.add(function () {
//     HiddenNavBarInitial();
//     body1();
//   })
//   if (window.location.pathname == "/about.html") {
//     tl.from(".about-container", {
//       opacity: 0,
//     })
//   }
//   tl.from(".text", {
//     z: "-100",
//     opacity: 0,
//     duration: 2
//   })
// }
// topscreen();

if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
  function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#index-main"),
      smooth: true, // Enable smooth scrolling on all devices
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      }
    });

    // Each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // Tell ScrollTrigger to use these proxy methods for the "#index-main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#index-main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all!
      // So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile.
      // We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#index-main").style.transform ? "transform" : "fixed"
    });

    // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // After everything is set up, refresh ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }

  locomotive();
}




// Locomotive for about page
// if (window.location.pathname == "/MinTechBackup/about.html") {
if (window.location.pathname == "/about.html") {
  function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#about-main"),
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      }
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#about-main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#about-main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#about-main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

  }
  locomotive()
}

// if ((window.location.pathname == "/MinTechBackup/" || window.location.pathname == "/MinTechBackup/index.html")) {
if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
  function homepageslider() {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
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
}


function HiddenNavBar() {
  document.addEventListener("wheel", function (dets) {

    if (dets.offsetY > 300) {
      if (dets.deltaY > 0) {
        gsap.to("#nav3", {
          top: "0%",
          duration: 0.5,
          ease: Power4.easeNone,
        })
      }
    }
    if (dets.deltaY < 0) {
      gsap.to("#nav3", {
        top: "-10%",
        duration: 0.5,
        ease: Power4.easeNone,
      })
    }
  })
}
HiddenNavBar();

function navBarPhone() {
  const header = document.querySelector('.nav-bar-div');

  let lastScrollY = window.scrollY;
  let isScrolledDown = false;

  // Function to handle scroll events
  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 10) {
      // Scrolling down
      if (!isScrolledDown) {
        header.style.transform = `translateY(-13vw)`;
        isScrolledDown = true;
      }
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      if (isScrolledDown) {
        header.style.transform = 'translateY(0)';
        isScrolledDown = false;
      }
    }

    // Update lastScrollY
    lastScrollY = currentScrollY;
  }

  // Attach event listeners
  window.addEventListener('scroll', handleScroll);
}
navBarPhone();



function MenuAndBack() {
  var flag = 0;

  // Adding event listener to the parent element of all the menu-click elements
  document.body.addEventListener("click", function (event) {
    // Check if the clicked element has the class "menu-click"
    if (event.target.classList.contains("menu-icon")) {
      if (flag == 0) {
        var menu = document.querySelector(".menu");
        menu.style.left = "0%";
        document.querySelector('.body').style.overflowY = 'hidden';
        flag = 1;
      } else {
        var menu = document.querySelector(".menu");
        menu.style.left = "-100%";
        menu.style.top = "12vw"
        document.querySelector('.body').style.overflowY = 'auto';
        flag = 0;
      }
    }
  });
  document.querySelector(".body").addEventListener("click", function (ev) {
    if (!ev.target.classList.contains("menu") && (!ev.target.classList.contains("menu-icon"))) {
      var menu = document.querySelector(".menu")
      menu.style.left = "-100%"
      menu.style.top = "12vw"
      document.querySelector('.body').style.overflowY = 'auto'
      flag = 0;
    }
  })


}
MenuAndBack();

// if ((window.location.pathname == "/MinTechBackup/" || window.location.pathname == "/MinTechBackup/index.html")) {
if (window.location.pathname == "/" || window.location.pathname == "/index.html" || window.location.pathname == "/about.html") {
  function DetailsFunction() {
    function DetailsInterval() {
      function firstchange() {
        var a = 0
        setInterval(function () {
          a++
          if (a < 200) {
            document.querySelector("#first-change").innerHTML = a
          }
          else {
            a = 200
            document.querySelector("#first-change").innerHTML = a
          }
        }, 0)
      }
      firstchange()

      function secondchange() {
        var a = 0
        setInterval(function () {
          a++
          if (a < 10) {
            document.querySelector("#second-change").innerHTML = a
          }
          else {
            a = 10
            document.querySelector("#second-change").innerHTML = a
          }
        }, 85)
      }
      secondchange()

      function thirdchange() {
        var a = 0
        setInterval(function () {
          a++
          if (a < 85) {
            document.querySelector("#third-change").innerHTML = a
          }
          else {
            a = 85
            document.querySelector("#third-change").innerHTML = a
          }
        }, 9)
      }
      thirdchange()

      function fourthchange() {
        var a = 0
        setInterval(function () {
          a++
          if (a < 5) {
            document.querySelector("#fourth-change").innerHTML = a
          }
          else {
            a = 5
            document.querySelector("#fourth-change").innerHTML = a
          }
        }, 130)
      }
      fourthchange()
    }
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.details',
        scroller: ".main",
        start: 'top 74%',
        end: "top 30%",
      }
    });
    tl.add(function () {
      DetailsInterval()
    });
  }
  DetailsFunction();


}


async function sendmail(e) {
  e.preventDefault();
  // const email_id = document.querySelector(`.${email}`);
  const form = document.getElementById("subscribe-form")
  try {
    const passphrase = 'securePassphrase12345'; // Generated passphrase
    const key = await generateKey(passphrase);

    // Encrypted values from the encryption step
    const encryptedServiceID = 'U6HM4WvScMefqrjRs0qSGC8r64OkeFWEf4KRKls2/w=='; // Example value, replace with actual encrypted service ID
    const encryptedTemplateID = 'VKHT527QYf3zrbeEpBXGEUWa5PXauRS1AyUWia1q5Ew='; // Example value, replace with actual encrypted template ID
    const encryptedUserID = 'V6LV9U/1Laib+86gkBLzOocJONVcE4D26tm7N3eLcoGa'; // Example value, replace with actual encrypted user ID

    const decryptedServiceID = await decryptData(encryptedServiceID, key);
    const decryptedTemplateID = await decryptData(encryptedTemplateID, key);
    const decryptedUserID = await decryptData(encryptedUserID, key);

    // Initialize EmailJS with the decrypted user ID
    emailjs.init(decryptedUserID);

    // Send email using EmailJS
    emailjs.sendForm(decryptedServiceID, decryptedTemplateID, form)
      .then(function (response) {
        var notification = document.querySelector(".notification");

        // Show success notification
        notification.innerText = "Subscribe successfully!";
        notification.style.display = "initial";
        notification.classList.add("animate__fadeIn");

        // Optionally, remove the notification after a certain duration
        setTimeout(function () {
          notification.classList.remove("animate__fadeIn");
          notification.classList.add("animate__fadeOut");
        }, 3000); // Remove after 3 seconds

        // Optionally, reset the form after successful submission
        form.reset();
      })
      .catch(function (error) {
        console.error('Failed to send email:', error);

        // Show error notification
        var notification = document.getElementById("notification");
        notification.innerText = "Failed to send email. Please try again later.";
        notification.classList.add("animate__fadeIn");

        // Optionally, remove the notification after a certain duration
        setTimeout(function () {
          notification.classList.remove("animate__fadeIn");
          notification.classList.add("animate__fadeOut");
        }, 3000); // Remove after 3 seconds
      });

    return false; // Prevent default form submission
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function sendMail() {
  document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      email: document.querySelector(".email-address").value
    }

    fetch('https://sendmailapi-6hc1.onrender.com/send-mail/subscribe-send-mail', {
      method: 'post',
      credentials: 'include', // Include credentials such as cookies
      headers: {
        'Content-Type': 'application/json'
        // Add any other headers as needed
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        var notification = document.querySelector(".notification");

        // Show success notification
        notification.innerText = "Subscribe successfully!";
        notification.style.display = "initial";
        notification.classList.add("animate__fadeIn");

        // Optionally, remove the notification after a certain duration
        setTimeout(function () {
          notification.classList.remove("animate__fadeIn");
          notification.classList.add("animate__fadeOut");
        }, 3000);
        document.querySelector(".email-address").value = "";
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
  });
}
sendMail();


// if(window.location.pathname == "/MinTechBackup/about.html"){
if (window.location.pathname == "/about.html") {
  function aboutContainerScroller() {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    button1.addEventListener("click", function () {
      button1.style.backgroundColor = "#ff9900";
      button2.style.backgroundColor = "#10102E";
      button3.style.backgroundColor = "#10102E";
      container1.style.left = "0%";
      container2.style.left = "100%";
      container3.style.left = "100%";
    });

    button2.addEventListener("click", function () {
      button2.style.backgroundColor = "#ff9900";
      button1.style.backgroundColor = "#10102E";
      button3.style.backgroundColor = "#10102E";
      container2.style.left = "0%";
      container3.style.left = "100%";
      container1.style.left = "-100%";
    });

    button3.addEventListener("click", function () {
      button3.style.backgroundColor = "#ff9900";
      button1.style.backgroundColor = "#10102E";
      button2.style.backgroundColor = "#10102E";
      container3.style.left = "0%";
      container1.style.left = "-100%";
      container2.style.left = "-100%";
    });
  };
  aboutContainerScroller();
}
