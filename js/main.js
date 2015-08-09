(function() {

new WOW().init();
$('.main > .container > *').addClass('wow fadeInUp');

$('.shows > *').on('click', function(e) {
    e.preventDefault();
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if( scroll == 0)
    {
        new WOW().init();
    }
});

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

slider.init();


// $("#elections").animatedModal({
//     color: 'white',
//     modalTarget: 'electionsModal',
//     animatedIn: 'fadeInUp',
//     animatedOut: 'fadeOutDown'
// });

// $("#interviews").animatedModal({
//     color: 'white',
//     modalTarget: 'interviewsModal',
//     animatedIn: 'fadeInUp',
//     animatedOut: 'fadeOutDown'
// });

$("#satya").turn({
    elevation: 50,
    autoCenter: true
});

$("#menu-toggle").on('click', function() {
    //animate the image
    $('.bio').fadeIn(500).delay(50).fadeTo("fast",1);
    $('.img-cover').addClass('click');
    //disable scroll
    window.onscroll = function () { window.scrollTo(0, 0); };
});

$('.bio').on('click', function() {
    $('.bio').fadeTo("fast",0).fadeOut(700);
    $('.img-cover').removeClass('click');
    window.onscroll = function () {};
});

$('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',

    gallery: {
        enabled: true
    },
    image: {
        titleSrc: 'title'
    }
});

$('.gallery').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    draggable: true,
});

$('.slick-prev').text("<");
$('.slick-next').text(">");

// disable hover
var disableHoverOnScroll = function() {
    var body = document.body, timer;

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }

      timer = setTimeout(function(){
        body.classList.remove('disable-hover')
        console.log('yo');
      },500);
    }, false);
}

var disableCover = function() {
    var body = document.body, timer;
    var cover = document.createElement('div');
    cover.setAttribute('class','scroll-cover');

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      body.appendChild(cover);

      timer = setTimeout(function(){
        body.removeChild(cover);
      },500);
    }, false);
}

disableCover();

})();
