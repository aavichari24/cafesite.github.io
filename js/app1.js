$(document).ready(function(){
    // slider 1
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    // slider 2 
    $('.slider2').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots2',
        dotsClass:'dots'
    });

    // hamberger and times 
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

});

