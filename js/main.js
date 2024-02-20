let header_burger = document.querySelector('.header_burger');
let mobile_menu = document.querySelector('.mobile_menu');
let hidden = document.querySelector('.hidden');
let header = document.querySelector('header');
let header_blue = document.querySelector('.header_blue');

header_burger.addEventListener('click', () => {
    header_burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    hidden.classList.toggle('active');
    header.classList.toggle('active');
})

let mobile_dropdown_btn = document.querySelector('.mobile_dropdown_btn');
let mobile_dropdown_link = document.querySelector('.mobile_dropdown_link');

mobile_dropdown_btn.addEventListener('click', () => {
    mobile_dropdown_link.classList.toggle('active')
})


try {
    // services
var init = false;
var swiper;
function servicesSwiper() {
    if (window.innerWidth <= 743) {
        if (!init) {
            init = true;
            swiper = new Swiper(".servicesSwiper", {
                slidesPerView: 1.50,
                spaceBetween: 10,
                breakpoints: {
                    743: {
                        slidesPerView: 1.50,
                    }
                },
                pagination: {
                    el: ".services-pagination",
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

// services
} catch(err) {
    console.log(err);
}

try {
    // services
var init2 = false;
var swiper2;
function casesSwiper() {
    if (window.innerWidth <= 993) {
        if (!init2) {
            init2 = true;
            swiper2 = new Swiper(".casesSwiper", {
                slidesPerView: 1.50,
                spaceBetween: 10,
                breakpoints: {
                    993: {
                        slidesPerView: 1.50,
                    }
                },
                pagination: {
                    el: ".cases-pagination",
                },
            });
        }
    } else if (init2) {
        swiper2.destroy();
        init2 = false;
    }
}

casesSwiper();
servicesSwiper();

window.addEventListener("resize", () => {
    casesSwiper();
    servicesSwiper();
});

// services
} catch(err) {
    console.log(err);
}

try {
    var price_services = new Swiper(".price_servicesSwiper", {
        pagination: {
          el: ".price_services-pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.25,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 2.25,
                spaceBetween: 20,
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });
} catch(err) {
    console.log(err);
}

try {
    var workSwiper = new Swiper(".workSwiper", {
        pagination: {
          el: ".workswiper-pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.25,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 2.25,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3.50,
                spaceBetween: 30,
            },
        },
    });
} catch(err) {
    console.log(err);
}

try {
    var partnerSwiper = new Swiper(".partnerSwiper", {
        pagination: {
          el: ".partner-pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
        },
    });
} catch(err) {
    console.log(err);
}

try {
    var articlesSwiper = new Swiper(".articlesSwiper", {
        pagination: {
          el: ".articles-pagination",
        },
        breakpoints: {
            320: {
                
                slidesPerView: 1.70,
                spaceBetween: 18,
            },
            650: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
} catch(err) {
    console.log(err);
}

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));