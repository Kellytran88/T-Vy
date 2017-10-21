$(function(){

//   $("#usa-description h3, #mexico-description h3, #carribean-description h3 ").on("click", function(){
//     $("#usa-description, #mexico-description, #carribean-description").animate({height: "400px"})
//   })

 var usaH3 = $("#usa-description h3");
 usaH3.on("click", function() {
    var usaDescription = $("#usa-description").height();
    if (usaDescription <= 60){
     $("#usa-description").animate({height: "400px"});
   }else{
     $("#usa-description").animate({height: "60px"});
   }
 });

 var mexicoH3 = $("#mexico-description h3");
 mexicoH3.on("click", function() {
    var mexicoDescription = $("#mexico-description").height();
    if (mexicoDescription <= 60){
     $("#mexico-description").animate({height: "400px"});
   }else{
     $("#mexico-description").animate({height: "60px"});
   }
 });

 var carribeanH3 = $("#carribean-description h3");
 carribeanH3.on("click", function() {
    var carribeanDescription = $("#carribean-description").height();
    if (carribeanDescription <= 60){
     $("#carribean-description").animate({height: "400px"});
   }else{
     $("#carribean-description").animate({height: "60px"});
   }
 });

});
