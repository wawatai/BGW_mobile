//filter
$(function(){



    $(".vipWrap .topBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkPoint').addClass('display');
    })


})








//help
function backToPage(){
    $("header .helpPage").removeClass("display");
    $("header .helpPage:eq(0)").addClass("display");

    $(".helpInner").removeClass("display");
    $(".helpWrap").addClass("display");
}
$(function(){
    $(".helpInner li").click(function(){
        $(this).toggleClass("active");
    })

    $(".helpBody li:eq(0)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q1").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q1").addClass("display");
    })

    $(".helpBody li:eq(1)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q2").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q2").addClass("display");
    })

    $(".helpBody li:eq(2)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q3").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q3").addClass("display");
    })

    $(".helpBody li:eq(3)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q4").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q4").addClass("display");
    })

    $(".helpBody li:eq(4)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q5").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q5").addClass("display");
    })

    $(".helpBody li:eq(5)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q6").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q6").addClass("display");
    })
    
    $(".helpBody li:eq(6)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q7").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q7").addClass("display");
    })

    $(".helpBody li:eq(7)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q8").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q8").addClass("display");
    })
})



//vip
$(function(){
    $(".checkPoint button").click(function(){
        $($(this).prev().children()).toggleClass("display");
    })
})





import "./slick-1.8.1/slick/slick.min.js";
import "./adJS.js";
import "./mainJS.js";
import "./jumpWindowJS.js";