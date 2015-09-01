//setInterval(function(){ alert("Hello"); }, 3000);

 $( window ).load(function() {

   changephone();
   $('.movingphonebox').click(function(){
       $('.movingphonebox').animate({right: "-=500"}, 500, function(){
         if($('.movingphonebox').html() == "Android"){
           $('.movingphonebox').text("iPhone");
         }
         else{
           $('.movingphonebox').text("Android");
         }


      $('.movingphonebox').animate({right: "+=500"},500);

       }).delay(1000);
   });





 });


var changephone = function(){
}
