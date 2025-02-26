// CODE FOR COUNTER IN HOME PAGE STEPS SECTION
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.count');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounting(entry.target); // Start counting when in view
                observer.unobserve(entry.target); // Stop observing once triggered
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    elements.forEach((el) => observer.observe(el));

    function startCounting(element) {
        let startCount = 0;
        let endCount = parseInt(element.innerText, 10);
        let duration = 2000; // Change count up speed here
        let countDifference = endCount - startCount;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let percentage = Math.min(progress / duration, 1);
            let currentCount = Math.ceil(countDifference * percentage + startCount);
            element.innerText = currentCount;
            if (percentage < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
});


// FOR BACK TO TOP BUTTON IN FOOTER
document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var clientHeight = document.documentElement.clientHeight;

      if (scrollTop > scrollHeight / 2 - clientHeight / 2) {
          backToTopBtn.style.opacity = "1";
          backToTopBtn.style.visibility = "visible";
      } else {
          backToTopBtn.style.opacity = "0";
          backToTopBtn.style.visibility = "hidden";
      }
  });

  // Smooth scrolling on click
  backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


var navtoggler = document.getElementById("navbar-toggler");
if (navtoggler) {
    navtoggler.addEventListener("click", function () {
        var navbarcollapse = document.getElementById("navbar-collapse");
        var navbartogglericon = document.getElementById("navbar-toggler-icon");
        var body = document.querySelector("body");
        var navbar = document.querySelector(".navbar");
        navbarcollapse.classList.toggle("show");
        navbartogglericon.classList.toggle("show");
        body.classList.toggle("show");
        navbar.classList.toggle("show");
    });
}


// accordion code
var acc = document.getElementsByClassName("single-accordion-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = this.querySelector('.accordion-collapse');
    // var panel = this.nextElementSibling;
    var accordionbutton = this.querySelector('.single-accordion-button'); 
    if (panel.style.display === "block") {
    accordionbutton.classList.add('collapsed');
      panel.style.display = "none";
    } else {
        accordionbutton.classList.remove('collapsed');
      panel.style.display = "block";
    }
  });
}
// accordion code

// faq page accordion

document.querySelectorAll(".accordion-trigger").forEach((el, i) => {
  const accordionTrigger = el;
  console.log("accordionTrigger", accordionTrigger)
  accordionTrigger.addEventListener("click", (e) => {
    const accordioncontent = e.target.parentElement.parentElement.querySelector(".accordion-content");
    const accordionPanelIsOpened = accordionTrigger.getAttribute("aria-expanded");
    if (accordionPanelIsOpened === "true") {
      accordionTrigger.setAttribute("aria-expanded", false);
      accordioncontent.setAttribute("aria-hidden", true);
    } else {
      accordionTrigger.setAttribute("aria-expanded", true);
      accordioncontent.setAttribute("aria-hidden", false);
    }
  });
});


// faq page accordion

// /* glide slider code */
var bulletCount = document.querySelectorAll('.glide-client-stories .glide__slide').length;
var bulletWrapper = document.getElementById('glide__bullets');
for (let index = 0; index < bulletCount; index++) {
    const button = document.createElement('button');
    button.className = 'glide__bullet slider__bullet';
    button.setAttribute("data-glide-dir", '='+index);
    bulletWrapper.appendChild(button)
}

new Glide('.glide-client-stories',{
type: 'carousel',
  startAt: 0,
  perView: 3,
  breakpoints: {
    1024: {
        perView: 2,

      },
      600: {
        perView: 1,
        peek: {
            before: 20,
            after: 20
          }
      }
},
}).mount();

// new Glide('.glide-client-testimonials',{
//   type: 'carousel',
//     startAt: 0,
//     perView: 3.5,
//     breakpoints: {
//       1024: {
//           perView: 2,
//         },
//         600: {
//           perView: 1,
//           peek: {
//               before: 0,
//               after: 60
//             }
//         }
//   },
//   }).mount();

// /* glide slider code */

// rear more and read less on client testimonials