/**
 * Created by serva on 23.03.2017.
 */
$(document).ready(function() {


    $("a.my_link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });

        return false;

    });


});


$("#change_content").click(function(){
    $("#item-list1").toggle("slow", function(){

    });
    $("#item-list2").toggle("slow", function(){


    });


});
$(document).ready(function() {


    $("a.my_link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        $("#menu, li").find($(".active").removeClass("active"));
        $(this).parent().addClass("active");
        return false;

    });


});
$(".my_link").click(function() {
    $(".navbar-collapse").removeClass("in");
    return false;

});