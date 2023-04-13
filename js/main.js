$(document).ready(function () {

    // menu
    
    $(".navi>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".navi>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
    

    /*
    $(".navi>li").mouseover(function () {
        $(".submenu").stop().slideDown(500);
        $("#menu_bg").stop().slideDown(500);
    });
    $(".navi>li").mouseout(function () {
        $(".submenu").stop().slideUp(500);
        $("#menu_bg").stop().slideUp(500);
    });
    */
});