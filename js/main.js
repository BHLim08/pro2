//메인탑뷰슬라이드
$(function(){
    function topview() {
    $('.topview').stop().animate({
        marginLeft: '-100vw'
    }, 1500, function () {
        $('.topview div:first').appendTo('.topview');
        $('.topview').css({ marginLeft: 0 });
    });
}
setInterval(topview, 3300);})


//스크롤 헤더 체인지
$(document).ready(function () {
    let currentScrollTop = 0;
    $(window).scroll(function () {
        currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 1000) {
            $("header").addClass("scroll");
        } else {
            $("header").removeClass("scroll");
        }

        if (currentScrollTop > 2000 && currentScrollTop < 3094) {
            $("header").fadeOut();
        } else {
            $("header").fadeIn();
        }

    });
});


