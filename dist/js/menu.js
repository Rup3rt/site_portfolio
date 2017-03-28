$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
                $("header").css("padding-top","100px")

            });
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                    .addClass("default")
                    .fadeIn('fast');
                $("header").css("padding-top","0px")

            });
        }
    });//scroll
});//jQuery