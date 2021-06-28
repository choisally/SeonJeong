
$(function(){
    //top버튼
    $(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $(".btntop > i").css({"opacity":"1", "pointer-events":"auto"});
    
    }else{
        $(".btntop > i").css({"opacity":"0", "pointer-events":"none"});
    }
});
    $(".btntop > i").click(function(){
        $("html").animate({scrollTop:0}, 500);
    });//top버튼 END

    //main_dot_slide
    $(".dot > li").click(function(){
        $(".dot > li").removeClass("on");
        
        $(this).addClass("on");
        var i = $(this).index();
        $(".img").stop().animate({"left":-(100*i)+"%"})
    });//main_dot_slide END
    
    //fadeIn_Out슬라이드
    $("#slide > .imgs > li").css("opacity",0);
    $("#slide > .imgs > li").first().css("opacity",1);
  var count = 0;
  setInterval(function(){
     count++;
     if(count >= 4){
         count = 0;
     }
     $("#slide > .imgs > li").animate({"opacity":0},300,function(){
         $("#slide > .imgs > li").eq(count).animate({"opacity":1},300);
     })
  },4000);




   
       
        
});   



