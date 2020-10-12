

$(document).ready(function(){


    var counter1 = 0;
    $("#lake").click(function(){
    counter1++;
    switch(counter1){
        case 1:
            $("#lakeimg")[0].src='lakecomo.jpg';
            $("#lake .hover-content").css("display","inline"); 
            $("#lake2").css("display","block");
            break;
        case 2:
            $("#lakeimg")[0].src='lakecomo_bw.jpg';
            $("#lake .hover-content").css("display","none"); 
            $("#lake2").css("display","none");
            counter1=0;
            break;
    }});    


    var counter2 = 0;
    $("#redly").click(function(){
    counter2++;
    switch(counter2){
        case 1:
            $("#redlyimg")[0].src='redly.jpg';
            $("#redly .hover-content").css("display","inline"); 
            $("#redly2").css("display","block");
            break;
        case 2:
            $("#redlyimg")[0].src='redly_bw.jpg';
            $("#redly .hover-content").css("display","none"); 
            $("#redly2").css("display","none");
            counter2=0;
            break;
    }});


    var counter3 = 0;
    $("#gcc").click(function(){
    counter3++;
    switch(counter3){
        case 1:
            $("#gccimg")[0].src='gcc.jpg';
            $("#gcc .hover-content").css("display","inline"); 
            $("#gcc2").css("display","block");
            break;
        case 2:      
            $("#gccimg")[0].src='gcc_bw.jpg';
            $("#gcc .hover-content").css("display","none"); 
            $("#gcc2").css("display","none");
            counter3=0;
            break;
    }});


    var counter4 = 0;
    $("#sushi").click(function(){
    counter4++;
    switch(counter4){
        case 1:
            $("#sushiimg")[0].src='sushi.jpg';
            $("#sushi .hover-content").css("display","inline"); 
            $("#sushi2").css("display","block");
            break;
        case 2:
            $("#sushiimg")[0].src='sushi_bw.jpg'; 
            $("#sushi .hover-content").css("display","none"); 
            $("#sushi2").css("display","none");
            counter4=0;
            break;
    }});

});



$(function() {
  
  $(".header").on({
 "mouseover" : function() {
    $("#logo")[0].src = 'diafana.gif';
  },
 "mouseout" : function() {
    $("#logo")[0].src='diafana_bw.jpg';
  }
});
});

