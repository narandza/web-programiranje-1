$(document).ready(function () {
    //skrol animacija
    $("#navProizvodi").click(function () {
        $('html,body').animate({
            scrollTop: $('#proizvodi').offset().top - 100
        }, 1000);
    })

    //drop down menu

    $('.dropDownMenu').click(function () {
        $(this).find('ul').slideToggle(400);
    })

    //zebra
    $('.table-product tbody tr:even').css({
        backgroundColor: "#171717", color: "#f5f5f5"
    })

    $(".js-video-button").modalVideo({
        youtube: {
            controls: 0,
            nocookie: true
        }
    });

})





