// 서브_이야기 슬라이드

$(function () {
    // $(".prev").click(function(){
    //     $(".st_slide li:last").prependTo(".st_slide");
    //     $(".st_slide").css("margin-left","-83%");
    //     $(".st_slide").stop().animate({marginLeft:0},500);
    // });


    // $(".next").click(function () {
    //     $(".st_slide").stop().animate({"margin-left": "-83%"}, 500, function () {
    //         $(".st_slide li:first").appendTo(".st_slide");
    //         $(".st_slide").css({ marginLeft: 0 });
    //     });
    // });

    // 서브스토리 슬라이드
    let idx = 0;
    $(".prev").hide();

    $(".prev").click(function () {
        idx--;
        $(".next").show()
        if (idx < 0) {
            idx = 0;
            return;
        }


        $(".st_slide").stop().animate({ marginLeft: (-100 * idx) + '%' }, 800, function () {
            if ($(".st_slide").css('marginLeft') == "0px") {
                $(".prev").hide();
            } else { $(".prev").show() };
        });
    });

    $(".next").click(function () {
        idx++;
        $(".prev").show()
        console.log(idx)
        if (idx > $(".st_slide li").length - 1) {
            idx = $(".st_slide li").length - 1;
            return;
        }


        $(".st_slide").stop().animate({ marginLeft: (-100 * idx) + '%' }, 800, function () {
            if (idx > $(".st_slide li").length - 2) {
                $(".next").hide();
            } else { $(".next").show() };
        });
    });

    // 서브 탭 클릭
    $(".st_list li").click(function () {
        idx = $(this).index();

        $(".st_slide").stop().animate({ marginLeft: (-100 * idx) + '%' }, 1000, function () {
            if ($(".st_slide").css('marginLeft') == "0px") {
                $(".prev").hide();
            } else { $(".prev").show() };

            if (idx > $(".st_slide li").length - 2) {
                $(".next").hide();
            } else { $(".next").show() };
        });
    })

    // 스토리헤더컬러
        let currentScrollTop = 0;
        $(window).scroll(function () {
            currentScrollTop = $(window).scrollTop();
            if (currentScrollTop > 448) {
                $("header").addClass("scroll");
            } else {
                $("header").removeClass("scroll");
            }
    
            if (currentScrollTop > 580 && currentScrollTop < 3094) {
                $("header").fadeOut();
            } else {
                $("header").fadeIn();
            }
    
        });

});