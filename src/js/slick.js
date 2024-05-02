// Services Carousels.
$(document).ready(function(){
    $('.service-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        // centerMode: true,
        centerPadding: '60px',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '<span class="slick-prev"> <i class="fa-solid fa-chevron-left"></i> </span>',
        nextArrow: '<span class="slick-next"> <i class="fa-solid fa-chevron-right"></i> </span>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});





// Testimonial Carousels.
$(document).ready(function(){
    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '<span class="slick-prev"> <i class="fa-solid fa-chevron-left"></i> </span>',
        nextArrow: '<span class="slick-next"> <i class="fa-solid fa-chevron-right"></i> </span>',
    });
});