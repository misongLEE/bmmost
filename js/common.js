$(function(){

    $("#header").hover(function(){ // 헤더에 마우스를 올리면
        //$(".hd_bg").fadeIn(500); // 배경이미지가 나타난다.
        $(".hd_bg").css("left","0");
        $(".menu_txt").css('display','none'); //메뉴의 txt를 없앤다.
        $(".menu_btn").css('display','none'); //메뉴의 span을 없앤다.
        $(".menu_btn_move").css('display','block'); // 메뉴활성화버튼이 나타난다. 

    },function(){ // 헤더에 마우스를 떼면
        //$(".hd_bg").fadeOut(500); // 배경이미지가 사라진다.
        $(".hd_bg").css("left","-120px");
        $(".menu_txt").css('display','block'); //메뉴의 txt를 나타낸다..
        $(".menu_btn").css('display','block'); //메뉴의 span을 나타낸다.
        $(".menu_btn_move").css('display','none'); // 메뉴활성화버튼이 사라진다.
    });


    //speed_btn
    $(".speed_btn").click(function(){
        $(".count_wrap").addClass("on");
    });


    //x_bt
    $(".x_bt").click(function(){
        $(".count_wrap").removeClass("on");
    });
    

    //menu_btn_move
    $(".menu_btn_move").click(function(){
        $(".menu_list").addClass("on")
    });

    //close_bt
    $(".close_bt").click(function(){
        $(".menu_list").removeClass("on")
    });


});    







