(function() {

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


$("#elections").animatedModal({
    color: 'white',
    modalTarget: 'electionsModal',
    animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
});

$("#interviews").animatedModal({
    color: 'white',
    modalTarget: 'interviewsModal',
    animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
});

$("#satya").turn({
    elevation: 50,
    autoCenter: true
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
