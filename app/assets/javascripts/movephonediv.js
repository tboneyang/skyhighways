//setInterval(function(){ putfunctionhere; }, 3000);

 var ready = function() {


   $('.movingphonebox').click(function(){
       $('.movingphonebox').animate({right: "-=500"}, 500, function(){
         if($('.movingphonebox').html() == "Android"){
           $('.movingphonebox').text("iPhone");
         }
         else{
           $('.movingphonebox').text("Android");
         }


      $('.movingphonebox').animate({right: "+=500"},500);

    }).delay(500);
   });


 };


 $(document).ready(ready);
 $(document).on('page:load', ready);
