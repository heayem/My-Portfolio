$(document).ready(function(){
    //phone menu 
    $(".btn").click(function(){
        $("#menu-phone").slideToggle();
    });
     //phone menu 

     // btn show article 
    var body=$('body');
    var popup="<div class='popup'>1</div>";
 
    $(".big-text").on("click",".btn_text",function(){
        body.append(popup);
        var eThis=$(this);
        eThis.parent().find(".text-box").show();
    });

      
    body.on("click",".popup",function(){
        $(this).remove();
        $(".text-box").hide();
    });

      // btn show article 



});