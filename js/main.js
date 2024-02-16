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