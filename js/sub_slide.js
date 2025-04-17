    
    
    //서브메인이미치 체인지

$(function(){
    let i = 0;

    function subslide (){
        i++;
        if ( i > $(".subimg li:last").index()){ i = 0; 
        }
        $(".subimg li").eq(i).stop().fadeIn("slow");
        $(".subimg li").eq(i-1).stop().fadeOut("slow");
    };

    setInterval(subslide, 3000);
    
})

//서브헤더컬러체인지
$(document).ready(function () {
    let currentScrollTop = 0;
    $(window).scroll(function () {
        currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 580) {
            $("header").addClass("scroll");
        } else {
            $("header").removeClass("scroll");
        }
    });
});
