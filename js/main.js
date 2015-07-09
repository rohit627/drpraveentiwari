var slider = {

    init: function() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 50,
            useCSS: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            draggable: true,
            focusOnSelect: true,
        });
    }

}

$(document).ready(slider.init());
