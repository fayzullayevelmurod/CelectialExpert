let header_burger = document.querySelector('.header_burger');
let mobile_menu = document.querySelector('.mobile_menu');
let hidden = document.querySelector('.hidden');
let header = document.querySelector('header');

header_burger.addEventListener('click', () => {
    header_burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    hidden.classList.toggle('active');
    header.classList.toggle('header_blue');
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

servicesSwiper();

window.addEventListener("resize", () => {
    servicesSwiper();
});

// services
} catch(err) {
    console.log(err);
}

try {
    // services
var init = false;
var swiper;
function casesSwiper() {
    if (window.innerWidth <= 743) {
        if (!init) {
            init = true;
            swiper = new Swiper(".casesSwiper", {
                slidesPerView: 1.50,
                spaceBetween: 10,
                breakpoints: {
                    743: {
                        slidesPerView: 1.50,
                    }
                },
                pagination: {
                    el: ".cases-pagination",
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

casesSwiper();

window.addEventListener("resize", () => {
    casesSwiper();
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
                spaceBetween: 40,
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
    var price_services = new Swiper(".workSwiper", {
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
            993: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
} catch(err) {
    console.log(err);
}