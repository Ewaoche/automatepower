$(document).ready(function(){
    // Hero Slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:['PREV', 'NEXT'],
        items:1,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
               
            },
            600:{
              
            },
            1000:{
              
            }
        }
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800
       
    })


});