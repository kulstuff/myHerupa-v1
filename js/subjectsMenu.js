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

    $('.nav__fiddlerLeft').hover(function() {
        $('.nav__fiddlerRight__text').fadeOut().hide();
        $('.nav__fiddlerRight__head').fadeOut();
        $('.nav__fiddlerLeft__head').fadeIn();
        $('.nav__fiddlerLeft').animate({
            left: '10%'
        });
        $('.nav__fiddlerRight').animate({
            right: '-30%'
        });
        $('.nav__fiddlerRight__img').animate({
            marginLeft: "6vw"
        });
        $('.nav__fiddlerLeft__img').animate({
            marginLeft: "1vw"
        });
            $('.nav__fiddlerLeft__text').fadeIn(200);
    });

    $('.nav__fiddlerRight').hover(function() {
        $('.nav__fiddlerLeft__text').fadeOut();
        $('.nav__fiddlerLeft__head').fadeOut();
        $('.nav__fiddlerRight__head').fadeOut();
        $('.nav__fiddlerLeft').animate({
            left: '-30%'
        });
        $('.nav__fiddlerRight').animate({
            right: '10%'
        });
        $('.nav__fiddlerRight__img').animate({
            marginLeft: "19.7vw"
        });
        $('.nav__fiddlerLeft__img').animate({
            marginLeft: "13vw"
        }, function(){
            $('.nav__fiddlerRight__head').show(200);
        });
        $('.nav__fiddlerRight__text').fadeIn(200);
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
        // $('.subject-btn').css({
        //     "transform": "rotateX(25deg)"
        // });
        amount = '+=25';
        scroll();
        }, function() {
            amount = '';
        // $('.subject-btn').css({
        //     "transform": "rotateX(0deg)"
        // });
    });
    //
    // $('.nav__varGrid__hoverUp').hover(function() {
    //     $('.nav__varGrid__wrapper').animate({
    //         ScrollTop:
    //     },4500);
    // });
    // $('.nav__varGrid__hoverDown').hover(function() {
    //     console.log($('.nav__varGrid__wrapper'));

    //     $('.nav__varGrid__wrapper').animate({
    //         transform: 'translateY(-60%)'
    //     },4500);
    //     $('.test').animate({
    //         visibility: 'hidden'
    //     });
    // });
    $(".nav__back").click(function(){
        $("#nav").toggle();
    });
});
