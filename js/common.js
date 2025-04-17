
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
