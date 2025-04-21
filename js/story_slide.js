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

    let page = 0;
    $(".prev").hide();

    $(".prev").click(function () {
        page--;
        $(".next").show()
        if (page < 0) {
            page = 0;
            return;
        }


        $(".st_slide").stop().animate({ marginLeft: (-100 * page) + '%' }, 800, function () {
            if ($(".st_slide").css('marginLeft') == "0px") {
                $(".prev").hide();
            } else { $(".prev").show() };
        });
    });

    $(".next").click(function () {
        page++;
        $(".prev").show()
        console.log(page)
        if (page > $(".st_slide li").length - 1) {
            page = $(".st_slide li").length - 1;
            return;
        }


        $(".st_slide").stop().animate({ marginLeft: (-100 * page) + '%' }, 800, function () {
            if (page > $(".st_slide li").length - 2) {
                $(".next").hide();
            } else { $(".next").show() };
        });
    });

    // 서브 탭 클릭
    $(".st_list li").click(function () {
        let idx = $(this).index();

        $(".st_slide").stop().animate({ marginLeft: (-100 * idx) + '%' }, 1000, function () {
            if ($(".st_slide").css('marginLeft') == "0px") {
                $(".prev").hide();
            } else { $(".prev").show() };

            if (idx > $(".st_slide li").length - 2) {
                $(".next").hide();
            } else { $(".next").show() };
        });
    })
});

