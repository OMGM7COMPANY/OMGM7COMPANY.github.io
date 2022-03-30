$(document).ready(function () {
    $('#pagepiling').pagepiling({
        scrollingSpeed: 800,
        loopBottom: false,
        loopTop: false,
        keyboardScrolling: true,
        sectionsColor: ['#000', '#222'],
    });

    $("#bottomIcon").click(function () {
        $('#kontakt').addClass('active'),
            $('#MainBLock').removeClass('active'),
            $('#MainBLock').css('transform', 'translate3d(0px, -100%, 0px)');
    });
});