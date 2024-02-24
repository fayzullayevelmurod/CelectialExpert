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

let show_btn = document.querySelector('.prices_page .show_btn');
let blog_tabs = document.querySelector('.prices_page .blog_tabs');

if (show_btn) {
    show_btn.onclick = () => {
        blog_tabs.classList.toggle('active');
    }

    let tabs_items = document.querySelectorAll('.prices_page .blog_tabs a');
    let text = document.querySelector('.prices_page .show_btn span')
    tabs_items.forEach(item => {
        item.onclick = () => {
            blog_tabs.classList.remove('active');
            text.textContent = item.textContent;
            tabs_items.forEach(el => {
                el.classList.remove('active');
            })
            item.classList.add('active');
        }
    })
}

let auth_modal = document.querySelector('.auth_modal')
let auth_modal_close = document.querySelector('.auth_modal__close');
let form_control = document.querySelectorAll('.auth_modal form .form_control');
let form_btn = document.querySelector('.auth_modal form button[type="submit"]');
let auth_modal_slider = new Swiper('.auth_modal .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 0,
    allowTouchMove: false,
})

if (auth_modal) {
    form_btn.onclick = e => {
        e.preventDefault();
        t = true;

        form_control.forEach(el => {
            input = el.querySelector('input');
            err_text = el.querySelector('p');

            if (input.value) {
                el.classList.remove('form_control__error');
            } else {
                el.classList.add('form_control__error');
                t = false;
            }
        })

        if (t) {
            auth_modal_slider.slideTo(1);
        }
    }

    form_control.forEach(el => {
        input = el.querySelector('input')
        input.oninput = () => {
            el.classList.remove('form_control__error')
        }
    })

    auth_modal_close.onclick = () => {
        auth_modal.classList.remove('active')
    }
}

let auth_modal_open = document.querySelectorAll('.auth_modal__open');
if (auth_modal_open.length) {
    auth_modal_open.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            auth_modal.classList.add('active');
        }
    })
}

try {
    AOS.init();
} catch (err) {
    console.log(err);
}



// services
try {
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

} catch(err) {
    console.log(err);
}
// services

// seo_workSwiper
try {
var init = false;
var swiper;
function servicesSwiper() {
    if (window.innerWidth <= 743) {
        if (!init) {
            init = true;
            swiper = new Swiper(".seo_workSwiper", {
                slidesPerView: 1.50,
                spaceBetween: 10,
                breakpoints: {
                    743: {
                        slidesPerView: 1.50,
                    }
                },
                pagination: {
                    el: ".seo_workswiper-pagination",
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

} catch(err) {
    console.log(err);
}
// seo_workSwiper

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
    var seo_servicesSwiper = new Swiper(".seo_servicesSwiper", {
        pagination: {
          el: ".seo_services-pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.25,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 2.25,
                spaceBetween: 10,
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


try {
    var process_slider = new Swiper(".process_slider", {
        navigation: {
          nextEl: ".process_slider-button-next",
          prevEl: ".process_slider-button-prev",
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