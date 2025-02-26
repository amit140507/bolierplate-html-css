// CODE FOR COUNTER IN KEYFIGURE IN HOME PAGE
// $('.count').each(function () {
//     $(this).prop('keyfigure',0).animate({
//         Counter: $(this).text()
//     }, {
      
//       //chnage count up speed here
//         duration: 7000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
document.querySelectorAll('.count').forEach(function (element) {
    element.setAttribute('keyfigure', 0);
    var startCount = 0;
    var endCount = parseInt(element.textContent, 10);
    var duration = 7000; // Change count up speed here
    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var currentCount = Math.ceil((endCount - startCount) * percentage + startCount);
        element.textContent = currentCount;
        if (percentage < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
});

// FOR BACK TO TOP BUTTON IN FOOTER
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    var body = document.body;
    window.addEventListener("scroll", function() {
        if (window.scrollY > body.scrollHeight / 2) { // Adjust the value as needed
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // backToTopBtn.addEventListener("click", function() {
    //     window.scrollTo({
    //         top: 100,
    //         behavior: "smooth"
    //     });
    // });
});

// SLICK SLIDER IN SUCCESS STORIES SECTION IN HOME PAGE
// $('.slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots: true,
//     arrows: true,
//     prevArrow: $('.slick-prev'),
//     nextArrow: $('.slick-next')
// });


// CODE FOR SPLIDE SUCCESS STORIES SLIDER

// var splide = new Splide('.splide', {
//     type: 'loop',
//     perMove: 1,
//     perPage: 3,
//     focus: 0,
//     rewind: true,
//     // focus  : 'center',
//     breakpoints: {
//         640: {
//             perPage: 1,
//         },
//     },
//     classes: {
//         arrows: 'splide__arrows your-class-arrows',
//         arrow: 'splide__arrow your-class-arrow',
//         prev: 'splide__arrow--prev your-class-prev',
//         next: 'splide__arrow--next your-class-next',
//     },
//     classes: {
//         pagination: 'splide__pagination your-class-pagination',
//         page: 'splide__pagination__page your-class-page',
//     },
// });

// splide.mount();

// /* glide slider code */

new Glide('.glide',{
type: 'carousel',
  startAt: 0,
  perView: 3,
  breakpoints: {
    1024: {
        perView: 2
      },
      600: {
        perView: 1
      }
},
}).mount();

// /* glide slider code */


// SWIPER SLIDER CODE

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     slidesPerView: 2,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   },
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
// var swiper = new Swiper(".swiper", {
    // effect: "coverflow",

    // slideToClickedSlide: true,
    // loop:true,
    // centeredSlides: true,
    // slidesPerView: 3,
    // spaceBetween: 50,
	// autoplay:true,

    // coverflowEffect: {
    //   rotate: 10,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // rotate: 0,
    // stretch: 0,
    // depth: 400,
    // modifier: 1, // 2,3
    // },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     navigation: {
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             },
//   });
// SWIPER SLIDER CODE


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}