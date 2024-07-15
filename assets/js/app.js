const cl = console.log;

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    navText: ['<i class="fa-solid fa-square-caret-left fa-2x"></i>', '<i class="fa-solid fa-square-caret-right fa-2x"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            dots:false
        },
        1000:{
            items:5,
            nav:true,
            dots:true
        }
    }
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })