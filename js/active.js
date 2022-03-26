/* OwlCarousel */
$(document).ready(function(){
    $(".home_area").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        loop: true,
    });
})
$(document).ready(function(){
    $(".idea_contentwithf__p").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    });
})
$(document).ready(function(){
    $(".testmonial_area__contentwithf").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    });
})
/* SmoothScroll */
$(document).ready(function(){
    $('html').smoothScroll(1000);
});
/* SlickNav */
$(document).ready(function(){
    $(".main_header__nav").slicknav({
        "prependTo": '.main_header__nav',
        "closeOnClick": '.main_header__nav',
    });
})