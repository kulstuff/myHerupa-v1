$(document).ready(function(){
    $('.subject__menu').click(function(){
        $('#nav').show(1000);
        setTimeout(function(){
            console.log("here");
            $('#nav__varGrid__collect').show();
        },1000);
    });

    $('.nav__back').click(function(){
        $('#nav__varGrid__collect').hide();
        $('#nav').toggle(1000);
    });

    $('.nav__fiddlerLeft').mouseenter(function() {
        $('.nav__fiddlerRight__text').fadeOut().hide();
        $('.nav__fiddlerRight__head').fadeOut().hide();
        $('.nav__fiddlerLeft__head').animate({
          "marginLeft": "35%"
        });
        $('.nav__fiddlerLeft').animate({
            left: '10%'
        });
        $('.nav__fiddlerRight').animate({
            right: '-30%'
        });
        $('.nav__fiddlerRight__img').animate({
            marginLeft: "30%"
        });
        $('.nav__fiddlerLeft__img').animate({
            marginLeft: "4%"
        },function(){
            $('.nav__fiddlerLeft__text').fadeIn(200);
            $('.nav__fiddlerLeft__head').fadeIn(200);
        });
    });

    $('.nav__fiddlerRight').mouseenter(function() {
        $('.nav__fiddlerLeft__text').fadeOut().hide();
        $('.nav__fiddlerLeft__head').fadeOut().hide();
        $('.nav__fiddlerLeft').animate({
            left: '-30%'
        });
        $('.nav__fiddlerRight').animate({
            right: '10%'
        });
        $('.nav__fiddlerRight__img').animate({
            marginLeft: "80%"
        });
        $('.nav__fiddlerLeft__img').animate({
            marginLeft: "54%"
        }, function(){
            $('.nav__fiddlerRight__head').fadeIn(200);
            $('.nav__fiddlerRight__text').fadeIn(200);
        });
    });

    var amount = '';

    function scroll() {
        $('.nav__varGrid__wrapper').animate({
            scrollTop: amount
        }, 100, 'linear', function() {
            if (amount != '') {
                scroll();
            }
        });
    }

    $('.nav__varGrid__hoverUp').hover(function() {
        amount = '-=25';
        scroll();
        }, function() {
            amount = '';
    });

    $('.nav__varGrid__hoverDown').hover(function() {
        amount = '+=25';
        scroll();
        }, function() {
            amount = '';
    });
    $(".nav__back").click(function(){
        $("#nav").toggle();
    });
});
