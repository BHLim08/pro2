
    $(function(){
        function topview() {
        $('.topview').stop().animate({
            marginLeft: '-100vw'
        }, 1500, function () {
            $('.topview div:first').appendTo('.topview');
            $('.topview').css({ marginLeft: 0 });
        });
    }
    setInterval(topview, 3500);})



    // //헤더컬러체인지

        $(function () {
            $('#menu2').click(function () {
                $('#menu').slideToggle();
            });
        });

        $(window).resize(function () {
            if (window.innerWidth <= 768) {
                $('#menu').hide();
            } else {
                $('#menu').show();
            }

    })
